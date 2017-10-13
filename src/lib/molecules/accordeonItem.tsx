import * as classNames from "classnames";
import * as React from "react";

import { Spacing, SpacingStyle } from "../utilities/spacing";

export type AccordeonItemProperties = {
    className?: string;
    collapsed?: boolean,
    header: string,
    index?: number,
    onClick?: (index: number) => void,
    style?: any;
};

/**
 * Molecules: Accordeon item
 */
export class AccordeonItem extends React.Component<AccordeonItemProperties, {}> {

    public render(): any {
        return (
            <div className={this.className()} style={this.props.style}>
                <div className="m-accordion__header" onClick={() => this.onClick()}>{this.props.header}</div>
                <div className="m-accordion__content">
                    <Spacing type={SpacingStyle.Margin}>
                        {this.props.children}
                    </Spacing>
                </div>
            </div>
        );
    }

    private className(): string {
        return classNames(
            { "m-accordion__tab is-open": !this.props.collapsed },
            { "m-accordion__tab": this.props.collapsed },
            this.props.className,
        );
    }

    private onClick(): void {
        if (this.props.index !== undefined && this.props.onClick) {
            this.props.onClick(this.props.index);
        }
    }
}
