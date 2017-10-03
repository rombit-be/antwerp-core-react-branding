/// <reference types="react" />
import * as React from "react";
import { Sizes } from "../common/sizes";
export declare type AvatarProperties = {
    src: string;
    size?: Sizes;
    name?: string;
};
/**
 * Utilities: Avatar component
 */
export default class Avatar extends React.Component<AvatarProperties, {}> {
    render(): any;
}
