import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";

import EditProductForm from "../../elements/forms/EditProductForm/editProductForm.container";

import "./addProductPage.less";
import Product from "../../elements/Product/Product.model";
import { IEditProductFormValue } from "../../elements/forms/EditProductForm/editProductForm.interface";

interface IAddProductPageProps extends RouteComponentProps<any>, IEditProductFormValue {
    addNewProduct: (product: Product) => void
}

class AddProductPage extends React.PureComponent<IAddProductPageProps, {}> {

    constructor(props: IAddProductPageProps) {
        super(props);

        this.addNewProduct = this.addNewProduct.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    public render(): React.ReactNode {
        return (
            <div className="addProductPage">
                <h1 className="addProductPage__title">Add Product</h1>

                <EditProductForm/>

                <div className="addProductPage__action addProductPageAction">
                    <div
                        tabIndex={1}
                        className="addProductPageAction__button addProductPageAction__button_type--cancel"
                        onClick={this.cancel}
                    >
                        Cancel
                    </div>
                    <div
                        tabIndex={1}
                        className="addProductPageAction__button addProductPageAction__button_type--add"
                        onClick={this.addNewProduct}
                    >
                        Add Product
                    </div>
                </div>
            </div>
        )
    }

    private addNewProduct() {
        const { addNewProduct, name, quantity, date, description, email } = this.props;
        const newProduct = new Product(name.value, quantity.value, date.value, description.value, email.value)

        addNewProduct(newProduct);
    }

    private cancel() {
        const { history } = this.props;

        history.push("/");
    }

}

export default withRouter(AddProductPage);