Feature: Login Feature Scenario

  Background: 
    Given I have launched the application
    And I click on the Login link

  @regression
  Scenario: This scenario is to define the login happy path
    When I enter the correct username and password
    And I click on the Login button
    Then I should land on the home page

  Scenario: This scenario is to define the failure path
    When I enter the incorrect username and password
    And I click on the Login button
    Then I should get the error message "The email or password you have entered is invalid."

  @sanity
  Scenario: This scenario is to login
    When I enter the username as "abc@xyz.com" and password as "Test@1234"
    And I click on the Login button
    Then I should get the error message "The email or password you have entered is invalid."

  Scenario Outline: This scenario is to login
    When I enter the username as "<UserName>" and password as "<Password>"
    And I click on the Login button
    Then I should get the error message "The email or password you have entered is invalid."

    Examples: 
      | UserName    | Password  |
      | abc@xyz.com | Test@1234 |
      | pqr@xyz.com | Zest@1234 |
