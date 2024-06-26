import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import City from './city';
import { cities } from '../../const';


describe('Component: City', () => {
  it('should be rendered correctly', () => {
    const onClick = jest.fn();

    render(
      <BrowserRouter> {/* Оборачиваем компонент в BrowserRouter */}
        <City
          name={cities[0]}
          isActive
          onClick={onClick}
        />
      </BrowserRouter>
    );
    expect(screen.getByText(cities[0])).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('tabs__item--active');
  });

  it('onClick should be called when user has chosen a city', async () => {
    const onClick = jest.fn();

    render(
      <BrowserRouter> {/* Оборачиваем компонент в BrowserRouter */}
        <City
          name={cities[0]}
          isActive={false}
          onClick={onClick}
        />
      </BrowserRouter>
    );

    await userEvent.click(screen.getByRole('button'));

    expect(onClick).toBeCalledWith(cities[0]);
  });
});
