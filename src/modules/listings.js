import { addMarker } from './map'

export const LISTINGS_SUCCESS = 'LISTINGS_SUCCESS'

export default function reducer(state = [], action) {
  switch(action.type) {
    case LISTINGS_SUCCESS:
      return action.listings
    default:
      return state
  }
}

export const queryForListings = ({ county, state }) => (dispatch) => {
  county = county.replace(' County', '')
  fetch(
    `http://swingstate.herokuapp.com/api/housing?county=${county}&state=${state}`
  )
    .then((response) => response.json())
    .then((listings) => {
      dispatch(addMarker({ listings, state }))

      dispatch({
        type: LISTINGS_SUCCESS,
        listings,
      })
    })
}

export const removeListings = () => (dispatch) => {
  dispatch({
    type: LISTINGS_SUCCESS,
    listings: [],
  })
}
