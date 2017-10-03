"use strict";
exports.__esModule = true;
var allColors_1 = require("./allColors");
/**
 * Definition of the main colors, based on the AllColors enum
 */
var MainColors = (function () {
    function MainColors() {
    }
    return MainColors;
}());
MainColors.BackgroundColor = allColors_1["default"].GreyLight;
MainColors.BackgroundColorLight = allColors_1["default"].GreyLighter;
MainColors.BorderColor = allColors_1["default"].Grey;
MainColors.BorderColorLight = allColors_1["default"].GreyLight;
MainColors.BrandPrimary = allColors_1["default"].Endeavour;
MainColors.BrandSecondary = allColors_1["default"].Monza;
MainColors.StateDanger = allColors_1["default"].AlizarinCrimson;
MainColors.StateDisabled = allColors_1["default"].GreyLight;
MainColors.StateInfo = allColors_1["default"].Endeavour;
MainColors.StateSuccess = allColors_1["default"].Apple;
MainColors.StateWarning = allColors_1["default"].Sun;
MainColors.TextClor = allColors_1["default"].BlackPearl;
MainColors.TextColorLight = allColors_1["default"].GreyDark;
MainColors.TextColorXLight = allColors_1["default"].White;
exports["default"] = MainColors;
