import TokenService from '../Services/token-service'
import config from '../config'

const ShipApiService = {
  getShips(){
    // console.log("Fetch here");
    console.log("Auth token: ", TokenService.getAuthToken());
    return fetch(`${config.API_ENDPOINT}/hangar`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })  
  },

}

export default ShipApiService