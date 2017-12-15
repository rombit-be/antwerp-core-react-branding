import "./index.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hero, HeroItem } from "../lib/index";
import AccordeonComponents from "./components/accordeon";
import AlertComponent from "./components/alert";
import BackgroundComponents from "./components/background";
import BadgeComponents from "./components/badge";
import ButtonComponents from "./components/button";
import DatepickerComponent from "./components/datePicker";
import FlyoutComponents from "./components/flyout";
import FormComponents from "./components/form";
import LabelComponents from "./components/label";
import LayoutComponents from "./components/layout";
import SpacingComponents from "./components/spacing";
import TableComponents from "./components/table";
import TabNavigationComponent from "./components/tabNavigation";
import TagComponents from "./components/tag";
import TextComponents from "./components/text";
import UploadComponent from "./components/upload";

const mountId = "mount";

// Render the main document...
ReactDOM.render((
    <div>
        <Hero title="Antwerp Core React Branding" subtitle="Overview of the styles" color="#ddbbbb">
            <HeroItem title="Menuitem 1" onClick={() => ({})} />
            <HeroItem title="Menuitem 2" href="http://www.google.com" target="_blank" />
        </Hero>
        <article>
            <div>
                <FlyoutComponents />
                <DatepickerComponent />
                <TableComponents />
                <TagComponents />
                <UploadComponent />
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
    </div>
), document.getElementById(mountId));
