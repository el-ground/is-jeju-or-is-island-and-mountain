import * as keyZipCodes from './zip-codes.js'

// construct dictionary from ./zip-code.js Array<string> data
const dict = {}
keyZipCodes.data.forEach(zipCode => { 
    dict[zipCode] = 1
})

// Jeju zipcode == 63XXX
export function isJeju(zipCode:string) {
    return parseInt(zipCode) >= 63000
}

// Zipcode 63000 63001 추자도
// Zipcode 63365 우도
export function isIslandAndMountain(zipCode:string){
    return ['63000','63001','63365'].includes(zipCode) || (parseInt(zipCode) < 63000 && !!dict[zipCode])
}
