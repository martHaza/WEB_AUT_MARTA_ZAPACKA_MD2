import { BasePage } from "./basePage";
export class HistoryPage extends BasePage{
    static get url(){
        return "/history.php#history";
    }

    static validateNoAppointment() {
        return cy.get("section#history").should("contain", "No appointment.");
    }

    static validateSidebar() {
        return cy.get("nav#sidebar-wrapper").should("have.class", "active");
    }

    static get historyButton() {
        return cy.get('[href="history.php#history"]');
    }
}