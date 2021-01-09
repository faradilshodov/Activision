"use strict";

class Login {
    // Reusable selector getters that will help us to avoid selector duplicates
    get loginLnk() { return $('[class="header-auth-link login-link logged-out"]');}
    get emailTxt() { return $('#username');}
    get passwordTxt() { return $('#password');}
    get loginBtn() { return $('#login-button');}
    get loginErrLbl() { return $('#sign-in-error');}
    get skipAuthBtn() { return $('.skip-tfa');}
    get logoutLnk() { return $('[class="header-auth-link logout-link logged-in"]');}
    
    // Helper method
    login(email, password) {
        this.loginLnk.waitForClickable();
        this.loginLnk.click();
        browser.switchWindow('https://s.activision.com/activision/login?redirectUrl=https%3A%2F%2Fwww.activision.com%2F');
        this.emailTxt.waitForClickable();
        this.emailTxt.setValue(email);
        this.passwordTxt.setValue(password);
        this.loginBtn.click();        
    }
}

module.exports = new Login();