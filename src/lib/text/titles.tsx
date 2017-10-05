import * as React from "react";

import { Spacing } from "../";
import { SpacingStyle } from "../utilities/spacing";

export type TitleProps = { children: any };

export const H1 = (props: TitleProps) =>
    (<Spacing type={SpacingStyle.MarginBottom}><h1>{props.children}</h1></Spacing>);

export const H2 = (props: TitleProps) =>
    (<Spacing type={SpacingStyle.MarginBottom}><h2>{props.children}</h2></Spacing>);

export const H3 = (props: TitleProps) =>
    (<Spacing type={SpacingStyle.MarginBottom}><h3>{props.children}</h3></Spacing>);

export const H4 = (props: TitleProps) =>
    (<Spacing type={SpacingStyle.MarginBottom}><h4>{props.children}</h4></Spacing>);

export const H5 = (props: TitleProps) =>
    (<Spacing type={SpacingStyle.MarginBottom}><h5>{props.children}</h5></Spacing>);
