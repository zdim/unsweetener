const fetch = require('node-fetch').default;
const fauna = require('faunadb'),
	q = fauna.query;
//const KEY = process.env.KEY;
const KEY = process.env.FAUNA_KEY;
const client = new fauna.client({ secret: KEY });
const searchRequest = async (query) => {
	//const apiUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${KEY}`;
	db.query();

	const data = {
		query,
		dataType: [`Branded`],
		pageSize: 25,
		sortOrder: `asc`,
	};

	const request = await fetch(apiUrl, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'Content-Type': 'application/json' },
	});

	return request.json();
};

const itemRequest = async (id) => {
	const apiUrl = `https://api.nal.usda.gov/fdc/v1/food/${id}?api_key=${KEY}`;
	return fetch(apiUrl).then((res) => res.json());
};

exports.search = searchRequest;
exports.getItem = itemRequest;
