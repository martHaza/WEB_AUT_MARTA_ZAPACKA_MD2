import { appPage } from "../pageObjects/appPage";
// import { basePage } from "../pageObjects/basePage";

describe('katalon-demo-cura scenarios', () => { 
  beforeEach(() => {
      //loginPage.visit();
      cy.visit('https://katalon-demo-cura.herokuapp.com/')
    });
  it('Scenario 1 - Make an Appointment', () => {
    
    
    appPage.appointmentButton().click();
    appPage.usernameField().type("John Doe");
    appPage.passwordField().type("ThisIsNotAPassword");
    appPage.loginButton().click();

    // set the following values:
    const facility = 'Seoul CURA Healthcare Center';
    appPage.comboFacility().select(facility);
    appPage.readmissionBox().check();
    appPage.medicaidRadioButton();
    appPage.calendar().click();
    const day = '30';
    appPage.calendarDay().contains("30").click();
    const comment = 'CURA Healthcare Service';
    appPage.commentField().type(comment);
    appPage.bookAppointmentButton().click();

    // validate that previously set values are correct
    appPage.checkFacility().should("contain", facility);
    appPage.checkReadmission().should("contain", "Yes");
    //appPage.checkProgram().should("contain", "Medicaid");
    appPage.checkVisitDate().should("contain", day);
    appPage.checkComment().should("contain", comment);
  });

  it('Scenario 2 - - Appointment history empty'), () => {
    appPage.visit();
    appPage.appointmentButton().click();
    appPage.usernameField().type("John Doe");
    appPage.passwordField().type("ThisIsNotAPassword");
    appPage.loginButton().click();
    appPage.menuButton().click();
    appPage.validateSidebar();
    appPage.historyButton();
    appPage.validateNoAppointment();

  }
});
  


