describe("simple", function() {
  before(function() {
    cy.visit("http://meetup.com")
  });

  it("should - get element from the select dropdown", function() {
    cy.get("#languagePicker").select("en-US")
    cy.get("#languagePicker > option[value=en-US]").then(function($option) {
      expect($option).to.be.selected
    })
  });
});
