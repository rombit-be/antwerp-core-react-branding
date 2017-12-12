import * as React from "react";

import * as A from "../..";
import { renderAndMatchSnapshot } from "../../../__tests__/__fixtures__/testUtils";

describe("Spinner", () => {
    it("Renders default", () => {
        // Arrange
        const element = <A.Spinner />;

        // Act and assert
        const tree = renderAndMatchSnapshot(element);
        expect(tree.props.className).toBe("a-spinner");
    });

    it("Renders small", () => {
        // Arrange
        const element = <A.Spinner small />;

        // Act and assert
        const tree = renderAndMatchSnapshot(element);
        expect(tree.props.className).toContain("a-spinner--sm");
    });
});
