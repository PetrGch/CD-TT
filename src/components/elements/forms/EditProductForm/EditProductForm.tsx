import * as React from "react";
import DatePicker from "react-datepicker";

import DefaultInputField from "../../controls/inputs/DefaultInputField/DefaultInputField";
import TextInputField from "../../controls/inputs/TextInputField/TextInputField";

import "./editProductForm.less";
import { IEditProductFormValue, UpdateFormValue, UpdateFormValueParameters } from "./editProductForm.interface";

interface IEditProductFormProps extends IEditProductFormValue {
    setProductName: (value: string) => void;
    setProductQuantity: (value: number | null) => void;
    setProductDate: (value: Date) => void;
    setProductDescription: (value: string) => void;
    setProductEmail: (value: string) => void;
    isNameUnique: (value: string) => void;
}

interface IEditProductFormState extends IEditProductFormValue {}

export default class EditProductForm extends React.PureComponent<IEditProductFormProps, IEditProductFormState> {

    constructor(props: any) {
        super(props);

        this.onProductNameChange = this.onProductNameChange.bind(this);
        this.onProductNameBlur = this.onProductNameBlur.bind(this);
        this.onQuantityChange = this.onQuantityChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
    }

    public render(): React.ReactNode {
        const { name, quantity, date, description, email } = this.props;

        return (
            <div className="editProductForm">
                <div className="editProductForm__input">
                    <DefaultInputField
                        label="Product name*"
                        value={name.value}
                        isValid={name.isValid}
                        placeholder="Product name"
                        onChange={this.onProductNameChange}
                        onBlur={this.onProductNameBlur}
                    />
                </div>

                <div className="editProductForm__input">
                    <DefaultInputField
                        label="Quantity"
                        value={quantity.value}
                        isValid={quantity.isValid}
                        placeholder="Quantity"
                        onChange={this.onQuantityChange}
                    />
                </div>

                <div className="editProductForm__input editProductFormInput">
                    <span className="editProductFormInput__label">Date</span>
                    <DatePicker
                        className="editProductFormInput__date"
                        selected={date.value}
                        onChange={this.onDateChange}
                        placeholderText="Date"
                    />
                </div>

                <div className="editProductForm__textarea">
                    <TextInputField
                        label="Description"
                        value={description.value}
                        isValid={description.isValid}
                        placeholder="Description"
                        onChange={this.onDescriptionChange}
                    />
                </div>

                <div className="editProductForm__input">
                    <DefaultInputField
                        label="Email*"
                        value={email.value}
                        isValid={email.isValid}
                        placeholder="Email"
                        onChange={this.onEmailChange}
                    />
                </div>
            </div>
        )
    }

    private onProductNameBlur(value: string) {
        const { isNameUnique } = this.props;

        isNameUnique(value);
    }

    private onProductNameChange(value: string) {
        const { setProductName } = this.props;

        setProductName(value);
    }

    private onQuantityChange(value: number | null) {
        const { setProductQuantity } = this.props;

        setProductQuantity(value);
    }

    private onDateChange(value: Date) {
        const { setProductDate } = this.props;

        setProductDate(value);
    }

    private onDescriptionChange(value: string) {
        const { setProductDescription } = this.props;

        setProductDescription(value);
    }

    private onEmailChange(value: string) {
        const { setProductEmail } = this.props;

        setProductEmail(value);
    }
}