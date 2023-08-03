import axios from "axios";
import { Vit_AppToken } from "../env";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = Vit_AppToken;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
