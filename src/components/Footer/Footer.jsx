import '../../App.css';
import React from 'react';
import FooterMiddle from './FooterMiddle';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

function Footer() {
  return (
    <div className="footer">
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </div>
  );
}

export default Footer;
