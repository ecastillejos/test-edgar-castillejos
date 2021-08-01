import * as actionType from "../actions/types";

const initialState = {
  cities: [],
  likedStatus: false,
  cityDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_CITIES:
      return {
        ...state,
        cities: action.payload.map((city, index) => {
          return { ...city, id: index };
        }),
      };
    case actionType.GET_LIKED:
      return {
        ...state,
        likedStatus: !state.likedStatus,
      };
    case actionType.LIKE_CITY:
      return {
        ...state,
        cities: state.cities.map((city, index) => {
          if (index !== action.payload) {
            return city;
          }
          return { ...city, liked: !city.liked };
        }),
      };
    case actionType.GET_DETAILS:
      return {
        ...state,
        cityDetail: state.cities.filter((city) => city.id === action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
