import * as React from "react";
import DatePicker from "react-datepicker";

import DefaultInputField from "../../controls/inputs/DefaultInputField/DefaultInputField";
import TextInputField from "../../controls/inputs/TextInputField/TextInputField";

import "./editProductForm.less";
import { IEditProductFormValue } from "./editProductForm.interface";

interface IEditProductFormProps extends IEditProductFormValue {
    updateFormValue: (name: string, value: string | number | Date) => void;
}

interface IEditProductFormState extends IEditProductFormValue {}

export default class EditProductForm extends React.PureComponent<IEditProductFormProps, IEditProductFormState> {

    constructor(props: any) {
        super(props);

        this.onProductNameChange = this.onProductNameChange.bind(this);
        this.onQuantityChange = this.onQuantityChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
    }

    public render(): React.ReactNode {
        const { nameValue, quantityValue, dateValue, descriptionValue, emailValue } = this.props;

        return (
            <div className="editProductForm">
                <div className="editProductForm__input">
                    <DefaultInputField
                        label="Product name*"
                        value={nameValue}
                        placeholder="Product name"
                        onChange={this.onProductNameChange}
                    />
                </div>

                <div className="editProductForm__input">
                    <DefaultInputField
                        label="Quantity"
                        value={quantityValue}
                        placeholder="Quantity"
                        onChange={this.onQuantityChange}
                    />
                </div>

                <div className="editProductForm__input editProductFormInput">
                    <span className="editProductFormInput__label">Date</span>
                    <DatePicker
                        className="editProductFormInput__date"
                        selected={dateValue}
                        onChange={this.onDateChange}
                        placeholderText="Date"
                    />
                </div>

                <div className="editProductForm__textarea">
                    <TextInputField
                        label="Description"
                        value={descriptionValue}
                        placeholder="Description"
                        onChange={this.onDescriptionChange}
                    />
                </div>

                <div className="editProductForm__input">
                    <DefaultInputField
                        label="Email*"
                        value={emailValue}
                        placeholder="Email"
                        onChange={this.onEmailChange}
                    />
                </div>
            </div>
        )
    }

    private onProductNameChange(event: React.FormEvent<HTMLInputElement>) {
        const { updateFormValue } = this.props;

        updateFormValue("nameValue", event.currentTarget.value);
    }

    private onQuantityChange(event: React.FormEvent<HTMLInputElement>) {
        const { updateFormValue } = this.props;

        updateFormValue("quantityValue", event.currentTarget.value);
    }

    private onDateChange(date: Date) {
        const { updateFormValue } = this.props;

        updateFormValue("dateValue", date);
    }

    private onDescriptionChange(event: React.FormEvent<HTMLTextAreaElement>) {
        const { updateFormValue } = this.props;

        updateFormValue("descriptionValue", event.currentTarget.value);
    }

    private onEmailChange(event: React.FormEvent<HTMLInputElement>) {
        const { updateFormValue } = this.props;

        updateFormValue("emailValue", event.currentTarget.value);
    }
}