import * as React from "react";
import * as renderer from "react-test-renderer";

import * as A from "../..";

describe("Alert", () => {
    it("Renders default", () => {
        // Act
        const component: any = renderer.create(
            <A.Alert
                message="Message"
                title="Jest Testing"
            />);
        const tree: renderer.ReactTestRendererJSON = component.toJSON();

        // Assert
        expect(tree).toMatchSnapshot();
    });

    it("Renders visible", () => {
        // Act
        const component: any = renderer.create(
            <A.Alert
                message="Message"
                title="Jest Testing"
                visible
            />);
        const tree: renderer.ReactTestRendererJSON = component.toJSON();

        // Assert
        expect(tree).toMatchSnapshot();
    });

    it("Renders visible, primary", () => {
        // Act
        const component: any = renderer.create(
            <A.Alert
                message="Message"
                title="Jest Testing"
                visible
                level={A.Levels.Primary}
            />);
        const tree: renderer.ReactTestRendererJSON = component.toJSON();

        // Assert
        expect(tree).toMatchSnapshot();
    });

    it("Renders visible, warning", () => {
        // Act
        const component: any = renderer.create(
            <A.Alert
                message="Message"
                title="Jest Testing"
                visible
                level={A.Levels.Warning}
            />);
        const tree: renderer.ReactTestRendererJSON = component.toJSON();

        // Assert
        expect(tree).toMatchSnapshot();
    });

    it("Renders visible, danger", () => {
        // Act
        const component: any = renderer.create(
            <A.Alert
                message="Message"
                title="Jest Testing"
                visible
                level={A.Levels.Danger}
            />);
        const tree: renderer.ReactTestRendererJSON = component.toJSON();

        // Assert
        expect(tree).toMatchSnapshot();
    });

    it("Renders visible, danger, with onOk", () => {
        // Act
        const component: any = renderer.create(
            <A.Alert
                message="Message"
                title="Jest Testing"
                visible
                level={A.Levels.Danger}
                onOk={() => { /**/ }}
            />);
        const tree: renderer.ReactTestRendererJSON = component.toJSON();

        // Assert
        expect(tree).toMatchSnapshot();
    });

    it("Renders visible, danger, with onOk and onCancel", () => {
        // Act
        const component: any = renderer.create(
            <A.Alert
                message="Message"
                title="Jest Testing"
                visible
                level={A.Levels.Danger}
                onOk={() => { /**/ }}
                onCancel={() => { /**/ }}
            />);
        const tree: renderer.ReactTestRendererJSON = component.toJSON();

        // Assert
        expect(tree).toMatchSnapshot();
    });
});
