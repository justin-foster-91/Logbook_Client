import React, { useEffect } from 'react';
import ShipApiService from '../../Services/ship-api-service';
import './HangarDisplay.css';

const shipList = [
  {id:1, name:"Ship 1"},
  {id:2, name:"Ship 2"},
  {id:3, name:"Ship 3"},
  {id:4, name:"Ship 4"}
];

const HangarDisplay = (props) => {

  useEffect(() => {
    ShipApiService.getShips()
      .then(ships => {
        console.log(ships);
      })
  },[])
  return(
    shipList.map((ship) => {
      return (
        <div className="hangarRoom">
          <div className="shipId">
            {ship.id}
          </div>
          <div className="shipName">
            {ship.name}
          </div>
        </div>
      );
    })
  )
};

export default HangarDisplay;