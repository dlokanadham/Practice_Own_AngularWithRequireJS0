require.config({

	paths:{
		'angular':'../bower_components/angular/angular',
		'jquery':'../bower_components/jquery/dist/jquery',
		'app':'app',
		'coreModule':'coreModule'
	},
	shim:{
		'angular':{
			deps:['jquery']
		},
		'coreModule':{
			deps:['angular']
		},
		'app':{
				deps:['angular','coreModule']
		}
	}
});

require(['app'], function(){
	angular.bootstrap(document, ['app']);

});