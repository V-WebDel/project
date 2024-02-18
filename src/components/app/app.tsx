import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import NotFound from '../../pages/notfound/notfound';
import PrivateRoute from '../privateRoute/privateRoute';
// import city from '../../mocks/city';
// import offers from '../../mocks/offers';
// import reviews from '../../mocks/reviews';

import { AppRoute } from '../../const';
import history from '../../history';


const App = (): JSX.Element => (
  <HistoryRouter history={history}>
    <Routes>
      <Route index element={<Main/>}/>
      <Route path={AppRoute.Login} element={<Login />}/>
      <Route path={`${AppRoute.Property}/:id`} element={<Property />} />
      <Route path={AppRoute.Favorites}
        element={
          <PrivateRoute>
            <Favorites offers={[]} />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HistoryRouter>
);

export default App;
