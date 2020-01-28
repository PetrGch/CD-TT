import { connect } from "react-redux";
import EditProductForm from "./EditProductForm";
import {
    isNameUnique,
    setProductDate,
    setProductDescription,
    setProductEmail,
    setProductName,
    setProductQuantity
} from "./editProductForm.action";

const mapStateToProps = (state: any) => {
    return {
        name: state.forms.editProductForm.name,
        quantity: state.forms.editProductForm.quantity,
        date: state.forms.editProductForm.date,
        description: state.forms.editProductForm.description,
        email: state.forms.editProductForm.email
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    setProductName: (value: string) => {
        dispatch(setProductName(value));
    },
    setProductQuantity: (value: number | null) => {
        dispatch(setProductQuantity(value))
    },
    setProductDate: (value: Date) => {
        dispatch(setProductDate(value))
    },
    setProductDescription: (value: string) => {
        dispatch(setProductDescription(value))
    },
    setProductEmail: (value: string) => {
        dispatch(setProductEmail(value))
    },
    isNameUnique: (value: string) => {
        dispatch(isNameUnique(value))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProductForm);