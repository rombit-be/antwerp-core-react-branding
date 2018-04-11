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
    autoFocus?: boolean;
    className?: string;
    disabled?: boolean;
    focus?: boolean;
    level?: Levels;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    onDoubleClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    reset?: boolean;
    size?: Sizes;
    submit?: boolean;
    tabIndex?: number;
    text?: string | JSX.Element;
    type?: ButtonType;
} & StyleProperties;
/**
 * Atoms: button component
 */
export declare class Button extends React.Component<ButtonProperties, {}> {
    private buttonRef;
    render(): any;
    componentDidMount(): void;
    private className();
    private buttonType();
}
