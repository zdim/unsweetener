function processItemData(data) {
	if (data) {
		return {
			name: data.description,
			ingredients: data.ingredients,
		};
	}
	return { error: 'No item found!' };
}

exports.handleItemData = processItemData;
