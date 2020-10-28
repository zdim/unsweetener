const fetch = require('node-fetch').default;
const faunadb = require('faunadb'),
	q = faunadb.query;
//const KEY = process.env.KEY;
const secret = process.env.FAUNA_KEY;
const client = new faunadb.Client({ secret });
const searchRequest = async (query) => {
	//const apiUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${KEY}`;
	console.log('SEARCHING FOR -> ' + query);
	const response = await client.query(
		q.Filter(
			q.Paginate(q.Match(q.Index('by_name'), 'description')),
			q.Lambda(
				['description', 'brand_owner'],
				q.ContainsStr(q.LowerCase(q.Var('description')), query)
			)
		)
	);

	// const res = await client.query(
	// 	q.Get(q.Ref(q.Collection('items'), '280326402894463496'))
	// );

	// console.log('RES ' + res);
	// return res;
	// const data = {
	// 	query,
	// 	dataType: [`Branded`],
	// 	pageSize: 25,
	// 	sortOrder: `asc`,
	// };

	// const request = await fetch(apiUrl, {
	// 	method: 'POST',
	// 	body: JSON.stringify(data),
	// 	headers: { 'Content-Type': 'application/json' },
	// });
	console.log(`SEARCH RESPONSE: ${JSON.stringify(response)}`);
	return response;
	// return request.json();
};

const itemRequest = async (id) => {
	const apiUrl = `https://api.nal.usda.gov/fdc/v1/food/${id}?api_key=${KEY}`;
	return fetch(apiUrl).then((res) => res.json());
};

exports.search = searchRequest;
exports.getItem = itemRequest;
