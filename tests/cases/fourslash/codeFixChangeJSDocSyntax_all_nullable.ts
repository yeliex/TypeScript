/// <reference path='fourslash.ts' />

// @strict: true
////function f(a: ?number, b: string!) {}

verify.codeFixAll({
	actionId: "fixJSDocTypes_nullable",
	newFileContent: "function f(a: number | null | undefined, b: string) {}",
})
