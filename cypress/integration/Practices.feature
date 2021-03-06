Feature: Practice CRUD
  As a Systems Administrator
  I need to be able to create, read, update and Delete an individual Practice
  So I can work with Practices

  *When creating a new Practice, only field is Name
  *Name field is required
  *When a Practice is removed it is not deleted. Rather, it's status is changed from active to inActive

  Scenario: add new Practice
    Given I navigate to the Create "Practice" page
    When I "enter" all the "Practice" information and hit submit
    Then the "Practice" is created

  Scenario: required field - Practice Name
    Given I navigate to the Create "Practice" page
    When I "do not enter" all the "Practice" information and hit submit
    Then the Submit button is disabled

  Scenario: View All Practices
    Given I navigate to the "Practice" Home page
    Then I will see all "Practices"

  Scenario: View Practice
    Given I navigate to the "Practice" Home page
    When I click on a specific "Practice"
    Then I will be on the specific "Practice" Home page

  Scenario: Update Practice Information
    Given I navigate to the "Practice" Home page
    When I click on a specific "Practice"
#    And I click the EDIT button
#    When I change Practice Information and hit submit
#    Then the Practice is updated

  Scenario: Remove a Practice
    Given I navigate to the "Practice" Home page
    When I click on a specific "Practice"
#    When I click on the REMOVE PRACTICE button
#    Then the Practice is no longer visible
