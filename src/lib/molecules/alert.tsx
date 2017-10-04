import "./alert.scss";

import * as classNames from "classnames";
import * as React from "react";

import { Button, ButtonType } from "../atoms/button";
import { Levels } from "../common/levels";
import { Sizes } from "../common/sizes";
import { Overlay } from "../utilities/overlay";

export type AlertProperties = {
    level?: Levels,
    message: string,
    title: string,
    visible?: boolean,
    cancelText?: string;
    okText?: string;
    onOk?: () => void;
    onCancel?: () => void;
};

export type AlertState = { visible?: boolean };

/**
 * Molecule: Alert
 */
export class Alert extends React.Component<AlertProperties, AlertState> {

    public constructor(props: AlertProperties) {
        super(props);
        this.state = { visible: props.visible === undefined ? false : props.visible };
    }

    public render(): any {
        return (
            <Overlay dark visible={this.state.visible}>
                <div className={this.className()}>
                    <Button
                        className="m-alert__close has-icon"
                        level={this.props.level}
                        onClick={() => this.onCancel()}
                        type={ButtonType.Transparent}
                    >
                        <i className="fa fa-close"></i>
                    </Button>
                    <h5 className="u-margin-bottom-xs">{this.props.title}</h5>
                    <p className="u-margin-bottom">{this.props.message}</p>
                    <div className="m-alert__actions">
                        <Button
                            className="m-alert__cancel"
                            level={this.props.level}
                            onClick={() => this.onCancel()}
                            size={Sizes.Small}
                            type={ButtonType.Outline}
                        >
                            {this.props.cancelText || "Cancel"}
                        </Button>
                        <Button
                            className={"m-alert__ok"}
                            level={this.props.level}
                            onClick={() => this.onOk()}
                            size={Sizes.Small}
                        >
                            {this.props.okText || "OK"}
                        </Button>
                    </div>
                </div>
            </Overlay>
        );
    }

    public componentWillReceiveProps(nextProps: AlertProperties): void {
        this.setState({ visible: nextProps.visible });
    }

    private className(): string {
        return classNames(
            "m-alert",
            this.props.level ? `m-alert--${this.props.level}` : "",
        );
    }

    private onOk(): void {
        this.hideOverlay();
        if (this.props.onOk) {
            this.props.onOk();
        }
    }

    private onCancel(): void {
        this.hideOverlay();
        if (this.props.onOk) {
            this.props.onCancel();
        }
    }

    private hideOverlay(): void {
        this.setState({ visible: false });
    }
}
