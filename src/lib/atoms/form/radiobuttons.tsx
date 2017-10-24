import * as classNames from "classnames";
import * as React from "react";

import { FormLabel } from "./formlabel";
import { FieldMetaProperties, InputProperties } from "./inputProperties";

export type RadiobuttonOption = { label: string | JSX.Element, value: string, disabled?: boolean };
export type RadiobuttonsProperties = { options: RadiobuttonOption[] } & InputProperties<string>;
export type RadiobuttonsState = { value: string, isDirty: boolean };

/**
 * Atoms: Radiobutton group element
 */
export class Radiobuttons extends React.Component<RadiobuttonsProperties, RadiobuttonsState> {

    public constructor(props: RadiobuttonsProperties) {
        super(props);
        this.state = {
            isDirty: false,
            value: props.value,
        };
    }

    public render(): any {
        return (
            <div className={this.className()}>
                <FormLabel {...this.props} />
                {this.renderRadiobuttons()}
                {this.renderDescription()}
            </div>
        );
    }

    public componentWillReceiveProps(nextProps: RadiobuttonsProperties): void {
        if (this.state.isDirty) {
            if (nextProps.options.map((x) => x.value).indexOf(this.state.value) === -1) {
                this.setState({ isDirty: false, value: "" });
            }

            if (this.state.value !== nextProps.value) {
                this.setState({ value: nextProps.value });
            }
        } else {
            this.setState({ value: nextProps.value });
        }
    }

    private onChange(event: React.ChangeEvent<HTMLInputElement>): void {
        // Handle the internal state
        this.setState({
            value: event.target.value,
        });

        // Bubble the onchange event
        if (this.props.onChange) {
            this.props.onChange(event);
        }
    }

    private renderRadiobuttons(): JSX.Element[] {
        return this.props.options
            .map((x, i) => (
                <div className="a-input__radio" key={this.id(i)}>
                    <input
                        checked={this.isChecked(i)}
                        disabled={x.disabled}
                        id={this.id(i)}
                        name={this.props.name}
                        onChange={(e) => this.onChange(e)}
                        type="radio"
                        value={x.value}
                    />
                    <FormLabel noClass for={this.id(i)} label={x.label} />
                </div >
            ));
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
    }

    private className(): string {
        return classNames(
            "a-input",
            { "a-input--inline": this.props.inline },
            { "is-required": this.props.required },
        );
    }

    private isChecked(i: number): boolean {
        return this.props.options[i].value === this.state.value;
    }

    private id(i: number): string {
        return `${this.props.required ? "required-" : ""}radiobutton-${this.props.name}-${i}`;
    }

    private isError(): boolean {
        const meta: FieldMetaProperties = this.props.meta || {};
        return meta.touched && (meta.error ? true : false);
    }
}
