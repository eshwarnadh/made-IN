const functions = require('firebase-functions');
const express = require("express")
const app = express();
const cors = (require('cors'))({origin:true})

app.use(cors);


exports.api = functions.https.onRequest(app)
