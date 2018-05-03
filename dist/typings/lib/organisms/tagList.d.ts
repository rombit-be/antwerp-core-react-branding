/// <reference types="react" />
import "./tagList.scss";
import * as React from "react";
import { BaseInputProperties } from "../index";
export declare type TagListProperties = {
    noinput?: boolean;
    normalize?: (value: string) => string;
    onChanged?: (value: string[]) => void;
} & BaseInputProperties<string[]>;
export declare type TagListState = {
    value: string[];
    inputValue: string;
};
/**
 * React Component TagList
 */
export declare class TagList extends React.Component<TagListProperties, TagListState> {
    constructor(props: TagListProperties);
    render(): any;
    componentWillReceiveProps(nextProps: TagListProperties): void;
    private renderTags();
    private renderInputTag();
    private normalizeValue(value);
    private onChangeInputValue;
    private onKeyInputValue;
    private onDeleteTag;
    private onChanged(value);
}
