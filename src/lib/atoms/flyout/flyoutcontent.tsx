import "./flyoutcontent.scss";

import * as React from "react";

import * as classNames from "classnames";

import { FlyoutPosition } from "./flyout";

export type FlyoutContentProperties = {
    children?: any;
    visible?: boolean;
    padding?: boolean;
    position?: FlyoutPosition
};

/**
 * Atoms: FlyoutContent
 */
export class FlyoutContent extends React.Component<FlyoutContentProperties, {}> {

    public render(): any {
        return this.props.visible ? (
            <div
                className={this.className()}
                style={this.props.position || {}}
            >
                {this.props.children}
            </div>
        ) : (<span />);
    }

    private className(): string {
        return classNames(
            "m-flyout__content",
            { "has-padding": this.props.padding },
        );
    }
}
