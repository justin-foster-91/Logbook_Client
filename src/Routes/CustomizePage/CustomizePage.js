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
  },[]) 

  const changePart = (shipId, partType, partName) => {
    ShipApiService.changePart(shipId, partType, partName)
    .then(newShip => {
    // console.log("didItWork: ", newShip)
    //   setTargetShip(newShip)
    // })
  })}

  return (
    <div>
      <h1>
        Hello Customize Page  
      </h1>
      {targetShip ? <CustomizeParts targetShip={targetShip} shipId={id} changePart={changePart}/> : <div>Ship docking. Please wait.</div>}

    </div>
  );
}

export default CustomizePage;
