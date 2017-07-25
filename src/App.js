import React from 'react'
import All from './All'
import Auth from './Auth'
import { observer } from 'mobx-react'
import Store from './Store'

const App = () => (
  <div>
    {Store.uid
      ? <h3>{Store.email} is logged in</h3>
      : <h3>no one is logged in</h3>}
    <Auth />
    {Store.uid ? <All /> : <h1>you have to be logged in</h1>}
  </div>
)

export default observer(App)
