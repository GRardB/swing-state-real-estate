import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactMapboxGl, {
  Layer,
  Feature,
  GeoJSONLayer,
} from 'react-mapbox-gl'

import stateGeoJSON from 'data/state_geo.json'

class MapComponent extends Component {
  render() {
    const { lat, long, zoom, polygon, party } = this.props

    const fillColor = party === 'republican' ? '#58BFE6' : '#FF0000'

    return (
      <ReactMapboxGl
        style='mapbox://styles/mapbox/basic-v8'

        accessToken='pk.eyJ1IjoiZ3JhcmRiIiwiYSI6ImNqMjN1NDh4ODAwMGUzM3BjY2JkMXZ2anIifQ.pqczKVB_obiD7Hnb7ngtvw'
        center={[ long, lat ]}
        zoom={[zoom]}
        containerStyle={{ height: '100vh', float: 'left', width: '64%' }}>
        {
          polygon &&
            <GeoJSONLayer data={polygon} fillPaint={{ 'fill-color': fillColor, 'fill-opacity': 0.3 }} />
        }
        <Layer
          id='marker'
          layout={{ 'icon-image': 'marker-15' }}
          type='symbol'>
        </Layer>
      </ReactMapboxGl>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    lat: state.map.lat,
    long: state.map.long,
    party: state.party,
    polygon: state.polygon,
    zoom: state.map.zoom,
  }
}

const Map = connect(mapStateToProps)(MapComponent)

export default Map
