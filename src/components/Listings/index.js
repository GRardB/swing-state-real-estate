import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './styles.css'

class ListingsComponent extends Component {
  render() {
    const { listings } = this.props

    return (
      <div>
        {
          listings.map((listing, index) => (
            <div key={`listing-${index}`}>
              {listing.address}
              {listing.baths}
              {listing.bedrooms}
              {listing.city}
              {listing.price}
              {listing.rel_link}
              {listing.square_ft}
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  listings: state.listings,
})

const Listings = connect(mapStateToProps)(ListingsComponent)

export default Listings
