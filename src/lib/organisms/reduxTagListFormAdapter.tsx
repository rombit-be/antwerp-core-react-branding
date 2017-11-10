import * as React from "react";

import { TagListProperties } from "../index";

export type ReduxTagListFormAdapterProperties = {
    input?: Partial<TagListProperties>,
}
    & Partial<TagListProperties>;

/**
 * React Component ReduxTagListFormAdapter
 */
export default class ReduxTagListFormAdapter extends React.Component<ReduxTagListFormAdapterProperties, {}> {

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
        console.warn(`${ReduxTagListFormAdapter.name}: only one child should be provided`);
        return null;
    }
}
