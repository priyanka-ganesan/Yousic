const express = require("express");
const createUser = require("../firestore/createUser");
const getAccessTokens = require("../spotify/getAccessToken");
const getUsersInfo = require("../spotify/getUsersInfo");
const authRoutes = express.Router();

authRoutes.post("/", async (req, res) => {
    getAccessTokens(req.body.code)
    .then((tokens) => getUsersInfo(tokens))
    .then((userInfo) => createUser(userInfo))
    .then((userInfo) => res.status(200).json(userInfo))
    .catch(error => res.status(400).json(error))
});


module.exports = authRoutes;
