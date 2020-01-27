import Product from "../../elements/Product/Product.model";
import {AnyAction} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

export function addNewProduct(product: Product): ThunkAction<{}, {}, {}, AnyAction> {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>): any => {
        console.log(dispatch)
    }
}