/// <reference types="react" />
import "./modal.scss";
import * as React from "react";
export declare type ModalProperties = {
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
export declare type ModalState = {
    visible?: boolean;
};
/**
 * Molecule: Modal
 */
export declare class Modal extends React.Component<ModalProperties, ModalState> {
    constructor(props: ModalProperties);
    render(): any;
    componentWillReceiveProps(nextProps: ModalState): void;
    private renderFooter();
    private hideOverlay();
    private onOk;
    private onCancel;
}
