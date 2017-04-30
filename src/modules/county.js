export const CHOOSE_COUNTY = 'CHOOSE_COUNTY'

const intialState = {
  name: null,
  state: null,
}

export default function reducer(state = null, action) {
  switch(action.type) {
    case CHOOSE_COUNTY:
      return action.county
    default:
      return state
  }
}

export const chooseCounty = (county) => (dispatch) => {
  dispatch({
    type: CHOOSE_COUNTY,
    county,
  })
}
