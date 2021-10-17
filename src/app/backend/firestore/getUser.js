const db = require("./db");

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    db.collection("users")
      .where("id", "==", id)
      .get()
      .then((querySnapshot) =>
        querySnapshot.forEach((doc) => resolve(doc.data()))
      )
      .catch((error) => reject(error));
  });
};

module.exports = getUser;
