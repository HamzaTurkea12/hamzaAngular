/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/common/locales/fy", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY.
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
        if (i === 1 && v === 0)
            return 1;
        return 5;
    }
    exports.default = ["fy", [["AM", "PM"], u, u], u, [["S", "M", "T", "W", "T", "F", "S"], ["si", "mo", "ti", "wo", "to", "fr", "so"], ["snein", "moandei", "tiisdei", "woansdei", "tongersdei", "freed", "sneon"], ["si", "mo", "ti", "wo", "to", "fr", "so"]], u, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mrt", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"], ["Jannewaris", "Febrewaris", "Maart", "April", "Maaie", "Juny", "July", "Augustus", "Septimber", "Oktober", "Novimber", "Desimber"]], u, [["f.K.", "n.K."], ["f.Kr.", "n.Kr."], ["Foar Kristus", "nei Kristus"]], 1, [6, 0], ["dd-MM-yy", "d MMM y", "d MMMM y", "EEEE d MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", u, "{1} 'om' {0}", u], [",", ".", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0%", "¤ #,##0.00;¤ #,##0.00-", "#E0"], "EUR", "€", "Euro", { "AUD": ["AU$", "$"], "CAD": ["C$", "$"], "FJD": ["FJ$", "$"], "JPY": ["JP¥", "¥"], "SBD": ["SI$", "$"], "THB": ["฿"], "USD": ["US$", "$"], "XPF": [] }, "ltr", plural];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9meS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILDBDQUEwQztJQUMxQyxJQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7SUFFcEIsU0FBUyxNQUFNLENBQUMsQ0FBUztRQUN6QixJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBRXBGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNsQixPQUFPLENBQUMsQ0FBQztRQUNiLE9BQU8sQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVELGtCQUFlLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsRUFBQyxDQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxZQUFZLEVBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxVQUFVLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxFQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsY0FBYyxFQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxlQUFlLENBQUMsRUFBQyxDQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsRUFBQyxDQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsSUFBSSxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsRUFBRSxFQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZLlxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG5jb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLmFicyhuKSksIHYgPSBuLnRvU3RyaW5nKCkucmVwbGFjZSgvXlteLl0qXFwuPy8sICcnKS5sZW5ndGg7XG5cbmlmIChpID09PSAxICYmIHYgPT09IDApXG4gICAgcmV0dXJuIDE7XG5yZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1wiZnlcIixbW1wiQU1cIixcIlBNXCJdLHUsdV0sdSxbW1wiU1wiLFwiTVwiLFwiVFwiLFwiV1wiLFwiVFwiLFwiRlwiLFwiU1wiXSxbXCJzaVwiLFwibW9cIixcInRpXCIsXCJ3b1wiLFwidG9cIixcImZyXCIsXCJzb1wiXSxbXCJzbmVpblwiLFwibW9hbmRlaVwiLFwidGlpc2RlaVwiLFwid29hbnNkZWlcIixcInRvbmdlcnNkZWlcIixcImZyZWVkXCIsXCJzbmVvblwiXSxbXCJzaVwiLFwibW9cIixcInRpXCIsXCJ3b1wiLFwidG9cIixcImZyXCIsXCJzb1wiXV0sdSxbW1wiSlwiLFwiRlwiLFwiTVwiLFwiQVwiLFwiTVwiLFwiSlwiLFwiSlwiLFwiQVwiLFwiU1wiLFwiT1wiLFwiTlwiLFwiRFwiXSxbXCJKYW5cIixcIkZlYlwiLFwiTXJ0XCIsXCJBcHJcIixcIk1haVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPa3RcIixcIk5vdlwiLFwiRGVzXCJdLFtcIkphbm5ld2FyaXNcIixcIkZlYnJld2FyaXNcIixcIk1hYXJ0XCIsXCJBcHJpbFwiLFwiTWFhaWVcIixcIkp1bnlcIixcIkp1bHlcIixcIkF1Z3VzdHVzXCIsXCJTZXB0aW1iZXJcIixcIk9rdG9iZXJcIixcIk5vdmltYmVyXCIsXCJEZXNpbWJlclwiXV0sdSxbW1wiZi5LLlwiLFwibi5LLlwiXSxbXCJmLktyLlwiLFwibi5Lci5cIl0sW1wiRm9hciBLcmlzdHVzXCIsXCJuZWkgS3Jpc3R1c1wiXV0sMSxbNiwwXSxbXCJkZC1NTS15eVwiLFwiZCBNTU0geVwiLFwiZCBNTU1NIHlcIixcIkVFRUUgZCBNTU1NIHlcIl0sW1wiSEg6bW1cIixcIkhIOm1tOnNzXCIsXCJISDptbTpzcyB6XCIsXCJISDptbTpzcyB6enp6XCJdLFtcInsxfSB7MH1cIix1LFwiezF9ICdvbScgezB9XCIsdV0sW1wiLFwiLFwiLlwiLFwiO1wiLFwiJVwiLFwiK1wiLFwiLVwiLFwiRVwiLFwiw5dcIixcIuKAsFwiLFwi4oieXCIsXCJOYU5cIixcIjpcIl0sW1wiIywjIzAuIyMjXCIsXCIjLCMjMCVcIixcIsKkwqAjLCMjMC4wMDvCpMKgIywjIzAuMDAtXCIsXCIjRTBcIl0sXCJFVVJcIixcIuKCrFwiLFwiRXVyb1wiLHtcIkFVRFwiOltcIkFVJFwiLFwiJFwiXSxcIkNBRFwiOltcIkMkXCIsXCIkXCJdLFwiRkpEXCI6W1wiRkokXCIsXCIkXCJdLFwiSlBZXCI6W1wiSlDCpVwiLFwiwqVcIl0sXCJTQkRcIjpbXCJTSSRcIixcIiRcIl0sXCJUSEJcIjpbXCLguL9cIl0sXCJVU0RcIjpbXCJVUyRcIixcIiRcIl0sXCJYUEZcIjpbXX0sXCJsdHJcIiwgcGx1cmFsXTtcbiJdfQ==