import "./overlay.scss";

import * as React from "react";

import * as classNames from "classnames";

export type OverlayProperties = {
    className?: string,
    dark?: boolean,
    light?: boolean,
    visible?: boolean,
    zIndex?: number,
    noBodyClass?: boolean;
};

/**
 * React Component Overlay
 */
export class Overlay extends React.Component<OverlayProperties, {}> {

    public render(): any {
        this.handleBodyClass();
        if (this.props.visible) {
            return (
                <div className={this.className()} style={{ zIndex: this.props.zIndex }}>
                    {this.props.children}
                </div>
            );
        }
        return null;
    }

    private handleBodyClass() {
        if (this.props.noBodyClass) { return; }

        if (window && window.document && window.document.body) {
            const hasOverflow = window.innerHeight < window.document.body.clientHeight;
            const className = classNames(hasOverflow ? "a-overlay--overflow" : "a-overlay--open");

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
            this.props.className,
        );
    }
}
