import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'

import mapstyle from './mapstyle.json';

class MapComponent extends Component {
  render() {
    const { lat, long, zoom } = this.props

    return (
      <ReactMapboxGl
        style='mapbox://styles/mapbox/basic-v8'

        accessToken='pk.eyJ1IjoiZ3JhcmRiIiwiYSI6ImNqMjN1NDh4ODAwMGUzM3BjY2JkMXZ2anIifQ.pqczKVB_obiD7Hnb7ngtvw'
        center={[ long, lat ]}
        zoom={[zoom]}
        containerStyle={{ height: '100vh', float: 'left', width: '64%' }}>
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
    zoom: state.map.zoom,
  }
}

const Map = connect(mapStateToProps)(MapComponent)

export default Map
