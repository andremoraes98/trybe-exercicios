import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import About from '../pages/About';

describe('Verifica se o component "About" é renderizado corretamente', () => {
  it('Verifica se o nome completo está sendo renderizado na tela;', () => {
    renderWithRouter(<About />);

    const fullName = screen.getByRole('heading', { name: /andré luis oliveira rocha de moraes/i, level: 2});

    expect(fullName).toBeInTheDocument();
  });

  it('Verifica se uma imagem é renderizada na tela a partir da pasta "images";', () => {
    renderWithRouter(<About />);

    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'personal.jpg');
    expect(image).toHaveAttribute('alt', 'author-with-arms-opened');
  });
});