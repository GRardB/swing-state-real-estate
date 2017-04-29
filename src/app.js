import React from 'react'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import {
  createStore,
  applyMiddleware
} from 'redux'

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import reducers from './modules'
import {
  Home,
  SearchPage,
} from './components'

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={Home} />
        <Route path="/search" component={SearchPage} />
      </div>
    </Router>
  </Provider>
)

const app = document.createElement('div')
document.getElementsByTagName('body')[0].appendChild(app)

render(<App />, app)
