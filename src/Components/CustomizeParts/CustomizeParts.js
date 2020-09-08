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

  const handleChangeOption = (e) => {
    console.log("handleChangeOption -> e", e.target.value)
  }

  const renderThrusters = (part) => {
    return (
      <div className="partSelections">
        <div className="selectPart selectP">
          <p>Thrusters</p>
          <select className="dropdown" onChange={handleChangeOption}>
          {part.options.map((option) => {
            return(
              <option value={option.name} key={"part-" + option.name}>{option.name}</option>
            )
          })}
          </select>
          <p>{part.cost}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="customizeDisplay">
      
      <label htmlFor="shipName">Ship name: </label>
      <input type="text" className="shipName" placeholder={props.targetShip.ship_name}/><br/>

      {/* <div className="partSelections"> */}
        {renderThrusters(props.targetShip.ship_parts.thrusters)}

        {/* {props.targetShip.ship_parts.map((part) => {
          return (
            <div className="partSelections" key={"part-" + part.part_id}>
              <div className="selectFrame selectP">
                <p>{part.frame}</p>
                <p>Drop down goes here</p>
                <p>{part.cost}</p>
              </div>
            </div>
          )
        })} */}

      {/* </div> */}

      <div className="totalCost">Total BP Cost: </div> 
    </div>
  );
};

export default CustomizeParts;