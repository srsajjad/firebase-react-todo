import React, { Component } from 'react'
import firebase from 'firebase'
import List from './List'
import Input from './Input'
import Store from './Store'
import { observer } from 'mobx-react'

class All extends Component {
  componentWillMount () {
    if (Store.uid) {
      firebase
        .database()
        .ref('Players/' + Store.uid)
        .on('value', function (data) {
          const myData = data.val()
          if (myData) {
            const keyArr = Object.keys(myData)
            const newArr = keyArr.map(function (n) {
              return {
                item: myData[n].item,
                itemKey: myData[n].itemKey
              }
            })
            Store.playerArr = newArr
          }
        })
    }
  }
  render () {
    return (
      <div>
        <Input />
        {Store.playerArr.map((n, i) => (
          <List itemKey={n.itemKey} item={n.item} key={i} />
        ))}
      </div>
    )
  }
}

export default observer(All)
