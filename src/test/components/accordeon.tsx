import * as React from "react";

import * as A from "../../lib";
import StyleSection from "../common/styleSection";
import loremIpsum from "../util/loremIpsum";

/**
 * React Component name
 */
export default class AccordeonComponents extends React.Component<{}, {}> {

    private sectionProps: any = { title: "Accordeon" };

    public render(): any {
        return (
            <StyleSection {...this.sectionProps}>
                <A.Accordeon>
                    {this.renderItems()}
                    <A.AccordeonItem header="Final">
                        <p>Final</p>
                    </A.AccordeonItem>
                </A.Accordeon>
            </StyleSection >
        );
    }

    private renderItems(): JSX.Element[] {
        return [0, 1, 2, 3].map((x) => (
            <A.AccordeonItem
                header={`Header ${x + 1}`}
                key={`accordeon-${x}`}
                className={`dummy-${x}`}
            >
                <p>{loremIpsum(5)}</p>
            </A.AccordeonItem>
        ));
    }
}
