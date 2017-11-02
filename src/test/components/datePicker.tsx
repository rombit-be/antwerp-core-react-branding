import * as React from "react";

import * as A from "../../lib";
import StyleSection from "../common/styleSection";

/**
 * React Component name
 */
export default class DatepickerComponent extends React.Component<{}, {}> {

    private sectionProps: any = { title: "Datepicker" };

    public render(): any {
        return (
            <StyleSection {...this.sectionProps}>
                {/* tslint:disable-next-line:no-console */}
                <A.DatePickerInput
                    description="A description"
                    name="datewithdatepicker"
                    onChange={(e) => this.debug("Selected data: " + e)}
                />
                <A.DatePickerField name="datepicker"
                    label="This is a datepicker"
                    input={{
                        minDate: "2017-10-23",
                        onChange: (e) => this.debug(e),
                        value: "2017-10-25",
                    }}
                />
            </StyleSection >
        );
    }

    private debug(e: any) {
        // tslint:disable-next-line:no-console
        console.log(e);
    }
}
