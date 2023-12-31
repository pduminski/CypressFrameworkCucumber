@regression
Feature: webdriver-uni Login Page

    Scenario Outline: Test Login via webdriver-uni Login Portal
        Given I access WebdriverUniversity Login Portal page
        When I enter a username <username>
        And I enter a password <password>
        And I click the login button
        Then I should be presented with the following message <message>

        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver555 | validation failed    |
