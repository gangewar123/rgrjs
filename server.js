import express from  'express';

let app = express();
//global declaration
// app.get('/',(req,res) => res.send('hello express!'));

app.use(express.static('public'));
app.listen(3000);