# meet

## Feature: Show/Hide event details

  Scenario 1: An event element is collapsed by default
      Given the user hasn't selected an event \
      When the user views the list of events \
      Then the event elements are collapsed \
   
  Scenario 2: user can expand an event to see more details
     Given that user already clicked on show button to reveal event details
     
  Scenario 3: user can collapse an event to hide event details
     Given that user already clicked on hide button to collapse event detail
     
  User story:  I should beable to click to show or hide events details

## Feature: Filter events 

  Scenario 1: user sees a dropdown list of suggested locations are displayed 
     Given that user typed a location on the location text field
     
  Scenario 2: user can specify number of events
    Given that user types an integer value to see the desired number of events 
     
  User story: As a user, 
  I should be able to filter events by city 
  so that I can see the list of events that take place in the selected city.
    

## Feature: Data Visualization 

  Scenario 1: user sees a pie-chart and a bar-chart by default
     Given that the main page is opened, and user sees a list of collapsed event detail
     
  User story:  I should be able to view data visually
