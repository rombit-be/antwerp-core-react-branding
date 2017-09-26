import * as React from "react";
import { StyleProperties } from "../common/properties";

// Define the types and properties
export type ParagraphStyle =
    "u-text-bold" |
    "u-text-capitalize" |
    "u-text-center" |
    "u-text-danger" |
    "u-text-italic" |
    "u-text-justify" |
    "u-text-left" |
    "u-text-light" |
    "u-text-lowercase" |
    "u-text-primary" |
    "u-text-readable" |
    "u-text-right" |
    "u-text-secondary" |
    "u-text-success" |
    "u-text-truncate" |
    "u-text-underline" |
    "u-text-uppercase" |
    "u-text-warning" |
    "u-text-xlight";

export type ParagraphProperties = {
    type: string;
} & StyleProperties;

type Properties = ParagraphProperties;

/**
 * React Component name
 */
export class Paragraph extends React.Component<Properties, {}> {

    public render(): any {
        return (
            <p className={this.props.type} style={this.props.style}>
                {this.props.children}
            </p>
        );
    }
}
