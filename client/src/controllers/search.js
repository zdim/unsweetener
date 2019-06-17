const getRandomFood = () => {
    const foods = [
      'Dr. Pepper',
      'Tropicana Orange Juice',
      'Flamin\' Hot Cheetos',
      'Starbucks Iced Coffee',
      'Chex Mix',
      'La Croix',
      'Honey Nut Cheerios',
      'Sparkling Ice',
      'VitaminWater',
      'Juicy Fruit',
      'Coca Cola',
      'Pringles',
      'Lay\'s Potato Chips',
      'Pizza Rolls',
      'Bagel Bites',
      'Taquitos'
    ];
    const somewhatRandomInteger = Math.floor(Math.random() * (foods.length - 1));
    return foods[somewhatRandomInteger];
}

const search = (search, showSearchResults) => {
    const url = "/.netlify/functions/app/search";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ search: search + " upc" })
    })
      .then(x => x.json())
      .then(x => showSearchResults(x, search));
}

module.exports = { getRandomFood, search }