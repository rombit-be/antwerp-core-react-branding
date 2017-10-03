import * as classNames from "classnames";
import * as React from "react";

import { FormLabel } from "./formlabel";
import { InputProperties } from "./inputProperties";

export type CheckboxOption = { label: string | JSX.Element, value: string, disabled?: boolean };
export type CheckboxesProperties = { options: CheckboxOption[] } & InputProperties<string[]>;

export type CheckboxesState = { values: string[], isDirty: boolean };

/**
 * Atoms: Checkboxgroup element
 */
export class Checkboxes extends React.Component<CheckboxesProperties, CheckboxesState> {

    public constructor(props: CheckboxesProperties) {
        super(props);
        this.state = {
            isDirty: false,
            values: props.value || [],
        };
    }

    public render(): any {
        return (
            <div className={this.className()}>
                <FormLabel {...this.props} />
                {this.renderCheckBoxes()}
                {this.renderDescription()}
            </div>
        );
    }

    public componentWillReceiveProps(nextProps: CheckboxesProperties): void {
        if (this.state.isDirty) {
            if (this.state.values.length > 0) {
                const remove: string[] = [];
                this.state.values.forEach((x) => {
                    // The value doesn't exist anymore, remove it
                    if (nextProps.value.indexOf(x) === -1) {
                        // Mark to remove
                        remove.push(x);
                    }
                });

                // Remove all values marked to be removed
                if (remove.length > 0) {
                    const values: string[] = this.state.values.filter((x) => remove.indexOf(x) === -1);
                    this.setState({ values });
                }
            }
        } else {
            this.setState({ values: nextProps.value });
        }
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
                        onChange={(e) => this.onChange(e)}
                        type="checkbox"
                        value={x.value}
                    />
                    <FormLabel for={this.id(i)} label={x.label} />
                </div >
            ));
    }

    private onChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const value = event.target.value;
        const values = this.state.values;

        // Handle the internal state
        if (event.target.checked && values.indexOf(value) === -1) {
            values.push(value);
            this.setState({
                isDirty: true,
                values,
            });
        } else {
            this.setState({
                values: values.filter((x) => x !== value),
            });
        }

        // Bubble the onchange event
        if (this.props.onChange) {
            this.props.onChange(event);
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
        return classNames(
            "a-input" + (this.props.inline ? "--inline" : ""),
            { "is-required": this.props.required },
        );
    }

    private isChecked(i: number): boolean {
        return (this.state.values).indexOf(this.props.options[i].value) > -1;
    }

    private id(i: number): string {
        return `${this.props.required ? "required-" : ""}checkbox-${this.props.name}-${i}`;
    }
}
