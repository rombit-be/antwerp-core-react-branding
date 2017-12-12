import * as TestUtils from "react-dom/test-utils";
import * as renderer from "react-test-renderer";

export function renderAsComponentAndGetByClass(element: JSX.Element, className: string): Element {
    const document = TestUtils.renderIntoDocument(element);
    return TestUtils.findRenderedDOMComponentWithClass(document as any, className);
}

export function renderAndMatchSnapshot(element: JSX.Element): renderer.ReactTestRendererJSON {
    // Act
    const component = renderer.create(element);
    const tree: renderer.ReactTestRendererJSON = component.toJSON();

    // Assert
    expect(tree).toMatchSnapshot();

    // Return the value for further testing
    return tree;
}
