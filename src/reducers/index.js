import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actions";


const initialState = {
  searches: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_START):
      return ({
        ...state, 
        isFetching: true
      });
    case(FETCH_SUCCESS):
      return ({
        ...state,
        isFetching: false,
        searches: ([action.payload]).concat(state.results)
      });
    case(FETCH_FAIL):
      return ({
        ...state,
        error: action.payload,
        isFetching: false
      });
    default:
      return state;
  }
};