import * as React from "react";

import * as A from "../../..";
import { renderAndMatchSnapshot } from "../../../../__tests__/__fixtures__/testUtils";

describe("Input", () => {
    it("Renders default", () => {
        // Arrange
        const element = <A.Input
            name="input"
            type="text"
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });
});
