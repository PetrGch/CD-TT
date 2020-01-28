import Product from "../../elements/Product/Product.model";
import {AnyAction} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import { API_URL } from "../../../base.constants";
import { ADD_PRODUCT } from "./addProductPage.constant";

export function addNewProduct(product: Product): ThunkAction<{}, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<any> => {
        const url = API_URL;
        const body = product.serialize();

        await fetch(url, {
            method: "POST",
            body: body,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response: any) => response.json())
            .then((data: any) => {
                if (!data.error) {
                    dispatch({ type: ADD_PRODUCT, payload: data });
                }
            })
            .catch((ex: any) => {
                console.log(ex);
            })
    }
}
