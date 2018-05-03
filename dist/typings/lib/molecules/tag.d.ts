/// <reference types="react" />
import * as React from "react";
import { Levels } from "../index";
export declare type TagProperties = {
    icon?: string;
    label: string | JSX.Element;
    level?: Levels;
    onDelete?: () => void;
};
/**
 * React Component Tag
 */
export declare class Tag extends React.Component<TagProperties, {}> {
    render(): any;
    private renderIconButton();
    private renderDeleteButton();
    private className();
}
