const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');

const adminRoutes = require("./routes/admin")
const userRoutes = require("./routes/user")

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes)
app.use(userRoutes)

app.set('title', 'My site');
console.log(app.get('title'))

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})


app.listen(3000, () => {
    console.log("listening on port 3000")
})
