import * as React from "react";

import * as A from "../..";
import { renderAndMatchSnapshot } from "../../../__tests__/__fixtures__/testUtils";

describe("Background", () => {
    it("Renders default", () => {
        // Arrange
        const element = <A.Icon
            name="check"
        />;

        // Act and assert
        const tree = renderAndMatchSnapshot(element);
        expect(tree.props.className).toContain("fa-check");
    });

    it("Renders icon as span", () => {
        // Arrange
        const element = <A.Icon
            name="check"
            span
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("Renders icon with extra classname", () => {
        // Arrange
        const expected = "blabla";
        const element = <A.Icon
            name="check"
            className={expected}
        />;

        // Act and assert
        const tree = renderAndMatchSnapshot(element);
        expect(tree.props.className).toContain(expected);
    });

    it("Renders icon with onclick", () => {
        // Arrange
        const element = <A.Icon
            name="check"
            onClick={() => {/**/ }}
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

});
