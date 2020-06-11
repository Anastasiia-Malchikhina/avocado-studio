import React from 'react';
import './Heading.scss';

const MainHeading = (props) => {
  return (
    <>
      <h2 className="main-heading">{props.children}</h2>
      <div className="separator"><span></span></div>
    </>
  );
}

export default MainHeading;