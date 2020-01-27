import * as React from "react";

import EditProductForm from "../../elements/forms/EditProductForm/EditProductForm";
import { IEditProductFormValue } from "../../elements/forms/EditProductForm/editProductForm.interface";

import "./addProductPage.less";
import exp = require("constants");
import { withRouter } from "react-router";

interface IAddProductPageState extends IEditProductFormValue {}

class AddProductPage extends React.PureComponent<any, IAddProductPageState> {

    constructor(props: any) {
        super(props);

        this.state = {
            nameValue: "",
            quantityValue: "",
            dateValue: "",
            descriptionValue: "",
            emailValue: ""
        };

        this.updateFormValue = this.updateFormValue.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    public render(): React.ReactNode {
        const { nameValue, quantityValue, dateValue, descriptionValue, emailValue } = this.state;

        return (
            <div className="addProductPage">
                <h1 className="addProductPage__title">Add Product</h1>

                <EditProductForm
                    nameValue={nameValue}
                    quantityValue={quantityValue}
                    dateValue={dateValue}
                    descriptionValue={descriptionValue}
                    emailValue={emailValue}
                    updateFormValue={this.updateFormValue}
                />

                <div className="addProductPage__action addProductPageAction">
                    <div
                        tabIndex={1}
                        className="addProductPageAction__button addProductPageAction__button_type--cancel"
                        onClick={this.cancel}
                    >Cancel</div>
                    <div
                        tabIndex={1}
                        className="addProductPageAction__button addProductPageAction__button_type--add"
                        onClick={this.addProduct}
                    >Add Product</div>
                </div>
            </div>
        )
    }

    private updateFormValue(name: string, value: string | number) {
        const valueForUpdate: {[key: string]: string | number} = {};
        valueForUpdate[name] = value;

        this.setState((prevState: any) => ({ ...prevState, ...valueForUpdate }));
    }

    private addProduct() {
        console.log(this.state);
    }

    private cancel() {
        const { history } = this.props;

        history.push("/");
    }

}

export default withRouter(AddProductPage);