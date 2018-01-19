import * as React from "react";

import * as A from "../../../";
import { renderAndMatchSnapshot } from "../../../../__tests__/__fixtures__/testUtils";

describe("FlyoutContent", () => {
    it("Renders default", () => {
        // Arrange
        const element = (<A.FlyoutContent visible />);

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("Renders with child", () => {
        // Arrange
        const element = (<A.FlyoutContent visible></A.FlyoutContent>);

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("Renders with children", () => {
        // Arrange
        const element = (<A.FlyoutContent visible>
            <p>Child 1</p>
            <p>Child 2</p>
        </A.FlyoutContent>);

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("Visible and non visible should be different", () => {
        // Arrange
        const visible = (<A.FlyoutContent visible><p>child</p></A.FlyoutContent>);
        const hidden = (<A.FlyoutContent><p>child</p></A.FlyoutContent>);

        // Act and assert
        const visibletree = renderAndMatchSnapshot(visible);
        const hiddentree = renderAndMatchSnapshot(hidden);

        expect(visibletree).not.toEqual(hiddentree);
    });
});
