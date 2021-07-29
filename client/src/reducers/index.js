import * as actionType from "../actions/types";

const initialState = {
  cities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_CITIES:
      return {
        ...state,
        cities: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
