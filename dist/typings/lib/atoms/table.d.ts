/// <reference types="react" />
import * as React from "react";
import { Levels } from "../index";
export declare type TableProperties = {
    level?: Levels;
    responsive?: boolean;
    small?: boolean;
    striped?: boolean;
    spacing?: boolean;
};
/**
 * Atom: Table
 */
export declare class Table extends React.Component<TableProperties, {}> {
    render(): any;
    private renderTableWrapper();
    private renderTable();
    private classNames();
}
