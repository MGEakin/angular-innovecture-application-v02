Feature: User CRUD
  As a Systems Administrator
  I need to be able to create, read, update and Delete an individual User
  So I can work with Users

  *When creating a new User, only field is Name
  *Name field is required
  *When a User is removed it is not deleted. Rather, it's status is changed from active to inActive

  Scenario: add new User
    Given I navigate to the Create "User" page
    When I enter all the User information and hit submit
    Then the User is created

  Scenario: required field - User Name
    Given I navigate to the Create "User" page
    When I do not enter the User Name field
    Then the Submit button is disabled

  Scenario: View All Users
    Given I navigate to the "User" Home page
    Then I will see all Users

  Scenario: View User
    Given I navigate to the "User" Home page
    When I click on a specific User
    Then I will be on the specific User Home page

#  Scenario: Update User Information
#    Given I navigate to the "User" Home page
#    And I click on a specific User listed
#    And I click the EDIT button
#    When I change User Information and hit submit
#    Then the User is updated

#  Scenario: Remove a User
#    Given I navigate to the "User" Home page
#    And I click on a specific User listed
#    When I click on the REMOVE User button
#    Then the User is no longer visible
