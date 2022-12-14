# meet
A serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Feature: Show/Hide event details

  Scenario 1: An event element is collapsed by default \
      Given the user hasn't selected an event \
      When the user views the list of events \
      Then the event elements are collapsed 
   
  Scenario 2: User can expand an event to see its details \
     Given the list of events is displayed \
When the user clicks on an event element \
Then the event element is expanded to show more details
     
  Scenario 3: User can collapse an event to hide its details \
     Given the event element is expanded \
When the user clicks the event element \
Then the event element is collapsed back to its default position
     
  User story: as a user I should beable to click to show or hide events details

## Feature: Filter events 
Scenario 1: user sees a dropdown list of suggested location \
     Given the location dropdown is displayed \
When the user types a location \
Then the list of suggestions is displayed

  Scenario 2: user sees a the specified number of events \
    Given the number of events textfield is displayed \
When the user types number \
Then the specified nubmer of events is displayed

  User story: As a user, 
  I should be able to filter events by locations and number of events \
  so that I can see the list of events that take place in the selected city.
    

## Feature: Data Visualization 

  Scenario 1: user sees a pie-chart and a bar-chart by default \
     Given that the main page is opened  \
     When user navigates to default page \
     Then user sees pie-chart and a bar-chart \
     
  User story: as a user I should be able to view data visually 
 
