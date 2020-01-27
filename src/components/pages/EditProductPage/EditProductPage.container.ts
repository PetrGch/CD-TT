import { connect } from "react-redux";
import EditProductPage from "./EditProductPage";

const mapStateToProps = (state: any) => ({
    products: state.products
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatch
});

const EditProductPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProductPage);

export default EditProductPageContainer;