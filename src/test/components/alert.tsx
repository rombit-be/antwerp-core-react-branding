import * as React from "react";

import { Button } from "../../lib/atoms/button";
import { Alert } from "../../lib/molecules/alert";
import { Paragraph } from "../../lib/text/paragraph";
import StyleSection from "../common/styleSection";

/**
 * React Component name
 */
export default class AlertComponent extends React.Component<{}, { visible: boolean }> {

    private sectionProps: any = { title: "Accordeon" };

    public constructor(props: {}) {
        super(props);
        this.state = { visible: false };
    }

    public render(): any {
        return (
            <StyleSection {...this.sectionProps}>
                <Alert
                    title="Antwerp Core Branding"
                    message="You asked to show me, my master?" visible={this.state.visible}
                    onOk={this.hideAlert}
                />
                <Paragraph spacing>
                    Push the button below to show the alert:
                </Paragraph>
                <Button text="Show the alert" onClick={this.showAlert} />
            </StyleSection >
        );
    }

    private showAlert = () => {
        this.setState({
            visible: true,
        });
    }

    private hideAlert = () => {
        this.setState({
            visible: false,
        });
    }
}
