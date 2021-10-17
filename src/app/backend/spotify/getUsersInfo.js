const axios = require("axios").default;

const getUsersInfo = (data) => {
  return new Promise((resolve, reject) => {
    axios({
      url: "https://api.spotify.com/v1/me",
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${data.access_token}`,
      },
    })
      .then( (response) => resolve({ ...response.data, ...data}))
      .catch((error) => reject(error));
  });
};

module.exports = getUsersInfo;
