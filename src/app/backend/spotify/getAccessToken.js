const axios = require("axios").default;

const getAccessTokens = (code) => {
  return new Promise((resolve, reject) => {
    axios({
      url: "https://accounts.spotify.com/api/token",
      method: "post",
      params: {
        code,
        redirect_uri: "http://localhost:4200/callback",
        grant_type: "authorization_code",
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      auth: {
        username: "",
        password: "",
      },
    })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

module.exports = getAccessTokens;
