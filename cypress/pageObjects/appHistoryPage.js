import { BasePage } from "./basePage";
export class HistoryPage extends BasePage{
    static get url(){
        return "/history.php#history";
    }

    static validateNoAppointment() {
        return cy.get("section#history").should("contain", "No appointment.");
    }
}