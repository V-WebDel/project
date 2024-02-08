// import type { City, Offer } from './types';

import { cities, CityLocation} from '../const';

import {store} from '../store';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export type State = {
//   city: City;
//   offers: Offer[];
// }

export const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]]
  },
  offers: []
};
