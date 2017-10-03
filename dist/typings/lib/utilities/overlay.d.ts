/// <reference types="react" />
import "./overlay.scss";
import * as React from "react";
export declare type OverlayProperties = {
    visible?: boolean;
    dark?: boolean;
    light?: boolean;
};
/**
 * React Component Overlay
 */
export declare class Overlay extends React.Component<OverlayProperties, {}> {
    render(): any;
    private handleBodyClass();
    private className();
}
