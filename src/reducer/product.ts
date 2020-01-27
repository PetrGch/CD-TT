import { ADD_PRODUCT } from "../components/pages/EditProductPage/editProductPage.constant";

const initialState = {
    products: []
};

type actionType = {
    payload: any;
    type: string;
}

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