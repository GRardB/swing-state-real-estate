import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from './styles.css'

class ListingsComponent extends Component {
  render() {
    const { listings } = this.props

    return (
        //Code to be replaced with commented code
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
      //end of code to be replaced


    /* this code probably works but wasnt able to test because  
    No 'Access-Control-Allow-Origin' header is present on the requested resource.


      <div className={styles.container}>
        <header className={styles.pageTitle}>
            Availlable listings in South Carolina
        </header>
        {
          listings.map((listing, index) => (
            <a className = {styles.items} key={`listing-${index}`} href="{listing.rel_link}">
              <h3>{listing.price}</h3><small className={style.label}>{listing.bedrooms}bd/{listing.baths}ba</small>
              <p>{listing.square_ft}</p>
              <p><small>{listing.address},{listing.city}</small></p>
            </a>
          ))
        }
      </div>
      */
    )
  }
}

const mapStateToProps = (state) => ({
  listings: state.listings,
})

const Listings = connect(mapStateToProps)(ListingsComponent)

export default Listings
