import * as React from "react";

import * as A from "../..";
import { renderAndMatchSnapshot } from "../../../__tests__/__fixtures__/testUtils";

describe("Button", () => {
    it("Renders default icon button", () => {
        // Act
        const element = (
            <A.IconButton
                icon="check"
                text="testbutton"
            />);

        // Act and assert
        const tree = renderAndMatchSnapshot(element);

        expect(tree.props.className).toContain("has-icon");
    });

    it("Renders default icon button, icon on the left when location not specified", () => {
        // Act
        const element = (
            <A.IconButton
                icon="check"
                text="testbutton"
            />);

        // Act and assert
        const tree = renderAndMatchSnapshot(element);

        expect(tree.props.className).toContain("has-icon-left");
    });

    it("Renders default icon button, icon on the right", () => {
        // Act
        const element = (
            <A.IconButton
                icon="check"
                text="testbutton"
                location={A.Location.Right}
            />);

        // Act and assert
        const tree = renderAndMatchSnapshot(element);

        expect(tree.props.className).toContain("has-icon-right");
    });

    it("Renders default icon button, icon on the right", () => {
        // Act
        const element = (
            <A.IconButton
                icon="check"
                location={A.Location.Right}
            />);

        // Act and assert
        const tree = renderAndMatchSnapshot(element);

        expect(tree.props.className).toContain("has-icon");
        expect(tree.props.className).not.toContain("has-icon-left");
    });
});
