import "./flyoutlabel.scss";

import * as React from "react";

export type FlyoutLabelProperties = {
    children?: any;
    onClick: (e: React.SyntheticEvent<HTMLElement>) => void,
};

/**
 * Atoms: FlyoutLabel
 */
export class FlyoutLabel extends React.Component<FlyoutLabelProperties, {}> {

    public static ClassName = "m-flyout__label";

    public render(): any {
        return (
            <div className={FlyoutLabel.ClassName} onClick={this.props.onClick}>
                {this.props.children}
            </div>
        );
    }
}
