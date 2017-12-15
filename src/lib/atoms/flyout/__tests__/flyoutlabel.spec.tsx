import * as React from "react";

import * as A from "../../../";
import { renderAndMatchSnapshot } from "../../../../__tests__/__fixtures__/testUtils";

describe("FlyoutLabel", () => {
    it("Renders default", () => {
        // Arrange
        const element = (<A.FlyoutLabel onClick={jest.fn()} />);

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("Renders with child", () => {
        // Arrange
        const element = (<A.FlyoutLabel onClick={jest.fn()}><p>Child</p></A.FlyoutLabel>);

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("Renders with children", () => {
        // Arrange
        const element = (<A.FlyoutLabel onClick={jest.fn()}>
            <p>Child 1</p>
            <p>Child 2</p>
        </A.FlyoutLabel>);

        // Act and assert
        renderAndMatchSnapshot(element);
    });
});
