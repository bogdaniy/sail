//MUST HAVE functions in JS
function setCookie(name, value, expires)
{
	setTimeout(function(name, value, expires) {
		if (!expires)
		{
			expires = new Date();
		}
		var date = new Date();
		//alert('lal')
		date.setTime(date.getTime()+(10000*24*60*60*1000));
		console.log(name + "=" + escape(value) + "; expires=" + date.toGMTString() +  "; path=/");
		document.cookie = name + "=" + escape(value) + "; expires=" + date.toGMTString() +  "; path=/";
	}, 0);
}
function getCookie(name)
{
	cookie_name = name + "=";
	cookie_length = document.cookie.length;
	cookie_begin = 0;
	while (cookie_begin < cookie_length)
	{
		value_begin = cookie_begin + cookie_name.length;
		if (document.cookie.substring(cookie_begin, value_begin) == cookie_name)
		{
			var value_end = document.cookie.indexOf (";", value_begin);
			if (value_end == -1)
			{
				value_end = cookie_length;
			}
			return unescape(document.cookie.substring(value_begin, value_end));
		}

		cookie_begin = document.cookie.indexOf(" ", cookie_begin) + 1;
		
		if (cookie_begin == 0)
		{
			break;
		}
	}
	return null;
}
function deleteCookie(name)
{
	setTimeout(function(name){
		document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	},0);
}

function explode( delimiter, string ) {	
	var emptyArray = { 0: '' };

	if ( arguments.length != 2
		|| typeof arguments[0] == 'undefined'
		|| typeof arguments[1] == 'undefined' )
	{
		return null;
	}

	if ( delimiter === ''
		|| delimiter === false
		|| delimiter === null )
	{
		return false;
	}

	if ( typeof delimiter == 'function'
		|| typeof delimiter == 'object'
		|| typeof string == 'function'
		|| typeof string == 'object' )
	{
		return emptyArray;
	}

	if ( delimiter === true ) {
		delimiter = '1';
	}

	return string.toString().split ( delimiter.toString() );
}
function print_r( array, return_val ) {
	var output = "", pad_char = " ", pad_val = 4;

	var formatArray = function (obj, cur_depth, pad_val, pad_char) {
		if(cur_depth > 0)
			cur_depth++;

		var base_pad = repeat_char(pad_val*cur_depth, pad_char);
		var thick_pad = repeat_char(pad_val*(cur_depth+1), pad_char);
		var str = "";

		if(typeof obj=='object' || typeof obj=='array' || (obj.length>0 && typeof obj!='string' && typeof obj!='number')) {
			if(!(typeof obj=='object' || typeof obj=='array'))str = '\n'+obj.toString()+'\n';
      str += '[\n';//"Array\n" + base_pad + "(\n";
			for(var key in obj) {
				if(typeof obj[key]=='object' || typeof obj[key]=='array' || (obj.length>0 && typeof obj!='string' && typeof obj!='number')) {
          str += thick_pad + ""+key+": "+((!(typeof obj=='object' || typeof obj=='array'))?'\n'+obj[key]+'\n':'')+formatArray(obj[key], cur_depth+1, pad_val, pad_char)+'\n';
				} else {
					str += thick_pad + ""+key+": " + obj[key] + "\n";
				}
			}
			str += base_pad + "]\n";
		} else {
			str = obj.toString();
		};

		return str;
	};

	var repeat_char = function (len, char) {
		var str = "";
		for(var i=0; i < len; i++) { str += char; };
		return str;
		return str;
	};

	output = formatArray(array, 0, pad_val, pad_char);
		alert(output);
}
function clone(obj){
    if(obj == null || typeof(obj) != 'object')
        return obj;
    var temp = new obj.constructor(); 
    for(var key in obj)
        temp[key] = clone(obj[key]);
    return temp;
}

 function include(url, args) {
 	args || (args = {})	;
 	 setTimeout(function(){
 
		 	if(typeof url == 'string') {
		 		var join = (url.search('\\?') >= 0) ? '&' : '?';
				join += 'v=' + config.version; 

		        var script = document.createElement('script');
		        script.src = url + join;
		        document.getElementsByTagName('head')[0].appendChild(script);

		        args.error && (script.onerror = function() {
		        	args.error();
		        });
		        return args.success ? (script.onload = function() {
		        	args.success();
		       	}) :  true;
		    }
		    else if(typeof url == 'object' || typeof url == 'array') {
		    	var urlList = clone(url);
		    	var onScriptLoad = function() {
		    		if(!urlList.length)
		    			args.success && args.success();
		    	};
		    	if(args.success)var i = 0;
		    	for(var link in url) if(typeof url[link] == 'string') {
			 		var join = (url[link].search('\\?') >= 0) ? '&' : '?';
					join += 'v=' + config.version;
		    		var script = document.createElement('script');
			        script.src = url[link] + join;
			        document.getElementsByTagName('head')[0].appendChild(script);
			        if(args.success) {
		    			var c = i;
		    			script.onload = function(c) {
		    				urlList.splice(c, 1);
		    				onScriptLoad();
		    			}
		    		}
		    		script.onerror = function() {
		    			args.error && args.error();
		    			return true;
		    		}
		    			i++;
			    }
		    }
		}, 0);
	return true;
}
function unixtime(){
	return Math.round((new Date()).getTime() / 1000);
}
function extend(Child, Parent) {
	console.log(Child, Parent)
	var F = function() { }
	F.prototype = Parent.prototype
	Child.prototype = new F()
	Child.prototype.constructor = Child
	Child.superclass = Parent.prototype
}
