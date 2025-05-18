import { BasePage } from "./basePage";
export class AppointmentPage extends BasePage{
    static get url(){
        return "/#appointment";
    }
    
    static get comboFacility() {
        return cy.get("select#combo_facility");
    }

    static get readmissionBox() {
        return cy.get("input#chk_hospotal_readmission");
    }

    static get medicaidRadioButton() {
        return cy.get("input#radio_program_medicaid");
    }

    static get calendar() {
        return cy.get("input#txt_visit_date");
    }

    static get commentField() {
        return cy.get("textarea#txt_comment");
    }

    static get bookAppointmentButton() {
        return cy.get("button#btn-book-appointment");
    }

    static get menuButton() {
        return cy.get("a#menu-toggle");
    }
}
