import * as React from "react";

import * as A from "../../lib";
import StyleSection from "../common/styleSection";
import lookupEnumValue from "../util/lookupEnumValue";
import loremIpsum from "../util/loremIpsum";
import mapEnum from "../util/mapEnum";

/**
 * React Component name
 */
export default class LabelComponents extends React.Component<{}, {}> {

    private sectionProps: any = {
        example: `<A.Label type={A.Levels.Success} value={10} />`,
        title: "Labels",
    };

    public render(): any {
        return (
            <StyleSection {...this.sectionProps}>
                {this.renderTypes()}
            </StyleSection >
        );
    }

    private renderTypes(): JSX.Element[] {
        return mapEnum(A.Levels)
            .map((x, i) => (
                <div key={i}>
                    <pre>type: {lookupEnumValue(A.Levels, x)}</pre>
                    <A.Label level={x} value={loremIpsum(2, "w")} />
                </div>
            ));
    }
}
