import * as React from "react";

import * as A from "../../lib";
import StyleSection from "../common/styleSection";

/**
 * React Component name
 */
export default class UploadComponent extends React.Component<{}, { files: File[] }> {

    private sectionProps: any = { title: "Upload" };

    public constructor(props: any) {
        super(props);
        this.state = { files: [] };
    }

    public render(): any {
        return (
            <StyleSection {...this.sectionProps}>
                {/* tslint:disable-next-line:no-console */}
                <A.Upload
                    description="A small description"
                    meta={{ touched: true, error: "verplicht" } as any}
                    accept=".jpg, .jpeg"
                    name="fileupload"
                    onChange={this.onChange}
                    uploadedFiles={this.state.files}
                />
            </StyleSection >
        );
    }

    private onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        // tslint:disable-next-line:no-console
        console.log(e);
        const files = this.state.files;
        if (e && e.currentTarget) {
            files.push(e.currentTarget.files.item(0));
            this.setState({
                files,
            });
        }
    }
}
