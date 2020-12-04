//import function to combine reducers
import { combineReducers } from 'redux'

// import partial reducers
import { productDetailsReducer, productListReducer } from './products/product.reducers';

// combine multiple reducers
export default combineReducers({
    // product reducer
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productLine: productListReducer,
    // other reducers
    // ...
})