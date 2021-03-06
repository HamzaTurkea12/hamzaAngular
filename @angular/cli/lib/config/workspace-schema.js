"use strict";
// THIS FILE IS AUTOMATICALLY GENERATED. TO UPDATE THIS FILE YOU NEED TO CHANGE THE
// CORRESPONDING JSON SCHEMA FILE, THEN RUN devkit-admin build (or bazel build ...).
Object.defineProperty(exports, "__esModule", { value: true });
exports.Implement = exports.SchematicsAngularComponentStyle = exports.ChangeDetection = exports.ViewEncapsulation = exports.SchematicsAngularApplicationStyle = exports.PackageManager = void 0;
/**
 * Specify which package manager tool to use.
 *
 * The package manager used to install dependencies.
 */
var PackageManager;
(function (PackageManager) {
    PackageManager["Cnpm"] = "cnpm";
    PackageManager["Npm"] = "npm";
    PackageManager["Pnpm"] = "pnpm";
    PackageManager["Yarn"] = "yarn";
})(PackageManager = exports.PackageManager || (exports.PackageManager = {}));
/**
 * The file extension or preprocessor to use for style files.
 */
var SchematicsAngularApplicationStyle;
(function (SchematicsAngularApplicationStyle) {
    SchematicsAngularApplicationStyle["Css"] = "css";
    SchematicsAngularApplicationStyle["Less"] = "less";
    SchematicsAngularApplicationStyle["Sass"] = "sass";
    SchematicsAngularApplicationStyle["Scss"] = "scss";
})(SchematicsAngularApplicationStyle = exports.SchematicsAngularApplicationStyle || (exports.SchematicsAngularApplicationStyle = {}));
/**
 * The view encapsulation strategy to use in the new application.
 *
 * The view encapsulation strategy to use in the new component.
 *
 * The view encapsulation strategy to use in the initial project.
 */
var ViewEncapsulation;
(function (ViewEncapsulation) {
    ViewEncapsulation["Emulated"] = "Emulated";
    ViewEncapsulation["None"] = "None";
    ViewEncapsulation["ShadowDom"] = "ShadowDom";
})(ViewEncapsulation = exports.ViewEncapsulation || (exports.ViewEncapsulation = {}));
/**
 * The change detection strategy to use in the new component.
 */
var ChangeDetection;
(function (ChangeDetection) {
    ChangeDetection["Default"] = "Default";
    ChangeDetection["OnPush"] = "OnPush";
})(ChangeDetection = exports.ChangeDetection || (exports.ChangeDetection = {}));
/**
 * The file extension or preprocessor to use for style files, or 'none' to skip generating
 * the style file.
 */
var SchematicsAngularComponentStyle;
(function (SchematicsAngularComponentStyle) {
    SchematicsAngularComponentStyle["Css"] = "css";
    SchematicsAngularComponentStyle["Less"] = "less";
    SchematicsAngularComponentStyle["None"] = "none";
    SchematicsAngularComponentStyle["Sass"] = "sass";
    SchematicsAngularComponentStyle["Scss"] = "scss";
})(SchematicsAngularComponentStyle = exports.SchematicsAngularComponentStyle || (exports.SchematicsAngularComponentStyle = {}));
var Implement;
(function (Implement) {
    Implement["CanActivate"] = "CanActivate";
    Implement["CanActivateChild"] = "CanActivateChild";
    Implement["CanDeactivate"] = "CanDeactivate";
    Implement["CanLoad"] = "CanLoad";
})(Implement = exports.Implement || (exports.Implement = {}));
