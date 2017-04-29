import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Counties,
} from 'components'

class SearchPageComponent extends Component {
  render() {
    return <Counties counties={this.props.counties} />
  }
}

const mapStateToProps = (state, ownProps) => ({
  counties: state.counties,
})

const SearchPage = connect(mapStateToProps)(SearchPageComponent)

export default SearchPage
