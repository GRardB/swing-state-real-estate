import { COUNTIES_SUCCESS } from './counties'

export default function reducer(state = null, action) {
  switch(action.type) {
    case COUNTIES_SUCCESS:
      return action.party
    default:
      return state
  }
}
