/// <reference types="react" />
import * as React from "react";
export declare type TableComponentsProperties = {};
/**
 * React Component TableComponents
 */
export default class TableComponents extends React.Component<TableComponentsProperties, {}> {
    private columns;
    private sectionProps;
    render(): any;
    private renderTable(props);
    private renderTableHeader();
    private renderTableBody();
    private renderTableRow();
    private renderTableCell();
}
