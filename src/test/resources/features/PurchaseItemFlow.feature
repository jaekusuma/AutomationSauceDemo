@BuyStuffs
  Feature: Add To Chart And Checkout
    As user I want to add some stuffs to chart and checkout
  Scenario: User
    Given User open the web page
    When User input "standard_user" as userName and "secret_sauce" as pasword
    And User is already in landing page
    Then User sort "Name (Z to A)" and will see item sorting as expected
    And User pick "Sauce Labs Onesie" and "Test.allTheThings() T-Shirt (Red)" to chart
    Then User will see basket has been filled with item have been choose
    And User want to remove the last stuff have been added
    And User want to checkout then input "Jae" as first name, "Kusuma" as lastname and "14045" as postal code
    Then User will see checkout information payment "Item total: $7.99" with "Tax: $0.64" and "Total: $8.63"
    Then User complete the transaction while see the "Pony Express" image