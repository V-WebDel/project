import Logo from '../logo/logo';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { memo } from 'react';

import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getFavoriteOffers } from '../../store/site-data/selectors';
import { getIsAuthorized, getUser } from '../../store/user-process/selectors';
import { logoutUser } from '../../store/action';

const Header = () => {
  const { pathname } = useLocation() as { pathname: AppRoute };
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(getIsAuthorized);
  const user = useAppSelector(getUser);
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  const handleLogoutClick = () => {
    if (isAuthorized) {
      dispatch(logoutUser());
    }
  };

  const RootClassName: Record<AppRoute, string> = {
    [AppRoute.Main]: 'page--gray page--main',
    [AppRoute.Login]: 'page--gray page--login',
    [AppRoute.Favorites]: favoriteOffers.length === 0 ? 'page--favorites-empty' : '',
    [AppRoute.Property]: '',
    [AppRoute.NotFound]: '',
  };

  return (
    <div className={`page ${RootClassName[pathname]}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                {isAuthorized && (
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoute.Favorites}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">
                        {user}
                      </span>
                      <span className="header__favorite-count">{favoriteOffers.length}</span>
                    </Link>
                  </li>)}
                {pathname !== AppRoute.Login && (
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={isAuthorized ? AppRoute.Main : AppRoute.Login} onClick={handleLogoutClick}>
                      <span className="header__signout">{isAuthorized ? 'Sign out' : 'Sign in'}</span>
                    </Link>
                  </li>)}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default memo(Header);
