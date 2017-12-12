import * as React from "react";
import * as renderer from "react-test-renderer";

import * as A from "../..";

describe("Accordeon", () => {
    it("Renders accordeon", () => {
        // Act
        const component: any = renderer.create(
            <A.Accordeon>
                <A.AccordeonItem header={"Acc 1"} />
                <A.AccordeonItem header={"Acc 2"} />
                <A.AccordeonItem header={"Acc 3"} />
            </A.Accordeon>);
        const tree: renderer.ReactTestRendererJSON = component.toJSON();

        // Assert
        expect(tree).toMatchSnapshot();
        expect(tree.children.length).toEqual(3);
    });

    it("Renders accordeon with active index", () => {
        // Act
        const component: any = renderer.create(
            <A.Accordeon activeIndex={1}>
                <A.AccordeonItem header={"Acc 1"} />
                <A.AccordeonItem header={"Acc 2"} />
                <A.AccordeonItem header={"Acc 3"} />
            </A.Accordeon>);

        const tree: renderer.ReactTestRendererJSON = component.toJSON();

        // Assert
        expect(tree).toMatchSnapshot();
        expect(tree.children.length).toEqual(3);
    });

    it("Doesn't render non AccordeonItem items", () => {
        // Act
        const component: any = renderer.create(
            <A.Accordeon activeIndex={1}>
                <A.AccordeonItem header={"Acc 1"} />
                <A.AccordeonItem header={"Acc 2"} />
                <div>Don't render me</div>
            </A.Accordeon>);

        const tree: renderer.ReactTestRendererJSON = component.toJSON();

        // Assert
        expect(tree).toMatchSnapshot();
        expect(tree.children.length).toEqual(2);
    });

    it("Renders accordeon without items", () => {
        // Act
        const component: any = renderer.create(
            <A.Accordeon activeIndex={1}>
            </A.Accordeon>);

        const tree: renderer.ReactTestRendererJSON = component.toJSON();

        // Assert
        expect(tree).toMatchSnapshot();
    });

});
