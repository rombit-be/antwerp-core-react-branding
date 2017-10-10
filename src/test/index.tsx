import "./index.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";

import ReduxFormAdapter from "../lib/atoms/form/reduxFormAdapter";
import { Alert } from "../lib/molecules/alert";
import { DatePickerInput } from "../lib/molecules/datepicker/datepickerInput";
import AccordeonComponents from "./components/accordeon";
import BackgroundComponents from "./components/background";
import BadgeComponents from "./components/badge";
import ButtonComponents from "./components/button";
import DatepickerComponent from "./components/datePicker";
import FormComponents from "./components/form";
import LabelComponents from "./components/label";
import LayoutComponents from "./components/layout";
import SpacingComponents from "./components/spacing";
import TabNavigationComponent from "./components/tabNavigation";
import TextComponents from "./components/text";

const mountId = "mount";

// Render the main document...
ReactDOM.render((
    <article>
        <header>
            <h1>Overview of the different stylings</h1>
        </header>
        <Alert title="Antwerp Core Branding" message="Welcome!" visible={true} />
        <ReduxFormAdapter input={{ value: "12-03-1981", name: "name" }} type="text">
            {/*tslint:disable-next-line:no-console*/}
            <DatePickerInput name="datewithdatepicker" onChange={(e) => console.log("Selected date", e)} />
        </ReduxFormAdapter>
        <DatepickerComponent />
        <TabNavigationComponent />
        <AccordeonComponents />
        <LabelComponents />
        <FormComponents />
        <TextComponents />
        <BackgroundComponents />
        <LayoutComponents />
        <SpacingComponents />
        <BadgeComponents />
        <ButtonComponents />
    </article>
), document.getElementById(mountId));
