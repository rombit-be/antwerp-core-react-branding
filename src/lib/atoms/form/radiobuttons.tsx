import * as classNames from "classnames";
import * as React from "react";

import { InputProperties } from "./inputProperties";
import { Label } from "./label";

export type RadiobuttonOption = { label: string | JSX.Element, name: string, disabled?: boolean };
export type RadiobuttonProperties = { options: RadiobuttonOption[] } & InputProperties<string>;

type Properties = RadiobuttonProperties;

/**
 * Atoms: Radiobutton group element
 */
export class Radiobuttons extends React.Component<Properties, {}> {

    public render(): any {
        return (
            <div className={this.className()}>
                <Label {...this.props} />
                {this.renderCheckBoxes()}
                {this.renderDescription()}
            </div>
        );
    }

    private renderCheckBoxes(): JSX.Element[] {
        return this.props.options
            .map((x, i) => (
                <div className="a-input__checkbox" key={this.id(i)}>
                    <input
                        checked={this.isChecked(i)}
                        disabled={x.disabled}
                        id={this.id(i)}
                        name={this.props.name}
                        type="radio"
                    />
                    <Label for={this.id(i)} label={x.label} />
                </div >
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

    private isChecked(i: number): boolean {
        return this.props.options[i].name === this.props.value;
    }

    private id(i: number): string {
        return `${this.props.required ? "required-" : ""}-checkbox-${this.props.name}-${i}`;
    }
}
