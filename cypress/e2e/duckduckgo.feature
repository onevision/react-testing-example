Feature: duckduckgo.com
    Background:
        When I visit duckduckgo.com

    Scenario: Visiting the frontpage
        Then I should see a search bar

    Scenario: Perform a search
        Then I perform a search
            | searchText |
            | dog        |
            | cat        |
            | goat       |