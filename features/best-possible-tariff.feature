Feature: Select the best possible tariff for user
  AS A User
  I WANT TO use the DSL Calculator
  SO THAT I am able to select the best possible tariff for me

# Scenario 1
  Scenario Outline: DSL Result List - verify result list
    Given the User is on www.verivox.de
    When he is on the DSL calculator
      And he enters prefix "<code>" “Ihre Vorwahl” as 030 with 16 Mbits bandwidth selection
      And clicks on the button labeled as "JETZT VERGLEICHEN"
    Then he should be able see the Result List page with all the available Tariffs
#   Note: For test coverage, check for at least 5 Tariffs. See screenshot 1
  Examples:
  |code|
  |030 |
  |040 |


#  Scenario 2
  Scenario: Result List - verify Offer detail page
# (follow scenario 1)
    Given the User is on the DSL Result List
    When he selects one of the listed Tariffs
      And clicks on "mehr zum Tarif" button
    Then he should be able see the details of the selected Tariff
      And he should also see a button labeled as "In 5 Minuten online wechseln"
#  Note: Test the highlighted fields marked on screenshot 2 and screenshot 3


#  Scenario 3
  Scenario: Lazy loading/pagination for loading the Result List
# (follow scenario 1)
  Given the User is on the DSL Result List
  When there are more than 20 tariffs available for the provided Vorwahl and bandwidth
  Then the User should a button labeled as "20 weitere laden"
  And he or she clicks on this button
  Then the list should be appended with next 20 tariffs and so on until all Tariffs are loaded
# Note: See Screenshot 4