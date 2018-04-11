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
 * Atoms: DefinitionList
 */
export declare class DefinitionList extends React.Component<DefinitionListProperties, {}> {
    render(): any;
    private renderList();
    private renderKey(key);
    private colon();
}
