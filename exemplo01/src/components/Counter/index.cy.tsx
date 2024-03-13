import Counter from ".";
import { FontStyles } from "../../assets/fonts/fonts";

describe("<Counter />", () => {
  it("should render correct value", () => {
    const value = 21;

    cy.mount(<Counter value={value} />);

    cy.get('[data-cy="counter-value"]').should("have.text", value);
  });

  it("should have correct styles", () => {
    const backgroundColor = "rgb(52, 45, 113)";
    const textColor = "rgb(255, 255, 255)";
    const titleFontFamily = "bold";
    const valueFontFamily = "regular";
    const fontSize = "32px";

    cy.mount(
      <>
        <FontStyles />
        <Counter value={1} />
      </>
    );

    cy.get("[data-cy='counter-panel']").should(
      "have.css",
      "background-color",
      backgroundColor
    );

    const counterTitle = cy.get("[data-cy='counter-title']");
    counterTitle.should("have.css", "color", textColor);
    counterTitle.should("have.css", "font-family", titleFontFamily);
    counterTitle.should("have.css", "font-size", fontSize);

    const counterValue = cy.get("[data-cy='counter-value']");
    counterValue.should("have.css", "color", textColor);
    counterValue.should("have.css", "font-family", valueFontFamily);
    counterValue.should("have.css", "font-size", fontSize);
  });
});
