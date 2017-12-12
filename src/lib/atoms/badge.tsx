import * as React from "react";

import * as classNames from "classnames";

import { Levels } from "../common/levels";

export type BadgeProperties = {
    level?: Levels;
    value: number | string;
};

/**
 * Atoms: badge component
 */
export class Badge extends React.Component<BadgeProperties, {}> {

    public render(): any {
        return (
            <span className={this.className()}>
                {this.props.value}
            </span>
        );
    }

    private className(): string {
        return classNames(
            "a-badge",
            this.props.level ? `a-badge--${this.props.level}` : "",
        );
    }
}
