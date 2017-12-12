import * as React from "react";

import * as A from "../..";
import { renderAndMatchSnapshot } from "../../../__tests__/__fixtures__/testUtils";

describe("Avatar", () => {
    it("Renders default", () => {
        // Arrange
        const element = <A.Avatar
            src="test"
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("Renders small and with name", () => {
        // Arrange
        const element = <A.Avatar
            src="test"
            size={A.Sizes.Small}
            name="me"
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });
});
