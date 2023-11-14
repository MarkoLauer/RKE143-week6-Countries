const express = require('express');
const router = express.Router();
const data = require('../data/countries.json');

router.get('/', (req, res) => { 
    res.status(200).json(data);
})

router.get('/:countryId', (req, res) => {
    const requestedCountryId = parseInt(req.params.countryId, 10);
    const country = data.countries.filter(countryData => {
        if(countryData.id === requestedCountryId){
            return countryData;
        };
    });
    res.status(200).json(country);
})

module.exports = router;