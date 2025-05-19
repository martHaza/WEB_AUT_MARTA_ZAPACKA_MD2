const { appPage } = require("../pageObjects/appPage");
const { appSummaryPage } = require("../pageObjects/appSummaryPage");
const { appHistoryPage } = require("../pageObjects/appHistoryPage");
const { loginPage } = require("../pageObjects/loginPage")

describe('katalon-demo-cura scenarios', () => {
  it('Scenario 1 - Make an Appointment', () => {
    loginPage.visit();
    loginPage.appointmentButton.click();
    loginPage.usernameField.type("John Doe");
    loginPage.passwordField.type("ThisIsNotAPassword");
    loginPage.loginButton.click();

    // set the following values:
    const facility = 'Seoul CURA Healthcare Center';
    appPage.comboFacility.select(facility);
    appPage.readmissionBox.check();
    appPage.medicaidRadioButton();
    appPage.calendar.click();
    const day = '30';
    appPage.calendarDay(day).click();
    const comment = 'CURA Healthcare Service';
    appPage.commentField.type(comment);
    appPage.bookAppointmentButton.click();

    // validate that previously set values are correct
    appSummaryPage.checkFacility.should("contain", facility);
    appSummaryPage.checkReadmission.should("contain", "Yes");
    appSummaryPage.checkProgram.should("contain", "Medicaid");
    appSummaryPage.checkVisitDate.should("contain", day);
    appSummaryPage.checkComment.should("contain", comment);
  });

  it('Scenario 2 - - Appointment history empty'), () => {
    loginPage.visit();
    loginPage.appointmentButton.click();
    loginPage.usernameField.type("John Doe");
    loginPage.passwordField.type("ThisIsNotAPassword");
    loginPage.loginButton.click();
    appPage.menuButton.click();
    appHistoryPage.validateSidebar();
    appHistoryPage.historyButton();
    appHistoryPage.validateNoAppointment();

  }
});
  


