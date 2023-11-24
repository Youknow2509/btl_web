const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');

mongoose.set('strictQuery', true); // fix: DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.

const Schema = mongoose.Schema;

const form_sub = new Schema(
    {
        name: { type: String, default: '', require: true },
        mail: { type: String, default: '', require: true },
        phone: { type: String, default: '', require: true },
        training: { type: String, default: '', require: true },
        form__messageInput: { type: String, default: '' },
    },
    {
        timestamps: true,
    },
);

// add plugin
mongoose.plugin(slug);
form_sub.plugin(mongoose_delete, {
    deletedAt: true,
    overrideMethods: 'all', // overide add method
});

form_sub.plugin(mongoose_delete, { overrideMethods: 'all' });

module.exports = mongoose.model('form_sub', form_sub);
