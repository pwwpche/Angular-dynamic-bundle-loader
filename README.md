# Angular-Dynamic-Bundle-Loader

Load Angular module from an external Webpack bundle. 

### Usage:

```
// Angular: module.router.ts
loadExternal: 'http://www.external.domain/some_path/some_script.js|SOME_SPA:some.module.ts|SomeModule'

// webpack.config.js:
var config = {
	module: {
		rules: [
			//...
			{
			 test: /\.ts$/,
			 loaders: ['ts-loader','angular-dynamic-bundle-loader', 'angular2-template-loader'],
			}
        	
		]
	}
	//...
}

```


### Description:

User should specify:

* URL of the external webpack bundle, eg: `http://localhost:2333/test.js`
* ResourceName in webpack bundle. Using **webpack-name-module-id-plugin** we can build bundles with fixed resource name in it. 
  This allows us to load resources by its name. Eg: 'SPANAME:some.module.ts'
* Angular module name, eg: 'SomeModule'

These fields are separated by a '|' between each section.

