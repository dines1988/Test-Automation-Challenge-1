const {Selector} = require('testcafe');

exports.elements = {
    findElementByText: function(txt) {
        return Selector('h2').withText(txt).with({ boundTestRun: testController });
    },

    findElementByTexty: function(txt) {
        return Selector('h3').withText(txt).with({ boundTestRun: testController });
    },

    monthsList: function() {
        return Selector('div[class="traffic__year expanded"]>div>div>h3').with({ boundTestRun: testController });
    },

    darkThemeSelected: function() {
        return Selector('label[class="set-theme is-checked"][style="background-color: #1c1c1c"]').with({ boundTestRun: testController });
    },

    dateTotals: function() {
        return Selector('div[class="traffic__year expanded"]>div[class="traffic__month expanded"]>div>table>tbody>tr>td:nth-child(2)').with({ boundTestRun: testController });
    },

    expandMonth: function() {
        return Selector('div[class="traffic__year expanded"]>div[class="traffic__month collapsed"]').with({ boundTestRun: testController });
    },

    collapseMonth: function() {
        return Selector('div[class="traffic__year expanded"]>div[class="traffic__month expanded"]>div>h3').with({ boundTestRun: testController });
    },
  
}

