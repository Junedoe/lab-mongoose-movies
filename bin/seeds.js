//Setup
const mongoose = require('mongoose');
const CelebModel = require('../models/CelebModel');
// const MovieModel = require('../models/MoviesModel');

//Connect to DB using mongoose:

mongoose.Promise = Promise;
mongoose
    .connect(
        'mongodb://localhost/lab-mongoose-movies',
        { useMongoClient: true }
    )
    .then(() => {
        console.log('Connected to Mongo!');
    })
    .catch(err => {
        console.error('Error connecting to mongo', err);
    });

// Celebrity Array:

const celebrityArray = [
    {
        name: 'Mir',
        occupation: 'TA',
        catchphrase: 'I hate books also'
    },

    {
        name: 'Lady Gaga',
        occupation: 'Singer',
        catchphrase: "Don't call me gaga"
    },
    {
        name: 'David Hasselhof',
        occupation: 'Actor',
        catchphrase: "don't hassel the hoff"
    }
];

CelebModel.create(celebrityArray)
    .then(celebrityData => {
        console.log(celebrityData, celebrityData.length, 'celebrities were created');
    })
    .catch(err => console.log('Sorry, could not create'));
