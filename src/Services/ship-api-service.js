import TokenService from '../Services/token-service'
import config from '../config'

const ShipApiService = {
  getShips(){
    // console.log("Auth token: ", TokenService.getAuthToken());
    return fetch(`${config.API_ENDPOINT}/hangar`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })  
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  getTargetShip(shipId){
    return fetch(`${config.API_ENDPOINT}/hangar/${shipId}`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })  
    .then(res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  }
}

export default ShipApiService