import { combineReducers } from 'redux'

import counties from './counties'
import listings from './listings.js'
import map from './map.js'
import party from './party.js'
import state from './state.js'

export * from './counties'
export * from './listings'
export * from './map'

export default combineReducers({
  counties,
  listings,
  map,
  party,
  state,
})
