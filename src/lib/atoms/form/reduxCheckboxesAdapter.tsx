import * as React from "react";

import { CheckboxesProperties } from "../..";

// tslint:disable-next-line:max-line-length
export type ReduxCheckboxesAdapterProperties = { input?: Partial<CheckboxesProperties> } & Partial<CheckboxesProperties>;

/**
 * React Component ReduxCheckboxesAdapter
 */
export class ReduxCheckboxesAdapter extends React.Component<ReduxCheckboxesAdapterProperties, {}> {

    public render(): any {
        return this.renderAdaptedChild();
    }

    private renderAdaptedChild(): JSX.Element {
        if (React.Children.count(this.props.children) === 1) {
            // Clone the props
            const props: any = { ...this.props, ...this.props.input };
            props.children = null;

            // Clone the react element
            return React.cloneElement((React.Children.toArray(this.props.children)[0] as any), props);
        }
        // tslint:disable-next-line:no-console
        console.warn(`${ReduxCheckboxesAdapter.name}: only one child should be provided`);
        return null;
    }
}
