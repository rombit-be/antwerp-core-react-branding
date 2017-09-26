import * as classNames from "classnames";
import * as React from "react";
import { StyleProperties } from "../common/properties";

// Define the types and properties
export enum BackgroundStyle {
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

export type BackgroundProperties = {
    type: BackgroundStyle;
    className?: string;
} & StyleProperties;

type Properties = BackgroundProperties;

/**
 * Utilities: Background block
 */
export class Background extends React.Component<Properties, {}> {

    public render(): any {
        // Compile the classnames
        const className = classNames(
            this.props.type,
            { "u-bg-white-text": this.isDarkBackground() },
            this.props.className,
        );

        return (
            <div className={className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    private isDarkBackground(): boolean {
        switch (this.props.type) {
            case BackgroundStyle.Black:
            case BackgroundStyle.Danger:
            case BackgroundStyle.Primary:
            case BackgroundStyle.Secondary:
            case BackgroundStyle.Success:
            case BackgroundStyle.Warning:
                return true;
            default:
                return false;
        }
    }
}
