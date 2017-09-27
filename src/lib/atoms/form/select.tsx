import * as classNames from "classnames";
import * as React from "react";

import { inputElementId } from "./id";
import { InputProperties } from "./inputProperties";
import { Label } from "./label";

export type SelectOption = { label: string | JSX.Element, value: string, disabled?: boolean };
export type SelectProperties = { options: SelectOption[] } & InputProperties<string>;

type Properties = SelectProperties;

/**
 * Atoms: Radiobutton group element
 */
export class Select extends React.Component<Properties, {}> {

    public render(): any {
        return (
            <div className={this.className()}>
                <Label {...this.props} />
                <select id={this.id()} {...this.props as any}>
                    {this.renderOptions()}
                </select>
                {this.renderDescription()}
            </div>
        );
    }

    private renderOptions(): JSX.Element[] {
        return this.props.options
            .map((x, i) => (
                <option
                    selected={this.isSelected(i)}
                    disabled={x.disabled}
                    id={this.optionId(i)}
                    value={x.value}
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
            "a-input" + this.props.inline ? "--inline" : "",
            { "is-required": this.props.required },
        );
    }

    private isSelected(i: number): boolean {
        return this.props.options[i].value === this.props.value;
    }

    private optionId(i: number): string {
        return `${this.props.required ? "required-" : ""}-checkbox-${this.props.name}-${i}`;
    }

    private id(): string {
        return inputElementId(this.props as any);
    }
}
