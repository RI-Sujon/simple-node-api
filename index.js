const express = require('express');
const port = process.env.port || 8000;
const app = express();

app.get('/', (req, res) => {
    res.send('I Love Bangladesh!');
});

app.get('/multi/:a/:b', (req, res) => {
    var a = parseInt(req.params.a);
    var b = parseInt(req.params.b);
    var c = Number(a*b)
    res.send("The multiplication of "+ a +" and " + b + " is = " + Number(c));

});

app.listen(port, () => { console.log('Our App Is Up And Running!'); });
module.exports = app