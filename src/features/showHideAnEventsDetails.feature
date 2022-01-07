

    Feature: Show/Hide an Events details.

    Scenario: An event element is collapsed by default. 
    Given the user has searched for events by city
    When the user accesses a list of events
    Then the event element is collapsed by default

    Scenario: A user can expand an events details 
    Given the user has a list of events 
    When the user clicks on 'Show details' for a given event element
    Then the event element will be expanded to show its details

    Scenario: A user can collapse an event element to hide its details 
    Given user has expanded an event element to show its details
    When the user clicks on 'Hide details' for a given event element
    Then the event element will collapse to hide its details
