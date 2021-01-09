"use strict";

class Contact {
    // Reusable selector getters that will help us to avoid selector duplicates
    get contactUsLnk() { return $('.footer-section-secondary [href="http://support.activision.com/contact_us"]');}
    get selectGameWarzoneLnk() { return $('[alt="Call of Duty: Warzone"]');}
    get selectPlatformWindowsLnk() { return $('.windows');}
    get selectTopicLnk() { return $('[data-title="Game Performance"]');}
    get selectIssueLnk() { return $('[data-title="I want to report a bug about Warzone"]');}
    get suggestedSolutionsLnk() { return $('.panel-body #solutions');}
}

module.exports = new Contact();