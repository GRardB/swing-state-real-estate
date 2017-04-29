import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import {
  queryForCounties
} from 'modules'

import styles from './styles.css';
import republican from './republican.png';
import democrat from './democrat.png';


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
          <p><input type='radio' name='party' value='republican' id="partyRepublican" />
          <label className={styles.radioButton} htmlFor="partyRepublican">
           <img src={republican} alt="" className={styles.partyIcon}/>
           <span>I’m a staunch
           <strong>Republican</strong>
           </span></label></p>
          <p><input type='radio' name='party' value='democrat' id="partyDemocrat" />
          <label className={styles.radioButton} htmlFor="partyDemocrat">
           <img src={democrat} alt="" className={styles.partyIcon}/>
           <span>I’m a proud
           <strong>Democrat</strong>
           </span></label></p>
          <h3><label htmlFor="state">Where do you want to live?</label></h3>
          <p><select name='state' id="state" className='small-12'>
            <option value='alaska'>Alaska</option>
            <option value='arizona'>Arizona</option>
            <option value='california'>California</option>
            <option value='new york'>New York</option>
          </select></p>
          <h3>Are you looking to buy or rent?</h3>
          <p><input type='checkbox' name='transaction' id="transactionBuy" value='buy' /><label className={styles.checkButton} htmlFor="transactionBuy">
          Buy</label></p>
          <p><input type='checkbox' name='transaction' id="transactionRent" value='rent' /><label className={styles.checkButton} htmlFor="transactionRent">
          Rent</label></p>
          <p><button className={styles.submit} type='submit'>Swing!</button></p>
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
