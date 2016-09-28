import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { authActions } from 'src/core/auth';


const Header = ({authenticated, signOut, signInWithTwitter}) => {
  return (
    <header className="header">
      <div className="g-row">
        <div className="g-col">
          <h1 className="header__title"><a href="/">Before I Die I</a></h1>

          <ul className="header__actions">
            {authenticated ? <li><a href="/" className="btn">Dashboard</a></li> : null} {authenticated ? <li><button className="btn" onClick={signOut}>Sign Out</button></li> : <li><button className="btn" onClick={signInWithTwitter} type="button">Sign In</button></li>}
          </ul>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signInWithTwitter: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired
};

export default connect(null, authActions)(Header);
