import "./input.scss";

import * as React from "react";

import * as classNames from "classnames";

import { Location } from "../../common/locations";
import { Icon } from "../../utilities/icon";
import Description from "./description";
import { FormLabel } from "./formlabel";
import { inputElementId } from "./id";
import { FieldMetaProperties, InputTypes, TypedInputProperties } from "./inputProperties";

/**
 * Atoms: Base Input element
 */
export class Input extends React.Component<TypedInputProperties, {}> {

    private element: HTMLInputElement | HTMLTextAreaElement;

    public render(): any {
        return (
            <div className={this.className()}>
                <FormLabel {...this.props} />
                <div className="a-input__wrapper">
                    {this.renderAddon(Location.Left)}
                    {this.renderIcon(Location.Left)}
                    {this.renderInput()}
                    {this.renderIcon(Location.Right)}
                    {this.renderAddon(Location.Right)}
                </div>
                <Description {...this.props} />
            </div>
        );
    }

    private renderInput(): JSX.Element {
        const props = { ...this.props };

        delete props.errorComponent;
        delete props.iconLocation;
        delete props.meta;
        delete props.onIconClick;

        if (this.props.type === InputTypes.TextArea) {

            return (<textarea
                id={this.id()}
                {...props as any}
                ref={(e) => this.element = e}
            />);
        }
        return (
            <input
                id={this.id()}
                ref={(e) => this.element = e}
                {...props}
            />);
    }

    private renderAddon(location: Location): JSX.Element {
        if (this.props.addon && this.props.addonLocation === location) {
            return (<div className="a-input__addon">{this.props.addon}</div>);
        }
    }

    private renderIcon(location: Location): JSX.Element {
        if (this.props.icon && this.props.iconLocation === location) {
            return (<Icon
                className={this.props.onIconClick ? "is-clickable" : ""}
                name={this.props.icon}
                onClick={(e) => this.props.onIconClick(e)}
                span
            />);
        }
    }

    private className(): string {
        const meta: FieldMetaProperties = this.props.meta || {};
        return classNames(
            "a-input" + (this.props.inline ? "--inline" : ""),
            { "is-required": this.props.required },
            this.props.iconLocation ? `has-icon-${this.props.iconLocation}` : "",
            { "has-success": meta.touched && meta.valid },
            { "has-error": this.isError() },
            { "has-addon": this.props.addon ? true : false },
        );
    }

    private isError(): boolean {
        const meta: FieldMetaProperties = this.props.meta || {};
        return meta.touched && (meta.error ? true : false);
    }

    private id(): string {
        return inputElementId(this.props);
    }
}
