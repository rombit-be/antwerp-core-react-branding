/// <reference types="react" />
import "./overlay.scss";
import * as React from "react";
export declare type OverlayProperties = {
    className?: string;
    dark?: boolean;
    light?: boolean;
    visible?: boolean;
    zIndex?: number;
    noBodyClass?: boolean;
};
/**
 * React Component Overlay
 */
export declare class Overlay extends React.Component<OverlayProperties, {}> {
    render(): any;
    private handleBodyClass();
    private className();
}
