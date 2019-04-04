const express = require('express');
const controller = require('../controllers/item_results');
const usda = require('../utils/usda_requests');
const router = express.Router();

router.route('/:id')
    .get(async (req, res) => {
        try {
            const { id } = req.params;
            if(id) {
                const results = await usda.getItem(id);
                res.send(controller.handleItemData(results));
            }
        } catch (e) {
            e => console.error(e);
        }
    });

module.exports = router;