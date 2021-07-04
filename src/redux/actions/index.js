const secondReady = () => {
  return {
    type: 'SECOND_READY',
  }
};

const secondRequested = (newData) => {
  return {
    type: 'SECOND_REQUESTED',
    payload: newData
  }
};

const secondLoading = () => {
  return {
    type: 'SECOND_LOADIND'
  }
};

const secondLoaded = () => {
  return {
    type: 'SECOND_LOADED'
  }
};

const secondClear = () => {
  return {
    type: 'SECOND_CLEAR',
  }
};

const secondError = () => {
  return {
    type: 'SECOND_ERROR'
  }
};

const thirdSocket= (newData) => {
  return {
    type: 'THIRD_SOCKET',
    payload: newData
  }
};

const thirdSocketClear= () => {
  return {
    type: 'THIRD_SOCKET_CLEAR'
  }
};


export {
  secondReady,
  secondRequested,
  secondLoading,
  secondLoaded,
  secondClear,
  secondError,
  thirdSocket,
  thirdSocketClear
}