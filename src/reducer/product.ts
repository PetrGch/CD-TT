import Product from "../components/elements/Product/Product.model";
import { ADD_PRODUCT } from "../components/pages/AddProductPage/addProductPage.constant";

export type actionType = {
    payload: any;
    type: string;
}

const initialState: { products: Product[] } = {
    products: []
};

export const products = (state = initialState, action: actionType) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload.product]
            };
        default:
            return state;
    }
};