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
                    <dt key={(i * 2)}>{this.renderKey(x)}</dt>,
                    <dd key={(i * 2) + 1}>{list[x]}</dd>,
                ]).reduce((p, c) => p.concat(c), []);
        }
        return null;
    }

    private renderKey(key: string): string {
        if (this.props.capitalize && key && key.length > 1) {
            return `${key.slice(0, 1).toUpperCase()}${key.slice(1)}${this.colon()}`;
        }
        if (this.props.capitalize) {
            return `${key.toUpperCase()}${this.colon()}`;
        }
        return `${key}${this.colon()}`;
    }

    private colon(): string {
        return this.props.colon ? ":" : "";
    }
}
