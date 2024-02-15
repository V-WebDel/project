import { configureStore } from '@reduxjs/toolkit';

import { createAPI } from './api';
import { reducer } from './store/reducer';
// import { fetchOffers } from './store/action';


const api = createAPI();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});

export default store;