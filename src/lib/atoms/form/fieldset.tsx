import * as React from "react";

export type FieldsetProperties = { legend?: string | JSX.Element }
    & React.FieldsetHTMLAttributes<HTMLFieldSetElement>;

/**
 * Atoms: Form component
 */
export class Fieldset extends React.Component<FieldsetProperties, {}> {

    public render(): any {
        const props: any = { ...this.props };
        delete props.legend;

        return (
            <fieldset
                {...props}
            >
                {this.renderLegend()}
                {this.props.children}
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
