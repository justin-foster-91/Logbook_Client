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
  },
  changePart(shipId, partKey, partName){
    return fetch(`${config.API_ENDPOINT}/hangar/${shipId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        partType: partKey,
        partName: partName,
        // article_id: articleId,
        // text,
      }),
    })
    .then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
    )
    // .then(res =>
    //   res = 500  
    // )
  },
  createShip(){
    return fetch(`${config.API_ENDPOINT}/hangar`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({}),
    })  
    .then(res => {
      console.log("res", res)
      return (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    })
  },
  deleteShip(shipId){
    return fetch(`${config.API_ENDPOINT}/hangar/${shipId}`, {
      method: 'DELETE',
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