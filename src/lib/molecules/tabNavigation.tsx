import * as classNames from "classnames";
import * as React from "react";

import Icon from "../utilities/icon";

export type TabNavigationItem = {
    active?: boolean;
    badge?: string | number;
    href?: boolean;
    icon?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>, item: TabNavigationItem) => void;
    title: string;
};
export type TabNavigationProperties = {
    items: TabNavigationItem[];
    activeIndex?: number;
};
export type TabNavigationState = {
    activeIndex?: number;
};

/**
 * Molecules: Tab Navigation
 */
export class TabNavigation extends React.Component<TabNavigationProperties, TabNavigationState> {

    public constructor(props: TabNavigationProperties) {
        super(props);
        this.state = { activeIndex: props.activeIndex };
    }

    public render(): any {
        return (
            <ul className="m-nav-tabs">
                {this.props.items.map((x, i) => this.renderItem(x, i))}
            </ul>
        );
    }

    public componentWillReceiveProps(next: TabNavigationProperties): void {
        if (next.activeIndex) {
            this.setState({ activeIndex: next.activeIndex });
        }
    }

    private renderItem(item: TabNavigationItem, index: number): JSX.Element {
        const classname: string = classNames(
            { "is-active": this.state.activeIndex === index },
        );

        return (
            <li className={classname} key={index}>
                {this.renderLink(item, index)}
            </li>
        );
    }

    private renderLink(item: TabNavigationItem, index: number): JSX.Element {
        return (
            <a
                href="#"
                onClick={(e) => this.onClick(e, item, index)}
            >
                {item.icon ? <Icon name={item.icon} /> : null}
                {item.title}
            </a>
        );
    }

    private onClick(e: React.MouseEvent<HTMLAnchorElement>, item: TabNavigationItem, index: number): void {
        if (item.onClick) {
            e.preventDefault();
            item.onClick(e, item);
        }
        this.setState({ activeIndex: index });
    }
}
