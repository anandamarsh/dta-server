/**
 * (C) 2018 Amarsh Anand
 * Author: Amarsh Anand - amarsh.anand@gmail.com
 * A one-file-app that serves the initial state of the dta-client app.
 * To simulate an _undeterministic_ initial state of the app, we generate upto 10 bars and 10 buttons,
 * with initial value of each bar / button being between [-200, 200].
 */

const express = require('express')
const app = express()

// server the react-app as the home page
app.use(express.static(__dirname + '/build'));

// serve the initial state of the system
app.get('/state', (req, res) => {

  // we need two arrays with random length and random values
  const randomArray = (length={min:1, max:10}, value={min:-200, max:200}) => {
    const getRandomArbitrary = ({min, max}) => Math.round(Math.random()*(max-min)+min);
    const arrLength = getRandomArbitrary(length);
    const array = [];
    for(let i=0; i<arrLength; i++)
      array.push(getRandomArbitrary(value));
    return array;
  }

  res.send({buttons:randomArray({min:4, max:6}, {min:-50, max:50}), bars: randomArray({min:2, max:5}, {min:0, max:150})});

});

app.listen(8080, () => console.log(`DTA Server is up and running`))
