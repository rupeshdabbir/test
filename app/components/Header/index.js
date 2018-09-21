import React from 'react';

import A from './A';
import Img from './Img';
import Banner from './banner.png';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <A href="http://adobe.com">
          <Img src={Banner} alt="adobe logo" />
        </A>
      </div>
    );
  }
}

export default Header;
