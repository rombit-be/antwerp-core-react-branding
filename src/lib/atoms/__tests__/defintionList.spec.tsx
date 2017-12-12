import * as React from "react";

import { shallow } from "enzyme";

import * as A from "../..";
import { renderAndMatchSnapshot } from "../../../__tests__/__fixtures__/testUtils";

describe("Copyright", () => {
    it("Renders default", () => {
        // Arrange
        const list = {
            "abrac-adabra": "some word",
            "aya sofia": "some building",
            "rubicon": "some river",
        };
        const element = <A.DefinitionList list={list} />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("Renders capitalized", () => {
        // Arrange
        const list = {
            "abrac-adabra": "some word",
            "aya sofia": "some building",
            "rubicon": "some river",
        };
        const element = <A.DefinitionList list={list} capitalize />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("Renders capitalized and with colon", () => {
        // Arrange
        const list = {
            "abrac-adabra": "some word",
            "aya sofia": "some building",
            "rubicon": "some river",
        };
        const element = <A.DefinitionList list={list} capitalize colon />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("Renders null list without error", () => {
        // Arrange
        const element = <A.DefinitionList list={null} capitalize colon />;

        // Act and assert
        renderAndMatchSnapshot(element);
    });

    it("Renders exact elements", () => {
        // Arrange
        const list = {
            "abrac-adabra": "some word",
            "aya sofia": "some building",
            "rubicon": "some river",
        };
        const expected = Object.keys(list).length;
        const element = <A.DefinitionList list={list} />;

        // Act
        const mounted = shallow(element);

        // Assert
        expect(mounted.find("dt").children().length).toBe(expected);
        expect(mounted.find("dd").children().length).toBe(expected);
    });

    it("Renders capitalized, check content", () => {
        // Arrange
        const list = {
            "abrac-adabra": "some word",
            "aya sofia": "some building",
            "rubicon": "some river",
        };
        const expected = "Abrac-adabra";
        const element = <A.DefinitionList list={list} capitalize />;

        // Act
        const mounted = shallow(element);

        // Assert
        expect(mounted.find("dt").first().text()).toBe(expected);
    });

    it("Renders capitalized, check content, edge-case", () => {
        // Arrange
        const list = {
            "a": "some word",
            "aya sofia": "some building",
            "rubicon": "some river",
        };
        const expected = "A";
        const element = <A.DefinitionList list={list} capitalize />;

        // Act
        const mounted = shallow(element);

        // Assert
        expect(mounted.find("dt").first().text()).toBe(expected);
    });

});
