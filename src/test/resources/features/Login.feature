@Login
  Feature: Login
    As a user i want to login to home page saucedemo
  Scenario: Valid Login
    Given User open the web page
    When User input "standard_user" as userName and "secret_sauce" as pasword
    And User is already in landing page

    Scenario Outline: invalid Login
    Given User open the web page
    When User input "<userName>" as userName and "<password>" as pasword
    Then User will see "<errorText>" on login page
    Examples:
      | userName      | password     | errorText                                                                 |
      | asd           | secret_sauce | Epic sadface: Username and password do not match any user in this service |
      | standard_user | asd          | Epic sadface: Username and password do not match any user in this service |
      |               |              | Epic sadface: Username is required                                        |
      | asd           |              | Epic sadface: Password is required                                        |
      |               | asd          | Epic sadface: Username is required                                        |