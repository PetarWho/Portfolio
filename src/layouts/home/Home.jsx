import React from 'react';
import technologies from './technologies';
import './items.scss';

function Home() {

  return (
    <>
      <div className='home-main'>
        <div className='wrap-box'>
          <h1 className='home-header'>Peter Penev</h1>
          <div className='title'>
            <span style={{ '--i': 1 }}>F</span>
            <span style={{ '--i': 2 }}>u</span>
            <span style={{ '--i': 3 }}>l</span>
            <span style={{ '--i': 4 }}>l</span>
            <span style={{ '--i': 5 }}>-</span>
            <span style={{ '--i': 6 }}>S</span>
            <span style={{ '--i': 7 }}>t</span>
            <span style={{ '--i': 8 }}>a</span>
            <span style={{ '--i': 9 }}>c</span>
            <span style={{ '--i': 10 }}>k</span>
            <span style={{ '--i': 11 }}>&nbsp;</span>
            <span style={{ '--i': 11 }}>D</span>
            <span style={{ '--i': 12 }}>e</span>
            <span style={{ '--i': 13 }}>v</span>
            <span style={{ '--i': 14 }}>e</span>
            <span style={{ '--i': 15 }}>l</span>
            <span style={{ '--i': 16 }}>o</span>
            <span style={{ '--i': 17 }}>p</span>
            <span style={{ '--i': 18 }}>e</span>
            <span style={{ '--i': 19 }}>r</span>
          </div>
          <div className='orbit-container'>
            <div className="slider">
              <p className='home-text'>Technologies</p>
              <div className="slide-track">
                {technologies.map((tech, index) => (
                  <div className="slide">
                    <img src={tech.image} width="50" alt={tech.name} />
                  </div>
                ))}
                {technologies.map((tech, index) => (
                  <div className="slide">
                    <img src={tech.image} width="50" alt={tech.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='explore-wrap'>
            <a className='btn explore' href='/projects'><span>Explore?</span>
              <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
              </svg></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
