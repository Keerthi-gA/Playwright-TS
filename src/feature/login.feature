Feature: Login

  Scenario: Successful User login

    Given I navigate to the Login Page
    When I enter the user details
    Then I click the Login Button
    Then I should see the inventory list