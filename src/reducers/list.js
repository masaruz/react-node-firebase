import { actionType } from '../actions/index'

export default (state = [], action) => {
  const payload = action.payload
  switch(action.type) {
    case actionType.SUBMIT:
      return [
        ...state,
        {
          name: payload.text,
          value: payload.value
        }
      ]
    case actionType.FETCHED: 
      return state.concat(action.payload.items)
    default: 
      return state
  }
} 