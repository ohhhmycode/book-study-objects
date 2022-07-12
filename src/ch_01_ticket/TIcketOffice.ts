import Audience from "./Audience";
import Ticket from "./Ticket";

class TicketOffice {
    private _amount: number;
    private _tickets: Ticket[];

    constructor(amount: number, tickets: Ticket[]) {
        this._amount = amount;
        this._tickets = tickets;
    }

    sellTicketTo(audience: Audience): void {
        const ticket = this.getTicket();
        if (ticket !== undefined) {
            this.plusAmount(audience.buy(ticket))
        }
    }

    private getTicket(): Ticket | undefined {
        return this._tickets.shift();
    }

    private minusAmount(amount: number) {
        this._amount -= amount;
    }

    private plusAmount(amount: number) {
        this._amount += amount;
    }
}

export default TicketOffice;