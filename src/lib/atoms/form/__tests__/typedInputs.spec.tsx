import * as React from "react";

import * as A from "../../..";
import { renderAndMatchSnapshot } from "../../../../__tests__/__fixtures__/testUtils";

describe("TypedInputs", () => {
    it("ColorInput renders default", () => {
        // Arrange
        const element = <A.ColorInput
            name="input"
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("DateInput renders default", () => {
        // Arrange
        const element = <A.DateInput
            name="input"
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("DateTimeInput renders default", () => {
        // Arrange
        const element = <A.DateTimeInput
            name="input"
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("DateTimeInput renders default", () => {
        // Arrange
        const element = <A.DateTimeInput
            name="input"
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("DatetimeLocal renders default", () => {
        // Arrange
        const element = <A.DatetimeLocal
            name="input"
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("EmailInput renders default", () => {
        // Arrange
        const element = <A.EmailInput
            name="input"
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("NumberInput renders default", () => {
        // Arrange
        const element = <A.NumberInput
            name="input"
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("PasswordInput renders default", () => {
        // Arrange
        const element = <A.PasswordInput
            name="input"
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("TelInput renders default", () => {
        // Arrange
        const element = <A.TelInput
            name="input"
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("TextArea renders default", () => {
        // Arrange
        const element = <A.TextArea
            name="input"
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("TextInput renders default", () => {
        // Arrange
        const element = <A.TextInput
            name="input"
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("TimeInput renders default", () => {
        // Arrange
        const element = <A.TimeInput
            name="input"
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("UrlInput renders default", () => {
        // Arrange
        const element = <A.UrlInput
            name="input"
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("WeekInput renders default", () => {
        // Arrange
        const element = <A.WeekInput
            name="input"
        />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });
});
