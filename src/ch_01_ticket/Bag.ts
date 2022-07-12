import Invitation from "./Invitation";
import Ticket from "./Ticket";

class Bag {
    private _amount: number;
    private _invitation: Invitation;
    private _ticket: Ticket;

    constructor (amount: number, invitation: Invitation, ticket: Ticket) {
        this._amount = amount;
        this._invitation = invitation;
        this._ticket = ticket;
    }

    hasInvitation(): boolean {
        return this._invitation !== null;
    }

    hasTicket(): boolean {
        return this._ticket !== null;
    }

    set ticket(ticket: Ticket) {
        this._ticket = ticket;
    }

    minusAmount(amount: number): void {
        this._amount -= amount;
    }

    plusAmount(amount: number): void {
        this._amount += amount;
    }
}

export default Bag;