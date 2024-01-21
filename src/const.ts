export enum AppRoute {
  Main = '/',
  Login = '/login',
  Lose = '/favorites',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const STARS_COUNT = 5;
export const MAX_PERCENT_STARS_WIDTH = 100;
