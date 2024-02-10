import {Route, BrowserRouter, Routes} from 'react-router-dom';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import NotFound from '../../pages/notfound/notfound';
import PrivateRoute from '../privateRoute/privateRoute';
import city from '../../mocks/city';
import offers from '../../mocks/offers';
import reviews from '../../mocks/reviews';

import {AppRoute, AuthorizationStatus} from '../../const';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main/>}/>
        <Route path={AppRoute.Login} element={<Login />}/>
        <Route path={`${AppRoute.Room}/:id`} element={<Property city={city} nearbyOffers={offers} reviews={reviews} />} />
        <Route path={AppRoute.Lose}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites offers={offers} />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
