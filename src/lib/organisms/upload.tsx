import "./upload.scss";

import * as React from "react";

import { ButtonType } from "../atoms/button";
import Description from "../atoms/form/description";
import { InputProperties } from "../atoms/form/inputProperties";
import { IconButton } from "../atoms/iconbutton";
import { Sizes } from "../common/sizes";

export type UploadProperties = {
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

export type UploadState = {
    files?: FileList;
};

/**
 * React Component Upload
 */
export class Upload extends React.Component<UploadProperties, UploadState> {

    public constructor(props: UploadProperties) {
        super(props);
        this.state = {};
    }

    public render(): any {
        const props = { ...this.props };

        delete props.busy;
        delete props.deleteFile;
        delete props.errorComponent;
        delete props.progress;
        delete props.progressHideOnComplete;
        delete props.progressValue;
        delete props.uploadFile;
        delete props.uploadedFiles;
        delete props.value;

        return (
            <div className="m-upload">
                <div className="m-upload__inner">
                    <div className="m-upload__dropzone">
                        <input
                            {...props}
                            className="m-upload__input"
                            onChange={(e) => this.onChange(e)}
                            type="file"
                        />
                        <div className="m-upload__content">
                            {this.renderProgress()}
                            {this.renderInfoMessage()}
                            {this.renderSelectedValue()}
                        </div>
                    </div>
                </div>
                <Description {...this.props as any} descriptionClassName="m-upload__description" />
                {this.renderUploadedfiles()}
            </div>
        );
    }

    // #region private render methods

    private renderInfoMessage(): JSX.Element {
        return (
            <p className="m-upload__message">
                {this.props.info || "Drag a file here or click to browse"}
            </p>
        );
    }

    private renderSelectedValue(): JSX.Element {
        if (this.state.files) {
            return (
                <p className="m-upload__uploads u-text-bold">
                    {
                        this.fileListToArray(this.state.files)
                            .map((x) => x.name)
                            .join(", ")
                    }
                </p>
            );
        }
        return null;
    }

    private renderProgress(): JSX.Element {
        if (this.props.busy && this.props.progress) {
            const value = this.normalizeProgressValue();
            if (value === 100 && this.props.progressHideOnComplete) {
                return null;
            } else {
                return (
                    <div className="m-upload__progress m-progress">
                        <div className="m-progress__inner">
                            <div
                                aria-valuemax="100"
                                aria-valuemin="0"
                                aria-valuenow={value}
                                className="m-progress__bar"
                                role="progressbar"
                                style={{ width: `${value}%` }}
                            />
                        </div>
                    </div>
                );
            }
        }
        return null;
    }

    private renderUploadedfiles(): JSX.Element {
        const uploadedFiles = this.props.uploadedFiles || [];
        if (Array.isArray(uploadedFiles)) {
            return (
                <ul className="m-upload__files">
                    {
                        uploadedFiles.map((x, i) => (
                            <li key={`uploaded-${i}`}>
                                <span className="fa fa-file-o"></span>
                                <span className="m-upload__filename">{x.name}</span>
                                {
                                    this.props.deleteFile &&
                                    <IconButton
                                        className="m-upload__delete"
                                        icon="close"
                                        onClick={() => this.onDelete(x)}
                                        size={Sizes.Small}
                                        type={ButtonType.Transparent}
                                    />
                                }
                            </li>
                        ))
                    }
                </ul>
            );
        }
        return null;
    }

    // #endregion

    // #region handlers

    private onChange(e: React.SyntheticEvent<HTMLInputElement>): void {
        // tslint:disable-next-line:no-console
        this.setState({
            files: e.currentTarget.files,
        });
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }

    private onDelete(file: File): void {
        if (this.props.deleteFile) {
            this.props.deleteFile(file);
        }
    }

    // #endregion

    // #region utilities

    private normalizeProgressValue(): number {
        const value = this.props.progressValue || 0;
        if (value < 0) {
            return 0;
        } else if (value > 100) {
            return 100;
        } else {
            return value as number;
        }
    }

    private fileListToArray(fileList: FileList): File[] {
        const files: File[] = [];
        for (let i = 0; i < fileList.length; i++) {
            files.push(fileList.item(i));
        }
        return files;
    }

    // #endregion
}
