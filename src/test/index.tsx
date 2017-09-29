import "./index.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";

import * as A from "../lib";
import AccordeonComponents from "./components/accordeon";
import BackgroundComponents from "./components/background";
import BadgeComponents from "./components/badge";
import ButtonComponents from "./components/button";
import FormComponents from "./components/form";
import LabelComponents from "./components/label";
import LayoutComponents from "./components/layout";
import SpacingComponents from "./components/spacing";
import TextComponents from "./components/text";

const mountId = "mount";

// Render the main document...
ReactDOM.render((
    <article>
        <header>
            <h1>Overview of the different stylings</h1>
        </header>
        <A.DatePickerInput name="datewithdatepicker" />
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
