import { zipcodes } from '#src/data/zipcodes.js'

// 63XXX === Jeju
export function isJeju(zipCode: string): boolean {
  return Number(zipCode) >= 63000
}

export function isIslandAndMountain(zipcode: string): boolean {
  return zipcode in zipcodes
}
