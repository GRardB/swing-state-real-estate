import React from 'react'
import styles from './styles.css'

const Home = () => (
  <div className='row'>
    <form className='small-12 medium-6 medium-offset-3 columns'>
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
        <option value='alaska'>Alaska</option>
        <option value='arizona'>Arizona</option>
        <option value='california'>California</option>
        <option value='new york'>New York</option>
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
  </div>
)

export default Home
