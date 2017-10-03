import * as React from "react";

export type CopyrightProperties = {
    name: string,
};

/**
 * Atoms: copyright component
 */
export class Copyright extends React.Component<CopyrightProperties, {}> {

    public render(): any {
        return (
            <div className="a-copyright">
                <div className="a-copyright__sign">
                    <span className="fa fa-copyright"></span>{(new Date()).getFullYear()}
                </div>
                <span className="a-copyright__label">{this.props.name}</span>
            </div>
        );
    }
}
