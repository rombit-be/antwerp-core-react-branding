import * as React from "react";

import * as A from "../../lib";
import { SelectOption } from "../../lib/atoms/form/select";
import StyleSection from "../common/styleSection";

/**
 * React Component FormComponents
 */
export default class FormComponents extends React.Component<{}, {}> {

    private sectionProps: any = { title: "Form" };

    public render(): any {
        return (
            <StyleSection {...this.sectionProps}>
                <A.Fieldset legend="Input elements">
                    <A.Confirm name="confirm" label="Confirm me" />
                    <A.TextInput name="text" label="Text input" />
                    <A.NumberInput name="number" label="Number input" />
                    <A.EmailInput name="email" label="Email input" />
                    <A.DateTimeInput name="datetime" label="Date/Time input" />
                </A.Fieldset>
                <A.Fieldset legend="Complex types">
                    <A.Select options={this.options()} name="select" label="A dropdown" />
                    <A.Checkboxes options={this.options()} name="checkboxes" label="A checkbox group" />
                    <A.Radiobuttons options={this.options()} name="radiobuttons" label="A radio group" />
                    <A.TextArea label="Textarea" name="textarea" />
                </A.Fieldset>
            </StyleSection >
        );
    }

    private options(): SelectOption[] {
        return [0, 1, 2, 3, 4]
            .map((x) => x + 1)
            .map((x) => ({ label: `Option ${x}`, value: x.toString() }));
    }
}
