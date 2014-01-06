app.libs.REQ = {
	call:function(method, params, callback)
	{
		var xhr = new XMLHttpRequest();
		//alert('here')
		xhr.open('POST', config.apiAddress + method, true);
		xhr.onreadystatechange = function()
			{
				if (xhr.readyState == 4) 
				{
			    	if(xhr.status == 200) 
			    	{
			    		try
			    		{
			    			var response = JSON.parse(xhr.responseText);
			    		}
			    		catch(ex)
			    		{
			    			console.log("server error");
			    			return(false);
			    		}
			    			callback(response);


					}
		    	}
				
			}
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send(http_build_query(params));
	},
	get:function(path, callback, not_found) {
		var join = (path.search('\\?') >= 0) ? '&' : '?';
		var xhr = new XMLHttpRequest();
		xhr.open('GET', path + join, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
			     if(xhr.status == 200)
			       callback(xhr.responseText);
			    if(xhr.status == 404)
			    	not_found();
  			}
		};
		xhr.send(null);
	
	}


};