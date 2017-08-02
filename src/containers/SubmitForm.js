import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { submit, change } from '../actions'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class SubmitForm extends Component {
  // render something
  render() {
    let { text, onTextChange, onSubmit } = this.props
    return (
      <span>
        <form>
          <TextField 
            hintText="Add something ..." 
            value={text} 
            onChange={onTextChange} />
          <RaisedButton label="Add" primary={true} onClick={
            e => {
              e.preventDefault()
              onSubmit(text)
            }} />
        </form>
      </span>
    )
  }
}

SubmitForm.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  text: PropTypes.string
}

/**
 * get only component in the state that's interested
 * @param {*} state 
 */
const mapStateToProps = state => {
  return {
    text: state.text
  }
}
/**
 * when the component wants to change the state
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (text) => {
      if (text) dispatch(submit(text))
      dispatch(change(''))
    },
    onTextChange: (e) => {
      dispatch(change(e.target.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitForm)