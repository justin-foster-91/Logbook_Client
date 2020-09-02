import React from 'react';
import './HangarPage.css';

const HangarPage = (props) => {
  return (
    <div>
      <h1>
        {"Hello Hangar Page"}
      </h1>
    </div>
  );
}

HangarPage.defaultProps = {
  history: {
    push: () => {},
  },
}

export default HangarPage;