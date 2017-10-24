import * as React from "react";

import { InputProperties, TypedInputProperties } from "./inputProperties";

export type ReduxFormAdapterProperties = {
    input?: Partial<InputProperties<any>>,
} & Partial<TypedInputProperties>;

/**
 * React Component ReduxFormAdapter
 */
export default class ReduxFormAdapter extends React.Component<ReduxFormAdapterProperties, {}> {

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
        console.warn(`${ReduxFormAdapter.name}: only one child should be provided`);
        return null;
    }
}
