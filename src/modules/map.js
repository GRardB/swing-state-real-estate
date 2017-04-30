import geocoder from 'google-geocoder'

export const UPDATE_CENTER = 'UPDATE_CENTER'
export const UPDATE_ZOOM = 'UPDATE_ZOOM'

const initialState = {
  lat: 39.50,
  long: -98.35,
  zoom: 5,
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_CENTER:
      return {
        ...state,
        lat: action.lat,
        long: action.long,
      }
    case UPDATE_ZOOM:
      return {
        ...state,
        zoom: action.zoom,
      }
    default:
      return state
  }
}

const geo = geocoder({
  key: 'AIzaSyDdENXKI_Useux6MSXqHenyxNQbe80385c'
})

export const updateCenter = (locationName, callback = null) => (dispatch) => {
  geo.find(locationName, (err, [ geoPlace ]) => {
    const { location: { lat, lng } } = geoPlace

    dispatch({
      type: UPDATE_CENTER,
      lat,
      long: lng,
    })

    if (callback) callback()
  })
}

export const updateZoom = (level) => (dispatch) => {
  dispatch({
    type: UPDATE_ZOOM,
    zoom: level,
  })
}
