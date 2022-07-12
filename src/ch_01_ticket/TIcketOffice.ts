import Ticket from "./Ticket";

class TicketOffice {
    private _amount: number;
    private _tickets: Ticket[];

    constructor(amount: number, tickets: Ticket[]) {
        this._amount = amount;
        this._tickets = tickets;
    }

    getTicket(): Ticket | undefined {
        return this._tickets.shift();
    }

    minusAmount(amount: number) {
        this._amount -= amount;
    }

    plusAmount(amount: number) {
        this._amount += amount;
    }
}

export default TicketOffice;