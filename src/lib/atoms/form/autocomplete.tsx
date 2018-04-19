import "./autocomplete.scss";

import * as React from "react";

import { Flyout, TextInput } from "../..";
import { Sizes } from "../../common/sizes";
import { InputProperties } from "./inputProperties";

type Event = React.SyntheticEvent<HTMLInputElement>;
type KeyEvent = React.KeyboardEvent<HTMLInputElement>;

export type AutoCompleteProperties = {
    filterOnType?: boolean;
    onSelectOption?: (value: string) => void,
    options: string[],
} & InputProperties<string>;

export type AutoCompleteState = {
    visible: boolean;
    value?: string;
};

/**
 * Atoms: Autocomplete
 */
export class AutoComplete extends React.Component<AutoCompleteProperties, AutoCompleteState> {

    public constructor(props: AutoCompleteProperties) {
        super(props);
        this.state = {
            value: props.value || "",
            visible: false,
        };
    }

    public render(): any {
        return (
            <Flyout
                content={this.hasOptions() ? this.renderOptions() : null}
                label={
                    <TextInput
                        {...this.getInputProps()}
                        value={this.state.value}
                        onBlur={this.onBlur}
                        onChange={this.onChange}
                        onKeyDown={this.onKeyPress}
                        autoComplete="off"
                    />
                }
                size={Sizes.Default}
                visible={this.state.visible}
            />
        );
    }

    private renderOptions(): JSX.Element {
        return (
            <ul className="m-selectable-list m-selectable-list--no-border">
                {this.getOptions().map((x, i) => (
                    <li key={i}>
                        <a className="m-selectable-list__item" onClick={() => this.onSelectOption(x)}>
                            {x}
                        </a>
                    </li>
                ))}
            </ul>
        );
    }

    private onKeyPress: (e: KeyEvent) => void = (e: KeyEvent) => {
        if (e.key === "Tab" || e.key === "Enter" && this.props.filterOnType) {
            this.selectFirstOption();
        }
    }

    private onBlur: () => void = () => {
        // wait for onClick to do its thing
        setTimeout(() => {
            const options = this.getOptions();
            // only select something if onClick hasn't already done so
            if (!this.state.value || options.indexOf(this.state.value) === -1) {
                this.selectFirstOption();
            }
        }, 100);
    }

    private onChange: (e: Event) => void = (e: Event) => {
        // Set the filter
        const value = e.currentTarget.value;
        this.setState({
            value,
            visible: true,
        });

        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }

    private onSelectOption: (value: string) => void = (value: string) => {
        this.setState({
            value,
            visible: false,
        });
        if (this.props.onSelectOption) {
            this.props.onSelectOption(value);
        }
    }

    private hasOptions(): boolean {
        return this.getOptions().length > 0;
    }

    private selectFirstOption: () => void = () => {
        const options = this.getOptions();
        if (options.length > 0) {
            this.onSelectOption(options[0]);
        }
    }

    private getOptions(): string[] {
        let options = (this.props.options || []).sort();
        if (this.props.filterOnType) {
            // Filter the options
            options = options
                .filter((x) => x.toLowerCase().indexOf(this.state.value.toLowerCase()) === 0);
        }
        return options;
    }

    private getInputProps(): InputProperties<string> {
        const props = { ...this.props };
        delete props.filterOnType;
        delete props.onBlur;
        delete props.onChange;
        delete props.onKeyPress;
        delete props.options;
        delete props.onSelectOption;
        return props;
    }
}
