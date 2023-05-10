import { combineReducers } from 'redux';
import { producReducer, selectedProductRedeucer } from './productReducer';

const reducers = combineReducers({
    allProducts: producReducer,
    product: selectedProductRedeucer,
});

export default reducers;