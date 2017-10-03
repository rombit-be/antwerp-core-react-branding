/// <reference types="react" />
import * as React from "react";
import { Levels } from "../common/levels";
import { StyleProperties } from "../common/properties";
import { Sizes } from "../common/sizes";
export declare enum ButtonType {
    Default = "default",
    Negative = "negative",
    Outline = "outline",
    Transparent = "transparent",
}
export declare type ButtonProperties = {
    className?: string;
    disabled?: boolean;
    level?: Levels;
    negative?: boolean;
    size?: Sizes;
    text?: string | JSX.Element;
    type?: ButtonType;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
} & StyleProperties;
/**
 * Atoms: button component
 */
export declare class Button extends React.Component<ButtonProperties, {}> {
    render(): any;
    private className();
    private onClick(e);
}
