import * as classNames from "classnames";
import * as React from "react";

export type SpinnerProperties = { small?: boolean };

/**
 * Atoms: spinner component
 */
export default class Spinner extends React.Component<SpinnerProperties, {}> {

    public render(): any {
        return (
            <div className={this.className()} />
        );
    }

    private className(): string {
        return classNames(
            "a-spinner",
            { "a-spinner--sm": this.props.small },
        );
    }
}
