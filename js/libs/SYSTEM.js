app.libs.SYSTEM = {
		auth : false,
		access_token : '',
		user_id : '',
		checkVersion : function() {
			setTimeout(function() {
				if(localStorage.getItem('version').toString() !== config.version.toString()) {
					localStorage.clear();
					localStorage.setItem('version', config.version)
				}
			}, 0);
			return;
		},
		checkAuth : function() {
			if(!getCookie('access_token'))
				return true;
			this.access_token = getCookie('access_token');
			this.user_id = getCookie('user_id');
			auth = true;

		},
		errorLog : function(error, from) {
			setTimeout(function(error, from) {
				if(config.errorLogInConsole) 
					console.log(error, ' by ', from);
				if(config.errorLogOnServer)
					API.call(config.errorLogApiMethod, {error:error,from:from}, function(data){
						console.log('Error was loged on server');
					});
			}, 0);
		}
};