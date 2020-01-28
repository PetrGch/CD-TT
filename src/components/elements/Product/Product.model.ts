import v4 = require("uuid/v4");

export default class Product {

    private _id: string;
    private _name: string;
    private _quantity: number | null;
    private _date: Date | null;
    private _description: string;
    private _email: string;


    constructor(
        name: string,
        quantity: number | null,
        date: Date | null,
        description: string,
        email: string
    ) {
        this._id = v4();
        this._name = name;
        this._quantity = quantity;
        this._date = date;
        this._description = description;
        this._email = email;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get quantity(): number | null {
        return this._quantity;
    }

    set quantity(value: number | null) {
        this._quantity = value;
    }

    get date(): Date | null {
        return this._date;
    }

    set date(value: Date | null) {
        this._date = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    public serialize() {
        const preparedObject = {
            name: this.name,
            quantity: this.quantity,
            date: this.date,
            description: this.description,
            email: this.email
        };

        return JSON.stringify(preparedObject)
    }

}