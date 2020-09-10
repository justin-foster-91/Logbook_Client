import React from 'react';
import './HangarPage.css';
import HangarDisplay from '../../Components/HangarDisplay/HangarDisplay';

const HangarPage = (props) => {

  const clickNewShip = () => {
    // console.log("Create Ship clicked");
    const { history } = props
    history.push('/create-ship')
  }
    return (
      <div>
        <h1>
          {"Hello Hangar Page"}
        </h1>
        <HangarDisplay />
        <button onClick={() => clickNewShip()}>Create New Ship</button>
      </div>
    );
  
}

export default HangarPage;
