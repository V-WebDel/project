import {Route, BrowserRouter, Routes} from 'react-router-dom';

import type { City, Offer, Comment } from '../../types/types';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import NotFound from '../../pages/notfound/notfound';
import PrivateRoute from '../private-route/private-route';

import {AppRoute, AuthorizationStatus} from '../../const';

type AppProps = {
  city: City;
  offers: Offer[];
  reviews: Comment[];
}

function App({ city, offers, reviews }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main city={city} offers={offers} />}/>
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
