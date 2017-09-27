import * as React from "react";

export type FieldsetProperties = { legend?: string } & React.FieldsetHTMLAttributes<HTMLFieldSetElement>;

type Properties = FieldsetProperties;

/**
 * Atoms: Form component
 */
export class Fieldset extends React.Component<Properties, {}> {

    public render(): any {
        return (
            <fieldset
                {...this.props}
            >
                {this.renderLegend()}
            </fieldset>
        );
    }

    private renderLegend(): JSX.Element {
        if (this.props.legend) {
            return (<legend>{this.props.legend}</legend>);
        }
        return null;
    }
}
