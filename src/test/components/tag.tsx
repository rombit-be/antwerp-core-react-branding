import * as React from "react";
import * as A from "../../lib";
import StyleSection from "../common/styleSection";

/**
 * React Component name
 */
export default class TagComponents extends React.Component<{}, {}> {

    private sectionProps: any = { title: "Tag components" };

    public render(): any {
        return (
            <StyleSection {...this.sectionProps}>
                <p>
                    <A.Tag label="A simple tag" key={"1"} name="tag" />
                </p>
                <p>
                    <A.Tag label="A simple tag with icon" key={"1"} name="tag" icon="check" />
                </p>
                <p>
                    <A.Tag label="A simple tag with icon" key={"1"} name="tag" icon="check" level={A.Levels.Success} />
                </p>
                <p>
                    <A.Tag label="A simple tag with delete" key={"1"} name="tag" onDelete={this.onDelete} />
                </p>
            </StyleSection >
        );
    }

    private onDelete(key: string | number) {
        // tslint:disable-next-line:no-console
        console.log(`Will delete tag ${key}`);
    }
}
