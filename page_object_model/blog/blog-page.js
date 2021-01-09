"use strict";

class Blog {
    // Reusable selector getters that will help us to avoid selector duplicates
    get viewAllLnk() { return $('[class="blog-btn blog-btn-secondary"]');}
    get socialMediaLbl() { return $('.blog-social-feed');}    
}

module.exports = new Blog();