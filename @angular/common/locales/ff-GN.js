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
        define("@angular/common/locales/ff-GN", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // **Note**: Locale files are generated through Bazel and never part of the sources. This is an
    // exception for backwards compatibility. With the Gulp setup we never deleted old locale files
    // when updating CLDR, so older locale files which have been removed, or renamed in the CLDR
    // data remained in the repository. We keep these files checked-in until the next major to avoid
    // potential breaking changes. It's worth noting that the locale data for such files is outdated
    // anyway. e.g. the data is missing the directionality, throwing off the indices.
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n));
        if (i === 0 || i === 1)
            return 1;
        return 5;
    }
    exports.default = [
        'ff-GN', [['subaka', 'kikiiɗe'], u, u], u,
        [
            ['d', 'a', 'm', 'n', 'n', 'm', 'h'], ['dew', 'aaɓ', 'maw', 'nje', 'naa', 'mwd', 'hbi'],
            ['dewo', 'aaɓnde', 'mawbaare', 'njeslaare', 'naasaande', 'mawnde', 'hoore-biir'],
            ['dew', 'aaɓ', 'maw', 'nje', 'naa', 'mwd', 'hbi']
        ],
        u,
        [
            ['s', 'c', 'm', 's', 'd', 'k', 'm', 'j', 's', 'y', 'j', 'b'],
            ['sii', 'col', 'mbo', 'see', 'duu', 'kor', 'mor', 'juk', 'slt', 'yar', 'jol', 'bow'],
            [
                'siilo', 'colte', 'mbooy', 'seeɗto', 'duujal', 'korse', 'morso', 'juko', 'siilto', 'yarkomaa',
                'jolal', 'bowte'
            ]
        ],
        u, [['H-I', 'C-I'], u, ['Hade Iisa', 'Caggal Iisa']], 1, [6, 0],
        ['d/M/y', 'd MMM, y', 'd MMMM y', 'EEEE d MMMM y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'], ['{1} {0}', u, u, u],
        [',', ' ', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'], 'FG', 'GNF',
        { 'GNF': ['FG'], 'JPY': ['JP¥', '¥'], 'USD': ['US$', '$'] }, plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmYtR04uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9mZi1HTi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILCtGQUErRjtJQUMvRiwrRkFBK0Y7SUFDL0YsNEZBQTRGO0lBQzVGLGdHQUFnRztJQUNoRyxnR0FBZ0c7SUFDaEcsaUZBQWlGO0lBRWpGLElBQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUVwQixTQUFTLE1BQU0sQ0FBQyxDQUFTO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtCQUFlO1FBQ2IsT0FBTyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDekM7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3RGLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDO1lBQ2hGLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1NBQ2xEO1FBQ0QsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUM1RCxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3BGO2dCQUNFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVU7Z0JBQzdGLE9BQU8sRUFBRSxPQUFPO2FBQ2pCO1NBQ0Y7UUFDRCxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsZUFBZSxDQUFDO1FBQ2xELENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQztRQUM5RCxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQ3pELEVBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBQyxFQUFFLE1BQU07S0FDbEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyAqKk5vdGUqKjogTG9jYWxlIGZpbGVzIGFyZSBnZW5lcmF0ZWQgdGhyb3VnaCBCYXplbCBhbmQgbmV2ZXIgcGFydCBvZiB0aGUgc291cmNlcy4gVGhpcyBpcyBhblxuLy8gZXhjZXB0aW9uIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gV2l0aCB0aGUgR3VscCBzZXR1cCB3ZSBuZXZlciBkZWxldGVkIG9sZCBsb2NhbGUgZmlsZXNcbi8vIHdoZW4gdXBkYXRpbmcgQ0xEUiwgc28gb2xkZXIgbG9jYWxlIGZpbGVzIHdoaWNoIGhhdmUgYmVlbiByZW1vdmVkLCBvciByZW5hbWVkIGluIHRoZSBDTERSXG4vLyBkYXRhIHJlbWFpbmVkIGluIHRoZSByZXBvc2l0b3J5LiBXZSBrZWVwIHRoZXNlIGZpbGVzIGNoZWNrZWQtaW4gdW50aWwgdGhlIG5leHQgbWFqb3IgdG8gYXZvaWRcbi8vIHBvdGVudGlhbCBicmVha2luZyBjaGFuZ2VzLiBJdCdzIHdvcnRoIG5vdGluZyB0aGF0IHRoZSBsb2NhbGUgZGF0YSBmb3Igc3VjaCBmaWxlcyBpcyBvdXRkYXRlZFxuLy8gYW55d2F5LiBlLmcuIHRoZSBkYXRhIGlzIG1pc3NpbmcgdGhlIGRpcmVjdGlvbmFsaXR5LCB0aHJvd2luZyBvZmYgdGhlIGluZGljZXMuXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgaSA9IE1hdGguZmxvb3IoTWF0aC5hYnMobikpO1xuICBpZiAoaSA9PT0gMCB8fCBpID09PSAxKSByZXR1cm4gMTtcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ2ZmLUdOJywgW1snc3ViYWthJywgJ2tpa2lpyZdlJ10sIHUsIHVdLCB1LFxuICBbXG4gICAgWydkJywgJ2EnLCAnbScsICduJywgJ24nLCAnbScsICdoJ10sIFsnZGV3JywgJ2FhyZMnLCAnbWF3JywgJ25qZScsICduYWEnLCAnbXdkJywgJ2hiaSddLFxuICAgIFsnZGV3bycsICdhYcmTbmRlJywgJ21hd2JhYXJlJywgJ25qZXNsYWFyZScsICduYWFzYWFuZGUnLCAnbWF3bmRlJywgJ2hvb3JlLWJpaXInXSxcbiAgICBbJ2RldycsICdhYcmTJywgJ21hdycsICduamUnLCAnbmFhJywgJ213ZCcsICdoYmknXVxuICBdLFxuICB1LFxuICBbXG4gICAgWydzJywgJ2MnLCAnbScsICdzJywgJ2QnLCAnaycsICdtJywgJ2onLCAncycsICd5JywgJ2onLCAnYiddLFxuICAgIFsnc2lpJywgJ2NvbCcsICdtYm8nLCAnc2VlJywgJ2R1dScsICdrb3InLCAnbW9yJywgJ2p1aycsICdzbHQnLCAneWFyJywgJ2pvbCcsICdib3cnXSxcbiAgICBbXG4gICAgICAnc2lpbG8nLCAnY29sdGUnLCAnbWJvb3knLCAnc2VlyZd0bycsICdkdXVqYWwnLCAna29yc2UnLCAnbW9yc28nLCAnanVrbycsICdzaWlsdG8nLCAneWFya29tYWEnLFxuICAgICAgJ2pvbGFsJywgJ2Jvd3RlJ1xuICAgIF1cbiAgXSxcbiAgdSwgW1snSC1JJywgJ0MtSSddLCB1LCBbJ0hhZGUgSWlzYScsICdDYWdnYWwgSWlzYSddXSwgMSwgWzYsIDBdLFxuICBbJ2QvTS95JywgJ2QgTU1NLCB5JywgJ2QgTU1NTSB5JywgJ0VFRUUgZCBNTU1NIHknXSxcbiAgWydISDptbScsICdISDptbTpzcycsICdISDptbTpzcyB6JywgJ0hIOm1tOnNzIHp6enonXSwgWyd7MX0gezB9JywgdSwgdSwgdV0sXG4gIFsnLCcsICfCoCcsICc7JywgJyUnLCAnKycsICctJywgJ0UnLCAnw5cnLCAn4oCwJywgJ+KInicsICdOYU4nLCAnOiddLFxuICBbJyMsIyMwLiMjIycsICcjLCMjMCUnLCAnIywjIzAuMDDCoMKkJywgJyNFMCddLCAnRkcnLCAnR05GJyxcbiAgeydHTkYnOiBbJ0ZHJ10sICdKUFknOiBbJ0pQwqUnLCAnwqUnXSwgJ1VTRCc6IFsnVVMkJywgJyQnXX0sIHBsdXJhbFxuXTtcbiJdfQ==