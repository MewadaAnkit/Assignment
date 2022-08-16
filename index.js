const express = require("express");
const app = express();
const path = require("path");
const request = require('request');
const port =process.env.PORT || 8000;
const hbs = require("hbs");


const staticPath = path.join(__dirname,"public");
const templatePath = path.join(__dirname,"../views");
app.use(express.static(staticPath));

app.set('view engine','hbs');


app.get("/",(req,res)=>{
    res.render('weather');
});




app.listen(port,()=>{
    console.log(`Server started Listenting at Port ${port}`);
})