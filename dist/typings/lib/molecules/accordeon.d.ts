/// <reference types="react" />
import * as React from "react";
export declare type AccordeonProperties = {
    activeIndex?: number;
};
export declare type AccordeonState = {
    activeIndex: number;
};
/**
 * Molecules: Accordeon item
 */
export declare class Accordeon extends React.Component<AccordeonProperties, AccordeonState> {
    constructor(props: AccordeonProperties);
    render(): any;
    componentWillReceiveProps(nextProps: AccordeonProperties): void;
    private renderItems();
    private onClick(index);
}
