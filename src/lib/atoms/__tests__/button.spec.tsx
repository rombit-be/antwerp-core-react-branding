import * as React from "react";
import * as TestUtils from "react-dom/test-utils";

import * as A from "../..";
import { renderAndMatchSnapshot, renderAsComponentAndGetByClass } from "../../../__tests__/__fixtures__/testUtils";

describe("Button", () => {
    it("Renders default button, test in prop", () => {
        // Act
        const element = (
            <A.Button
                text="testbutton"
            />);

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("Renders default button, text as child", () => {
        // Act
        const element = (
            <A.Button>testbutton</A.Button>);

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("Renders button with type and level", () => {
        // Arrang
        const level = A.Levels.Danger;
        const type = A.ButtonType.Outline;

        // Act
        const element = (
            <A.Button
                level={level}
                text="testbutton"
                type={type}
            />);

        // Act and assert
        const tree = renderAndMatchSnapshot(element);

        // Assert
        expect(tree.props.className).toContain(`a-button--${level}`);
        expect(tree.props.className).toContain(`a-button-${type}`);
        expect(tree).toMatchSnapshot();
    });

    it("Renders button with type and level, default should not be added", () => {
        // Arrang
        const level = A.Levels.Danger;
        const type = A.ButtonType.Default;

        // Act
        const element = (
            <A.Button
                level={level}
                text="testbutton"
                type={type}
            />);

        // Act and assert
        const tree = renderAndMatchSnapshot(element);

        // Assert
        expect(tree.props.className).toContain(`a-button--${level}`);
        expect(tree.props.className).not.toContain(`a-button-${type}`);
        expect(tree).toMatchSnapshot();
    });

    it("Button passes click", () => {
        // Arrang
        const onClick = jest.fn();

        // Act
        const button = renderAsComponentAndGetByClass((
            <A.Button onClick={onClick} text="mlkj" />
        ), "a-button");
        TestUtils.Simulate.click(button);

        // Assert
        expect(onClick).toBeCalled();
    });
});
