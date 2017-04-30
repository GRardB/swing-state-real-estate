import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactMapboxGl, {
  Layer,
  Feature,
  Marker,
  GeoJSONLayer,
} from 'react-mapbox-gl'

import homeMarker from './home-15.svg'

class MapComponent extends Component {
  render() {
    const { lat, long, markers, zoom, polygon, party } = this.props

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
        {
          markers.length > 0 && markers.map(({ lat, long }, index) => (
            <Marker coordinates={[ long, lat ]} anchor='center' key={`marker-${index}`}>
              <img src={homeMarker} />
            </Marker>
          ))
        }
      </ReactMapboxGl>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    lat: state.map.lat,
    long: state.map.long,
    markers: state.map.markers,
    party: state.party,
    polygon: state.polygon,
    zoom: state.map.zoom,
  }
}

const Map = connect(mapStateToProps)(MapComponent)

export default Map
