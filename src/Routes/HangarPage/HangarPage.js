import './HangarPage.css';

import React, { Component } from 'react';
import AuthApiService from '../../Services/auth-api-service'

class HangarPage extends Component {

  componentDidMount() {
    // this.context.clearError()
    AuthApiService.getShips()
      .then(ships => {
        console.log(ships);
      })
      // .catch(this.context.setError)
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
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