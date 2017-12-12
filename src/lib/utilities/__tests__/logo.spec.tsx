import * as React from "react";

import * as A from "../..";
import { renderAndMatchSnapshot } from "../../../__tests__/__fixtures__/testUtils";

describe("Logo", () => {
    it("Renders default", () => {
        // Arrange
        const element = <A.Logo
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("Renders absolute", () => {
        // Arrange
        const element = <A.Logo
            absolute
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });
});
