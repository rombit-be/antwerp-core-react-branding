import * as React from "react";

import * as A from "../../lib";
import StyleSection from "../common/styleSection";

/**
 * React Component name
 */
export default class FlyoutComponents extends React.Component<{}, {}> {

    private sectionProps: any = {
        title: "Flyout",
    };

    public render(): any {
        return (
            <StyleSection {...this.sectionProps}>
                <A.AutoComplete
                    filterOnType
                    name="autocomplete"
                    options={this.getOptions()}
                />
                <A.Flyout
                    content={<p>This is a flyout with some rubbish content</p>}
                    label={<A.Button>Click to open flyout</A.Button>}
                    padding
                    size={A.Sizes.Large}
                />
                <div style={{ textAlign: "right" }}>
                    <A.Flyout
                        content={<p>This is a flyout with some rubbish content</p>}
                        label={<A.Button>Click to open flyout</A.Button>}
                        padding
                        size={A.Sizes.Large}
                    />
                </div>
            </StyleSection >
        );
    }

    private getOptions(): string[] {
        return [
            "Straat",
            "Boek",
            "Huis",
            "Brol",
            "Olie",
        ];
    }
}
