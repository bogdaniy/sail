app.libs.MODULES.list.test = {
	type : 1,
	load : {
		main:function(page, hndlr){
			alert('load')
			page.load({}, hndlr);
		}
	},
	ready : {
		main:function() {
			alert('test ready');
			$('#status').html('ready in '+unixtime());
		}
	},
	sleep : {
		main : function(){
			alert('good night')
			return true;
		}
	},
	wake : {
		main : function() {
			alert('good morning')
		}
	}
}