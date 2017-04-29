import React from 'react'
import styles from './styles.css'

const Counties = ({ counties }) => (
  <div>
    {
      counties.map(county => (
        <button key={county.name} className={styles.display}>
          <h2>{county.name}</h2>
          <img src="democrat.png" alt="Democrats" title="Democrats" className={styles.percent_img} /><em>{county.dems}%</em>&nbsp; &nbsp;
          <img src="republican.png" alt="Republicans" title="Republicans" className={styles.percent_img} /><em>{county.reps}%</em>
        </button>
      ))
    }
  </div>
)

export default Counties
