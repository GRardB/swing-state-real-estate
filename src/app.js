import React from 'react'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import {
  createStore,
  applyMiddleware
} from 'redux'

import reducers from './modules'

const store = createStore(reducers, {}, applyMiddleware(thunk))

const App = () => (
  <Provider store={store}>
    <h1>Hello World</h1>
  </Provider>
)

const app = document.createElement('div')
document.getElementsByTagName('body')[0].appendChild(app)

render(<App />, app)
