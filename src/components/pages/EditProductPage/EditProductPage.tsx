import * as React from "react";

import EditProductForm from "../../elements/forms/EditProductForm/EditProductForm";

import "./editProductPage.less";
import { IEditProductFormValue } from "../../elements/forms/EditProductForm/editProductForm.interface";
import { withRouter } from "react-router";
import Product from "../../elements/Product/Product.model";

interface IEditProductPageState extends IEditProductFormValue {}

class EditProductPage extends React.PureComponent<any, IEditProductPageState> {

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
            <div className="editProductPage">
                <h1 className="editProductPage__title">Edit Product</h1>

                <EditProductForm
                    nameValue={nameValue}
                    quantityValue={quantityValue}
                    dateValue={dateValue}
                    descriptionValue={descriptionValue}
                    emailValue={emailValue}
                    updateFormValue={this.updateFormValue}
                />

                <div className="editProductPage__action editProductPageAction">
                    <div
                        tabIndex={1}
                        className="editProductPageAction__button editProductPageAction__button_type--cancel"
                        onClick={this.cancel}
                    >Cancel</div>
                    <div
                        tabIndex={1}
                        className="editProductPageAction__button editProductPageAction__button_type--add"
                        onClick={this.addProduct}
                    >Edit Product</div>
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
        const { nameValue, quantityValue, dateValue, descriptionValue, emailValue } = this.state;
        console.log(this.state);
        const newProduct = new Product(nameValue, quantityValue, dateValue, descriptionValue, emailValue);
    }

    private cancel() {
        const { history } = this.props;
        console.log(this.props)

        // history.push("/");
    }

}

export default withRouter(EditProductPage);