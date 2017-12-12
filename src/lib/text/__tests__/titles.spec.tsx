import * as React from "react";

import * as A from "../..";
import { renderAndMatchSnapshot } from "../../../__tests__/__fixtures__/testUtils";

describe("Titles", () => {
    it("Renders H1", () => {
        // Act
        const element = (
            <A.H1>a title</A.H1>);

        // Act and Assert
        renderAndMatchSnapshot(element);
    });

    it("Renders H2", () => {
        // Act
        const element = (
            <A.H2>a title</A.H2>);

        // Act and Assert
        renderAndMatchSnapshot(element);
    });

    it("Renders H3", () => {
        // Act
        const element = (
            <A.H3>a title</A.H3>);

        // Act and Assert
        renderAndMatchSnapshot(element);
    });

    it("Renders H4", () => {
        // Act
        const element = (
            <A.H4>a title</A.H4>);

        // Act and Assert
        renderAndMatchSnapshot(element);
    });

    it("Renders H5", () => {
        // Act
        const element = (
            <A.H5>a title</A.H5>);

        // Act and Assert
        renderAndMatchSnapshot(element);
    });

});
