"use strict";

class Profile {
    // Reusable selector getters that will help us to avoid selector duplicates
    get profileLnk() { return $('[class="header-auth-link profile-link logged-in"]');}
    get basicInfoLnk() { return $('.personal-information');}
    get editFullNameBtn() { return $('.userName .editLink');}
    get editFirstNameTxt() { return $('#new-first-name');}
    get editLastNameTxt() { return $('#new-last-name');}
    get saveBtn() { return $('[class="userName personalInfo selected"] [class="submit"]');}
    get newNameTxt() { return $('[class="userName personalInfo"] [class="personalInfoDisplay"]');}
    
    // Helper method
    edit(firstName, lastName) {
        this.basicInfoLnk.click();
        this.editFullNameBtn.click();
        browser.pause(2000);
        this.editFirstNameTxt.waitForClickable();
        this.editFirstNameTxt.doubleClick();
        this.editFirstNameTxt.setValue(firstName);
        this.editLastNameTxt.setValue(lastName);
        this.saveBtn.click();
    }
}

module.exports = new Profile();