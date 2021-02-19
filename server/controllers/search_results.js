function processSearchResults(data) {
	if (data) {
		const results = data.map((x) => {
			return {
				id: x._id,
				fdc_id: x.fdc_id,
				name: x.description,
				brand: x.brand_owner,
				//offset: x.offset,
			};
		});
		return { results };
	}
	return { results: [] };
}

exports.handleSearchResults = processSearchResults;
