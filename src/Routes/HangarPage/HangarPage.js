import React, { useState } from 'react';
import './HangarPage.css';
import HangarDisplay from '../../Components/HangarDisplay/HangarDisplay';
import ShipApiService from '../../Services/ship-api-service';

const HangarPage = (props) => {
  const [ships, setShips] = useState([])

  const clickNewShip = () => {
    ShipApiService.createShip()
      .then(newShip => {
        const newShips = ships.slice();

        newShips.push(newShip)
        setShips(newShips)
        console.log("clickNewShip -> ships", ships)
      })
      .catch(e => console.log(e))

  }
  return (
    <div>
      <h1>
        My Personal Hangar
      </h1>
      <HangarDisplay setShips={setShips} ships={ships}/>
      <button onClick={() => clickNewShip()}>Create New Ship</button>
    </div>
  );
  
}

export default HangarPage;
