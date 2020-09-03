import React from 'react';
import './CustomizePage.css';
import CustomizeParts from '../../Components/CustomizeParts/CustomizeParts';

const CustomizePage = (props) => {
  return (
    <div>
      <h1>
        {"Hello Customize Page"}
      </h1>
      <CustomizeParts />
    </div>
  );
}

CustomizePage.defaultProps = {
  history: {
    push: () => {},
  },
}

export default CustomizePage;