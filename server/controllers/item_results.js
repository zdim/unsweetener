function processItemData(data) {
	if (data) {
		return {
			id: data._id,
			name: data.description,
			ingredients: data.ingredients,
			brand: data.brand_owner,
		};
	}
	return { error: 'No item found!' };
}

exports.handleItemData = processItemData;
