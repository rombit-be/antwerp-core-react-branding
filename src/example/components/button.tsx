import * as React from "react";

import * as A from "../../lib";
import StyleSection from "../common/styleSection";
import lookupEnumValue from "../util/lookupEnumValue";
import mapEnum from "../util/mapEnum";

/**
 * React Component name
 */
export default class ButtonComponents extends React.Component<{}, {}> {

    private sectionProps: any = {
        example: `<A.Button level={A.Levels.Success} size={A.ButtonSize.Small} text={"My button"} />`,
        title: "Badges",
    };

    public render(): any {
        return (
            <StyleSection {...this.sectionProps}>
                <h3>Buttons by level</h3>
                {this.renderByLevel()}
                <h3>Buttons by type</h3>
                {this.renderByType()}
                <h3>Buttons by size</h3>
                {this.renderbySize()}
                <h3>Button by icon location</h3>
                {this.renderByIconLocation()}
            </StyleSection >
        );
    }

    private renderByLevel(): JSX.Element[] {
        return mapEnum(A.Levels)
            .map((x, i) => (
                <div key={i}>
                    <pre>type: {lookupEnumValue(A.Levels, x)}</pre>
                    <A.Button level={x} text={`Some button ${lookupEnumValue(A.Levels, x)}`} />
                </div>
            ));
    }

    private renderByType(): JSX.Element[] {
        return mapEnum(A.ButtonType)
            .map((x, i) => (
                <div key={i}>
                    <pre>type: {lookupEnumValue(A.ButtonType, x)}</pre>
                    <A.Button type={x} text={`Some button ${lookupEnumValue(A.ButtonType, x)}`} />
                </div>
            ));
    }

    private renderbySize(): JSX.Element[] {
        return mapEnum(A.Sizes)
            .map((x, i) => {
                if (!x) { x = "default"; }
                return (
                    <div key={i}>
                        <pre>type: {lookupEnumValue(A.Sizes, x)}</pre>
                        <A.Button size={x} text={`Some button ${lookupEnumValue(A.Sizes, x)}`} />
                    </div>
                );
            });
    }

    private renderByIconLocation(): JSX.Element[] {
        return mapEnum(A.Location)
            .map((x, i) => {
                if (!x) { x = "default"; }
                return (
                    <div key={i}>
                        <pre>location: {lookupEnumValue(A.Location, x)}</pre>
                        <A.IconButton location={x} icon="download" text="download" />
                    </div>
                );
            });
    }
}
