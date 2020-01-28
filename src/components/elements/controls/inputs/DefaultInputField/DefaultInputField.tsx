import * as React from "react";
import v4 = require("uuid/v4");

import "./defaultInputField.less";
import { dictionaryOfValidationRules, ValidationRuleNames } from "../../../../../util/formValidations";

interface IInputFieldProps {
    value?: string | number | null;
    type?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    isValid?: boolean;
    inputClassName?: string;
    labelClassName?: string;

    onChange?: (value: any) => void;
    onBlur?: (value: any) => void;
}

interface IInputFieldState {
    stateValue: string | number;
}

export default class DefaultInputField extends React.PureComponent<IInputFieldProps, IInputFieldState> {
    public static defaultProps: Partial<IInputFieldProps> = {
        type: "text",
        value: "",
        placeholder: "",
        isValid: true,
        disabled: false
    };

    private inputId: string;

    constructor(props: IInputFieldProps) {
        super(props);

        this.inputId = v4();
        this.state = {
            stateValue: props.value || ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    public render(): React.ReactNode {
        const { type, label, value, placeholder, disabled } = this.props;
        const { stateValue } = this.state;
        const inputClassName: string = this.generateInputClassName();
        const labelClassName: string = this.generateLabelClassName();

        return (
            <>
                {label && <label
                    className={labelClassName}
                    htmlFor={this.inputId}
                >
                    {label}
                </label>}
                <input
                    id={this.inputId}
                    type={type}
                    value={value || stateValue || ""}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={inputClassName}
                    tabIndex={1}

                    onChange={this.handleInputChange}
                    onBlur={this.handleInputBlur}
                />
            </>
        );
    }

    private handleInputChange(event: React.FormEvent<HTMLInputElement>) {
        const { onChange } = this.props;
        const { value } = event.currentTarget;

        if (typeof onChange === "function") {
            onChange(value);
        } else {
            this.setState({ stateValue: event.currentTarget.value })
        }
    }

    private handleInputBlur(event: React.FormEvent<HTMLInputElement>) {
        const { onBlur } = this.props;
        const { value } = event.currentTarget;

        if (typeof onBlur === "function") {
            onBlur(value);
        }
    }

    private generateInputClassName(): string {
        const { inputClassName, isValid } = this.props;
        let className = "lib-defaultInputField";

        if (!isValid) {
            className = `${className} lib-defaultInputField_isValid--false`;
        } else if (inputClassName) {
            className = `${className} ${inputClassName}`;
        }

        return className;
    }

    private generateLabelClassName(): string {
        const { labelClassName } = this.props;
        const defaultClass = "lib-defaultLabelField";

        if (labelClassName) {
            return `${defaultClass} ${labelClassName}`;
        }

        return defaultClass;
    }
}