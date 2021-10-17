const express = require("express");
const createUser = require("../firestore/createUser");
const getUser = require("../firestore/getUser");
const getAccessTokens = require("../spotify/getAccessToken");
const getUsersInfo = require("../spotify/getUsersInfo");
const userRoutes = express.Router();

userRoutes.post("/auth", (req, res) => {
    getAccessTokens(req.body.code)
    .then((tokens) => getUsersInfo(tokens))
    .then((userInfo) => createUser(userInfo))
    .then((userInfo) => res.status(200).json(userInfo))
    .catch(error => res.status(400).json(error))
});

userRoutes.get("/:id", (req, res) => {
    getUser(req.params.id)
    .then((userInfo) => res.status(200).json(userInfo))
    .catch(error => {
        console.log(error)
        res.status(400).json(error)
    })
});

module.exports = userRoutes;
