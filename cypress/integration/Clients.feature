Feature: Client CRUD
  As a Systems Administrator
  I need to be able to create, read, update and Delete an individual Client
  So I can work with Clients

  *When creating a new Client, only field is Name
  *Name field is required
  *When a Client is removed it is not deleted. Rather, it's status is changed from active to inActive

  Scenario: add new Client
    Given I navigate to the Create "Client" page
    When I "enter" all the "Client" information and hit submit
    Then the "Client" is created

  Scenario: required field - Client Name
    Given I navigate to the Create "Client" page
    When I "do not enter" all the "Client" information and hit submit
    Then the Submit button is disabled

  Scenario: View All Clients
    Given I navigate to the "Client" Home page
    Then I will see all "Clients"

  Scenario: View Client
    Given I navigate to the "Client" Home page
    When I click on a specific "Client"
    Then I will be on the specific "Client" Home page

  Scenario: Update Client Information
    Given I navigate to the "Client" Home page
    When I click on a specific "Client"
#    And I click the EDIT button
#    When I change Client Information and hit submit
#    Then the Client is updated

  Scenario: Remove a Client
    Given I navigate to the "Client" Home page
    When I click on a specific "Client"
#    When I click on the REMOVE Client button
#    Then the Client is no longer visible

  Scenario: Client Region
    Given I navigate to the "Client" Home page
    When I click on a specific "Client"
    Then I see the Region they belong in
