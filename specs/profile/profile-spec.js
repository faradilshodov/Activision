const ProfilePage = require('../../page_object_model/profile/profile-page')
const LoginPage = require('../../page_object_model/login/login-page');
const Credentials = require('../../data/credentials.json');
const { expect } = require('chai');

describe('Profile', () => {
    it.only('should be able to edit First and Last names', () => {
        // Navigate to homepage
        browser.url('./');
                
        // Login into the account
        LoginPage.login(Credentials.activisionLogin.email, Credentials.activisionLogin.password);

        // Skip two-factor Authentication set up
        LoginPage.skipAuthBtn.click();

        // Get logout button to make sure user is logged in
        const logout = LoginPage.logoutLnk.getText();
        expect(logout).to.equal('LOG OUT')

        // Go to your profile
        ProfilePage.profileLnk.click();
        browser.pause(1000)
        ProfilePage.profileLnk.click();
        browser.switchWindow('https://s.activision.com/activision/profile');
       
        // Edit your first and last name
        ProfilePage.edit('Testiest', 'Testier');

        // Verify your changes took effect
        ProfilePage.newNameTxt.waitForDisplayed();
        const newName = ProfilePage.newNameTxt.getText();
        expect(newName).to.equal('Testiest Testier');
    });
})