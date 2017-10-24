/// <reference types="react" />
import * as React from "react";
import { SelectProperties } from "./select";
export declare type ReduxSelectFormAdapterProperties = {
    validate?: any;
    input?: Partial<SelectProperties>;
} & Partial<SelectProperties>;
/**
 * React Component ReduxFormAdapter
 */
export default class ReduxSelectFormAdapter extends React.Component<ReduxSelectFormAdapterProperties, {}> {
    render(): any;
    private renderAdaptedChild();
}
