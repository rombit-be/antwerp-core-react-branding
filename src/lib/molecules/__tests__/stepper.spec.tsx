import * as React from "react";
import * as renderer from "react-test-renderer";

import * as A from "../..";

describe("stepper", () => {
    it("Renders stepper", () => {
        const component = renderer.create(
            <A.Stepper steps={["Step 1", "Step 2"]} />);

        const tree: renderer.ReactTestRendererJSON = component.toJSON();

        // Assert
        expect(tree).toMatchSnapshot();
    });

    it("Renders stepper", () => {
        const component = renderer.create(
            <A.Stepper steps={["Step 1", "Step 2", "Stepper 3"]} />);

        const tree: renderer.ReactTestRendererJSON = component.toJSON();

        // Assert
        expect(tree).toMatchSnapshot();
    });

    it("Renders stepper", () => {
        const component = renderer.create(
            <A.Stepper activeStep={1} steps={["Step 1", "Step 2"]} />);

        const tree: renderer.ReactTestRendererJSON = component.toJSON();

        // Assert
        expect(tree).toMatchSnapshot();
    });
});
