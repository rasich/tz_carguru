import React, { Component } from 'react';

import Spinner from '../../spinner';
import Error from '../../error';
import SecondTaskItem from './second-task-item';

import './second-task.css';

import {connect} from 'react-redux';
import WithService from '../../../services/hoc';
import {secondReady, secondRequested, secondLoading, secondLoaded, secondClear, secondError} from '../../../redux/actions';


class SecondTask extends Component {

  componentDidMount() {
    this.props.secondReady()
  }
  
  componentWillUnmount() {
    this.props.secondClear()
  }

  getData = () => {
    const {Service, secondRequested, secondLoading, secondLoaded, secondError} = this.props;

    secondLoading()
    Service.getResource()
      .then(res => secondRequested(res.response))
      .then(() => secondLoaded())
      .catch(() => secondError());
  }

  render() {
    const {error, loading, second} = this.props;

    if (error) {
      return <Error/>
    }
    if (loading) {
      return <Spinner/>
    }

    if (!second.length) {
      return (
        <div className="second">
          <button onClick={() => this.getData()}>
            RESTApi
          </button>
        </div>
      )
    }

    return (
      <div className="second">
        <div className="second-block">
          {second.map((task) => <SecondTaskItem 
            task={task} 
            key={task.id}
          />)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    second: state.second,
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = {
  secondReady,
  secondRequested,
  secondLoading,
  secondLoaded,
  secondClear,
  secondError
}

export default WithService()(connect(mapStateToProps, mapDispatchToProps)(SecondTask));