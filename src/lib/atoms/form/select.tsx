import * as classNames from "classnames";
import * as React from "react";

import Icon from "../../utilities/icon";
import { FormLabel } from "./formlabel";
import { inputElementId } from "./id";
import { FieldMetaProperties, InputProperties } from "./inputProperties";

export type SelectOption = { label: string | JSX.Element, value: string, disabled?: boolean };
export type SelectProperties = { options: SelectOption[] } & InputProperties<string>;
export type SelectState = { value: string };

/**
 * Atoms: Radiobutton group element
 */
export class Select extends React.Component<SelectProperties, SelectState> {

    public constructor(props: SelectProperties) {
        super(props);
        this.state = { value: props.value || "" };
    }

    public render(): any {
        // Clean the select props
        const props: any = { ...this.props };

        delete props.options;
        delete props.errorComponent;

        return (
            <div className={this.className()}>
                <FormLabel {...this.props} />
                <div className="a-input__wrapper">
                    <select id={this.id()}
                        {...props}
                        value={this.state.value}
                        onChange={(e) => this.onChange(e)}
                    >
                        {this.renderOptions()}
                    </select>
                    <Icon name="angle-down" span />
                </div>
                {this.renderDescription()}
            </div>
        );
    }

    private renderOptions(): JSX.Element[] {
        const options = this.props.options
            .map((x, i) => (
                <option
                    disabled={x.disabled}
                    id={this.optionId(i)}
                    key={i}
                    value={x.value}
                >
                    {x.label}
                </option>
            ));
        return [<option key={-1}></option>, ...options];
    }

    private renderDescription(): JSX.Element {
        if (this.isError()) {
            if (this.props.errorComponent) {
                let component: JSX.Element;
                if (typeof (this.props.errorComponent) === "function") {
                    component = this.props.errorComponent(this.props.meta);
                } else {
                    component = this.props.errorComponent;
                }
                return (
                    <small className="has-error">
                        {component}
                    </small>
                );
            } else {
                return (
                    <small className="has-error">
                        {this.props.meta.error}
                    </small>
                );
            }
        }

        // Return default description
        return (
            <small>
                {this.props.description || " "}
            </small>
        );
    }

    private onChange(e: React.SyntheticEvent<HTMLSelectElement>) {
        const value = e.currentTarget.value;
        this.setState({ value });

        if (this.props.onChange) {
            this.props.onChange(e as any);
        }
    }

    private className(): string {
        return classNames(
            "a-input" + (this.props.inline ? "--inline" : ""),
            "has-icon-right",
            { "is-required": this.props.required },
        );
    }

    private optionId(i: number): string {
        return `${this.props.required ? "required-" : ""}-checkbox-${this.props.name}-${i}`;
    }

    private isError(): boolean {
        const meta: FieldMetaProperties = this.props.meta || {};
        return meta.touched && (meta.error ? true : false);
    }

    private id(): string {
        return inputElementId(this.props as any);
    }
}
