import * as React from "react";

import * as A from "../..";
import { renderAndMatchSnapshot } from "../../../__tests__/__fixtures__/testUtils";

describe("Background", () => {
    it("Renders black", () => {
        // Arrange
        const element = <A.Background
            type={A.BackgroundStyle.Black}
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("Renders danger", () => {
        // Arrange
        const element = <A.Background
            type={A.BackgroundStyle.Danger}
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

});
