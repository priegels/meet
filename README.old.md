# meet

## Purpose
To build a serverless, progressive web application (PWA) with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events.

## How to run
to be added 

## Built with
- React
- TDD technique
- using Google Calendar API and OAuth2 authentication flow
- serverless AWS functions

### User Stories

1. As a user 
I should be able to “show/hide an event’s details”
So that I can see what an event is all about.

Scenario 1:
Given the app has been opened
When the user accesses a list of events
Then the event element is collapsed by default

Scenario 2:
Given the event element is collapsed by default
When user clicks on Show Details button for an event
Then the event element will be expanded to show the event details

Scenario 3: 
Given the event element has been expanded to show details
When the user clicks on “Hide details” button for an event
Then the event element will collapse to hide its details

2. As a user 
I should be able to “specify the number of events”
So that I can see just how many events are going on in my vicinity

Scenario 1:
Given the user hasn’t specified a number of events
When the user accesses the app for a list of events
Then the default number of events is 32

Scenario 2:
Given the user hasn’t specified a number of events and gets shown up to 32 events by default
When the user changes the number of events they want to see
Then the app changes that number to the specified number by the user

3. As a user
I should be able to “use the app offline”
So that I can see a list of events even when I don’t have an internet connection

Scenario 1:
Given the user has no internet connection
When the user opens the app
Then cached data is displayed

Scenario 2:
Given the user made changes in the settings of the app
When the app tries to update those settings while in offline mode
Then the app will show an error 

4. As a user
I should be able to see a chart showing the number of upcoming events by city
So that I can get a better idea about how many events are taking place in that city

Scenario 1:
Given the events in a city is displayed by the app
When the app renders the number of events
Then it is visualized in a chart




















