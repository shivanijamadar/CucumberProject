Feature: Calculation

  Scenario Outline: Adding two numbers
    Given I opened the Calculator
    When I add two numbers <number1> and <number2>
    Then sum should be <output>

    Examples: 
      | number1 | number2 | output |
      |       5 |       5 |     10 |
      |       3 |       2 |      5 |

  @sanity
  Scenario: Adding two numbers
    Given I opened the Calculator
    When I add below numbers
      | 3 |
      | 5 |
      | 2 |
    Then sum should be 10
