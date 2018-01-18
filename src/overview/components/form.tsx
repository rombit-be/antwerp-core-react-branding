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
                    <A.TextInput name="text_with_description" label="Text input" description="This is a description" />
                    <A.TextInput name="text_with_error" label="Text input"
                        meta={{ touched: true, error: "This input is horribly wrong" }} />
                    <A.TextInput name="text_with_error_component" label="Text input"
                        meta={{ touched: true, error: "This input is horribly wrong" }}
                        errorComponent={(props) => <span>An error: {props.error}</span>}
                    />
                    <A.TextInput name="text_with_error_staticcomponent" label="Text input"
                        meta={{ touched: true, error: "This input is horribly wrong" }}
                        errorComponent={<span>An error in this field :(</span>}
                    />
                    <A.NumberInput name="number" label="Number input" />
                    <A.EmailInput name="email" label="Email input" />
                    <A.DateTimeInput name="datetime" label="Date/Time input" />
                </A.Fieldset>
                <A.Fieldset legend="Complex types">
                    <A.Select options={this.options()} onChange={this.dumpChange} value="2" name="select" label="A dropdown" />
                    <A.Checkboxes options={this.options()} name="checkboxes" label="A checkbox group" />
                    <A.Radiobuttons options={this.options()} name="radiobuttons" label="A radio group" />
                    <A.TextArea label="Textarea" name="textarea" />
                </A.Fieldset>
            </StyleSection >
        );
    }

    private dumpChange(v: any) {
        // tslint:disable-next-line:no-console
        console.log(v.target.value);
    }

    private options(): SelectOption[] {
        return [0, 1, 2, 3, 4]
            .map((x) => x + 1)
            .map((x) => ({ label: `Option ${x}`, value: x.toString() }));
    }
}
