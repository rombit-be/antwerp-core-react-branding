import "./footer.scss";

import * as React from "react";

export type FooterProperties = {
    label?: string;
    topButton?: boolean;
};

/**
 * Organisms: Footer item
 */
export class Footer extends React.Component<FooterProperties, {}> {

    public render(): any {
        return (
            <footer className="o-footer">
                {this.renderLabel()}
                {this.renderTopButton()}
            </footer>
        );
    }

    private renderLabel(): JSX.Element {
        if (this.props.label) {
            return (
                <span className="o-footer__label">{this.props.label}</span>
            );
        }
        return null;
    }

    private renderTopButton(): JSX.Element {
        if (this.props.topButton) {
            return (
                <a
                    className="o-footer__button a-button a-button--secondary has-icon"
                    onClick={() => this.onTopButtonClick()}
                >
                    <i className="fa fa-arrow-up"></i>
                </a>
            );
        }
    }

    private onTopButtonClick(): void {
        if (window) {
            window.scrollTo(0, 0);
        }
    }
}
