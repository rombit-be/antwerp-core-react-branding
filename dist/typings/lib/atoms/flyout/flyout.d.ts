/// <reference types="react" />
import * as React from "react";
import { Locations } from "../../common/locations";
import { Sizes } from "../../common/sizes";
export declare type FlyoutPosition = {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
};
export declare type FlyoutProperties = {
    content?: JSX.Element | JSX.Element[];
    label?: JSX.Element | JSX.Element[];
    location?: Locations;
    padding?: boolean;
    size?: Sizes;
    visible?: boolean;
};
export declare type FlyoutState = {
    position?: FlyoutPosition;
    visible?: boolean;
};
/**
 * Atoms: Flyout
 */
export declare class Flyout extends React.Component<FlyoutProperties, FlyoutState> {
    constructor(props: FlyoutProperties);
    render(): any;
    componentWillReceiveProps(next: FlyoutProperties): void;
    private className();
    private toggleFlyout;
    private showFlyout;
    private hideFlyout;
    private calculatePosition(e);
    private findElement(element);
}
