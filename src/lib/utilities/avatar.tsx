import * as classNames from "classnames";
import * as React from "react";

import { Sizes } from "../common/sizes";

export type AvatarProperties = { src: string, size?: Sizes, name?: string };

/**
 * Utilities: Avatar component
 */
export default class Avatar extends React.Component<AvatarProperties, {}> {

    public render(): any {
        const className: string = classNames(
            "a-avatar",
            this.props.size && this.props.size !== Sizes.Default ? `a-avatar--${this.props.size}` : "",
        );

        return (
            <div className={className}>
                <img src={this.props.src} alt={this.props.name || ""} />
            </div>
        );
    }
}
