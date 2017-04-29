export const COUNTIES_SUCCESS = 'COUNTIES_SUCCESS'

export default function reducer(state = [], action) {
  switch(action.type) {
    case COUNTIES_SUCCESS:
      return action.counties
    default:
      return state
  }
}

export const queryForCounties = ({ party, state, transaction }) => (dispatch) => {
  fetch(
    `http://swingstaterealestate.herokuapp.com/api/results?state=${state}&transaction=${transaction}`
  )
    .then((response) => response.json())
    .then((counties) => {
      dispatch({
        type: COUNTIES_SUCCESS,
        counties,
        party,
      })
    })
}
