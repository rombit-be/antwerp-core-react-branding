import * as React from "react";

import { shallow } from "enzyme";

import * as A from "../..";
import { renderAndMatchSnapshot } from "../../../__tests__/__fixtures__/testUtils";

describe("Copyright", () => {
    it("Renders default", () => {
        // Arrange
        const element = <A.Copyright name="Rombit" />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("Renders with correct text", () => {
        // Arrange
        const text = "Rombit";
        const element = <A.Copyright name={text} />;

        // Act
        const copy = shallow(element);

        // Act and assert
        expect(copy.find(".a-copyright__label").text()).toBe(text);
    });
});
