import React, { Component } from 'react'
import firebase from 'firebase'
import Store from './Store'
import { observer } from 'mobx-react'

class Auth extends Component {
  handleSignUp () {
    const email = this.emailInput.value
    const password = this.passwordInput.value

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        var errorMessage = error.message
        console.log(errorMessage)
      })
  }

  handleSignIn () {
    const email = this.emailInput.value
    const password = this.passwordInput.value

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        var errorMessage = error.message
        console.log(errorMessage)
      })
  }

  handleSignOut () {
    firebase.auth().signOut()
    Store.playerArr = []
  }

  componentWillMount () {
    const self = this
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        Store.email = user.email
        Store.uid = user.uid
        // console.log(Store.email + ' is signed in')
      } else {
        Store.uid = undefined
        Store.email = 'No One'
      }
    })
  }

  render () {
    return (
      <div>

        Email : <input
          ref={input => {
            this.emailInput = input
          }}
          type='email'
        /><br /><br />
        Password : <input
          ref={input => {
            this.passwordInput = input
          }}
          type='password'
        /><br /><br />

        <button onClick={this.handleSignUp.bind(this)}>Sign Up</button>
        {' '}
        <button onClick={this.handleSignIn.bind(this)}>Sign In</button>
        {' '}
        <button onClick={this.handleSignOut.bind(this)}>Sign Out</button>
        <br />
        <br />

      </div>
    )
  }
}

export default observer(Auth)
