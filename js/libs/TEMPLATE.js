!function(e,t,n){function r(n,i){if(!t[n]){if(!e[n]){var a="function"==typeof require&&require;if(!i&&a)return a(n,!0);if(o)return o(n,!0);throw new Error("Cannot find module '"+n+"'")}var s=t[n]={exports:{}};e[n][0].call(s.exports,function(t){var o=e[n][1][t];return r(o?o:t)},s,s.exports)}return t[n].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)r(n[i]);return r}({1:[function(e){var t=e("../lib/swig");"function"==typeof window.define&&"object"==typeof window.define.amd?window.define("swig",[],function(){return t}):window.swig=t},{"../lib/swig":6}],2:[function(e,t,n){var r=e("./utils"),o={full:["January","February","March","April","May","June","July","August","September","October","November","December"],abbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},i={full:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],alt:{"-1":"Yesterday",0:"Today",1:"Tomorrow"}};n.defaultTZOffset=0,n.DateZ=function(){var e={"default":["getUTCDate","getUTCDay","getUTCFullYear","getUTCHours","getUTCMilliseconds","getUTCMinutes","getUTCMonth","getUTCSeconds","toISOString","toGMTString","toUTCString","valueOf","getTime"],z:["getDate","getDay","getFullYear","getHours","getMilliseconds","getMinutes","getMonth","getSeconds","getYear","toDateString","toLocaleDateString","toLocaleTimeString"]},t=this;t.date=t.dateZ=arguments.length>1?new Date(Date.UTC.apply(Date,arguments)+6e4*(new Date).getTimezoneOffset()):1===arguments.length?new Date(new Date(arguments["0"])):new Date,t.timezoneOffset=t.dateZ.getTimezoneOffset(),r.each(e.z,function(e){t[e]=function(){return t.dateZ[e]()}}),r.each(e["default"],function(e){t[e]=function(){return t.date[e]()}}),this.setTimezoneOffset(n.defaultTZOffset)},n.DateZ.prototype={getTimezoneOffset:function(){return this.timezoneOffset},setTimezoneOffset:function(e){return this.timezoneOffset=e,this.dateZ=new Date(this.date.getTime()+6e4*this.date.getTimezoneOffset()-6e4*this.timezoneOffset),this}},n.d=function(e){return(e.getDate()<10?"0":"")+e.getDate()},n.D=function(e){return i.abbr[e.getDay()]},n.j=function(e){return e.getDate()},n.l=function(e){return i.full[e.getDay()]},n.N=function(e){var t=e.getDay();return t>=1?t+1:7},n.S=function(e){var t=e.getDate();return 1===t%10&&11!==t?"st":2===t%10&&12!==t?"nd":3===t%10&&13!==t?"rd":"th"},n.w=function(e){return e.getDay()},n.z=function(e,t,r){var o=e.getFullYear(),i=new n.DateZ(o,e.getMonth(),e.getDate(),12,0,0),a=new n.DateZ(o,0,1,12,0,0);return i.setTimezoneOffset(t,r),a.setTimezoneOffset(t,r),Math.round((i-a)/864e5)},n.W=function(e){var t,n=new Date(e.valueOf()),r=(e.getDay()+6)%7;return n.setDate(n.getDate()-r+3),t=n.valueOf(),n.setMonth(0,1),4!==n.getDay()&&n.setMonth(0,1+(4-n.getDay()+7)%7),1+Math.ceil((t-n)/6048e5)},n.F=function(e){return o.full[e.getMonth()]},n.m=function(e){return(e.getMonth()<9?"0":"")+(e.getMonth()+1)},n.M=function(e){return o.abbr[e.getMonth()]},n.n=function(e){return e.getMonth()+1},n.t=function(e){return 32-new Date(e.getFullYear(),e.getMonth(),32).getDate()},n.L=function(e){return 29===new Date(e.getFullYear(),1,29).getDate()},n.o=function(e){var t=new Date(e.valueOf());return t.setDate(t.getDate()-(e.getDay()+6)%7+3),t.getFullYear()},n.Y=function(e){return e.getFullYear()},n.y=function(e){return e.getFullYear().toString().substr(2)},n.a=function(e){return e.getHours()<12?"am":"pm"},n.A=function(e){return e.getHours()<12?"AM":"PM"},n.B=function(e){var t,n=e.getUTCHours();return n=23===n?0:n+1,t=Math.abs((60*(60*n+e.getUTCMinutes())+e.getUTCSeconds())/86.4).toFixed(0),"000".concat(t).slice(t.length)},n.g=function(e){var t=e.getHours();return 0===t?12:t>12?t-12:t},n.G=function(e){return e.getHours()},n.h=function(e){var t=e.getHours();return(10>t||t>12&&22>t?"0":"")+(12>t?t:t-12)},n.H=function(e){var t=e.getHours();return(10>t?"0":"")+t},n.i=function(e){var t=e.getMinutes();return(10>t?"0":"")+t},n.s=function(e){var t=e.getSeconds();return(10>t?"0":"")+t},n.O=function(e){var t=e.getTimezoneOffset();return(0>t?"-":"+")+(10>t/60?"0":"")+Math.abs(t/60)+"00"},n.Z=function(e){return 60*e.getTimezoneOffset()},n.c=function(e){return e.toISOString()},n.r=function(e){return e.toUTCString()},n.U=function(e){return e.getTime()/1e3}},{"./utils":23}],3:[function(e,t,n){var r=e("./utils"),o=e("./dateformatter");n.addslashes=function(e){return"object"==typeof e?(r.each(e,function(t,r){e[r]=n.addslashes(t)}),e):e.replace(/\\/g,"\\\\").replace(/\'/g,"\\'").replace(/\"/g,'\\"')},n.capitalize=function(e){return"object"==typeof e?(r.each(e,function(t,r){e[r]=n.capitalize(t)}),e):e.toString().charAt(0).toUpperCase()+e.toString().substr(1).toLowerCase()},n.date=function(e,t,n,r){var i,a=t.length,s=new o.DateZ(e),u=0,c="";for(n&&s.setTimezoneOffset(n,r),u;a>u;u+=1)i=t.charAt(u),c+=o.hasOwnProperty(i)?o[i](s,n,r):i;return c},n.default=function(e,t){return"undefined"==typeof e||!e&&"number"!=typeof e?t:e},n.escape=function(e,t){if("object"==typeof e)return r.each(e,function(t,r){e[r]=n.escape(t)}),e;if("string"!=typeof e)return e;var o,i=0,a="";switch(t){case"js":for(e=e.replace(/\\/g,"\\u005C"),i;i<e.length;i+=1)o=e.charCodeAt(i),32>o?(o=o.toString(16).toUpperCase(),o=o.length<2?"0"+o:o,a+="\\u00"+o):a+=e[i];return a.replace(/&/g,"\\u0026").replace(/</g,"\\u003C").replace(/>/g,"\\u003E").replace(/\'/g,"\\u0027").replace(/"/g,"\\u0022").replace(/\=/g,"\\u003D").replace(/-/g,"\\u002D").replace(/;/g,"\\u003B");default:return e.replace(/&(?!amp;|lt;|gt;|quot;|#39;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}},n.e=n.escape,n.first=function(e){if("object"==typeof e&&!r.isArray(e)){var t=r.keys(e);return e[t[0]]}return"string"==typeof e?e.substr(0,1):e[0]},n.join=function(e,t){if(r.isArray(e))return e.join(t);if("object"==typeof e){var n=[];return r.each(e,function(e){n.push(e)}),n.join(t)}return e},n.json=function(e,t){return JSON.stringify(e,null,t||0)},n.json_encode=n.json,n.last=function(e){if("object"==typeof e&&!r.isArray(e)){var t=r.keys(e);return e[t[t.length-1]]}return"string"==typeof e?e.charAt(e.length-1):e[e.length-1]},n.lower=function(e){return"object"==typeof e?(r.each(e,function(t,r){e[r]=n.lower(t)}),e):e.toString().toLowerCase()},n.raw=function(e){return e},n.replace=function(e,t,n,r){var o=new RegExp(t,r);return e.replace(o,n)},n.reverse=function(e){return n.sort(e,!0)},n.sort=function(e,t){var n;if(r.isArray(e))n=e.sort();else switch(typeof e){case"object":n=r.keys(e).sort();break;case"string":return n=e.split(""),t?n.reverse().join(""):n.sort().join("")}return n&&t?n.reverse():n||e},n.striptags=function(e){return"object"==typeof e?(r.each(e,function(t,r){e[r]=n.striptags(t)}),e):e.toString().replace(/(<([^>]+)>)/gi,"")},n.title=function(e){return"object"==typeof e?(r.each(e,function(t,r){e[r]=n.title(t)}),e):e.toString().replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})},n.uniq=function(e){var t;return e&&r.isArray(e)?(t=[],r.each(e,function(e){-1===t.indexOf(e)&&t.push(e)}),t):""},n.upper=function(e){return"object"==typeof e?(r.each(e,function(t,r){e[r]=n.upper(t)}),e):e.toString().toUpperCase()},n.url_encode=function(e){return"object"==typeof e?(r.each(e,function(t,r){e[r]=n.url_encode(t)}),e):encodeURIComponent(e)},n.url_decode=function(e){return"object"==typeof e?(r.each(e,function(t,r){e[r]=n.url_decode(t)}),e):decodeURIComponent(e)}},{"./dateformatter":2,"./utils":23}],4:[function(e,t,n){function r(e){var t;return o.some(a,function(n){return o.some(n.regex,function(r){var o,i=e.match(r);if(i)return o=i[n.idx||0].replace(/\s*$/,""),o=n.hasOwnProperty("replace")&&n.replace.hasOwnProperty(o)?n.replace[o]:o,t={match:o,type:n.type,length:i[0].length},!0})}),t||(t={match:e,type:i.UNKNOWN,length:e.length}),t}var o=e("./utils"),i={WHITESPACE:0,STRING:1,FILTER:2,FILTEREMPTY:3,FUNCTION:4,PARENOPEN:5,PARENCLOSE:6,COMMA:7,VAR:8,NUMBER:9,OPERATOR:10,BRACKETOPEN:11,BRACKETCLOSE:12,DOTKEY:13,ARRAYOPEN:14,CURLYOPEN:16,CURLYCLOSE:17,COLON:18,COMPARATOR:19,LOGIC:20,NOT:21,BOOL:22,ASSIGNMENT:23,METHODOPEN:24,UNKNOWN:100},a=[{type:i.WHITESPACE,regex:[/^\s+/]},{type:i.STRING,regex:[/^""/,/^".*?[^\\]"/,/^''/,/^'.*?[^\\]'/]},{type:i.FILTER,regex:[/^\|\s*(\w+)\(/],idx:1},{type:i.FILTEREMPTY,regex:[/^\|\s*(\w+)/],idx:1},{type:i.FUNCTION,regex:[/^\s*(\w+)\(/],idx:1},{type:i.PARENOPEN,regex:[/^\(/]},{type:i.PARENCLOSE,regex:[/^\)/]},{type:i.COMMA,regex:[/^,/]},{type:i.LOGIC,regex:[/^(&&|\|\||and|or)\s*/],idx:1,replace:{and:"&&",or:"||"}},{type:i.COMPARATOR,regex:[/^(===|==|\!==|\!=|<=|<|>=|>|in\s|gte\s|gt\s|lte\s|lt\s)\s*/],idx:1,replace:{gte:">=",gt:">",lte:"<=",lt:"<"}},{type:i.ASSIGNMENT,regex:[/^(=|\+=|-=|\*=|\/=)/]},{type:i.NOT,regex:[/^(not|\!)\s*/],idx:1,replace:{not:"!"}},{type:i.BOOL,regex:[/^(true|false)/]},{type:i.VAR,regex:[/^[a-zA-Z_$]\w*((\.\w*)+)?/,/^[a-zA-Z_$]\w*/]},{type:i.BRACKETOPEN,regex:[/^\[/]},{type:i.BRACKETCLOSE,regex:[/^\]/]},{type:i.CURLYOPEN,regex:[/^\{/]},{type:i.COLON,regex:[/^\:/]},{type:i.CURLYCLOSE,regex:[/^\}/]},{type:i.DOTKEY,regex:[/^\.(\w+)/],idx:1},{type:i.NUMBER,regex:[/^[+\-]?\d+(\.\d+)?/]},{type:i.OPERATOR,regex:[/^(\+|\-|\/|\*|%)/]}];n.types=i,n.read=function(e){for(var t,n,o=0,i=[];o<e.length;)t=e.substring(o),n=r(t),o+=n.length,i.push(n);return i}},{"./utils":23}],5:[function(e,t,n){function r(e){return e.replace(/[\-\/\\\^$*+?.()|\[\]{}]/g,"\\$&")}function o(e,t,n,r){this.out=[],this.state=[],this.filterApplyIdx=[],this._parsers={},this.line=n,this.filename=r,this.filters=t,this.parse=function(){var t=this;return t._parsers.start&&t._parsers.start.call(t),i.each(e,function(n,r){var o=e[r-1];if(t.isLast=r===e.length-1,o)for(;o.type===s.WHITESPACE;)r-=1,o=e[r-1];t.prevToken=o,t.parseToken(n)}),t._parsers.end&&t._parsers.end.call(t),t.out}}var i=e("./utils"),a=e("./lexer"),s=a.types,u=["break","case","catch","continue","debugger","default","delete","do","else","finally","for","function","if","in","instanceof","new","return","switch","this","throw","try","typeof","var","void","while","with"];o.prototype={on:function(e,t){this._parsers[e]=t},parseToken:function(e){var t,n=this,r=n._parsers[e.type]||n._parsers["*"],o=e.match,a=n.prevToken,u=n.state.length?n.state[n.state.length-1]:null;if(!r||"function"!=typeof r||r.call(this,e))switch(u&&u===s.FILTER&&a.type===s.FILTER&&e.type!==s.PARENCLOSE&&e.type!==s.COMMA&&e.type!==s.OPERATOR&&e.type!==s.FILTER&&e.type!==s.FILTEREMPTY&&n.out.push(", "),u&&u===s.METHODOPEN&&(n.state.pop(),e.type!==s.PARENCLOSE&&n.out.push(", ")),e.type){case s.WHITESPACE:break;case s.STRING:n.out.push(o.replace(/\\/g,"\\\\")),n.filterApplyIdx.push(n.out.length-1);break;case s.NUMBER:n.out.push(o),n.filterApplyIdx.push(n.out.length-1);break;case s.FILTER:n.filters.hasOwnProperty(o)&&"function"==typeof n.filters[o]||i.throwError('Invalid filter "'+o+'"',n.line,n.filename),n.out.splice(n.filterApplyIdx[n.filterApplyIdx.length-1],0,'_filters["'+o+'"]('),n.state.push(e.type);break;case s.FILTEREMPTY:n.filters.hasOwnProperty(o)&&"function"==typeof n.filters[o]||i.throwError('Invalid filter "'+o+'"',n.line,n.filename),n.out.splice(n.filterApplyIdx[n.filterApplyIdx.length-1],0,'_filters["'+o+'"]('),n.out.push(")");break;case s.FUNCTION:n.state.push(e.type),n.out.push("((typeof "+o+' !== "undefined") ? '+o+" : ((typeof _ctx."+o+' !== "undefined") ? _ctx.'+o+" : _fn))("),n.filterApplyIdx.push(n.out.length-1);break;case s.PARENOPEN:n.state.push(e.type),n.filterApplyIdx.length?(n.out.splice(n.filterApplyIdx[n.filterApplyIdx.length-1],0,"("),a&&a.type===s.VAR?(t=a.match.split(".").slice(0,-1),n.out.push(" || _fn).call("+n.checkMatch(t)),n.state.push(s.METHODOPEN)):n.out.push(" || _fn)(")):n.out.push("("),n.filterApplyIdx.push(n.out.length-1);break;case s.PARENCLOSE:t=n.state.pop(),t!==s.PARENOPEN&&t!==s.FUNCTION&&t!==s.FILTER&&i.throwError("Mismatched nesting state",n.line,n.filename),n.out.push(")"),n.filterApplyIdx.pop();break;case s.COMMA:u!==s.FUNCTION&&u!==s.FILTER&&u!==s.ARRAYOPEN&&u!==s.CURLYOPEN&&u!==s.PARENOPEN&&i.throwError("Unexpected comma",n.line,n.filename),n.out.push(", "),n.filterApplyIdx.pop();break;case s.VAR:n.parseVar(e,o,u,a);break;case s.BRACKETOPEN:!a||a.type!==s.VAR&&a.type!==s.BRACKETCLOSE&&a.type!==s.PARENCLOSE?(n.state.push(s.ARRAYOPEN),n.filterApplyIdx.push(n.out.length)):n.state.push(e.type),n.out.push("[");break;case s.BRACKETCLOSE:t=n.state.pop(),t!==s.BRACKETOPEN&&t!==s.ARRAYOPEN&&i.throwError("Unexpected closing square bracket",n.line,n.filename),n.out.push("]"),n.filterApplyIdx.pop();break;case s.CURLYOPEN:n.state.push(e.type),n.out.push("{"),n.filterApplyIdx.push(n.out.length-1);break;case s.COLON:u!==s.CURLYOPEN&&i.throwError("Unexpected colon",n.line,n.filename),n.out.push(":"),n.filterApplyIdx.pop();break;case s.CURLYCLOSE:n.state.pop()!==s.CURLYOPEN&&i.throwError("Unexpected closing curly brace",n.line,n.filename),n.out.push("}"),n.filterApplyIdx.pop();break;case s.DOTKEY:a.type!==s.VAR&&a.type!==s.BRACKETCLOSE&&a.type!==s.DOTKEY&&i.throwError('Unexpected key "'+o+'"',n.line,n.filename),n.out.push("."+o);break;case s.OPERATOR:n.out.push(" "+o+" "),n.filterApplyIdx.pop()}},parseVar:function(e,t,n){var r=this;return t=t.split("."),-1!==u.indexOf(t[0])&&i.throwError('Reserved keyword "'+t[0]+'" attempted to be used as a variable',r.line,r.filename),r.filterApplyIdx.push(r.out.length),n===s.CURLYOPEN?(t.length>1&&i.throwError("Unexpected dot",r.line,r.filename),r.out.push(t[0]),void 0):(r.out.push(r.checkMatch(t)),void 0)},checkMatch:function(e){function t(t){var n=t+r,o=e,a="";return a="(typeof "+n+' !== "undefined"',i.each(o,function(e,t){0!==t&&(a+=' && "'+e+'" in '+n,n+="."+e)}),a+=")"}function n(n){return"("+t(n)+" ? "+n+e.join(".")+' : "")'}var r=e[0];return"("+t("")+" ? "+n("")+" : "+n("_ctx.")+")"}},n.parse=function(e,t,u,c){function l(e,n){var r,u,l,f=a.read(i.strip(e));return u=g&&!i.some(f,function(e){return(e.type===s.FILTEREMPTY||e.type===s.FILTER)&&"raw"===e.match}),u&&(f.unshift({type:s.PARENOPEN,match:"("}),f.push({type:s.PARENCLOSE,match:")"}),"string"==typeof g?f=f.concat([{type:s.FILTER,match:"e"},{type:s.STRING,match:String(g)},{type:s.PARENCLOSE,match:")"}]):f.push({type:s.FILTEREMPTY,match:"e"})),r=new o(f,c,n,t.filename),l=r.parse().join(""),r.state.length&&i.throwError('Unable to parse "'+e+'"',n,t.filename),{compile:function(){return"_output += "+l+";\n"}}}function f(e,n){var r,l,f,p,h,d,m;if(i.startsWith(e,"end")){if(m=F[F.length-1],m&&m.name===e.split(/\s+/)[0].replace(/^end/,"")&&m.ends){switch(m.name){case"autoescape":g=t.autoescape;break;case"raw":D=!1}return F.pop(),void 0}D||i.throwError('Unexpected end of tag "'+e.replace(/^end/,"")+'"',n,t.filename)}if(!D){switch(f=e.split(/\s+(.+)?/),p=f.shift(),u.hasOwnProperty(p)||i.throwError('Unexpected tag "'+e+'"',n,t.filename),r=a.read(i.strip(f.join(" "))),l=new o(r,c,n,t.filename),h=u[p],h.parse(f[1],n,l,s,F,t)||i.throwError('Unexpected tag "'+p+'"',n,t.filename),l.parse(),d=l.out,p){case"autoescape":g="false"!==d[0]?d[0]:!1;break;case"raw":D=!0}return{compile:h.compile,args:d,content:[],ends:h.ends,name:p}}}function p(e){return"string"==typeof e&&(e=e.replace(/\s*$/,"")),e}e=e.replace(/\r\n/g,"\n");var h,g=t.autoescape,d=t.tagControls[0],m=t.tagControls[1],y=t.varControls[0],w=t.varControls[1],v=r(d),E=r(m),O=r(y),x=r(w),T=new RegExp("^"+v+"-?\\s*-?|-?\\s*-?"+E+"$","g"),A=new RegExp("^"+v+"-"),R=new RegExp("-"+E+"$"),C=new RegExp("^"+O+"-?\\s*-?|-?\\s*-?"+x+"$","g"),b=new RegExp("^"+O+"-"),N=new RegExp("-"+x+"$"),S=t.cmtControls[0],P=t.cmtControls[1],k="[\\s\\S]*?",I=new RegExp("("+v+k+E+"|"+O+k+x+"|"+r(S)+k+r(P)+")"),U=1,F=[],L=null,M=[],_={},D=!1;return n.parseVariable=l,i.each(e.split(I),function(e){var t,n,r,o,a;if(e){if(!D&&i.startsWith(e,y)&&i.endsWith(e,w))r=b.test(e),h=N.test(e),t=l(e.replace(C,""),U);else if(i.startsWith(e,d)&&i.endsWith(e,m)){if(r=A.test(e),h=R.test(e),t=f(e.replace(T,""),U))switch(t.name){case"extends":L=t.args.join("").replace(/^\'|\'$/g,"").replace(/^\"|\"$/g,"");break;case"block":_[t.args.join("")]=t}D&&!t&&(t=e)}else if(D||!i.startsWith(e,S)&&!i.endsWith(e,P))t=h?e.replace(/^\s*/,""):e,h=!1;else if(i.startsWith(e,S)&&i.endsWith(e,P))return;r&&M.length&&(o=M.pop(),"string"==typeof o?o=p(o):o.content&&o.content.length&&(a=p(o.content.pop()),o.content.push(a)),M.push(o)),t&&(F.length?F[F.length-1].content.push(t):M.push(t),t.name&&t.ends&&F.push(t),n=e.match(/\n/g),U+=n?n.length:0)}}),{name:t.filename,parent:L,tokens:M,blocks:_}},n.compile=function(e,t,r,o){var a="",s=i.isArray(e)?e:e.tokens;return i.each(s,function(e){var i;return"string"==typeof e?(a+='_output += "'+e.replace(/\n|\r/g,"\\n").replace(/"/g,'\\"')+'";\n',void 0):(i=e.compile(n.compile,e.args,e.content,t,r,o),a+=i||"",void 0)}),a}},{"./lexer":4,"./utils":23}],6:[function(e,t,n){function r(){return""}function o(e){if(e&&(u.each(["varControls","tagControls","cmtControls"],function(t){if(e.hasOwnProperty(t)){if(!u.isArray(e[t])||2!==e[t].length)throw new Error('Option "'+t+'" must be an array containing 2 different control strings.');if(e[t][0]===e[t][1])throw new Error('Option "'+t+'" open and close controls must not be the same.');u.each(e[t],function(e,n){if(e.length<2)throw new Error('Option "'+t+'" '+(n?"open ":"close ")+'control must be at least 2 characters. Saw "'+e+'" instead.')})}}),e.hasOwnProperty("cache")&&e.cache&&"memory"!==e.cache&&(!e.cache.get||!e.cache.set)))throw new Error("Invalid cache option "+JSON.stringify(e.cache)+' found. Expected "memory" or { get: function (key) { ... }, set: function (key, value) { ... } }.')}var i,a=e("fs"),s=e("path"),u=e("./utils"),c=e("./tags"),l=e("./filters"),f=e("./parser"),p=e("./dateformatter"),h={autoescape:!0,varControls:["{{","}}"],tagControls:["{%","%}"],cmtControls:["{#","#}"],locals:{},cache:"memory"};n.setDefaults=function(e){o(e);var t=u.extend({},h.locals,e.locals||{});u.extend(h,e),h.locals=t,i.options=u.extend(i.options,e)},n.setDefaultTZOffset=function(e){p.tzOffset=e},n.Swig=function(e){function t(e){return e&&e.locals?u.extend({},m.options.locals,e.locals):m.options.locals}function i(e){return m.options.cache?"memory"===m.options.cache?m.cache[e]:m.options.cache.get(e):void 0}function p(e,t){return m.options.cache?"memory"===m.options.cache?(m.cache[e]=t,void 0):(m.options.cache.set(e,t),void 0):void 0}function g(e,t){return u.map(t,function(t){var n=t.args?t.args.join(""):"";return"block"===t.name&&e[n]&&(t=e[n]),t.content&&t.content.length&&(t.content=g(e,t.content)),t})}function d(e,t){for(var n,r,o,i=e.parent,a=[],c=[];i;){if(!t||!t.filename)throw new Error('Cannot extend "'+i+'" because current template has no filename.');if(n=n||t.filename,n=s.resolve(s.dirname(n),i),r=m.parseFile(n,u.extend({},t,{filename:n})),i=r.parent,-1!==a.indexOf(n))throw new Error('Illegal circular extends of "'+n+'".');a.push(n),c.push(r)}for(o=c.length,o=c.length-2;o>=0;o-=1)c[o].tokens=g(c[o].blocks,c[o+1].tokens);return c}o(e),this.options=u.extend({},h,e||{}),this.cache={},this.extensions={};var m=this,y=c,w=l;this.invalidateCache=function(){"memory"===m.options.cache&&(m.cache={})},this.setFilter=function(e,t){if("function"!=typeof t)throw new Error('Filter "'+e+'" is not a valid function.');w[e]=t},this.setTag=function(e,t,n,r){if("function"!=typeof t)throw new Error('Tag "'+e+'" parse method is not a valid function.');if("function"!=typeof n)throw new Error('Tag "'+e+'" compile method is not a valid function.');y[e]={parse:t,compile:n,ends:r||!1}},this.setExtension=function(e,t){m.extensions[e]=t},this.parse=function(e,n){o(n);var r,i=t(n),a={};for(r in n)n.hasOwnProperty(r)&&"locals"!==r&&(a[r]=n[r]);return n=u.extend({},m.options,a),n.locals=i,f.parse(e,n,y,w)},this.parseFile=function(e,t){var n;if(t||(t={}),e=t.resolveFrom?s.resolve(s.dirname(t.resolveFrom),e):e,!a||!a.readFileSync)throw new Error("Unable to find file "+e+" because there is no filesystem to read from.");return n=a.readFileSync(e,"utf8"),t.filename||(t.filename=e),m.parse(n,t)},this.precompile=function(e,t){var n,r=m.parse(e,t),o=d(r,t);return o.length&&(r.tokens=g(r.blocks,o[0].tokens)),n=new Function("_swig","_ctx","_filters","utils","_fn",["  var _ext = _swig.extensions,\n",'    _output = "";',f.compile(r,o,t),"  return _output;"].join("\n  ")),{tpl:n,tokens:r}},this.render=function(e,t){return n.compile(e,t)()},this.renderFile=function(e,t,r){return r?(n.compileFile(e,{},function(e,n){return e?(r(e),void 0):(r(null,n(t)),void 0)}),void 0):n.compileFile(e)(t)},this.compile=function(e,n){function o(e){return s.tpl(m,u.extend({},a,e||{}),w,u,r)}var a,s,c=n?n.filename:null,l=c?i(c):null;return l?l:(a=t(n),s=this.precompile(e,n),u.extend(o,s.tokens),c&&p(c,o),o)},this.compileFile=function(e,t,n){var r,o;if(t||(t={}),e=t.resolveFrom?s.resolve(s.dirname(t.resolveFrom),e):e,t.filename||(t.filename=e),o=i(e))return o;if(!a||!a.readFileSync)throw new Error("Unable to find file "+e+" because there is no filesystem to read from.");return n?(a.readFile(e,"utf8",function(e,r){return e?(n(e),void 0):(n(e,m.compile(r,t)),void 0)}),void 0):(r=a.readFileSync(e,"utf8"),m.compile(r,t))},this.run=function(e,n){var o=t({locals:n});return e(m,o,w,u,r)}},i=new n.Swig,n.setFilter=i.setFilter,n.setTag=i.setTag,n.setExtension=i.setExtension,n.parseFile=i.parseFile,n.precompile=i.precompile,n.compile=i.compile,n.compileFile=i.compileFile,n.render=i.render,n.renderFile=i.renderFile,n.run=i.run,n.invalidateCache=i.invalidateCache},{"./dateformatter":2,"./filters":3,"./parser":5,"./tags":7,"./utils":23,fs:24,path:25}],7:[function(e,t,n){n.autoescape=e("./tags/autoescape"),n.block=e("./tags/block"),n.else=e("./tags/else"),n.elseif=e("./tags/elseif"),n.elif=n.elseif,n.extends=e("./tags/extends"),n.filter=e("./tags/filter"),n.for=e("./tags/for"),n.if=e("./tags/if"),n.import=e("./tags/import"),n.include=e("./tags/include"),n.macro=e("./tags/macro"),n.parent=e("./tags/parent"),n.raw=e("./tags/raw"),n.set=e("./tags/set"),n.spaceless=e("./tags/spaceless")},{"./tags/autoescape":8,"./tags/block":9,"./tags/else":10,"./tags/elseif":11,"./tags/extends":12,"./tags/filter":13,"./tags/for":14,"./tags/if":15,"./tags/import":16,"./tags/include":17,"./tags/macro":18,"./tags/parent":19,"./tags/raw":20,"./tags/set":21,"./tags/spaceless":22}],8:[function(e,t,n){var r=e("../utils"),o=["html","js"];n.compile=function(e,t,n){return e(n)},n.parse=function(e,t,n,i,a,s){var u;return n.on("*",function(e){return e.type!==i.WHITESPACE?u||e.type!==i.BOOL&&(e.type!==i.STRING||-1!==o.indexOf(e.match))?(r.throwError('Unexpected token "'+e.match+'" in autoescape tag',t,s.filename),void 0):(this.out.push(e.match),u=!0,void 0):void 0}),!0},n.ends=!0},{"../utils":23}],9:[function(e,t,n){n.compile=function(e,t,n,r,o){return e(n,r,o,t.join(""))},n.parse=function(e,t,n){return n.on("*",function(e){this.out.push(e.match)}),!0},n.ends=!0},{}],10:[function(e,t,n){n.compile=function(){return"} else {\n"},n.parse=function(e,t,n,r,o){return n.on("*",function(e){throw new Error('"else" tag does not accept any tokens. Found "'+e.match+'" on line '+t+".")}),o.length&&"if"===o[o.length-1].name}},{}],11:[function(e,t,n){var r=e("./if").parse;n.compile=function(e,t){return"} else if ("+t.join(" ")+") {\n"},n.parse=function(e,t,n,o,i){var a=r(e,t,n,o,i);return a&&i.length&&"if"===i[i.length-1].name}},{"./if":15}],12:[function(e,t,n){n.compile=function(){},n.parse=function(){return!0},n.ends=!1},{}],13:[function(e,t,n){var r=e("../filters");n.compile=function(e,t,n,r,o){var i=t.shift().replace(/\($/,""),a='(function () {\n  var _output = "";\n'+e(n,r,o)+"  return _output;\n"+"})()";return")"===t[t.length-1]&&t.pop(),t=t.length?", "+t.join(""):"",'_output += _filters["'+i+'"]('+a+t+");\n"},n.parse=function(e,t,n,o){function i(e){if(!r.hasOwnProperty(e))throw new Error('Filter "'+e+'" does not exist on line '+t+".")}var a;return n.on(o.FUNCTION,function(e){return a?!0:(a=e.match.replace(/\($/,""),i(a),this.out.push(e.match),this.state.push(e.type),void 0)}),n.on(o.VAR,function(e){return a?!0:(a=e.match,i(a),this.out.push(a),void 0)}),!0},n.ends=!0},{"../filters":3}],14:[function(e,t,n){n.compile=function(e,t,n){var r,o=t.shift(),i="__k";return t[0]&&","===t[0]&&(t.shift(),i=t.shift()),r=t.join(""),["(function () {\n","  var __l = "+r+";\n","  if (!__l) { return; }\n","  var loop = { first: false, index: 1, index0: 0, revindex: __l.length, revindex0: __l.length - 1, length: __l.length, last: false };\n","  utils.each(__l, function ("+o+", "+i+") {\n","    loop.key = "+i+";\n","    loop.first = (loop.index0 === 0);\n","    loop.last = (loop.revindex0 === 0);\n","    "+e(n),"    loop.index += 1; loop.index0 += 1; loop.revindex -= 1; loop.revindex0 -= 1;\n","  });\n","})();\n"].join("")},n.parse=function(e,t,n,r){var o,i;return n.on(r.NUMBER,function(e){var n=this.state.length?this.state[this.state.length-1]:null;if(!i||n!==r.ARRAYOPEN&&n!==r.CURLYOPEN&&n!==r.CURLYCLOSE&&n!==r.FUNCTION&&n!==r.FILTER)throw new Error('Unexpected number "'+e.match+'" on line '+t+".");return!0}),n.on(r.VAR,function(e){return i&&o?!0:(this.out.length||(o=!0),this.out.push(e.match),void 0)}),n.on(r.COMMA,function(e){return o&&this.prevToken.type===r.VAR?(this.out.push(e.match),void 0):!0}),n.on(r.COMPARATOR,function(e){if("in"!==e.match||!o)throw new Error('Unexpected token "'+e.match+'" on line '+t+".");i=!0}),!0},n.ends=!0},{}],15:[function(e,t,n){n.compile=function(e,t,n){return"if ("+t.join(" ")+") { \n"+e(n)+"\n"+"}"},n.parse=function(e,t,n,r){return n.on(r.COMPARATOR,function(e){if(this.isLast)throw new Error('Unexpected logic "'+e.match+'" on line '+t+".");if(this.prevToken.type===r.NOT)throw new Error('Attempted logic "not '+e.match+'" on line '+t+". Use !(foo "+e.match+") instead.");this.out.push(e.match)}),n.on(r.NOT,function(e){if(this.isLast)throw new Error('Unexpected logic "'+e.match+'" on line '+t+".");this.out.push(e.match)}),n.on(r.BOOL,function(e){this.out.push(e.match)}),n.on(r.LOGIC,function(e){if(!this.out.length||this.isLast)throw new Error('Unexpected logic "'+e.match+'" on line '+t+".");this.out.push(e.match),this.filterApplyIdx.pop()}),!0},n.ends=!0},{}],16:[function(e,t,n){var r=e("../utils");n.compile=function(t,n,o,i,a){var s,u=n.shift(),c=e("../swig").parseFile,l=n.shift(),f=n.shift(),p="var "+f+" = {};\n"+"(function () {\n"+'  var _output = "";\n';return s=c(l.replace(/^("|')|("|')$/g,""),{resolveFrom:a.filename}).tokens,r.each(s,function(e){e&&"macro"===e.name&&e.compile&&(p+=f+"."+e.args[0]+" = "+e.compile(t,e.args,e.content,i,r.extend({},a,{resolveFrom:u})))}),p+="})();\n"},n.parse=function(e,t,n,r,o,i){var a,s;return n.on(r.STRING,function(e){if(!a)return a=e.match,this.out.push(a),void 0;throw new Error("Unexpected string "+e.match+" on line "+t+".")}),n.on(r.VAR,function(e){if(!a||s)throw new Error('Unexpected variable "'+e.match+'" on line '+t+".");if("as"!==e.match)return s=e.match,this.out.push(s),!1}),n.on("start",function(){this.out.push(i.filename)}),!0}},{"../swig":6,"../utils":23}],17:[function(e,t,n){var r="ignore",o="missing";n.compile=function(e,t){var n=t.shift(),r=t.pop(),i=t[t.length-1]===o?t.pop():!1,a=t.join("");return"(function () {\n"+(i?"  try {\n":"")+"    _output += _swig.compileFile("+n+", {"+'resolveFrom: "'+r+'"'+"})("+(a||"_ctx")+");\n"+(i?"} catch (e) {}\n":"")+"})();\n"},n.parse=function(e,t,n,i,a,s){var u,c;return n.on(i.STRING,function(e){return u?!0:(u=e.match,this.out.push(u),void 0)}),n.on(i.VAR,function(e){if(!u)return u=e.match,!0;if(!c&&"with"===e.match)return c=!0,void 0;if(e.match===r)return!1;if(e.match===o){if(this.prevToken.match!==r)throw new Error('Unexpected token "'+o+'" on line '+t+".");return this.out.push(e.match),!1}if(this.prevToken.match===r)throw new Error('Expected "'+o+'" on line '+t+' but found "'+e.match+'".');return!0}),n.on("end",function(){this.out.push(s.filename)}),!0}},{}],18:[function(e,t,n){n.compile=function(e,t,n){var r=t.shift();return"function "+r+"("+t.join("")+") {\n"+'  var _output = "";\n'+e(n)+"\n"+"  return _output;\n"+"}\n"},n.parse=function(e,t,n,r){var o;return n.on(r.VAR,function(e){if(-1!==e.match.indexOf("."))throw new Error('Unexpected dot in macro argument "'+e.match+'" on line '+t+".");this.out.push(e.match)}),n.on(r.FUNCTION,function(e){o||(o=e.match,this.out.push(o),this.state.push(r.FUNCTION))}),n.on(r.PARENCLOSE,function(){if(!this.isLast)throw new Error("Unexpected parenthesis close on line "+t+".")}),n.on(r.COMMA,function(){return!0}),n.on("*",function(){}),!0},n.ends=!0},{}],19:[function(e,t,n){n.compile=function(e,t,n,r,o,i){if(!r||!r.length)return"";var a,s,u=(t[0],!0),c=r.length,l=0;for(l;c>l;l+=1)if(a=r[l],a.blocks&&a.blocks.hasOwnProperty(i)&&u)return s=a.blocks[i],s.compile(e,[i],s.content,r.slice(l+1),o)+"\n"},n.parse=function(e,t,n,r,o,i){return n.on("*",function(e){throw new Error('Unexpected argument "'+e.match+'" on line '+t+".")}),n.on("end",function(){this.out.push(i.filename)}),!0}},{}],20:[function(e,t,n){n.compile=function(e,t,n){return e(n)},n.parse=function(e,t,n){return n.on("*",function(e){throw new Error('Unexpected token "'+e.match+'" in raw tag on line '+t+".")}),!0},n.ends=!0},{}],21:[function(e,t,n){n.compile=function(e,t){return t.join(" ")+";\n"},n.parse=function(e,t,n,r){var o;return n.on(r.VAR,function(e){return this.out.length?!0:(o=e.match,this.out.push("var "+o+" = _ctx."+o+";\n"+o),void 0)}),n.on(r.ASSIGNMENT,function(e){if(1!==this.out.length||!o)throw new Error('Unexpected assignment "'+e.match+'" on line '+t+".");this.out.push(e.match)}),!0}},{}],22:[function(e,t,n){var r=e("../utils");n.compile=function(e,t,n,o,i){function a(e){return r.map(e,function(e){return e.content?(e.content=a(e.content),e):e.replace(/^\s+/,"").replace(/>\s+</g,"><").replace(/\s+$/,"")})}return e(a(n),o,i)},n.parse=function(e,t,n){return n.on("*",function(e){throw new Error('Unexpected token "'+e.match+'" on line '+t+".")}),!0},n.ends=!0},{"../utils":23}],23:[function(e,t,n){var r;n.strip=function(e){return e.replace(/^\s+|\s+$/g,"")},n.startsWith=function(e,t){return 0===e.indexOf(t)},n.endsWith=function(e,t){return-1!==e.indexOf(t,e.length-t.length)},n.each=function(e,t){var n,o;if(r(e))for(n=0,o=e.length,n;o>n&&t(e[n],n,e)!==!1;n+=1);else for(n in e)if(e.hasOwnProperty(n)&&t(e[n],n,e)===!1)break;return e},n.isArray=r=Array.hasOwnProperty("isArray")?Array.isArray:function(e){return e?"object"==typeof e&&-1!==Object.prototype.toString.call(e).indexOf():!1},n.some=function(e,t){var o,i,a=0;if(r(e))for(i=e.length,a;i>a&&!(o=t(e[a],a,e));a+=1);else n.each(e,function(n,r){return o=t(n,r,e),!o});return!!o},n.map=function(e,t){var n,o=0,i=[];if(r(e))for(n=e.length,o;n>o;o+=1)i[o]=t(e[o],o);else for(o in e)e.hasOwnProperty(o)&&(i[o]=t(e[o],o));return i},n.extend=function(){var e,t,n=arguments,r=n[0],o=n.length>1?Array.prototype.slice.call(n,1):[],i=0,a=o.length;for(i;a>i;i+=1){t=o[i]||{};for(e in t)t.hasOwnProperty(e)&&(r[e]=t[e])}return r},n.keys=function(e){return Object.keys?Object.keys(e):n.map(e,function(e,t){return t})},n.throwError=function(e,t,n){throw t&&(e+=" on line "+t),n&&(e+=" in file "+n),new Error(e+".")}},{}],24:[function(){},{}],25:[function(e,t,n){function r(e,t){for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}function o(e,t){for(var n=0,r=e.length;r>=0;r--){var o=e[r];"."==o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}var i=e("__browserify_process"),a=/^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/;n.resolve=function(){for(var e="",t=!1,n=arguments.length;n>=-1&&!t;n--){var a=n>=0?arguments[n]:i.cwd();"string"==typeof a&&a&&(e=a+"/"+e,t="/"===a.charAt(0))}return e=o(r(e.split("/"),function(e){return!!e}),!t).join("/"),(t?"/":"")+e||"."},n.normalize=function(e){var t="/"===e.charAt(0),n="/"===e.slice(-1);return e=o(r(e.split("/"),function(e){return!!e}),!t).join("/"),e||t||(e="."),e&&n&&(e+="/"),(t?"/":"")+e},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(r(e,function(e){return e&&"string"==typeof e}).join("/"))
},n.dirname=function(e){var t=a.exec(e)[1]||"",n=!1;return t?1===t.length||n&&t.length<=3&&":"===t.charAt(1)?t:t.substring(0,t.length-1):"."},n.basename=function(e,t){var n=a.exec(e)[2]||"";return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},n.extname=function(e){return a.exec(e)[3]||""},n.relative=function(e,t){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=n.resolve(e).substr(1),t=n.resolve(t).substr(1);for(var o=r(e.split("/")),i=r(t.split("/")),a=Math.min(o.length,i.length),s=a,u=0;a>u;u++)if(o[u]!==i[u]){s=u;break}for(var c=[],u=s;u<o.length;u++)c.push("..");return c=c.concat(i.slice(s)),c.join("/")},n.sep="/"},{__browserify_process:26}],26:[function(e,t){var n=t.exports={};n.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var n=[];return window.addEventListener("message",function(e){if(e.source===window&&"process-tick"===e.data&&(e.stopPropagation(),n.length>0)){var t=n.shift();t()}},!0),function(e){n.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),n.title="browser",n.browser=!0,n.env={},n.argv=[],n.binding=function(){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(){throw new Error("process.chdir is not supported")}},{}]},{},[1]);
//# sourceMappingURL=dist/swig.js.map