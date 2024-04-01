// import Header from '../../components/header/header';
import CardsList from '../../components/cardsList/cardsList';
import CitiesList from '../../components/citiesList/citiesList';


const Main = (): JSX.Element => (
  <div className="page page--gray page--main">
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <CardsList />
        </div>
      </div>
    </main>
  </div>
);

export default Main;
