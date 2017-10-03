/// <reference types="react" />
import * as React from "react";
import { Location } from "../common/locations";
import { ButtonProperties } from "./button";
export declare type IconButtonProperties = {
    location: Location;
    icon: string;
} & ButtonProperties;
/**
 * React Component IconButton
 */
export declare class IconButton extends React.Component<IconButtonProperties, {}> {
    render(): any;
    getButtonProperties(): ButtonProperties;
}
