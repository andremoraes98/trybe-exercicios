import React from 'react';
import personalImage from '../images/personal.jpg'

class About extends React.Component {
  render() {
    return (
      <>
        <h1>About</h1>
        <section className='about'>
          <div className='textAbout'>
            <h2>André Luis Oliveira Rocha de Moraes</h2>
            <p>Aspirante a desenvolvedor web full stack, fui nascido e criado em Salvador, Bahia.</p>
            <p>Das tecnologias e linguagens que aprendi na Trybe, as que mais me orgulho são essas:</p>
            <ul>
              <li>HTML;</li>
              <li>CSS;</li>
              <li>JavaScript;</li>
              <li>React;</li>
              <li>React Native;</li>
              <li>GitHub;</li>
            </ul>
            <p>Além disso, me orgulho de ser uma pessoa comunicadora, que sabe trabalhar em equipe, resolutiva e que AMA codar. <i>Amo tanto que até perco a hora, às vezes...</i></p>
          </div>
          <img src={ personalImage } alt='author-with-arms-opened' />
        </section>
      </>
    );
  };
}

export default About;