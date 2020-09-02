import React from 'react';
import './CustomizePage.css';

const CustomizePage = (props) => {
  return (
    <div>
      <h1>
        {"Hello Customize Page"}
      </h1>
    </div>
  );
}

CustomizePage.defaultProps = {
  history: {
    push: () => {},
  },
}

export default CustomizePage;