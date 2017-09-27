import * as React from "react";

import { Levels } from "../common/levels";

export type BadgeProperties = {
    level?: Levels;
    value: number | string;
};

type Properties = BadgeProperties;

/**
 * Atoms: badge component
 */
export class Badge extends React.Component<Properties, {}> {

    public render(): any {
        return (
            <span className={this.className()}>
                {this.props.value}
            </span>
        );
    }

    private className(): string {
        const type = this.props.level || Levels.None;
        return `a-badge a-badge--${type}`;
    }
}
