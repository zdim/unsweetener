const fetch = require('node-fetch').default;

const KEY = process.env.KEY;

const searchRequest = async query => {
    const apiUrl = `https://api.nal.usda.gov/ndb/search/?format=json&q=${query}&sort=r&max=25&offset=0&api_key=${KEY}`;
    return fetch(apiUrl)
        .then(data => data.json());
}

const itemRequest = async id => {
    const apiUrl = `https://api.nal.usda.gov/ndb/V2/reports?ndbno=${id}&type=b&format=json&api_key=${KEY}`
    return fetch(apiUrl)
        .then(res => res.json())
}

exports.search = searchRequest;
exports.getItem = itemRequest;