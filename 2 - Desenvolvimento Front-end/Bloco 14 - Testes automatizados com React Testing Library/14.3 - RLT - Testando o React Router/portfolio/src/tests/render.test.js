import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';
import userEvent from '@testing-library/user-event';

describe('Verifica se o clique em cada rota renderiza os textos esperados na tela.', () => {
  it('Verifica se o Home é renderizado', () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('heading', { name: /home/i, level: 1});
    expect(title).toBeDefined();
  });

  it('Verifica se o About é renderizado', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: /about/i});

    userEvent.click(aboutLink)

    const title = screen.getByRole('heading', { name: /about/i, level: 1});
    expect(title).toBeDefined();
  });

  it('Verifica se o Projects é renderizado', () => {
    renderWithRouter(<App />);

    const projectsLinks = screen.getByRole('link', { name: /projects/i});

    userEvent.click(projectsLinks)

    const title = screen.getByRole('heading', { name: /projects/i, level: 1});
    expect(title).toBeDefined();
  });

  it('Verifica se o Contact é renderizado', () => {
    renderWithRouter(<App />);

    const contactLink = screen.getByRole('link', { name: /contact/i});

    userEvent.click(contactLink)

    const title = screen.getByRole('heading', { name: /contact/i, level: 1});
    expect(title).toBeDefined();
  });
});