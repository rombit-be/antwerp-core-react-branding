import "./index.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";

import AccordeonComponents from "./components/accordeon";
import AlertComponent from "./components/alert";
import BackgroundComponents from "./components/background";
import BadgeComponents from "./components/badge";
import ButtonComponents from "./components/button";
import DatepickerComponent from "./components/datePicker";
import FormComponents from "./components/form";
import LabelComponents from "./components/label";
import LayoutComponents from "./components/layout";
import SpacingComponents from "./components/spacing";
import TabNavigationComponent from "./components/tabNavigation";
import TagComponents from "./components/tag";
import TextComponents from "./components/text";
import UploadComponent from "./components/upload";

const mountId = "mount";

// Render the main document...
ReactDOM.render((
    <article>
        <header>
            <h1>Overview of the different stylings</h1>
        </header>
        <div>
            <TagComponents />
            <UploadComponent />
            <DatepickerComponent />
            <TabNavigationComponent />
            <AccordeonComponents />
            <LabelComponents />
            <FormComponents />
            <TextComponents />
            <BackgroundComponents />
            <LayoutComponents />
            <SpacingComponents />
            <AlertComponent />
            <BadgeComponents />
            <ButtonComponents />
        </div>
    </article>
), document.getElementById(mountId));
