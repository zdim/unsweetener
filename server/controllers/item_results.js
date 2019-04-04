const utils = require('../utils/utils');

function processItemData(data) {
    if(data && data.foods) {
        const foodItem = data.foods[0];
        if(foodItem.food) {
            const { ing, desc } = foodItem.food;
            return { 
                name: utils.trimName(desc.name),
                ingredients: ing.desc 
            }
        }
    }    
    return { error: "No item found!" };
}

exports.handleItemData = processItemData;