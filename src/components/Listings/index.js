import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from './styles.css'

class ListingsComponent extends Component {
  render() {
    const { county, state, listings } = this.props

    return (
      <div className={styles.container}>
        <header className={styles.pageTitle}>
          Make a difference in <strong>{county}, {state}</strong>
        </header>
        {
          listings.map((listing, index) => (
            <a
              className={styles.items}
              key={`listing-${index}`}
              target='_blank'
              href={`http://trulia.com/${listing.rel_link}`}>
              <h3>{listing.price} <small className={styles.label}>{listing.bedrooms}/{listing.baths}</small></h3>
              <p>{listing.square_ft} sqft</p>
              <p><small>{listing.address}, {listing.city}</small></p>
            </a>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  listings: state.listings,
  state: state.state,
  county: state.county.name,
})

const Listings = connect(mapStateToProps)(ListingsComponent)

export default Listings
