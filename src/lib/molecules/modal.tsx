import "./modal.scss";

import * as React from "react";

import * as classNames from "classnames";

import { Button, ButtonType } from "../atoms/button";
import { Overlay } from "../utilities/overlay";
import { Spacing, SpacingStyle } from "../utilities/spacing";

export type ModalProperties = {
    cancelText?: string;
    className?: string;
    disabled?: boolean;
    footer?: JSX.Element;
    okText?: string | JSX.Element;
    onCancel?: () => void;
    onOk: () => void;
    title: string | JSX.Element;
    visible?: boolean;
    noBodyClass?: boolean;
};

export type ModalState = { visible?: boolean };

/**
 * Molecule: Modal
 */
export class Modal extends React.Component<ModalProperties, ModalState> {

    public constructor(props: ModalProperties) {
        super(props);
        this.state = { visible: props.visible === undefined ? false : props.visible };
    }

    public render(): any {
        return (
            <Overlay
                className={classNames("m-modal__overlay", this.props.className)}
                dark
                noBodyClass={this.props.noBodyClass}
                visible={this.state.visible}
            >
                <div className="m-overlay__inner">
                    <div className="m-modal">
                        <div className="m-modal__header u-margin-bottom-xs">
                            {this.props.onCancel &&
                                (<Button
                                    className="m-modal__close has-icon"
                                    onClick={() => this.onCancel()}
                                    type={ButtonType.Transparent}
                                >
                                    <i className="fa fa-close"></i>
                                </Button>)
                            }
                            <h6>{this.props.title}</h6>
                        </div>
                        <Spacing type={SpacingStyle.MarginBottom}>
                            {this.props.children}
                        </Spacing>
                        {this.renderFooter()}
                    </div>
                </div>
            </Overlay>
        );
    }

    public componentWillReceiveProps(nextProps: ModalState): void {
        if (this.state.visible !== nextProps.visible) {
            this.setState({ visible: nextProps.visible });
            if (!nextProps.visible) {
                this.hideOverlay();
            }
        }
    }

    private renderFooter(): JSX.Element {
        if (this.props.footer) {
            return this.props.footer;
        } else {
            return (
                <div className="m-modal__footer">
                    {
                        this.props.onCancel ?
                            (<Button
                                className="m-alert__cancel"
                                onClick={() => this.onCancel()}
                            >
                                {this.props.cancelText || "Cancel"}
                            </Button>) : null
                    }
                    <Button
                        disabled={this.props.disabled}
                        onClick={this.onOk}
                        text={this.props.okText}
                    />
                </div>);
        }
    }

    private hideOverlay(): void {
        this.setState({ visible: false });
    }

    private onOk: () => void = () => {
        this.hideOverlay();
        if (this.props.onOk) {
            this.props.onOk();
        }
    }

    private onCancel: () => void = () => {
        this.hideOverlay();
        if (this.props.onCancel) {
            this.props.onCancel();
        }
    }
}
