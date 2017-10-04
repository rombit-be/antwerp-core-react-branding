import * as React from "react";
import * as renderer from "react-test-renderer";

import * as A from "../..";

test("ButtonGroup", () => {
    // Act
    const component: any = renderer.create(
        <A.ButtonGroup>
            <A.Button>bla</A.Button>
            <A.Button>bli</A.Button>
        </A.ButtonGroup>);
    const tree: renderer.ReactTestRendererJSON = component.toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
});

test("ButtonGroup without children", () => {
    // Act
    const component: any = renderer.create(
        <A.ButtonGroup>
        </A.ButtonGroup>);
    const tree: renderer.ReactTestRendererJSON = component.toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
});

test("ButtonGroup with wrong children", () => {
    // Act
    const component: any = renderer.create(
        <A.ButtonGroup>
            <A.Button>bla</A.Button>
            <div>Wrong child</div>
        </A.ButtonGroup>);
    const tree: renderer.ReactTestRendererJSON = component.toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
});
