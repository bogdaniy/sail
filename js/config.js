//SAIL SYSTEM CONFIG 02.01.2014
//@author bogdaniy
config = {
	apiAddress : '/api/',
	debug : true,
	cache : false,
	version : 4,
	libsPath : '/js/libs/',
	modulesPath : '/js/modules/',
	templatesPath : '/templates/',
	libs : ['SYSTEM','URI','MODULES', "TEMPLATE", "REQ"],
	accessErrorPage : '/accessError',
	notFoundErrorPage : '/404',
	authPage : '/auth',
	webStorageTemplatePrefix : "tmplt_",
	templatesExtension : "html",
	needAuth : true,
	errorLogInConsole : true,
	errorLogOnServer : false,
	errorLogApiMethod : 'error.frontendLog',
};