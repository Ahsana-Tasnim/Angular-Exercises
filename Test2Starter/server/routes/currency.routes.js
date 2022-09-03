const express = require('express');
const app = express();
const currencyExpressRoute = express.Router();
let CurrencySchema = require('../model/currency');


/**
 * Get all currencies
 */
currencyExpressRoute.route('/').get((req,res)=>{
    CurrencySchema.find((error,data)=>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

/**
 * Create or Add a new currency
 */
 currencyExpressRoute.route('/add-currency').post((req,res,next)=>{
    CurrencySchema.create(req.body,(error, data) =>{
    if (error) {
        return next(error)
    } else {
        res.json(data)
    }
})
})


module.exports = currencyExpressRoute;