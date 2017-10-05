/// <reference types="react" />
import * as React from "react";
import { StyleProperties } from "../common/properties";
export declare enum ParagraphStyle {
    Bold = "u-text-bold",
    Capitalize = "u-text-capitalize",
    Center = "u-text-center",
    Danger = "u-text-danger",
    Italic = "u-text-italic",
    Justify = "u-text-justify",
    Light = "u-text-light",
    LowerCase = "u-text-lowercase",
    Primary = "u-text-primary",
    Readable = "u-text-readable",
    Right = "u-text-right",
    Secondary = "u-text-secondary",
    Success = "u-text-success",
    Truncate = "u-text-truncate",
    Underline = "u-text-underline",
    Uppercase = "u-text-uppercase",
    Warning = "u-text-warning",
    XLight = "u-text-xlight",
}
export declare type ParagraphProperties = {
    type?: ParagraphStyle;
    className?: string;
} & StyleProperties;
/**
 * Text: Paragraph component
 */
export declare class Paragraph extends React.Component<ParagraphProperties, {}> {
    render(): any;
}
