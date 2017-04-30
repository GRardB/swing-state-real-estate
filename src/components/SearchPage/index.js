import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Link } from 'react-router-dom';
import styles from './styles.css'

import arrow from './back-arrow.png'

import {
  Counties,
  Map,
} from 'components'

class SearchPageComponent extends Component {
  render() {
    return (
      <div className={styles.background}>
        <Map />
        <a href="/"><img src={arrow} className={styles.arrow}/></a>
        <Counties counties={this.props.counties} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  counties: state.counties,
})

const SearchPage = connect(mapStateToProps)(SearchPageComponent)

export default SearchPage
