/// <reference types="react" />
import * as React from "react";
import { SelectProperties } from "./select";
export declare type ReduxFormAdapterProperties = {
    input?: Partial<SelectProperties>;
} & Partial<SelectProperties>;
/**
 * React Component ReduxFormAdapter
 */
export default class ReduxSelectFormAdapter extends React.Component<ReduxFormAdapterProperties, {}> {
    render(): any;
    private renderAdaptedChild();
}
