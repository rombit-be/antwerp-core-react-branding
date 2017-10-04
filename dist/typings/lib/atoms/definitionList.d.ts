/// <reference types="react" />
import * as React from "react";
export declare type DefinitionListItems = {
    [key: string]: string;
};
export declare type DefinitionListProperties = {
    list: DefinitionListItems;
    capitalize?: boolean;
    colon?: boolean;
};
/**
 * React Component DefinitionList
 */
export declare class DefinitionList extends React.Component<DefinitionListProperties, {}> {
    render(): any;
    private renderList();
    private colon();
    private key(value);
}
