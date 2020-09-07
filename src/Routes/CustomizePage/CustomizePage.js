import React, { useEffect, useState } from 'react';
import './CustomizePage.css';
import CustomizeParts from '../../Components/CustomizeParts/CustomizeParts';
import ShipApiService from '../../Services/ship-api-service';

const CustomizePage = (props) => {
  const [targetShip, setTargetShip] = useState(undefined)

  // props.match.params.id
  useEffect(() => {
    ShipApiService.getTargetShip()
      .then(targetShip => {
        setTargetShip(targetShip)
      })
  },[]) 

  return (
    <div>
      <h1>
        Hello Customize Page  
      </h1>
      {targetShip ? <CustomizeParts targetShip={targetShip}/> : <div>Ship docking. Please wait.</div>}

    </div>
  );
}

export default CustomizePage;
