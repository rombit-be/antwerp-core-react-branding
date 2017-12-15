import "./autocomplete.scss";

import * as React from "react";

import { Sizes } from "../../common/sizes";
import { Flyout, TextInput } from "../../index";
import { InputProperties } from "./inputProperties";

type Event = React.SyntheticEvent<HTMLInputElement>;
type KeyEvent = React.KeyboardEvent<HTMLInputElement>;

export type AutoCompleteProperties = {
    filterOnType?: boolean;
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
                content={this.renderOptions()}
                label={
                    <TextInput
                        {...this.getInputProps() }
                        value={this.state.value}
                        onChange={this.onChange}
                        onKeyDown={this.onKeyPress}
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
            const options = this.getOptions();
            if (options.length > 0) {
                this.setState({
                    value: options[0],
                    visible: false,
                });
            }
        }
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
        delete props.onChange;
        delete props.onKeyPress;
        delete props.options;
        return props;
    }
}
