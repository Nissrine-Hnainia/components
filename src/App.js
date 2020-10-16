import React, {Component} from 'react';
import './App.css';
import background from './autumn-background.jpg';
import FullName from './Component/Profile/FullName.js';
import Introduction from './Component/Profile/Introduction.js';
import Address from './Component/Profile/Address.js';
import facebook from './facebook-logo.png';
import researchgate from './researchgate logo.png';
import github from './github-logo.png';
import youtube from './youtube-logo.png';
import ProfilPhoto from "./Component/Profile/ProfilPhoto.js";

const App = () => (
    <div className="container">
      <div className="card"> 
        <div className='card-background'>
          <img className ="background-image" src={background} alt="Mountain background photo" />        
        </div>
        <br/>
        <div className="myName">
          <FullName/>
        </div>
        <br/>
        <div className="card-intro">
          <Introduction/>
        </div>
        <div className="myAddress">
          <Address/>
        </div>
        <div className="social-media">
          <a href="#facebook">
            <img className="fb-logo" src={facebook} alt="facebook logo"/>
          </a>
          <a href="#researchgate">
            <img className="rsgate-logo" src={researchgate} alt="researchgate logo"/>
          </a>
          <a href="#github">
            <img className="github-logo" src={github} alt="github logo"/>
          </a>
          <a href="#youtube">
            <img className="ytube-logo" src={youtube} alt="youtube logo"/>
          </a>
        </div>
        <div>
          <ProfilPhoto/>
        </div>
        <div className="square-rotator"></div>
      </div>
    </div>
);

export default App;
