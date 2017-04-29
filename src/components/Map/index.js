import React, { Component } from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'

const Map = () => (
  <ReactMapboxGl
    style='mapbox://styles/mapbox/streets-v8'
    accessToken='pk.eyJ1IjoiZ3JhcmRiIiwiYSI6ImNqMjN1NDh4ODAwMGUzM3BjY2JkMXZ2anIifQ.pqczKVB_obiD7Hnb7ngtvw'
    containerStyle={{ height: '100vh', float: 'left', width: '64%' }}>
      <Layer
        id='marker'
        layout={{ 'icon-image': 'marker-15' }}
        type='symbol'>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
      </Layer>
  </ReactMapboxGl>
)

export default Map
