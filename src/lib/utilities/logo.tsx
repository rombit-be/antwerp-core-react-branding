import * as React from "react";

import { StyleProperties } from "../common/properties";

declare function require(path: string): string;
// tslint:disable-next-line:no-var-requires
const logo: any = require("../../base/src/images/a-logo.svg");

export type LogoProperties = { absolute: boolean } & StyleProperties;

/**
 * Utilities: A-stad logo
 * TODO: SVG's are not visualized with webpack-dev-server
 */
export default class Logo extends React.Component<LogoProperties, {}> {

    public render(): any {
        const style: any = Object.assign(this.props.style || {}, this.getAbsoluteStyle());
        return (
            <div style={style}>
                <img src={logo} alt="Officiëel logo Stad Antwerpen" />
            </div>
        );
    }

    private getAbsoluteStyle(): any {
        if (this.props.absolute) {
            return ({
                left: 0,
                position: "absolute",
                top: 0,
                zIndex: 1000,
            });
        }
        return {};
    }
}
