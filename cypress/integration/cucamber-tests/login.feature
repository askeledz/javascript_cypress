Feature: Login to Application

    As a invalid User
    I cannot log in into Application
    As a valid User
    I want to log in into Application

    Scenario: Invalid login
        Given I open login page
        And I want to wait 2000 milliseconds
        And I see "Zero" in the Tilte
        And I see "/login" in the URL
        When I fill Username with "invalidusername"
        And I fill Password with "invalidpassword"
        And I click Submit login
        Then I should see error message

    #  @focus
    Scenario: Valid login
        Given I open login page
        When I fill Username with "username"
        And I fill Password with "password"
        And I click Submit login
        Then I should see homepage
            
        
        
        