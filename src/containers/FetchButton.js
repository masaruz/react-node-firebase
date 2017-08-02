import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUsersIfNeeded } from '../actions'
import RaisedButton from 'material-ui/RaisedButton'

// render something
class FetchButton extends Component {
  render () {
    let { fetch, onClick } = this.props
    return (
      <RaisedButton label={fetch ? 'Fetch' : 'Fetching ...'} primary={true} disabled={!fetch} onClick={
        e => {
          e.preventDefault()
          onClick('http://rest.learncode.academy/api/johnbob/friends')
        }} />
    )
  }
}
FetchButton.PropTypes = {
  onClick: PropTypes.func.isRequired,
  fetch: PropTypes.bool.isRequired
}

/**
 * get only component in the state that's interested
 * state is from reducer
 * and map to this component's props
 * @param {*} state 
 */
const mapStateToProps = state => {
  const { fetch } = state
  return { fetch }
}
/**
 * when the component wants to change the state
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => {
  return {
    onClick: (url) => {
      dispatch(fetchUsersIfNeeded(url))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FetchButton)