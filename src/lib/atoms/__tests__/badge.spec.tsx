import * as React from "react";

import * as A from "../..";
import { renderAndMatchSnapshot } from "../../../__tests__/__fixtures__/testUtils";

describe("Badge", () => {
    it("Renders default, string", () => {
        // Act
        const element = (
            <A.Badge
                value="value"
            />);

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("Renders default, number", () => {
        // Act
        const element = (
            <A.Badge
                value={10}
            />);

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("Renders badge with level danger", () => {
        // Arrang
        const level = A.Levels.Danger;

        // Act
        const element = (
            <A.Badge
                value={10}
                level={level}
            />);
        const tree = renderAndMatchSnapshot(element);

        // Assert
        expect(tree.props.className).toContain(`a-badge--${level}`);
        expect(tree).toMatchSnapshot();
    });

    it("Renders badge with level warning", () => {
        // Arrang
        const level = A.Levels.Warning;

        // Act
        const element = (
            <A.Badge
                value={10}
                level={level}
            />);
        const tree = renderAndMatchSnapshot(element);

        // Assert
        expect(tree.props.className).toContain(`a-badge--${level}`);
        expect(tree).toMatchSnapshot();
    });
});
