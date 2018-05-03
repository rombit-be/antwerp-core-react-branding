/// <reference types="react" />
import * as React from "react";
import { InputProperties } from "./inputProperties";
export declare type DescriptionProperties = {
    descriptionClassName?: string;
} & InputProperties<any>;
/**
 * Atoms: Util Description element
 */
export default class Description extends React.Component<DescriptionProperties, {}> {
    render(): JSX.Element;
    private className(isError);
    private isError();
}
