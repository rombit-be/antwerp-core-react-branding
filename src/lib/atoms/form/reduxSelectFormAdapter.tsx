import * as React from "react";

import { SelectProperties } from "./select";

export type ReduxSelectFormAdapterProperties = {
    input?: Partial<SelectProperties>,
}
    & Partial<SelectProperties>;

/**
 * React Component ReduxFormAdapter
 */
export default class ReduxSelectFormAdapter extends React.Component<ReduxSelectFormAdapterProperties, {}> {

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
        console.warn(`${ReduxSelectFormAdapter.name}: only one child should be provided`);
        return null;
    }
}
