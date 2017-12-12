import * as React from "react";
import * as renderer from "react-test-renderer";

import * as A from "../..";

describe("Label", () => {
    it("Renders default, string", () => {
        // Act
        const component: any = renderer.create(
            <A.Label
                value="value"
            />);
        const tree: renderer.ReactTestRendererJSON = component.toJSON();

        // Assert
        expect(tree).toMatchSnapshot();
    });

    it("Renders default, number", () => {
        // Act
        const component: any = renderer.create(
            <A.Label
                value={10}
            />);
        const tree: renderer.ReactTestRendererJSON = component.toJSON();

        // Assert
        expect(tree).toMatchSnapshot();
    });

    it("Renders Label with level danger", () => {
        // Arrang
        const level = A.Levels.Danger;

        // Act
        const component: any = renderer.create(
            <A.Label
                value={10}
                level={level}
            />);
        const tree: renderer.ReactTestRendererJSON = component.toJSON();

        // Assert
        expect(tree.props.className).toContain(`a-label--${level}`);
        expect(tree).toMatchSnapshot();
    });

    it("Renders Label with level warning", () => {
        // Arrang
        const level = A.Levels.Warning;

        // Act
        const component: any = renderer.create(
            <A.Label
                value={10}
                level={level}
            />);
        const tree: renderer.ReactTestRendererJSON = component.toJSON();

        // Assert
        expect(tree.props.className).toContain(`a-label--${level}`);
        expect(tree).toMatchSnapshot();
    });
});
