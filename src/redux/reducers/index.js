const initialState = {
  second:[],
  third:[],
  loading: false,
  error: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SECOND_READY':
      return {
        ...state,
        loading: false,
        error: false
      };

    case 'SECOND_REQUESTED':
      return {
        ...state,
        second: action.payload,
        loading: true,
        error: false
      };

    case 'SECOND_LOADIND':
      return {
        ...state,
        loading: true
      };

    case 'SECOND_LOADED':
      return {
        ...state,
        loading: false
      };

    case 'SECOND_CLEAR':
      return {
        ...state,
        second: [],
        error: false
      };

    case 'SECOND_ERROR':
      return {
        ...state,
        error: true
      };

    case 'THIRD_SOCKET':
      return {
        ...state,
        // third: state.third.concat(action.newItem)
        third: [...state.third, action.payload]
      };

    case 'THIRD_SOCKET_CLEAR':
      return {
        ...state,
        third: []
      };

    default:
      return state;
  }
}

export default reducer;