import * as React from "react";

import * as A from "../../..";
import { renderAndMatchSnapshot } from "../../../../__tests__/__fixtures__/testUtils";

describe("Radiobuttons", () => {
    it("Renders default", () => {
        // Arrange
        const element = <A.Radiobuttons
            name="radiobuttons"
            options={
                [
                    { label: "a", value: "a" },
                    { label: "b", value: "b" },
                    { label: "c", value: "c" },
                ]
            }

        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });
});
