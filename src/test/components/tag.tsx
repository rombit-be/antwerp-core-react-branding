import * as React from "react";

import * as A from "../../lib";
import StyleSection from "../common/styleSection";

/**
 * React Component name
 */
export default class TagComponents extends React.Component<{}, { value: string[] }> {

    private sectionProps: any = { title: "Tag components" };

    public constructor(props: {}) {
        super(props);
        this.state = { value: ["test", "toast"] };
    }

    public render(): any {
        return (
            <StyleSection {...this.sectionProps}>
                <A.TagList
                    description="Fill in your ingrediënts"
                    name="taglist"
                    normalize={(v) => v.toUpperCase()}
                    onChange={(v) => this.onChange(v as any)}
                    value={this.state.value}
                />
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

    private onChange(value: string[]): void {
        this.setState({ value });
    }

    private onDelete(key: string | number) {
        // tslint:disable-next-line:no-console
        console.log(`Will delete tag ${key}`);
    }
}
