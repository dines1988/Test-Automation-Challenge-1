Feature: duckduckgo traffic page

    To test the functionalities present in the traffic page

Scenario: AC7 verify traffic page 
Given I am on the traffic page
When I click on the 2018 Traffic section
Then I should see all the months listed in the order from Dec to Jan
Then the Total Direct Queries should be equal to the sum of all the total directs from each month