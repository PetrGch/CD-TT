import { connect } from "react-redux";
import EditProductPage from "./EditProductPage";
import {addNewProduct} from "./editProductPage.action";
import Product from "../../elements/Product/Product.model";
import {Dispatch} from "redux";

const mapStateToProps = (state: any) => ({
    products: state.products
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    addNewProduct: (product: Product) => {
        dispatch(addNewProduct(product))
    }
});

const EditProductPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProductPage);

export default EditProductPageContainer;