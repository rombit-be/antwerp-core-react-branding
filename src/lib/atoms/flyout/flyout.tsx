import * as classNames from "classnames";
import * as React from "react";

import { Locations } from "../../common/locations";
import { Sizes } from "../../common/sizes";
import { FlyoutContent } from "./flyoutcontent";
import { FlyoutLabel } from "./flyoutlabel";

type Event = React.SyntheticEvent<HTMLElement>;
export type FlyoutPosition = { left?: number, right?: number, top?: number, bottom?: number };

export type FlyoutProperties = {
    content?: JSX.Element | JSX.Element[],
    label?: JSX.Element | JSX.Element[],
    location?: Locations;
    padding?: boolean;
    size?: Sizes;
    visible?: boolean;
};

export type FlyoutState = {
    position?: FlyoutPosition,
    visible?: boolean,
};

/**
 * Atoms: Flyout
 */
export class Flyout extends React.Component<FlyoutProperties, FlyoutState> {

    public constructor(props: FlyoutProperties) {
        super(props);
        this.state = {
            visible: this.props.visible,
        };
    }

    public render(): any {
        return (
            <div className={this.className()}>
                <FlyoutLabel onClick={this.toggleFlyout}>
                    {this.props.label}
                </FlyoutLabel>
                {
                    this.props.content &&
                    <FlyoutContent
                        padding={this.props.padding}
                        visible={this.state.visible}
                        position={this.state.position}
                    >
                        {this.props.content}
                    </FlyoutContent>
                }
            </div>
        );
    }

    public componentWillReceiveProps(next: FlyoutProperties): void {
        if (next.visible !== undefined) {
            this.setState({ visible: next.visible });
        }
    }

    private className(): string {
        return classNames(
            "m-flyout",
            { "m-flyout--full": this.props.size === Sizes.Default },
            { "m-flyout--lg": this.props.size === Sizes.Large },
            { "m-flyout--md": this.props.size === Sizes.Medium },
            { "m-flyout--sm": this.props.size === Sizes.Small },
            this.props.location ? `m-flyout--${this.props.location}` : "",
            { "is-open": this.state.visible },
        );
    }

    private toggleFlyout: (e: Event) => void = (e: Event) => {
        if (this.state.visible) {
            this.hideFlyout();
        } else {
            this.showFlyout(e);
        }
    }

    private showFlyout: (e: Event) => void = (e: Event) => {
        this.setState({
            position: this.calculatePosition(e),
            visible: true,
        });
    }

    private hideFlyout: () => void = () => {
        this.setState({
            visible: false,
        });
    }

    private calculatePosition(e: Event): FlyoutPosition {
        const element = this.findElement(e.target as HTMLElement);
        const top = element.offsetTop + element.offsetHeight;

        // Set the top
        const position: FlyoutPosition = { top };

        // Set the left or right depending on the position of the label in the client body
        const isRight = (document.body.clientWidth / 2) < element.parentElement.offsetLeft;
        if (isRight) {
            position.right = 0;
        } else {
            position.left = 0;
        }

        // tslint:disable-next-line:no-console
        return position;
    }

    private findElement(element: HTMLElement): HTMLElement {
        if (element.className === FlyoutLabel.ClassName) {
            return element;
        }
        return this.findElement(element.parentElement);
    }
}
