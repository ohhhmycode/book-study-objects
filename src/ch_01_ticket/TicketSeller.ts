import Audience from "./Audience";
import TicketOffice from "./TicketOffice";

class TicketSeller {
    private _ticketOffice: TicketOffice;

    constructor (ticketOffice: TicketOffice) {
        this._ticketOffice = ticketOffice;
    }

    sellTo(audience: Audience): void {
        this._ticketOffice.sellTicketTo(audience);
    }
}

export default TicketSeller;