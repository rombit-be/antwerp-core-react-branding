import * as React from "react";

import * as A from "../..";
import { renderAndMatchSnapshot } from "../../../__tests__/__fixtures__/testUtils";

describe("Paragraph", () => {
    it("Renders bold", () => {
        // Act
        const element = (
            <A.Paragraph type={A.ParagraphStyle.Bold}>test</A.Paragraph>);

        // Act and Assert
        const tree = renderAndMatchSnapshot(element);
        expect(tree.props.className).toContain("u-text-bold");
    });

    it("Renders italics", () => {
        // Act
        const element = (
            <A.Paragraph type={A.ParagraphStyle.Italic}>test</A.Paragraph>);

        // Act and Assert
        const tree = renderAndMatchSnapshot(element);
        expect(tree.props.className).toContain("u-text-italic");
    });

    it("Renders alerts when the type is alert", () => {
        // Act
        const element = (
            <A.Paragraph type={A.ParagraphStyle.Alert} level={A.Levels.Danger}>test</A.Paragraph>);

        // Act and Assert
        const tree = renderAndMatchSnapshot(element);
        expect(tree.props.className).toContain("m-alert--danger");
    });

    it("Don't render alert when the type is not alert", () => {
        // Act
        const element = (
            <A.Paragraph level={A.Levels.Danger}>test</A.Paragraph>);

        // Act and Assert
        const tree = renderAndMatchSnapshot(element);
        expect(tree.props.className).not.toContain("m-alert--danger");
    });

});
