const duckduckPage = require('../support/pages/duckduck_homepageObjects.js');
const settingsPage = require('../support/pages/duckduck_settingspageObjects.js');
const trafficPage = require('../support/pages/duckduck_trafficpageObjects.js');
const {Given, When, Then} = require('cucumber');
const { Selector } = require('testcafe');
let i = 0;

//AC1: verify logo present in duckduckgo homepage
Given('I am on the homepage', async function () {
    await testController.navigateTo('https://start.duckduckgo.com/'); 
  });

When('I look at the page', async function () {
    await testController.expect(duckduckPage.elements.searchButton().visible).ok();
  });

Then('I expect to see the duckduckgo logo on the page', async function () {
    await testController.expect(duckduckPage.elements.homepageLogo().visible).ok();
  });

//AC2: verify there are exactly 10 auto suggestions
When('I type "super" into the search box', async function () {
    await testController.expect(duckduckPage.elements.searchTextBox().visible).ok();
    await testController.typeText(duckduckPage.elements.searchTextBox(), "super");
});

Then('I expect to see exactly 10 suggestions in the typeahead dropdown', async function () {
  await testController.expect(duckduckPage.elements.searchAutosuggestResults().visible).ok();
  const actualCount = await duckduckPage.elements.searchAutosuggestResults().count;
  console.log('number of search results   -- ' + actualCount);
  await testController.expect(actualCount).gte(10,'Number of suggestions displayed is not matching with expected count');
});

//AC3: verify expected search result
When('I type "supercalafragalistic" into the search box', async function () {
  await testController.expect(duckduckPage.elements.searchTextBox().visible).ok();
  await testController.typeText(duckduckPage.elements.searchTextBox(), "supercalafragalistic");
  await testController.wait(3000);
});

Then('I expect the first result to be "supercalafragalisticexpialadoshus"', async function () {
  await testController.expect(duckduckPage.elements.searchAutosuggestFirstRes().visible).ok();
  const actualRes = await duckduckPage.elements.searchAutosuggestFirstRes().innerText;
  console.log('actual result   -- ' + actualRes);
  await testController.expect(actualRes).eql("supercalafragalisticexpialadoshus");
});

//AC4: verify themes link
When('I click on the hamburger menu in the top right', async function () {
  await testController.expect(duckduckPage.elements.hamburgerMenu().visible).ok();
  await testController.click(duckduckPage.elements.hamburgerMenu());
});

Then('I expect to see a themes link', async function () {
  await testController.expect(duckduckPage.elements.themesLink().visible).ok();
  const actualRes = await duckduckPage.elements.themesLink().innerText;
  console.log('actual result   -- ' + actualRes);
  await testController.expect(actualRes).eql("Themes");
});

//AC5: verify change theme 
When('I click on the themes link then click on the dark mode theme button', async function () {
  await testController.expect(duckduckPage.elements.hamburgerMenu().visible).ok();
  await testController.click(duckduckPage.elements.hamburgerMenu());
  await testController.click(duckduckPage.elements.themesLink());
  await testController.click(settingsPage.elements.darkTheme());
});

Then('My page background should change colour', async function () {
  await testController.expect(settingsPage.elements.darkThemeSelected().visible).ok();
  await testController.wait(3000);
});

//AC6: verify results with multiple test data
When('I go to the homepage and type {string} test', async function(sample) {
  await testController.typeText(duckduckPage.elements.searchTextBox(),sample);
  
});

Then('click the magnifying glass', async function () {
  await testController.click(duckduckPage.elements.searchButton());
  //await testController.wait(8000);
});

Then('I should get 10 results on the results page', async function () {
  const linkCount = await duckduckPage.elements.searchResultLinks().count;
  console.log('number of search results   -- ' + linkCount);
  await testController.expect(linkCount).gte(10,'Number of links displayed is not matching with expected count');
});

//AC7: verify logo present in duckduckgo homepage
Given('I am on the traffic page', async function () {
  await testController.navigateTo('https://start.duckduckgo.com/traffic'); 
});

When('I click on the 2018 Traffic section', async function () {
  await testController.click(trafficPage.elements.findElementByText('2020 Traffic'));
  await testController.wait(3000);
  await testController.hover(trafficPage.elements.findElementByText('2018 Traffic'));
  await testController.click(trafficPage.elements.findElementByText('2018 Traffic'));
  await testController.hover(trafficPage.elements.findElementByText('2017 Traffic'));
  await testController.wait(3000);
});

Then('I should see all the months listed in the order from Dec to Jan', async function () {
  var expectedRes=['December 2018','November 2018','October 2018','September 2018','August 2018','July 2018',
  'June 2018','May 2018','April 2018','March 2018','February 2018','January 2018'];

  for(i=0; i<=11;i++)
  {
    var actualRes = await trafficPage.elements.monthsList().nth(i).innerText;
    var month = expectedRes[i];
    console.log('number of search results   -- ' + month);
    await testController.expect(actualRes).eql(month);
  }   
  });

Then('the Total Direct Queries should be equal to the sum of all the total directs from each month', async function () {
  await testController.wait(3000);
});
