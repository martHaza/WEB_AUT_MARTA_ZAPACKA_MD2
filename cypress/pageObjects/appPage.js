import { BasePage } from "./BasePage";
export class appPage extends BasePage{
    static get url(){
        return "/#/";
    }

    static appointmentButton() {
        return cy.get("a#btn-make-appointment");
    }

    static usernameField() {
        return cy.get("input#txt-username");
    }

    static passwordField() {
        return cy.get("input#txt-password");
    }

    static loginButton() {
        return cy.get("button#btn-login");
    }
    
    static comboFacility() {
        return cy.get("select#combo_facility");
    }

    static readmissionBox() {
        return cy.get("input#chk_hospotal_readmission");
    }

    static medicaidRadioButton() {
        return cy.get("input#radio_program_medicaid");
    }

    static calendar() {
        return cy.get("input#txt_visit_date");
    }

    static calendarDay() {
        return cy.get(".day");
    }

    static commentField() {
        return cy.get("textarea#txt_comment");
    }

    static bookAppointmentButton() {
        return cy.get("button#btn-book-appointment");
    }

    static checkFacility() {
        return cy.get("p#facility");
    }

    static  checkReadmission() {
        return cy.get("p#hospital_readmission");
    }

    static checkProgram() {
        return cy.get("p#program");
    }

    static checkVisitDate() {
        return cy.get("p#visit_date");
    }

    static checkComment() {
        return cy.get("p#comment");
    }

    static menuButton() {
        return cy.get("a#menu-toggle");
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
