import * as React from "react";

import * as A from "../../..";
import { renderAndMatchSnapshot } from "../../../../__tests__/__fixtures__/testUtils";

describe("Formlabel", () => {
    it("Renders default", () => {
        // Arrange
        const element = <A.FormLabel
            for="some-element"
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });
});
