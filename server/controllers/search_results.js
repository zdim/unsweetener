function processSearchResults(data) {
	if (data && data.foods) {
		const list = data.foods;
		const results = list.map((x) => {
			return {
				id: x.fdcId,
				name: x.description,
				offset: x.offset,
			};
		});
		return { results: results };
	}
	return { results: [] };
}

exports.handleSearchResults = processSearchResults;
