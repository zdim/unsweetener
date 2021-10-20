function processItemData(data) {
	console.log(data);
	if (data) {
		return {
			name: data.description,
			ingredients: data.ingredients,
			brand: data.brand,
		};
	}
	return { error: 'No item found!' };
}

exports.handleItemData = processItemData;
