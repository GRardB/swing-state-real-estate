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
  fetch(
    `http://swingst.herokuapp.com/api/housing?county=${county}&state=${state}`
  )
    .then((response) => response.json())
    .then((listings) => {
      dispatch({
        type: LISTINGS_SUCCESS,
        listings,
      })
    })
}

