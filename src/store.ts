import { configureStore } from '@reduxjs/toolkit';

import { reducer } from './store/reducer';
import { setOffers } from './store/action';
import offers from './mocks/offers';

export const store = configureStore({reducer});

store.dispatch(setOffers(offers));


export default store;
