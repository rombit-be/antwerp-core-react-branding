/// <reference types="react" />
import * as React from "react";
import { TypedInputProperties } from "./inputProperties";
export declare type DescriptionProperties = {
    descriptionClassName?: string;
} & TypedInputProperties;
/**
 * Atoms: Util Description element
 */
export default class Description extends React.Component<DescriptionProperties, {}> {
    render(): JSX.Element;
    private className(isError);
    private isError();
}
