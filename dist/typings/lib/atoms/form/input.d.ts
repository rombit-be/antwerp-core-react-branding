/// <reference types="react" />
import * as React from "react";
import { TypedInputProperties } from "./inputProperties";
/**
 * Atoms: Base Input element
 */
export declare class Input extends React.Component<TypedInputProperties, {}> {
    private element;
    render(): any;
    private renderInput();
    private renderAddon(location);
    private renderIcon(location);
    private renderDescription();
    private className();
    private id();
}
