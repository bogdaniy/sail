function $(selector) {
	var selectorList = explode(' ', selector);
	var obj = {};
	switch(selectorList[0][0]){
		case '#':
			obj = ge(selectorList[0].replace('#', '')) || (obj = new dom_obj(obj));
			break;
		case '.':
			obj = gc(selectorList[0].replace('.', ''));
			break;
		default  :
			obj = document.getElementsByTagName(selectorList[0]);
	}

	obj &&	(obj.__proto__  = new dom_obj(obj));
	return obj;
}
function dom_obj(obj){

	
	this.obj  = obj;
	this.getObj = function(data){
		return typeof this.obj.length == 'number' ? this.obj[0] : this.obj;
	};
	this.each = function(func){
		if(!obj)return this;
		for(var i in this.obj)
		{
			if(typeof this.obj[i] == 'object')
				func(new dom_obj(this.obj[i]));
		}
		
	};
	this.css = function(rule, value){
		
		if(!obj)return this;
		setTimeout(function(){
			if(typeof rule == 'object')
				for(var i in rule)
					cssSet(this.obj, i, rule[i]);
			else
				return cssSet(this.obj, rule, value);
		}, 0);
		return this;
	}
	this.html = function(data){
		var el = this.getObj();
		if(data) {
			el.innerHTML = data;
			return this;
		}
		el.innerHTML.__proto__ = this;
		return el.innerHTML;
	}
	
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
function ge(id)
{
	var el = document.getElementById(id);
	return el;
}
function gc(_class)
{
	var els = document.getElementsByClassName(_class);
	return els;
}
function cssSet(obj, rule, value){
	if(obj.style)
	return value ? obj.style[rule] = value : obj.style[rule];
}