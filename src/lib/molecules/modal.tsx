import * as React from "react";

import * as classNames from "classnames";

import { Button, ButtonType } from "../atoms/button";
import { Overlay } from "../utilities/overlay";
import { Spacing, SpacingStyle } from "../utilities/spacing";

export type ModalProperties = {
    className?: string;
    title: string | JSX.Element;
    onCancel?: () => void;
    visible?: boolean;
    footer?: JSX.Element;
    okText?: string | JSX.Element;
    onOk: () => {};
};

export type ModalState = { visible?: boolean };

/**
 * Molecule: Modal
 */
export default class Modal extends React.Component<ModalProperties, ModalState> {

    public constructor(props: ModalProperties) {
        super(props);
        this.state = { visible: props.visible === undefined ? false : props.visible };
    }

    public render(): any {
        return (
            <Overlay dark visible={this.state.visible}>
                <div className={this.className()}>
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
                    <div className="m-modal__footer">
                        {this.renderFooter()}
                    </div>
                </div>
            </Overlay>
        );
    }

    public componentWillReceiveProps(nextProps: ModalState): void {
        this.setState({ visible: nextProps.visible });
        if (!nextProps.visible) {
            this.hideOverlay();
        }
    }

    private renderFooter(): JSX.Element {
        if (this.props.footer) {
            return this.props.footer;
        } else {
            return (<Button
                text={this.props.okText}
                onClick={this.onOk}
            />);
        }
    }

    private className(): string {
        return classNames(
            "m-modal",
            this.props.className,
        );
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
