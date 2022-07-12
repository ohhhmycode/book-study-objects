import Bag from "./Bag";
import Ticket from "./Ticket";

class Audience {
    private _bag: Bag;

    constructor(bag: Bag) {
        this._bag = bag;
    }

    buy(ticket: Ticket): number {
        if (this._bag.hasInvitation()) {
            this._bag.ticket = ticket;
            return 0;
        }
        else {
            this._bag.ticket = ticket;
            this._bag.minusAmount(ticket.fee);
            return ticket.fee;
        }
    }
}

export default Audience;