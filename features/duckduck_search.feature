Feature: search test

    Feature Description

Scenario Outline: AC6 verify results with multiple test data
Given I am on the homepage
When I go to the homepage and type "<Test>"
Then click the magnifying glass
Then I should get 10 results on the results page 

Examples:
    | Test | 
    | Back to the future |
    | BMX Bandits |
    | Rocky IV |
    | Short Circuit |
    | The Terminator |
    | Ferris Bueller's day off   |

   
