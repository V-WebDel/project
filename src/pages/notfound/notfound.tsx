// import Header from '../../components/header/header';
import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <div className="page page--favorites-empty">
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty" style={{textAlign: 'center'}}>
            <h1>Not Found 404</h1>
            <a href="/">Go to the home page</a>
          </section>
        </div>
      </main>
      <footer className="footer">
        <Link to="/" className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </Link>
      </footer>
    </div>);
}

export default NotFound;
