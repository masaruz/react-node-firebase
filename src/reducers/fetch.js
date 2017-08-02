import { actionType } from '../actions/index'

export default (state = true, action) => {
  switch(action.type) {
    case actionType.FETCHED:
      return true
    case actionType.FETCHING:
      return false
    default: 
      return state
  }
} 