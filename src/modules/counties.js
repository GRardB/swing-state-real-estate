import geocoder from 'google-geocoder'

import { updateMarker } from './map'

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
    .then(normalizeCounties)
    .then((counties) => (
      counties.filter(({dems, reps}) => (
        party === 'democrat' ? dems < reps : reps < dems
      ))
    ))
    .then(sortCounties)
    .then((counties) => {

      const county = counties[0].name
      const geo = geocoder({
        key: 'AIzaSyDdENXKI_Useux6MSXqHenyxNQbe80385c'
      })
      geo.find(`${state}, USA`, (err, [ geoPlace ]) => {
        const { location: { lat, lng } } = geoPlace
        dispatch(updateMarker(lat, lng))

        dispatch({
          type: COUNTIES_SUCCESS,
          counties,
          party,
          state,
        })
      })
    })
}

const normalizeCounties = (counties) => (
  counties.map(county => (
    {
      name: county.county_name,
      dems: Math.round(parseFloat(county.per_dem) * 100),
      reps: Math.round(parseFloat(county.per_gop) * 100)
    }
  ))
)

const sortCounties = (counties) => (
  counties.sort((countyA, countyB) => {
    const maxA = Math.max(countyA.dems, countyA.reps)
    const minA = Math.min(countyA.dems, countyA.reps)

    const maxB = Math.max(countyB.dems, countyB.reps)
    const minB = Math.min(countyB.dems, countyB.reps)

    const diffA = maxA - minA
    const diffB = maxB - minB

    return diffA - diffB
  })
)
