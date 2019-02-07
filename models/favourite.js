let mongoose = require('mongoose');

// create a model class
let favouriteSchema = mongoose.Schema({
    name: String,
    description: String

}, {
    collection: "favourite_things"
});

module.exports = mongoose.model('Bal', favouriteSchema);