import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';
import userEvent from '@testing-library/user-event';

describe('Verifica se as URLs corretas são acessadas após cada clique.', () => {
  it('Verifica se quando clicado no link "About", a aplicação é redirecionada para o path é "/about"', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: /about/i});
    userEvent.click(aboutLink);

    expect(history.location.pathname).toBe('/about');
  });

  it('Verifica se quando clicado no link "Projects", a aplicação é redirecionada para o path é "/projects"', () => {
    const { history } = renderWithRouter(<App />);

    const projectsLink = screen.getByRole('link', { name: /projects/i});
    userEvent.click(projectsLink);

    expect(history.location.pathname).toBe('/projects');
  });

  it('Verifica se quando clicado no link "Contact", a aplicação é redirecionada para o path é "/contact"', () => {
    const { history } = renderWithRouter(<App />);

    const contactLink = screen.getByRole('link', { name: /contact/i});
    userEvent.click(contactLink);

    expect(history.location.pathname).toBe('/contact');
  });
});