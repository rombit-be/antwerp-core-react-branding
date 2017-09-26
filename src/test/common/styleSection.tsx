import * as React from "react";
import "./styleSection.scss";

// tslint:disable-next-line:interface-over-type-literal
type Properties = { title: string, example?: string };

/**
 * React Component StyleSection
 */
export default class StyleSection extends React.Component<Properties, {}> {

    public render(): any {
        return (
            <section className="stylesection">
                <h2 ref={this.anchor()}>{this.props.title}</h2>
                {this.renderExample()}
                <div className="stylesection-body">
                    {this.props.children}
                </div>
            </section >
        );
    }

    public anchor(): string {
        return this.props.title.replace(/ /g, "_").toLowerCase();
    }

    private renderExample(): JSX.Element {
        if (this.props.example) {
            return (
                <div className="demo-example">
                    <p>Example usage: </p>
                    <pre>
                        import * as A from "a-core-branding";<br /><br />
                        {this.props.example}
                    </pre>
                </div>
            );
        }
        return null;
    }
}
