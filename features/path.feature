Feature: Manipulate path
  We can change the path of the url

Scenario Outline: Declare path
Given an url "<url>"
When change the path of url to "<path-elements>"
Then the url will be "<expected-url>"