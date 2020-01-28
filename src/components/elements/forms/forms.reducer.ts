import { combineReducers } from "redux";
import { products } from "../../../reducer/product";
import { EditProductFormReducer } from "./EditProductForm/editProductForm.reducer";

const forms = combineReducers({
    editProductForm: EditProductFormReducer
});

export default forms;