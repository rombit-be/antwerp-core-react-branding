/// <reference types="react" />
import * as renderer from "react-test-renderer";
export declare function renderAsComponentAndGetByClass(element: JSX.Element, className: string): Element;
export declare function renderAndMatchSnapshot(element: JSX.Element): renderer.ReactTestRendererJSON;
