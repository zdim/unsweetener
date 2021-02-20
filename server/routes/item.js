const express = require('express');
const controller = require('../controllers/item_results');
const db = require('../utils/db_requests');
const router = express.Router();

router.route('/:id').get(async (req, res) => {
	try {
		const { id } = req.params;
		if (id) {
			const result = await db.get(id);
			res.send(controller.handleItemData(result));
		}
	} catch (e) {
		(e) => console.error(e);
	}
});

module.exports = router;
