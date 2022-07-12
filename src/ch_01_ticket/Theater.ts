import Audience from "./Audience";
import TicketSeller from "./TicketSeller";

class Theater {
    private _ticketSeller: TicketSeller;

    constructor (ticketSeller: TicketSeller) {
        this._ticketSeller = ticketSeller;
    }

    enter(audience: Audience): void {
        this._ticketSeller.sellTo(audience);
    }
}

export default Theater;