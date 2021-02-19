const express = require('express');
const controller = require('../controllers/search_results');
const usda = require('../utils/usda_requests');
const db = require('../utils/db_requests');
const router = express.Router();

router.route('/search').post(async (req, res) => {
	try {
		const { search } = req.body;
		if (search) {
			const results = await db.search(search);
			res.send(controller.handleSearchResults(results));
		}
	} catch (e) {
		console.error(`SEARCH ERROR: ${e}`);
	}
});

module.exports = router;
