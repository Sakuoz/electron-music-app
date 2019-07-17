import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import './index.scss'
import * as serviceWorker from './serviceWorker'
import '@emotion/core'
import 'normalize.css'
import { SideNav } from './page/SideNav/Index'
import { Recommend } from './page/HomePage/Index'
import { DailySong } from './page/DailySong/Index'
import { Album } from './page/Album/Index'
import { SongList } from './page/SongList/Index'
import { createHashHistory } from 'history'

function backTop(node: HTMLDivElement) {
  node.scrollTop = 0
}

const history = createHashHistory()

ReactDOM.render(
  <HashRouter>
    <SideNav />
    <div
      ref={node => {
        if (node) {
          history.listen(() => {
            // 路由变动滚动条返回顶部
            backTop(node)
          })
        }
      }}
      css={{
        width: '80%',
        height: '100vh',
        padding: '20px 40px',
        overflow: 'scroll'
      }}
    >
      <Switch>
        <Route path="/" exact component={Recommend} />
        <Route path="/daily_song" component={DailySong} />
        <Route path="/album/:id" component={Album} />
        <Route path="/song_list/:id" component={SongList} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
