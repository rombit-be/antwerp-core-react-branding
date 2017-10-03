/// <reference types="react" />
import * as React from "react";
import { StyleProperties } from "../common/properties";
export declare enum BackgroundStyle {
    Black = "u-bg-black",
    Danger = "u-bg-danger",
    Default = "u-bg",
    Light = "u-bg-light",
    Primary = "u-bg-primary",
    Secondary = "u-bg-secondary",
    Success = "u-bg-success",
    Warning = "u-bg-warning",
    White = "u-bg-white",
}
export declare type BackgroundProperties = {
    type: BackgroundStyle;
    className?: string;
} & StyleProperties;
/**
 * Utilities: Background block
 */
export declare class Background extends React.Component<BackgroundProperties, {}> {
    render(): any;
    private isDarkBackground();
}
