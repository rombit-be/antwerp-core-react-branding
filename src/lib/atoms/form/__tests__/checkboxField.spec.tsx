import * as React from "react";

import * as A from "../../..";
import { renderAndMatchSnapshot } from "../../../../__tests__/__fixtures__/testUtils";

describe("CheckBoxField", () => {
    it("Renders default", () => {
        // Arrange
        const expected = "blabla";
        const element = <A.CheckboxField
            input={{ meta: { error: expected } }}
            name="checkbox"
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
