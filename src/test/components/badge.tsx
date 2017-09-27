import * as React from "react";

import * as A from "../../lib";
import StyleSection from "../common/styleSection";
import lookupEnumValue from "../util/lookupEnumValue";
import mapEnum from "../util/mapEnum";

/**
 * React Component name
 */
export default class BadgeComponents extends React.Component<{}, {}> {

    private sectionProps: any = {
        example: `<A.Badge type={A.Levels.Success} value={10} />`,
        title: "Badges",
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
                    <A.Badge level={x} value={((1 + i) * 10)} />
                </div>
            ));
    }
}
