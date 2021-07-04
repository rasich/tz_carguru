import React, { Component } from 'react';

import Spinner from '../../spinner'

import './third-task.css';

import {connect} from 'react-redux';
import {thirdSocket, thirdSocketClear} from '../../../redux/actions';

let client;

class ThirdTask extends Component {

  componentDidMount() {
    client = new WebSocket("ws://websocket.crgr.dev/example");

    client.onmessage = (event) => {
      const message = JSON.parse(event.data);
      
      if (message) {
        this.props.thirdSocket(message)
      }
    }
  }
  
  componentWillUnmount() {
    client.close()
    this.props.thirdSocketClear()
  }

  
  render() {
    const {third} = this.props;

    return (
      <div className='third'>
        <h1>WebSocket</h1>
        {(!third.length) ?
            <Spinner/>
            :
            <div className='third-messages'>
              {third.map((msg, index) => (<span className='third-message' key={index}>{msg}</span>))}
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    third: state.third,
  }
}
const mapDispatchToProps = {
  thirdSocket,
  thirdSocketClear
}

export default connect(mapStateToProps, mapDispatchToProps)(ThirdTask);