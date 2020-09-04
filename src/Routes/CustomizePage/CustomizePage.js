import React, { Component } from 'react';
import './CustomizePage.css';
import CustomizeParts from '../../Components/CustomizeParts/CustomizeParts';
import ShipApiService from '../../Services/ship-api-service';


class CustomizePage extends Component {
  state = {ship: undefined}

  componentDidMount() {
    console.log(this.props.ships);
    ShipApiService.getShip(this.props.match.params.id)
    .then(ship => {
      this.setState({
        ship: ship
      })
      console.log(ship);
    })

  }

  render() {
    return (
      <div>
        <h1>
          {"Hello Customize Page " + this.props.match.params.id}
        </h1>
        {this.state.ship ? <CustomizeParts ship={this.state.ship}/> : <div>Waiting for ship</div>}

      </div>
    );
  }
}

export default CustomizePage;

// const CustomizePage = (props) => {

//   return (
//     <div>

//     </div>
//   );
// }

// CustomizePage.defaultProps = {
//   history: {
//     push: () => {},
//   },
// }

// export default CustomizePage;