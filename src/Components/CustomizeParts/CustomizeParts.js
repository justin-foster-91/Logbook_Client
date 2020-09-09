import React, { useEffect, useState } from 'react';
import './CustomizeParts.css';
import ShipApiService from '../../Services/ship-api-service';

const CustomizeParts = (props) => {
  const [ships, setShips] = useState([])

  const parts = props.targetShip.ship_parts;
  const partsArr = Object.keys(parts);

  let partsCapitalized = []
  const capitalizeParts = () => {partsArr.forEach(part => {
    partsCapitalized.push(part.charAt(0).toUpperCase() + part.slice(1));
    return partsCapitalized;
  })};
  capitalizeParts();

  // const capitalStr = partsArr[0].charAt(0).toUpperCase() + partsArr[0].slice(1);
  // console.log("CustomizeParts -> capitalStr", capitalStr)

  let i = 0;
  const addI = () => {
    i += 1;
  }

  let totalCost = 0;
  const addTotal = (partCost) => {
    totalCost += partCost;
  }

  useEffect(() => {
    ShipApiService.getShips()
      .then(ships => {
        setShips(ships);
      })
  },[]) 

  const handleChangeOption = (e) => {
    console.log("handleChangeOption -> e", e.target.value)
  }

  return (
    <div className="customizeDisplay">
      
      <label htmlFor="shipName">Ship name: </label>
      <input type="text" className="shipName" placeholder={props.targetShip.ship_name}/><br/>

      {/* <div className="partSelections"> */}
        {Object.values(parts).map((part) =>       
        <div className="partSelections">
          <div className="selectPart selectP">
            {/* {console.log("CustomizeParts -> parts", Object.keys(parts))} */}
            <p>{partsCapitalized[i]}{addI()}</p>
            <select className="dropdown" onChange={handleChangeOption}>
            {part.options.map((option) => {
              return(
                <option value={option.name} key={"part-" + option.name}>{option.name}</option>
              )
                
            })}
            </select>
            <p>{part.cost}</p>
            {addTotal(part.cost)}
          </div>
        </div>)}
      {/* </div> */}

          <div className="totalCost">Total BP Cost: {totalCost}</div> 
    </div>
  );
};

export default CustomizeParts;