/// <reference types="react" />
import * as React from "react";
import { InputProperties, TypedInputProperties } from "./inputProperties";
export declare type ReduxFormAdapterProperties = {
    input?: Partial<InputProperties<any>>;
} & Partial<TypedInputProperties>;
/**
 * React Component ReduxFormAdapter
 */
export default class ReduxFormAdapter extends React.Component<ReduxFormAdapterProperties, {}> {
    render(): any;
    private renderAdaptedChild();
}
