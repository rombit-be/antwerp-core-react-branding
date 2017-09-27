import * as React from "react";

export type IconProperties = { name: string, style?: any, span?: boolean };

type Properties = IconProperties;

/**
 * Utilities: Icon component, wrapper around font-awesome
 */
export default class Icon extends React.Component<Properties, {}> {
    public render(): any {
        if (this.props.span) {
            return (
                <span className={`fa fa-${this.props.name}`} style={this.props.style}></span>
            );
        } else {
            return (
                <i className={`fa fa-${this.props.name}`} style={this.props.style}></i>
            );
        }
    }
}
