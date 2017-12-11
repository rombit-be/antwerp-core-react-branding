import * as React from "react";
import * as A from "../../lib";
import StyleSection from "../common/styleSection";
import loremIpsum from "../util/loremIpsum";
import mapEnum from "../util/mapEnum";

/**
 * React Component name
 */
export default class SpacingComponents extends React.Component<{}, {}> {

    private sectionProps: any = { title: "Text components" };

    public render(): any {
        return (
            <StyleSection {...this.sectionProps}>
                {this.renderTypes()}
            </StyleSection>
        );
    }

    private renderTypes(): JSX.Element[] {
        return mapEnum(A.ParagraphStyle)
            .map((x, i) => (
                <div key={i}>
                    <pre>class: .{x}</pre>
                    <A.Paragraph type={x}>
                        {loremIpsum(4, "s")}
                    </A.Paragraph>
                </div>
            ));
    }
}
