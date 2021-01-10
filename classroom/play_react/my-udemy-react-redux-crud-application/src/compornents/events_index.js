import React, { Component } from 'react'
import { connect } from 'react-redux'

import { readEvents } from '../actions'

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }

  render() {
    const props = this.props

    return (
      <>
        <div></div>
      </>
    );
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = ({ readEvents })



export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
