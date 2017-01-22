import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="g-row">
        <div className="g-col">
          <div className="footer__copyright">
            <p>&copy;2017 BIDI / By <a href="http://erictherobot.com">Eric David Smith</a></p>
          </div>
          <div className="footer__links">
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="mailto:erictherobot@gmail.com">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
