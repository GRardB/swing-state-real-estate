import React from 'react'
import styles from './styles.css'

const Counties = ({ counties }) => (
  <div>
    {
      counties.map(county => (
        <button key={county.name} className={styles.display}>
          {county.name}
          {county.dems}% Democrats
          {county.reps}% Republicans
        </button>
      ))
    }
  </div>
)

export default Counties
