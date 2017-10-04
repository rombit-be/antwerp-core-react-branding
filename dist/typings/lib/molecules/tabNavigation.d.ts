/// <reference types="react" />
import * as React from "react";
export declare type TabNavigationItem = {
    active?: boolean;
    badge?: string | number;
    href?: boolean;
    icon?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>, item: TabNavigationItem) => void;
    title: string;
};
export declare type TabNavigationProperties = {
    items: TabNavigationItem[];
    activeIndex?: number;
};
export declare type TabNavigationState = {
    activeIndex?: number;
};
/**
 * Molecules: Tab Navigation
 */
export declare class TabNavigation extends React.Component<TabNavigationProperties, TabNavigationState> {
    constructor(props: TabNavigationProperties);
    render(): any;
    componentWillReceiveProps(next: TabNavigationProperties): void;
    private renderItem(item, index);
    private renderLink(item, index);
    private onClick(e, item, index);
}
