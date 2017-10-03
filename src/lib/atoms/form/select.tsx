import * as classNames from "classnames";
import * as React from "react";

import Icon from "../../utilities/icon";
import { FormLabel } from "./formlabel";
import { inputElementId } from "./id";
import { InputProperties } from "./inputProperties";

export type SelectOption = { label: string | JSX.Element, value: string, disabled?: boolean };
export type SelectProperties = { options: SelectOption[] } & InputProperties<string>;

/**
 * Atoms: Radiobutton group element
 */
export class Select extends React.Component<SelectProperties, {}> {

    public render(): any {
        // Clean the select props
        const props: any = { ...this.props };
        delete props.options;
        delete props.value;

        return (
            <div className={this.className()}>
                <FormLabel {...this.props} />
                <div className="a-input__wrapper">
                    <select id={this.id()} {...props}>
                        {this.renderOptions()}
                    </select>
                    <Icon name="angle-down" span />
                </div>
                {this.renderDescription()}
            </div>
        );
    }

    private renderOptions(): JSX.Element[] {
        return this.props.options
            .map((x, i) => (
                <option
                    disabled={x.disabled}
                    id={this.optionId(i)}
                    key={i}
                >
                    {x.label}
                </option>
            ));
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
        return classNames(
            "a-input" + (this.props.inline ? "--inline" : ""),
            "has-icon-right",
            { "is-required": this.props.required },
        );
    }

    private optionId(i: number): string {
        return `${this.props.required ? "required-" : ""}-checkbox-${this.props.name}-${i}`;
    }

    private id(): string {
        return inputElementId(this.props as any);
    }
}
