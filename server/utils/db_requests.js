const { MongoClient, ObjectId } = require('mongodb');

const { db, system_password } = process.env;

const uri = `mongodb+srv://system:${system_password}@cluster0.2iwwa.mongodb.net/${db}?retryWrites=true&w=majority`;

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
		console.log('getting ' + id);
		const db = await init();
		result = await db.findOne({ _id: ObjectId(id) });
		console.log(result);
		return result;
	} catch (e) {
		console.error('GET ERROR: ' + e);
	} finally {
		console.log('closing client');
		client.close();
		console.log('passed close');
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

exports.get = get;
exports.search = search;
