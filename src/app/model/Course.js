const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: '' , require: true},
    description: { type: String, default: '' },
    img: { type: String, default: '' },
    videoid: { type: String, default: '', require: true },
    level: { type: String, default: '' },
    slug: { type: String, slug: 'name', unique: true}
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);
