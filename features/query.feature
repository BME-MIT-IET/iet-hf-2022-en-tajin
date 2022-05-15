Feature: Returns total count of the query string parameters.

    Scenario Outline: Returns total count of the query string parameters
        Given an url "<url>"
        And the url has the following parameters: "<parameters>"
        When I ask for the numbers of parameters
        Then It will return "<count>"

    Scenario Outline: Ask if the url has parameters
    Given an url "<url>"
    When I ask wether it has parameters 
    Then the answer will be "<answer>"