/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { makeDecorator } from '../util/decorators';
import { getInjectableDef, ɵɵdefineInjectable } from './interface/defs';
import { compileInjectable as render3CompileInjectable } from './jit/injectable';
import { convertInjectableProviderToFactory } from './util';
const ɵ0 = (type, meta) => SWITCH_COMPILE_INJECTABLE(type, meta);
/**
 * Injectable decorator and metadata.
 *
 * @Annotation
 * @publicApi
 */
export const Injectable = makeDecorator('Injectable', undefined, undefined, undefined, ɵ0);
/**
 * Supports @Injectable() in JIT mode for Render2.
 */
function render2CompileInjectable(injectableType, options) {
    if (options && options.providedIn !== undefined && !getInjectableDef(injectableType)) {
        injectableType.ɵprov = ɵɵdefineInjectable({
            token: injectableType,
            providedIn: options.providedIn,
            factory: convertInjectableProviderToFactory(injectableType, options),
        });
    }
}
export const SWITCH_COMPILE_INJECTABLE__POST_R3__ = render3CompileInjectable;
const SWITCH_COMPILE_INJECTABLE__PRE_R3__ = render2CompileInjectable;
const SWITCH_COMPILE_INJECTABLE = SWITCH_COMPILE_INJECTABLE__PRE_R3__;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2RpL2luamVjdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBR0gsT0FBTyxFQUFDLGFBQWEsRUFBZ0IsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQWtCLGtCQUFrQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFdEYsT0FBTyxFQUFDLGlCQUFpQixJQUFJLHdCQUF3QixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0UsT0FBTyxFQUFDLGtDQUFrQyxFQUFDLE1BQU0sUUFBUSxDQUFDO1dBK0V0RCxDQUFDLElBQWUsRUFBRSxJQUFnQixFQUFFLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFXLEVBQUUsSUFBSSxDQUFDO0FBUnZGOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUF3QixhQUFhLENBQ3hELFlBQVksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsS0FDdUMsQ0FBQztBQUd6Rjs7R0FFRztBQUNILFNBQVMsd0JBQXdCLENBQzdCLGNBQXlCLEVBQ3pCLE9BQWtGO0lBQ3BGLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLEVBQUU7UUFDbkYsY0FBc0MsQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUM7WUFDakUsS0FBSyxFQUFFLGNBQWM7WUFDckIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVO1lBQzlCLE9BQU8sRUFBRSxrQ0FBa0MsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDO1NBQ3JFLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLG9DQUFvQyxHQUFHLHdCQUF3QixDQUFDO0FBQzdFLE1BQU0sbUNBQW1DLEdBQUcsd0JBQXdCLENBQUM7QUFDckUsTUFBTSx5QkFBeUIsR0FDM0IsbUNBQW1DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtUeXBlfSBmcm9tICcuLi9pbnRlcmZhY2UvdHlwZSc7XG5pbXBvcnQge21ha2VEZWNvcmF0b3IsIFR5cGVEZWNvcmF0b3J9IGZyb20gJy4uL3V0aWwvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7Z2V0SW5qZWN0YWJsZURlZiwgSW5qZWN0YWJsZVR5cGUsIMm1ybVkZWZpbmVJbmplY3RhYmxlfSBmcm9tICcuL2ludGVyZmFjZS9kZWZzJztcbmltcG9ydCB7Q2xhc3NTYW5zUHJvdmlkZXIsIENvbnN0cnVjdG9yU2Fuc1Byb3ZpZGVyLCBFeGlzdGluZ1NhbnNQcm92aWRlciwgRmFjdG9yeVNhbnNQcm92aWRlciwgU3RhdGljQ2xhc3NTYW5zUHJvdmlkZXIsIFZhbHVlU2Fuc1Byb3ZpZGVyfSBmcm9tICcuL2ludGVyZmFjZS9wcm92aWRlcic7XG5pbXBvcnQge2NvbXBpbGVJbmplY3RhYmxlIGFzIHJlbmRlcjNDb21waWxlSW5qZWN0YWJsZX0gZnJvbSAnLi9qaXQvaW5qZWN0YWJsZSc7XG5pbXBvcnQge2NvbnZlcnRJbmplY3RhYmxlUHJvdmlkZXJUb0ZhY3Rvcnl9IGZyb20gJy4vdXRpbCc7XG5cblxuXG4vKipcbiAqIEluamVjdGFibGUgcHJvdmlkZXJzIHVzZWQgaW4gYEBJbmplY3RhYmxlYCBkZWNvcmF0b3IuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgdHlwZSBJbmplY3RhYmxlUHJvdmlkZXIgPSBWYWx1ZVNhbnNQcm92aWRlcnxFeGlzdGluZ1NhbnNQcm92aWRlcnxTdGF0aWNDbGFzc1NhbnNQcm92aWRlcnxcbiAgICBDb25zdHJ1Y3RvclNhbnNQcm92aWRlcnxGYWN0b3J5U2Fuc1Byb3ZpZGVyfENsYXNzU2Fuc1Byb3ZpZGVyO1xuXG4vKipcbiAqIFR5cGUgb2YgdGhlIEluamVjdGFibGUgZGVjb3JhdG9yIC8gY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluamVjdGFibGVEZWNvcmF0b3Ige1xuICAvKipcbiAgICogRGVjb3JhdG9yIHRoYXQgbWFya3MgYSBjbGFzcyBhcyBhdmFpbGFibGUgdG8gYmVcbiAgICogcHJvdmlkZWQgYW5kIGluamVjdGVkIGFzIGEgZGVwZW5kZW5jeS5cbiAgICpcbiAgICogQHNlZSBbSW50cm9kdWN0aW9uIHRvIFNlcnZpY2VzIGFuZCBESV0oZ3VpZGUvYXJjaGl0ZWN0dXJlLXNlcnZpY2VzKVxuICAgKiBAc2VlIFtEZXBlbmRlbmN5IEluamVjdGlvbiBHdWlkZV0oZ3VpZGUvZGVwZW5kZW5jeS1pbmplY3Rpb24pXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqXG4gICAqIE1hcmtpbmcgYSBjbGFzcyB3aXRoIGBASW5qZWN0YWJsZWAgZW5zdXJlcyB0aGF0IHRoZSBjb21waWxlclxuICAgKiB3aWxsIGdlbmVyYXRlIHRoZSBuZWNlc3NhcnkgbWV0YWRhdGEgdG8gY3JlYXRlIHRoZSBjbGFzcydzXG4gICAqIGRlcGVuZGVuY2llcyB3aGVuIHRoZSBjbGFzcyBpcyBpbmplY3RlZC5cbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBleGFtcGxlIHNob3dzIGhvdyBhIHNlcnZpY2UgY2xhc3MgaXMgcHJvcGVybHlcbiAgICogIG1hcmtlZCBzbyB0aGF0IGEgc3VwcG9ydGluZyBzZXJ2aWNlIGNhbiBiZSBpbmplY3RlZCB1cG9uIGNyZWF0aW9uLlxuICAgKlxuICAgKiA8Y29kZS1leGFtcGxlIHBhdGg9XCJjb3JlL2RpL3RzL21ldGFkYXRhX3NwZWMudHNcIiByZWdpb249XCJJbmplY3RhYmxlXCI+PC9jb2RlLWV4YW1wbGU+XG4gICAqXG4gICAqL1xuICAoKTogVHlwZURlY29yYXRvcjtcbiAgKG9wdGlvbnM/OiB7cHJvdmlkZWRJbjogVHlwZTxhbnk+fCdyb290J3wncGxhdGZvcm0nfCdhbnknfG51bGx9JlxuICAgSW5qZWN0YWJsZVByb3ZpZGVyKTogVHlwZURlY29yYXRvcjtcbiAgbmV3KCk6IEluamVjdGFibGU7XG4gIG5ldyhvcHRpb25zPzoge3Byb3ZpZGVkSW46IFR5cGU8YW55Pnwncm9vdCd8J3BsYXRmb3JtJ3wnYW55J3xudWxsfSZcbiAgICAgIEluamVjdGFibGVQcm92aWRlcik6IEluamVjdGFibGU7XG59XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgSW5qZWN0YWJsZSBtZXRhZGF0YS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5qZWN0YWJsZSB7XG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoaWNoIGluamVjdG9ycyB3aWxsIHByb3ZpZGUgdGhlIGluamVjdGFibGUuXG4gICAqXG4gICAqIC0gYFR5cGU8YW55PmAgLSBhc3NvY2lhdGVzIHRoZSBpbmplY3RhYmxlIHdpdGggYW4gYEBOZ01vZHVsZWAgb3Igb3RoZXIgYEluamVjdG9yVHlwZWAsXG4gICAqIC0gJ251bGwnIDogRXF1aXZhbGVudCB0byBgdW5kZWZpbmVkYC4gVGhlIGluamVjdGFibGUgaXMgbm90IHByb3ZpZGVkIGluIGFueSBzY29wZSBhdXRvbWF0aWNhbGx5XG4gICAqIGFuZCBtdXN0IGJlIGFkZGVkIHRvIGEgYHByb3ZpZGVyc2AgYXJyYXkgb2YgYW4gW0BOZ01vZHVsZV0oYXBpL2NvcmUvTmdNb2R1bGUjcHJvdmlkZXJzKSxcbiAgICogW0BDb21wb25lbnRdKGFwaS9jb3JlL0RpcmVjdGl2ZSNwcm92aWRlcnMpIG9yIFtARGlyZWN0aXZlXShhcGkvY29yZS9EaXJlY3RpdmUjcHJvdmlkZXJzKS5cbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBvcHRpb25zIHNwZWNpZnkgdGhhdCB0aGlzIGluamVjdGFibGUgc2hvdWxkIGJlIHByb3ZpZGVkIGluIG9uZSBvZiB0aGUgZm9sbG93aW5nXG4gICAqIGluamVjdG9yczpcbiAgICogLSAncm9vdCcgOiBUaGUgYXBwbGljYXRpb24tbGV2ZWwgaW5qZWN0b3IgaW4gbW9zdCBhcHBzLlxuICAgKiAtICdwbGF0Zm9ybScgOiBBIHNwZWNpYWwgc2luZ2xldG9uIHBsYXRmb3JtIGluamVjdG9yIHNoYXJlZCBieSBhbGxcbiAgICogYXBwbGljYXRpb25zIG9uIHRoZSBwYWdlLlxuICAgKiAtICdhbnknIDogUHJvdmlkZXMgYSB1bmlxdWUgaW5zdGFuY2UgaW4gZWFjaCBsYXp5IGxvYWRlZCBtb2R1bGUgd2hpbGUgYWxsIGVhZ2VybHkgbG9hZGVkXG4gICAqIG1vZHVsZXMgc2hhcmUgb25lIGluc3RhbmNlLlxuICAgKlxuICAgKi9cbiAgcHJvdmlkZWRJbj86IFR5cGU8YW55Pnwncm9vdCd8J3BsYXRmb3JtJ3wnYW55J3xudWxsO1xufVxuXG4vKipcbiAqIEluamVjdGFibGUgZGVjb3JhdG9yIGFuZCBtZXRhZGF0YS5cbiAqXG4gKiBAQW5ub3RhdGlvblxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgSW5qZWN0YWJsZTogSW5qZWN0YWJsZURlY29yYXRvciA9IG1ha2VEZWNvcmF0b3IoXG4gICAgJ0luamVjdGFibGUnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLFxuICAgICh0eXBlOiBUeXBlPGFueT4sIG1ldGE6IEluamVjdGFibGUpID0+IFNXSVRDSF9DT01QSUxFX0lOSkVDVEFCTEUodHlwZSBhcyBhbnksIG1ldGEpKTtcblxuXG4vKipcbiAqIFN1cHBvcnRzIEBJbmplY3RhYmxlKCkgaW4gSklUIG1vZGUgZm9yIFJlbmRlcjIuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlcjJDb21waWxlSW5qZWN0YWJsZShcbiAgICBpbmplY3RhYmxlVHlwZTogVHlwZTxhbnk+LFxuICAgIG9wdGlvbnM/OiB7cHJvdmlkZWRJbj86IFR5cGU8YW55Pnwncm9vdCd8J3BsYXRmb3JtJ3wnYW55J3xudWxsfSZJbmplY3RhYmxlUHJvdmlkZXIpOiB2b2lkIHtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5wcm92aWRlZEluICE9PSB1bmRlZmluZWQgJiYgIWdldEluamVjdGFibGVEZWYoaW5qZWN0YWJsZVR5cGUpKSB7XG4gICAgKGluamVjdGFibGVUeXBlIGFzIEluamVjdGFibGVUeXBlPGFueT4pLsm1cHJvdiA9IMm1ybVkZWZpbmVJbmplY3RhYmxlKHtcbiAgICAgIHRva2VuOiBpbmplY3RhYmxlVHlwZSxcbiAgICAgIHByb3ZpZGVkSW46IG9wdGlvbnMucHJvdmlkZWRJbixcbiAgICAgIGZhY3Rvcnk6IGNvbnZlcnRJbmplY3RhYmxlUHJvdmlkZXJUb0ZhY3RvcnkoaW5qZWN0YWJsZVR5cGUsIG9wdGlvbnMpLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBTV0lUQ0hfQ09NUElMRV9JTkpFQ1RBQkxFX19QT1NUX1IzX18gPSByZW5kZXIzQ29tcGlsZUluamVjdGFibGU7XG5jb25zdCBTV0lUQ0hfQ09NUElMRV9JTkpFQ1RBQkxFX19QUkVfUjNfXyA9IHJlbmRlcjJDb21waWxlSW5qZWN0YWJsZTtcbmNvbnN0IFNXSVRDSF9DT01QSUxFX0lOSkVDVEFCTEU6IHR5cGVvZiByZW5kZXIzQ29tcGlsZUluamVjdGFibGUgPVxuICAgIFNXSVRDSF9DT01QSUxFX0lOSkVDVEFCTEVfX1BSRV9SM19fO1xuIl19