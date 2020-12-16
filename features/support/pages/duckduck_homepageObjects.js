const {Selector} = require('testcafe');

exports.elements = {
    homepageLogo: function() {
        return Selector('#logo_homepage_link').with({ boundTestRun: testController });
    },
    searchTextBox: function() {
        return Selector('#search_form_input_homepage').with({ boundTestRun: testController });
    },
    searchButton: function() {
        return Selector('#search_button_homepage').with({ boundTestRun: testController });
    },
    searchAutosuggestResults: function() {
        return Selector('div.acp').with({ boundTestRun: testController });
    },
    searchAutosuggestFirstRes: function() {
        return Selector('div.acp:nth-child(1)').with({ boundTestRun: testController });
    },
    hamburgerMenu: function() {
        return Selector('a.header__button--menu.js-side-menu-open').with({ boundTestRun: testController });
    },
    themesLink: function() {
        return Selector('li.nav-menu__item.clear:nth-child(2) > a:nth-child(1)').with({ boundTestRun: testController });
    },
    searchResultLinks: function() {
        return Selector('div.result__body.links_main.links_deep').with({ boundTestRun: testController });
    },
    
}