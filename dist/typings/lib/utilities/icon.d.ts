/// <reference types="react" />
import * as React from "react";
export declare type IconProperties = {
    className?: string;
    name: string;
    onClick?: (e: React.SyntheticEvent<HTMLElement>) => void;
    span?: boolean;
    style?: any;
};
/**
 * Utilities: Icon component, wrapper around font-awesome
 */
export declare class Icon extends React.Component<IconProperties, {}> {
    render(): any;
    private className();
    private onClick(e);
}
