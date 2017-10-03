/// <reference types="react" />
import * as React from "react";
export declare type AccordeonItemProperties = {
    collapsed?: boolean;
    header: string;
    index?: number;
    onClick?: (index: number) => void;
};
/**
 * Molecules: Accordeon item
 */
export declare class AccordeonItem extends React.Component<AccordeonItemProperties, {}> {
    render(): any;
    private className();
    private onClick();
}
