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
                    <A.AccordeonItem header="First">
                        <p>{loremIpsum(5)}</p>
                    </A.AccordeonItem>
                    <A.AccordeonItem header="Furthermore">
                        <p>{loremIpsum(6)}</p>
                    </A.AccordeonItem>
                    <A.AccordeonItem header="Finally">
                        <p>{loremIpsum(8)}</p>
                    </A.AccordeonItem>
                </A.Accordeon>
            </StyleSection >
        );
    }
}
