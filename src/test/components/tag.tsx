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
                <A.TagList
                    name="taglist"
                    value={["test", "toast"]}
                    description="Fill in your ingrediënts"
                    normalize={(v) => v.toUpperCase()} />
                <div>
                    <A.Tag label="A simple tag" />
                </div>
                <div>
                    <A.Tag label="A simple tag with icon" icon="check" />
                </div>
                <div>
                    <A.Tag label="A simple tag with icon" icon="check" level={A.Levels.Success} />
                </div>
                <div>
                    <A.Tag label="A simple tag with delete" onDelete={() => this.onDelete("tag")} />
                </div>
            </StyleSection >
        );
    }

    private onDelete(key: string | number) {
        // tslint:disable-next-line:no-console
        console.log(`Will delete tag ${key}`);
    }
}
