import * as React from "react";
import {RouteComponentProps, withRouter, WithRouterProps} from "react-router";

import EditProductForm from "../../elements/forms/EditProductForm/EditProductForm";
import { IEditProductFormValue } from "../../elements/forms/EditProductForm/editProductForm.interface";
import Product from "../../elements/Product/Product.model";

import "./editProductPage.less";

interface IEditProductPageProps extends RouteComponentProps<any> {
    addNewProduct: (product: Product) => void
}

interface IEditProductPageState extends IEditProductFormValue {}

class EditProductPage extends React.PureComponent<IEditProductPageProps, IEditProductPageState> {

    constructor(props: IEditProductPageProps) {
        super(props);

        this.state = {
            nameValue: "",
            quantityValue: null,
            dateValue: null,
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
                    >
                        Cancel
                    </div>
                    <div
                        tabIndex={1}
                        className="editProductPageAction__button editProductPageAction__button_type--add"
                        onClick={this.addProduct}
                    >
                        Edit Product
                    </div>
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
        const { addNewProduct } = this.props;
        const newProduct = new Product(nameValue, quantityValue, dateValue, descriptionValue, emailValue);

        addNewProduct(newProduct);
    }

    private cancel() {
        const { history } = this.props;
        console.log(this.props)

        history.push("/");
    }

}

export default withRouter(EditProductPage);