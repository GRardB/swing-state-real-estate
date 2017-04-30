import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'

class MapComponent extends Component {
  render() {
    const { lat, long } = this.props

    return (
      <ReactMapboxGl
        style='mapbox://styles/mapbox/streets-v8'
        accessToken='pk.eyJ1IjoiZ3JhcmRiIiwiYSI6ImNqMjN1NDh4ODAwMGUzM3BjY2JkMXZ2anIifQ.pqczKVB_obiD7Hnb7ngtvw'
        center={[ long, lat ]}
        zoom={[5]}
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
  }
}

const Map = connect(mapStateToProps)(MapComponent)

export default Map
