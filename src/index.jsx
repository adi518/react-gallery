import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { configureStore } from './store'

import Octocat from './components/octocat'
import Footer from './components/footer'
import Gallery from './components/gallery'

import './styles.css'

const store = configureStore()

const Body = ({ children }) => <main className="Body">{children}</main>

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Octocat />
        <Body>
          <Gallery />
        </Body>
        <Footer />
      </div>
    </Provider>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
