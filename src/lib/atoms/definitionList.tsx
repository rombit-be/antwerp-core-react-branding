import * as React from "react";

export type DefinitionListItems = { [key: string]: string };
export type DefinitionListProperties = {
    list: DefinitionListItems;
    capitalize?: boolean;
    colon?: boolean;
};

/**
 * React Component DefinitionList
 */
export class DefinitionList extends React.Component<DefinitionListProperties, {}> {

    public render(): any {
        return (
            <dl className="a-definition-list">
                {this.renderList()}
            </dl>
        );
    }

    private renderList(): JSX.Element[] {
        if (this.props.list) {
            const list: DefinitionListItems = this.props.list;
            return Object.keys(list)
                .map((x, i) => [
                    <dt key={(i * 2)}>{this.key(x)}</dt>,
                    <dd key={(i * 2) + 1}>{list[x]}</dd>,
                ]).reduce((p, c) => p.concat(c), []);
        }
        return null;
    }

    private colon(): string {
        return this.props.colon ? ":" : "";
    }

    private key(value: string): string {
        if (this.props.capitalize && value && value.length > 1) {
            return `${value.slice(0, 1).toUpperCase()}${value.slice(1)}${this.colon()}`;
        }
        return `${value}${this.colon()}`;
    }
}
