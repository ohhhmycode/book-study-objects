import Invitation from "./Invitation";
import Ticket from "./Ticket";

class Bag {
    private _amount: number | null;
    private _invitation: Invitation | null;
    private _ticket: Ticket | null;

    private constructor () {
        this._amount = null;
        this._invitation = null;
        this._ticket = null;
    }

    static withInvitation(invitation: Invitation, amount: number): Bag {
        const instance = new this();
        instance._invitation = invitation;
        instance._amount = amount;
        return instance;
    }

    static withoutInvitation(amount: number): Bag {
        const instance = new this();
        instance._amount = amount;
        return instance;
    }

    hold(ticket: Ticket): number {
        if (this.hasInvitation()) {
            this._ticket = ticket;
            return 0;
        }
        else {
            this._ticket = ticket;
            this.minusAmount(ticket.fee);
            return ticket.fee;
        }
    }

    private hasInvitation(): boolean {
        return this._invitation !== null;
    }

    private hasTicket(): boolean {
        return this._ticket !== null;
    }

    private minusAmount(amount: number): void {
        if (this._amount !== null) {
            this._amount -= amount;
        }
    }

    private plusAmount(amount: number): void {
        if (this._amount !== null) {
            this._amount += amount;
        }
    }
}

export default Bag;