/*
1. visit the page
2. test the header is rendering - DONE
3. form button renders - DONE
4. Event image renders - DONE
5. Event details renders - DONE
6. Team name renders - DONE
7. Form appears after clicking button - DONE
8. On submitting form, new event should display on the list - DONE
9. Form should reset to initial state -DONE
   (i) launch button direct to the right link
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
})

describe('Event form: make sure event form render correctly and all field is available for input',()=>{
  it('Create event button click', () => {
    cy.contains ('Create Event').click()
    cy.contains('Event type')
  })

  it('Event form is available to be fill in', () => {
    cy.get('#event-type')
      .select('Group Coding')
    cy.get('#event-description')
      .type('description test')
      .should('have.value', 'description test')
    cy.get('#event-author')
      .type('author test')
      .should('have.value', 'author test')
    cy.get('#date-selector')
      .type('2023-08-01')
      .should('have.value', '2023-08-01')
    cy.get('#time-start')
      .type('14:00')
      .should('have.value', '14:00')
    cy.get('#time-end')
      .type('16:00')
      .should('have.value', '16:00')
    cy.get('#social-link')
      .type('https://zoom.us/')
      .should('have.value', 'https://zoom.us/')
  })
  
  // it('Submit button does submit form', () => {
  //   cy.contains('Submit').click()
  //   cy.contains('description test')
  //   cy.contains('Create Event')
  // })
})

describe('Event image matched the event type',()=>{
  it('Event image respond accurately', () => {
    cy.get
  })
})


