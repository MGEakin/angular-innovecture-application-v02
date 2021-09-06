Feature: Opening CRUD
  As a Systems Administrator
  I need to be able to create, read, update and Delete an individual Opening
  So I can work with Openings

  *When creating a new Opening, only field is Name
  *Name field is required
  *When a Opening is removed it is not deleted. Rather, it's status is changed from active to inActive

  Scenario: add new Opening
    Given I navigate to the Create "Opening" page
    When I "enter" all the "Opening" information and hit submit
    Then the "Opening" is created
#
#  Scenario: required field - Opening Name
#    Given I navigate to the Create "Opening" page
#    When I "do not enter" all the "Opening" information and hit submit
#    Then the Submit button is disabled

  Scenario: View All Openings
    Given I navigate to the "Opening" Home page
    Then I will see all "Openings"

  Scenario: View Opening
    Given I navigate to the "Opening" Home page
    When I click on a specific "Opening"
    Then I will be on the specific "Opening" Home page

  Scenario: Update Opening Information
    Given I navigate to the "Opening" Home page
    When I click on a specific "Opening"
##    And I click the EDIT button
##    When I change Opening Information and hit submit
##    Then the Opening is updated

  Scenario: Remove a Opening
    Given I navigate to the "Opening" Home page
    When I click on a specific "Opening"
##    When I click on the REMOVE Opening button
##    Then the Opening is no longer visible
