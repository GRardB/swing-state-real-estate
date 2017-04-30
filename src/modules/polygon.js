import stateGeoJSON from 'data/state_geo.json'
import countyGeoJSON from 'data/county_geo.json'

import { CHOOSE_COUNTY } from './county'
import { COUNTIES_SUCCESS } from './counties'

console.log(stateGeoJSON)

export default function reducer(state = null, action) {
  switch(action.type) {
    case COUNTIES_SUCCESS:
      return {
        ...stateGeoJSON,
        features: stateGeoJSON.features.filter((feature) => (
          feature.properties.abbr === action.state
        ))
      }
    case CHOOSE_COUNTY: {
      const name = action.county.name.replace(' County', '')
      const features = countyGeoJSON.features.filter((feature) => (
        feature.properties.state === action.county.state
      ))

      const counties = features[0].counties.filter((county) => (
        county.name === name
      ))

      return {
        ...countyGeoJSON,
        features: counties,
      }
    }
    default:
      return state
  }
}
