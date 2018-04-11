/// <reference types="react" />
import * as React from "react";
export declare type HeroItemProperties = {
    active?: boolean;
    href?: string;
    onClick?: () => void;
    target?: string;
    title: string | JSX.Element;
};
/**
 * Organisms: Hero Item
 */
export declare class HeroItem extends React.Component<HeroItemProperties, {}> {
    render(): any;
    private onClick;
    private className();
}
