import SentenceInput from ".";

describe("<SentenceInput />", () => {
  it("should keep user text", () => {
    const sentence = "Fala, galera!";
    const setSentence = () => {};
    cy.mount(<SentenceInput sentence={sentence} setSentence={setSentence} />);
    cy.get("input").should("have.value", sentence);
  });
});
