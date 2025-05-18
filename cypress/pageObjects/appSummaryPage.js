import { BasePage } from "./basePage";
export class appSummaryPage extends BasePage{
    static get url(){
        return "appointment.php#summary";
    }

    static get checkFacility() {
        return cy.get("p#facility");
    }

    static get checkReadmission() {
        return cy.get("p#hospital_readmission");
    }

    static get checkProgram() {
        return cy.get("p#program");
    }

    static get checkVisitDate() {
        return cy.get("p#visit_date");
    }

    static get checkComment() {
        return cy.get("p#comment");
    }
}