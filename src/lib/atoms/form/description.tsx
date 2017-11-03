import * as classNames from "classnames";
import * as React from "react";

import { FieldMetaProperties, TypedInputProperties } from "./inputProperties";

export type DescriptionProperties = { descriptionClassName?: string } & TypedInputProperties;

/**
 * Atoms: Util Description element
 */
export default class Description extends React.Component<DescriptionProperties, {}> {

    public render(): JSX.Element {
        if (this.isError()) {
            if (this.props.errorComponent) {
                let component: JSX.Element;
                if (typeof (this.props.errorComponent) === "function") {
                    component = this.props.errorComponent(this.props.meta);
                } else {
                    component = this.props.errorComponent;
                }
                return (
                    <small className={this.className(true)}>
                        {component}
                    </small>
                );
            } else {
                return (
                    <small className={this.className(true)}>
                        {this.props.meta.error}
                    </small>
                );
            }
        }

        // Return default description
        return (
            <small className={this.className(false)}>
                {this.props.description || " "}
            </small>
        );
    }

    private className(isError: boolean): string {
        return classNames(
            this.props.descriptionClassName,
            { "has-error": isError },
        );
    }

    private isError(): boolean {
        const meta: FieldMetaProperties = this.props.meta || {};
        return meta.touched && (meta.error ? true : false);
    }
}
