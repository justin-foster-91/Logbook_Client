import React, { useEffect, useState } from 'react';
import './CustomizeParts.css';
import ShipApiService from '../../Services/ship-api-service';

const CustomizeParts = (props) => {
  const [ships, setShips] = useState([])

  useEffect(() => {
    ShipApiService.getShips()
      .then(ships => {
        setShips(ships);
      })
  },[])

  return (
    <div className="customizeDisplay">
      
      <label htmlFor="shipName">Ship name: </label>
      <input type="text" className="shipName" placeholder={props.targetShip.ship_name}/><br/>

      <div className="partSelections">
        {props.targetShip.ship_parts.map((part) => {
          return (
            <div className="partSelections" key={"part-" + part.part_id}>
              <div className="selectFrame selectP">
                <p>{part.frame}</p>
                <p>Drop down goes here</p>
                <p>{part.cost}</p>
              </div>
            </div>
          )
        })}

      </div>

      <div className="totalCost">Total BP Cost: </div> 
    </div>
  );
};

export default CustomizeParts;