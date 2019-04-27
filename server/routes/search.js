const express = require('express');
const controller = require('../controllers/search_results');
const usda = require('../utils/usda_requests');
const router = express.Router();

router.route('/search')
    .post(async (req, res) => {
        try {
            const { search } = req.body;
            if(search) {
                const results = await usda.search(search);
                console.log(results);
                res.send(controller.handleSearchResults(results));
            }
        } catch (e) {
            console.error(e)
        }
    });

module.exports = router;