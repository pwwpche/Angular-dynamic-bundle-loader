module.exports = function(source) {

	this.cacheable && this.cacheable();
    var loadExternalRegex = /["']?loadExternal["']?[\s]*:[\s]*['|"](.*?)\|(.*?)\|(.*?)['|"]/gm;
    // loadExternal: 'http://localhost:2333/0.js|PROXY_SPA:appwrapper.module.ts|AppWrapperModule'
  	var replacedSource = source.replace(loadExternalRegex, function(match, bundleSource, moduleResource, moduleName) {
		var replacement = [
	        'loadChildren: function() { ',
	        '  return new Promise(function (resolve, reject){',
	        '    var script = document.createElement(\'script\');',
	        '    script.src = " ' + bundleSource + '";',
	        '    var head = document.getElementsByTagName(\'head\')[0];',
	        '    head.appendChild(script);',
	        '    script.onload = function() {eval("resolve(__webpack_require__(\'' + moduleResource + '\')[\'' + moduleName + '\'])");}',
	        '  });',
	        '}'
	    ].join('\n');
	    return replacement;
  	});
  	return replacedSource;
}
