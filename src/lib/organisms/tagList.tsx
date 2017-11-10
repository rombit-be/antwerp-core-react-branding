import "./tagList.scss";

import * as React from "react";

import Description from "../atoms/form/description";
import { InputProperties, Tag } from "../index";

export type TagListProperties = {
    normalize?: (value: string) => string,
} & InputProperties<string[]>;
export type TagListState = { value: string[], inputValue: string; };

/**
 * React Component TagList
 */
export class TagList extends React.Component<TagListProperties, TagListState> {

    public constructor(props: TagListProperties) {
        super(props);
        this.state = { value: this.normalizeValue(props.value) || [], inputValue: "" };
    }

    public render(): any {
        return (
            <div className="a-input a-taglist">
                <div className="a-input__wrapper a-taglist__wrapper">
                    {this.renderTags()}
                    {this.renderInputTag()}
                </div>
                <Description {...this.props} />
            </div>
        );
    }

    private renderTags(): JSX.Element[] {
        if (this.state.value && this.state.value.length > 0) {
            return this.state.value.map((x, i) => (
                <Tag
                    key={x}
                    label={x}
                    onDelete={() => this.onDeleteTag(i)}
                />
            ));
        }
        return null;
    }

    private renderInputTag(): any {
        if (!this.props.disabled) {
            return (
                <div className="m-tag d-tag">
                    <input
                        className="m-tag__input"
                        onChange={this.onChangeInputValue}
                        onKeyPress={this.onKeyInputValue}
                        placeholder={this.props.placeholder}
                        type="text"
                        value={this.state.inputValue}
                    />
                </div>
            );
        }
        return null;
    }

    private normalizeValue(value: string[]): string[] {
        if (this.props.normalize && value) {
            return value.map((x) => this.props.normalize(x));
        }
        return value;
    }

    private onChangeInputValue = (e: React.SyntheticEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value;
        if (this.state.inputValue !== inputValue) {
            this.setState({ inputValue });
        }
    }

    private onKeyInputValue = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && this.state.inputValue) {
            // Prevent submitting the form
            e.preventDefault();

            // Trim the input and normalize it if a normalize fct is defined
            let inputValue = this.state.inputValue.trim();
            if (this.props.normalize) {
                inputValue = this.props.normalize(inputValue);
            }

            if (this.state.value.filter((x) => x === inputValue).length === 0) {
                // Add the value
                const value = this.state.value;
                value.push(inputValue);

                // Push the state
                this.setState({ inputValue: "", value });

                // Notify the change
                this.onChanged([...value]);
            }
        }
    }

    private onDeleteTag = (index: number) => {
        if (this.state.value && this.state.value.length > 0) {
            const value = this.state.value.filter((x, i) => i !== index);
            this.setState({ value });
            this.onChanged(value);
        }
    }

    private onChanged(value: string[]): void {
        if (this.props.onChange) {
            this.props.onChange((value || this.state.value) as any);
        }
    }
}
