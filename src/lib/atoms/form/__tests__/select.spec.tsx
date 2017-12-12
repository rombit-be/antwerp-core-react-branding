import * as React from "react";

import * as A from "../../..";
import { renderAndMatchSnapshot } from "../../../../__tests__/__fixtures__/testUtils";

describe("Select", () => {
    it("Renders default", () => {
        // Arrange
        const element = <A.Select
            name="select"
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
