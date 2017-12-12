import * as React from "react";

import * as A from "../../..";
import { renderAndMatchSnapshot } from "../../../../__tests__/__fixtures__/testUtils";

describe("Fieldset", () => {
    it("Renders default", () => {
        // Arrange
        const element = <A.Fieldset
            legend="fieldset"
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });
});
