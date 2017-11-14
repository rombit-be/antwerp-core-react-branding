import * as classNames from "classnames";
import * as React from "react";
import { Levels, Spacing, SpacingStyle } from "../index";

export type TableProperties = {
    level?: Levels;
    responsive?: boolean;
    small?: boolean;
    striped?: boolean;
    spacing?: boolean;
};

/**
 * Atom: Table
 */
export class Table extends React.Component<TableProperties, {}> {

    public render(): any {
        if (this.props.spacing) {
            return (
                <Spacing type={SpacingStyle.MarginBottom}>
                    {this.renderTableWrapper()}
                </Spacing>
            );
        } else {
            return this.renderTableWrapper();
        }
    }

    private renderTableWrapper(): any {
        if (this.props.responsive) {
            return (
                <div className="a-table__wrapper-responsive">
                    {this.renderTable()}
                </div>
            );
        } else {
            return this.renderTable();
        }
    }

    private renderTable(): JSX.Element {
        return (
            <table className={this.classNames()}>
                {this.props.children}
            </table>
        );
    }

    private classNames(): string {
        return classNames(
            "a-table",
            this.props.level ? `a-table--${this.props.level}` : "",
            { "a-table--small": this.props.small },
            { "a-table--striped": this.props.striped },
        );
    }
}
