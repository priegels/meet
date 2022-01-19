import React from 'react';
import './WelcomeScreen.css';

import logo from './img/logo/logo.svg';

function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
  (
    <div className="WelcomeScreen">
      <h1>Welcome to</h1>
      <img src={logo} alt="meet app logo" height={200} width={200} />
      <div className="welcome-spacer"></div>
      <h4>
        Log in to see upcoming events around the world for full-stack developers
      </h4>
        <div className="button_cont" align="center">
          <div class="google-btn">
            <div class="google-icon-wrapper">
              <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
              alt="Google sign-in" />
            </div>
            <button onClick={() => { props.getAccessToken() }} rel="nofollow noopener" class="btn-text">
              Sign in with google
            </button>
          </div>
        </div> 
      <a href="https://priegels.github.io/meet/privacy.html" rel="nofollow noopener">Privacy Policy</a>
    </div>
  )
  : null
}

export default WelcomeScreen;