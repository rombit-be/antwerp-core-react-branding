/// <reference types="react" />
import "./upload.scss";
import * as React from "react";
import { InputProperties } from "../atoms/form/inputProperties";
export declare type UploadProperties = {
    access?: string;
    busy?: boolean;
    deleteFile?: (file: File) => void;
    info?: string | JSX.Element;
    multiple?: boolean;
    progress?: string;
    progressHideOnComplete?: boolean;
    progressValue?: string;
    uploadFile?: () => void;
    uploadedFiles?: File[];
} & InputProperties<string[] | string>;
export declare type UploadState = {
    files?: FileList;
};
/**
 * React Component Upload
 */
export declare class Upload extends React.Component<UploadProperties, UploadState> {
    private inputRef;
    constructor(props: UploadProperties);
    render(): any;
    private renderClear();
    private renderInfoMessage();
    private renderSelectedValue();
    private renderProgress();
    private renderUploadedfiles();
    private onClear;
    private onChange;
    private onDelete;
    private normalizeProgressValue();
    private fileListToArray(fileList);
}
