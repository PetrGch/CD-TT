interface IStringProperty {
    value: string;
    isValid: boolean;
}

interface INumberProperty {
    value: number | null;
    isValid: boolean;
}

interface IDateProperty {
    value: Date | null;
    isValid: boolean;
}

export interface IEditProductFormValue {
    name: IStringProperty;
    quantity: INumberProperty;
    date: IDateProperty;
    description: IStringProperty;
    email: IStringProperty
}

export type UpdateFormValueParameters = { name: string, value: any, isValid?: boolean };
export type UpdateFormValue = (parameters: UpdateFormValueParameters) => void;