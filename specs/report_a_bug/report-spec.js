const BugReportPage = require('../../page_object_model/bug_report/bug-report-page')
const LoginPage = require('../../page_object_model/login/login-page');
const ContactPage = require('../../page_object_model/contact/contact-page');
const Credentials = require('../../data/credentials.json');
const { expect } = require('chai');

describe('Report a bug', () => {
    it.only('should be able to submit a report about a bug in the game', () => {
        // Navigate to homepage
        browser.url('./');
                
        // Login into the account
        LoginPage.login(Credentials.activisionLogin.email, Credentials.activisionLogin.password);

        // Skip two-factor Authentication set up
        LoginPage.skipAuthBtn.click();

        // Get logout button to make sure user is logged in
        const logout = LoginPage.logoutLnk.getText();
        expect(logout).to.equal('LOG OUT')
        
        // Click on Contact us
        ContactPage.contactUsLnk.click();
        browser.switchWindow('https://support.activision.com/contact-us');

        // Select Game
        ContactPage.selectGameWarzoneLnk.waitForClickable();
        ContactPage.selectGameWarzoneLnk.click();

        // Select Platform
        ContactPage.selectPlatformWindowsLnk.waitForClickable();
        ContactPage.selectPlatformWindowsLnk.click();

        // Select Topic
        ContactPage.selectTopicLnk.waitForClickable();
        ContactPage.selectTopicLnk.click();

        // Select Issue
        ContactPage.selectIssueLnk.waitForClickable();
        ContactPage.selectIssueLnk.click();

        // Click on suggested solution
        ContactPage.suggestedSolutionsLnk.waitForClickable();
        ContactPage.suggestedSolutionsLnk.click();

        // Select Platform on Bug Report
        BugReportPage.selectPlatformBtn.click();

        // Select Region on Bug Report
        BugReportPage.selectRegionBtn.click();
        
        // Select Category on Bug Report
        BugReportPage.selectCategoryBtn.click();

        // Fill in the additional info tab 
        BugReportPage.additionalDetailsTxt.click();
        BugReportPage.additionalDetailsTxt.addValue('Please ignore this report. I am creating test cases for a framework');

        // Click on Finish button
        BugReportPage.finishBtn.click();
        
        //Verify you are redirected to support page after submitting the report
        BugReportPage.activisionAcesCommunityLnk.waitForDisplayed();
        const acesCommunity = BugReportPage.activisionAcesCommunityLnk.getText();
        expect(acesCommunity).to.equal('ACTIVISION ACES COMMUNITY')
    });
})