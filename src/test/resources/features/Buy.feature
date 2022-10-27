@AddToChart
  Feature: Add To Chart
    As user I want to add some goods to chart
  Scenario: User
    Given User open the web page
    When User input "standard_user" as userName and "secret_sauce" as pasword
    And User is already in landing page
    Then User sort "Name (Z to A)"
    And User pick "Sauce Labs Onesie" to chart
    And User pick "Test.allTheThings() T-Shirt (Red)" to chart
    Then User will see basket has been filled with item have been choose
    And User input "Jae" as first name, "Kusuma" as lastname and "14045" as postal code
    Then User will see checkout information payment
    Then User will get information on the successfull payment
