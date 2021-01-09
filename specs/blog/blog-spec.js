const LoginPage = require('../../page_object_model/login/login-page');
const BlogPage = require('../../page_object_model/blog/blog-page');
const Credentials = require('../../data/credentials.json');
const { expect } = require('chai');

describe('Login', () => {
    
    it('should be able to go to blog page', () => {
        // Navigate to homepage
        browser.url('./');
                
        // Login into the account
        LoginPage.login(Credentials.activisionLogin.email, Credentials.activisionLogin.password);

        // Skip two-factor Authentication set up
        LoginPage.skipAuthBtn.click();

        // Get logout button to make sure user is logged in
        const logout = LoginPage.logoutLnk.getText();
        expect(logout).to.equal('LOG OUT');
        
        // Click on View all to get redirected to Blog page
        BlogPage.viewAllLnk.click()
        
        // Verify you landed on Blog page
        BlogPage.socialMediaLbl.waitForDisplayed();
        const socialMedia = BlogPage.socialMediaLbl.getText();
        expect(socialMedia).to.equal('Social Media Feed');
    });
})