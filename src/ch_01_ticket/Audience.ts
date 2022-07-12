import Bag from "./Bag";
import Ticket from "./Ticket";

class Audience {
    private _bag: Bag;

    constructor(bag: Bag) {
        this._bag = bag;
    }

    buy(ticket: Ticket): number {
        return this._bag.hold(ticket);
    }
}

export default Audience;