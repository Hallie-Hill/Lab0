const express = require('express');
const app = express();

const hostname = "localhost";
const port = 3000;
app.use(express.static("public"));

app.get('/', (req, res)=> {
    res.send("Hey, it works!");
    
});

// Query String Parameters
// /greet?name=pikachu
app.get('/greet', (req, res)=> {

    let name = req.query.name.toUpperCase();
    let year = parseInt(req.query.year);
    res.send(`<h1> Hello, ${name} You are either ${2022 - year} or ${2021 - year} years old.</h1>`);

});

// Route Parameters
// /math/pikachu
app.get('/math/:num1/:process/:num2', (req, res)=> {

    let num1 = parseInt(req.params.num1);
    let process = req.params.process;
    let num2 = parseInt(req.params.num2);
    
    if (process === 'plus'){
        fnum = num1 + num2;
    } else if (process === 'minus'){
        fnum = num1 - num2;
    } else if (process === 'divide') {
        fnum = num1 / num2;
    } else if (process === "times") {
        fnum = num1 * num2;
    }


    res.send(`<h1> ${fnum} </h1>`);

});


app.listen(port, ()=> {
    console.log(`Listening on http://${hostname}:${port} ...`);
});