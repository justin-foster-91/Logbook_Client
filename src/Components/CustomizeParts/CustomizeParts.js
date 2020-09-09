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

  const renderCore = (part) => {
    return (
      <div className="partSelections">
        <div className="selectPart selectP">
          <p>Core</p>
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

  const renderParts = (part) => {
    return (
      <div className="partSelections">
        <div className="selectPart selectP">
          <p>{part.name}</p>
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

  const { core, thrusters } = props.targetShip.ship_parts
  console.log("CustomizeParts -> props.targetShip.ship_parts", props.targetShip.ship_parts)


  return (
    <div className="customizeDisplay">
      
      <label htmlFor="shipName">Ship name: </label>
      <input type="text" className="shipName" placeholder={props.targetShip.ship_name}/><br/>

      {/* <div className="partSelections"> */}
        {/* {renderParts(props.targetShip.ship_parts)} */}
        {renderCore(core)}
        {renderThrusters(thrusters)}

        {/* {props.targetShip.ship_parts.map((part) => {
          return (
            <div className="partSelections" key={"part-" + part.part_name}>
              <div className="selectFrame selectP">
                <p>{part.name}</p>
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