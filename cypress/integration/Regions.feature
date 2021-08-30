Feature: Region CRUD
  As a Systems Administrator
  I need to be able to create, read, update and Delete an individual Region
  So I can work with Regions

  *When creating a new Region, only field is Name
  *Name field is required
  *When a Region is removed it is not deleted. Rather, it's status is changed from active to inActive

  Scenario: add new Region
    Given I navigate to the Create "Region" page
    When I "enter" all the "Region" information and hit submit
    Then the "Region" is created

  Scenario: required field - Region Name
    Given I navigate to the Create "Region" page
    When I "do not enter" all the "Region" information and hit submit
    Then the Submit button is disabled

  Scenario: View All Regions
    Given I navigate to the "Region" Home page
    Then I will see all "Regions"

  Scenario: View Region
    Given I navigate to the "Region" Home page
    When I click on a specific "Region"
    Then I will be on the specific "Region" Home page

  Scenario: Update Region Information
    Given I navigate to the "Region" Home page
    When I click on a specific "Region"
#    And I click the EDIT button
#    When I change Region Information and hit submit
#    Then the Region is updated

  Scenario: Remove a Region
    Given I navigate to the "Region" Home page
    When I click on a specific "Region"
#    When I click on the REMOVE Region button
#    Then the Region is no longer visible
