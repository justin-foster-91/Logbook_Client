import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HangarDisplay.css';
import ShipApiService from '../../Services/ship-api-service';

const HangarDisplay = (props) =>  {
  
  const setShips = props.setShips

  useEffect(() => {
    ShipApiService.getShips()
      .then(ships => {
        setShips(ships);
      })
  },[setShips])

  return(
    props.ships.map((ship) => {
      return (
        <div className="hangarDock" key={"ship-" + ship.id}>
          <Link to={`/hangar/${ship.id}`}>
            <div className="shipName">
              {ship.ship_name}
            </div>
          </Link>
        </div>
      );
    })
  )
};

export default HangarDisplay;
