import * as React from "react";

import * as A from "../../lib";
import StyleSection from "../common/styleSection";
import loremIpsum from "../util/loremIpsum";

export type TableComponentsProperties = {};

/**
 * React Component TableComponents
 */
export default class TableComponents extends React.Component<TableComponentsProperties, {}> {

    private columns: number[] = [0, 1, 2];
    private sectionProps: any = { title: "Table components" };

    public render(): any {
        return (
            <StyleSection {...this.sectionProps}>
                {this.renderTable({})}
                {this.renderTable({ small: true })}
                {this.renderTable({ striped: true })}
                {this.renderTable({ level: A.Levels.Secondary, striped: true })}
            </StyleSection >
        );
    }

    private renderTable(props: A.TableProperties) {
        return (
            <A.Spacing type={A.SpacingStyle.MarginBottom}>
                <A.Table {...props}>
                    {this.renderTableHeader()}
                    {this.renderTableBody()}
                </A.Table>
            </A.Spacing>
        );
    }

    private renderTableHeader(): JSX.Element {
        return (
            <thead>
                <tr>
                    {this.columns.map((x, i) => <th key={`head-${i}`}>{loremIpsum(1, "w")}</th>)}
                </tr>
            </thead>
        );
    }

    private renderTableBody(): JSX.Element {
        const Row = this.renderTableRow.bind(this);
        return (
            <tbody>
                {this.columns.map((x, i) => <Row key={`row-${i}`} />)}
            </tbody>
        );
    }

    private renderTableRow(): JSX.Element {
        const Cell = this.renderTableCell.bind(this);
        return (
            <tr>
                {this.columns.map((x, i) => <Cell key={`cell-${i}`} />)}
            </tr>
        );
    }

    private renderTableCell(): JSX.Element {
        return (
            <td>{loremIpsum(2)}</td>
        );
    }
}
