export enum ValidationRuleNames {
    IS_REQUIRED = "isRequired",
    MIN_LENGTH = "minLength"
}

export interface IValidationRules {
    isRequired: (value: string | number | Date | null) => boolean;
    minLength: any;
}

export const dictionaryOfValidationRules: IValidationRules = {
    isRequired: (value: string | number | Date | null): boolean => !!value,
    minLength: () => true
};

export function validateFormField(value: any, validationRules: ValidationRuleNames[]): boolean {
    return validationRules.some((validationRule: ValidationRuleNames) => {
        const targetRule = dictionaryOfValidationRules[validationRule];
        if (targetRule && typeof targetRule === "function") {
            return targetRule(value);
        }
    })
}