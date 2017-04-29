import React from 'react'
import { render } from 'react-dom'

const App = () => (
  <h1>Hello World</h1>
)

const app = document.createElement('div')
document.getElementsByTagName('body')[0].appendChild(app)

render(
  <App />,
  app,
)
