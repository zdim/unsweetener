const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const port = 5000
const app = express()

const KEY = 'RV19YMRX3f7stIjoaD4cijUtdqs7RRYwl9w2QWok';

app.use(cors());
app.use(bodyParser.json());

app.post('/search',  (req, res, next) => {
    const { search } = req.body;
    const apiUrl = `https://api.nal.usda.gov/ndb/search/?format=json&q=${search}&sort=r&max=25&offset=0&api_key=${KEY}`;
    if(search) { 
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => res.send(processSearchResults(data)))
            .catch(err => console.error(err));
    }
});

function trimName(name) {
    return name.slice(0, name.indexOf(', UPC: '));
}

function processSearchResults(data) {
    if(data && data.list) {
        const list = data.list.item;
        const results = list.map(x => {
            return { 
                id: x.ndbno,
                name: trimName(x.name),
                offset: x.offset
            };
        });
        return { results: results };
    }
    return null;
}

app.get('/item/:id', (req, res) => {
    const { id } = req.params;
    const apiUrl = `https://api.nal.usda.gov/ndb/V2/reports?ndbno=${id}&type=b&format=json&api_key=${KEY}`
    fetch(apiUrl).then(res => res.json())
        .then(data => res.send(processItemData(data)))
        .catch(err => console.error(err));
});

function processItemData(data) {
    if(data && data.foods) {
        const foodItem = data.foods[0];
        if(foodItem.food) {
            const { ing, desc } = foodItem.food;
            return { 
                name: trimName(desc.name),
                ingredients: ing.desc 
            }
        }
    }    
    return { error: "No item found!" };
}

app.listen(port, (err) => {
    if(err) {
        console.error(err);
    }
    console.log(`Listening on port ${port}`);
});