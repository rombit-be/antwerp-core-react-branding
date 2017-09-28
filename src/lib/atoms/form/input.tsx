import * as classNames from "classnames";
import * as React from "react";

import { Location } from "../../common/locations";
import Icon from "../../utilities/icon";
import { inputElementId } from "./id";
import { FieldMetaProperties, InputTypes, TypedInputProperties } from "./inputProperties";
import { Label } from "./label";

type Properties = TypedInputProperties;

/**
 * Atoms: Base Input element
 */
export class Input extends React.Component<Properties, {}> {

    public render(): any {
        return (
            <div className={this.className()}>
                <Label {...this.props} />
                <div className="a-input__wrapper">
                    {this.renderAddon(Location.Left)}
                    {this.renderIcon(Location.Left)}
                    {this.renderInput()}
                    {this.renderIcon(Location.Right)}
                    {this.renderAddon(Location.Right)}
                </div>
                {this.renderDescription()}
            </div>
        );
    }

    private renderInput(): JSX.Element {
        if (this.props.type === InputTypes.TextArea) {
            const props = { ...this.props };
            delete props.value;
            return (
                <textarea id={this.id()} {...props as any}>
                    {this.props.value}
                </textarea>
            );
        }
        return (<input id={this.id()} {...this.props} />);
    }

    private renderAddon(location: Location): JSX.Element {
        if (this.props.addon && this.props.addonLocation === location) {
            return (<div className="a-input__addon">{this.props.addon}</div>);
        }
    }

    private renderIcon(location: Location): JSX.Element {
        if (this.props.icon && this.props.iconLocation === location) {
            return (<Icon name={this.props.icon} span />);
        }
    }

    private renderDescription(): JSX.Element {
        if (this.props.description) {
            return (
                <small>
                    {this.props.description}
                </small>
            );
        }
        return null;
    }

    private className(): string {
        const meta: FieldMetaProperties = this.props.meta || {};
        return classNames(
            "a-input" + (this.props.inline ? "--inline" : ""),
            { "is-required": this.props.required },
            this.props.iconLocation ? `has-icon-${this.props.iconLocation}` : "",
            { "has-success": !meta.pristine && meta.valid },
            { "has-error": meta.error },
            { "has-addon": this.props.addon ? true : false },
        );
    }

    private id(): string {
        return inputElementId(this.props);
    }
}
