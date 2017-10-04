import * as React from "react";

import * as A from "../../lib";
import StyleSection from "../common/styleSection";

/**
 * React Component name
 */
export default class TabNavigationComponent extends React.Component<{}, {}> {

    private sectionProps: any = { title: "Tab navigation" };

    public render(): any {
        return (
            <StyleSection {...this.sectionProps}>
                <A.TabNavigation
                    items={this.getItems()}
                />
            </StyleSection >
        );
    }

    private getItems(): A.TabNavigationItem[] {
        return [
            { title: "First tab", icon: "lightbulb-o" },
            { title: "Second tab", badge: 42 },
            { title: "Third tab" },
        ];
    }
}
