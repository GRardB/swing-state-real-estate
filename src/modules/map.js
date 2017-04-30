export const UPDATE_MARKER = 'UPDATE_MARKER'

const initialState = {
  lat: 39.50,
  long: -98.35,
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKER:
      return {
        lat: action.lat,
        long: action.long,
      }
    default:
      return state
  }
}

export const updateMarker = (lat, long) => (dispatch) => {
  dispatch({
    type: UPDATE_MARKER,
    lat,
    long,
  })
}
