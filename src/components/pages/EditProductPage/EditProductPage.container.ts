import { connect } from "react-redux";
import EditProductPage from "./EditProductPage";
import { updateProduct } from "./editProductPage.action";
import Product from "../../elements/Product/Product.model";

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
    updateProduct: (product: Product) => {
        dispatch(updateProduct(product))
    }
});

const EditProductPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProductPage);

export default EditProductPageContainer;