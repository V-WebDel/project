import type { SortName } from '../../types/types';

import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSorting } from '../../store/site-process/site-process';
import Card from '../card/card';
import Map from '../map/map';
import SortingList from '../sortingList/sortingList';
import Spinner from '../spinner/spinner';
import { getCity, getSorting } from '../../store/site-process/selectors';
import { getIsOffersLoading, selectOffers } from '../../store/site-data/selectors';
import CardsListEmpty from '../cardsListEmpty/cardsListEmpty';


const CardsList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeSorting = useAppSelector(getSorting);
  const activeCity = useAppSelector(getCity);
  const isOffersLoading = useAppSelector(getIsOffersLoading);
  const offers = useAppSelector(selectOffers);
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const isEmpty = offers.length === 0;

  const handleCardMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };

  const onSortingChange = (name: SortName) => {
    dispatch(setSorting(name));
  };

  if (isOffersLoading) {
    return <Spinner />;
  }

  return (
    <div className={`cities__places-container container${isEmpty ? ' cities__places-container page__main--index-empty' : ''}`}>
      {isEmpty ? <CardsListEmpty city={activeCity.name} /> : (
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {activeCity.name}</b>
          <SortingList onChange={onSortingChange} activeSorting={activeSorting} />
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
              <Card
                key={offer.id}
                {...offer}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                classPrefix="places"
              />
            ))}
          </div>
        </section>)}
      <div className="cities__right-section">
        {!isEmpty && <Map locations={offers.map(({ id, location }) => ({ id, ...location }))} city={activeCity} activeOffer={activeOffer} />}
      </div>
    </div>
  );
};

export default CardsList;
