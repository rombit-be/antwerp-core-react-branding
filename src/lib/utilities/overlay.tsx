import "./overlay.scss";

import * as classNames from "classnames";
import * as React from "react";

export type OverlayProperties = { visible?: boolean, dark?: boolean, light?: boolean };

/**
 * React Component Overlay
 */
export class Overlay extends React.Component<OverlayProperties, {}> {

    public render(): any {
        this.handleBodyClass();
        if (this.props.visible) {
            return (
                <div className={this.className()}>
                    {this.props.children}
                </div>
            );
        }
        return null;
    }

    private handleBodyClass() {
        if (window && window.document && window.document.body) {
            const hasOverflow = window.innerHeight < window.document.body.clientHeight;
            const className = classNames(hasOverflow ? "a-overlay--open--overflow" : "a-overlay--open");

            if (this.props.visible) {
                if (!window.document.body.classList.contains(className)) {
                    window.document.body.classList.add(className);
                }
            } else {
                window.document.body.classList.remove(className);
            }
        }
    }

    private className(): string {
        return classNames(
            "a-overlay",
            { "a-overlay--light": this.props.light },
            { "a-overlay--dark": this.props.dark || (!this.props.dark && !this.props.light) },
        );
    }
}
