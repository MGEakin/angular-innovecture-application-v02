Feature: Role CRUD
  As a Systems Administrator
  I need to be able to create, read, update and Delete an individual Role
  So I can work with Roles

  *When creating a new Role, only field is Name
  *Name field is required
  *When a Role is removed it is not deleted. Rather, it's status is changed from active to inActive

  Scenario: add new Role
    Given I navigate to the Create "Role" page
    When I "enter" all the "Role" information and hit submit
    Then the "Role" is created

  Scenario: required field - Role Name
    Given I navigate to the Create "Role" page
    When I "do not enter" all the "Role" information and hit submit
    Then the Submit button is disabled

  Scenario: View All Roles
    Given I navigate to the "Role" Home page
    Then I will see all "Roles"

  Scenario: View Role
    Given I navigate to the "Role" Home page
    When I click on a specific "Role"
    Then I will be on the specific "Role" Home page

  Scenario: Update Role Information
    Given I navigate to the "Role" Home page
    When I click on a specific "Role"
#    And I click the EDIT button
#    When I change Role Information and hit submit
#    Then the Role is updated

  Scenario: Remove a Role
    Given I navigate to the "Role" Home page
    When I click on a specific "Role"
#    When I click on the REMOVE Role button
#    Then the Role is no longer visible
