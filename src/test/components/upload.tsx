import * as React from "react";

import * as A from "../../lib";
import StyleSection from "../common/styleSection";

/**
 * React Component name
 */
export default class UploadComponent extends React.Component<{}, {}> {

    private sectionProps: any = { title: "Upload" };

    public render(): any {
        return (
            <StyleSection {...this.sectionProps}>
                {/* tslint:disable-next-line:no-console */}
                <A.Upload
                    description="A small description"
                    name="fileupload"
                />
            </StyleSection >
        );
    }

    // private debug(e: any) {
    //     // tslint:disable-next-line:no-console
    //     console.log(e);
    // }
}
