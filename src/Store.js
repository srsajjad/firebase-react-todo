import { observable } from 'mobx'

let Store = {
  uid: undefined,
  email: 'No One',
  playerArr: [],
  inputVal: null
}

export default observable(Store)
