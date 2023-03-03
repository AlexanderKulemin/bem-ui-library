import React from 'react';
import Page from '../components/Page/Page';

import img1 from './icons/1.svg';
import img2 from './icons/2.svg';
import imgHeart from './icons/heart.svg';
import './HomePage.scss';

export const HomePage = () => (
  <Page type="home">
    <section className="welcome">
      <header className="welcome__header">
        <h1 className="welcome__title">bemLib</h1>
        <p className="welcome__lead">Sharp Developers Component Library</p>
      </header>

      <div className="welcome__content">
        <p>It’s library components that help to start a new project faster, using<br/>
          an experience of past projects.</p>

        <h2 className="welcome__sub-title">Principles</h2>

        <div className="welcome-row">
          <div className="welcome-row__item">
            <img className="welcome-row__image" src={img1} alt="bem-lib"/>
            <p>The basis is the right user experience and user-friendly interface.</p>
          </div>
          <div className="welcome-row__item">
            <img className="welcome-row__image" src={img2} alt="bem-lib"/>
            <p>Built on BEM-methodology and React JS.</p>
          </div>
        </div>
      </div>

      <footer className="welcome__footer">
        <p>
          Created with <img src={imgHeart} alt="heart icon"/> in <a href="http://sharp-dev.net">Sharp Dev</a>.
        </p>
      </footer>
    </section>
  </Page>
);
