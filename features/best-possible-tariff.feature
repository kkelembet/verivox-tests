Feature: Select the best possible tariff for user
  AS A User
  I WANT TO use the DSL Calculator
  SO THAT I am able to select the best possible tariff for me


# Scenario 1
  Scenario Outline: DSL Result List - verify result list
    Given the User is on www.verivox.de
    When he is on the DSL calculator
      And he enters prefix “Ihre Vorwahl” as "<code>" with 16 Mbit bandwidth selection
      And clicks on the button labeled as "JETZT VERGLEICHEN"
    Then he should be able see the Result List page with all the available Tariffs
#   Note: For test coverage, check for at least 5 Tariffs. See screenshot 1
  Examples:
  |code|
  |030 |
  |033 |
  |034 |
  |040 |
  |089 |


#  Scenario 2
  Scenario: Result List - verify Offer detail page to
# (follow scenario 1)
    Given the User is on the DSL Result List
    When he selects one of the listed Tariffs
      And clicks on "mehr zum Tarif" button
    Then he should be able see the details of the selected Tariff
      And he should also see a button labeled as "In 5 Minuten online wechseln"


#  Scenario 3
  Scenario: Lazy loading/pagination for loading the Result List
# (follow scenario 1)
    Given the User is on the DSL Result List
    When there are more than 20 tariffs available for the provided Vorwahl and bandwidth
    Then the User should see a button labeled as "20 weitere laden"
      And he or she clicks on this button
    Then the list should be appended with next 20 tariffs and so on until all Tariffs are loaded
