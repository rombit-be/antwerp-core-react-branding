/// <reference types="react" />
import * as React from "react";
import { CheckboxesProperties } from "../..";
export declare type ReduxCheckboxesAdapterProperties = {
    input?: Partial<CheckboxesProperties>;
} & Partial<CheckboxesProperties>;
/**
 * React Component ReduxCheckboxesAdapter
 */
export declare class ReduxCheckboxesAdapter extends React.Component<ReduxCheckboxesAdapterProperties, {}> {
    render(): any;
    private renderAdaptedChild();
}
