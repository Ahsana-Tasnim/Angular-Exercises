const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const currencySchema = new mongoose.Schema({
    country: {
        type: String,
        required: [true, 'Country is required'],
        trim: true,
        unique: [true, 'Only one currency code per country']     
    }, currencyCode: {
        type: String,
        required: [true, 'Currency code is required'],
        trim: true,
        minlength: [3, 'Currency code minimum length is 3'],        
        uppercase: true
    }, name: {
        type: String,
        required: [true, 'Currency name is required'],
        trim: true        
    }, modifiedDate:{
        type: Date,
        default: new Date()
    }
},{
    collection: 'currencies'
}
);


module.exports = mongoose.model('CurrencySchema', currencySchema);