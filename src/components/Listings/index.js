import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from './styles.css'
import { removeListings } from 'modules'
import x from './x.png'

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
          listings.map((listing, index) => (
            <a
              className={styles.items}
              key={`listing-${index}`}
              target='_blank'
              href={`http://trulia.com/${listing.rel_link}`}>
              <h3>{listing.price}</h3><small className={styles.label}>{listing.bedrooms}/{listing.baths}</small>
              <p>{listing.square_ft} sqft</p>
              <p><small>{listing.address}, {listing.city}</small></p>
            </a>
          ))
        }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick(e) {
    dispatch(removeListings())
  }
})

const mapStateToProps = (state) => ({
  listings: state.listings,
  state: state.state,
  county: state.county.name,
})

const Listings = connect(mapStateToProps, mapDispatchToProps)(ListingsComponent)

export default Listings
