import type { AxiosInstance } from 'axios';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import type { CityName, Offer, SortName } from '../types/types';
import { ApiRoute } from '../const';

export const Action = {
  SET_CITY: 'city/set',
  FETCH_OFFERS: 'offers/fetch',
  SET_SORTING: 'sorting/set'
};

export const setCity = createAction<CityName>(Action.SET_CITY);
export const setSorting = createAction<SortName>(Action.SET_SORTING);

export const fetchOffers = createAsyncThunk<Offer[], undefined, { extra: AxiosInstance }>(
  Action.FETCH_OFFERS,
  async (_, { extra: api }) => {
    const { data } = await api.get<Offer[]>(ApiRoute.Offers);

    return data;
  });
