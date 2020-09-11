import React, { useEffect, useState } from 'react';
import './HangarPage.css';
import HangarDisplay from '../../Components/HangarDisplay/HangarDisplay';
import ShipApiService from '../../Services/ship-api-service';

const HangarPage = (props) => {
  const [ships, setShips] = useState([])

  const clickNewShip = () => {
    ShipApiService.createShip()
      .then(newShip => {
        console.log("clickNewShip -> newShip", newShip)
        console.log("clickNewShip -> ships", ships)
        ships.push(newShip)
        console.log("clickNewShip -> newShip", newShip)
        console.log("clickNewShip -> ships", ships)
        setShips(ships)
      })
      .catch(e => console.log(e))
  }
  return (
    <div>
      <h1>
        {"Hello Hangar Page"}
      </h1>
      <HangarDisplay setShips={setShips} ships={ships}/>
      <button onClick={() => clickNewShip()}>Create New Ship</button>
    </div>
  );
  
}

export default HangarPage;
