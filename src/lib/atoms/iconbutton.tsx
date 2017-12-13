import * as React from "react";

import * as classNames from "classnames";

import { Location } from "../common/locations";
import { Icon } from "../utilities/icon";
import { Button, ButtonProperties } from "./button";

export type IconButtonProperties = { location?: Location, icon: string } & ButtonProperties;

/**
 * React Component IconButton
 */
export class IconButton extends React.Component<IconButtonProperties, {}> {

    public render(): any {
        return (
            <Button {...this.getButtonProperties() }>
                <Icon name={this.props.icon} />
                {this.props.children || this.props.text}
            </Button>
        );
    }

    public getButtonProperties(): ButtonProperties {
        // Clone the props and remove some props
        const props = { ... this.props };
        delete props.location;
        delete props.icon;

        props.className = this.getClassName();

        return props as ButtonProperties;
    }

    public getClassName(): string {
        return classNames(
            this.props.className,
            this.props.location ? `has-icon-${this.props.location}` :
                this.hasText() ? `has-icon-${Location.Left}` : "has-icon",
        );
    }

    private hasText(): boolean {
        return this.props.children || this.props.text ? true : false;
    }
}
