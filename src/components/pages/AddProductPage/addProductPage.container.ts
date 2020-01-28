import { connect } from "react-redux";
import Product from "../../elements/Product/Product.model";
import { addNewProduct } from "./addProductPage.action";
import AddProductPage from "./AddProductPage";

const mapStateToProps = (state: any) => {
    return {
        products: state.products,
        name: state.forms.editProductForm.name,
        quantity: state.forms.editProductForm.quantity,
        date: state.forms.editProductForm.date,
        description: state.forms.editProductForm.description,
        email: state.forms.editProductForm.email
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    addNewProduct: (product: Product) => {
        dispatch(addNewProduct(product))
    }
});

const AddProductPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddProductPage);

export default AddProductPageContainer;