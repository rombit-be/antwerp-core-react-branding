/// <reference types="react" />
import * as React from "react";
import { StyleProperties } from "../common/properties";
export declare type LogoProperties = {
    absolute: boolean;
} & StyleProperties;
/**
 * Utilities: A-stad logo
 * TODO: SVG's are not visualized with webpack-dev-server
 */
export default class Logo extends React.Component<LogoProperties, {}> {
    render(): any;
    private getAbsoluteStyle();
}
