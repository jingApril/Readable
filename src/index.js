import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './util/configureStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
     <BrowserRouter><App /></BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
