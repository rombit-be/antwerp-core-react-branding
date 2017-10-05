import * as React from "react";

import { Spacing } from "../";
import { SpacingStyle } from "../utilities/spacing";

export type TitleProps = { children: any };

/**
 * Text: H1 component
 * @param props TitleProps
 */
export const H1 = (props: TitleProps) =>
    (<Spacing type={SpacingStyle.MarginBottomLarge}><h1>{props.children}</h1></Spacing>);

/**
 * Text: H2 component
 * @param props TitleProps
 */
export const H2 = (props: TitleProps) =>
    (<Spacing type={SpacingStyle.MarginBottom}><h2>{props.children}</h2></Spacing>);

/**
 * Text: H3 component
 * @param props TitleProps
 */
export const H3 = (props: TitleProps) =>
    (<Spacing type={SpacingStyle.MarginBottom}><h3>{props.children}</h3></Spacing>);

/**
 * Text: H4 component
 * @param props TitleProps
 */
export const H4 = (props: TitleProps) =>
    (<Spacing type={SpacingStyle.MarginBottomXs}><h4>{props.children}</h4></Spacing>);

/**
 * Text: H5 component
 * @param props TitleProps
 */
export const H5 = (props: TitleProps) =>
    (<Spacing type={SpacingStyle.MarginBottomXx}><h5>{props.children}</h5></Spacing>);
