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
  getShip(ship_id){
    return fetch(`${config.API_ENDPOINT}/hangar/${ship_id}`, {
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