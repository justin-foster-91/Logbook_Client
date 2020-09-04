import React from 'react';
import './CustomizeParts.css';

const renderPart = (part) => {
  return (
    <div className="selectFrame selectP">
      <p>{part.frame}</p>
      <p>Drop down goes here</p>
      <p>{part.cost}</p>
    </div>
  )
}

const CustomizeParts = (props) => {
  return (
    <div className="customizeDisplay">
      <label htmlFor="shipName">Ship name: {props.ship.ship_name}</label>
      <input type="text" className="shipName" placeholder={props.ship.ship_name}/><br/>
      
      <div className="partSelections">
        {props.ship.ship_parts.map(renderPart)}
        {/* <div className="selectCore selectP">
          <p>Power Core</p>
          <p>Drop down goes here</p>
          <p>BP Cost:</p>
        </div> */}
      </div>

      <div className="totalCost">Total BP Cost: </div> 
    </div>
  );
};

export default CustomizeParts;