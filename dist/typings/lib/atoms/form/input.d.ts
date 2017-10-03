/// <reference types="react" />
import * as React from "react";
import { TypedInputProperties } from "./inputProperties";
/**
 * Atoms: Base Input element
 */
export declare class Input extends React.Component<TypedInputProperties, {}> {
    private element;
    render(): any;
    componentWillReceiveProps(nextProps: TypedInputProperties): void;
    createSyntheticEvent(): Partial<React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>>;
    private renderInput();
    private renderAddon(location);
    private renderIcon(location);
    private renderDescription();
    private className();
    private id();
}
