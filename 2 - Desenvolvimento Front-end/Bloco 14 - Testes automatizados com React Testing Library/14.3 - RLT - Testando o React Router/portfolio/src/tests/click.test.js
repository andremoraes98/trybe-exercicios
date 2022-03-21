import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';
import userEvent from '@testing-library/user-event';

describe('Verifica se ao clicar num componente, o texto que estava renderizado é removido da tela.', () => {
  it('Verifica se quando clicado no link "About", o título da "Home" é removido.', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: /about/i});
    const homeTitle = screen.getByRole('heading', { name: /home/i, level: 1});
    userEvent.click(aboutLink);
    const aboutTitle = screen.getByRole('heading', { name: /about/i, level: 1});

    expect(homeTitle).not.toBeInTheDocument();
    expect(aboutTitle).toBeInTheDocument();
    expect(history.location.pathname).toBe('/about');
  });

  it('Verifica se quando clicado no link "Projects", o título da "Home" é removido.', () => {
    const { history } = renderWithRouter(<App />);

    const projectsLink = screen.getByRole('link', { name: /projects/i});
    const homeTitle = screen.getByRole('heading', { name: /home/i, level: 1});
    userEvent.click(projectsLink);
    const projectsTitle = screen.getByRole('heading', { name: /projects/i, level: 1});

    expect(homeTitle).not.toBeInTheDocument();
    expect(projectsTitle).toBeInTheDocument();
    expect(history.location.pathname).toBe('/projects');
  });

  it('Verifica se quando clicado no link "Contact", o título da "Home" é removidos.', () => {
    const { history } = renderWithRouter(<App />);

    const contactLink = screen.getByRole('link', { name: /contact/i});
    const homeTitle = screen.getByRole('heading', { name: /home/i, level: 1});
    userEvent.click(contactLink);
    const contactTitle = screen.getByRole('heading', { name: /contact/i, level: 1});

    expect(homeTitle).not.toBeInTheDocument();
    expect(contactTitle).toBeInTheDocument();
    expect(history.location.pathname).toBe('/contact');
  });
});