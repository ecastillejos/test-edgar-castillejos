import axios from "axios";
import * as actionType from "./types";

export const serverPetition = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3001",
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3001",
  },
});

export const getCities = (dispatch) => {
  serverPetition
    .get("/data")
    .then((response) =>
      dispatch({ type: actionType.GET_CITIES, payload: response.data })
    )
    .catch((e) => {
      console.error(e);
    });
};

export const getLikedCities = (dispatch) => {
  dispatch({
    type: actionType.GET_LIKED,
  });
};

export const likeCity = (dispatch, id) => {
  dispatch({
    type: actionType.LIKE_CITY,
    payload: id,
  });
};

export const getDetails = (dispatch, id) => {
  dispatch({
    type: actionType.GET_DETAILS,
    payload: id,
  });
};
