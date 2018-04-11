/// <reference types="react" />
import * as React from "react";
export declare type FieldsetProperties = {
    legend?: string | JSX.Element;
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement>;
/**
 * Atoms: Form component
 */
export declare class Fieldset extends React.Component<FieldsetProperties, {}> {
    render(): any;
    private renderLegend();
}
