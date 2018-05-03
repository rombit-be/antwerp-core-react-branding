/// <reference types="react" />
import * as React from "react";
import { UploadProperties } from "./upload";
export declare type ReduxUploadFormAdapterProperties = {
    input?: Partial<UploadProperties>;
} & Partial<UploadProperties>;
/**
 * React Component ReduxUploadFormAdapter
 */
export default class ReduxUploadFormAdapter extends React.Component<ReduxUploadFormAdapterProperties, {}> {
    render(): any;
    private renderAdaptedChild();
}
