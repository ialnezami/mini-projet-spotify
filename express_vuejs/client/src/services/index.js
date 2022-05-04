import axios from "axios";

axios.post(process.env.VUE_APP_API_URL, {}).then((response) => {
  // save the access token in local storage
  localStorage.setItem("access_token", response.data.body.access_token);
  return response.data.body.access_token;
});

export default axios.create({
  baseURL: process.env.VUE_APP_API_SPOTIFY_URL,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("access_token"),
  },
});
