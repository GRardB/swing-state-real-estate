import { combineReducers } from 'redux'

import counties from './counties'
import county from './county'
import listings from './listings.js'
import map from './map.js'
import party from './party.js'
import polygon from './polygon.js'
import state from './state.js'

export * from './counties'
export * from './county'
export * from './listings'
export * from './map'

export default combineReducers({
  counties,
  county,
  listings,
  map,
  party,
  polygon,
  state,
})
