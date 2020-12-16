const {Selector} = require('testcafe');

exports.elements = {
    darkTheme: function() {
        return Selector('div[data-theme-id="d"]').with({ boundTestRun: testController });
    },

    darkThemeSelected: function() {
        return Selector('label[class="set-theme is-checked"][style="background-color: #1c1c1c"]').with({ boundTestRun: testController });
    },
    
}