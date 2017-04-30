import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Link } from 'react-router-dom';
import styles from './styles.css'

import arrow from './back-arrow.png'

import {
  Counties,
  Listings,
  Map,
} from 'components'

const BACK_URL = IS_PRODUCTION ? '/swing-state-real-estate' : '/'

class SearchPageComponent extends Component {
  render() {
    return (
      <div className={styles.background}>
        <Map />
        <a href={BACK_URL}><img src={arrow} className={styles.arrow}/></a>
        {
          this.props.listings.length > 0
            ?
              <Listings listings={this.props.listings} />
            :
              <Counties counties={this.props.counties} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  counties: state.counties,
  listings: state.listings,
})

const SearchPage = connect(mapStateToProps)(SearchPageComponent)

export default SearchPage
