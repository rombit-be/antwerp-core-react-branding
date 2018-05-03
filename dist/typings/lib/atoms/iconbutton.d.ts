/// <reference types="react" />
import * as React from "react";
import { Locations } from "../common/locations";
import { ButtonProperties } from "./button";
export declare type IconButtonProperties = {
    location?: Locations;
    icon: string;
} & ButtonProperties;
/**
 * React Component IconButton
 */
export declare class IconButton extends React.Component<IconButtonProperties, {}> {
    render(): any;
    getButtonProperties(): ButtonProperties;
    getClassName(): string;
    private hasText();
}
