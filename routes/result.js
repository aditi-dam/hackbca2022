var express = require('express');
var router = express.Router();

const fs = require('fs');
const path = require('path');

// results homepage
router.get('/', async function(req, res, next) {
    try {
        let results = req;
        console.log(results);
        res.render('result', { title: 'Results', style: "index", projects: results});
    } catch (err) {
        next(err);
    }    
});

// form submission
router.post('/', async function(req, res, next) {
    try {
        let results = req.body.textarea1;
        console.log(results);
        // let project_id_inserted = results.insertId;
        res.redirect(`/result/`);
    } catch(err) {
        next(err);
    }
})

module.exports = router;