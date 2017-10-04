import * as React from "react";
import * as renderer from "react-test-renderer";

import * as A from "../..";

test("Paragraph", () => {
    // Act
    const component: any = renderer.create(
        <A.Paragraph type={A.ParagraphStyle.Bold}>test</A.Paragraph>);
    const tree: renderer.ReactTestRendererJSON = component.toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
});
