import { memo } from 'react';
import { Link } from 'react-router-dom';

import type { Offer } from '../../types/types';

import { AppRoute } from '../../const';
import { getStarsWidth } from '../../utils';
import Bookmark from '../bookmark/bookmark';

type CardProps = Offer & {
  onMouseMove?: (id: number) => void;
  onMouseLeave?: () => void;
  place?: 'cities' | 'favorites' | 'near-places';
};

function Card({
  id,
  price,
  rating,
  title,
  isPremium,
  isFavorite,
  previewImage,
  type,
  place = 'cities',
  onMouseMove = () => void 0,
  onMouseLeave = () => void 0,
}: CardProps): JSX.Element {
  const handleMouseMove = () => {
    onMouseMove(id);
  };

  return (
    <article
      className={`${place}__place-card place-card`}
      onMouseMove={handleMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${place}__image-wrapper place-card__image-wrapper`}>
        <Link to="/">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <Bookmark id={id} isActive={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{
                width: getStarsWidth(rating),
              }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={`${AppRoute.Property}/${id}`}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default memo(Card, (prevProps, nextProps) => prevProps.isFavorite === nextProps.isFavorite);
