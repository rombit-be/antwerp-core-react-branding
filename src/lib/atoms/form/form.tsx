import * as React from "react";

export type FormProperties = React.FormHTMLAttributes<HTMLFormElement>;

type Properties = FormProperties;

/**
 * Atoms: Form component
 */
export class Form extends React.Component<Properties, {}> {

    // To be used if this form object can't be used i.c. Redux-Form
    public static className: string = "a-form";

    public render(): any {
        return (
            <form
                className={Form.className}
                {...this.props}
            >
                {this.props.children}
            </form>
        );
    }

}
