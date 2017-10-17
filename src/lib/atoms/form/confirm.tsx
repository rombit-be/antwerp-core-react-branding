import * as React from "react";

import { CheckboxOption, InputProperties } from "../..";
import { Checkboxes } from "./checkboxes";

export type ConfirmProperties = InputProperties<boolean>;

/**
 * Atoms: Form element confirm
 */
export class Confirm extends React.Component<ConfirmProperties, {}> {

    public render(): any {
        return (
            <Checkboxes
                options={this.getOptions()}
                {...this.props}
                value={[this.parseValueToString(this.props.value)]}
            />
        );
    }

    private getOptions(): CheckboxOption[] {
        return [{
            label: this.props.label,
            value: this.parseValueToString(true),
        }];
    }

    // private parseValueToBoolean(value: any): boolean {
    //     if (value && (value === true || value === "true")) {
    //         return true;
    //     }
    //     return false;
    // }

    private parseValueToString(value: any): string {
        if (value && (value === true || value === "true")) {
            return "true";
        }
        return "false";
    }
}
