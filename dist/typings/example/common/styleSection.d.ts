/// <reference types="react" />
import "./styleSection.scss";
import * as React from "react";
export declare type StyleSectionProperties = {
    title: string;
    example?: string;
};
/**
 * React Component StyleSection
 */
export default class StyleSection extends React.Component<StyleSectionProperties, {}> {
    render(): any;
    anchor(): string;
    private renderExample();
}
