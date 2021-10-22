/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/ngtsc/typecheck/api/checker", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OptimizeFor = void 0;
    /**
     * Describes the scope of the caller's interest in template type-checking results.
     */
    var OptimizeFor;
    (function (OptimizeFor) {
        /**
         * Indicates that a consumer of a `TemplateTypeChecker` is only interested in results for a given
         * file, and wants them as fast as possible.
         *
         * Calling `TemplateTypeChecker` methods successively for multiple files while specifying
         * `OptimizeFor.SingleFile` can result in significant unnecessary overhead overall.
         */
        OptimizeFor[OptimizeFor["SingleFile"] = 0] = "SingleFile";
        /**
         * Indicates that a consumer of a `TemplateTypeChecker` intends to query for results pertaining to
         * the entire user program, and so the type-checker should internally optimize for this case.
         *
         * Initial calls to retrieve type-checking information may take longer, but repeated calls to
         * gather information for the whole user program will be significantly faster with this mode of
         * optimization.
         */
        OptimizeFor[OptimizeFor["WholeProgram"] = 1] = "WholeProgram";
    })(OptimizeFor = exports.OptimizeFor || (exports.OptimizeFor = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvdHlwZWNoZWNrL2FwaS9jaGVja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQThLSDs7T0FFRztJQUNILElBQVksV0FtQlg7SUFuQkQsV0FBWSxXQUFXO1FBQ3JCOzs7Ozs7V0FNRztRQUNILHlEQUFVLENBQUE7UUFFVjs7Ozs7OztXQU9HO1FBQ0gsNkRBQVksQ0FBQTtJQUNkLENBQUMsRUFuQlcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFtQnRCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QVNULCBMaXRlcmFsUHJpbWl0aXZlLCBNZXRob2RDYWxsLCBQYXJzZUVycm9yLCBQYXJzZVNvdXJjZVNwYW4sIFByb3BlcnR5UmVhZCwgU2FmZU1ldGhvZENhbGwsIFNhZmVQcm9wZXJ0eVJlYWQsIFRtcGxBc3RFbGVtZW50LCBUbXBsQXN0Tm9kZSwgVG1wbEFzdFRlbXBsYXRlfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5pbXBvcnQge0Fic29sdXRlRnNQYXRofSBmcm9tICdAYW5ndWxhci9jb21waWxlci1jbGkvc3JjL25ndHNjL2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7VGV4dEF0dHJpYnV0ZX0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL3JlbmRlcjMvcjNfYXN0JztcbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtFcnJvckNvZGV9IGZyb20gJy4uLy4uL2RpYWdub3N0aWNzJztcblxuaW1wb3J0IHtGdWxsVGVtcGxhdGVNYXBwaW5nLCBOZ1RlbXBsYXRlRGlhZ25vc3RpYywgVHlwZUNoZWNrYWJsZURpcmVjdGl2ZU1ldGF9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7R2xvYmFsQ29tcGxldGlvbn0gZnJvbSAnLi9jb21wbGV0aW9uJztcbmltcG9ydCB7RGlyZWN0aXZlSW5TY29wZSwgUGlwZUluU2NvcGV9IGZyb20gJy4vc2NvcGUnO1xuaW1wb3J0IHtEaXJlY3RpdmVTeW1ib2wsIEVsZW1lbnRTeW1ib2wsIFNoaW1Mb2NhdGlvbiwgU3ltYm9sLCBUZW1wbGF0ZVN5bWJvbH0gZnJvbSAnLi9zeW1ib2xzJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgdG8gdGhlIEFuZ3VsYXIgVGVtcGxhdGUgVHlwZSBDaGVja2VyIHRvIGV4dHJhY3QgZGlhZ25vc3RpY3MgYW5kIGludGVsbGlnZW5jZSBmcm9tIHRoZVxuICogY29tcGlsZXIncyB1bmRlcnN0YW5kaW5nIG9mIGNvbXBvbmVudCB0ZW1wbGF0ZXMuXG4gKlxuICogVGhpcyBpbnRlcmZhY2UgaXMgYW5hbG9nb3VzIHRvIFR5cGVTY3JpcHQncyBvd24gYHRzLlR5cGVDaGVja2VyYCBBUEkuXG4gKlxuICogSW4gZ2VuZXJhbCwgdGhpcyBpbnRlcmZhY2Ugc3VwcG9ydHMgdHdvIGtpbmRzIG9mIG9wZXJhdGlvbnM6XG4gKiAgLSB1cGRhdGluZyBUeXBlIENoZWNrIEJsb2NrcyAoVENCKXMgdGhhdCBjYXB0dXJlIHRoZSB0ZW1wbGF0ZSBpbiB0aGUgZm9ybSBvZiBUeXBlU2NyaXB0IGNvZGVcbiAqICAtIHF1ZXJ5aW5nIGluZm9ybWF0aW9uIGFib3V0IGF2YWlsYWJsZSBUQ0JzLCBpbmNsdWRpbmcgZGlhZ25vc3RpY3NcbiAqXG4gKiBPbmNlIGEgVENCIGlzIGF2YWlsYWJsZSwgaW5mb3JtYXRpb24gYWJvdXQgaXQgY2FuIGJlIHF1ZXJpZWQuIElmIG5vIFRDQiBpcyBhdmFpbGFibGUgdG8gYW5zd2VyIGFcbiAqIHF1ZXJ5LCBkZXBlbmRpbmcgb24gdGhlIG1ldGhvZCBlaXRoZXIgYG51bGxgIHdpbGwgYmUgcmV0dXJuZWQgb3IgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGVtcGxhdGVUeXBlQ2hlY2tlciB7XG4gIC8qKlxuICAgKiBSZXRyaWV2ZSB0aGUgdGVtcGxhdGUgaW4gdXNlIGZvciB0aGUgZ2l2ZW4gY29tcG9uZW50LlxuICAgKi9cbiAgZ2V0VGVtcGxhdGUoY29tcG9uZW50OiB0cy5DbGFzc0RlY2xhcmF0aW9uKTogVG1wbEFzdE5vZGVbXXxudWxsO1xuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGB0cy5EaWFnbm9zdGljYHMgY3VycmVudGx5IGF2YWlsYWJsZSBmb3IgdGhlIGdpdmVuIGB0cy5Tb3VyY2VGaWxlYC5cbiAgICpcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBmYWlsICh0aHJvdykgaWYgdGhlcmUgYXJlIGNvbXBvbmVudHMgd2l0aGluIHRoZSBgdHMuU291cmNlRmlsZWAgdGhhdCBkbyBub3RcbiAgICogaGF2ZSBUQ0JzIGF2YWlsYWJsZS5cbiAgICpcbiAgICogR2VuZXJhdGluZyBhIHRlbXBsYXRlIHR5cGUtY2hlY2tpbmcgcHJvZ3JhbSBpcyBleHBlbnNpdmUsIGFuZCBpbiBzb21lIHdvcmtmbG93cyAoZS5nLiBjaGVja2luZ1xuICAgKiBhbiBlbnRpcmUgcHJvZ3JhbSBiZWZvcmUgZW1pdCksIGl0IHNob3VsZCBpZGVhbGx5IG9ubHkgYmUgZG9uZSBvbmNlLiBUaGUgYG9wdGltaXplRm9yYCBmbGFnXG4gICAqIGFsbG93cyB0aGUgY2FsbGVyIHRvIGhpbnQgdG8gYGdldERpYWdub3N0aWNzRm9yRmlsZWAgKHdoaWNoIGludGVybmFsbHkgd2lsbCBjcmVhdGUgYSB0ZW1wbGF0ZVxuICAgKiB0eXBlLWNoZWNraW5nIHByb2dyYW0gaWYgbmVlZGVkKSB3aGV0aGVyIHRoZSBjYWxsZXIgaXMgaW50ZXJlc3RlZCBpbiBqdXN0IHRoZSByZXN1bHRzIG9mIHRoZVxuICAgKiBzaW5nbGUgZmlsZSwgb3Igd2hldGhlciB0aGV5IHBsYW4gdG8gcXVlcnkgYWJvdXQgb3RoZXIgZmlsZXMgaW4gdGhlIHByb2dyYW0uIEJhc2VkIG9uIHRoaXNcbiAgICogZmxhZywgYGdldERpYWdub3N0aWNzRm9yRmlsZWAgd2lsbCBkZXRlcm1pbmUgaG93IG11Y2ggb2YgdGhlIHVzZXIncyBwcm9ncmFtIHRvIHByZXBhcmUgZm9yXG4gICAqIGNoZWNraW5nIGFzIHBhcnQgb2YgdGhlIHRlbXBsYXRlIHR5cGUtY2hlY2tpbmcgcHJvZ3JhbSBpdCBjcmVhdGVzLlxuICAgKi9cbiAgZ2V0RGlhZ25vc3RpY3NGb3JGaWxlKHNmOiB0cy5Tb3VyY2VGaWxlLCBvcHRpbWl6ZUZvcjogT3B0aW1pemVGb3IpOiB0cy5EaWFnbm9zdGljW107XG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgYHNoaW1gIGFuZCBwb3NpdGlvbiB3aXRoaW4gdGhlIGZpbGUsIHJldHVybnMgaW5mb3JtYXRpb24gZm9yIG1hcHBpbmcgYmFjayB0byBhIHRlbXBsYXRlXG4gICAqIGxvY2F0aW9uLlxuICAgKi9cbiAgZ2V0VGVtcGxhdGVNYXBwaW5nQXRTaGltTG9jYXRpb24oc2hpbUxvY2F0aW9uOiBTaGltTG9jYXRpb24pOiBGdWxsVGVtcGxhdGVNYXBwaW5nfG51bGw7XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgYHRzLkRpYWdub3N0aWNgcyBjdXJyZW50bHkgYXZhaWxhYmxlIHRoYXQgcGVydGFpbiB0byB0aGUgZ2l2ZW4gY29tcG9uZW50LlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBhbHdheXMgcnVucyBpbiBgT3B0aW1pemVGb3IuU2luZ2xlRmlsZWAgbW9kZS5cbiAgICovXG4gIGdldERpYWdub3N0aWNzRm9yQ29tcG9uZW50KGNvbXBvbmVudDogdHMuQ2xhc3NEZWNsYXJhdGlvbik6IHRzLkRpYWdub3N0aWNbXTtcblxuICAvKipcbiAgICogRW5zdXJlcyBzaGltcyBmb3IgdGhlIHdob2xlIHByb2dyYW0gYXJlIGdlbmVyYXRlZC4gVGhpcyB0eXBlIG9mIG9wZXJhdGlvbiB3b3VsZCBiZSByZXF1aXJlZCBieVxuICAgKiBvcGVyYXRpb25zIGxpa2UgXCJmaW5kIHJlZmVyZW5jZXNcIiBhbmQgXCJyZWZhY3Rvci9yZW5hbWVcIiBiZWNhdXNlIHJlZmVyZW5jZXMgbWF5IGFwcGVhciBpbiB0eXBlXG4gICAqIGNoZWNrIGJsb2NrcyBnZW5lcmF0ZWQgZnJvbSB0ZW1wbGF0ZXMgYW55d2hlcmUgaW4gdGhlIHByb2dyYW0uXG4gICAqL1xuICBnZW5lcmF0ZUFsbFR5cGVDaGVja0Jsb2NrcygpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gZmlsZSBpcyBpbiB0aGUgcmVjb3JkIG9mIGtub3duIHNoaW1zIGdlbmVyYXRlZCBieSB0aGUgY29tcGlsZXIsXG4gICAqIGBmYWxzZWAgaWYgd2UgY2Fubm90IGZpbmQgdGhlIGZpbGUgaW4gdGhlIHNoaW0gcmVjb3Jkcy5cbiAgICovXG4gIGlzVHJhY2tlZFR5cGVDaGVja0ZpbGUoZmlsZVBhdGg6IEFic29sdXRlRnNQYXRoKTogYm9vbGVhbjtcblxuICAvKipcbiAgICogUmV0cmlldmUgdGhlIHRvcC1sZXZlbCBub2RlIHJlcHJlc2VudGluZyB0aGUgVENCIGZvciB0aGUgZ2l2ZW4gY29tcG9uZW50LlxuICAgKlxuICAgKiBUaGlzIGNhbiByZXR1cm4gYG51bGxgIGlmIHRoZXJlIGlzIG5vIFRDQiBhdmFpbGFibGUgZm9yIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGFsd2F5cyBydW5zIGluIGBPcHRpbWl6ZUZvci5TaW5nbGVGaWxlYCBtb2RlLlxuICAgKi9cbiAgZ2V0VHlwZUNoZWNrQmxvY2soY29tcG9uZW50OiB0cy5DbGFzc0RlY2xhcmF0aW9uKTogdHMuTm9kZXxudWxsO1xuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYSBgU3ltYm9sYCBmb3IgdGhlIG5vZGUgaW4gYSBjb21wb25lbnQncyB0ZW1wbGF0ZS5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgY2FuIHJldHVybiBgbnVsbGAgaWYgYSB2YWxpZCBgU3ltYm9sYCBjYW5ub3QgYmUgZGV0ZXJtaW5lZCBmb3IgdGhlIG5vZGUuXG4gICAqXG4gICAqIEBzZWUgU3ltYm9sXG4gICAqL1xuICBnZXRTeW1ib2xPZk5vZGUobm9kZTogVG1wbEFzdEVsZW1lbnQsIGNvbXBvbmVudDogdHMuQ2xhc3NEZWNsYXJhdGlvbik6IEVsZW1lbnRTeW1ib2x8bnVsbDtcbiAgZ2V0U3ltYm9sT2ZOb2RlKG5vZGU6IFRtcGxBc3RUZW1wbGF0ZSwgY29tcG9uZW50OiB0cy5DbGFzc0RlY2xhcmF0aW9uKTogVGVtcGxhdGVTeW1ib2x8bnVsbDtcbiAgZ2V0U3ltYm9sT2ZOb2RlKG5vZGU6IEFTVHxUbXBsQXN0Tm9kZSwgY29tcG9uZW50OiB0cy5DbGFzc0RlY2xhcmF0aW9uKTogU3ltYm9sfG51bGw7XG5cbiAgLyoqXG4gICAqIEdldCBcImdsb2JhbFwiIGBDb21wbGV0aW9uYHMgaW4gdGhlIGdpdmVuIGNvbnRleHQuXG4gICAqXG4gICAqIEdsb2JhbCBjb21wbGV0aW9ucyBhcmUgY29tcGxldGlvbnMgaW4gdGhlIGdsb2JhbCBjb250ZXh0LCBhcyBvcHBvc2VkIHRvIGNvbXBsZXRpb25zIHdpdGhpbiBhblxuICAgKiBleGlzdGluZyBleHByZXNzaW9uLiBGb3IgZXhhbXBsZSwgY29tcGxldGluZyBpbnNpZGUgYSBuZXcgaW50ZXJwb2xhdGlvbiBleHByZXNzaW9uIChge3t8fX1gKSBvclxuICAgKiBpbnNpZGUgYSBuZXcgcHJvcGVydHkgYmluZGluZyBgW2lucHV0XT1cInxcIiBzaG91bGQgcmV0cmlldmUgZ2xvYmFsIGNvbXBsZXRpb25zLCB3aGljaCB3aWxsXG4gICAqIGluY2x1ZGUgY29tcGxldGlvbnMgZnJvbSB0aGUgdGVtcGxhdGUncyBjb250ZXh0IGNvbXBvbmVudCwgYXMgd2VsbCBhcyBhbnkgbG9jYWwgcmVmZXJlbmNlcyBvclxuICAgKiB0ZW1wbGF0ZSB2YXJpYWJsZXMgd2hpY2ggYXJlIGluIHNjb3BlIGZvciB0aGF0IGV4cHJlc3Npb24uXG4gICAqL1xuICBnZXRHbG9iYWxDb21wbGV0aW9ucyhcbiAgICAgIGNvbnRleHQ6IFRtcGxBc3RUZW1wbGF0ZXxudWxsLCBjb21wb25lbnQ6IHRzLkNsYXNzRGVjbGFyYXRpb24sXG4gICAgICBub2RlOiBBU1R8VG1wbEFzdE5vZGUpOiBHbG9iYWxDb21wbGV0aW9ufG51bGw7XG5cblxuICAvKipcbiAgICogRm9yIHRoZSBnaXZlbiBleHByZXNzaW9uIG5vZGUsIHJldHJpZXZlIGEgYFNoaW1Mb2NhdGlvbmAgdGhhdCBjYW4gYmUgdXNlZCB0byBwZXJmb3JtXG4gICAqIGF1dG9jb21wbGV0aW9uIGF0IHRoYXQgcG9pbnQgaW4gdGhlIGV4cHJlc3Npb24sIGlmIHN1Y2ggYSBsb2NhdGlvbiBleGlzdHMuXG4gICAqL1xuICBnZXRFeHByZXNzaW9uQ29tcGxldGlvbkxvY2F0aW9uKFxuICAgICAgZXhwcjogUHJvcGVydHlSZWFkfFNhZmVQcm9wZXJ0eVJlYWR8TWV0aG9kQ2FsbHxTYWZlTWV0aG9kQ2FsbCxcbiAgICAgIGNvbXBvbmVudDogdHMuQ2xhc3NEZWNsYXJhdGlvbik6IFNoaW1Mb2NhdGlvbnxudWxsO1xuXG4gIC8qKlxuICAgKiBGb3IgdGhlIGdpdmVuIG5vZGUgcmVwcmVzZW50cyBhIGBMaXRlcmFsUHJpbWl0aXZlYCh0aGUgYFRleHRBdHRyaWJ1dGVgIHJlcHJlc2VudHMgYSBzdHJpbmdcbiAgICogbGl0ZXJhbCksIHJldHJpZXZlIGEgYFNoaW1Mb2NhdGlvbmAgdGhhdCBjYW4gYmUgdXNlZCB0byBwZXJmb3JtIGF1dG9jb21wbGV0aW9uIGF0IHRoYXQgcG9pbnQgaW5cbiAgICogdGhlIG5vZGUsIGlmIHN1Y2ggYSBsb2NhdGlvbiBleGlzdHMuXG4gICAqL1xuICBnZXRMaXRlcmFsQ29tcGxldGlvbkxvY2F0aW9uKFxuICAgICAgc3RyTm9kZTogTGl0ZXJhbFByaW1pdGl2ZXxUZXh0QXR0cmlidXRlLCBjb21wb25lbnQ6IHRzLkNsYXNzRGVjbGFyYXRpb24pOiBTaGltTG9jYXRpb258bnVsbDtcblxuICAvKipcbiAgICogR2V0IGJhc2ljIG1ldGFkYXRhIG9uIHRoZSBkaXJlY3RpdmVzIHdoaWNoIGFyZSBpbiBzY29wZSBmb3IgdGhlIGdpdmVuIGNvbXBvbmVudC5cbiAgICovXG4gIGdldERpcmVjdGl2ZXNJblNjb3BlKGNvbXBvbmVudDogdHMuQ2xhc3NEZWNsYXJhdGlvbik6IERpcmVjdGl2ZUluU2NvcGVbXXxudWxsO1xuXG4gIC8qKlxuICAgKiBHZXQgYmFzaWMgbWV0YWRhdGEgb24gdGhlIHBpcGVzIHdoaWNoIGFyZSBpbiBzY29wZSBmb3IgdGhlIGdpdmVuIGNvbXBvbmVudC5cbiAgICovXG4gIGdldFBpcGVzSW5TY29wZShjb21wb25lbnQ6IHRzLkNsYXNzRGVjbGFyYXRpb24pOiBQaXBlSW5TY29wZVtdfG51bGw7XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGEgYE1hcGAgb2YgcG90ZW50aWFsIHRlbXBsYXRlIGVsZW1lbnQgdGFncywgdG8gZWl0aGVyIHRoZSBgRGlyZWN0aXZlSW5TY29wZWAgdGhhdFxuICAgKiBkZWNsYXJlcyB0aGVtIChpZiB0aGUgdGFnIGlzIGZyb20gYSBkaXJlY3RpdmUvY29tcG9uZW50KSwgb3IgYG51bGxgIGlmIHRoZSB0YWcgb3JpZ2luYXRlcyBmcm9tXG4gICAqIHRoZSBET00gc2NoZW1hLlxuICAgKi9cbiAgZ2V0UG90ZW50aWFsRWxlbWVudFRhZ3MoY29tcG9uZW50OiB0cy5DbGFzc0RlY2xhcmF0aW9uKTogTWFwPHN0cmluZywgRGlyZWN0aXZlSW5TY29wZXxudWxsPjtcblxuICAvKipcbiAgICogUmV0cmlldmUgYW55IHBvdGVudGlhbCBET00gYmluZGluZ3MgZm9yIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKlxuICAgKiBUaGlzIHJldHVybnMgYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aGljaCBsaXN0IGJvdGggdGhlIGF0dHJpYnV0ZSBhbmQgcHJvcGVydHkgbmFtZXMgb2YgZWFjaFxuICAgKiBiaW5kaW5nLCB3aGljaCBhcmUgdXN1YWxseSBpZGVudGljYWwgYnV0IGNhbiB2YXJ5IGlmIHRoZSBIVE1MIGF0dHJpYnV0ZSBuYW1lIGlzIGZvciBleGFtcGxlIGFcbiAgICogcmVzZXJ2ZWQga2V5d29yZCBpbiBKUywgbGlrZSB0aGUgYGZvcmAgYXR0cmlidXRlIHdoaWNoIGNvcnJlc3BvbmRzIHRvIHRoZSBgaHRtbEZvcmAgcHJvcGVydHkuXG4gICAqL1xuICBnZXRQb3RlbnRpYWxEb21CaW5kaW5ncyh0YWdOYW1lOiBzdHJpbmcpOiB7YXR0cmlidXRlOiBzdHJpbmcsIHByb3BlcnR5OiBzdHJpbmd9W107XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIHRoZSB0eXBlIGNoZWNraW5nIGVuZ2luZSdzIG1ldGFkYXRhIGZvciB0aGUgZ2l2ZW4gZGlyZWN0aXZlIGNsYXNzLCBpZiBhdmFpbGFibGUuXG4gICAqL1xuICBnZXREaXJlY3RpdmVNZXRhZGF0YShkaXI6IHRzLkNsYXNzRGVjbGFyYXRpb24pOiBUeXBlQ2hlY2thYmxlRGlyZWN0aXZlTWV0YXxudWxsO1xuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgYFRlbXBsYXRlVHlwZUNoZWNrZXJgJ3Mgc3RhdGUgZm9yIHRoZSBnaXZlbiBjbGFzcywgc28gdGhhdCBpdCB3aWxsIGJlIHJlY29tcHV0ZWQgb25cbiAgICogdGhlIG5leHQgcmVxdWVzdC5cbiAgICovXG4gIGludmFsaWRhdGVDbGFzcyhjbGF6ejogdHMuQ2xhc3NEZWNsYXJhdGlvbik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdHMgYSBgdHMuRGlhZ25vc3RpY2AgZm9yIGEgZ2l2ZW4gYFBhcnNlU291cmNlU3BhbmAgd2l0aGluIGEgdGVtcGxhdGUuXG4gICAqL1xuICBtYWtlVGVtcGxhdGVEaWFnbm9zdGljPFQgZXh0ZW5kcyBFcnJvckNvZGU+KFxuICAgICAgY2xheno6IHRzLkNsYXNzRGVjbGFyYXRpb24sIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbiwgY2F0ZWdvcnk6IHRzLkRpYWdub3N0aWNDYXRlZ29yeSxcbiAgICAgIGVycm9yQ29kZTogVCwgbWVzc2FnZTogc3RyaW5nLCByZWxhdGVkSW5mb3JtYXRpb24/OiB7XG4gICAgICAgIHRleHQ6IHN0cmluZyxcbiAgICAgICAgc3RhcnQ6IG51bWJlcixcbiAgICAgICAgZW5kOiBudW1iZXIsXG4gICAgICAgIHNvdXJjZUZpbGU6IHRzLlNvdXJjZUZpbGUsXG4gICAgICB9W10pOiBOZ1RlbXBsYXRlRGlhZ25vc3RpYzxUPjtcbn1cblxuLyoqXG4gKiBEZXNjcmliZXMgdGhlIHNjb3BlIG9mIHRoZSBjYWxsZXIncyBpbnRlcmVzdCBpbiB0ZW1wbGF0ZSB0eXBlLWNoZWNraW5nIHJlc3VsdHMuXG4gKi9cbmV4cG9ydCBlbnVtIE9wdGltaXplRm9yIHtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IGEgY29uc3VtZXIgb2YgYSBgVGVtcGxhdGVUeXBlQ2hlY2tlcmAgaXMgb25seSBpbnRlcmVzdGVkIGluIHJlc3VsdHMgZm9yIGEgZ2l2ZW5cbiAgICogZmlsZSwgYW5kIHdhbnRzIHRoZW0gYXMgZmFzdCBhcyBwb3NzaWJsZS5cbiAgICpcbiAgICogQ2FsbGluZyBgVGVtcGxhdGVUeXBlQ2hlY2tlcmAgbWV0aG9kcyBzdWNjZXNzaXZlbHkgZm9yIG11bHRpcGxlIGZpbGVzIHdoaWxlIHNwZWNpZnlpbmdcbiAgICogYE9wdGltaXplRm9yLlNpbmdsZUZpbGVgIGNhbiByZXN1bHQgaW4gc2lnbmlmaWNhbnQgdW5uZWNlc3Nhcnkgb3ZlcmhlYWQgb3ZlcmFsbC5cbiAgICovXG4gIFNpbmdsZUZpbGUsXG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IGEgY29uc3VtZXIgb2YgYSBgVGVtcGxhdGVUeXBlQ2hlY2tlcmAgaW50ZW5kcyB0byBxdWVyeSBmb3IgcmVzdWx0cyBwZXJ0YWluaW5nIHRvXG4gICAqIHRoZSBlbnRpcmUgdXNlciBwcm9ncmFtLCBhbmQgc28gdGhlIHR5cGUtY2hlY2tlciBzaG91bGQgaW50ZXJuYWxseSBvcHRpbWl6ZSBmb3IgdGhpcyBjYXNlLlxuICAgKlxuICAgKiBJbml0aWFsIGNhbGxzIHRvIHJldHJpZXZlIHR5cGUtY2hlY2tpbmcgaW5mb3JtYXRpb24gbWF5IHRha2UgbG9uZ2VyLCBidXQgcmVwZWF0ZWQgY2FsbHMgdG9cbiAgICogZ2F0aGVyIGluZm9ybWF0aW9uIGZvciB0aGUgd2hvbGUgdXNlciBwcm9ncmFtIHdpbGwgYmUgc2lnbmlmaWNhbnRseSBmYXN0ZXIgd2l0aCB0aGlzIG1vZGUgb2ZcbiAgICogb3B0aW1pemF0aW9uLlxuICAgKi9cbiAgV2hvbGVQcm9ncmFtLFxufVxuIl19