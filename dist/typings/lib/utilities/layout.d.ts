/// <reference types="react" />
import * as React from "react";
import { StyleProperties } from "../common/properties";
export declare enum LayoutStyle {
    Wrapper = "u-wrapper",
    Container = "u-container",
    Overflow = "u-no-overflow",
    Clearfix = "u-clearfix",
    ScreenReaderOnly = "u-screen-reader-only",
}
export declare type LayoutProperties = {
    type: LayoutStyle;
    className?: string;
} & StyleProperties;
/**
 * Utilities: Layouts component, renamed as block
 */
export declare class Layout extends React.Component<LayoutProperties, {}> {
    render(): any;
}
