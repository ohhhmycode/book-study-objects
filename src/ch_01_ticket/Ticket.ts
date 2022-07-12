class Ticket {
    private _fee: number;

    constructor (fee: number) {
        this._fee = fee;
    }

    get fee(): number {
        return this._fee;
    }
}

export default Ticket;