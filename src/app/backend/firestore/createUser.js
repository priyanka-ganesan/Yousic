const db = require('./db')
const crypto = require("crypto");

const createUser = (data) => {
  return new Promise((resolve, reject) => {
    const userInfo = {
      id: crypto.randomBytes(16).toString("hex"),
      email: data.email,
      name: data.display_name,
      profileImage: data.images && data.images.length > 0 ? data.images[0].url : '',
      profileUrl: data.external_urls.spotify || '',
    }
    
    const newUser = {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      spotifyId: data.id,
      createdDate: new Date().toISOString(),
      ...userInfo,
    };

    db.collection('users').doc(data.id).set(newUser)
    .then(() => resolve(userInfo))
    .catch((error) => reject(error))

  });
};

module.exports = createUser;
