import React from "react";
import { Link } from 'react-router-dom';

const Donate = () => {
  return (
    <div className="donate-div">
      <h1>Donate Now</h1>
      <div>
        <p className="donate-about">
          The scholar foundation would be not possible without the support
          of donors like you. Without your help, we would not be able to give
          children the academic futures that they desire. Thank you for your
          generosity in making their dreams come true.
        </p>
      </div>
      <div>
        <h3>Below you will find our contact information.</h3>
        <p>Checks should be made out to Scholar Foundation and sent to:</p>
        <p>
          Scholar Foundation <br></br>
          PO Box 1526 MCPO,1255 Makati<br></br>
          Metro Manila, Philippines<br></br>
        </p>
        <p>Have questions? <Link to="/faqs">Go to FAQs</Link></p>
        <p>Or contact us via email at scholarfoundation@gmail.com.</p>
      </div>
    </div>
  );
};

export default Donate;
