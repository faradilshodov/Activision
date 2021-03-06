const LoginPage = require('../../page_object_model/login/login-page');
const Credentials = require('../../data/credentials.json');
const { expect } = require('chai');

describe('Login', () => {
    it('should not be able to login with none matching credentials', () => {
        // Navigate to homepage
        browser.url('./');
                
        // Login into the account
        LoginPage.login('asdasd123@gmail.com', 'Testsdf123');
        
        // Get the error message
        const loginErr = LoginPage.loginErrLbl.getText();
        
        // Verify the error message
        expect(loginErr).to.equal('You have entered an invalid email / password combination.');
    });

    it('should be able to login with matching credentials', () => {
        // Navigate to homepage
        browser.url('./');
                
        // Login into the account
        LoginPage.login(Credentials.activisionLogin.email, Credentials.activisionLogin.password);

        // Skip two-factor Authentication set up
        LoginPage.skipAuthBtn.click();

        // Get logout button to make sure user is logged in
        const logout = LoginPage.logoutLnk.getText();
        expect(logout).to.equal('LOG OUT')
    });
})