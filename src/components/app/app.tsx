import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import NotFound from '../../pages/notfound/notfound';
import PrivateRoute from '../privateRoute/privateRoute';

import { AppRoute, AuthorizationStatus } from '../../const';
import history from '../../history';
import Header from '../header/header';


const App = (): JSX.Element => (
  <HistoryRouter history={history}>
    <Routes>
      <Route element={<Header />}>
        <Route index element={<Main/>}/>
        <Route path={`${AppRoute.Property}/:id`} element={<Property />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute restrictedFor={AuthorizationStatus.NoAuth} redirectTo={AppRoute.Login}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={
            <PrivateRoute restrictedFor={AuthorizationStatus.Auth} redirectTo={AppRoute.Main}>
              <Login />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </HistoryRouter>
);

export default App;
