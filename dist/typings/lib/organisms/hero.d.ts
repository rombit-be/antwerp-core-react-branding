/// <reference types="react" />
import "./hero.scss";
import * as React from "react";
export declare type HeroProperties = {
    color?: string;
    subtitle?: string | JSX.Element;
    title: string | JSX.Element;
};
/**
 * Organisms: Hero
 */
export declare class Hero extends React.Component<HeroProperties, {}> {
    render(): JSX.Element;
    private renderChildren();
}
