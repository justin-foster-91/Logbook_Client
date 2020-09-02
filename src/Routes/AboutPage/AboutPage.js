import React from 'react';

const AboutPage = (props) => {
  return (
    <div>
      <h1>
        {"Hello About Page"}
      </h1>
    </div>
  );
}

AboutPage.defaultProps = {
    history: {
      push: () => {},
    },
  }

export default AboutPage;