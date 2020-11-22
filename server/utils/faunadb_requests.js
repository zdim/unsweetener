const faunadb = require('faunadb'),
	q = faunadb.query;

const secret = process.env.FAUNA_KEY;
const client = new faunadb.Client({ secret });
const searchRequest = async (query) => {
	console.log('SEARCHING FOR -> ' + query);

	const response = await client.query(
		q.Filter(
			q.Paginate(q.Match(q.Index('all_names_and_brands'))),
			q.Lambda(
				['description', 'brand_owner', 'ref'],
				q.ContainsStr(q.LowerCase(q.Var('description')), 'tomato')
			)
		)
	);

	console.log(`SEARCH RESPONSE: ${JSON.stringify(response)}`);
	return response;
	// return request.json();
};

const itemRequest = async (id) => {
	throw new Error('not implemented');
};

exports.search = searchRequest;
exports.getItem = itemRequest;
