/// <reference types="react" />
import * as React from "react";
export declare type AccordeonItemProperties = {
    className?: string;
    collapsed?: boolean;
    header: string;
    index?: number;
    onClick?: (index: number) => void;
    style?: any;
};
/**
 * Molecules: Accordeon item
 */
export declare class AccordeonItem extends React.Component<AccordeonItemProperties, {}> {
    render(): any;
    private className();
    private onClick();
}
