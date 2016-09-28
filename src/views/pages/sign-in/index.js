import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { authActions } from 'src/core/auth';

export function SignIn({signInWithTwitter}) {
  return (
    <div className="g-row sign-in">
      <div className="g-col">
        <h1 className="sign-in__heading">Sign In</h1>
        <button className="btn sign-in__button" onClick={signInWithTwitter} type="button">Twitter</button>
      </div>
    </div>
  );
}

SignIn.propTypes = {
  signInWithTwitter: PropTypes.func.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

export default connect(null, authActions)(SignIn);
