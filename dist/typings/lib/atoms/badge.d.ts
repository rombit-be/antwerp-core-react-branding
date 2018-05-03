/// <reference types="react" />
import * as React from "react";
import { Levels } from "../common/levels";
export declare type BadgeProperties = {
    level?: Levels;
    value: number | string;
};
/**
 * Atoms: badge component
 */
export declare class Badge extends React.Component<BadgeProperties, {}> {
    render(): any;
    private className();
}
