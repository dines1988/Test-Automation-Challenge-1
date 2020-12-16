Feature: duckduckgo homepage and traffic page

Scenario: AC1 verify logo present in duckduckgo homepage
Given I am on the homepage
When I look at the page
Then I expect to see the duckduckgo logo on the page 

Scenario: AC2 verify number of auto suggestion results displayed
Given I am on the homepage
When I type "super" into the search box
Then I expect to see exactly 10 suggestions in the typeahead dropdown 

Scenario: AC3 verify search results displayed in auto suggestion
Given I am on the homepage
When I type "supercalafragalistic" into the search box
Then I expect the first result to be "supercalafragalisticexpialadoshus" 

Scenario: AC4 verify themes link
Given I am on the homepage
When I click on the hamburger menu in the top right
Then I expect to see a themes link 

Scenario: AC5 verify change theme 
Given I am on the homepage
When I click on the themes link then click on the dark mode theme button
Then My page background should change colour 

Scenario Outline: AC6 verify results with multiple test data
Given I am on the homepage
When I go to the homepage and type "<sample>" test
Then click the magnifying glass
Then I should get 10 results on the results page 

Examples:
    | sample | 
    | Back to the future |
    | BMX Bandits |
    | Rocky IV |
    | Short Circuit |
    | The Terminator |
    | Ferris Bueller's day off   |


 