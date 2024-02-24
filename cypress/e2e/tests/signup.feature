Feature: Testing all SignUp Scenarios
    As a user,
    I should be able to SignUp

    Scenario: A user should be able to signup with valid details
        Given User is on trymima page
        When User Clicks Sign Up Button
        And User fills in a valid full name
        And User fills in a valid business name
        And User fills in a valid business email
        And User fills in a valid phone number
        And User fills in a valid business registration number
        And User Clicks the Next Button
        And User fills in a valid website name
        And User fills in a valid instagram handle
        And User fills in a valid twitter handle
        And User selects how they heard about mima
        And User inserts password
        And User clicks the SignUp Button
        Then User sees token notification message
        And User retrieves token from email
        When User inserts token on the token page
        Then The user should have access to the home page