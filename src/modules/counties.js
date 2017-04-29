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
  const data = new FormData()
  data.append('state', state)
  data.append('transaction', transaction)

  fetch(
    `http://localhost:3000/counties?state=${state}&transaction=${transaction}`
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
