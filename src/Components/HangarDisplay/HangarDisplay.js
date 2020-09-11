import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HangarDisplay.css';
import ShipApiService from '../../Services/ship-api-service';

const HangarDisplay = (props) =>  {
  // const [ships, setShips] = useState([])

  useEffect(() => {
    ShipApiService.getShips()
      .then(ships => {
        props.setShips(ships);
      })
  },[])

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
