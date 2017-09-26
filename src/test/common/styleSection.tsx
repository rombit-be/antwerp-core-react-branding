import * as React from "react";

// tslint:disable-next-line:interface-over-type-literal
type Properties = { title: string };

/**
 * React Component StyleSection
 */
export default class StyleSection extends React.Component<Properties, {}> {

    public render(): any {
        return (
            <section className="stylesection">
                <h2 ref={this.anchor()}>{this.props.title}</h2>
                <div className="stylesection-body">
                    {this.props.children}
                </div>
            </section >
        );
    }

    public anchor(): string {
        return this.props.title.replace(/ /g, "_").toLowerCase();
    }
}
