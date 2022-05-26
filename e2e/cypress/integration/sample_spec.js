describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});
describe("My First REAL Test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("/asdf");
  });
});
