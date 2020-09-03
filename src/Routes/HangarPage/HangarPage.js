import React from 'react';
import './HangarPage.css';
import HangarDisplay from '../../Components/HangarDisplay/HangarDisplay';

const HangarPage = (props) => {

  const clickNewShip = () => {
    console.log("Create Ship clicked");
    // TODO: How do I make this route to the customize page?
    const { history } = props
    history.push('/customize')
  }
    return (
      <div>
        <h1>
          {"Hello Hangar Page"}
        </h1>
        <HangarDisplay />
        <button onClick={() => clickNewShip()}>Create New Ship</button>
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