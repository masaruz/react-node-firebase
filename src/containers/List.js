import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class List extends Component {
  createTableRows (list) {
    return list.map((i, k) => 
      <TableRow key={k}>
        <TableRowColumn>{i.name}</TableRowColumn>
        <TableRowColumn>{i.value}</TableRowColumn>
      </TableRow>
    )
  }

  render () {
    let { list } = this.props
    return (  
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Value</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
        {this.createTableRows(list)} 
        </TableBody>
      </Table>
    )
  }
}

List.PropTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired
}

const mapStateToProps = state => {
  return {
    list: state.list
  }
}
// no need to map any dipatch because this component don't change anything
// but still need to connect because of the state 
export default connect(mapStateToProps)(List)