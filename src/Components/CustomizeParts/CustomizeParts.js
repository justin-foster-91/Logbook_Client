import React from 'react';
import './CustomizeParts.css';

const CustomizeParts = (props) => {
  const parts = props.targetShip.ship_parts;
  const partsArr = Object.keys(props.targetShip.ship_parts);


  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  let totalCost = partsArr.reduce((accumulator, current) => {
    return accumulator + parts[current].cost;
  }, 0 );

  const handleChangeOption = (e, partKey) => {
    props.changePart(props.shipId, partKey, e.target.value)
  }

  const handleDeleteShip = () => {
    props.deleteShip(props.shipId)
  }

  return (
    <div className="customizeDisplay">
      
      <h3 class="shipName">Ship name: {props.targetShip.ship_name}</h3>
      {/* <input type="text" className="shipNameCustomize" placeholder={props.targetShip.ship_name}/><br/><br/> */}

      <div className="partSelections">
        <div className="partRows">
          <div className="selectPart selectP">
            <p>{"Ship Parts"}</p>
            <p>{"Part Type"}</p>
            <p>{"Part Choices"}</p>
            <p>{"Part Cost"}</p>
          </div>
        </div>

        {Object.keys(parts).map((key) =>       
          <div className="partRows">
            <div className="selectPart selectP" >
              <p>{capitalize(key)}</p>
              <p>{parts[key].name}</p>
              <select className="dropdown" onChange={(e) => handleChangeOption(e, key)}>
              {parts[key].options.map((option) => {
                return(
                  <option value={option.name} key={"part-" + option.name}>{option.name}</option>
                )
                  
              })}
              </select>
              <p>{parts[key].cost}</p>
            </div>
          </div>)}
      </div>

      <div className="totalCost">Total BP Cost: {totalCost}</div> 

      <div className="saveAndDelete">
        {/* <button onClick={handleSaveChange}>Save Changes</button> */}
        <button onClick={handleDeleteShip}>Delete Ship</button>
      </div>
    </div>
  );
};

export default CustomizeParts;