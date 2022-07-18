import Customer from "./Customer";
import Money from "./Money";
import Screening from "./Screening";

class Reservation {
    private _customer: Customer;
    private _screening: Screening;
    private _fee: Money;
    private _audienceCount: number;

    constructor(customer: Customer, screening: Screening, fee: Money, audienceCount: number) {
        this._customer = customer;
        this._screening = screening;
        this._fee = fee;
        this._audienceCount = audienceCount;
    }
}

export default Reservation;