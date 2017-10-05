import * as classNames from "classnames";
import * as React from "react";

import { StyleProperties } from "../common/properties";

// Define the types and properties
export enum ParagraphStyle {
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

export type ParagraphProperties = {
    type?: ParagraphStyle;
    className?: string;
} & StyleProperties;

/**
 * Text: Paragraph component
 */
export class Paragraph extends React.Component<ParagraphProperties, {}> {

    public render(): any {
        const className = classNames(this.props.type, this.props.className);
        return (
            <p className={className} style={this.props.style}>
                {this.props.children}
            </p>
        );
    }
}
