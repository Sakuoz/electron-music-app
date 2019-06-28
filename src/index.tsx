import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import './index.scss'
import * as serviceWorker from './serviceWorker'
import '@emotion/core'
import 'normalize.css'
import { SideNav } from './page/SideNav/Index'
import { Recommend } from './page/HomePage/Index'

ReactDOM.render(
  <HashRouter>
    <SideNav />
    <div
      css={{
        width: '80%',
        height: '100vh',
        padding: '20px 40px',
        overflow: 'scroll'
      }}
    >
      <Switch>
        <Route path="/" exact component={Recommend} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
