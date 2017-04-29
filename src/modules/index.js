import { combineReducers } from 'redux'

import counties from './counties'
import listings from './listings.js'
import party from './party.js'

export * from './counties'
export * from './listings'

export default combineReducers({
  counties,
  listings,
  party,
})
