import React from 'react'
import Store from './Store'
import firebase from 'firebase'
import { observer } from 'mobx-react'

const handleClick = () => {
  const fireName = Store.inputVal
  const taskObj = { item: fireName }
  const database = firebase.database().ref('Players/' + Store.uid)
  const myKey = database.push(taskObj)
  const myNewKey = myKey.key
  const newObj = { item: fireName, itemKey: myNewKey }
  firebase
    .database()
    .ref('Players/' + Store.uid + '/' + myNewKey)
    .update(newObj)
}

const handleChange = e => {
  Store.inputVal = e.target.value
}

const Input = () => (
  <div>
    <input onChange={handleChange} type='text' />
    <button onClick={handleClick}>Fire Me</button><br /><br />
  </div>
)

export default observer(Input)
