import React, { useEffect } from 'react';
// import AuthApiService from '../../Services/auth-api-service'
import './HangarPage.css';

const shipList = [
  {id:1, name:"Ship 1"},
  {id:2, name:"Ship 2"},
  {id:3, name:"Ship 3"},
  {id:4, name:"Ship 4"}
];


const HangarPage = () => {

  useEffect(() => {
    // AuthApiService.getShips()
    //   .then(ships => {
    //     console.log(ships);
    //   })
  },[])


    return (
      <div>
        {shipList.map((ship) => {
          return (
          <div>{ship.id}{ship.name}</div>
          )
        })}
      </div>
    );
  
}

export default HangarPage;


// const HangarPage = (props) => {
//   return (
//     <div>
//       <h1>
//         {"Hello Hangar Page"}
//       </h1>
//     </div>
//   );
// }

// HangarPage.defaultProps = {
//   history: {
//     push: () => {},
//   },
// }

// export default HangarPage;