import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import SubmitForm from '../containers/SubmitForm'
import List from '../containers/List'
import FetchButton from '../containers/FetchButton'

class App extends Component {
  render() {
    return (
      <span>
        <AppBar />
          <SubmitForm />  
          <FetchButton />  
          <List />  
      </span>
    )
  }
}

export default App
