import * as React from "react";

import { Location } from "../common/locations";
import Icon from "../utilities/icon";
import { Button, ButtonProperties } from "./button";

export type IconButtonProperties = { location: Location, icon: string } & ButtonProperties;

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

        props.className = `has-icon-${this.props.location}`;

        return props as ButtonProperties;
    }
}
