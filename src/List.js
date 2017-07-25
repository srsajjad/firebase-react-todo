import React, { Component } from 'react'
import firebase from 'firebase'
import Store from './Store'
import { observer } from 'mobx-react'

class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editing: false
    }
  }

  handleDelete () {
    firebase
      .database()
      .ref('Players/' + Store.uid + '/' + this.props.itemKey)
      .remove()
  }

  handleEdit () {
    this.setState({
      editing: true
    })
  }

  handleEditing (e) {
    e.preventDefault()
    console.log(this)
    const newInput = this.newInput.value
    firebase
      .database()
      .ref('Players/' + Store.uid + '/' + this.props.itemKey)
      .update({
        item: newInput,
        itemKey: this.props.itemKey
      })

    this.setState({
      editing: false
    })
  }

  render () {
    if (this.state.editing === false) {
      return (
        <div>
          <li>
            {this.props.item}
            {' '}
            <button onClick={this.handleDelete.bind(this)}>Delete</button>
            {' '}
            <button onClick={this.handleEdit.bind(this)}>Edit</button>
          </li><br />
        </div>
      )
    } else {
      return (
        <form onSubmit={this.handleEditing.bind(this)}>
          <input
            defaultValue={this.props.item}
            ref={input => {
              this.newInput = input
            }}
          />
          <input type='submit' value='Done Editing' />
        </form>
      )
    }
  }
}

export default observer(List)
