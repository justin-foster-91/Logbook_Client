import React, { useEffect, useState } from 'react';
import './CustomizePage.css';
import CustomizeParts from '../../Components/CustomizeParts/CustomizeParts';
import ShipApiService from '../../Services/ship-api-service';

const CustomizePage = (props) => {
  const [targetShip, setTargetShip] = useState(undefined)

  const { id } = props.match.params

  useEffect(() => {
    ShipApiService.getTargetShip(id)
      .then(targetShip => {
        setTargetShip(targetShip)
      })
  },[id])

  const changePart = (shipId, partType, partName) => {
    ShipApiService.changePart(shipId, partType, partName)
    .then(newShip => {
      setTargetShip(newShip)
  })}

  const deleteShip = (shipId) => {
    ShipApiService.deleteShip(shipId)
    const { history } = props
    history.push('/hangar')
  }

  return (
    <div>
      <h1>
        Ship Customizer  
      </h1>
      {targetShip ? 
      <CustomizeParts 
        targetShip={targetShip} 
        shipId={id} 
        changePart={changePart}
        deleteShip={deleteShip}
      /> : 
      <div>Ship docking. Please wait.</div>}

    </div>
  );
}

export default CustomizePage;
