import * as React from "react";
import v4 = require("uuid/v4");

import "./textInputField.less";

interface ITextInputFieldProps {
    value?: string | number;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    isValid?: boolean;
    inputClassName?: string;
    labelClassName?: string;
    maxLength?: number;
    minLength?: number;
    rows?: number;
    cols?: number;

    onChange?: (value: any) => void;
}

interface ITextInputFieldState {
    stateValue?: string | number;
}

export default class TextInputField extends React.PureComponent<ITextInputFieldProps, ITextInputFieldState> {
    public static defaultProps: Partial<ITextInputFieldProps> = {
        value: "",
        placeholder: "",
        isValid: true,
        disabled: false,
        rows: 10,
        cols: 50
    };

    private inputId: string;

    constructor(props: ITextInputFieldProps) {
        super(props);

        this.inputId = v4();
        this.state = {
            stateValue: props.value || ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    public render(): React.ReactNode {
        const { label, value, placeholder, disabled, minLength, maxLength, rows, cols } = this.props;
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
                <textarea
                    id={this.inputId}
                    value={value || stateValue}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={inputClassName}
                    maxLength={maxLength}
                    minLength={minLength}
                    rows={rows}
                    cols={cols}
                    tabIndex={1}

                    onChange={this.handleInputChange}
                />
            </>
        );
    }

    private handleInputChange(event: React.FormEvent<HTMLTextAreaElement>) {
        const { onChange } = this.props;

        if (typeof onChange === "function") {
            onChange(event.currentTarget.value);
        } else {
            this.setState({ stateValue: event.currentTarget.value})
        }
    }

    private generateInputClassName(): string {
        const { inputClassName, isValid } = this.props;
        let className = "lib-textInputField";

        if (!isValid) {
            className = `${className} lib-textInputField_isValid--false`;
        } else if (inputClassName) {
            className = `${className} ${inputClassName}`;
        }

        return className;
    }

    private generateLabelClassName(): string {
        const { labelClassName } = this.props;
        const defaultClass = "lib-textLabelField";

        if (labelClassName) {
            return `${defaultClass} ${labelClassName}`;
        }

        return defaultClass;
    }
}