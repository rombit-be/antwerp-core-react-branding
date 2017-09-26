import * as React from "react";
import * as A from "../../lib";
import StyleSection from "../common/styleSection";
import mapEnum from "../util/mapEnum";
import lookupEnumValue from "../util/lookupEnumValue";

/**
 * React Component name
 */
export default class ButtonComponents extends React.Component<{}, {}> {

    private sectionProps: any = {
        example: `<A.Button level={A.Levels.Success} size={A.ButtonSize.Small} text={"My button"} />`,
        title: "Badges"
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
        return mapEnum(A.ButtonSize)
            .map((x, i) => {
                if (!x) { x = "default"; }
                return (
                    <div key={i}>
                        <pre>type: {lookupEnumValue(A.ButtonSize, x)}</pre>
                        <A.Button size={x} text={`Some button ${lookupEnumValue(A.ButtonSize, x)}`} />
                    </div>
                )
            });
    }
}
