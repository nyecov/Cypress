Feature: Banking Project Functionalities

  Scenario: Customer deposits money and verifies balance and transactions
    Given I open the Banking Project login page
    When I log in as customer "Harry Potter"
    And I deposit the following amounts:
      | Amount |
      | 100    |
      | 10     |
      | 5      |
    Then I should see a confirmation message containing "Deposit Successful" after each deposit
    And I verify that the balance is 115
    And I check that the sum of the transactions equals 115