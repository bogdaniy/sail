app = {
	//vars
	libs:{},
	ctrl : {},
	init : function() {
		config.debug || (window.onerror = function(err){
			setTimeout(function(err){
				app.libs.SYSTEM.errorLog(err,'window');
			}, 0);
			return true;
		});
		//include system modules
		for(var libName in config.libs) if(typeof libName == 'string') {
			config.libs[libName] = config.libsPath + config.libs[libName] + '.js';
		}
		include({
			load : config.libs, 
			success  : function(){
				app.libs.SYSTEM.checkVersion();
				config.needAuth && app.libs.SYSTEM.checkAuth();
				app.libs.MODULES.loadIndex();
			}	
		});
	},
	pageLoad : function(href) {
		var hndlr = true;
		var isContainer = Boolean(ge('container'));

		//In first close old module if it usual
		if(isContainer && app.libs.MODULES.currentName && !app.libs.MODULES.current.type) {
			var hndlr = app.libs.MODULES.web[app.libs.MODULES.currentName].onClose(app.libs.MODULES.currentAction);
			
		}
		//For returnables modules sleep previous[type=1]
		if(isContainer && app.libs.MODULES.current && app.libs.MODULES.current.type) {
			app.libs.MODULES.domСopies[app.libs.MODULES.currentName] || (app.libs.MODULES.domСopies[app.libs.MODULES.currentName] = {});
			app.libs.MODULES.domСopies[app.libs.MODULES.currentName][app.libs.MODULES.currentAction] = $('#container').html();
			var hndlr = app.libs.MODULES.current.onSleep(app.libs.MODULES.currentAction);
		}
		if(!hndlr) return false;

		history.pushState({time:unixtime()}, null, href);
		app.libs.URI.parse();
		app.libs.MODULES.open(app.libs.URI.module);
	},
	open : function(e, a) {
		var evt = e ? e : window.event;
    	(evt.preventDefault) ? evt.preventDefault() : evt.returnValue = false;
    	this.pageLoad(a.href);
	},
	prepareforBrowser : function() {
		app.libs.URI.parse();
		window.onpopstate = function(e) {
			if(e) {
				var evt = e ? e : window.event;
				(evt.preventDefault) ? evt.preventDefault() : evt.returnValue = false;
			}
			app.pageLoad(window.location.pathname + window.location.search + window.location.hash);
		};
		window.onpopstate(null);
	}
};
window.onload = function() {
	app.init();
};

//P.S I LOVE @yuliyashylov