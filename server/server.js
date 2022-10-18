const express = require("express");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 5002;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
