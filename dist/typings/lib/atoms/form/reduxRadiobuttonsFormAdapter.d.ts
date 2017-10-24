/// <reference types="react" />
import * as React from "react";
import { RadiobuttonsProperties } from "../..";
export declare type ReduxRadiobuttonsFormAdapterProperties = {
    input?: Partial<RadiobuttonsProperties>;
    validate: any;
} & Partial<RadiobuttonsProperties>;
/**
 * React Component ReduxFormAdapter
 */
export default class ReduxRadiobuttonsFormAdapter extends React.Component<ReduxRadiobuttonsFormAdapterProperties, {}> {
    render(): any;
    private renderAdaptedChild();
}
