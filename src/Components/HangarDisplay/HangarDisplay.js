import React, { useEffect, useState } from 'react';
import ShipApiService from '../../Services/ship-api-service';
import './HangarDisplay.css';

const HangarDisplay = () =>  {
  const [ships, setShips] = useState([])

  useEffect(() => {
    ShipApiService.getShips()
      .then(ships => {
        console.log("Inside getShips");
        console.log(ships);
        setShips(ships);
      })
  },[])
  // state = { ships: []}

  // componentDidMount() {
  //   ShipApiService.getShips()
  //     .then(ships => {
  //       console.log("Inside getShips");
  //       console.log(ships);
  //       this.setState({ships: ships})
  //     })
  // }


  return(
    ships.map((ship) => {
      return (
        <div className="hangarRoom" key={"ship-" + ship.ship_id}>
          <div className="shipId">
            {ship.ship_id}
          </div>
          <div className="shipName">
            {ship.ship_name}
          </div>
        </div>
      );
    })
  )
  
};

export default HangarDisplay;
