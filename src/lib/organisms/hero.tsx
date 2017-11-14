import "./hero.scss";

import * as React from "react";
import { Spacing, SpacingStyle } from "../index";
import { HeroItem, HeroItemProperties } from "./heroItem";

export type HeroProperties = {
    color?: string;
    subtitle?: string | JSX.Element;
    title: string | JSX.Element;
};

/**
 * Organisms: Hero
 */
export class Hero extends React.Component<HeroProperties, {}> {

    public render() {
        return (
            <div className="aui-hero" style={{ backgroundColor: this.props.color }}>
                <div className="inner has-cta">
                    <div className="aui-hero-card">
                        <Spacing type={SpacingStyle.MarginTop}>
                            <h3>
                                {this.props.title}
                            </h3>
                            {
                                this.props.subtitle &&
                                <h5>
                                    {this.props.subtitle}
                                </h5>
                            }
                        </Spacing>
                    </div>
                    <div className="aui-hero-cta">
                        <div className="aui-hero-navigation">
                            <ul className="m-nav-tabs">
                                {this.renderChildren()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private renderChildren(): JSX.Element[] {
        // Filter out the allowed children
        const allowedChildren: any[] =
            (React.Children.toArray(this.props.children) as Array<React.ReactElement<HeroItemProperties>>)
                .filter((x: any) => (x.type as any).name === HeroItem.name);

        // Send out a warning
        if (allowedChildren.length > 0 && allowedChildren.length < (this.props.children as any[]).length) {
            // tslint:disable-next-line:no-console
            console.warn(`${HeroItem.name}: Only children of type ${HeroItem.name} are allowed.`);
        }

        return allowedChildren.map((x: HeroItem, i) => (
            <HeroItem
                key={i}
                {...x.props}
            />
        ));
    }
}
