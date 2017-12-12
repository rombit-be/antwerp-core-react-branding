import * as React from "react";

import * as A from "../..";
import { renderAndMatchSnapshot } from "../../../__tests__/__fixtures__/testUtils";

describe("Layout", () => {
    it("Renders default", () => {
        // Arrange
        const element = <A.Layout
            type={A.LayoutStyle.Container}
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });
});
