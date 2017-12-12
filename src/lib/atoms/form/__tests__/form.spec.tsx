import * as React from "react";

import * as A from "../../..";
import { renderAndMatchSnapshot } from "../../../../__tests__/__fixtures__/testUtils";

describe("Form", () => {
    it("Renders default", () => {
        // Arrange
        const element = <A.Form
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });
});
