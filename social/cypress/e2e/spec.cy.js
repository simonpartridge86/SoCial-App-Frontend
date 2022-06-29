/*
1. visit the page
2. test the header is rendering - DONE
3. form button renders - DONE
4. Event image renders - DONE
5. Event details renders - DONE
6. Team name renders - DONE
7. Form appears after clicking button - DONE
8. On submitting form, new event should display on the list - 
9. Form should reset to initial state
10. Test event image - should render correct image according to event type
11. Attendance checkbox should update attendance count
12. When if there are any fields which haven't been filled a message should display and form should reset
*/

describe('Social page is rendering correctly', () => {
  it('heading', () => {
    cy.visit('http://localhost:3000/')
    cy.contains ('{SoC}ial')
  })
  it('Create event button', () => {
    cy.contains ('Create Event')
  })
  it('Event image', () => {
    cy.get(':nth-child(1) > .event-image')
  })
  it('Event Details', () => {
    cy.get(':nth-child(1) > .event-details > .event-type')
    cy.get(':nth-child(1) > .event-details > .event-description')
    cy.get(':nth-child(1) > .event-details > .event-author')
    cy.get(':nth-child(1) > .event-details > .date')
    cy.get(':nth-child(1) > .event-details > .time-start')
    cy.contains('bootcampers attending')
    cy.contains('Attending?')
    cy.contains('Launch Meeting')
  })
  it('Footer text', () => {
    cy.contains('team mishMash')
  })
  it('Create event button click', () => {
    cy.contains ('Create Event').click()
  })
})



