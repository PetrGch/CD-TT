import { actionType } from "../../../../reducer/product";
import { IEditProductFormValue } from "./editProductForm.interface";
import {
    SET_PRODUCT_DATE,
    SET_PRODUCT_DESCRIPTION, SET_PRODUCT_EMAIL,
    SET_PRODUCT_NAME,
    SET_PRODUCT_QUANTITY
} from "./editProductForm.constant";

const initialState: IEditProductFormValue = {
    name: {
        value: "",
        isValid: true
    },
    quantity: {
        value: null,
        isValid: true
    },
    date: {
        value: null,
        isValid: true
    },
    description: {
        value: "",
        isValid: true
    },
    email: {
        value: "",
        isValid: true
    }
};

export function EditProductFormReducer(state = initialState, action: actionType) {
    const { payload } = action;

    switch (action.type) {
        case SET_PRODUCT_NAME:
            return {
                ...state,
                name: {
                    value: payload.value || state.name.value,
                    isValid: payload.isValid
                }
            };
        case SET_PRODUCT_QUANTITY:
            return {
                ...state,
                quantity: { value: payload.value, isValid: payload.isValid }
            };
        case SET_PRODUCT_DATE:
            return {
                ...state,
                date: { value: payload.value, isValid: payload.isValid }
            };
        case SET_PRODUCT_DESCRIPTION:
            return {
                ...state,
                description: { value: payload.value, isValid: payload.isValid }
            };
        case SET_PRODUCT_EMAIL:
            return {
                ...state,
                email: { value: payload.value, isValid: payload.isValid }
            };
        default:
            return state;
    }
}