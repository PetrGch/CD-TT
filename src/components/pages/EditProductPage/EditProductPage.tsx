import * as React from "react";
import {RouteComponentProps, withRouter} from "react-router";

import EditProductForm from "../../elements/forms/EditProductForm/editProductForm.container";
import Product from "../../elements/Product/Product.model";

import "./editProductPage.less";
import { IEditProductFormValue } from "../../elements/forms/EditProductForm/editProductForm.interface";

interface IEditProductPageProps extends RouteComponentProps<any>, IEditProductFormValue {
    updateProduct: (product: Product) => void
}

class EditProductPage extends React.PureComponent<IEditProductPageProps, {}> {

    constructor(props: IEditProductPageProps) {
        super(props);

        this.updateProduct = this.updateProduct.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    public render(): React.ReactNode {
        return (
            <div className="editProductPage">
                <h1 className="editProductPage__title">Edit Product</h1>

                <EditProductForm/>

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
                        onClick={this.updateProduct}
                    >
                        Edit Product
                    </div>
                </div>
            </div>
        )
    }

    private updateProduct() {
        const { updateProduct, name, quantity, date, description, email } = this.props;
        const newProduct = new Product(name.value, quantity.value, date.value, description.value, email.value)

        updateProduct(newProduct);
    }

    private cancel() {
        const { history } = this.props;

        history.push("/");
    }

}

export default withRouter(EditProductPage);