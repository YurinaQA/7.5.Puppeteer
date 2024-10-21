Feature: Search a course
    # Scenario: Should search by text
    #     Given user is on "/navigation" page
    #     When user search by "тестировщик"
    #     Then user sees the course suggested "Тестировщик ПО"

    Scenario: Should successfully book a ticket 1
        Given user is on "http://qamid.tmweb.ru/client/index.php" page
        When user clik by butten of date 1
        When user clik by butten of movie session time 1
        When user clik to choose of free seat 1
        When user clik by butten to book a ticket
        Then user sees the title "Вы выбрали билеты:"

    Scenario: Should successfully book a ticket 2
        Given user is on "http://qamid.tmweb.ru/client/index.php" page
        When user clik by butten of date 2
        When user clik by butten of movie session time 2
        When user clik to choose of free seat 2
        When user clik by butten to book a ticket
        Then user sees the title "Вы выбрали билеты:"

    Scenario: Should unsuccessfully book a ticket
        Given user is on "http://qamid.tmweb.ru/client/index.php" page
        When user clik by butten of date 3
        When user clik by butten of movie session time 3
        When user clik to choose occupied seat
        Then Button for booking has property disabled: "true"



        