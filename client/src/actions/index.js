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
