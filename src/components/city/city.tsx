import {Link} from 'react-router-dom';
import type { CityName } from '../../types/types';

type CityProps = {
  name: CityName;
  isActive: boolean;
  onClick: (name: CityName) => void;
}

const City = ({ name, isActive, onClick }: CityProps): JSX.Element => {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <li className="locations__item" onClick={handleClick}>
      <Link className={`locations__item-link tabs__item${isActive ? ' tabs__item--active' : ''}`} to="#">
        <span>{name}</span>
      </Link>
    </li>
  );
};

export default City;
