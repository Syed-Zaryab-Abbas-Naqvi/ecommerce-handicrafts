const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Load products from JSON
app.get("/products", (req, res) => {
    fs.readFile("../db.json", "utf8", (err, data) => {
        if (err) {
            res.status(500).send("Error reading database");
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.listen(5000, () => {
    console.log("Backend running on http://localhost:5000");
});
