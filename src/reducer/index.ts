import { combineReducers } from 'redux';
import { products } from "./product";
import forms from "../components/elements/forms/forms.reducer";

const rootReducer = combineReducers({
    products,
    forms
});

export default rootReducer;