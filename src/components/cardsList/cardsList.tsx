import { useState } from 'react';

import { useAppSelector } from '../../hooks/redux';

import Card from '../card/card';
import Map from '../map/map';

const CardsList = (): JSX.Element => {
  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === state.city.name));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleMouseLeave = () => {
    setActiveOffer(null);
  };

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {activeCity.name}</b>
        ...
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => (
            <Card
              key={offer.id}
              {...offer}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map locations={offers.map((offer) => offer.location)} city={activeCity} />
      </div>
    </>
  );
};

export default CardsList;
