import * as React from "react";

import * as A from "../../..";
import { renderAndMatchSnapshot } from "../../../../__tests__/__fixtures__/testUtils";

describe("Confirm", () => {
    it("Renders default", () => {
        // Arrange
        const element = <A.Confirm
            name="confirm"
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });
});
