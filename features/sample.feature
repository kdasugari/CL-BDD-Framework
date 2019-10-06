@Demo
Feature: SmokeTestSuite
    #@Sanity
    Scenario: Sample test
        Given I go to application 
        When I login with credentials
        Then I validate user has been successfully access to the application.   

        