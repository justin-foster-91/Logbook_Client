import React from 'react';
import './CustomizeParts.css';

const CustomizeParts = () => {
  return (
    <div className="customizeDisplay">
      <label htmlFor="shipName">Ship name: </label>
      <input type="text" className="shipName" /><br/>
      
      <div className="partSelections">
        <div className="selectFrame selectP">
          <p>Base Frame</p>
          <p>Drop down goes here</p>
          <p>BP Cost:</p>
        </div>
        <div className="selectCore selectP">
          <p>Power Core</p>
          <p>Drop down goes here</p>
          <p>BP Cost:</p>
        </div>
      </div>

      <div className="totalCost">Total BP Cost: </div> 
    </div>
  );
};

export default CustomizeParts;