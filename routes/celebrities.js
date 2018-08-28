const express = require('express');
const router = express.Router();
const CelebModel = require('../models/CelebModel');

router.get('/celebrities', (req, res, next) => {
    CelebModel.find()
        .then(celebrities => {
            res.render('celebrities/index', { celebrities });
        })
        .catch(err => {
            console.log('Sorry, we could not pass the celebrities');
        });
});

router.get('/celebrities/new', (req, res) => {
    res.render('celebrities/new');
});

router.post('/celebrities', (req, res) => {
    console.log('REQ.BODY --->', req.body);
    let data = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchphrase: req.body.catchphrase
    };
    CelebModel.create(data).then(newCelebrity => {
        console.log(newCelebrity);
        res.redirect('/celebrities');
    });
});

router.get('/celebrities/:id', (req, res, next) => {
    CelebModel.findById(req.params.id).then(celebrityFromDb => {
        res.render('celebrities/show', celebrityFromDb);
    });
});
module.exports = router;
