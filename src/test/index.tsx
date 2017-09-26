import * as React from "react";
import * as ReactDOM from "react-dom";
import * as A from "../lib";
import "./index.scss";

const mountId = "mount";

// Render the main document...
ReactDOM.render((
    <article>
        <header>
            <h1>Overview of the different stylings</h1>
        </header>
        <A.Paragraph type="u-text-bold">bla</A.Paragraph>
    </article>
), document.getElementById(mountId));
