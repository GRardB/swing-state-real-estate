import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import {
  queryForCounties
} from 'modules'

import styles from './styles.css';


class HomeComponent extends Component {
  render() {
    return (
      <div className={styles.container}>
        <main className={styles.page}>
          <div className={styles.content}>
            <h1 className={styles.swing}>Swing State <br />Real Estate</h1>
            <p>It’s safe to assume that Alabama will vote Republican and California will vote Democrat. But the electoral results of swing states are up in the air, giving their voters more impact.</p>
            <p>Swing State Real Estate helps you find out where you can live so your vote is most influential.</p>
          </div>
        </main>
        <form className={styles.preferencesForm} onSubmit={this.props.onSubmit}>
          <h3>What is your affiliation?</h3>
          <p><label><input type='radio' name='party' value='republican' />
           <img src="./images/republican.svg" alt=""/></label></p>
          <p><label><input type='radio' name='party' value='democrat' />
           <img src="./images/democrat.svg" alt=""/></label></p>
          <h3><label htmlFor="state">Where do you want to live?</label></h3>
          <p><select name='state' id="state" className='small-12'>
            <option value='alaska'>Alaska</option>
            <option value='arizona'>Arizona</option>
            <option value='california'>California</option>
            <option value='new york'>New York</option>
          </select></p>
          <h3>Are you looking to buy or rent?</h3>
          <p><label><input type='radio' name='transaction' value='buy' />
          Buy</label></p>
          <p><label><input type='radio' name='transaction' value='rent' />
          Rent</label></p>
          <p><button className={styles.submit} type='submit'>Submit</button></p>
        </form>
        { this.props.counties.length > 0 && <Redirect to='/search' />}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    counties: state.counties
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit(e) {
    e.preventDefault()

    const {
      party: { value: party },
      state: { value: state },
      transaction: { value: transaction },
    } = e.currentTarget

      dispatch(queryForCounties({ party, state, transaction }))
    }
  }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent)

export default Home
