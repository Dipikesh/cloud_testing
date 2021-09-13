const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send("Hello world")
});
app.get('/check', (req, res, next) => {
    res.send("Working :)))))")
})
app.listen(8000, () => {
    console.log("listening on port 8000");
})