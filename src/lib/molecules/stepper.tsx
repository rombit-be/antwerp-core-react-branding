import * as classNames from "classnames";
import * as React from "react";

export type StepperProperties = {
    steps: string[];
    activeStep?: number;
};

/**
 * Molecules: Stepper
 */
export class Stepper extends React.Component<StepperProperties, {}> {

    public render(): any {
        return (
            <ol className="m-step-indicator">
                {this.renderSteps()}
            </ol>
        );
    }

    private renderSteps(): JSX.Element[] {
        if (this.props.steps && this.props.steps.length > 0) {
            return this.props.steps.map((x, i) => this.renderStep(x, i));
        }
        return null;
    }

    private renderStep(step: string, i: number): JSX.Element {
        const classname: string = classNames({
            "is-active": i === this.props.activeStep,
            "is-completed": i < this.props.activeStep,
        });

        return (
            <li key={`step-${i}`} className={classname}>
                <span className="m-step-indicator__label">{step}</span>
            </li>
        );
    }
}
