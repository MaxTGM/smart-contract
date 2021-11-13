const express = require("express");
const path = require('path');
const app = express();
const port = 6942;

app.use(express.static(path.join(__dirname + '/public')));
app.use(express.urlencoded({extended:true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/html/home.html");
});

app.get("/form", function(req, res) {
    res.sendFile(__dirname + "/public/html/form.html");
});

app.get("/search", function(req, res) {
    res.sendFile(__dirname + "/public/html/search.html");
});


app.get("/dashboard", function(req, res) {
    res.sendFile(__dirname + "/public/html/editprofile.html");
});

app.listen(process.env.PORT || port, function() {
    console.log(`Server started on http://localhost:${port}`);
});