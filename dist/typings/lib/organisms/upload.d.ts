/// <reference types="react" />
import * as React from "react";
import { InputProperties } from "../atoms/form/inputProperties";
export declare type UploadProperties = {
    busy?: boolean;
    deleteFile?: (file: string) => void;
    info?: string;
    multiple?: boolean;
    progress?: string;
    progressHideOnComplete?: boolean;
    progressValue?: string;
    uploadFile?: () => void;
    uploadedFiles?: string[];
} & InputProperties<string[] | string>;
export declare type UploadState = {
    files?: FileList;
};
/**
 * React Component Upload
 */
export declare class Upload extends React.Component<UploadProperties, UploadState> {
    constructor(props: UploadProperties);
    render(): any;
    private renderInfoMessage();
    private renderSelectedValue();
    private renderProgress();
    private renderDescription();
    private renderUploadedfiles();
    private onChange(e);
    private onDelete(file);
    private normalizeProgressValue();
    private isError();
    private fileListToArray(fileList);
}
