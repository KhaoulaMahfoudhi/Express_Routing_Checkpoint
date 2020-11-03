const express = require('express');
const path = require('path');

const app = express();

app.use(logger);

//body parser midellware
app.use(express.json());
app.use(express.urlencoded({
    extended : false
}))

function logger (req, res , next){
    let time = new Date().getHours();
    let dt = new Date(); 

    if ( (dt.getDay() < 6 && dt.getDay() > 0) && (time >9 && time <17 )){
        app.use(express.static(path.join(__dirname, 'public')));
        console.log("log");
    } else{
        res.send("You don't have an access")
    }
    next();
}

//Port listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server start on port ${PORT}`));