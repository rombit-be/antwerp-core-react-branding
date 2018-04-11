/// <reference types="react" />
import "./flyoutlabel.scss";
import * as React from "react";
export declare type FlyoutLabelProperties = {
    children?: any;
    onClick: (e: React.SyntheticEvent<HTMLElement>) => void;
};
/**
 * Atoms: FlyoutLabel
 */
export declare class FlyoutLabel extends React.Component<FlyoutLabelProperties, {}> {
    static ClassName: string;
    render(): any;
}
