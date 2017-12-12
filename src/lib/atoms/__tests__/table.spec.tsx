import * as React from "react";

import { shallow } from "enzyme";

import * as A from "../..";
import { renderAndMatchSnapshot } from "../../../__tests__/__fixtures__/testUtils";

describe("Table", () => {
    it("Renders default", () => {
        // Act
        const element = (
            <A.Table>
                <tr><td>blabla</td></tr>
            </A.Table>
        );

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("Renders with level Success", () => {
        // Act
        const level = A.Levels.Success;
        const element = (
            <A.Table level={level}>
                <tr><td>blabla</td></tr>
            </A.Table>
        );

        // Act and assert
        const tree = renderAndMatchSnapshot(element);
        expect(tree.props.className).toContain(`a-table--${level}`);
    });

    it("Renders with level Primary", () => {
        // Act
        const level = A.Levels.Primary;
        const element = (
            <A.Table level={level}>
                <tr><td>blabla</td></tr>
            </A.Table>
        );

        // Act and assert
        const tree = renderAndMatchSnapshot(element);
        expect(tree.props.className).toContain(`a-table--${level}`);
    });

    it("Renders small table", () => {
        // Act
        const element = (
            <A.Table small>
                <tr><td>blabla</td></tr>
            </A.Table>
        );

        // Act and assert
        const tree = renderAndMatchSnapshot(element);
        expect(tree.props.className).toContain(`a-table--small`);
    });

    it("Renders striped table", () => {
        // Act
        const element = (
            <A.Table striped>
                <tr><td>blabla</td></tr>
            </A.Table>
        );

        // Act and assert
        const tree = renderAndMatchSnapshot(element);
        expect(tree.props.className).toContain(`a-table--striped`);
    });

    it("Renders children", () => {
        // Act
        const element = (
            <A.Table striped>
                <tr><td>blabla</td></tr>
                <tr><td>blabla</td></tr>
                <tr><td>blabla</td></tr>
                <tr><td>blabla</td></tr>
            </A.Table>
        );

        // Act
        const table = shallow(element);

        // Act and assert
        expect(table.find("td").length).toBe(4);
    });
});
