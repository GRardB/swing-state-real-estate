import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import {
  queryForCounties
} from 'modules'

import styles from './styles.css'

class HomeComponent extends Component {
  render() {
    return (
      <div className='row'>
        <form className='small-12 medium-6 medium-offset-3 columns' onSubmit={this.props.onSubmit}>
          <div className='row'>
            <p className='small-12'>What is your affiliation?</p>
            <label className='small-6'>
              <input type='radio' name='party' value='democrat' />
              Democrat
            </label>
            <label className='small-6'>
              <input type='radio' name='party' value='republican' />
              Republican
            </label>
          </div>
          <div className='row'>
            <p className='small-12'>I would like to live in:</p>
            <select name='state' className='small-12'>
              {
                STATES.map(({name, initials}) => <option key={initials} value={initials}>{name}</option>)
              }
            </select>
          </div>
          <div className='row'>
            <p className='small-12'>I would like to:</p>
            <label className='small-6'>
              <input type='radio' name='transaction' value='buy' />
              Buy
            </label>
            <label className='small-6'>
              <input type='radio' name='transaction' value='rent' />
              Rent
            </label>
          </div>
          <button className={styles.submit} type='submit'>Submit</button>
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
