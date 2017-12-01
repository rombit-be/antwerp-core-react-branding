import * as React from "react";

export type FormProperties = React.FormHTMLAttributes<HTMLFormElement>;

/**
 * Atoms: Form component
 */
export class Form extends React.Component<FormProperties, {}> {

    // To be used if this form object can't be used i.c. Redux-Form
    public static className: string = "a-form";

    public render(): any {
        return (
            <form
                className={Form.className}
                {...this.props}
                noValidate
            >
                {this.props.children}
            </form>
        );
    }

}
