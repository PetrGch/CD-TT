import { validateFormField, ValidationRuleNames } from "../../../../util/formValidations";
import { actionType } from "../../../../reducer/product";
import {
    SET_PRODUCT_DATE,
    SET_PRODUCT_DESCRIPTION, SET_PRODUCT_EMAIL,
    SET_PRODUCT_NAME,
    SET_PRODUCT_QUANTITY
} from "./editProductForm.constant";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { API_URL } from "../../../../base.constants";

export function validateProductName(value: String): boolean {
    const validationRules = [ValidationRuleNames.IS_REQUIRED];

    return validateFormField(value, validationRules);
}

export function setProductName(value: string): actionType {
    const isValid = validateProductName(value);

    return {
        type: SET_PRODUCT_NAME,
        payload: {
            value,
            isValid
        }
    }
}

export function setProductQuantity(value: number | null): actionType {
    const validationRules = [ValidationRuleNames.IS_REQUIRED];

    return {
        type: SET_PRODUCT_QUANTITY,
        payload: {
            value,
            isValid: true
        }
    }
}

export function setProductDate(value: Date): actionType {
    const validationRules = [ValidationRuleNames.IS_REQUIRED];

    return {
        type: SET_PRODUCT_DATE,
        payload: {
            value,
            isValid: true
        }
    }
}

export function setProductDescription(value: string): actionType {
    const validationRules = [ValidationRuleNames.IS_REQUIRED];

    return {
        type: SET_PRODUCT_DESCRIPTION,
        payload: {
            value,
            isValid: true
        }
    }
}

export function setProductEmail(value: string): actionType {
    const validationRules = [ValidationRuleNames.IS_REQUIRED];

    return {
        type: SET_PRODUCT_EMAIL,
        payload: {
            value,
            isValid: true
        }
    }
}

export function validateAllFiled() {

}

export function isNameUnique(value: string) {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<any> => {
        const url = `${API_URL}?filter[where][name]=${value}`;

        await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response: any) => response.json())
            .then((data: any) => {
                if (!data.error && Array.isArray(data)) {
                    if (data.length) {
                        dispatch({
                            type: SET_PRODUCT_NAME,
                            payload: {
                                isValid: false
                            }
                        });
                    } else {
                        dispatch({
                            type: SET_PRODUCT_NAME,
                            payload: {
                                isValid: true
                            }
                        });
                    }
                }
            })
            .catch((ex: any) => {
                console.log(ex);
            })
    }
}