import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  UPDATE_CENTER,
  updateZoom,
} from 'modules'

import styles from './styles.css'
import { clearMarkers, removeListings } from 'modules'
import x from './x.png'

class ListingComponent extends Component {
  render() {
    const { listing, onHover } = this.props

    return (
      <a
        onMouseOver={onHover}
        className={styles.items}
        target='_blank'
        href={`http://trulia.com/${listing.rel_link}`}>
        <h3>{listing.price} <small className={styles.label}>{listing.bedrooms}/{listing.baths}</small></h3>
        <p>{listing.square_ft} sqft</p>
        <p><small>{listing.address}, {listing.city}</small></p>
      </a>
    )
  }
}

const mapDispatchToListingProps = (dispatch, ownProps) => ({
  onHover(e) {
    const { listing: { address } } = ownProps

    dispatch((dispatch, getState) => {
      const { map: { markers } } = getState()

      const marker = markers.find(marker => marker.address === address)

      if (marker) {
        dispatch({
          type: UPDATE_CENTER,
          lat: marker.lat,
          long: marker.long,
        })

        dispatch(updateZoom(15))
      }
    })
  }
})

const Listing = connect(null, mapDispatchToListingProps)(ListingComponent)

class ListingsComponent extends Component {
  render() {
    const { county, state, listings } = this.props

    return (
      <div className={styles.container}>
        <button className={styles.x} onClick={this.props.onClick}><img src={x} /></button>
        <header className={styles.pageTitle}>
          Available listings in {county}, {state}
        </header>
        {
          listings.map((listing, index) => <Listing key={`listing-${index}`} listing={listing} />)
        }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick(e) {
    dispatch(removeListings())
    dispatch(clearMarkers())
  }
})

const mapStateToProps = (state) => ({
  listings: state.listings,
  state: state.state,
  county: state.county.name,
})

const Listings = connect(mapStateToProps, mapDispatchToProps)(ListingsComponent)

export default Listings
