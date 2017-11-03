import * as React from "react";

import { UploadProperties } from "./upload";

export type ReduxUploadFormAdapterProperties = {
    input?: Partial<UploadProperties>,
}
    & Partial<UploadProperties>;

/**
 * React Component ReduxUploadFormAdapter
 */
export default class ReduxUploadFormAdapter extends React.Component<ReduxUploadFormAdapterProperties, {}> {

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
        console.warn(`${ReduxUploadFormAdapter.name}: only one child should be provided`);
        return null;
    }
}
