import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  updateCenter,
  updateZoom,
} from 'modules'

import styles from './styles.css'

class CountyComponent extends Component {
  render() {
    const { name, dems, reps } = this.props

    return (
      <button
        className={styles.display}
        data-id={name}
        onClick={this.props.onClick}>
        <h2>{name}</h2>
        <img src="democrat.png" alt="Democrats" title="Democrats" className={styles.percent_img} />
        <em>{dems}%</em>
        &nbsp; &nbsp;
        <img src="republican.png" alt="Republicans" title="Republicans" className={styles.percent_img} />
        <em>{reps}%</em>
      </button>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick(e) {
    const name = e.currentTarget.attributes['data-id'].value

    dispatch((dispatch, getState) => {
      const { state } = getState()

      dispatch(updateCenter(`${name}, ${state}, USA`))
      dispatch(updateZoom(8))
    })
  }
})

const County = connect(null, mapDispatchToProps)(CountyComponent)

class CountiesComponent extends Component {
  render() {
    const {counties, party} = this.props

    return (
      <div className={styles.counties}>
        <header className={styles.pageTitle}>
          <strong>{party}, eh?</strong> Check out the counties below. The topmost ones would be most influenced by your vote.
        </header>
        {counties.map((county, index) => <County key={`county-${index}`} {...county} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  party: state.party.charAt(0).toUpperCase() + state.party.slice(1)
})

const Counties = connect(mapStateToProps)(CountiesComponent)

export default Counties
