/// <reference types="react" />
import * as React from "react";
export declare type StepperProperties = {
    steps: string[];
    activeStep?: number;
};
/**
 * Molecules: Stepper
 */
export declare class Stepper extends React.Component<StepperProperties, {}> {
    render(): any;
    private renderSteps();
    private renderStep(step, i);
}
