module.exports = {
    mutipleMongooeseToObj: function(mongooseArrs) {
        return mongooseArrs.map(mongooseArr => mongooseArr.toObject())
    },
    mongooeseToObj: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}