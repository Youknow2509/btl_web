const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.set('strictQuery', true); // fix: DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.

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
