import * as React from "react";
import * as A from "../../lib";
import StyleSection from "../common/styleSection";
import loremIpsum from "../util/loremIpsum";
import mapEnum from "../util/mapEnum";

/**
 * React Component name
 */
export default class BackgroundComponents extends React.Component<{}, {}> {

    private sectionProps: any = { title: "Utilities" };

    public render(): any {
        return (
            <StyleSection {...this.sectionProps}>
                {this.renderTypes()}
            </StyleSection >
        );
    }

    private renderTypes(): JSX.Element[] {
        return mapEnum(A.BackgroundStyle)
            .map((x, i) => (
                <A.Background key={i} type={x}>
                    <pre>class: .{x}</pre>
                    <p>
                        {loremIpsum(2, "s")}
                    </p>
                </A.Background>
            ));
    }
}
