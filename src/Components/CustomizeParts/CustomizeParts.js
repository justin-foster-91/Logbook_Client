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
      
      <h3 className="shipName">Ship name: {props.targetShip.ship_name}</h3>

      <div className="partSelections">
        <table>
          <tr>
            <th>{"Ship Parts"}</th>
            <th>{"Part Type"}</th>
            <th>{"Part Choices"}</th>
            <th>{"Part Cost"}</th>
          </tr>
          {Object.keys(parts).map((key) =>       
            <tr key={key + " part"}>
              <td>{capitalize(key)}</td>
              <td>{parts[key].name}</td>
              <td>
                <select className="dropdown" onChange={(e) => handleChangeOption(e, key)}>
                {parts[key].options.map((option) => {
                  return(
                    <option value={option.name} key={"part-" + option.name}>{option.name}</option>
                  )
                })}
                </select>
              </td>
              <td>{parts[key].cost}</td>
            </tr>
            )}
        </table>
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