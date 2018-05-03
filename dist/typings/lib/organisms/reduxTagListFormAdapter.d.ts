/// <reference types="react" />
import * as React from "react";
import { TagListProperties } from "../index";
export declare type ReduxTagListFormAdapterProperties = {
    input?: Partial<TagListProperties>;
} & Partial<TagListProperties>;
/**
 * React Component ReduxTagListFormAdapter
 */
export default class ReduxTagListFormAdapter extends React.Component<ReduxTagListFormAdapterProperties, {}> {
    render(): any;
    private renderAdaptedChild();
}
