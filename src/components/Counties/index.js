import React from 'react'

const Counties = (counties) => (
  <ul>
    {
      counties.map(county => (
        <li>
          {county.county_name}
        </li>
      ))
    }
  </ul>
)

export default Counties
