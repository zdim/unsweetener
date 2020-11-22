const express = require('express');
const controller = require('../controllers/search_results');
const usda = require('../utils/usda_requests');
const fauna = require('../utils/faunadb_requests');
const router = express.Router();

router.route('/search').post(async (req, res) => {
	try {
		const { search } = req.body;
		if (search) {
			// fauna isn't going well :(
			//const results = await fauna.search(search);

			const results = await usda.search(search);
			console.log(results);
			res.send(controller.handleSearchResults(results));
		}
	} catch (e) {
		console.error(`SEARCH ERROR: ${e}`);
	}
});

module.exports = router;
