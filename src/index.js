import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import firebase from 'firebase'

// go to firebase console and aquire them by creating a project
var config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  storageBucket: '',
  messagingSenderId: ''
}
firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'))
