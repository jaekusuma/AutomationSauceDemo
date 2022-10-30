@sortItem
  Feature: Sorting Item by name or by price
    Ad user i want to sorting list on page
  Scenario: Sorting item page
    Given User open the web page
    When User input "standard_user" as userName and "secret_sauce" as pasword
    And User is already in landing page
    Then User sort "Name (Z to A)" and will see item sorting as expected
    And User sort "Name (A to Z)" and will see item sorting as expected
    And User sort "Price (low to high)" and will see item sorting as expected
    And User sort "Price (high to low)" and will see item sorting as expected