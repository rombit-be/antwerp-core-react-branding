import * as classNames from "classnames";
import * as React from "react";
import { StyleProperties } from "../common/properties";

// Define the types and properties
export enum LayoutStyle {
    Wrapper = "u-wrapper",
    Container = "u-container",
    Overflow = "u-no-overflow",
    Clearfix = "u-clearfix",
    ScreenReaderOnly = "u-screen-reader-only",
}

export type LayoutProperties = {
    type: LayoutStyle;
    className?: string;
} & StyleProperties;

type Properties = LayoutProperties;

/**
 * Utilities: Layouts component, renamed as block
 */
export class Layout extends React.Component<Properties, {}> {

    public render(): any {
        // Compile the classnames
        const className = classNames(
            this.props.type,
            this.props.className,
        );

        return (
            <div className={className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}
