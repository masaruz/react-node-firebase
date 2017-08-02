import { actionType } from '../actions/index'

export default (state = '', action) => {
  const payload = action.payload
  switch (action.type) {
    case actionType.CHANGE:
      return payload.text
    default:
      return state
  }
}