/// <reference types="react" />
import "./alert.scss";
import * as React from "react";
import { Levels } from "../common/levels";
export declare type AlertProperties = {
    cancelText?: string;
    level?: Levels;
    message: string;
    okText?: string;
    onCancel?: () => void;
    onOk?: () => void;
    title: string;
    visible?: boolean;
};
export declare type AlertState = {
    visible?: boolean;
};
/**
 * Molecule: Alert
 */
export declare class Alert extends React.Component<AlertProperties, AlertState> {
    constructor(props: AlertProperties);
    render(): any;
    componentWillReceiveProps(nextProps: AlertProperties): void;
    private className();
    private onOk();
    private onCancel();
    private hideOverlay();
}
