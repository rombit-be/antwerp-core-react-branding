/// <reference types="react" />
import "./flyoutcontent.scss";
import * as React from "react";
import { FlyoutPosition } from "./flyout";
export declare type FlyoutContentProperties = {
    children?: any;
    visible?: boolean;
    padding?: boolean;
    position?: FlyoutPosition;
};
/**
 * Atoms: FlyoutContent
 */
export declare class FlyoutContent extends React.Component<FlyoutContentProperties, {}> {
    render(): any;
    private className();
}
