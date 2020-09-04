import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HangarDisplay.css';
import ShipApiService from '../../Services/ship-api-service';
import CustomizePage from '../../Routes/CustomizePage/CustomizePage';
import PrivateRoute from '../Utils/PrivateRoute';
import ShipContext from '../Context/ShipContext';

const HangarDisplay = () =>  {
  const [ships, setShips] = useState([])

  useEffect(() => {
    ShipApiService.getShips()
      .then(ships => {
        setShips(ships);
      })
  },[])

  return(
      ships.map((ship) => {
        return (
          <div className="hangarDock" key={"ship-" + ship.ship_id}>
            {/* <PrivateRoute
              path={`/:${ship.ship_id}`}
              component={CustomizePage}
            /> */}
            <Link to={`/hangar/${ship.ship_id}`}>
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
