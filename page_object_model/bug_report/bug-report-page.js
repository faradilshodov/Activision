"use strict";

class BugReport {
    // Reusable selector getters that will help us to avoid selector duplicates
    get selectPlatformBtn() { return $('#ctl00_ContentPlaceHolder1_ctl01_SurveyDropDownList [value="PC"]');}
    get selectRegionBtn() { return $('#ctl00_ContentPlaceHolder1_ctl02_SurveyDropDownList [value="North America"]');}
    get selectCategoryBtn() { return $('#ctl00_ContentPlaceHolder1_ctl03_SurveyDropDownList [value="Other"]');}
    get additionalDetailsTxt() { return $('#ctl00_ContentPlaceHolder1_ctl05_SurveyTextBox');}
    get finishBtn() { return $('.buttons [value="Finish"]');}
    get activisionAcesCommunityLnk() { return $('.container [href="https://support.activision.com/community"] p');}
    get surveyDeclineBtn() { return $('#surveyDecline');}    
}

module.exports = new BugReport();