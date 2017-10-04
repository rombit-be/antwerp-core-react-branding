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
                <A.DatePickerInput name="datewithdatepicker" onChange={(e) => console.log("Selected date", e)} />
            </StyleSection >
        );
    }
}
