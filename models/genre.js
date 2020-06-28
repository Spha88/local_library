var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var genreSchema = new Schema({
    name: { type: String, minlength: 3, maxlength: 1000 },
})

genreSchema
    .virtual('url')
    .get(function () {
        return '/catalogue/genre/' + genreSchema._id;
    });

//Export model
module.exports = mongoose.model('Genre', genreSchema);