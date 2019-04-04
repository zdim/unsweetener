const utils = require('../utils/utils');

function processSearchResults(data) {
    if(data && data.list) {
        const list = data.list.item;
        const results = list.map(x => {
            return { 
                id: x.ndbno,
                name: utils.trimName(x.name),
                offset: x.offset
            };
        });
        return { results: results };
    }
    return null;
}

exports.handleSearchResults = processSearchResults;