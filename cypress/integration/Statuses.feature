Feature: Status CRUD
  As a Systems Administrator
  I need to be able to create, read, update and Delete an individual Status
  So I can work with Statuses

  *When creating a new Status, only field is Name
  *Name field is required
  *When a Status is removed it is not deleted. Rather, it's status is changed from active to inActive

  Scenario: add new Status
    Given I navigate to the Create "Status" page
    When I enter all the Status information and hit submit
    Then the Status is created

  Scenario: required field - Status Name
    Given I navigate to the Create "Status" page
    When I do not enter the Status Name field
    Then the Submit button is disabled

  Scenario: View All Statuses
    Given I navigate to the "Status" Home page
    Then I will see all Statuses

  Scenario: View Status
    Given I navigate to the "Status" Home page
    When I click on a specific Status
    Then I will be on the specific Status Home page

#  Scenario: Update Status Information
#    Given I navigate to the "Status" Home page
#    And I click on a specific Status listed
#    And I click the EDIT button
#    When I change Status Information and hit submit
#    Then the Status is updated

#  Scenario: Remove a Status
#    Given I navigate to the "Status" Home page
#    And I click on a specific Status listed
#    When I click on the REMOVE Status button
#    Then the Status is no longer visible
