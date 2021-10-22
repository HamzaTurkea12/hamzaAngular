/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Identifiers } from './identifiers';
import * as o from './output/output_ast';
import { identifierName, typeSourceSpan } from './parse_util';
import { NgModuleProviderAnalyzer } from './provider_analyzer';
import { componentFactoryResolverProviderDef, providerDef } from './view_compiler/provider_compiler';
export class NgModuleCompileResult {
    constructor(ngModuleFactoryVar) {
        this.ngModuleFactoryVar = ngModuleFactoryVar;
    }
}
const LOG_VAR = o.variable('_l');
export class NgModuleCompiler {
    constructor(reflector) {
        this.reflector = reflector;
    }
    compile(ctx, ngModuleMeta, extraProviders) {
        const sourceSpan = typeSourceSpan('NgModule', ngModuleMeta.type);
        const entryComponentFactories = ngModuleMeta.transitiveModule.entryComponents;
        const bootstrapComponents = ngModuleMeta.bootstrapComponents;
        const providerParser = new NgModuleProviderAnalyzer(this.reflector, ngModuleMeta, extraProviders, sourceSpan);
        const providerDefs = [componentFactoryResolverProviderDef(this.reflector, ctx, 0 /* None */, entryComponentFactories)]
            .concat(providerParser.parse().map((provider) => providerDef(ctx, provider)))
            .map(({ providerExpr, depsExpr, flags, tokenExpr }) => {
            return o.importExpr(Identifiers.moduleProviderDef).callFn([
                o.literal(flags), tokenExpr, providerExpr, depsExpr
            ]);
        });
        const ngModuleDef = o.importExpr(Identifiers.moduleDef).callFn([o.literalArr(providerDefs)]);
        const ngModuleDefFactory = o.fn([new o.FnParam(LOG_VAR.name)], [new o.ReturnStatement(ngModuleDef)], o.INFERRED_TYPE);
        const ngModuleFactoryVar = `${identifierName(ngModuleMeta.type)}NgFactory`;
        this._createNgModuleFactory(ctx, ngModuleMeta.type.reference, o.importExpr(Identifiers.createModuleFactory).callFn([
            ctx.importExpr(ngModuleMeta.type.reference),
            o.literalArr(bootstrapComponents.map(id => ctx.importExpr(id.reference))),
            ngModuleDefFactory
        ]));
        if (ngModuleMeta.id) {
            const id = typeof ngModuleMeta.id === 'string' ? o.literal(ngModuleMeta.id) :
                ctx.importExpr(ngModuleMeta.id);
            const registerFactoryStmt = o.importExpr(Identifiers.RegisterModuleFactoryFn)
                .callFn([id, o.variable(ngModuleFactoryVar)])
                .toStmt();
            ctx.statements.push(registerFactoryStmt);
        }
        return new NgModuleCompileResult(ngModuleFactoryVar);
    }
    createStub(ctx, ngModuleReference) {
        this._createNgModuleFactory(ctx, ngModuleReference, o.NULL_EXPR);
    }
    _createNgModuleFactory(ctx, reference, value) {
        const ngModuleFactoryVar = `${identifierName({ reference: reference })}NgFactory`;
        const ngModuleFactoryStmt = o.variable(ngModuleFactoryVar)
            .set(value)
            .toDeclStmt(o.importType(Identifiers.NgModuleFactory, [o.expressionType(ctx.importExpr(reference))], [o.TypeModifier.Const]), [o.StmtModifier.Final, o.StmtModifier.Exported]);
        ctx.statements.push(ngModuleFactoryStmt);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfbW9kdWxlX2NvbXBpbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL25nX21vZHVsZV9jb21waWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFNSCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sS0FBSyxDQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDekMsT0FBTyxFQUFDLGNBQWMsRUFBRSxjQUFjLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDNUQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFDLG1DQUFtQyxFQUFVLFdBQVcsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBRTNHLE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsWUFBbUIsa0JBQTBCO1FBQTFCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBUTtJQUFHLENBQUM7Q0FDbEQ7QUFFRCxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWpDLE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsWUFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDO0lBQ25ELE9BQU8sQ0FDSCxHQUFrQixFQUFFLFlBQXFDLEVBQ3pELGNBQXlDO1FBQzNDLE1BQU0sVUFBVSxHQUFHLGNBQWMsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sdUJBQXVCLEdBQUcsWUFBWSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztRQUM5RSxNQUFNLG1CQUFtQixHQUFHLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQztRQUM3RCxNQUFNLGNBQWMsR0FDaEIsSUFBSSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVks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QixFQUFFLFNBQWMsRUFBRSxLQUFtQjtRQUNwRixNQUFNLGtCQUFrQixHQUFHLEdBQUcsY0FBYyxDQUFDLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxDQUFDLFdBQVcsQ0FBQztRQUNoRixNQUFNLG1CQUFtQixHQUNyQixDQUFDLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO2FBQ3pCLEdBQUcsQ0FBQyxLQUFLLENBQUM7YUFDVixVQUFVLENBQ1AsQ0FBQyxDQUFDLFVBQVUsQ0FDUixXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFFLENBQUMsRUFDM0UsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQzNCLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRTdELEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tcGlsZU5nTW9kdWxlTWV0YWRhdGEsIENvbXBpbGVQcm92aWRlck1ldGFkYXRhfSBmcm9tICcuL2NvbXBpbGVfbWV0YWRhdGEnO1xuaW1wb3J0IHtDb21waWxlUmVmbGVjdG9yfSBmcm9tICcuL2NvbXBpbGVfcmVmbGVjdG9yJztcbmltcG9ydCB7T3V0cHV0Q29udGV4dH0gZnJvbSAnLi9jb25zdGFudF9wb29sJztcbmltcG9ydCB7Tm9kZUZsYWdzfSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IHtJZGVudGlmaWVyc30gZnJvbSAnLi9pZGVudGlmaWVycyc7XG5pbXBvcnQgKiBhcyBvIGZyb20gJy4vb3V0cHV0L291dHB1dF9hc3QnO1xuaW1wb3J0IHtpZGVudGlmaWVyTmFtZSwgdHlwZVNvdXJjZVNwYW59IGZyb20gJy4vcGFyc2VfdXRpbCc7XG5pbXBvcnQge05nTW9kdWxlUHJvdmlkZXJBbmFseXplcn0gZnJvbSAnLi9wcm92aWRlcl9hbmFseXplcic7XG5pbXBvcnQge2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlclByb3ZpZGVyRGVmLCBkZXBEZWYsIHByb3ZpZGVyRGVmfSBmcm9tICcuL3ZpZXdfY29tcGlsZXIvcHJvdmlkZXJfY29tcGlsZXInO1xuXG5leHBvcnQgY2xhc3MgTmdNb2R1bGVDb21waWxlUmVzdWx0IHtcbiAgY29uc3RydWN0b3IocHVibGljIG5nTW9kdWxlRmFjdG9yeVZhcjogc3RyaW5nKSB7fVxufVxuXG5jb25zdCBMT0dfVkFSID0gby52YXJpYWJsZSgnX2wnKTtcblxuZXhwb3J0IGNsYXNzIE5nTW9kdWxlQ29tcGlsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZmxlY3RvcjogQ29tcGlsZVJlZmxlY3Rvcikge31cbiAgY29tcGlsZShcbiAgICAgIGN0eDogT3V0cHV0Q29udGV4dCwgbmdNb2R1bGVNZXRhOiBDb21waWxlTmdNb2R1bGVNZXRhZGF0YSxcbiAgICAgIGV4dHJhUHJvdmlkZXJzOiBDb21waWxlUHJvdmlkZXJNZXRhZGF0YVtdKTogTmdNb2R1bGVDb21waWxlUmVzdWx0IHtcbiAgICBjb25zdCBzb3VyY2VTcGFuID0gdHlwZVNvdXJjZVNwYW4oJ05nTW9kdWxlJywgbmdNb2R1bGVNZXRhLnR5cGUpO1xuICAgIGNvbnN0IGVudHJ5Q29tcG9uZW50RmFjdG9yaWVzID0gbmdNb2R1bGVNZXRhLnRyYW5zaXRpdmVNb2R1bGUuZW50cnlDb21wb25lbnRzO1xuICAgIGNvbnN0IGJvb3RzdHJhcENvbXBvbmVudHMgPSBuZ01vZHVsZU1ldGEuYm9vdHN0cmFwQ29tcG9uZW50cztcbiAgICBjb25zdCBwcm92aWRlclBhcnNlciA9XG4gICAgICAgIG5ldyBOZ01vZHVsZVByb3ZpZGVyQW5hbHl6ZXIodGhpcy5yZWZsZWN0b3IsIG5nTW9kdWxlTWV0YSwgZXh0cmFQcm92aWRlcnMsIHNvdXJjZVNwYW4pO1xuICAgIGNvbnN0IHByb3ZpZGVyRGVmcyA9XG4gICAgICAgIFtjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJQcm92aWRlckRlZihcbiAgICAgICAgICAgICB0aGlzLnJlZmxlY3RvciwgY3R4LCBOb2RlRmxhZ3MuTm9uZSwgZW50cnlDb21wb25lbnRGYWN0b3JpZXMpXVxuICAgICAgICAgICAgLmNvbmNhdChwcm92aWRlclBhcnNlci5wYXJzZSgpLm1hcCgocHJvdmlkZXIpID0+IHByb3ZpZGVyRGVmKGN0eCwgcHJvdmlkZXIpKSlcbiAgICAgICAgICAgIC5tYXAoKHtwcm92aWRlckV4cHIsIGRlcHNFeHByLCBmbGFncywgdG9rZW5FeHByfSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gby5pbXBvcnRFeHByKElkZW50aWZpZXJzLm1vZHVsZVByb3ZpZGVyRGVmKS5jYWxsRm4oW1xuICAgICAgICAgICAgICAgIG8ubGl0ZXJhbChmbGFncyksIHRva2VuRXhwciwgcHJvdmlkZXJFeHByLCBkZXBzRXhwclxuICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgY29uc3QgbmdNb2R1bGVEZWYgPSBvLmltcG9ydEV4cHIoSWRlbnRpZmllcnMubW9kdWxlRGVmKS5jYWxsRm4oW28ubGl0ZXJhbEFycihwcm92aWRlckRlZnMpXSk7XG4gICAgY29uc3QgbmdNb2R1bGVEZWZGYWN0b3J5ID1cbiAgICAgICAgby5mbihbbmV3IG8uRm5QYXJhbShMT0dfVkFSLm5hbWUhKV0sIFtuZXcgby5SZXR1cm5TdGF0ZW1lbnQobmdNb2R1bGVEZWYpXSwgby5JTkZFUlJFRF9UWVBFKTtcblxuICAgIGNvbnN0IG5nTW9kdWxlRmFjdG9yeVZhciA9IGAke2lkZW50aWZpZXJOYW1lKG5nTW9kdWxlTWV0YS50eXBlKX1OZ0ZhY3RvcnlgO1xuICAgIHRoaXMuX2NyZWF0ZU5nTW9kdWxlRmFjdG9yeShcbiAgICAgICAgY3R4LCBuZ01vZHVsZU1ldGEudHlwZS5yZWZlcmVuY2UsIG8uaW1wb3J0RXhwcihJZGVudGlmaWVycy5jcmVhdGVNb2R1bGVGYWN0b3J5KS5jYWxsRm4oW1xuICAgICAgICAgIGN0eC5pbXBvcnRFeHByKG5nTW9kdWxlTWV0YS50eXBlLnJlZmVyZW5jZSksXG4gICAgICAgICAgby5saXRlcmFsQXJyKGJvb3RzdHJhcENvbXBvbmVudHMubWFwKGlkID0+IGN0eC5pbXBvcnRFeHByKGlkLnJlZmVyZW5jZSkpKSxcbiAgICAgICAgICBuZ01vZHVsZURlZkZhY3RvcnlcbiAgICAgICAgXSkpO1xuXG4gICAgaWYgKG5nTW9kdWxlTWV0YS5pZCkge1xuICAgICAgY29uc3QgaWQgPSB0eXBlb2YgbmdNb2R1bGVNZXRhLmlkID09PSAnc3RyaW5nJyA/IG8ubGl0ZXJhbChuZ01vZHVsZU1ldGEuaWQpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguaW1wb3J0RXhwcihuZ01vZHVsZU1ldGEuaWQpO1xuICAgICAgY29uc3QgcmVnaXN0ZXJGYWN0b3J5U3RtdCA9IG8uaW1wb3J0RXhwcihJZGVudGlmaWVycy5SZWdpc3Rlck1vZHVsZUZhY3RvcnlGbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGxGbihbaWQsIG8udmFyaWFibGUobmdNb2R1bGVGYWN0b3J5VmFyKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0bXQoKTtcbiAgICAgIGN0eC5zdGF0ZW1lbnRzLnB1c2gocmVnaXN0ZXJGYWN0b3J5U3RtdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBOZ01vZHVsZUNvbXBpbGVSZXN1bHQobmdNb2R1bGVGYWN0b3J5VmFyKTtcbiAgfVxuXG4gIGNyZWF0ZVN0dWIoY3R4OiBPdXRwdXRDb250ZXh0LCBuZ01vZHVsZVJlZmVyZW5jZTogYW55KSB7XG4gICAgdGhpcy5fY3JlYXRlTmdNb2R1bGVGYWN0b3J5KGN0eCwgbmdNb2R1bGVSZWZlcmVuY2UsIG8uTlVMTF9FWFBSKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZU5nTW9kdWxlRmFjdG9yeShjdHg6IE91dHB1dENvbnRleHQsIHJlZmVyZW5jZTogYW55LCB2YWx1ZTogby5FeHByZXNzaW9uKSB7XG4gICAgY29uc3QgbmdNb2R1bGVGYWN0b3J5VmFyID0gYCR7aWRlbnRpZmllck5hbWUoe3JlZmVyZW5jZTogcmVmZXJlbmNlfSl9TmdGYWN0b3J5YDtcbiAgICBjb25zdCBuZ01vZHVsZUZhY3RvcnlTdG10ID1cbiAgICAgICAgby52YXJpYWJsZShuZ01vZHVsZUZhY3RvcnlWYXIpXG4gICAgICAgICAgICAuc2V0KHZhbHVlKVxuICAgICAgICAgICAgLnRvRGVjbFN0bXQoXG4gICAgICAgICAgICAgICAgby5pbXBvcnRUeXBlKFxuICAgICAgICAgICAgICAgICAgICBJZGVudGlmaWVycy5OZ01vZHVsZUZhY3RvcnksIFtvLmV4cHJlc3Npb25UeXBlKGN0eC5pbXBvcnRFeHByKHJlZmVyZW5jZSkpIV0sXG4gICAgICAgICAgICAgICAgICAgIFtvLlR5cGVNb2RpZmllci5Db25zdF0pLFxuICAgICAgICAgICAgICAgIFtvLlN0bXRNb2RpZmllci5GaW5hbCwgby5TdG10TW9kaWZpZXIuRXhwb3J0ZWRdKTtcblxuICAgIGN0eC5zdGF0ZW1lbnRzLnB1c2gobmdNb2R1bGVGYWN0b3J5U3RtdCk7XG4gIH1cbn1cbiJdfQ==