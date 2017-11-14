import * as React from "react";

import * as classNames from "classnames";

export type HeroItemProperties = {
    active?: boolean;
    href?: string;
    onClick?: () => {}
    target?: string;
    title: string | JSX.Element;
};

/**
 * Organisms: Hero Item
 */
export class HeroItem extends React.Component<HeroItemProperties, {}> {

    public render(): any {
        return (
            <li className={this.className()}>
                <a
                    href={this.props.href}
                    onClick={this.onClick}
                    target={this.props.target}
                >
                    {this.props.title}
                </a>
            </li>
        );
    }

    private onClick = () => {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    private className(): string {
        return classNames(
            { "is-active": this.props.active },
        );
    }
}
