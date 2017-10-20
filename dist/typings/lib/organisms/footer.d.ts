/// <reference types="react" />
import "./footer.scss";
import * as React from "react";
export declare type FooterProperties = {
    label?: string;
    topButton?: boolean;
};
/**
 * Organisms: Footer item
 */
export declare class Footer extends React.Component<FooterProperties, {}> {
    render(): any;
    private renderLabel();
    private renderTopButton();
    private onTopButtonClick();
}
