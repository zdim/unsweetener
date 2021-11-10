const { result } = require('lodash');
const { MongoClient, ObjectId } = require('mongodb');

const { db, netlify_db_key, mongodb_uri } = process.env;

if (!db || !netlify_db_key || !mongodb_uri) {
	console.error('env variable missing!');
	throw new Error('env variable missing');
}

const uri = mongodb_uri.replace('$pass$', netlify_db_key).replace('$db$', db);

let client = null;

const init = async () => {
	client = new MongoClient(uri, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	});
	await client.connect();
	return client.db('food').collection('branded_items');
};

const get = async (id) => {
	let result;
	try {
		const db = await init();
		result = await db.findOne({ _id: ObjectId(id) });
		return result;
	} catch (e) {
		console.error('GET ERROR: ' + e);
	} finally {
		client.close();
		return result;
	}
};

const search = async (searchTerm) => {
	let results;
	try {
		const db = await init();
		const result = db
			.find({ $text: { $search: `\"${searchTerm}\"` } })
			.limit(25);
		results = await result.toArray();
	} catch (e) {
		console.error('SEARCH ERROR: ' + e);
	} finally {
		client.close();
		return results;
	}
};

const edit = async (id, edit) => {
	let result;
	try {
		const db = await init();
		result = await db.updateOne(
			{ _id: ObjectId(id) },
			{ $set: { requested_edit: edit } }
		);
		console.log(`result count: ${result.matchedCount}`);
	} catch (e) {
		console.error('EDIT ERROR: ' + e);
	} finally {
		client.close();
		return result;
	}
};

exports.get = get;
exports.search = search;
exports.edit = edit;
