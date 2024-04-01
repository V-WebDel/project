import type { FormEvent, MouseEvent } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import type { CityName, UserAuth } from '../../types/types';
import { VALID_PASSWORD_REGEXP, INVALID_PASSWORD_MESSAGE, AppRoute, cities } from '../../const';
import { setCity } from '../../store/site-process/site-process';

import { useAppDispatch } from '../../hooks/redux';
import { getRandomElement } from '../../utils';
import { loginUser } from '../../store/action';
// import Logo from '../../components/logo/logo';

const Login = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);
    const data: UserAuth = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    if (!data.password.match(VALID_PASSWORD_REGEXP)) {
      toast.warn(INVALID_PASSWORD_MESSAGE);
      return;
    }

    dispatch(loginUser(data));
  };

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const cityName = e.currentTarget.textContent as CityName;
    dispatch(setCity(cityName));
  };

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden" htmlFor="email">Email</label>
              <input
                className="login__input form__input"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden" htmlFor="password">Password</label>
              <input
                className="login__input form__input"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button
              className="login__submit form__submit button"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" onClick={handleLinkClick} to={AppRoute.Main}>
              <span>{getRandomElement<CityName>(cities)}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
