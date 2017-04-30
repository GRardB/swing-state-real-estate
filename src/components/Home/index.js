import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import {
  queryForCounties
} from 'modules'

import styles from './styles.css';
import republican from './republican.png';
import democrat from './democrat.png';
import tagline from './tagline.png';


class HomeComponent extends Component {
  render() {
    return (
      <div className={styles.container}>
        <main className={styles.page}>
          <div className={styles.content}>
            <h1 className={styles.swing}>Swing State Real Estate</h1>
            <p><img src={tagline} alt="Making your vote count" className={styles.tagline} /></p>
            <p>It’s safe to assume that Alabama will vote Republican and California will vote Democrat, but the electoral results of swing states are up in the air, giving their voters more impact.</p>
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
              {
                STATES.map(({name, initials}) => <option key={initials} value={initials}>{name}</option>)
              }
          </select></p>
          <h3>Are you looking to buy or rent?</h3>
          <p><input type='checkbox' name='transaction' id="transactionBuy" value='buy' checked /><label className={styles.checkButton} htmlFor="transactionBuy">
              Buy</label></p>
          <p><input type='checkbox' name='transaction' id="transactionRent" value='rent' /><label className={styles.checkButton} htmlFor="transactionRent">
              Rent</label></p>
          <p><button className={styles.submit} type='submit'>Swing!</button></p>
        </form>
        { this.props.counties.length > 0 && <Redirect to='/search' /> }
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

const STATES = [
  { name: 'Alabama', initials: 'AL'},
  { name: 'Alaska', initials: 'AK'},
  { name: 'Arizona', initials: 'AZ'},
  { name: 'Arkansas', initials: 'AR'},
  { name: 'California', initials: 'CA'},
  { name: 'Colorado', initials: 'CO'},
  { name: 'Connecticut', initials: 'CT'},
  { name: 'Delaware', initials: 'DE'},
  { name: 'Florida', initials: 'FL'},
  { name: 'Georgia', initials: 'GA'},
  { name: 'Hawaii', initials: 'HI'},
  { name: 'Idaho', initials: 'ID'},
  { name: 'Illinois', initials: 'IL'},
  { name: 'Indiana', initials: 'IN'},
  { name: 'Iowa', initials: 'IA'},
  { name: 'Kansas', initials: 'KS'},
  { name: 'Kentucky', initials: 'KY'},
  { name: 'Louisiana', initials: 'LA'},
  { name: 'Maine', initials: 'ME'},
  { name: 'Maryland', initials: 'MD'},
  { name: 'Massachusetts', initials: 'MA'},
  { name: 'Michigan', initials: 'MI'},
  { name: 'Minnesota', initials: 'MN'},
  { name: 'Mississippi', initials: 'MS'},
  { name: 'Missouri', initials: 'MO'},
  { name: 'Montana', initials: 'MT'},
  { name: 'Nebraska', initials: 'NE'},
  { name: 'Nevada', initials: 'NV'},
  { name: 'New Hampshire', initials: 'NH'},
  { name: 'New Jersey', initials: 'NJ'},
  { name: 'New Mexico', initials: 'NM'},
  { name: 'New York', initials: 'NY'},
  { name: 'North Carolina', initials: 'NC'},
  { name: 'North Dakota', initials: 'ND'},
  { name: 'Ohio', initials: 'OH'},
  { name: 'Oklahoma', initials: 'OK'},
  { name: 'Oregon', initials: 'OR'},
  { name: 'Pennsylvania', initials: 'PA'},
  { name: 'Rhode Island', initials: 'RI'},
  { name: 'South Carolina', initials: 'SC'},
  { name: 'South Dakota', initials: 'SD'},
  { name: 'Tennessee', initials: 'TN'},
  { name: 'Texas', initials: 'TX'},
  { name: 'Utah', initials: 'UT'},
  { name: 'Vermont', initials: 'VT'},
  { name: 'Virginia', initials: 'VA'},
  { name: 'Washington', initials: 'WA'},
  { name: 'West Virginia', initials: 'WV'},
  { name: 'Wisconsin', initials: 'WI'},
  { name: 'Wyoming', initials: 'WY'},
]

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent)

export default Home
