/**
 * Created by xprk689 on 5/23/2016.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var bookModel = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    genre: {
        type: String
    },
    read:{
        type: Boolean, default : false
    }
});
module.exports = mongoose.model('Book',bookModel);//calling bookModel with Book and loading it
console.log('Loaded bookModel.js..');
