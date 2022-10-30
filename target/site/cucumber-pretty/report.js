$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/ItemOnPage.feature");
formatter.feature({
  "line": 2,
  "name": "Item List on page it must be clickable",
  "description": "As a User i want to click the product to check full description",
  "id": "item-list-on-page-it-must-be-clickable",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@listItem"
    }
  ]
});
formatter.before({
  "duration": 23885969855,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Click on item who showed on the list",
  "description": "",
  "id": "item-list-on-page-it-must-be-clickable;click-on-item-who-showed-on-the-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User input \"standard_user\" as userName and \"secret_sauce\" as pasword",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User is already in landing page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on \"Sauce Labs Backpack\" to see detail of product",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on \"Sauce Labs Bike Light\" to see detail of product",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on \"Sauce Labs Bolt T-Shirt\" to see detail of product",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on \"Sauce Labs Fleece Jacket\" to see detail of product",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on \"Sauce Labs Onesie\" to see detail of product",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on \"Test.allTheThings() T-Shirt (Red)\" to see detail of product",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.verifyLoginPage()"
});
formatter.result({
  "duration": 163747248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 44
    }
  ],
  "location": "loginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 534285279,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 63771360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack",
      "offset": 15
    }
  ],
  "location": "itemPage.verifyClickOnLandingPage(String)"
});
formatter.result({
  "duration": 335625146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Bike Light",
      "offset": 15
    }
  ],
  "location": "itemPage.verifyClickOnLandingPage(String)"
});
formatter.result({
  "duration": 121015482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Bolt T-Shirt",
      "offset": 15
    }
  ],
  "location": "itemPage.verifyClickOnLandingPage(String)"
});
formatter.result({
  "duration": 110440007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Fleece Jacket",
      "offset": 15
    }
  ],
  "location": "itemPage.verifyClickOnLandingPage(String)"
});
formatter.result({
  "duration": 172085056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Onesie",
      "offset": 15
    }
  ],
  "location": "itemPage.verifyClickOnLandingPage(String)"
});
formatter.result({
  "duration": 106688194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test.allTheThings() T-Shirt (Red)",
      "offset": 15
    }
  ],
  "location": "itemPage.verifyClickOnLandingPage(String)"
});
formatter.result({
  "duration": 453788733,
  "status": "passed"
});
formatter.after({
  "duration": 153911645,
  "status": "passed"
});
formatter.uri("features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "As a user i want to login to home page saucedemo",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 11753490999,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Valid Login",
  "description": "",
  "id": "login;valid-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User input \"standard_user\" as userName and \"secret_sauce\" as pasword",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User is already in landing page",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.verifyLoginPage()"
});
formatter.result({
  "duration": 57266178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 44
    }
  ],
  "location": "loginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 263605378,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 47764636,
  "status": "passed"
});
formatter.after({
  "duration": 151507264,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "invalid Login",
  "description": "",
  "id": "login;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User input \"\u003cuserName\u003e\" as userName and \"\u003cpassword\u003e\" as pasword",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User will see \"\u003cerrorText\u003e\" on login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login;invalid-login;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "errorText"
      ],
      "line": 14,
      "id": "login;invalid-login;;1"
    },
    {
      "cells": [
        "asd",
        "secret_sauce",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 15,
      "id": "login;invalid-login;;2"
    },
    {
      "cells": [
        "standard_user",
        "asd",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 16,
      "id": "login;invalid-login;;3"
    },
    {
      "cells": [
        "",
        "",
        "Epic sadface: Username is required"
      ],
      "line": 17,
      "id": "login;invalid-login;;4"
    },
    {
      "cells": [
        "asd",
        "",
        "Epic sadface: Password is required"
      ],
      "line": 18,
      "id": "login;invalid-login;;5"
    },
    {
      "cells": [
        "",
        "asd",
        "Epic sadface: Username is required"
      ],
      "line": 19,
      "id": "login;invalid-login;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 34094723998,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "invalid Login",
  "description": "",
  "id": "login;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User input \"asd\" as userName and \"secret_sauce\" as pasword",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User will see \"Epic sadface: Username and password do not match any user in this service\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.verifyLoginPage()"
});
formatter.result({
  "duration": 101638433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asd",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 34
    }
  ],
  "location": "loginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 311759435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 15
    }
  ],
  "location": "loginSteps.displayErrorMassage(String)"
});
formatter.result({
  "duration": 28816095,
  "status": "passed"
});
formatter.after({
  "duration": 100881478,
  "status": "passed"
});
formatter.before({
  "duration": 7177081690,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "invalid Login",
  "description": "",
  "id": "login;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User input \"standard_user\" as userName and \"asd\" as pasword",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User will see \"Epic sadface: Username and password do not match any user in this service\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.verifyLoginPage()"
});
formatter.result({
  "duration": 36323152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "asd",
      "offset": 44
    }
  ],
  "location": "loginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 261500494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 15
    }
  ],
  "location": "loginSteps.displayErrorMassage(String)"
});
formatter.result({
  "duration": 38534136,
  "status": "passed"
});
formatter.after({
  "duration": 100774889,
  "status": "passed"
});
formatter.before({
  "duration": 11004240959,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "invalid Login",
  "description": "",
  "id": "login;invalid-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User input \"\" as userName and \"\" as pasword",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User will see \"Epic sadface: Username is required\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.verifyLoginPage()"
});
formatter.result({
  "duration": 263332708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    },
    {
      "val": "",
      "offset": 31
    }
  ],
  "location": "loginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 188746785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 15
    }
  ],
  "location": "loginSteps.displayErrorMassage(String)"
});
formatter.result({
  "duration": 33675886,
  "status": "passed"
});
formatter.after({
  "duration": 151516563,
  "status": "passed"
});
formatter.before({
  "duration": 9702777825,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "invalid Login",
  "description": "",
  "id": "login;invalid-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User input \"asd\" as userName and \"\" as pasword",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User will see \"Epic sadface: Password is required\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.verifyLoginPage()"
});
formatter.result({
  "duration": 151830549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asd",
      "offset": 12
    },
    {
      "val": "",
      "offset": 34
    }
  ],
  "location": "loginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 397806147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Password is required",
      "offset": 15
    }
  ],
  "location": "loginSteps.displayErrorMassage(String)"
});
formatter.result({
  "duration": 28609607,
  "status": "passed"
});
formatter.after({
  "duration": 120913412,
  "status": "passed"
});
formatter.before({
  "duration": 5720758070,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "invalid Login",
  "description": "",
  "id": "login;invalid-login;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User input \"\" as userName and \"asd\" as pasword",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User will see \"Epic sadface: Username is required\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.verifyLoginPage()"
});
formatter.result({
  "duration": 112910504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    },
    {
      "val": "asd",
      "offset": 31
    }
  ],
  "location": "loginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 239395266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 15
    }
  ],
  "location": "loginSteps.displayErrorMassage(String)"
});
formatter.result({
  "duration": 30438966,
  "status": "passed"
});
formatter.after({
  "duration": 150968545,
  "status": "passed"
});
formatter.uri("features/PurchaseItemFlow.feature");
formatter.feature({
  "line": 2,
  "name": "Add To Chart And Checkout",
  "description": "As user I want to add some stuffs to chart and checkout",
  "id": "add-to-chart-and-checkout",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BuyStuffs"
    }
  ]
});
formatter.before({
  "duration": 11868486192,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User",
  "description": "",
  "id": "add-to-chart-and-checkout;user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User input \"standard_user\" as userName and \"secret_sauce\" as pasword",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User is already in landing page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User sort \"Name (Z to A)\" and will see item sorting as expected",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User pick \"Sauce Labs Onesie\" and \"Test.allTheThings() T-Shirt (Red)\" to chart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User will see basket has been filled with item have been choose",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User want to remove the last stuff have been added",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User want to checkout then input \"Jae\" as first name, \"Kusuma\" as lastname and \"14045\" as postal code",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User will see checkout information payment \"Item total: $7.99\" with \"Tax: $0.64\" and \"Total: $8.63\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User complete the transaction while see the \"Pony Express\" image",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.verifyLoginPage()"
});
formatter.result({
  "duration": 83347848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 44
    }
  ],
  "location": "loginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 464379590,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 35390464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z to A)",
      "offset": 11
    }
  ],
  "location": "purchaseSteps.clickDropDownSort(String)"
});
formatter.result({
  "duration": 122631425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Onesie",
      "offset": 11
    },
    {
      "val": "Test.allTheThings() T-Shirt (Red)",
      "offset": 35
    }
  ],
  "location": "purchaseSteps.putChooseItem(String,String)"
});
formatter.result({
  "duration": 359356094,
  "status": "passed"
});
formatter.match({
  "location": "purchaseSteps.seeChartItem()"
});
formatter.result({
  "duration": 68895773,
  "status": "passed"
});
formatter.match({
  "location": "purchaseSteps.removeItem()"
});
formatter.result({
  "duration": 45096944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jae",
      "offset": 34
    },
    {
      "val": "Kusuma",
      "offset": 55
    },
    {
      "val": "14045",
      "offset": 80
    }
  ],
  "location": "purchaseSteps.checkoutStuffs(String,String,String)"
});
formatter.result({
  "duration": 686494137,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Item total: $7.99",
      "offset": 44
    },
    {
      "val": "Tax: $0.64",
      "offset": 69
    },
    {
      "val": "Total: $8.63",
      "offset": 86
    }
  ],
  "location": "purchaseSteps.verifyPriceCheckOut(String,String,String)"
});
formatter.result({
  "duration": 184640538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pony Express",
      "offset": 45
    }
  ],
  "location": "purchaseSteps.successPageTransaction(String)"
});
formatter.result({
  "duration": 23997846,
  "status": "passed"
});
formatter.after({
  "duration": 131412304,
  "status": "passed"
});
formatter.uri("features/sortItem.feature");
formatter.feature({
  "line": 2,
  "name": "Sorting Item by name or by price",
  "description": "Ad user i want to sorting list on page",
  "id": "sorting-item-by-name-or-by-price",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sortItem"
    }
  ]
});
formatter.before({
  "duration": 8698789167,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Sorting item page",
  "description": "",
  "id": "sorting-item-by-name-or-by-price;sorting-item-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User input \"standard_user\" as userName and \"secret_sauce\" as pasword",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User is already in landing page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User sort \"Name (Z to A)\" and will see item sorting as expected",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User sort \"Name (A to Z)\" and will see item sorting as expected",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User sort \"Price (low to high)\" and will see item sorting as expected",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User sort \"Price (high to low)\" and will see item sorting as expected",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.verifyLoginPage()"
});
formatter.result({
  "duration": 62413711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 44
    }
  ],
  "location": "loginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 287279368,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 31568370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z to A)",
      "offset": 11
    }
  ],
  "location": "purchaseSteps.clickDropDownSort(String)"
});
formatter.result({
  "duration": 90462331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (A to Z)",
      "offset": 11
    }
  ],
  "location": "purchaseSteps.clickDropDownSort(String)"
});
formatter.result({
  "duration": 132328900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (low to high)",
      "offset": 11
    }
  ],
  "location": "purchaseSteps.clickDropDownSort(String)"
});
formatter.result({
  "duration": 104998406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (high to low)",
      "offset": 11
    }
  ],
  "location": "purchaseSteps.clickDropDownSort(String)"
});
formatter.result({
  "duration": 105884262,
  "status": "passed"
});
formatter.after({
  "duration": 153717602,
  "status": "passed"
});
});