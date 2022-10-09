$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Calculator.feature");
formatter.feature({
  "name": "Calculation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Adding two numbers",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I opened the Calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CalculatorStepDef.i_opened_the_Calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add below numbers",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.CalculatorStepDef.i_add_below_numbers(java.util.List\u003cjava.lang.Integer\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sum should be 10",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CalculatorStepDef.sum_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login Feature Scenario",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDef.i_click_on_the_Login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario is to login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the username as \"abc@xyz.com\" and password as \"Test@1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDef.i_enter_the_username_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDef.i_click_on_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDef.i_should_get_the_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});