import * as React from "react";

import * as classNames from "classnames";

import { Levels } from "../index";

export type TagProperties = {
    icon?: string,
    label: string | JSX.Element;
    level?: Levels,
    onDelete?: () => void,
};

/**
 * React Component Tag
 */
export class Tag extends React.Component<TagProperties, {}> {

    public render(): any {
        return (
            <div className={this.className()}>
                {this.renderIconButton()}
                <span className="m-tag__label">
                    {this.props.label}
                </span>
                {this.renderDeleteButton()}
            </div>
        );
    }

    private renderIconButton(): JSX.Element {
        if (this.props.icon) {
            const level = this.props.level === Levels.Success ? Levels.Success : "default";
            const className = classNames(
                "a-button",
                `a-button--${level}`,
                "a-button--small has-icon",
            );
            return (
                <button className={className}>
                    <i className={`fa fa-${this.props.icon}`}></i>
                </button>
            );
        }
        return null;
    }

    private renderDeleteButton(): JSX.Element {
        if (this.props.onDelete) {
            return (
                <button
                    className="a-button-transparent a-button--small a-button--danger has-icon"
                    onClick={() => this.props.onDelete()}
                >
                    <i className="fa fa-close"></i>
                </button>
            );
        }
        return null;
    }

    private className(): string {
        return classNames(
            "m-tag d-tag",
        );
    }
}
