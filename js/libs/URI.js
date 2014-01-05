app.libs.URI = {
	host : '',
	hash : '',
	port : 80,
	module : 'index',
	action : 'main',
	protocol : '',
	search : {},
	parse : function() {

		this.host = window.location.host.replace(":"+window.location.port, '');
		this.hash = window.location.hash.replace('#', '');
		this.port = window.location.port || 80;
		var address = explode('/', window.location.pathname);
		this.module = address[1] || 'main';
		this.action = address[2] || 'main';
		this.protocol = window.location.protocol.replace(':', '');
		var search  = window.location.search.replace('?', '');
		if(!search)
			return true;
		var pairs = search.split('&');
		for(var pair in pairs) if(typeof pair == 'string') {
			var pairObj = pairs[pair].split('=');
			this.search[pairObj[0]] = pairObj[1]; 
		}
	}
};
