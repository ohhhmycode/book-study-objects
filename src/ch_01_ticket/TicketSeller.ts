import Audience from "./Audience";
import TicketOffice from "./TicketOffice";

class TicketSeller {
    private _ticketOffice: TicketOffice;

    constructor (ticketOffice: TicketOffice) {
        this._ticketOffice = ticketOffice;
    }

    sellTo(audience: Audience): void {
        const ticket = this._ticketOffice.getTicket();
        if (ticket !== undefined) {
            const amount = audience.buy(ticket);
            this._ticketOffice.plusAmount(amount);
        }
    }
}

export default TicketSeller;