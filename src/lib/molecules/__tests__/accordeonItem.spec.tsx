import * as React from "react";
import * as renderer from "react-test-renderer";

import * as A from "../..";

describe("AccordeonItem", () => {
    it("Renders default", () => {
        // Act
        const component: any = renderer.create(<A.AccordeonItem header="test" />);
        const tree: renderer.ReactTestRendererJSON = component.toJSON();

        // Assert
        expect(tree).toMatchSnapshot();
    });

    it("Renders default, collapsed", () => {
        // Act
        const component: any = renderer.create(<A.AccordeonItem header="test" collapsed />);
        const tree: renderer.ReactTestRendererJSON = component.toJSON();

        // Assert
        expect(tree).toMatchSnapshot();
    });

    it("Renders default, collapsed and onclick", () => {
        // Act
        const component: any = renderer.create(<A.AccordeonItem header="test" collapsed onClick={() => {/**/ }} />);
        const tree: renderer.ReactTestRendererJSON = component.toJSON();

        // Assert
        expect(tree).toMatchSnapshot();
    });
});
