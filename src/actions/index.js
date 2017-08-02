import axios from 'axios'

export const actionType = {
    ERROR: 'ERROR',
    SUBMIT: 'SUBMIT',
    CHANGE: 'CHANGE',
    FETCHED: 'FETCHED',
    FETCHING: 'FETCHING'
}

export const isError = e => {
  return {
    type: actionType.ERROR,
    payload: {
      e,
      error: true
    }
  }
}

export const submit = text => {
  return {
    type: actionType.SUBMIT,
    payload: {
      value: Math.random() * 100,
      text
    }
  }
}

export const change = text => {
  return {
    type: actionType.CHANGE,
    payload: {
      text
    }
  }
}

const fetched = items => {
  return {
    type: actionType.FETCHED,
    payload: {
      fetched: true,
      fetching: false,
      items: items
    }
  }
}

const fetching = () => {
  return {
    type: actionType.FETCHING,
    payload: {
      fetched: false,
      fetching: true,
    }
  }
}

const fetchUsers = url => {
  return dispatch => {
    dispatch(fetching())
      axios.get(url)
        .then(function (res) {
          const items = res.data
            .filter(d => d.name)
            .map(d => ({
              name: d.name,
              value: Math.random() * 100
            }))
          dispatch(fetched(items))
        })
        .catch(function (e) {
          dispatch((isError(e)))
        })
  }
}

export const fetchUsersIfNeeded = url => {
  return (dispatch, getState) => {
    if (getState().fetch) {
      return dispatch(fetchUsers(url))
    }
  }
}
