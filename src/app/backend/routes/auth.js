const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
        console.log("got the code:", req.body.code)
        res.status(200).json({ message: "Update successful!" });
    }
);

module.exports = router;