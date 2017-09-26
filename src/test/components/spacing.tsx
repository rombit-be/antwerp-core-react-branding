import * as React from "react";
import * as A from "../../lib";
import StyleSection from "../common/styleSection";
import loremIpsum from "../util/loremIpsum";
import mapEnum from "../util/mapEnum";

/**
 * React Component name
 */
export default class SpacingComponents extends React.Component<{}, {}> {

    private sectionProps: any = { title: "Spacing components" };

    public render(): any {
        return (
            <StyleSection {...this.sectionProps}>
                {this.renderTypes()}
            </StyleSection >
        );
    }

    private renderTypes(): JSX.Element[] {
        return mapEnum(A.SpacingStyle)
            .map((x, i) => (
                <div
                    key={i}
                    style={{ backgroundColor: "rgba(255, 0, 0, 0.3)", border: "1px solid red", marginTop: "10px" }}
                >
                    <A.Spacing type={x} style={{ backgroundColor: "white" }}>
                        <pre>class: .{x}</pre>
                        <p>
                            {loremIpsum(2, "s")}
                        </p>
                    </A.Spacing>
                </div>
            ));
    }
}
