app.libs.MODULES = {
	list : {},
	web : {},
	templates : {},
	current : {},
	currentName : '',
	currentAction : '',
	domСopies : {},
	open : function(name) {
		var isContainer = Boolean(ge('container'));

		//For returnables modules wake up
		if(isContainer && this.web[name] && this.web[name].type && this.domСopies[name] && this.domСopies[name][app.libs.URI.action]) {
			$('#container').html(this.domСopies[name][app.libs.URI.action]);
			this.web[name].onWake(app.libs.URI.action)
			return;
		}


		var mname = name;
		name = config.modulesPath + name + '.js';
		var _this = this;

		if(!this.list[mname])
			include({
				load : name,
				success : function() {
					_this.onLoad(mname);
				}, 
				error : function() {
					_this.onError(mname);
				}
			});
		else
			this.load(mname)
	},
	onLoad : function(name) {
		this.list[name].__proto__ = this.byDefault;
		this.load(name);
	},
	onError : function(name) {
		this.list[name] = this.byDefault;
		this.load(name);
	},
	byDefault : {
		type:0,
		need_auth : false,
		onLoad : function(action, page, hndlr) {

			if(this.load && this.load[action])
				return this.load[action](page, hndlr);
			hndlr.actionTemplate = true;
			return page.load({}, hndlr);

		},
		onReady : function(action) {
			console.log(this, action)
			if(this.ready && this.ready[action])
				this.ready[action]();
		},
		onWake : function(action) {
			if(this.wake && this.wake[action])
				this.wake[action]();
		},
		onSleep : function(action) {
			if(this.sleep && this.sleep[action])
				return this.sleep[action]();
			return true;
		},
		onClose : function(action) {

			if(this.close && this.close[action])
				return this.close[action]();
			return true;
		}
	},
	load : function(name) {
		var _this = this;
		if(config.need_auth && !app.libs.SYSTEM.auth) {
			app.pageLoad(config.authPage);
		}

		this.web[name] = clone(this.list[name]);
		this.current = this.web[name];
		this.currentName = name;
		!app.libs.URI.action && (app.libs.URI.action = 'main');
		this.currentAction = app.libs.URI.action;
		console.log(name)
		this.web[name].onLoad(app.libs.URI.action,{
		 	load : function(datum, hndlr) {
				_this.template(datum, hndlr);
			},
		}, 
		{
			actionTemplate : true,
		});

	},
	loadIndex : function() {
		this.open('index');
	},
	//Load template
	template : function(datum, hndlr) { 
		if(!app.libs.URI.module)
			app.libs.URI.module = 'index';
		var _this = this;
		var template = config.templatesPath + app.libs.URI.module;
		if(app.libs.URI.action && app.libs.URI.action != 'main')
			hndlr.actionTemplate && template += '/' + app.libs.URI.action;
		if(typeof this.templates[this.getName(template)] == 'function')
			this.render(this.templates[this.getName(template)], datum);
		else if(localStorage.getItem(config.webStorageTemplatePrefix + this.getName(template))) {
			var exec = swig.compile(localStorage.getItem(config.webStorageTemplatePrefix + this.getName(template)), {filename : template.replace('/','_')});
			this.templates[this.getName(template)] = exec;
			this.render(exec, datum);
		}
		else {
			app.libs.REQ.get(template + '.' + config.templatesExtension, function(tm) {
				localStorage.setItem(config.webStorageTemplatePrefix + _this.getName(template), tm);
				var exec = swig.compile(tm, {filename : _this.getName(template)});
				_this.templates[_this.getName(template)] = exec;
				_this.render(exec, datum);
			}, function() {
				app.pageLoad(config.notFoundErrorPage);
			});
		}

	},
	render : function(execute, datum) {
		if(!ge('container')) {
			$('body').html(execute(datum));
			this.current.onReady(this.currentAction);
			app.prepareforBrowser();
			return;
		}
		$('#container').html(execute(datum));
		this.current.onReady(this.currentAction);
		return;
	},
	getName : function(str) {
		return str.replace(new RegExp("/",'g'),"_");
	}


};
//  open -> load -> template -> render
