import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Counties,
  Map,
} from 'components'

class SearchPageComponent extends Component {
  render() {
    return (
      <div>
        <Map />
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
