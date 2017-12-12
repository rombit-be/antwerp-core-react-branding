import * as React from "react";

import { renderAndMatchSnapshot } from "../../../../__tests__/__fixtures__/testUtils";
import Description from "../description";

describe("Description", () => {
    it("Renders default", () => {
        // Arrange
        const element = <Description
            name="description"
            description="blabla"
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });
});
