/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(15),
	__webpack_require__(41),
	__webpack_require__(20),
	__webpack_require__(38),
	__webpack_require__(39),
	__webpack_require__(26),
	__webpack_require__(19),
	__webpack_require__(40),
	__webpack_require__(25),
	__webpack_require__(42),
	__webpack_require__(75),
	__webpack_require__(8),
	__webpack_require__(1),
	__webpack_require__(16),
	__webpack_require__(43),
	__webpack_require__(11)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( arr, getProto, slice, flat, push, indexOf,
	class2type, toString, hasOwn, fnToString, ObjectFunctionString,
	support, isFunction, isWindow, DOMEval, toType ) {

"use strict";

var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return window.document;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(76) ], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Initialize a jQuery object
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2),
	__webpack_require__(1),
	__webpack_require__(45),

	__webpack_require__(46)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, isFunction, rsingleTag ) {

"use strict";

// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );

return init;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(48)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Data ) {
	"use strict";

	return new Data();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};

return nodeName;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	// Only count HTML whitespace
	// Other whitespace should count in values
	// https://infra.spec.whatwg.org/#ascii-whitespace
	return ( /[^\x20\t\r\n\f]+/g );
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	// All support tests are defined in their respective modules.
	return {};
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(11),
	__webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, toType, isFunction ) {

"use strict";

// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};

return access;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2),
	__webpack_require__(1),
	__webpack_require__(7),
	__webpack_require__(95),
	__webpack_require__(66),
	__webpack_require__(65),

	__webpack_require__(4),
	__webpack_require__(67),
	__webpack_require__(37),
	__webpack_require__(13),
	__webpack_require__(68) // jQuery.param
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, isFunction, rnothtmlwhite, location, nonce, rquery ) {

"use strict";

var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(19),
	__webpack_require__(40)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( class2type, toString ) {

"use strict";

function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}

return toType;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(41),
	__webpack_require__(26),
	__webpack_require__(78),
	__webpack_require__(79),
	__webpack_require__(44),
	__webpack_require__(6),

	__webpack_require__(4),
	__webpack_require__(46),
	__webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, getProto, indexOf, dir, siblings, rneedsContext, nodeName ) {

"use strict";

var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(20),
	__webpack_require__(27)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, isFunction, slice ) {

"use strict";

function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2),
	__webpack_require__(23),
	__webpack_require__(1),
	__webpack_require__(7),
	__webpack_require__(32),
	__webpack_require__(20),
	__webpack_require__(21),
	__webpack_require__(5),
	__webpack_require__(6),

	__webpack_require__(4),
	__webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, documentElement, isFunction, rnothtmlwhite,
	rcheckableType, slice, acceptData, dataPriv, nodeName ) {

"use strict";

var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return [];
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}

return camelCase;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(9),
	__webpack_require__(17),
	__webpack_require__(6),
	__webpack_require__(30),
	__webpack_require__(33),
	__webpack_require__(31),
	__webpack_require__(61),
	__webpack_require__(86),
	__webpack_require__(60),
	__webpack_require__(52),
	__webpack_require__(62),
	__webpack_require__(34),
	__webpack_require__(63),

	__webpack_require__(4),
	__webpack_require__(47),
	__webpack_require__(3) // contains
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, access, camelCase, nodeName, rcssNum, rnumnonpx, cssExpand,
	getStyles, swap, curCSS, adjustCSS, addGetHookIf, support, finalPropName ) {

"use strict";

var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	// [[Class]] -> type pairs
	return {};
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(15)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( arr ) {
	"use strict";

	return arr.slice;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

/**
 * Determines whether an object can have data
 */
return function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(23),
	__webpack_require__(3) // jQuery.contains
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, documentElement ) {
	"use strict";

	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}

	return isAttached;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( document ) {
	"use strict";

	return document.documentElement;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(22),
	__webpack_require__(38),
	__webpack_require__(1),
	__webpack_require__(39),
	__webpack_require__(32),
	__webpack_require__(9),
	__webpack_require__(54),
	__webpack_require__(55),
	__webpack_require__(56),
	__webpack_require__(58),
	__webpack_require__(59),
	__webpack_require__(53),
	__webpack_require__(57),

	__webpack_require__(5),
	__webpack_require__(49),
	__webpack_require__(21),
	__webpack_require__(43),
	__webpack_require__(6),

	__webpack_require__(4),
	__webpack_require__(12),
	__webpack_require__(3),
	__webpack_require__(14)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, isAttached, flat, isFunction, push, rcheckableType,
	access, rtagName, rscriptType,
	wrapMap, getAll, setGlobalEval, buildFragment, support,
	dataPriv, dataUser, acceptData, DOMEval, nodeName ) {

"use strict";

var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(19)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( class2type ) {
	"use strict";

	return class2type.hasOwnProperty;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(15)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( arr ) {
	"use strict";

	return arr.indexOf;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(11),
	__webpack_require__(1),
	__webpack_require__(7)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, toType, isFunction, rnothtmlwhite ) {

"use strict";

// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(5),
	__webpack_require__(13),
	__webpack_require__(27)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, dataPriv ) {

"use strict";

jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(17),
	__webpack_require__(2),
	__webpack_require__(1),
	__webpack_require__(30),
	__webpack_require__(7),
	__webpack_require__(31),
	__webpack_require__(51),
	__webpack_require__(52),
	__webpack_require__(5),
	__webpack_require__(84),

	__webpack_require__(4),
	__webpack_require__(28),
	__webpack_require__(13),
	__webpack_require__(12),
	__webpack_require__(24),
	__webpack_require__(18),
	__webpack_require__(87)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, camelCase, document, isFunction, rcssNum, rnothtmlwhite, cssExpand,
	isHiddenWithinTree, adjustCSS, dataPriv, showHide ) {

"use strict";

var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(50)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( pnum ) {

"use strict";

return new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return [ "Top", "Right", "Bottom", "Left" ];
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return ( /^(?:checkbox|radio)$/i );
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(50)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( pnum ) {
	"use strict";

	return new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2),
	__webpack_require__(23),
	__webpack_require__(8)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, documentElement, support ) {

"use strict";

( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();

return support;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(2),
	__webpack_require__(8)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( document, support ) {

"use strict";

( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();

return support;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(7)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( rnothtmlwhite ) {
	"use strict";

	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}

	return stripAndCollapse;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2),
	__webpack_require__(5),
	__webpack_require__(21),
	__webpack_require__(25),
	__webpack_require__(1),
	__webpack_require__(16),
	__webpack_require__(14)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, dataPriv, acceptData, hasOwn, isFunction, isWindow ) {

"use strict";

var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(15)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( arr ) {

"use strict";

// Support: IE 9 - 11+, Edge 18+, Android Browser 4.0 - 4.3 only, iOS 7 - 11 only, Safari 11 only,
// Firefox <= 61 only
// Provide fallback for browsers without Array#flat.
return arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(15)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( arr ) {
	"use strict";

	return arr.push;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(19)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( class2type ) {
	"use strict";

	return class2type.toString;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return Object.getPrototypeOf;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(25)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( hasOwn ) {
	"use strict";

	return hasOwn.toString;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( document ) {
	"use strict";

	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}

	return DOMEval;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {
	"use strict";

	return jQuery.expr.match.needsContext;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	// rsingleTag matches a string consisting of a single HTML element with no attributes
	// and captures the element's name
	return ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(26),
	__webpack_require__(1),
	__webpack_require__(44),
	__webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, indexOf, isFunction, rneedsContext ) {

"use strict";

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2),
	__webpack_require__(81),
	__webpack_require__(13)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document ) {

"use strict";

// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(17),
	__webpack_require__(7),
	__webpack_require__(21)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, camelCase, rnothtmlwhite, acceptData ) {

"use strict";

function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};

return Data;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(48)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Data ) {
	"use strict";

	return new Data();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(22)

	// css is assumed
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, isAttached ) {
	"use strict";

	// isHiddenWithinTree reports if an element has a non-"none" display style (inline and/or
	// through the CSS cascade), which is useful in deciding whether or not to make it visible.
	// It differs from the :hidden selector (jQuery.expr.pseudos.hidden) in two important ways:
	// * A hidden ancestor does not force an element to be classified as hidden.
	// * Being disconnected from the document does not force an element to be classified as hidden.
	// These differences improve the behavior of .toggle() et al. when applied to elements that are
	// detached or contained within hidden ancestors (gh-2404, gh-2863).
	return function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(30)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, rcssNum ) {

"use strict";

function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}

return adjustCSS;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(11),
	__webpack_require__(22),
	__webpack_require__(54),
	__webpack_require__(55),
	__webpack_require__(56),
	__webpack_require__(58),
	__webpack_require__(59)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, toType, isAttached, rtagName, rscriptType, wrapMap, getAll, setGlobalEval ) {

"use strict";

var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}

return buildFragment;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	// rtagName captures the name from the first start tag in a string of HTML
	// https://html.spec.whatwg.org/multipage/syntax.html#tag-open-state
	// https://html.spec.whatwg.org/multipage/syntax.html#tag-name-state
	return ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return ( /^$|^module$|\/(?:java|ecma)script/i );
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(57)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( support ) {

"use strict";

// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}

return wrapMap;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(2),
	__webpack_require__(8)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( document, support ) {

"use strict";

( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();

return support;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(6)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, nodeName ) {

"use strict";

function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}

return getAll;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(5)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( dataPriv ) {

"use strict";

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}

return setGlobalEval;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(22),
	__webpack_require__(85),
	__webpack_require__(33),
	__webpack_require__(61),
	__webpack_require__(34)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, isAttached, rboxStyle, rnumnonpx, getStyles, support ) {

"use strict";

function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}

return curCSS;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}

return addGetHookIf;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(2),
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( document, jQuery ) {

"use strict";

var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}

return finalPropName;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(9),
	__webpack_require__(35),
	__webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, access, support ) {

"use strict";

var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return ( /\?/ );
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return { guid: Date.now() };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};

return jQuery.parseXML;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(11),
	__webpack_require__(32),
	__webpack_require__(1),
	__webpack_require__(4),
	__webpack_require__(12), // filter
	__webpack_require__(64)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, toType, rcheckableType, isFunction ) {

"use strict";

var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2),
	__webpack_require__(45),
	__webpack_require__(53),

	// This is the only module that needs core/support
	__webpack_require__(101)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, rsingleTag, buildFragment, support ) {

"use strict";

// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};

return jQuery.parseHTML;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(71);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(72);

__webpack_require__(73);

__webpack_require__(110);

jQuery(function () {
  $(".full-page").fullPageScroller();
});

/***/ }),
/* 72 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(3),
	__webpack_require__(12),
	__webpack_require__(27),
	__webpack_require__(13),
	__webpack_require__(80),
	__webpack_require__(47),
	__webpack_require__(82),
	__webpack_require__(28),
	__webpack_require__(83),
	__webpack_require__(88),
	__webpack_require__(14),
	__webpack_require__(92),
	__webpack_require__(24),
	__webpack_require__(94),
	__webpack_require__(96),
	__webpack_require__(18),
	__webpack_require__(74),
	__webpack_require__(68),
	__webpack_require__(10),
	__webpack_require__(97),
	__webpack_require__(98),
	__webpack_require__(99),
	__webpack_require__(100),
	__webpack_require__(67),
	__webpack_require__(69),
	__webpack_require__(29),
	__webpack_require__(102),
	__webpack_require__(103),
	__webpack_require__(104),
	__webpack_require__(105),
	__webpack_require__(108),
	__webpack_require__(109)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

return jQuery;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(42)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( fnToString ) {
	"use strict";

	return fnToString.call( Object );
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(77)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, Sizzle ) {

"use strict";

jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

// EXPOSE
var _sizzle = window.Sizzle;

Sizzle.noConflict = function() {
	if ( window.Sizzle === Sizzle ) {
		window.Sizzle = _sizzle;
	}

	return Sizzle;
};

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return Sizzle;
	}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

// Sizzle requires that there be a global window in Common-JS like environments
} else if ( typeof module !== "undefined" && module.exports ) {
	module.exports = Sizzle;
} else {
	window.Sizzle = Sizzle;
}

// EXPOSE

} )( window );


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

return function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

return function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(13)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(9),
	__webpack_require__(17),
	__webpack_require__(5),
	__webpack_require__(49)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, access, camelCase, dataPriv, dataUser ) {

"use strict";

//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(28),
	__webpack_require__(29) // Delay is optional because of this dependency
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};

return jQuery.fn.delay;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(5),
	__webpack_require__(51)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, dataPriv, isHiddenWithinTree ) {

"use strict";

var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );

return showHide;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(31)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( cssExpand ) {
	"use strict";

	return new RegExp( cssExpand.join( "|" ), "i" );
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

// A method for quickly swapping in/out CSS properties to get correct calculations.
return function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(63),

	__webpack_require__(18)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, finalPropName ) {

"use strict";

function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(89),
	__webpack_require__(64),
	__webpack_require__(90),
	__webpack_require__(91)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

// Return jQuery for attributes-only inclusion
return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(9),
	__webpack_require__(6),
	__webpack_require__(35),
	__webpack_require__(7),
	__webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, access, nodeName, support, rnothtmlwhite ) {

"use strict";

var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(36),
	__webpack_require__(1),
	__webpack_require__(7),
	__webpack_require__(5),
	__webpack_require__(4)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, stripAndCollapse, isFunction, rnothtmlwhite, dataPriv ) {

"use strict";

function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(36),
	__webpack_require__(35),
	__webpack_require__(6),
	__webpack_require__(1),

	__webpack_require__(4)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, stripAndCollapse, support, nodeName, isFunction ) {

"use strict";

var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(5),
	__webpack_require__(93),

	__webpack_require__(14),
	__webpack_require__(37)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, dataPriv, support ) {

"use strict";

// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(8)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( support ) {

"use strict";

support.focusin = "onfocusin" in window;

return support;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(10)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};

return jQuery._evalUrl;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return window.location;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(4),
	__webpack_require__(24), // clone
	__webpack_require__(12) // parent, contents
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, isFunction ) {

"use strict";

jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(8),
	__webpack_require__(10)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, support ) {

"use strict";

jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2),
	__webpack_require__(10)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document ) {

"use strict";

// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(66),
	__webpack_require__(65),
	__webpack_require__(10)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, isFunction, nonce, rquery ) {

"use strict";

var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(36),
	__webpack_require__(1),
	__webpack_require__(69),
	__webpack_require__(10),
	__webpack_require__(12),
	__webpack_require__(24),
	__webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, stripAndCollapse, isFunction ) {

"use strict";

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(2),
	__webpack_require__(8)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( document, support ) {

"use strict";

// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();

return support;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(3),
	__webpack_require__(29)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(9),
	__webpack_require__(23),
	__webpack_require__(1),
	__webpack_require__(33),
	__webpack_require__(60),
	__webpack_require__(62),
	__webpack_require__(34),
	__webpack_require__(16),
	__webpack_require__(4),
	__webpack_require__(18),
	__webpack_require__(3) // contains
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, access, documentElement, isFunction, rnumnonpx,
	curCSS, addGetHookIf, support, isWindow ) {

"use strict";

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(9),
	__webpack_require__(16),
	__webpack_require__(18)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, access, isWindow ) {

"use strict";

// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(6),
	__webpack_require__(17),
	__webpack_require__(11),
	__webpack_require__(1),
	__webpack_require__(16),
	__webpack_require__(20),

	__webpack_require__(106),
	__webpack_require__(107)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, nodeName, camelCase, toType, isFunction, isWindow, slice ) {

"use strict";

// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(10),
	__webpack_require__(14)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),

	__webpack_require__(14),
	__webpack_require__(37)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/full-page-scroller.es6");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/full-page-scroller.es6":
/*!************************************!*\
  !*** ./src/full-page-scroller.es6 ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Version: 1.0.0\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Author: lemehovskiy\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Website: http://lemehovskiy.github.io\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Repo: https://github.com/lemehovskiy/full-page-scroller\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */\n\n__webpack_require__(/*! ../test/jquery.mousewheel.js */ \"./test/jquery.mousewheel.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\"use strict\";\n\n(function ($) {\n  var FullPageScroller = function () {\n    function FullPageScroller(element, options) {\n      _classCallCheck(this, FullPageScroller);\n\n      var self = this;\n\n      //extend by function call\n      self.settings = $.extend(true, {\n        test_property: false\n      }, options);\n\n      self.$element = $(element);\n      self.$sections = self.$element.find(\">section\");\n\n      //extend by data options\n      self.data_options = self.$element.data(\"full-page-scroller\");\n      self.settings = $.extend(true, self.settings, self.data_options);\n\n      self.sectionsByHash = {};\n      self.totalSlides = self.$sections.length;\n\n      self.state = {\n        index: 0,\n        animationInProgress: false\n      };\n\n      self.init();\n    }\n\n    _createClass(FullPageScroller, [{\n      key: \"init\",\n      value: function init() {\n        var self = this;\n\n        self.$sections.each(function (index, el) {\n          self.sectionsByHash[index] = {\n            $element: el\n          };\n        });\n\n        this.initSwipe();\n        this.initScroll();\n        this.goToSlide(3);\n      }\n    }, {\n      key: \"goToSlide\",\n      value: function goToSlide(index) {\n        console.log(\"goToSlide\");\n        // console.log(index);\n        var self = this;\n\n        self.state.index = index;\n\n        $([document.documentElement]).animate({\n          scrollTop: $(self.sectionsByHash[index].$element).offset().top\n        }, 1000, function () {\n          console.log(\"animationEnd\");\n          self.state.animationInProgress = false;\n        });\n      }\n    }, {\n      key: \"goPrev\",\n      value: function goPrev() {\n        if (this.state.animationInProgress) return;\n\n        var prevIndex = this.state.index - 1;\n        if (prevIndex >= 0) {\n          console.log(\"goPrev\");\n          this.state.animationInProgress = true;\n          this.goToSlide(prevIndex);\n        }\n      }\n    }, {\n      key: \"goNext\",\n      value: function goNext() {\n        if (this.state.animationInProgress) return;\n\n        var nextIndex = this.state.index + 1;\n        if (nextIndex > this.totalSlides - 1) return;\n\n        console.log(\"goNext\");\n        this.goToSlide(nextIndex);\n      }\n    }, {\n      key: \"initScroll\",\n      value: function initScroll() {\n        var self = this;\n        var absDeltaY = 0;\n        var scrollTimer = false;\n        var accelerationTimer = null;\n        var prevAbsDeltaYUp = 0;\n        var prevAbsDeltaYDown = 0;\n\n        self.$element.on(\"scroll touchmove mousewheel\", function (e) {\n          // console.log('handleScroll');\n          // console.log(self.state.animationInProgress);\n          if (self.state.animationInProgress) {\n            e.preventDefault();\n            e.stopPropagation();\n            return false;\n          }\n          absDeltaY = Math.abs(e.originalEvent.deltaY);\n\n          if (e.originalEvent.deltaY < 0) {\n            if (absDeltaY > prevAbsDeltaYUp) {\n              self.goPrev();\n              prevAbsDeltaYUp = absDeltaY;\n            }\n          } else if (e.originalEvent.deltaY > 0) {\n            if (absDeltaY > prevAbsDeltaYDown) {\n              self.goNext();\n              prevAbsDeltaYDown = absDeltaY;\n            }\n          }\n\n          clearTimeout(scrollTimer);\n          scrollTimer = setTimeout(function () {\n            prevAbsDeltaYUp = 0;\n            prevAbsDeltaYDown = 0;\n          }, 50);\n\n          // e.preventDefault();\n          // e.stopPropagation();\n          // return false;\n        });\n      }\n    }, {\n      key: \"initSwipe\",\n      value: function initSwipe() {\n        var self = this;\n        self.$element[0].addEventListener(\"touchstart\", handleTouchStart, false);\n        self.$element[0].addEventListener(\"touchmove\", handleTouchMove, false);\n\n        var xDown = null;\n        var yDown = null;\n\n        function getTouches(evt) {\n          return evt.touches || // browser API\n          evt.originalEvent.touches; // jQuery\n        }\n\n        function handleTouchStart(evt) {\n          var firstTouch = getTouches(evt)[0];\n          xDown = firstTouch.clientX;\n          yDown = firstTouch.clientY;\n        }\n\n        function handleTouchMove(evt) {\n          if (!xDown || !yDown) {\n            return;\n          }\n\n          var xUp = evt.touches[0].clientX;\n          var yUp = evt.touches[0].clientY;\n\n          var xDiff = xDown - xUp;\n          var yDiff = yDown - yUp;\n\n          if (Math.abs(xDiff) > Math.abs(yDiff)) {\n            if (xDiff > 0) {\n              self.goNext();\n            } else {\n              self.goPrev();\n            }\n          } else {\n            if (yDiff > 0) {\n              self.goNext();\n            } else {\n              self.goPrev();\n            }\n          }\n\n          xDown = null;\n          yDown = null;\n        }\n      }\n    }]);\n\n    return FullPageScroller;\n  }();\n\n  $.fn.fullPageScroller = function () {\n    var $this = this,\n        opt = arguments[0],\n        args = Array.prototype.slice.call(arguments, 1),\n        length = $this.length,\n        i = void 0,\n        ret = void 0;\n    for (i = 0; i < length; i++) {\n      if ((typeof opt === \"undefined\" ? \"undefined\" : _typeof(opt)) == \"object\" || typeof opt == \"undefined\") $this[i].full_page_scroller = new FullPageScroller($this[i], opt);else ret = $this[i].full_page_scroller[opt].apply($this[i].full_page_scroller, args);\n      if (typeof ret != \"undefined\") return ret;\n    }\n    return $this;\n  };\n})(jQuery);\n\n//# sourceURL=webpack:///./src/full-page-scroller.es6?");

/***/ }),

/***/ "./test/jquery.mousewheel.js":
/*!***********************************!*\
  !*** ./test/jquery.mousewheel.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n * jQuery Mousewheel 3.1.13\n * Copyright OpenJS Foundation and other contributors\n */\n\n( function( factory ) {\n    if ( true ) {\n\n        // AMD. Register as an anonymous module.\n        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ \"./test/node_modules/jquery/dist/jquery.js\") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n} )( function( $ ) {\n\n    var toFix  = [ \"wheel\", \"mousewheel\", \"DOMMouseScroll\", \"MozMousePixelScroll\" ],\n        toBind = ( \"onwheel\" in window.document || window.document.documentMode >= 9 ) ?\n                    [ \"wheel\" ] : [ \"mousewheel\", \"DomMouseScroll\", \"MozMousePixelScroll\" ],\n        slice  = Array.prototype.slice,\n        nullLowestDeltaTimeout, lowestDelta;\n\n    if ( $.event.fixHooks ) {\n        for ( var i = toFix.length; i; ) {\n            $.event.fixHooks[ toFix[ --i ] ] = $.event.mouseHooks;\n        }\n    }\n\n    var special = $.event.special.mousewheel = {\n        version: \"3.1.12\",\n\n        setup: function() {\n            if ( this.addEventListener ) {\n                for ( var i = toBind.length; i; ) {\n                    this.addEventListener( toBind[ --i ], handler, false );\n                }\n            } else {\n                this.onmousewheel = handler;\n            }\n\n            // Store the line height and page height for this particular element\n            $.data( this, \"mousewheel-line-height\", special.getLineHeight( this ) );\n            $.data( this, \"mousewheel-page-height\", special.getPageHeight( this ) );\n        },\n\n        teardown: function() {\n            if ( this.removeEventListener ) {\n                for ( var i = toBind.length; i; ) {\n                    this.removeEventListener( toBind[ --i ], handler, false );\n                }\n            } else {\n                this.onmousewheel = null;\n            }\n\n            // Clean up the data we added to the element\n            $.removeData( this, \"mousewheel-line-height\" );\n            $.removeData( this, \"mousewheel-page-height\" );\n        },\n\n        getLineHeight: function( elem ) {\n            var $elem = $( elem ),\n                $parent = $elem[ \"offsetParent\" in $.fn ? \"offsetParent\" : \"parent\" ]();\n            if ( !$parent.length ) {\n                $parent = $( \"body\" );\n            }\n            return parseInt( $parent.css( \"fontSize\" ), 10 ) ||\n                parseInt( $elem.css( \"fontSize\" ), 10 ) || 16;\n        },\n\n        getPageHeight: function( elem ) {\n            return $( elem ).height();\n        },\n\n        settings: {\n            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below\n            normalizeOffset: true  // calls getBoundingClientRect for each event\n        }\n    };\n\n    $.fn.extend( {\n        mousewheel: function( fn ) {\n            return fn ? this.on( \"mousewheel\", fn ) : this.trigger( \"mousewheel\" );\n        },\n\n        unmousewheel: function( fn ) {\n            return this.off( \"mousewheel\", fn );\n        }\n    } );\n\n\n    function handler( event ) {\n        var orgEvent   = event || window.event,\n            args       = slice.call( arguments, 1 ),\n            delta      = 0,\n            deltaX     = 0,\n            deltaY     = 0,\n            absDelta   = 0;\n        event = $.event.fix( orgEvent );\n        event.type = \"mousewheel\";\n\n        // Old school scrollwheel delta\n        if ( \"detail\" in orgEvent ) {\n            deltaY = orgEvent.detail * -1;\n        }\n        if ( \"wheelDelta\" in orgEvent ) {\n            deltaY = orgEvent.wheelDelta;\n        }\n        if ( \"wheelDeltaY\" in orgEvent ) {\n            deltaY = orgEvent.wheelDeltaY;\n        }\n        if ( \"wheelDeltaX\" in orgEvent ) {\n            deltaX = orgEvent.wheelDeltaX * -1;\n        }\n\n        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event\n        if ( \"axis\" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {\n            deltaX = deltaY * -1;\n            deltaY = 0;\n        }\n\n        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy\n        delta = deltaY === 0 ? deltaX : deltaY;\n\n        // New school wheel delta (wheel event)\n        if ( \"deltaY\" in orgEvent ) {\n            deltaY = orgEvent.deltaY * -1;\n            delta  = deltaY;\n        }\n        if ( \"deltaX\" in orgEvent ) {\n            deltaX = orgEvent.deltaX;\n            if ( deltaY === 0 ) {\n                delta  = deltaX * -1;\n            }\n        }\n\n        // No change actually happened, no reason to go any further\n        if ( deltaY === 0 && deltaX === 0 ) {\n            return;\n        }\n\n        // Need to convert lines and pages to pixels if we aren't already in pixels\n        // There are three delta modes:\n        //   * deltaMode 0 is by pixels, nothing to do\n        //   * deltaMode 1 is by lines\n        //   * deltaMode 2 is by pages\n        if ( orgEvent.deltaMode === 1 ) {\n            var lineHeight = $.data( this, \"mousewheel-line-height\" );\n            delta  *= lineHeight;\n            deltaY *= lineHeight;\n            deltaX *= lineHeight;\n        } else if ( orgEvent.deltaMode === 2 ) {\n            var pageHeight = $.data( this, \"mousewheel-page-height\" );\n            delta  *= pageHeight;\n            deltaY *= pageHeight;\n            deltaX *= pageHeight;\n        }\n\n        // Store lowest absolute delta to normalize the delta values\n        absDelta = Math.max( Math.abs( deltaY ), Math.abs( deltaX ) );\n\n        if ( !lowestDelta || absDelta < lowestDelta ) {\n            lowestDelta = absDelta;\n\n            // Adjust older deltas if necessary\n            if ( shouldAdjustOldDeltas( orgEvent, absDelta ) ) {\n                lowestDelta /= 40;\n            }\n        }\n\n        // Adjust older deltas if necessary\n        if ( shouldAdjustOldDeltas( orgEvent, absDelta ) ) {\n\n            // Divide all the things by 40!\n            delta  /= 40;\n            deltaX /= 40;\n            deltaY /= 40;\n        }\n\n        // Get a whole, normalized value for the deltas\n        delta  = Math[ delta  >= 1 ? \"floor\" : \"ceil\" ]( delta  / lowestDelta );\n        deltaX = Math[ deltaX >= 1 ? \"floor\" : \"ceil\" ]( deltaX / lowestDelta );\n        deltaY = Math[ deltaY >= 1 ? \"floor\" : \"ceil\" ]( deltaY / lowestDelta );\n\n        // Normalise offsetX and offsetY properties\n        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {\n            var boundingRect = this.getBoundingClientRect();\n            event.offsetX = event.clientX - boundingRect.left;\n            event.offsetY = event.clientY - boundingRect.top;\n        }\n\n        // Add information to the event object\n        event.deltaX = deltaX;\n        event.deltaY = deltaY;\n        event.deltaFactor = lowestDelta;\n\n        // Go ahead and set deltaMode to 0 since we converted to pixels\n        // Although this is a little odd since we overwrite the deltaX/Y\n        // properties with normalized deltas.\n        event.deltaMode = 0;\n\n        // Add event and delta to the front of the arguments\n        args.unshift( event, delta, deltaX, deltaY );\n\n        // Clearout lowestDelta after sometime to better\n        // handle multiple device types that give different\n        // a different lowestDelta\n        // Ex: trackpad = 3 and mouse wheel = 120\n        if ( nullLowestDeltaTimeout ) {\n            window.clearTimeout( nullLowestDeltaTimeout );\n        }\n        nullLowestDeltaTimeout = window.setTimeout( nullLowestDelta, 200 );\n\n        return ( $.event.dispatch || $.event.handle ).apply( this, args );\n    }\n\n    function nullLowestDelta() {\n        lowestDelta = null;\n    }\n\n    function shouldAdjustOldDeltas( orgEvent, absDelta ) {\n\n        // If this is an older event and the delta is divisable by 120,\n        // then we are assuming that the browser is treating this as an\n        // older mouse wheel event and that we should divide the deltas\n        // by 40 to try and get a more usable deltaFactor.\n        // Side note, this actually impacts the reported scroll distance\n        // in older browsers and can cause scrolling to be slower than native.\n        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.\n        return special.settings.adjustOldDeltas && orgEvent.type === \"mousewheel\" &&\n            absDelta % 120 === 0;\n    }\n\n} );\n\n//# sourceURL=webpack:///./test/jquery.mousewheel.js?");

/***/ }),

/***/ "./test/node_modules/jquery/dist/jquery.js":
/*!*************************************************!*\
  !*** ./test/node_modules/jquery/dist/jquery.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n * jQuery JavaScript Library v3.5.1\n * https://jquery.com/\n *\n * Includes Sizzle.js\n * https://sizzlejs.com/\n *\n * Copyright JS Foundation and other contributors\n * Released under the MIT license\n * https://jquery.org/license\n *\n * Date: 2020-05-04T22:49Z\n */\n( function( global, factory ) {\n\n\t\"use strict\";\n\n\tif (  true && typeof module.exports === \"object\" ) {\n\n\t\t// For CommonJS and CommonJS-like environments where a proper `window`\n\t\t// is present, execute the factory and get jQuery.\n\t\t// For environments that do not have a `window` with a `document`\n\t\t// (such as Node.js), expose a factory as module.exports.\n\t\t// This accentuates the need for the creation of a real `window`.\n\t\t// e.g. var jQuery = require(\"jquery\")(window);\n\t\t// See ticket #14549 for more info.\n\t\tmodule.exports = global.document ?\n\t\t\tfactory( global, true ) :\n\t\t\tfunction( w ) {\n\t\t\t\tif ( !w.document ) {\n\t\t\t\t\tthrow new Error( \"jQuery requires a window with a document\" );\n\t\t\t\t}\n\t\t\t\treturn factory( w );\n\t\t\t};\n\t} else {\n\t\tfactory( global );\n\t}\n\n// Pass this if window is not defined yet\n} )( typeof window !== \"undefined\" ? window : this, function( window, noGlobal ) {\n\n// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1\n// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode\n// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common\n// enough that all such attempts are guarded in a try block.\n\"use strict\";\n\nvar arr = [];\n\nvar getProto = Object.getPrototypeOf;\n\nvar slice = arr.slice;\n\nvar flat = arr.flat ? function( array ) {\n\treturn arr.flat.call( array );\n} : function( array ) {\n\treturn arr.concat.apply( [], array );\n};\n\n\nvar push = arr.push;\n\nvar indexOf = arr.indexOf;\n\nvar class2type = {};\n\nvar toString = class2type.toString;\n\nvar hasOwn = class2type.hasOwnProperty;\n\nvar fnToString = hasOwn.toString;\n\nvar ObjectFunctionString = fnToString.call( Object );\n\nvar support = {};\n\nvar isFunction = function isFunction( obj ) {\n\n      // Support: Chrome <=57, Firefox <=52\n      // In some browsers, typeof returns \"function\" for HTML <object> elements\n      // (i.e., `typeof document.createElement( \"object\" ) === \"function\"`).\n      // We don't want to classify *any* DOM node as a function.\n      return typeof obj === \"function\" && typeof obj.nodeType !== \"number\";\n  };\n\n\nvar isWindow = function isWindow( obj ) {\n\t\treturn obj != null && obj === obj.window;\n\t};\n\n\nvar document = window.document;\n\n\n\n\tvar preservedScriptAttributes = {\n\t\ttype: true,\n\t\tsrc: true,\n\t\tnonce: true,\n\t\tnoModule: true\n\t};\n\n\tfunction DOMEval( code, node, doc ) {\n\t\tdoc = doc || document;\n\n\t\tvar i, val,\n\t\t\tscript = doc.createElement( \"script\" );\n\n\t\tscript.text = code;\n\t\tif ( node ) {\n\t\t\tfor ( i in preservedScriptAttributes ) {\n\n\t\t\t\t// Support: Firefox 64+, Edge 18+\n\t\t\t\t// Some browsers don't support the \"nonce\" property on scripts.\n\t\t\t\t// On the other hand, just using `getAttribute` is not enough as\n\t\t\t\t// the `nonce` attribute is reset to an empty string whenever it\n\t\t\t\t// becomes browsing-context connected.\n\t\t\t\t// See https://github.com/whatwg/html/issues/2369\n\t\t\t\t// See https://html.spec.whatwg.org/#nonce-attributes\n\t\t\t\t// The `node.getAttribute` check was added for the sake of\n\t\t\t\t// `jQuery.globalEval` so that it can fake a nonce-containing node\n\t\t\t\t// via an object.\n\t\t\t\tval = node[ i ] || node.getAttribute && node.getAttribute( i );\n\t\t\t\tif ( val ) {\n\t\t\t\t\tscript.setAttribute( i, val );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tdoc.head.appendChild( script ).parentNode.removeChild( script );\n\t}\n\n\nfunction toType( obj ) {\n\tif ( obj == null ) {\n\t\treturn obj + \"\";\n\t}\n\n\t// Support: Android <=2.3 only (functionish RegExp)\n\treturn typeof obj === \"object\" || typeof obj === \"function\" ?\n\t\tclass2type[ toString.call( obj ) ] || \"object\" :\n\t\ttypeof obj;\n}\n/* global Symbol */\n// Defining this global in .eslintrc.json would create a danger of using the global\n// unguarded in another place, it seems safer to define global only for this module\n\n\n\nvar\n\tversion = \"3.5.1\",\n\n\t// Define a local copy of jQuery\n\tjQuery = function( selector, context ) {\n\n\t\t// The jQuery object is actually just the init constructor 'enhanced'\n\t\t// Need init if jQuery is called (just allow error to be thrown if not included)\n\t\treturn new jQuery.fn.init( selector, context );\n\t};\n\njQuery.fn = jQuery.prototype = {\n\n\t// The current version of jQuery being used\n\tjquery: version,\n\n\tconstructor: jQuery,\n\n\t// The default length of a jQuery object is 0\n\tlength: 0,\n\n\ttoArray: function() {\n\t\treturn slice.call( this );\n\t},\n\n\t// Get the Nth element in the matched element set OR\n\t// Get the whole matched element set as a clean array\n\tget: function( num ) {\n\n\t\t// Return all the elements in a clean array\n\t\tif ( num == null ) {\n\t\t\treturn slice.call( this );\n\t\t}\n\n\t\t// Return just the one element from the set\n\t\treturn num < 0 ? this[ num + this.length ] : this[ num ];\n\t},\n\n\t// Take an array of elements and push it onto the stack\n\t// (returning the new matched element set)\n\tpushStack: function( elems ) {\n\n\t\t// Build a new jQuery matched element set\n\t\tvar ret = jQuery.merge( this.constructor(), elems );\n\n\t\t// Add the old object onto the stack (as a reference)\n\t\tret.prevObject = this;\n\n\t\t// Return the newly-formed element set\n\t\treturn ret;\n\t},\n\n\t// Execute a callback for every element in the matched set.\n\teach: function( callback ) {\n\t\treturn jQuery.each( this, callback );\n\t},\n\n\tmap: function( callback ) {\n\t\treturn this.pushStack( jQuery.map( this, function( elem, i ) {\n\t\t\treturn callback.call( elem, i, elem );\n\t\t} ) );\n\t},\n\n\tslice: function() {\n\t\treturn this.pushStack( slice.apply( this, arguments ) );\n\t},\n\n\tfirst: function() {\n\t\treturn this.eq( 0 );\n\t},\n\n\tlast: function() {\n\t\treturn this.eq( -1 );\n\t},\n\n\teven: function() {\n\t\treturn this.pushStack( jQuery.grep( this, function( _elem, i ) {\n\t\t\treturn ( i + 1 ) % 2;\n\t\t} ) );\n\t},\n\n\todd: function() {\n\t\treturn this.pushStack( jQuery.grep( this, function( _elem, i ) {\n\t\t\treturn i % 2;\n\t\t} ) );\n\t},\n\n\teq: function( i ) {\n\t\tvar len = this.length,\n\t\t\tj = +i + ( i < 0 ? len : 0 );\n\t\treturn this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );\n\t},\n\n\tend: function() {\n\t\treturn this.prevObject || this.constructor();\n\t},\n\n\t// For internal use only.\n\t// Behaves like an Array's method, not like a jQuery method.\n\tpush: push,\n\tsort: arr.sort,\n\tsplice: arr.splice\n};\n\njQuery.extend = jQuery.fn.extend = function() {\n\tvar options, name, src, copy, copyIsArray, clone,\n\t\ttarget = arguments[ 0 ] || {},\n\t\ti = 1,\n\t\tlength = arguments.length,\n\t\tdeep = false;\n\n\t// Handle a deep copy situation\n\tif ( typeof target === \"boolean\" ) {\n\t\tdeep = target;\n\n\t\t// Skip the boolean and the target\n\t\ttarget = arguments[ i ] || {};\n\t\ti++;\n\t}\n\n\t// Handle case when target is a string or something (possible in deep copy)\n\tif ( typeof target !== \"object\" && !isFunction( target ) ) {\n\t\ttarget = {};\n\t}\n\n\t// Extend jQuery itself if only one argument is passed\n\tif ( i === length ) {\n\t\ttarget = this;\n\t\ti--;\n\t}\n\n\tfor ( ; i < length; i++ ) {\n\n\t\t// Only deal with non-null/undefined values\n\t\tif ( ( options = arguments[ i ] ) != null ) {\n\n\t\t\t// Extend the base object\n\t\t\tfor ( name in options ) {\n\t\t\t\tcopy = options[ name ];\n\n\t\t\t\t// Prevent Object.prototype pollution\n\t\t\t\t// Prevent never-ending loop\n\t\t\t\tif ( name === \"__proto__\" || target === copy ) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\t// Recurse if we're merging plain objects or arrays\n\t\t\t\tif ( deep && copy && ( jQuery.isPlainObject( copy ) ||\n\t\t\t\t\t( copyIsArray = Array.isArray( copy ) ) ) ) {\n\t\t\t\t\tsrc = target[ name ];\n\n\t\t\t\t\t// Ensure proper type for the source value\n\t\t\t\t\tif ( copyIsArray && !Array.isArray( src ) ) {\n\t\t\t\t\t\tclone = [];\n\t\t\t\t\t} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {\n\t\t\t\t\t\tclone = {};\n\t\t\t\t\t} else {\n\t\t\t\t\t\tclone = src;\n\t\t\t\t\t}\n\t\t\t\t\tcopyIsArray = false;\n\n\t\t\t\t\t// Never move original objects, clone them\n\t\t\t\t\ttarget[ name ] = jQuery.extend( deep, clone, copy );\n\n\t\t\t\t// Don't bring in undefined values\n\t\t\t\t} else if ( copy !== undefined ) {\n\t\t\t\t\ttarget[ name ] = copy;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t// Return the modified object\n\treturn target;\n};\n\njQuery.extend( {\n\n\t// Unique for each copy of jQuery on the page\n\texpando: \"jQuery\" + ( version + Math.random() ).replace( /\\D/g, \"\" ),\n\n\t// Assume jQuery is ready without the ready module\n\tisReady: true,\n\n\terror: function( msg ) {\n\t\tthrow new Error( msg );\n\t},\n\n\tnoop: function() {},\n\n\tisPlainObject: function( obj ) {\n\t\tvar proto, Ctor;\n\n\t\t// Detect obvious negatives\n\t\t// Use toString instead of jQuery.type to catch host objects\n\t\tif ( !obj || toString.call( obj ) !== \"[object Object]\" ) {\n\t\t\treturn false;\n\t\t}\n\n\t\tproto = getProto( obj );\n\n\t\t// Objects with no prototype (e.g., `Object.create( null )`) are plain\n\t\tif ( !proto ) {\n\t\t\treturn true;\n\t\t}\n\n\t\t// Objects with prototype are plain iff they were constructed by a global Object function\n\t\tCtor = hasOwn.call( proto, \"constructor\" ) && proto.constructor;\n\t\treturn typeof Ctor === \"function\" && fnToString.call( Ctor ) === ObjectFunctionString;\n\t},\n\n\tisEmptyObject: function( obj ) {\n\t\tvar name;\n\n\t\tfor ( name in obj ) {\n\t\t\treturn false;\n\t\t}\n\t\treturn true;\n\t},\n\n\t// Evaluates a script in a provided context; falls back to the global one\n\t// if not specified.\n\tglobalEval: function( code, options, doc ) {\n\t\tDOMEval( code, { nonce: options && options.nonce }, doc );\n\t},\n\n\teach: function( obj, callback ) {\n\t\tvar length, i = 0;\n\n\t\tif ( isArrayLike( obj ) ) {\n\t\t\tlength = obj.length;\n\t\t\tfor ( ; i < length; i++ ) {\n\t\t\t\tif ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\t\t} else {\n\t\t\tfor ( i in obj ) {\n\t\t\t\tif ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn obj;\n\t},\n\n\t// results is for internal usage only\n\tmakeArray: function( arr, results ) {\n\t\tvar ret = results || [];\n\n\t\tif ( arr != null ) {\n\t\t\tif ( isArrayLike( Object( arr ) ) ) {\n\t\t\t\tjQuery.merge( ret,\n\t\t\t\t\ttypeof arr === \"string\" ?\n\t\t\t\t\t[ arr ] : arr\n\t\t\t\t);\n\t\t\t} else {\n\t\t\t\tpush.call( ret, arr );\n\t\t\t}\n\t\t}\n\n\t\treturn ret;\n\t},\n\n\tinArray: function( elem, arr, i ) {\n\t\treturn arr == null ? -1 : indexOf.call( arr, elem, i );\n\t},\n\n\t// Support: Android <=4.0 only, PhantomJS 1 only\n\t// push.apply(_, arraylike) throws on ancient WebKit\n\tmerge: function( first, second ) {\n\t\tvar len = +second.length,\n\t\t\tj = 0,\n\t\t\ti = first.length;\n\n\t\tfor ( ; j < len; j++ ) {\n\t\t\tfirst[ i++ ] = second[ j ];\n\t\t}\n\n\t\tfirst.length = i;\n\n\t\treturn first;\n\t},\n\n\tgrep: function( elems, callback, invert ) {\n\t\tvar callbackInverse,\n\t\t\tmatches = [],\n\t\t\ti = 0,\n\t\t\tlength = elems.length,\n\t\t\tcallbackExpect = !invert;\n\n\t\t// Go through the array, only saving the items\n\t\t// that pass the validator function\n\t\tfor ( ; i < length; i++ ) {\n\t\t\tcallbackInverse = !callback( elems[ i ], i );\n\t\t\tif ( callbackInverse !== callbackExpect ) {\n\t\t\t\tmatches.push( elems[ i ] );\n\t\t\t}\n\t\t}\n\n\t\treturn matches;\n\t},\n\n\t// arg is for internal usage only\n\tmap: function( elems, callback, arg ) {\n\t\tvar length, value,\n\t\t\ti = 0,\n\t\t\tret = [];\n\n\t\t// Go through the array, translating each of the items to their new values\n\t\tif ( isArrayLike( elems ) ) {\n\t\t\tlength = elems.length;\n\t\t\tfor ( ; i < length; i++ ) {\n\t\t\t\tvalue = callback( elems[ i ], i, arg );\n\n\t\t\t\tif ( value != null ) {\n\t\t\t\t\tret.push( value );\n\t\t\t\t}\n\t\t\t}\n\n\t\t// Go through every key on the object,\n\t\t} else {\n\t\t\tfor ( i in elems ) {\n\t\t\t\tvalue = callback( elems[ i ], i, arg );\n\n\t\t\t\tif ( value != null ) {\n\t\t\t\t\tret.push( value );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t// Flatten any nested arrays\n\t\treturn flat( ret );\n\t},\n\n\t// A global GUID counter for objects\n\tguid: 1,\n\n\t// jQuery.support is not used in Core but other projects attach their\n\t// properties to it so it needs to exist.\n\tsupport: support\n} );\n\nif ( typeof Symbol === \"function\" ) {\n\tjQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];\n}\n\n// Populate the class2type map\njQuery.each( \"Boolean Number String Function Array Date RegExp Object Error Symbol\".split( \" \" ),\nfunction( _i, name ) {\n\tclass2type[ \"[object \" + name + \"]\" ] = name.toLowerCase();\n} );\n\nfunction isArrayLike( obj ) {\n\n\t// Support: real iOS 8.2 only (not reproducible in simulator)\n\t// `in` check used to prevent JIT error (gh-2145)\n\t// hasOwn isn't used here due to false negatives\n\t// regarding Nodelist length in IE\n\tvar length = !!obj && \"length\" in obj && obj.length,\n\t\ttype = toType( obj );\n\n\tif ( isFunction( obj ) || isWindow( obj ) ) {\n\t\treturn false;\n\t}\n\n\treturn type === \"array\" || length === 0 ||\n\t\ttypeof length === \"number\" && length > 0 && ( length - 1 ) in obj;\n}\nvar Sizzle =\n/*!\n * Sizzle CSS Selector Engine v2.3.5\n * https://sizzlejs.com/\n *\n * Copyright JS Foundation and other contributors\n * Released under the MIT license\n * https://js.foundation/\n *\n * Date: 2020-03-14\n */\n( function( window ) {\nvar i,\n\tsupport,\n\tExpr,\n\tgetText,\n\tisXML,\n\ttokenize,\n\tcompile,\n\tselect,\n\toutermostContext,\n\tsortInput,\n\thasDuplicate,\n\n\t// Local document vars\n\tsetDocument,\n\tdocument,\n\tdocElem,\n\tdocumentIsHTML,\n\trbuggyQSA,\n\trbuggyMatches,\n\tmatches,\n\tcontains,\n\n\t// Instance-specific data\n\texpando = \"sizzle\" + 1 * new Date(),\n\tpreferredDoc = window.document,\n\tdirruns = 0,\n\tdone = 0,\n\tclassCache = createCache(),\n\ttokenCache = createCache(),\n\tcompilerCache = createCache(),\n\tnonnativeSelectorCache = createCache(),\n\tsortOrder = function( a, b ) {\n\t\tif ( a === b ) {\n\t\t\thasDuplicate = true;\n\t\t}\n\t\treturn 0;\n\t},\n\n\t// Instance methods\n\thasOwn = ( {} ).hasOwnProperty,\n\tarr = [],\n\tpop = arr.pop,\n\tpushNative = arr.push,\n\tpush = arr.push,\n\tslice = arr.slice,\n\n\t// Use a stripped-down indexOf as it's faster than native\n\t// https://jsperf.com/thor-indexof-vs-for/5\n\tindexOf = function( list, elem ) {\n\t\tvar i = 0,\n\t\t\tlen = list.length;\n\t\tfor ( ; i < len; i++ ) {\n\t\t\tif ( list[ i ] === elem ) {\n\t\t\t\treturn i;\n\t\t\t}\n\t\t}\n\t\treturn -1;\n\t},\n\n\tbooleans = \"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|\" +\n\t\t\"ismap|loop|multiple|open|readonly|required|scoped\",\n\n\t// Regular expressions\n\n\t// http://www.w3.org/TR/css3-selectors/#whitespace\n\twhitespace = \"[\\\\x20\\\\t\\\\r\\\\n\\\\f]\",\n\n\t// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram\n\tidentifier = \"(?:\\\\\\\\[\\\\da-fA-F]{1,6}\" + whitespace +\n\t\t\"?|\\\\\\\\[^\\\\r\\\\n\\\\f]|[\\\\w-]|[^\\0-\\\\x7f])+\",\n\n\t// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors\n\tattributes = \"\\\\[\" + whitespace + \"*(\" + identifier + \")(?:\" + whitespace +\n\n\t\t// Operator (capture 2)\n\t\t\"*([*^$|!~]?=)\" + whitespace +\n\n\t\t// \"Attribute values must be CSS identifiers [capture 5]\n\t\t// or strings [capture 3 or capture 4]\"\n\t\t\"*(?:'((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\\"((?:\\\\\\\\.|[^\\\\\\\\\\\"])*)\\\"|(\" + identifier + \"))|)\" +\n\t\twhitespace + \"*\\\\]\",\n\n\tpseudos = \":(\" + identifier + \")(?:\\\\((\" +\n\n\t\t// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:\n\t\t// 1. quoted (capture 3; capture 4 or capture 5)\n\t\t\"('((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\\"((?:\\\\\\\\.|[^\\\\\\\\\\\"])*)\\\")|\" +\n\n\t\t// 2. simple (capture 6)\n\t\t\"((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|\" + attributes + \")*)|\" +\n\n\t\t// 3. anything else (capture 2)\n\t\t\".*\" +\n\t\t\")\\\\)|)\",\n\n\t// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter\n\trwhitespace = new RegExp( whitespace + \"+\", \"g\" ),\n\trtrim = new RegExp( \"^\" + whitespace + \"+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)\" +\n\t\twhitespace + \"+$\", \"g\" ),\n\n\trcomma = new RegExp( \"^\" + whitespace + \"*,\" + whitespace + \"*\" ),\n\trcombinators = new RegExp( \"^\" + whitespace + \"*([>+~]|\" + whitespace + \")\" + whitespace +\n\t\t\"*\" ),\n\trdescend = new RegExp( whitespace + \"|>\" ),\n\n\trpseudo = new RegExp( pseudos ),\n\tridentifier = new RegExp( \"^\" + identifier + \"$\" ),\n\n\tmatchExpr = {\n\t\t\"ID\": new RegExp( \"^#(\" + identifier + \")\" ),\n\t\t\"CLASS\": new RegExp( \"^\\\\.(\" + identifier + \")\" ),\n\t\t\"TAG\": new RegExp( \"^(\" + identifier + \"|[*])\" ),\n\t\t\"ATTR\": new RegExp( \"^\" + attributes ),\n\t\t\"PSEUDO\": new RegExp( \"^\" + pseudos ),\n\t\t\"CHILD\": new RegExp( \"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\(\" +\n\t\t\twhitespace + \"*(even|odd|(([+-]|)(\\\\d*)n|)\" + whitespace + \"*(?:([+-]|)\" +\n\t\t\twhitespace + \"*(\\\\d+)|))\" + whitespace + \"*\\\\)|)\", \"i\" ),\n\t\t\"bool\": new RegExp( \"^(?:\" + booleans + \")$\", \"i\" ),\n\n\t\t// For use in libraries implementing .is()\n\t\t// We use this for POS matching in `select`\n\t\t\"needsContext\": new RegExp( \"^\" + whitespace +\n\t\t\t\"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\(\" + whitespace +\n\t\t\t\"*((?:-\\\\d)?\\\\d*)\" + whitespace + \"*\\\\)|)(?=[^-]|$)\", \"i\" )\n\t},\n\n\trhtml = /HTML$/i,\n\trinputs = /^(?:input|select|textarea|button)$/i,\n\trheader = /^h\\d$/i,\n\n\trnative = /^[^{]+\\{\\s*\\[native \\w/,\n\n\t// Easily-parseable/retrievable ID or TAG or CLASS selectors\n\trquickExpr = /^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/,\n\n\trsibling = /[+~]/,\n\n\t// CSS escapes\n\t// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters\n\trunescape = new RegExp( \"\\\\\\\\[\\\\da-fA-F]{1,6}\" + whitespace + \"?|\\\\\\\\([^\\\\r\\\\n\\\\f])\", \"g\" ),\n\tfunescape = function( escape, nonHex ) {\n\t\tvar high = \"0x\" + escape.slice( 1 ) - 0x10000;\n\n\t\treturn nonHex ?\n\n\t\t\t// Strip the backslash prefix from a non-hex escape sequence\n\t\t\tnonHex :\n\n\t\t\t// Replace a hexadecimal escape sequence with the encoded Unicode code point\n\t\t\t// Support: IE <=11+\n\t\t\t// For values outside the Basic Multilingual Plane (BMP), manually construct a\n\t\t\t// surrogate pair\n\t\t\thigh < 0 ?\n\t\t\t\tString.fromCharCode( high + 0x10000 ) :\n\t\t\t\tString.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );\n\t},\n\n\t// CSS string/identifier serialization\n\t// https://drafts.csswg.org/cssom/#common-serializing-idioms\n\trcssescape = /([\\0-\\x1f\\x7f]|^-?\\d)|^-$|[^\\0-\\x1f\\x7f-\\uFFFF\\w-]/g,\n\tfcssescape = function( ch, asCodePoint ) {\n\t\tif ( asCodePoint ) {\n\n\t\t\t// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER\n\t\t\tif ( ch === \"\\0\" ) {\n\t\t\t\treturn \"\\uFFFD\";\n\t\t\t}\n\n\t\t\t// Control characters and (dependent upon position) numbers get escaped as code points\n\t\t\treturn ch.slice( 0, -1 ) + \"\\\\\" +\n\t\t\t\tch.charCodeAt( ch.length - 1 ).toString( 16 ) + \" \";\n\t\t}\n\n\t\t// Other potentially-special ASCII characters get backslash-escaped\n\t\treturn \"\\\\\" + ch;\n\t},\n\n\t// Used for iframes\n\t// See setDocument()\n\t// Removing the function wrapper causes a \"Permission Denied\"\n\t// error in IE\n\tunloadHandler = function() {\n\t\tsetDocument();\n\t},\n\n\tinDisabledFieldset = addCombinator(\n\t\tfunction( elem ) {\n\t\t\treturn elem.disabled === true && elem.nodeName.toLowerCase() === \"fieldset\";\n\t\t},\n\t\t{ dir: \"parentNode\", next: \"legend\" }\n\t);\n\n// Optimize for push.apply( _, NodeList )\ntry {\n\tpush.apply(\n\t\t( arr = slice.call( preferredDoc.childNodes ) ),\n\t\tpreferredDoc.childNodes\n\t);\n\n\t// Support: Android<4.0\n\t// Detect silently failing push.apply\n\t// eslint-disable-next-line no-unused-expressions\n\tarr[ preferredDoc.childNodes.length ].nodeType;\n} catch ( e ) {\n\tpush = { apply: arr.length ?\n\n\t\t// Leverage slice if possible\n\t\tfunction( target, els ) {\n\t\t\tpushNative.apply( target, slice.call( els ) );\n\t\t} :\n\n\t\t// Support: IE<9\n\t\t// Otherwise append directly\n\t\tfunction( target, els ) {\n\t\t\tvar j = target.length,\n\t\t\t\ti = 0;\n\n\t\t\t// Can't trust NodeList.length\n\t\t\twhile ( ( target[ j++ ] = els[ i++ ] ) ) {}\n\t\t\ttarget.length = j - 1;\n\t\t}\n\t};\n}\n\nfunction Sizzle( selector, context, results, seed ) {\n\tvar m, i, elem, nid, match, groups, newSelector,\n\t\tnewContext = context && context.ownerDocument,\n\n\t\t// nodeType defaults to 9, since context defaults to document\n\t\tnodeType = context ? context.nodeType : 9;\n\n\tresults = results || [];\n\n\t// Return early from calls with invalid selector or context\n\tif ( typeof selector !== \"string\" || !selector ||\n\t\tnodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {\n\n\t\treturn results;\n\t}\n\n\t// Try to shortcut find operations (as opposed to filters) in HTML documents\n\tif ( !seed ) {\n\t\tsetDocument( context );\n\t\tcontext = context || document;\n\n\t\tif ( documentIsHTML ) {\n\n\t\t\t// If the selector is sufficiently simple, try using a \"get*By*\" DOM method\n\t\t\t// (excepting DocumentFragment context, where the methods don't exist)\n\t\t\tif ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {\n\n\t\t\t\t// ID selector\n\t\t\t\tif ( ( m = match[ 1 ] ) ) {\n\n\t\t\t\t\t// Document context\n\t\t\t\t\tif ( nodeType === 9 ) {\n\t\t\t\t\t\tif ( ( elem = context.getElementById( m ) ) ) {\n\n\t\t\t\t\t\t\t// Support: IE, Opera, Webkit\n\t\t\t\t\t\t\t// TODO: identify versions\n\t\t\t\t\t\t\t// getElementById can match elements by name instead of ID\n\t\t\t\t\t\t\tif ( elem.id === m ) {\n\t\t\t\t\t\t\t\tresults.push( elem );\n\t\t\t\t\t\t\t\treturn results;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\treturn results;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t// Element context\n\t\t\t\t\t} else {\n\n\t\t\t\t\t\t// Support: IE, Opera, Webkit\n\t\t\t\t\t\t// TODO: identify versions\n\t\t\t\t\t\t// getElementById can match elements by name instead of ID\n\t\t\t\t\t\tif ( newContext && ( elem = newContext.getElementById( m ) ) &&\n\t\t\t\t\t\t\tcontains( context, elem ) &&\n\t\t\t\t\t\t\telem.id === m ) {\n\n\t\t\t\t\t\t\tresults.push( elem );\n\t\t\t\t\t\t\treturn results;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t// Type selector\n\t\t\t\t} else if ( match[ 2 ] ) {\n\t\t\t\t\tpush.apply( results, context.getElementsByTagName( selector ) );\n\t\t\t\t\treturn results;\n\n\t\t\t\t// Class selector\n\t\t\t\t} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&\n\t\t\t\t\tcontext.getElementsByClassName ) {\n\n\t\t\t\t\tpush.apply( results, context.getElementsByClassName( m ) );\n\t\t\t\t\treturn results;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Take advantage of querySelectorAll\n\t\t\tif ( support.qsa &&\n\t\t\t\t!nonnativeSelectorCache[ selector + \" \" ] &&\n\t\t\t\t( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&\n\n\t\t\t\t// Support: IE 8 only\n\t\t\t\t// Exclude object elements\n\t\t\t\t( nodeType !== 1 || context.nodeName.toLowerCase() !== \"object\" ) ) {\n\n\t\t\t\tnewSelector = selector;\n\t\t\t\tnewContext = context;\n\n\t\t\t\t// qSA considers elements outside a scoping root when evaluating child or\n\t\t\t\t// descendant combinators, which is not what we want.\n\t\t\t\t// In such cases, we work around the behavior by prefixing every selector in the\n\t\t\t\t// list with an ID selector referencing the scope context.\n\t\t\t\t// The technique has to be used as well when a leading combinator is used\n\t\t\t\t// as such selectors are not recognized by querySelectorAll.\n\t\t\t\t// Thanks to Andrew Dupont for this technique.\n\t\t\t\tif ( nodeType === 1 &&\n\t\t\t\t\t( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {\n\n\t\t\t\t\t// Expand context for sibling selectors\n\t\t\t\t\tnewContext = rsibling.test( selector ) && testContext( context.parentNode ) ||\n\t\t\t\t\t\tcontext;\n\n\t\t\t\t\t// We can use :scope instead of the ID hack if the browser\n\t\t\t\t\t// supports it & if we're not changing the context.\n\t\t\t\t\tif ( newContext !== context || !support.scope ) {\n\n\t\t\t\t\t\t// Capture the context ID, setting it first if necessary\n\t\t\t\t\t\tif ( ( nid = context.getAttribute( \"id\" ) ) ) {\n\t\t\t\t\t\t\tnid = nid.replace( rcssescape, fcssescape );\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tcontext.setAttribute( \"id\", ( nid = expando ) );\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// Prefix every selector in the list\n\t\t\t\t\tgroups = tokenize( selector );\n\t\t\t\t\ti = groups.length;\n\t\t\t\t\twhile ( i-- ) {\n\t\t\t\t\t\tgroups[ i ] = ( nid ? \"#\" + nid : \":scope\" ) + \" \" +\n\t\t\t\t\t\t\ttoSelector( groups[ i ] );\n\t\t\t\t\t}\n\t\t\t\t\tnewSelector = groups.join( \",\" );\n\t\t\t\t}\n\n\t\t\t\ttry {\n\t\t\t\t\tpush.apply( results,\n\t\t\t\t\t\tnewContext.querySelectorAll( newSelector )\n\t\t\t\t\t);\n\t\t\t\t\treturn results;\n\t\t\t\t} catch ( qsaError ) {\n\t\t\t\t\tnonnativeSelectorCache( selector, true );\n\t\t\t\t} finally {\n\t\t\t\t\tif ( nid === expando ) {\n\t\t\t\t\t\tcontext.removeAttribute( \"id\" );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t// All others\n\treturn select( selector.replace( rtrim, \"$1\" ), context, results, seed );\n}\n\n/**\n * Create key-value caches of limited size\n * @returns {function(string, object)} Returns the Object data after storing it on itself with\n *\tproperty name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)\n *\tdeleting the oldest entry\n */\nfunction createCache() {\n\tvar keys = [];\n\n\tfunction cache( key, value ) {\n\n\t\t// Use (key + \" \") to avoid collision with native prototype properties (see Issue #157)\n\t\tif ( keys.push( key + \" \" ) > Expr.cacheLength ) {\n\n\t\t\t// Only keep the most recent entries\n\t\t\tdelete cache[ keys.shift() ];\n\t\t}\n\t\treturn ( cache[ key + \" \" ] = value );\n\t}\n\treturn cache;\n}\n\n/**\n * Mark a function for special use by Sizzle\n * @param {Function} fn The function to mark\n */\nfunction markFunction( fn ) {\n\tfn[ expando ] = true;\n\treturn fn;\n}\n\n/**\n * Support testing using an element\n * @param {Function} fn Passed the created element and returns a boolean result\n */\nfunction assert( fn ) {\n\tvar el = document.createElement( \"fieldset\" );\n\n\ttry {\n\t\treturn !!fn( el );\n\t} catch ( e ) {\n\t\treturn false;\n\t} finally {\n\n\t\t// Remove from its parent by default\n\t\tif ( el.parentNode ) {\n\t\t\tel.parentNode.removeChild( el );\n\t\t}\n\n\t\t// release memory in IE\n\t\tel = null;\n\t}\n}\n\n/**\n * Adds the same handler for all of the specified attrs\n * @param {String} attrs Pipe-separated list of attributes\n * @param {Function} handler The method that will be applied\n */\nfunction addHandle( attrs, handler ) {\n\tvar arr = attrs.split( \"|\" ),\n\t\ti = arr.length;\n\n\twhile ( i-- ) {\n\t\tExpr.attrHandle[ arr[ i ] ] = handler;\n\t}\n}\n\n/**\n * Checks document order of two siblings\n * @param {Element} a\n * @param {Element} b\n * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b\n */\nfunction siblingCheck( a, b ) {\n\tvar cur = b && a,\n\t\tdiff = cur && a.nodeType === 1 && b.nodeType === 1 &&\n\t\t\ta.sourceIndex - b.sourceIndex;\n\n\t// Use IE sourceIndex if available on both nodes\n\tif ( diff ) {\n\t\treturn diff;\n\t}\n\n\t// Check if b follows a\n\tif ( cur ) {\n\t\twhile ( ( cur = cur.nextSibling ) ) {\n\t\t\tif ( cur === b ) {\n\t\t\t\treturn -1;\n\t\t\t}\n\t\t}\n\t}\n\n\treturn a ? 1 : -1;\n}\n\n/**\n * Returns a function to use in pseudos for input types\n * @param {String} type\n */\nfunction createInputPseudo( type ) {\n\treturn function( elem ) {\n\t\tvar name = elem.nodeName.toLowerCase();\n\t\treturn name === \"input\" && elem.type === type;\n\t};\n}\n\n/**\n * Returns a function to use in pseudos for buttons\n * @param {String} type\n */\nfunction createButtonPseudo( type ) {\n\treturn function( elem ) {\n\t\tvar name = elem.nodeName.toLowerCase();\n\t\treturn ( name === \"input\" || name === \"button\" ) && elem.type === type;\n\t};\n}\n\n/**\n * Returns a function to use in pseudos for :enabled/:disabled\n * @param {Boolean} disabled true for :disabled; false for :enabled\n */\nfunction createDisabledPseudo( disabled ) {\n\n\t// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable\n\treturn function( elem ) {\n\n\t\t// Only certain elements can match :enabled or :disabled\n\t\t// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled\n\t\t// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled\n\t\tif ( \"form\" in elem ) {\n\n\t\t\t// Check for inherited disabledness on relevant non-disabled elements:\n\t\t\t// * listed form-associated elements in a disabled fieldset\n\t\t\t//   https://html.spec.whatwg.org/multipage/forms.html#category-listed\n\t\t\t//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled\n\t\t\t// * option elements in a disabled optgroup\n\t\t\t//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled\n\t\t\t// All such elements have a \"form\" property.\n\t\t\tif ( elem.parentNode && elem.disabled === false ) {\n\n\t\t\t\t// Option elements defer to a parent optgroup if present\n\t\t\t\tif ( \"label\" in elem ) {\n\t\t\t\t\tif ( \"label\" in elem.parentNode ) {\n\t\t\t\t\t\treturn elem.parentNode.disabled === disabled;\n\t\t\t\t\t} else {\n\t\t\t\t\t\treturn elem.disabled === disabled;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Support: IE 6 - 11\n\t\t\t\t// Use the isDisabled shortcut property to check for disabled fieldset ancestors\n\t\t\t\treturn elem.isDisabled === disabled ||\n\n\t\t\t\t\t// Where there is no isDisabled, check manually\n\t\t\t\t\t/* jshint -W018 */\n\t\t\t\t\telem.isDisabled !== !disabled &&\n\t\t\t\t\tinDisabledFieldset( elem ) === disabled;\n\t\t\t}\n\n\t\t\treturn elem.disabled === disabled;\n\n\t\t// Try to winnow out elements that can't be disabled before trusting the disabled property.\n\t\t// Some victims get caught in our net (label, legend, menu, track), but it shouldn't\n\t\t// even exist on them, let alone have a boolean value.\n\t\t} else if ( \"label\" in elem ) {\n\t\t\treturn elem.disabled === disabled;\n\t\t}\n\n\t\t// Remaining elements are neither :enabled nor :disabled\n\t\treturn false;\n\t};\n}\n\n/**\n * Returns a function to use in pseudos for positionals\n * @param {Function} fn\n */\nfunction createPositionalPseudo( fn ) {\n\treturn markFunction( function( argument ) {\n\t\targument = +argument;\n\t\treturn markFunction( function( seed, matches ) {\n\t\t\tvar j,\n\t\t\t\tmatchIndexes = fn( [], seed.length, argument ),\n\t\t\t\ti = matchIndexes.length;\n\n\t\t\t// Match elements found at the specified indexes\n\t\t\twhile ( i-- ) {\n\t\t\t\tif ( seed[ ( j = matchIndexes[ i ] ) ] ) {\n\t\t\t\t\tseed[ j ] = !( matches[ j ] = seed[ j ] );\n\t\t\t\t}\n\t\t\t}\n\t\t} );\n\t} );\n}\n\n/**\n * Checks a node for validity as a Sizzle context\n * @param {Element|Object=} context\n * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value\n */\nfunction testContext( context ) {\n\treturn context && typeof context.getElementsByTagName !== \"undefined\" && context;\n}\n\n// Expose support vars for convenience\nsupport = Sizzle.support = {};\n\n/**\n * Detects XML nodes\n * @param {Element|Object} elem An element or a document\n * @returns {Boolean} True iff elem is a non-HTML XML node\n */\nisXML = Sizzle.isXML = function( elem ) {\n\tvar namespace = elem.namespaceURI,\n\t\tdocElem = ( elem.ownerDocument || elem ).documentElement;\n\n\t// Support: IE <=8\n\t// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes\n\t// https://bugs.jquery.com/ticket/4833\n\treturn !rhtml.test( namespace || docElem && docElem.nodeName || \"HTML\" );\n};\n\n/**\n * Sets document-related variables once based on the current document\n * @param {Element|Object} [doc] An element or document object to use to set the document\n * @returns {Object} Returns the current document\n */\nsetDocument = Sizzle.setDocument = function( node ) {\n\tvar hasCompare, subWindow,\n\t\tdoc = node ? node.ownerDocument || node : preferredDoc;\n\n\t// Return early if doc is invalid or already selected\n\t// Support: IE 11+, Edge 17 - 18+\n\t// IE/Edge sometimes throw a \"Permission denied\" error when strict-comparing\n\t// two documents; shallow comparisons work.\n\t// eslint-disable-next-line eqeqeq\n\tif ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {\n\t\treturn document;\n\t}\n\n\t// Update global variables\n\tdocument = doc;\n\tdocElem = document.documentElement;\n\tdocumentIsHTML = !isXML( document );\n\n\t// Support: IE 9 - 11+, Edge 12 - 18+\n\t// Accessing iframe documents after unload throws \"permission denied\" errors (jQuery #13936)\n\t// Support: IE 11+, Edge 17 - 18+\n\t// IE/Edge sometimes throw a \"Permission denied\" error when strict-comparing\n\t// two documents; shallow comparisons work.\n\t// eslint-disable-next-line eqeqeq\n\tif ( preferredDoc != document &&\n\t\t( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {\n\n\t\t// Support: IE 11, Edge\n\t\tif ( subWindow.addEventListener ) {\n\t\t\tsubWindow.addEventListener( \"unload\", unloadHandler, false );\n\n\t\t// Support: IE 9 - 10 only\n\t\t} else if ( subWindow.attachEvent ) {\n\t\t\tsubWindow.attachEvent( \"onunload\", unloadHandler );\n\t\t}\n\t}\n\n\t// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,\n\t// Safari 4 - 5 only, Opera <=11.6 - 12.x only\n\t// IE/Edge & older browsers don't support the :scope pseudo-class.\n\t// Support: Safari 6.0 only\n\t// Safari 6.0 supports :scope but it's an alias of :root there.\n\tsupport.scope = assert( function( el ) {\n\t\tdocElem.appendChild( el ).appendChild( document.createElement( \"div\" ) );\n\t\treturn typeof el.querySelectorAll !== \"undefined\" &&\n\t\t\t!el.querySelectorAll( \":scope fieldset div\" ).length;\n\t} );\n\n\t/* Attributes\n\t---------------------------------------------------------------------- */\n\n\t// Support: IE<8\n\t// Verify that getAttribute really returns attributes and not properties\n\t// (excepting IE8 booleans)\n\tsupport.attributes = assert( function( el ) {\n\t\tel.className = \"i\";\n\t\treturn !el.getAttribute( \"className\" );\n\t} );\n\n\t/* getElement(s)By*\n\t---------------------------------------------------------------------- */\n\n\t// Check if getElementsByTagName(\"*\") returns only elements\n\tsupport.getElementsByTagName = assert( function( el ) {\n\t\tel.appendChild( document.createComment( \"\" ) );\n\t\treturn !el.getElementsByTagName( \"*\" ).length;\n\t} );\n\n\t// Support: IE<9\n\tsupport.getElementsByClassName = rnative.test( document.getElementsByClassName );\n\n\t// Support: IE<10\n\t// Check if getElementById returns elements by name\n\t// The broken getElementById methods don't pick up programmatically-set names,\n\t// so use a roundabout getElementsByName test\n\tsupport.getById = assert( function( el ) {\n\t\tdocElem.appendChild( el ).id = expando;\n\t\treturn !document.getElementsByName || !document.getElementsByName( expando ).length;\n\t} );\n\n\t// ID filter and find\n\tif ( support.getById ) {\n\t\tExpr.filter[ \"ID\" ] = function( id ) {\n\t\t\tvar attrId = id.replace( runescape, funescape );\n\t\t\treturn function( elem ) {\n\t\t\t\treturn elem.getAttribute( \"id\" ) === attrId;\n\t\t\t};\n\t\t};\n\t\tExpr.find[ \"ID\" ] = function( id, context ) {\n\t\t\tif ( typeof context.getElementById !== \"undefined\" && documentIsHTML ) {\n\t\t\t\tvar elem = context.getElementById( id );\n\t\t\t\treturn elem ? [ elem ] : [];\n\t\t\t}\n\t\t};\n\t} else {\n\t\tExpr.filter[ \"ID\" ] =  function( id ) {\n\t\t\tvar attrId = id.replace( runescape, funescape );\n\t\t\treturn function( elem ) {\n\t\t\t\tvar node = typeof elem.getAttributeNode !== \"undefined\" &&\n\t\t\t\t\telem.getAttributeNode( \"id\" );\n\t\t\t\treturn node && node.value === attrId;\n\t\t\t};\n\t\t};\n\n\t\t// Support: IE 6 - 7 only\n\t\t// getElementById is not reliable as a find shortcut\n\t\tExpr.find[ \"ID\" ] = function( id, context ) {\n\t\t\tif ( typeof context.getElementById !== \"undefined\" && documentIsHTML ) {\n\t\t\t\tvar node, i, elems,\n\t\t\t\t\telem = context.getElementById( id );\n\n\t\t\t\tif ( elem ) {\n\n\t\t\t\t\t// Verify the id attribute\n\t\t\t\t\tnode = elem.getAttributeNode( \"id\" );\n\t\t\t\t\tif ( node && node.value === id ) {\n\t\t\t\t\t\treturn [ elem ];\n\t\t\t\t\t}\n\n\t\t\t\t\t// Fall back on getElementsByName\n\t\t\t\t\telems = context.getElementsByName( id );\n\t\t\t\t\ti = 0;\n\t\t\t\t\twhile ( ( elem = elems[ i++ ] ) ) {\n\t\t\t\t\t\tnode = elem.getAttributeNode( \"id\" );\n\t\t\t\t\t\tif ( node && node.value === id ) {\n\t\t\t\t\t\t\treturn [ elem ];\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\treturn [];\n\t\t\t}\n\t\t};\n\t}\n\n\t// Tag\n\tExpr.find[ \"TAG\" ] = support.getElementsByTagName ?\n\t\tfunction( tag, context ) {\n\t\t\tif ( typeof context.getElementsByTagName !== \"undefined\" ) {\n\t\t\t\treturn context.getElementsByTagName( tag );\n\n\t\t\t// DocumentFragment nodes don't have gEBTN\n\t\t\t} else if ( support.qsa ) {\n\t\t\t\treturn context.querySelectorAll( tag );\n\t\t\t}\n\t\t} :\n\n\t\tfunction( tag, context ) {\n\t\t\tvar elem,\n\t\t\t\ttmp = [],\n\t\t\t\ti = 0,\n\n\t\t\t\t// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too\n\t\t\t\tresults = context.getElementsByTagName( tag );\n\n\t\t\t// Filter out possible comments\n\t\t\tif ( tag === \"*\" ) {\n\t\t\t\twhile ( ( elem = results[ i++ ] ) ) {\n\t\t\t\t\tif ( elem.nodeType === 1 ) {\n\t\t\t\t\t\ttmp.push( elem );\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\treturn tmp;\n\t\t\t}\n\t\t\treturn results;\n\t\t};\n\n\t// Class\n\tExpr.find[ \"CLASS\" ] = support.getElementsByClassName && function( className, context ) {\n\t\tif ( typeof context.getElementsByClassName !== \"undefined\" && documentIsHTML ) {\n\t\t\treturn context.getElementsByClassName( className );\n\t\t}\n\t};\n\n\t/* QSA/matchesSelector\n\t---------------------------------------------------------------------- */\n\n\t// QSA and matchesSelector support\n\n\t// matchesSelector(:active) reports false when true (IE9/Opera 11.5)\n\trbuggyMatches = [];\n\n\t// qSa(:focus) reports false when true (Chrome 21)\n\t// We allow this because of a bug in IE8/9 that throws an error\n\t// whenever `document.activeElement` is accessed on an iframe\n\t// So, we allow :focus to pass through QSA all the time to avoid the IE error\n\t// See https://bugs.jquery.com/ticket/13378\n\trbuggyQSA = [];\n\n\tif ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {\n\n\t\t// Build QSA regex\n\t\t// Regex strategy adopted from Diego Perini\n\t\tassert( function( el ) {\n\n\t\t\tvar input;\n\n\t\t\t// Select is set to empty string on purpose\n\t\t\t// This is to test IE's treatment of not explicitly\n\t\t\t// setting a boolean content attribute,\n\t\t\t// since its presence should be enough\n\t\t\t// https://bugs.jquery.com/ticket/12359\n\t\t\tdocElem.appendChild( el ).innerHTML = \"<a id='\" + expando + \"'></a>\" +\n\t\t\t\t\"<select id='\" + expando + \"-\\r\\\\' msallowcapture=''>\" +\n\t\t\t\t\"<option selected=''></option></select>\";\n\n\t\t\t// Support: IE8, Opera 11-12.16\n\t\t\t// Nothing should be selected when empty strings follow ^= or $= or *=\n\t\t\t// The test attribute must be unknown in Opera but \"safe\" for WinRT\n\t\t\t// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section\n\t\t\tif ( el.querySelectorAll( \"[msallowcapture^='']\" ).length ) {\n\t\t\t\trbuggyQSA.push( \"[*^$]=\" + whitespace + \"*(?:''|\\\"\\\")\" );\n\t\t\t}\n\n\t\t\t// Support: IE8\n\t\t\t// Boolean attributes and \"value\" are not treated correctly\n\t\t\tif ( !el.querySelectorAll( \"[selected]\" ).length ) {\n\t\t\t\trbuggyQSA.push( \"\\\\[\" + whitespace + \"*(?:value|\" + booleans + \")\" );\n\t\t\t}\n\n\t\t\t// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+\n\t\t\tif ( !el.querySelectorAll( \"[id~=\" + expando + \"-]\" ).length ) {\n\t\t\t\trbuggyQSA.push( \"~=\" );\n\t\t\t}\n\n\t\t\t// Support: IE 11+, Edge 15 - 18+\n\t\t\t// IE 11/Edge don't find elements on a `[name='']` query in some cases.\n\t\t\t// Adding a temporary attribute to the document before the selection works\n\t\t\t// around the issue.\n\t\t\t// Interestingly, IE 10 & older don't seem to have the issue.\n\t\t\tinput = document.createElement( \"input\" );\n\t\t\tinput.setAttribute( \"name\", \"\" );\n\t\t\tel.appendChild( input );\n\t\t\tif ( !el.querySelectorAll( \"[name='']\" ).length ) {\n\t\t\t\trbuggyQSA.push( \"\\\\[\" + whitespace + \"*name\" + whitespace + \"*=\" +\n\t\t\t\t\twhitespace + \"*(?:''|\\\"\\\")\" );\n\t\t\t}\n\n\t\t\t// Webkit/Opera - :checked should return selected option elements\n\t\t\t// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked\n\t\t\t// IE8 throws error here and will not see later tests\n\t\t\tif ( !el.querySelectorAll( \":checked\" ).length ) {\n\t\t\t\trbuggyQSA.push( \":checked\" );\n\t\t\t}\n\n\t\t\t// Support: Safari 8+, iOS 8+\n\t\t\t// https://bugs.webkit.org/show_bug.cgi?id=136851\n\t\t\t// In-page `selector#id sibling-combinator selector` fails\n\t\t\tif ( !el.querySelectorAll( \"a#\" + expando + \"+*\" ).length ) {\n\t\t\t\trbuggyQSA.push( \".#.+[+~]\" );\n\t\t\t}\n\n\t\t\t// Support: Firefox <=3.6 - 5 only\n\t\t\t// Old Firefox doesn't throw on a badly-escaped identifier.\n\t\t\tel.querySelectorAll( \"\\\\\\f\" );\n\t\t\trbuggyQSA.push( \"[\\\\r\\\\n\\\\f]\" );\n\t\t} );\n\n\t\tassert( function( el ) {\n\t\t\tel.innerHTML = \"<a href='' disabled='disabled'></a>\" +\n\t\t\t\t\"<select disabled='disabled'><option/></select>\";\n\n\t\t\t// Support: Windows 8 Native Apps\n\t\t\t// The type and name attributes are restricted during .innerHTML assignment\n\t\t\tvar input = document.createElement( \"input\" );\n\t\t\tinput.setAttribute( \"type\", \"hidden\" );\n\t\t\tel.appendChild( input ).setAttribute( \"name\", \"D\" );\n\n\t\t\t// Support: IE8\n\t\t\t// Enforce case-sensitivity of name attribute\n\t\t\tif ( el.querySelectorAll( \"[name=d]\" ).length ) {\n\t\t\t\trbuggyQSA.push( \"name\" + whitespace + \"*[*^$|!~]?=\" );\n\t\t\t}\n\n\t\t\t// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)\n\t\t\t// IE8 throws error here and will not see later tests\n\t\t\tif ( el.querySelectorAll( \":enabled\" ).length !== 2 ) {\n\t\t\t\trbuggyQSA.push( \":enabled\", \":disabled\" );\n\t\t\t}\n\n\t\t\t// Support: IE9-11+\n\t\t\t// IE's :disabled selector does not pick up the children of disabled fieldsets\n\t\t\tdocElem.appendChild( el ).disabled = true;\n\t\t\tif ( el.querySelectorAll( \":disabled\" ).length !== 2 ) {\n\t\t\t\trbuggyQSA.push( \":enabled\", \":disabled\" );\n\t\t\t}\n\n\t\t\t// Support: Opera 10 - 11 only\n\t\t\t// Opera 10-11 does not throw on post-comma invalid pseudos\n\t\t\tel.querySelectorAll( \"*,:x\" );\n\t\t\trbuggyQSA.push( \",.*:\" );\n\t\t} );\n\t}\n\n\tif ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||\n\t\tdocElem.webkitMatchesSelector ||\n\t\tdocElem.mozMatchesSelector ||\n\t\tdocElem.oMatchesSelector ||\n\t\tdocElem.msMatchesSelector ) ) ) ) {\n\n\t\tassert( function( el ) {\n\n\t\t\t// Check to see if it's possible to do matchesSelector\n\t\t\t// on a disconnected node (IE 9)\n\t\t\tsupport.disconnectedMatch = matches.call( el, \"*\" );\n\n\t\t\t// This should fail with an exception\n\t\t\t// Gecko does not error, returns false instead\n\t\t\tmatches.call( el, \"[s!='']:x\" );\n\t\t\trbuggyMatches.push( \"!=\", pseudos );\n\t\t} );\n\t}\n\n\trbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( \"|\" ) );\n\trbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( \"|\" ) );\n\n\t/* Contains\n\t---------------------------------------------------------------------- */\n\thasCompare = rnative.test( docElem.compareDocumentPosition );\n\n\t// Element contains another\n\t// Purposefully self-exclusive\n\t// As in, an element does not contain itself\n\tcontains = hasCompare || rnative.test( docElem.contains ) ?\n\t\tfunction( a, b ) {\n\t\t\tvar adown = a.nodeType === 9 ? a.documentElement : a,\n\t\t\t\tbup = b && b.parentNode;\n\t\t\treturn a === bup || !!( bup && bup.nodeType === 1 && (\n\t\t\t\tadown.contains ?\n\t\t\t\t\tadown.contains( bup ) :\n\t\t\t\t\ta.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16\n\t\t\t) );\n\t\t} :\n\t\tfunction( a, b ) {\n\t\t\tif ( b ) {\n\t\t\t\twhile ( ( b = b.parentNode ) ) {\n\t\t\t\t\tif ( b === a ) {\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn false;\n\t\t};\n\n\t/* Sorting\n\t---------------------------------------------------------------------- */\n\n\t// Document order sorting\n\tsortOrder = hasCompare ?\n\tfunction( a, b ) {\n\n\t\t// Flag for duplicate removal\n\t\tif ( a === b ) {\n\t\t\thasDuplicate = true;\n\t\t\treturn 0;\n\t\t}\n\n\t\t// Sort on method existence if only one input has compareDocumentPosition\n\t\tvar compare = !a.compareDocumentPosition - !b.compareDocumentPosition;\n\t\tif ( compare ) {\n\t\t\treturn compare;\n\t\t}\n\n\t\t// Calculate position if both inputs belong to the same document\n\t\t// Support: IE 11+, Edge 17 - 18+\n\t\t// IE/Edge sometimes throw a \"Permission denied\" error when strict-comparing\n\t\t// two documents; shallow comparisons work.\n\t\t// eslint-disable-next-line eqeqeq\n\t\tcompare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?\n\t\t\ta.compareDocumentPosition( b ) :\n\n\t\t\t// Otherwise we know they are disconnected\n\t\t\t1;\n\n\t\t// Disconnected nodes\n\t\tif ( compare & 1 ||\n\t\t\t( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {\n\n\t\t\t// Choose the first element that is related to our preferred document\n\t\t\t// Support: IE 11+, Edge 17 - 18+\n\t\t\t// IE/Edge sometimes throw a \"Permission denied\" error when strict-comparing\n\t\t\t// two documents; shallow comparisons work.\n\t\t\t// eslint-disable-next-line eqeqeq\n\t\t\tif ( a == document || a.ownerDocument == preferredDoc &&\n\t\t\t\tcontains( preferredDoc, a ) ) {\n\t\t\t\treturn -1;\n\t\t\t}\n\n\t\t\t// Support: IE 11+, Edge 17 - 18+\n\t\t\t// IE/Edge sometimes throw a \"Permission denied\" error when strict-comparing\n\t\t\t// two documents; shallow comparisons work.\n\t\t\t// eslint-disable-next-line eqeqeq\n\t\t\tif ( b == document || b.ownerDocument == preferredDoc &&\n\t\t\t\tcontains( preferredDoc, b ) ) {\n\t\t\t\treturn 1;\n\t\t\t}\n\n\t\t\t// Maintain original order\n\t\t\treturn sortInput ?\n\t\t\t\t( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :\n\t\t\t\t0;\n\t\t}\n\n\t\treturn compare & 4 ? -1 : 1;\n\t} :\n\tfunction( a, b ) {\n\n\t\t// Exit early if the nodes are identical\n\t\tif ( a === b ) {\n\t\t\thasDuplicate = true;\n\t\t\treturn 0;\n\t\t}\n\n\t\tvar cur,\n\t\t\ti = 0,\n\t\t\taup = a.parentNode,\n\t\t\tbup = b.parentNode,\n\t\t\tap = [ a ],\n\t\t\tbp = [ b ];\n\n\t\t// Parentless nodes are either documents or disconnected\n\t\tif ( !aup || !bup ) {\n\n\t\t\t// Support: IE 11+, Edge 17 - 18+\n\t\t\t// IE/Edge sometimes throw a \"Permission denied\" error when strict-comparing\n\t\t\t// two documents; shallow comparisons work.\n\t\t\t/* eslint-disable eqeqeq */\n\t\t\treturn a == document ? -1 :\n\t\t\t\tb == document ? 1 :\n\t\t\t\t/* eslint-enable eqeqeq */\n\t\t\t\taup ? -1 :\n\t\t\t\tbup ? 1 :\n\t\t\t\tsortInput ?\n\t\t\t\t( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :\n\t\t\t\t0;\n\n\t\t// If the nodes are siblings, we can do a quick check\n\t\t} else if ( aup === bup ) {\n\t\t\treturn siblingCheck( a, b );\n\t\t}\n\n\t\t// Otherwise we need full lists of their ancestors for comparison\n\t\tcur = a;\n\t\twhile ( ( cur = cur.parentNode ) ) {\n\t\t\tap.unshift( cur );\n\t\t}\n\t\tcur = b;\n\t\twhile ( ( cur = cur.parentNode ) ) {\n\t\t\tbp.unshift( cur );\n\t\t}\n\n\t\t// Walk down the tree looking for a discrepancy\n\t\twhile ( ap[ i ] === bp[ i ] ) {\n\t\t\ti++;\n\t\t}\n\n\t\treturn i ?\n\n\t\t\t// Do a sibling check if the nodes have a common ancestor\n\t\t\tsiblingCheck( ap[ i ], bp[ i ] ) :\n\n\t\t\t// Otherwise nodes in our document sort first\n\t\t\t// Support: IE 11+, Edge 17 - 18+\n\t\t\t// IE/Edge sometimes throw a \"Permission denied\" error when strict-comparing\n\t\t\t// two documents; shallow comparisons work.\n\t\t\t/* eslint-disable eqeqeq */\n\t\t\tap[ i ] == preferredDoc ? -1 :\n\t\t\tbp[ i ] == preferredDoc ? 1 :\n\t\t\t/* eslint-enable eqeqeq */\n\t\t\t0;\n\t};\n\n\treturn document;\n};\n\nSizzle.matches = function( expr, elements ) {\n\treturn Sizzle( expr, null, null, elements );\n};\n\nSizzle.matchesSelector = function( elem, expr ) {\n\tsetDocument( elem );\n\n\tif ( support.matchesSelector && documentIsHTML &&\n\t\t!nonnativeSelectorCache[ expr + \" \" ] &&\n\t\t( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&\n\t\t( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {\n\n\t\ttry {\n\t\t\tvar ret = matches.call( elem, expr );\n\n\t\t\t// IE 9's matchesSelector returns false on disconnected nodes\n\t\t\tif ( ret || support.disconnectedMatch ||\n\n\t\t\t\t// As well, disconnected nodes are said to be in a document\n\t\t\t\t// fragment in IE 9\n\t\t\t\telem.document && elem.document.nodeType !== 11 ) {\n\t\t\t\treturn ret;\n\t\t\t}\n\t\t} catch ( e ) {\n\t\t\tnonnativeSelectorCache( expr, true );\n\t\t}\n\t}\n\n\treturn Sizzle( expr, document, null, [ elem ] ).length > 0;\n};\n\nSizzle.contains = function( context, elem ) {\n\n\t// Set document vars if needed\n\t// Support: IE 11+, Edge 17 - 18+\n\t// IE/Edge sometimes throw a \"Permission denied\" error when strict-comparing\n\t// two documents; shallow comparisons work.\n\t// eslint-disable-next-line eqeqeq\n\tif ( ( context.ownerDocument || context ) != document ) {\n\t\tsetDocument( context );\n\t}\n\treturn contains( context, elem );\n};\n\nSizzle.attr = function( elem, name ) {\n\n\t// Set document vars if needed\n\t// Support: IE 11+, Edge 17 - 18+\n\t// IE/Edge sometimes throw a \"Permission denied\" error when strict-comparing\n\t// two documents; shallow comparisons work.\n\t// eslint-disable-next-line eqeqeq\n\tif ( ( elem.ownerDocument || elem ) != document ) {\n\t\tsetDocument( elem );\n\t}\n\n\tvar fn = Expr.attrHandle[ name.toLowerCase() ],\n\n\t\t// Don't get fooled by Object.prototype properties (jQuery #13807)\n\t\tval = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?\n\t\t\tfn( elem, name, !documentIsHTML ) :\n\t\t\tundefined;\n\n\treturn val !== undefined ?\n\t\tval :\n\t\tsupport.attributes || !documentIsHTML ?\n\t\t\telem.getAttribute( name ) :\n\t\t\t( val = elem.getAttributeNode( name ) ) && val.specified ?\n\t\t\t\tval.value :\n\t\t\t\tnull;\n};\n\nSizzle.escape = function( sel ) {\n\treturn ( sel + \"\" ).replace( rcssescape, fcssescape );\n};\n\nSizzle.error = function( msg ) {\n\tthrow new Error( \"Syntax error, unrecognized expression: \" + msg );\n};\n\n/**\n * Document sorting and removing duplicates\n * @param {ArrayLike} results\n */\nSizzle.uniqueSort = function( results ) {\n\tvar elem,\n\t\tduplicates = [],\n\t\tj = 0,\n\t\ti = 0;\n\n\t// Unless we *know* we can detect duplicates, assume their presence\n\thasDuplicate = !support.detectDuplicates;\n\tsortInput = !support.sortStable && results.slice( 0 );\n\tresults.sort( sortOrder );\n\n\tif ( hasDuplicate ) {\n\t\twhile ( ( elem = results[ i++ ] ) ) {\n\t\t\tif ( elem === results[ i ] ) {\n\t\t\t\tj = duplicates.push( i );\n\t\t\t}\n\t\t}\n\t\twhile ( j-- ) {\n\t\t\tresults.splice( duplicates[ j ], 1 );\n\t\t}\n\t}\n\n\t// Clear input after sorting to release objects\n\t// See https://github.com/jquery/sizzle/pull/225\n\tsortInput = null;\n\n\treturn results;\n};\n\n/**\n * Utility function for retrieving the text value of an array of DOM nodes\n * @param {Array|Element} elem\n */\ngetText = Sizzle.getText = function( elem ) {\n\tvar node,\n\t\tret = \"\",\n\t\ti = 0,\n\t\tnodeType = elem.nodeType;\n\n\tif ( !nodeType ) {\n\n\t\t// If no nodeType, this is expected to be an array\n\t\twhile ( ( node = elem[ i++ ] ) ) {\n\n\t\t\t// Do not traverse comment nodes\n\t\t\tret += getText( node );\n\t\t}\n\t} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {\n\n\t\t// Use textContent for elements\n\t\t// innerText usage removed for consistency of new lines (jQuery #11153)\n\t\tif ( typeof elem.textContent === \"string\" ) {\n\t\t\treturn elem.textContent;\n\t\t} else {\n\n\t\t\t// Traverse its children\n\t\t\tfor ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {\n\t\t\t\tret += getText( elem );\n\t\t\t}\n\t\t}\n\t} else if ( nodeType === 3 || nodeType === 4 ) {\n\t\treturn elem.nodeValue;\n\t}\n\n\t// Do not include comment or processing instruction nodes\n\n\treturn ret;\n};\n\nExpr = Sizzle.selectors = {\n\n\t// Can be adjusted by the user\n\tcacheLength: 50,\n\n\tcreatePseudo: markFunction,\n\n\tmatch: matchExpr,\n\n\tattrHandle: {},\n\n\tfind: {},\n\n\trelative: {\n\t\t\">\": { dir: \"parentNode\", first: true },\n\t\t\" \": { dir: \"parentNode\" },\n\t\t\"+\": { dir: \"previousSibling\", first: true },\n\t\t\"~\": { dir: \"previousSibling\" }\n\t},\n\n\tpreFilter: {\n\t\t\"ATTR\": function( match ) {\n\t\t\tmatch[ 1 ] = match[ 1 ].replace( runescape, funescape );\n\n\t\t\t// Move the given value to match[3] whether quoted or unquoted\n\t\t\tmatch[ 3 ] = ( match[ 3 ] || match[ 4 ] ||\n\t\t\t\tmatch[ 5 ] || \"\" ).replace( runescape, funescape );\n\n\t\t\tif ( match[ 2 ] === \"~=\" ) {\n\t\t\t\tmatch[ 3 ] = \" \" + match[ 3 ] + \" \";\n\t\t\t}\n\n\t\t\treturn match.slice( 0, 4 );\n\t\t},\n\n\t\t\"CHILD\": function( match ) {\n\n\t\t\t/* matches from matchExpr[\"CHILD\"]\n\t\t\t\t1 type (only|nth|...)\n\t\t\t\t2 what (child|of-type)\n\t\t\t\t3 argument (even|odd|\\d*|\\d*n([+-]\\d+)?|...)\n\t\t\t\t4 xn-component of xn+y argument ([+-]?\\d*n|)\n\t\t\t\t5 sign of xn-component\n\t\t\t\t6 x of xn-component\n\t\t\t\t7 sign of y-component\n\t\t\t\t8 y of y-component\n\t\t\t*/\n\t\t\tmatch[ 1 ] = match[ 1 ].toLowerCase();\n\n\t\t\tif ( match[ 1 ].slice( 0, 3 ) === \"nth\" ) {\n\n\t\t\t\t// nth-* requires argument\n\t\t\t\tif ( !match[ 3 ] ) {\n\t\t\t\t\tSizzle.error( match[ 0 ] );\n\t\t\t\t}\n\n\t\t\t\t// numeric x and y parameters for Expr.filter.CHILD\n\t\t\t\t// remember that false/true cast respectively to 0/1\n\t\t\t\tmatch[ 4 ] = +( match[ 4 ] ?\n\t\t\t\t\tmatch[ 5 ] + ( match[ 6 ] || 1 ) :\n\t\t\t\t\t2 * ( match[ 3 ] === \"even\" || match[ 3 ] === \"odd\" ) );\n\t\t\t\tmatch[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === \"odd\" );\n\n\t\t\t\t// other types prohibit arguments\n\t\t\t} else if ( match[ 3 ] ) {\n\t\t\t\tSizzle.error( match[ 0 ] );\n\t\t\t}\n\n\t\t\treturn match;\n\t\t},\n\n\t\t\"PSEUDO\": function( match ) {\n\t\t\tvar excess,\n\t\t\t\tunquoted = !match[ 6 ] && match[ 2 ];\n\n\t\t\tif ( matchExpr[ \"CHILD\" ].test( match[ 0 ] ) ) {\n\t\t\t\treturn null;\n\t\t\t}\n\n\t\t\t// Accept quoted arguments as-is\n\t\t\tif ( match[ 3 ] ) {\n\t\t\t\tmatch[ 2 ] = match[ 4 ] || match[ 5 ] || \"\";\n\n\t\t\t// Strip excess characters from unquoted arguments\n\t\t\t} else if ( unquoted && rpseudo.test( unquoted ) &&\n\n\t\t\t\t// Get excess from tokenize (recursively)\n\t\t\t\t( excess = tokenize( unquoted, true ) ) &&\n\n\t\t\t\t// advance to the next closing parenthesis\n\t\t\t\t( excess = unquoted.indexOf( \")\", unquoted.length - excess ) - unquoted.length ) ) {\n\n\t\t\t\t// excess is a negative index\n\t\t\t\tmatch[ 0 ] = match[ 0 ].slice( 0, excess );\n\t\t\t\tmatch[ 2 ] = unquoted.slice( 0, excess );\n\t\t\t}\n\n\t\t\t// Return only captures needed by the pseudo filter method (type and argument)\n\t\t\treturn match.slice( 0, 3 );\n\t\t}\n\t},\n\n\tfilter: {\n\n\t\t\"TAG\": function( nodeNameSelector ) {\n\t\t\tvar nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();\n\t\t\treturn nodeNameSelector === \"*\" ?\n\t\t\t\tfunction() {\n\t\t\t\t\treturn true;\n\t\t\t\t} :\n\t\t\t\tfunction( elem ) {\n\t\t\t\t\treturn elem.nodeName && elem.nodeName.toLowerCase() === nodeName;\n\t\t\t\t};\n\t\t},\n\n\t\t\"CLASS\": function( className ) {\n\t\t\tvar pattern = classCache[ className + \" \" ];\n\n\t\t\treturn pattern ||\n\t\t\t\t( pattern = new RegExp( \"(^|\" + whitespace +\n\t\t\t\t\t\")\" + className + \"(\" + whitespace + \"|$)\" ) ) && classCache(\n\t\t\t\t\t\tclassName, function( elem ) {\n\t\t\t\t\t\t\treturn pattern.test(\n\t\t\t\t\t\t\t\ttypeof elem.className === \"string\" && elem.className ||\n\t\t\t\t\t\t\t\ttypeof elem.getAttribute !== \"undefined\" &&\n\t\t\t\t\t\t\t\t\telem.getAttribute( \"class\" ) ||\n\t\t\t\t\t\t\t\t\"\"\n\t\t\t\t\t\t\t);\n\t\t\t\t} );\n\t\t},\n\n\t\t\"ATTR\": function( name, operator, check ) {\n\t\t\treturn function( elem ) {\n\t\t\t\tvar result = Sizzle.attr( elem, name );\n\n\t\t\t\tif ( result == null ) {\n\t\t\t\t\treturn operator === \"!=\";\n\t\t\t\t}\n\t\t\t\tif ( !operator ) {\n\t\t\t\t\treturn true;\n\t\t\t\t}\n\n\t\t\t\tresult += \"\";\n\n\t\t\t\t/* eslint-disable max-len */\n\n\t\t\t\treturn operator === \"=\" ? result === check :\n\t\t\t\t\toperator === \"!=\" ? result !== check :\n\t\t\t\t\toperator === \"^=\" ? check && result.indexOf( check ) === 0 :\n\t\t\t\t\toperator === \"*=\" ? check && result.indexOf( check ) > -1 :\n\t\t\t\t\toperator === \"$=\" ? check && result.slice( -check.length ) === check :\n\t\t\t\t\toperator === \"~=\" ? ( \" \" + result.replace( rwhitespace, \" \" ) + \" \" ).indexOf( check ) > -1 :\n\t\t\t\t\toperator === \"|=\" ? result === check || result.slice( 0, check.length + 1 ) === check + \"-\" :\n\t\t\t\t\tfalse;\n\t\t\t\t/* eslint-enable max-len */\n\n\t\t\t};\n\t\t},\n\n\t\t\"CHILD\": function( type, what, _argument, first, last ) {\n\t\t\tvar simple = type.slice( 0, 3 ) !== \"nth\",\n\t\t\t\tforward = type.slice( -4 ) !== \"last\",\n\t\t\t\tofType = what === \"of-type\";\n\n\t\t\treturn first === 1 && last === 0 ?\n\n\t\t\t\t// Shortcut for :nth-*(n)\n\t\t\t\tfunction( elem ) {\n\t\t\t\t\treturn !!elem.parentNode;\n\t\t\t\t} :\n\n\t\t\t\tfunction( elem, _context, xml ) {\n\t\t\t\t\tvar cache, uniqueCache, outerCache, node, nodeIndex, start,\n\t\t\t\t\t\tdir = simple !== forward ? \"nextSibling\" : \"previousSibling\",\n\t\t\t\t\t\tparent = elem.parentNode,\n\t\t\t\t\t\tname = ofType && elem.nodeName.toLowerCase(),\n\t\t\t\t\t\tuseCache = !xml && !ofType,\n\t\t\t\t\t\tdiff = false;\n\n\t\t\t\t\tif ( parent ) {\n\n\t\t\t\t\t\t// :(first|last|only)-(child|of-type)\n\t\t\t\t\t\tif ( simple ) {\n\t\t\t\t\t\t\twhile ( dir ) {\n\t\t\t\t\t\t\t\tnode = elem;\n\t\t\t\t\t\t\t\twhile ( ( node = node[ dir ] ) ) {\n\t\t\t\t\t\t\t\t\tif ( ofType ?\n\t\t\t\t\t\t\t\t\t\tnode.nodeName.toLowerCase() === name :\n\t\t\t\t\t\t\t\t\t\tnode.nodeType === 1 ) {\n\n\t\t\t\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// Reverse direction for :only-* (if we haven't yet done so)\n\t\t\t\t\t\t\t\tstart = dir = type === \"only\" && !start && \"nextSibling\";\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\treturn true;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tstart = [ forward ? parent.firstChild : parent.lastChild ];\n\n\t\t\t\t\t\t// non-xml :nth-child(...) stores cache data on `parent`\n\t\t\t\t\t\tif ( forward && useCache ) {\n\n\t\t\t\t\t\t\t// Seek `elem` from a previously-cached index\n\n\t\t\t\t\t\t\t// ...in a gzip-friendly way\n\t\t\t\t\t\t\tnode = parent;\n\t\t\t\t\t\t\touterCache = node[ expando ] || ( node[ expando ] = {} );\n\n\t\t\t\t\t\t\t// Support: IE <9 only\n\t\t\t\t\t\t\t// Defend against cloned attroperties (jQuery gh-1709)\n\t\t\t\t\t\t\tuniqueCache = outerCache[ node.uniqueID ] ||\n\t\t\t\t\t\t\t\t( outerCache[ node.uniqueID ] = {} );\n\n\t\t\t\t\t\t\tcache = uniqueCache[ type ] || [];\n\t\t\t\t\t\t\tnodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];\n\t\t\t\t\t\t\tdiff = nodeIndex && cache[ 2 ];\n\t\t\t\t\t\t\tnode = nodeIndex && parent.childNodes[ nodeIndex ];\n\n\t\t\t\t\t\t\twhile ( ( node = ++nodeIndex && node && node[ dir ] ||\n\n\t\t\t\t\t\t\t\t// Fallback to seeking `elem` from the start\n\t\t\t\t\t\t\t\t( diff = nodeIndex = 0 ) || start.pop() ) ) {\n\n\t\t\t\t\t\t\t\t// When found, cache indexes on `parent` and break\n\t\t\t\t\t\t\t\tif ( node.nodeType === 1 && ++diff && node === elem ) {\n\t\t\t\t\t\t\t\t\tuniqueCache[ type ] = [ dirruns, nodeIndex, diff ];\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t} else {\n\n\t\t\t\t\t\t\t// Use previously-cached element index if available\n\t\t\t\t\t\t\tif ( useCache ) {\n\n\t\t\t\t\t\t\t\t// ...in a gzip-friendly way\n\t\t\t\t\t\t\t\tnode = elem;\n\t\t\t\t\t\t\t\touterCache = node[ expando ] || ( node[ expando ] = {} );\n\n\t\t\t\t\t\t\t\t// Support: IE <9 only\n\t\t\t\t\t\t\t\t// Defend against cloned attroperties (jQuery gh-1709)\n\t\t\t\t\t\t\t\tuniqueCache = outerCache[ node.uniqueID ] ||\n\t\t\t\t\t\t\t\t\t( outerCache[ node.uniqueID ] = {} );\n\n\t\t\t\t\t\t\t\tcache = uniqueCache[ type ] || [];\n\t\t\t\t\t\t\t\tnodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];\n\t\t\t\t\t\t\t\tdiff = nodeIndex;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t// xml :nth-child(...)\n\t\t\t\t\t\t\t// or :nth-last-child(...) or :nth(-last)?-of-type(...)\n\t\t\t\t\t\t\tif ( diff === false ) {\n\n\t\t\t\t\t\t\t\t// Use the same loop as above to seek `elem` from the start\n\t\t\t\t\t\t\t\twhile ( ( node = ++nodeIndex && node && node[ dir ] ||\n\t\t\t\t\t\t\t\t\t( diff = nodeIndex = 0 ) || start.pop() ) ) {\n\n\t\t\t\t\t\t\t\t\tif ( ( ofType ?\n\t\t\t\t\t\t\t\t\t\tnode.nodeName.toLowerCase() === name :\n\t\t\t\t\t\t\t\t\t\tnode.nodeType === 1 ) &&\n\t\t\t\t\t\t\t\t\t\t++diff ) {\n\n\t\t\t\t\t\t\t\t\t\t// Cache the index of each encountered element\n\t\t\t\t\t\t\t\t\t\tif ( useCache ) {\n\t\t\t\t\t\t\t\t\t\t\touterCache = node[ expando ] ||\n\t\t\t\t\t\t\t\t\t\t\t\t( node[ expando ] = {} );\n\n\t\t\t\t\t\t\t\t\t\t\t// Support: IE <9 only\n\t\t\t\t\t\t\t\t\t\t\t// Defend against cloned attroperties (jQuery gh-1709)\n\t\t\t\t\t\t\t\t\t\t\tuniqueCache = outerCache[ node.uniqueID ] ||\n\t\t\t\t\t\t\t\t\t\t\t\t( outerCache[ node.uniqueID ] = {} );\n\n\t\t\t\t\t\t\t\t\t\t\tuniqueCache[ type ] = [ dirruns, diff ];\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\tif ( node === elem ) {\n\t\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Incorporate the offset, then check against cycle size\n\t\t\t\t\t\tdiff -= last;\n\t\t\t\t\t\treturn diff === first || ( diff % first === 0 && diff / first >= 0 );\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t},\n\n\t\t\"PSEUDO\": function( pseudo, argument ) {\n\n\t\t\t// pseudo-class names are case-insensitive\n\t\t\t// http://www.w3.org/TR/selectors/#pseudo-classes\n\t\t\t// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters\n\t\t\t// Remember that setFilters inherits from pseudos\n\t\t\tvar args,\n\t\t\t\tfn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||\n\t\t\t\t\tSizzle.error( \"unsupported pseudo: \" + pseudo );\n\n\t\t\t// The user may use createPseudo to indicate that\n\t\t\t// arguments are needed to create the filter function\n\t\t\t// just as Sizzle does\n\t\t\tif ( fn[ expando ] ) {\n\t\t\t\treturn fn( argument );\n\t\t\t}\n\n\t\t\t// But maintain support for old signatures\n\t\t\tif ( fn.length > 1 ) {\n\t\t\t\targs = [ pseudo, pseudo, \"\", argument ];\n\t\t\t\treturn Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?\n\t\t\t\t\tmarkFunction( function( seed, matches ) {\n\t\t\t\t\t\tvar idx,\n\t\t\t\t\t\t\tmatched = fn( seed, argument ),\n\t\t\t\t\t\t\ti = matched.length;\n\t\t\t\t\t\twhile ( i-- ) {\n\t\t\t\t\t\t\tidx = indexOf( seed, matched[ i ] );\n\t\t\t\t\t\t\tseed[ idx ] = !( matches[ idx ] = matched[ i ] );\n\t\t\t\t\t\t}\n\t\t\t\t\t} ) :\n\t\t\t\t\tfunction( elem ) {\n\t\t\t\t\t\treturn fn( elem, 0, args );\n\t\t\t\t\t};\n\t\t\t}\n\n\t\t\treturn fn;\n\t\t}\n\t},\n\n\tpseudos: {\n\n\t\t// Potentially complex pseudos\n\t\t\"not\": markFunction( function( selector ) {\n\n\t\t\t// Trim the selector passed to compile\n\t\t\t// to avoid treating leading and trailing\n\t\t\t// spaces as combinators\n\t\t\tvar input = [],\n\t\t\t\tresults = [],\n\t\t\t\tmatcher = compile( selector.replace( rtrim, \"$1\" ) );\n\n\t\t\treturn matcher[ expando ] ?\n\t\t\t\tmarkFunction( function( seed, matches, _context, xml ) {\n\t\t\t\t\tvar elem,\n\t\t\t\t\t\tunmatched = matcher( seed, null, xml, [] ),\n\t\t\t\t\t\ti = seed.length;\n\n\t\t\t\t\t// Match elements unmatched by `matcher`\n\t\t\t\t\twhile ( i-- ) {\n\t\t\t\t\t\tif ( ( elem = unmatched[ i ] ) ) {\n\t\t\t\t\t\t\tseed[ i ] = !( matches[ i ] = elem );\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} ) :\n\t\t\t\tfunction( elem, _context, xml ) {\n\t\t\t\t\tinput[ 0 ] = elem;\n\t\t\t\t\tmatcher( input, null, xml, results );\n\n\t\t\t\t\t// Don't keep the element (issue #299)\n\t\t\t\t\tinput[ 0 ] = null;\n\t\t\t\t\treturn !results.pop();\n\t\t\t\t};\n\t\t} ),\n\n\t\t\"has\": markFunction( function( selector ) {\n\t\t\treturn function( elem ) {\n\t\t\t\treturn Sizzle( selector, elem ).length > 0;\n\t\t\t};\n\t\t} ),\n\n\t\t\"contains\": markFunction( function( text ) {\n\t\t\ttext = text.replace( runescape, funescape );\n\t\t\treturn function( elem ) {\n\t\t\t\treturn ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;\n\t\t\t};\n\t\t} ),\n\n\t\t// \"Whether an element is represented by a :lang() selector\n\t\t// is based solely on the element's language value\n\t\t// being equal to the identifier C,\n\t\t// or beginning with the identifier C immediately followed by \"-\".\n\t\t// The matching of C against the element's language value is performed case-insensitively.\n\t\t// The identifier C does not have to be a valid language name.\"\n\t\t// http://www.w3.org/TR/selectors/#lang-pseudo\n\t\t\"lang\": markFunction( function( lang ) {\n\n\t\t\t// lang value must be a valid identifier\n\t\t\tif ( !ridentifier.test( lang || \"\" ) ) {\n\t\t\t\tSizzle.error( \"unsupported lang: \" + lang );\n\t\t\t}\n\t\t\tlang = lang.replace( runescape, funescape ).toLowerCase();\n\t\t\treturn function( elem ) {\n\t\t\t\tvar elemLang;\n\t\t\t\tdo {\n\t\t\t\t\tif ( ( elemLang = documentIsHTML ?\n\t\t\t\t\t\telem.lang :\n\t\t\t\t\t\telem.getAttribute( \"xml:lang\" ) || elem.getAttribute( \"lang\" ) ) ) {\n\n\t\t\t\t\t\telemLang = elemLang.toLowerCase();\n\t\t\t\t\t\treturn elemLang === lang || elemLang.indexOf( lang + \"-\" ) === 0;\n\t\t\t\t\t}\n\t\t\t\t} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );\n\t\t\t\treturn false;\n\t\t\t};\n\t\t} ),\n\n\t\t// Miscellaneous\n\t\t\"target\": function( elem ) {\n\t\t\tvar hash = window.location && window.location.hash;\n\t\t\treturn hash && hash.slice( 1 ) === elem.id;\n\t\t},\n\n\t\t\"root\": function( elem ) {\n\t\t\treturn elem === docElem;\n\t\t},\n\n\t\t\"focus\": function( elem ) {\n\t\t\treturn elem === document.activeElement &&\n\t\t\t\t( !document.hasFocus || document.hasFocus() ) &&\n\t\t\t\t!!( elem.type || elem.href || ~elem.tabIndex );\n\t\t},\n\n\t\t// Boolean properties\n\t\t\"enabled\": createDisabledPseudo( false ),\n\t\t\"disabled\": createDisabledPseudo( true ),\n\n\t\t\"checked\": function( elem ) {\n\n\t\t\t// In CSS3, :checked should return both checked and selected elements\n\t\t\t// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked\n\t\t\tvar nodeName = elem.nodeName.toLowerCase();\n\t\t\treturn ( nodeName === \"input\" && !!elem.checked ) ||\n\t\t\t\t( nodeName === \"option\" && !!elem.selected );\n\t\t},\n\n\t\t\"selected\": function( elem ) {\n\n\t\t\t// Accessing this property makes selected-by-default\n\t\t\t// options in Safari work properly\n\t\t\tif ( elem.parentNode ) {\n\t\t\t\t// eslint-disable-next-line no-unused-expressions\n\t\t\t\telem.parentNode.selectedIndex;\n\t\t\t}\n\n\t\t\treturn elem.selected === true;\n\t\t},\n\n\t\t// Contents\n\t\t\"empty\": function( elem ) {\n\n\t\t\t// http://www.w3.org/TR/selectors/#empty-pseudo\n\t\t\t// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),\n\t\t\t//   but not by others (comment: 8; processing instruction: 7; etc.)\n\t\t\t// nodeType < 6 works because attributes (2) do not appear as children\n\t\t\tfor ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {\n\t\t\t\tif ( elem.nodeType < 6 ) {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn true;\n\t\t},\n\n\t\t\"parent\": function( elem ) {\n\t\t\treturn !Expr.pseudos[ \"empty\" ]( elem );\n\t\t},\n\n\t\t// Element/input types\n\t\t\"header\": function( elem ) {\n\t\t\treturn rheader.test( elem.nodeName );\n\t\t},\n\n\t\t\"input\": function( elem ) {\n\t\t\treturn rinputs.test( elem.nodeName );\n\t\t},\n\n\t\t\"button\": function( elem ) {\n\t\t\tvar name = elem.nodeName.toLowerCase();\n\t\t\treturn name === \"input\" && elem.type === \"button\" || name === \"button\";\n\t\t},\n\n\t\t\"text\": function( elem ) {\n\t\t\tvar attr;\n\t\t\treturn elem.nodeName.toLowerCase() === \"input\" &&\n\t\t\t\telem.type === \"text\" &&\n\n\t\t\t\t// Support: IE<8\n\t\t\t\t// New HTML5 attribute values (e.g., \"search\") appear with elem.type === \"text\"\n\t\t\t\t( ( attr = elem.getAttribute( \"type\" ) ) == null ||\n\t\t\t\t\tattr.toLowerCase() === \"text\" );\n\t\t},\n\n\t\t// Position-in-collection\n\t\t\"first\": createPositionalPseudo( function() {\n\t\t\treturn [ 0 ];\n\t\t} ),\n\n\t\t\"last\": createPositionalPseudo( function( _matchIndexes, length ) {\n\t\t\treturn [ length - 1 ];\n\t\t} ),\n\n\t\t\"eq\": createPositionalPseudo( function( _matchIndexes, length, argument ) {\n\t\t\treturn [ argument < 0 ? argument + length : argument ];\n\t\t} ),\n\n\t\t\"even\": createPositionalPseudo( function( matchIndexes, length ) {\n\t\t\tvar i = 0;\n\t\t\tfor ( ; i < length; i += 2 ) {\n\t\t\t\tmatchIndexes.push( i );\n\t\t\t}\n\t\t\treturn matchIndexes;\n\t\t} ),\n\n\t\t\"odd\": createPositionalPseudo( function( matchIndexes, length ) {\n\t\t\tvar i = 1;\n\t\t\tfor ( ; i < length; i += 2 ) {\n\t\t\t\tmatchIndexes.push( i );\n\t\t\t}\n\t\t\treturn matchIndexes;\n\t\t} ),\n\n\t\t\"lt\": createPositionalPseudo( function( matchIndexes, length, argument ) {\n\t\t\tvar i = argument < 0 ?\n\t\t\t\targument + length :\n\t\t\t\targument > length ?\n\t\t\t\t\tlength :\n\t\t\t\t\targument;\n\t\t\tfor ( ; --i >= 0; ) {\n\t\t\t\tmatchIndexes.push( i );\n\t\t\t}\n\t\t\treturn matchIndexes;\n\t\t} ),\n\n\t\t\"gt\": createPositionalPseudo( function( matchIndexes, length, argument ) {\n\t\t\tvar i = argument < 0 ? argument + length : argument;\n\t\t\tfor ( ; ++i < length; ) {\n\t\t\t\tmatchIndexes.push( i );\n\t\t\t}\n\t\t\treturn matchIndexes;\n\t\t} )\n\t}\n};\n\nExpr.pseudos[ \"nth\" ] = Expr.pseudos[ \"eq\" ];\n\n// Add button/input type pseudos\nfor ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {\n\tExpr.pseudos[ i ] = createInputPseudo( i );\n}\nfor ( i in { submit: true, reset: true } ) {\n\tExpr.pseudos[ i ] = createButtonPseudo( i );\n}\n\n// Easy API for creating new setFilters\nfunction setFilters() {}\nsetFilters.prototype = Expr.filters = Expr.pseudos;\nExpr.setFilters = new setFilters();\n\ntokenize = Sizzle.tokenize = function( selector, parseOnly ) {\n\tvar matched, match, tokens, type,\n\t\tsoFar, groups, preFilters,\n\t\tcached = tokenCache[ selector + \" \" ];\n\n\tif ( cached ) {\n\t\treturn parseOnly ? 0 : cached.slice( 0 );\n\t}\n\n\tsoFar = selector;\n\tgroups = [];\n\tpreFilters = Expr.preFilter;\n\n\twhile ( soFar ) {\n\n\t\t// Comma and first run\n\t\tif ( !matched || ( match = rcomma.exec( soFar ) ) ) {\n\t\t\tif ( match ) {\n\n\t\t\t\t// Don't consume trailing commas as valid\n\t\t\t\tsoFar = soFar.slice( match[ 0 ].length ) || soFar;\n\t\t\t}\n\t\t\tgroups.push( ( tokens = [] ) );\n\t\t}\n\n\t\tmatched = false;\n\n\t\t// Combinators\n\t\tif ( ( match = rcombinators.exec( soFar ) ) ) {\n\t\t\tmatched = match.shift();\n\t\t\ttokens.push( {\n\t\t\t\tvalue: matched,\n\n\t\t\t\t// Cast descendant combinators to space\n\t\t\t\ttype: match[ 0 ].replace( rtrim, \" \" )\n\t\t\t} );\n\t\t\tsoFar = soFar.slice( matched.length );\n\t\t}\n\n\t\t// Filters\n\t\tfor ( type in Expr.filter ) {\n\t\t\tif ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||\n\t\t\t\t( match = preFilters[ type ]( match ) ) ) ) {\n\t\t\t\tmatched = match.shift();\n\t\t\t\ttokens.push( {\n\t\t\t\t\tvalue: matched,\n\t\t\t\t\ttype: type,\n\t\t\t\t\tmatches: match\n\t\t\t\t} );\n\t\t\t\tsoFar = soFar.slice( matched.length );\n\t\t\t}\n\t\t}\n\n\t\tif ( !matched ) {\n\t\t\tbreak;\n\t\t}\n\t}\n\n\t// Return the length of the invalid excess\n\t// if we're just parsing\n\t// Otherwise, throw an error or return tokens\n\treturn parseOnly ?\n\t\tsoFar.length :\n\t\tsoFar ?\n\t\t\tSizzle.error( selector ) :\n\n\t\t\t// Cache the tokens\n\t\t\ttokenCache( selector, groups ).slice( 0 );\n};\n\nfunction toSelector( tokens ) {\n\tvar i = 0,\n\t\tlen = tokens.length,\n\t\tselector = \"\";\n\tfor ( ; i < len; i++ ) {\n\t\tselector += tokens[ i ].value;\n\t}\n\treturn selector;\n}\n\nfunction addCombinator( matcher, combinator, base ) {\n\tvar dir = combinator.dir,\n\t\tskip = combinator.next,\n\t\tkey = skip || dir,\n\t\tcheckNonElements = base && key === \"parentNode\",\n\t\tdoneName = done++;\n\n\treturn combinator.first ?\n\n\t\t// Check against closest ancestor/preceding element\n\t\tfunction( elem, context, xml ) {\n\t\t\twhile ( ( elem = elem[ dir ] ) ) {\n\t\t\t\tif ( elem.nodeType === 1 || checkNonElements ) {\n\t\t\t\t\treturn matcher( elem, context, xml );\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn false;\n\t\t} :\n\n\t\t// Check against all ancestor/preceding elements\n\t\tfunction( elem, context, xml ) {\n\t\t\tvar oldCache, uniqueCache, outerCache,\n\t\t\t\tnewCache = [ dirruns, doneName ];\n\n\t\t\t// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching\n\t\t\tif ( xml ) {\n\t\t\t\twhile ( ( elem = elem[ dir ] ) ) {\n\t\t\t\t\tif ( elem.nodeType === 1 || checkNonElements ) {\n\t\t\t\t\t\tif ( matcher( elem, context, xml ) ) {\n\t\t\t\t\t\t\treturn true;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\twhile ( ( elem = elem[ dir ] ) ) {\n\t\t\t\t\tif ( elem.nodeType === 1 || checkNonElements ) {\n\t\t\t\t\t\touterCache = elem[ expando ] || ( elem[ expando ] = {} );\n\n\t\t\t\t\t\t// Support: IE <9 only\n\t\t\t\t\t\t// Defend against cloned attroperties (jQuery gh-1709)\n\t\t\t\t\t\tuniqueCache = outerCache[ elem.uniqueID ] ||\n\t\t\t\t\t\t\t( outerCache[ elem.uniqueID ] = {} );\n\n\t\t\t\t\t\tif ( skip && skip === elem.nodeName.toLowerCase() ) {\n\t\t\t\t\t\t\telem = elem[ dir ] || elem;\n\t\t\t\t\t\t} else if ( ( oldCache = uniqueCache[ key ] ) &&\n\t\t\t\t\t\t\toldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {\n\n\t\t\t\t\t\t\t// Assign to newCache so results back-propagate to previous elements\n\t\t\t\t\t\t\treturn ( newCache[ 2 ] = oldCache[ 2 ] );\n\t\t\t\t\t\t} else {\n\n\t\t\t\t\t\t\t// Reuse newcache so results back-propagate to previous elements\n\t\t\t\t\t\t\tuniqueCache[ key ] = newCache;\n\n\t\t\t\t\t\t\t// A match means we're done; a fail means we have to keep checking\n\t\t\t\t\t\t\tif ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {\n\t\t\t\t\t\t\t\treturn true;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn false;\n\t\t};\n}\n\nfunction elementMatcher( matchers ) {\n\treturn matchers.length > 1 ?\n\t\tfunction( elem, context, xml ) {\n\t\t\tvar i = matchers.length;\n\t\t\twhile ( i-- ) {\n\t\t\t\tif ( !matchers[ i ]( elem, context, xml ) ) {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn true;\n\t\t} :\n\t\tmatchers[ 0 ];\n}\n\nfunction multipleContexts( selector, contexts, results ) {\n\tvar i = 0,\n\t\tlen = contexts.length;\n\tfor ( ; i < len; i++ ) {\n\t\tSizzle( selector, contexts[ i ], results );\n\t}\n\treturn results;\n}\n\nfunction condense( unmatched, map, filter, context, xml ) {\n\tvar elem,\n\t\tnewUnmatched = [],\n\t\ti = 0,\n\t\tlen = unmatched.length,\n\t\tmapped = map != null;\n\n\tfor ( ; i < len; i++ ) {\n\t\tif ( ( elem = unmatched[ i ] ) ) {\n\t\t\tif ( !filter || filter( elem, context, xml ) ) {\n\t\t\t\tnewUnmatched.push( elem );\n\t\t\t\tif ( mapped ) {\n\t\t\t\t\tmap.push( i );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn newUnmatched;\n}\n\nfunction setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {\n\tif ( postFilter && !postFilter[ expando ] ) {\n\t\tpostFilter = setMatcher( postFilter );\n\t}\n\tif ( postFinder && !postFinder[ expando ] ) {\n\t\tpostFinder = setMatcher( postFinder, postSelector );\n\t}\n\treturn markFunction( function( seed, results, context, xml ) {\n\t\tvar temp, i, elem,\n\t\t\tpreMap = [],\n\t\t\tpostMap = [],\n\t\t\tpreexisting = results.length,\n\n\t\t\t// Get initial elements from seed or context\n\t\t\telems = seed || multipleContexts(\n\t\t\t\tselector || \"*\",\n\t\t\t\tcontext.nodeType ? [ context ] : context,\n\t\t\t\t[]\n\t\t\t),\n\n\t\t\t// Prefilter to get matcher input, preserving a map for seed-results synchronization\n\t\t\tmatcherIn = preFilter && ( seed || !selector ) ?\n\t\t\t\tcondense( elems, preMap, preFilter, context, xml ) :\n\t\t\t\telems,\n\n\t\t\tmatcherOut = matcher ?\n\n\t\t\t\t// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,\n\t\t\t\tpostFinder || ( seed ? preFilter : preexisting || postFilter ) ?\n\n\t\t\t\t\t// ...intermediate processing is necessary\n\t\t\t\t\t[] :\n\n\t\t\t\t\t// ...otherwise use results directly\n\t\t\t\t\tresults :\n\t\t\t\tmatcherIn;\n\n\t\t// Find primary matches\n\t\tif ( matcher ) {\n\t\t\tmatcher( matcherIn, matcherOut, context, xml );\n\t\t}\n\n\t\t// Apply postFilter\n\t\tif ( postFilter ) {\n\t\t\ttemp = condense( matcherOut, postMap );\n\t\t\tpostFilter( temp, [], context, xml );\n\n\t\t\t// Un-match failing elements by moving them back to matcherIn\n\t\t\ti = temp.length;\n\t\t\twhile ( i-- ) {\n\t\t\t\tif ( ( elem = temp[ i ] ) ) {\n\t\t\t\t\tmatcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tif ( seed ) {\n\t\t\tif ( postFinder || preFilter ) {\n\t\t\t\tif ( postFinder ) {\n\n\t\t\t\t\t// Get the final matcherOut by condensing this intermediate into postFinder contexts\n\t\t\t\t\ttemp = [];\n\t\t\t\t\ti = matcherOut.length;\n\t\t\t\t\twhile ( i-- ) {\n\t\t\t\t\t\tif ( ( elem = matcherOut[ i ] ) ) {\n\n\t\t\t\t\t\t\t// Restore matcherIn since elem is not yet a final match\n\t\t\t\t\t\t\ttemp.push( ( matcherIn[ i ] = elem ) );\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tpostFinder( null, ( matcherOut = [] ), temp, xml );\n\t\t\t\t}\n\n\t\t\t\t// Move matched elements from seed to results to keep them synchronized\n\t\t\t\ti = matcherOut.length;\n\t\t\t\twhile ( i-- ) {\n\t\t\t\t\tif ( ( elem = matcherOut[ i ] ) &&\n\t\t\t\t\t\t( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {\n\n\t\t\t\t\t\tseed[ temp ] = !( results[ temp ] = elem );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t// Add elements to results, through postFinder if defined\n\t\t} else {\n\t\t\tmatcherOut = condense(\n\t\t\t\tmatcherOut === results ?\n\t\t\t\t\tmatcherOut.splice( preexisting, matcherOut.length ) :\n\t\t\t\t\tmatcherOut\n\t\t\t);\n\t\t\tif ( postFinder ) {\n\t\t\t\tpostFinder( null, results, matcherOut, xml );\n\t\t\t} else {\n\t\t\t\tpush.apply( results, matcherOut );\n\t\t\t}\n\t\t}\n\t} );\n}\n\nfunction matcherFromTokens( tokens ) {\n\tvar checkContext, matcher, j,\n\t\tlen = tokens.length,\n\t\tleadingRelative = Expr.relative[ tokens[ 0 ].type ],\n\t\timplicitRelative = leadingRelative || Expr.relative[ \" \" ],\n\t\ti = leadingRelative ? 1 : 0,\n\n\t\t// The foundational matcher ensures that elements are reachable from top-level context(s)\n\t\tmatchContext = addCombinator( function( elem ) {\n\t\t\treturn elem === checkContext;\n\t\t}, implicitRelative, true ),\n\t\tmatchAnyContext = addCombinator( function( elem ) {\n\t\t\treturn indexOf( checkContext, elem ) > -1;\n\t\t}, implicitRelative, true ),\n\t\tmatchers = [ function( elem, context, xml ) {\n\t\t\tvar ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (\n\t\t\t\t( checkContext = context ).nodeType ?\n\t\t\t\t\tmatchContext( elem, context, xml ) :\n\t\t\t\t\tmatchAnyContext( elem, context, xml ) );\n\n\t\t\t// Avoid hanging onto element (issue #299)\n\t\t\tcheckContext = null;\n\t\t\treturn ret;\n\t\t} ];\n\n\tfor ( ; i < len; i++ ) {\n\t\tif ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {\n\t\t\tmatchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];\n\t\t} else {\n\t\t\tmatcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );\n\n\t\t\t// Return special upon seeing a positional matcher\n\t\t\tif ( matcher[ expando ] ) {\n\n\t\t\t\t// Find the next relative operator (if any) for proper handling\n\t\t\t\tj = ++i;\n\t\t\t\tfor ( ; j < len; j++ ) {\n\t\t\t\t\tif ( Expr.relative[ tokens[ j ].type ] ) {\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\treturn setMatcher(\n\t\t\t\t\ti > 1 && elementMatcher( matchers ),\n\t\t\t\t\ti > 1 && toSelector(\n\n\t\t\t\t\t// If the preceding token was a descendant combinator, insert an implicit any-element `*`\n\t\t\t\t\ttokens\n\t\t\t\t\t\t.slice( 0, i - 1 )\n\t\t\t\t\t\t.concat( { value: tokens[ i - 2 ].type === \" \" ? \"*\" : \"\" } )\n\t\t\t\t\t).replace( rtrim, \"$1\" ),\n\t\t\t\t\tmatcher,\n\t\t\t\t\ti < j && matcherFromTokens( tokens.slice( i, j ) ),\n\t\t\t\t\tj < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),\n\t\t\t\t\tj < len && toSelector( tokens )\n\t\t\t\t);\n\t\t\t}\n\t\t\tmatchers.push( matcher );\n\t\t}\n\t}\n\n\treturn elementMatcher( matchers );\n}\n\nfunction matcherFromGroupMatchers( elementMatchers, setMatchers ) {\n\tvar bySet = setMatchers.length > 0,\n\t\tbyElement = elementMatchers.length > 0,\n\t\tsuperMatcher = function( seed, context, xml, results, outermost ) {\n\t\t\tvar elem, j, matcher,\n\t\t\t\tmatchedCount = 0,\n\t\t\t\ti = \"0\",\n\t\t\t\tunmatched = seed && [],\n\t\t\t\tsetMatched = [],\n\t\t\t\tcontextBackup = outermostContext,\n\n\t\t\t\t// We must always have either seed elements or outermost context\n\t\t\t\telems = seed || byElement && Expr.find[ \"TAG\" ]( \"*\", outermost ),\n\n\t\t\t\t// Use integer dirruns iff this is the outermost matcher\n\t\t\t\tdirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),\n\t\t\t\tlen = elems.length;\n\n\t\t\tif ( outermost ) {\n\n\t\t\t\t// Support: IE 11+, Edge 17 - 18+\n\t\t\t\t// IE/Edge sometimes throw a \"Permission denied\" error when strict-comparing\n\t\t\t\t// two documents; shallow comparisons work.\n\t\t\t\t// eslint-disable-next-line eqeqeq\n\t\t\t\toutermostContext = context == document || context || outermost;\n\t\t\t}\n\n\t\t\t// Add elements passing elementMatchers directly to results\n\t\t\t// Support: IE<9, Safari\n\t\t\t// Tolerate NodeList properties (IE: \"length\"; Safari: <number>) matching elements by id\n\t\t\tfor ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {\n\t\t\t\tif ( byElement && elem ) {\n\t\t\t\t\tj = 0;\n\n\t\t\t\t\t// Support: IE 11+, Edge 17 - 18+\n\t\t\t\t\t// IE/Edge sometimes throw a \"Permission denied\" error when strict-comparing\n\t\t\t\t\t// two documents; shallow comparisons work.\n\t\t\t\t\t// eslint-disable-next-line eqeqeq\n\t\t\t\t\tif ( !context && elem.ownerDocument != document ) {\n\t\t\t\t\t\tsetDocument( elem );\n\t\t\t\t\t\txml = !documentIsHTML;\n\t\t\t\t\t}\n\t\t\t\t\twhile ( ( matcher = elementMatchers[ j++ ] ) ) {\n\t\t\t\t\t\tif ( matcher( elem, context || document, xml ) ) {\n\t\t\t\t\t\t\tresults.push( elem );\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tif ( outermost ) {\n\t\t\t\t\t\tdirruns = dirrunsUnique;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Track unmatched elements for set filters\n\t\t\t\tif ( bySet ) {\n\n\t\t\t\t\t// They will have gone through all possible matchers\n\t\t\t\t\tif ( ( elem = !matcher && elem ) ) {\n\t\t\t\t\t\tmatchedCount--;\n\t\t\t\t\t}\n\n\t\t\t\t\t// Lengthen the array for every element, matched or not\n\t\t\t\t\tif ( seed ) {\n\t\t\t\t\t\tunmatched.push( elem );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// `i` is now the count of elements visited above, and adding it to `matchedCount`\n\t\t\t// makes the latter nonnegative.\n\t\t\tmatchedCount += i;\n\n\t\t\t// Apply set filters to unmatched elements\n\t\t\t// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`\n\t\t\t// equals `i`), unless we didn't visit _any_ elements in the above loop because we have\n\t\t\t// no element matchers and no seed.\n\t\t\t// Incrementing an initially-string \"0\" `i` allows `i` to remain a string only in that\n\t\t\t// case, which will result in a \"00\" `matchedCount` that differs from `i` but is also\n\t\t\t// numerically zero.\n\t\t\tif ( bySet && i !== matchedCount ) {\n\t\t\t\tj = 0;\n\t\t\t\twhile ( ( matcher = setMatchers[ j++ ] ) ) {\n\t\t\t\t\tmatcher( unmatched, setMatched, context, xml );\n\t\t\t\t}\n\n\t\t\t\tif ( seed ) {\n\n\t\t\t\t\t// Reintegrate element matches to eliminate the need for sorting\n\t\t\t\t\tif ( matchedCount > 0 ) {\n\t\t\t\t\t\twhile ( i-- ) {\n\t\t\t\t\t\t\tif ( !( unmatched[ i ] || setMatched[ i ] ) ) {\n\t\t\t\t\t\t\t\tsetMatched[ i ] = pop.call( results );\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// Discard index placeholder values to get only actual matches\n\t\t\t\t\tsetMatched = condense( setMatched );\n\t\t\t\t}\n\n\t\t\t\t// Add matches to results\n\t\t\t\tpush.apply( results, setMatched );\n\n\t\t\t\t// Seedless set matches succeeding multiple successful matchers stipulate sorting\n\t\t\t\tif ( outermost && !seed && setMatched.length > 0 &&\n\t\t\t\t\t( matchedCount + setMatchers.length ) > 1 ) {\n\n\t\t\t\t\tSizzle.uniqueSort( results );\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Override manipulation of globals by nested matchers\n\t\t\tif ( outermost ) {\n\t\t\t\tdirruns = dirrunsUnique;\n\t\t\t\toutermostContext = contextBackup;\n\t\t\t}\n\n\t\t\treturn unmatched;\n\t\t};\n\n\treturn bySet ?\n\t\tmarkFunction( superMatcher ) :\n\t\tsuperMatcher;\n}\n\ncompile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {\n\tvar i,\n\t\tsetMatchers = [],\n\t\telementMatchers = [],\n\t\tcached = compilerCache[ selector + \" \" ];\n\n\tif ( !cached ) {\n\n\t\t// Generate a function of recursive functions that can be used to check each element\n\t\tif ( !match ) {\n\t\t\tmatch = tokenize( selector );\n\t\t}\n\t\ti = match.length;\n\t\twhile ( i-- ) {\n\t\t\tcached = matcherFromTokens( match[ i ] );\n\t\t\tif ( cached[ expando ] ) {\n\t\t\t\tsetMatchers.push( cached );\n\t\t\t} else {\n\t\t\t\telementMatchers.push( cached );\n\t\t\t}\n\t\t}\n\n\t\t// Cache the compiled function\n\t\tcached = compilerCache(\n\t\t\tselector,\n\t\t\tmatcherFromGroupMatchers( elementMatchers, setMatchers )\n\t\t);\n\n\t\t// Save selector and tokenization\n\t\tcached.selector = selector;\n\t}\n\treturn cached;\n};\n\n/**\n * A low-level selection function that works with Sizzle's compiled\n *  selector functions\n * @param {String|Function} selector A selector or a pre-compiled\n *  selector function built with Sizzle.compile\n * @param {Element} context\n * @param {Array} [results]\n * @param {Array} [seed] A set of elements to match against\n */\nselect = Sizzle.select = function( selector, context, results, seed ) {\n\tvar i, tokens, token, type, find,\n\t\tcompiled = typeof selector === \"function\" && selector,\n\t\tmatch = !seed && tokenize( ( selector = compiled.selector || selector ) );\n\n\tresults = results || [];\n\n\t// Try to minimize operations if there is only one selector in the list and no seed\n\t// (the latter of which guarantees us context)\n\tif ( match.length === 1 ) {\n\n\t\t// Reduce context if the leading compound selector is an ID\n\t\ttokens = match[ 0 ] = match[ 0 ].slice( 0 );\n\t\tif ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === \"ID\" &&\n\t\t\tcontext.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {\n\n\t\t\tcontext = ( Expr.find[ \"ID\" ]( token.matches[ 0 ]\n\t\t\t\t.replace( runescape, funescape ), context ) || [] )[ 0 ];\n\t\t\tif ( !context ) {\n\t\t\t\treturn results;\n\n\t\t\t// Precompiled matchers will still verify ancestry, so step up a level\n\t\t\t} else if ( compiled ) {\n\t\t\t\tcontext = context.parentNode;\n\t\t\t}\n\n\t\t\tselector = selector.slice( tokens.shift().value.length );\n\t\t}\n\n\t\t// Fetch a seed set for right-to-left matching\n\t\ti = matchExpr[ \"needsContext\" ].test( selector ) ? 0 : tokens.length;\n\t\twhile ( i-- ) {\n\t\t\ttoken = tokens[ i ];\n\n\t\t\t// Abort if we hit a combinator\n\t\t\tif ( Expr.relative[ ( type = token.type ) ] ) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\tif ( ( find = Expr.find[ type ] ) ) {\n\n\t\t\t\t// Search, expanding context for leading sibling combinators\n\t\t\t\tif ( ( seed = find(\n\t\t\t\t\ttoken.matches[ 0 ].replace( runescape, funescape ),\n\t\t\t\t\trsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||\n\t\t\t\t\t\tcontext\n\t\t\t\t) ) ) {\n\n\t\t\t\t\t// If seed is empty or no tokens remain, we can return early\n\t\t\t\t\ttokens.splice( i, 1 );\n\t\t\t\t\tselector = seed.length && toSelector( tokens );\n\t\t\t\t\tif ( !selector ) {\n\t\t\t\t\t\tpush.apply( results, seed );\n\t\t\t\t\t\treturn results;\n\t\t\t\t\t}\n\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t// Compile and execute a filtering function if one is not provided\n\t// Provide `match` to avoid retokenization if we modified the selector above\n\t( compiled || compile( selector, match ) )(\n\t\tseed,\n\t\tcontext,\n\t\t!documentIsHTML,\n\t\tresults,\n\t\t!context || rsibling.test( selector ) && testContext( context.parentNode ) || context\n\t);\n\treturn results;\n};\n\n// One-time assignments\n\n// Sort stability\nsupport.sortStable = expando.split( \"\" ).sort( sortOrder ).join( \"\" ) === expando;\n\n// Support: Chrome 14-35+\n// Always assume duplicates if they aren't passed to the comparison function\nsupport.detectDuplicates = !!hasDuplicate;\n\n// Initialize against the default document\nsetDocument();\n\n// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)\n// Detached nodes confoundingly follow *each other*\nsupport.sortDetached = assert( function( el ) {\n\n\t// Should return 1, but returns 4 (following)\n\treturn el.compareDocumentPosition( document.createElement( \"fieldset\" ) ) & 1;\n} );\n\n// Support: IE<8\n// Prevent attribute/property \"interpolation\"\n// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx\nif ( !assert( function( el ) {\n\tel.innerHTML = \"<a href='#'></a>\";\n\treturn el.firstChild.getAttribute( \"href\" ) === \"#\";\n} ) ) {\n\taddHandle( \"type|href|height|width\", function( elem, name, isXML ) {\n\t\tif ( !isXML ) {\n\t\t\treturn elem.getAttribute( name, name.toLowerCase() === \"type\" ? 1 : 2 );\n\t\t}\n\t} );\n}\n\n// Support: IE<9\n// Use defaultValue in place of getAttribute(\"value\")\nif ( !support.attributes || !assert( function( el ) {\n\tel.innerHTML = \"<input/>\";\n\tel.firstChild.setAttribute( \"value\", \"\" );\n\treturn el.firstChild.getAttribute( \"value\" ) === \"\";\n} ) ) {\n\taddHandle( \"value\", function( elem, _name, isXML ) {\n\t\tif ( !isXML && elem.nodeName.toLowerCase() === \"input\" ) {\n\t\t\treturn elem.defaultValue;\n\t\t}\n\t} );\n}\n\n// Support: IE<9\n// Use getAttributeNode to fetch booleans when getAttribute lies\nif ( !assert( function( el ) {\n\treturn el.getAttribute( \"disabled\" ) == null;\n} ) ) {\n\taddHandle( booleans, function( elem, name, isXML ) {\n\t\tvar val;\n\t\tif ( !isXML ) {\n\t\t\treturn elem[ name ] === true ? name.toLowerCase() :\n\t\t\t\t( val = elem.getAttributeNode( name ) ) && val.specified ?\n\t\t\t\t\tval.value :\n\t\t\t\t\tnull;\n\t\t}\n\t} );\n}\n\nreturn Sizzle;\n\n} )( window );\n\n\n\njQuery.find = Sizzle;\njQuery.expr = Sizzle.selectors;\n\n// Deprecated\njQuery.expr[ \":\" ] = jQuery.expr.pseudos;\njQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;\njQuery.text = Sizzle.getText;\njQuery.isXMLDoc = Sizzle.isXML;\njQuery.contains = Sizzle.contains;\njQuery.escapeSelector = Sizzle.escape;\n\n\n\n\nvar dir = function( elem, dir, until ) {\n\tvar matched = [],\n\t\ttruncate = until !== undefined;\n\n\twhile ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {\n\t\tif ( elem.nodeType === 1 ) {\n\t\t\tif ( truncate && jQuery( elem ).is( until ) ) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\tmatched.push( elem );\n\t\t}\n\t}\n\treturn matched;\n};\n\n\nvar siblings = function( n, elem ) {\n\tvar matched = [];\n\n\tfor ( ; n; n = n.nextSibling ) {\n\t\tif ( n.nodeType === 1 && n !== elem ) {\n\t\t\tmatched.push( n );\n\t\t}\n\t}\n\n\treturn matched;\n};\n\n\nvar rneedsContext = jQuery.expr.match.needsContext;\n\n\n\nfunction nodeName( elem, name ) {\n\n  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();\n\n};\nvar rsingleTag = ( /^<([a-z][^\\/\\0>:\\x20\\t\\r\\n\\f]*)[\\x20\\t\\r\\n\\f]*\\/?>(?:<\\/\\1>|)$/i );\n\n\n\n// Implement the identical functionality for filter and not\nfunction winnow( elements, qualifier, not ) {\n\tif ( isFunction( qualifier ) ) {\n\t\treturn jQuery.grep( elements, function( elem, i ) {\n\t\t\treturn !!qualifier.call( elem, i, elem ) !== not;\n\t\t} );\n\t}\n\n\t// Single element\n\tif ( qualifier.nodeType ) {\n\t\treturn jQuery.grep( elements, function( elem ) {\n\t\t\treturn ( elem === qualifier ) !== not;\n\t\t} );\n\t}\n\n\t// Arraylike of elements (jQuery, arguments, Array)\n\tif ( typeof qualifier !== \"string\" ) {\n\t\treturn jQuery.grep( elements, function( elem ) {\n\t\t\treturn ( indexOf.call( qualifier, elem ) > -1 ) !== not;\n\t\t} );\n\t}\n\n\t// Filtered directly for both simple and complex selectors\n\treturn jQuery.filter( qualifier, elements, not );\n}\n\njQuery.filter = function( expr, elems, not ) {\n\tvar elem = elems[ 0 ];\n\n\tif ( not ) {\n\t\texpr = \":not(\" + expr + \")\";\n\t}\n\n\tif ( elems.length === 1 && elem.nodeType === 1 ) {\n\t\treturn jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];\n\t}\n\n\treturn jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {\n\t\treturn elem.nodeType === 1;\n\t} ) );\n};\n\njQuery.fn.extend( {\n\tfind: function( selector ) {\n\t\tvar i, ret,\n\t\t\tlen = this.length,\n\t\t\tself = this;\n\n\t\tif ( typeof selector !== \"string\" ) {\n\t\t\treturn this.pushStack( jQuery( selector ).filter( function() {\n\t\t\t\tfor ( i = 0; i < len; i++ ) {\n\t\t\t\t\tif ( jQuery.contains( self[ i ], this ) ) {\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} ) );\n\t\t}\n\n\t\tret = this.pushStack( [] );\n\n\t\tfor ( i = 0; i < len; i++ ) {\n\t\t\tjQuery.find( selector, self[ i ], ret );\n\t\t}\n\n\t\treturn len > 1 ? jQuery.uniqueSort( ret ) : ret;\n\t},\n\tfilter: function( selector ) {\n\t\treturn this.pushStack( winnow( this, selector || [], false ) );\n\t},\n\tnot: function( selector ) {\n\t\treturn this.pushStack( winnow( this, selector || [], true ) );\n\t},\n\tis: function( selector ) {\n\t\treturn !!winnow(\n\t\t\tthis,\n\n\t\t\t// If this is a positional/relative selector, check membership in the returned set\n\t\t\t// so $(\"p:first\").is(\"p:last\") won't return true for a doc with two \"p\".\n\t\t\ttypeof selector === \"string\" && rneedsContext.test( selector ) ?\n\t\t\t\tjQuery( selector ) :\n\t\t\t\tselector || [],\n\t\t\tfalse\n\t\t).length;\n\t}\n} );\n\n\n// Initialize a jQuery object\n\n\n// A central reference to the root jQuery(document)\nvar rootjQuery,\n\n\t// A simple way to check for HTML strings\n\t// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)\n\t// Strict HTML recognition (#11290: must start with <)\n\t// Shortcut simple #id case for speed\n\trquickExpr = /^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]+))$/,\n\n\tinit = jQuery.fn.init = function( selector, context, root ) {\n\t\tvar match, elem;\n\n\t\t// HANDLE: $(\"\"), $(null), $(undefined), $(false)\n\t\tif ( !selector ) {\n\t\t\treturn this;\n\t\t}\n\n\t\t// Method init() accepts an alternate rootjQuery\n\t\t// so migrate can support jQuery.sub (gh-2101)\n\t\troot = root || rootjQuery;\n\n\t\t// Handle HTML strings\n\t\tif ( typeof selector === \"string\" ) {\n\t\t\tif ( selector[ 0 ] === \"<\" &&\n\t\t\t\tselector[ selector.length - 1 ] === \">\" &&\n\t\t\t\tselector.length >= 3 ) {\n\n\t\t\t\t// Assume that strings that start and end with <> are HTML and skip the regex check\n\t\t\t\tmatch = [ null, selector, null ];\n\n\t\t\t} else {\n\t\t\t\tmatch = rquickExpr.exec( selector );\n\t\t\t}\n\n\t\t\t// Match html or make sure no context is specified for #id\n\t\t\tif ( match && ( match[ 1 ] || !context ) ) {\n\n\t\t\t\t// HANDLE: $(html) -> $(array)\n\t\t\t\tif ( match[ 1 ] ) {\n\t\t\t\t\tcontext = context instanceof jQuery ? context[ 0 ] : context;\n\n\t\t\t\t\t// Option to run scripts is true for back-compat\n\t\t\t\t\t// Intentionally let the error be thrown if parseHTML is not present\n\t\t\t\t\tjQuery.merge( this, jQuery.parseHTML(\n\t\t\t\t\t\tmatch[ 1 ],\n\t\t\t\t\t\tcontext && context.nodeType ? context.ownerDocument || context : document,\n\t\t\t\t\t\ttrue\n\t\t\t\t\t) );\n\n\t\t\t\t\t// HANDLE: $(html, props)\n\t\t\t\t\tif ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {\n\t\t\t\t\t\tfor ( match in context ) {\n\n\t\t\t\t\t\t\t// Properties of context are called as methods if possible\n\t\t\t\t\t\t\tif ( isFunction( this[ match ] ) ) {\n\t\t\t\t\t\t\t\tthis[ match ]( context[ match ] );\n\n\t\t\t\t\t\t\t// ...and otherwise set as attributes\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tthis.attr( match, context[ match ] );\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\treturn this;\n\n\t\t\t\t// HANDLE: $(#id)\n\t\t\t\t} else {\n\t\t\t\t\telem = document.getElementById( match[ 2 ] );\n\n\t\t\t\t\tif ( elem ) {\n\n\t\t\t\t\t\t// Inject the element directly into the jQuery object\n\t\t\t\t\t\tthis[ 0 ] = elem;\n\t\t\t\t\t\tthis.length = 1;\n\t\t\t\t\t}\n\t\t\t\t\treturn this;\n\t\t\t\t}\n\n\t\t\t// HANDLE: $(expr, $(...))\n\t\t\t} else if ( !context || context.jquery ) {\n\t\t\t\treturn ( context || root ).find( selector );\n\n\t\t\t// HANDLE: $(expr, context)\n\t\t\t// (which is just equivalent to: $(context).find(expr)\n\t\t\t} else {\n\t\t\t\treturn this.constructor( context ).find( selector );\n\t\t\t}\n\n\t\t// HANDLE: $(DOMElement)\n\t\t} else if ( selector.nodeType ) {\n\t\t\tthis[ 0 ] = selector;\n\t\t\tthis.length = 1;\n\t\t\treturn this;\n\n\t\t// HANDLE: $(function)\n\t\t// Shortcut for document ready\n\t\t} else if ( isFunction( selector ) ) {\n\t\t\treturn root.ready !== undefined ?\n\t\t\t\troot.ready( selector ) :\n\n\t\t\t\t// Execute immediately if ready is not present\n\t\t\t\tselector( jQuery );\n\t\t}\n\n\t\treturn jQuery.makeArray( selector, this );\n\t};\n\n// Give the init function the jQuery prototype for later instantiation\ninit.prototype = jQuery.fn;\n\n// Initialize central reference\nrootjQuery = jQuery( document );\n\n\nvar rparentsprev = /^(?:parents|prev(?:Until|All))/,\n\n\t// Methods guaranteed to produce a unique set when starting from a unique set\n\tguaranteedUnique = {\n\t\tchildren: true,\n\t\tcontents: true,\n\t\tnext: true,\n\t\tprev: true\n\t};\n\njQuery.fn.extend( {\n\thas: function( target ) {\n\t\tvar targets = jQuery( target, this ),\n\t\t\tl = targets.length;\n\n\t\treturn this.filter( function() {\n\t\t\tvar i = 0;\n\t\t\tfor ( ; i < l; i++ ) {\n\t\t\t\tif ( jQuery.contains( this, targets[ i ] ) ) {\n\t\t\t\t\treturn true;\n\t\t\t\t}\n\t\t\t}\n\t\t} );\n\t},\n\n\tclosest: function( selectors, context ) {\n\t\tvar cur,\n\t\t\ti = 0,\n\t\t\tl = this.length,\n\t\t\tmatched = [],\n\t\t\ttargets = typeof selectors !== \"string\" && jQuery( selectors );\n\n\t\t// Positional selectors never match, since there's no _selection_ context\n\t\tif ( !rneedsContext.test( selectors ) ) {\n\t\t\tfor ( ; i < l; i++ ) {\n\t\t\t\tfor ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {\n\n\t\t\t\t\t// Always skip document fragments\n\t\t\t\t\tif ( cur.nodeType < 11 && ( targets ?\n\t\t\t\t\t\ttargets.index( cur ) > -1 :\n\n\t\t\t\t\t\t// Don't pass non-elements to Sizzle\n\t\t\t\t\t\tcur.nodeType === 1 &&\n\t\t\t\t\t\t\tjQuery.find.matchesSelector( cur, selectors ) ) ) {\n\n\t\t\t\t\t\tmatched.push( cur );\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );\n\t},\n\n\t// Determine the position of an element within the set\n\tindex: function( elem ) {\n\n\t\t// No argument, return index in parent\n\t\tif ( !elem ) {\n\t\t\treturn ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;\n\t\t}\n\n\t\t// Index in selector\n\t\tif ( typeof elem === \"string\" ) {\n\t\t\treturn indexOf.call( jQuery( elem ), this[ 0 ] );\n\t\t}\n\n\t\t// Locate the position of the desired element\n\t\treturn indexOf.call( this,\n\n\t\t\t// If it receives a jQuery object, the first element is used\n\t\t\telem.jquery ? elem[ 0 ] : elem\n\t\t);\n\t},\n\n\tadd: function( selector, context ) {\n\t\treturn this.pushStack(\n\t\t\tjQuery.uniqueSort(\n\t\t\t\tjQuery.merge( this.get(), jQuery( selector, context ) )\n\t\t\t)\n\t\t);\n\t},\n\n\taddBack: function( selector ) {\n\t\treturn this.add( selector == null ?\n\t\t\tthis.prevObject : this.prevObject.filter( selector )\n\t\t);\n\t}\n} );\n\nfunction sibling( cur, dir ) {\n\twhile ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}\n\treturn cur;\n}\n\njQuery.each( {\n\tparent: function( elem ) {\n\t\tvar parent = elem.parentNode;\n\t\treturn parent && parent.nodeType !== 11 ? parent : null;\n\t},\n\tparents: function( elem ) {\n\t\treturn dir( elem, \"parentNode\" );\n\t},\n\tparentsUntil: function( elem, _i, until ) {\n\t\treturn dir( elem, \"parentNode\", until );\n\t},\n\tnext: function( elem ) {\n\t\treturn sibling( elem, \"nextSibling\" );\n\t},\n\tprev: function( elem ) {\n\t\treturn sibling( elem, \"previousSibling\" );\n\t},\n\tnextAll: function( elem ) {\n\t\treturn dir( elem, \"nextSibling\" );\n\t},\n\tprevAll: function( elem ) {\n\t\treturn dir( elem, \"previousSibling\" );\n\t},\n\tnextUntil: function( elem, _i, until ) {\n\t\treturn dir( elem, \"nextSibling\", until );\n\t},\n\tprevUntil: function( elem, _i, until ) {\n\t\treturn dir( elem, \"previousSibling\", until );\n\t},\n\tsiblings: function( elem ) {\n\t\treturn siblings( ( elem.parentNode || {} ).firstChild, elem );\n\t},\n\tchildren: function( elem ) {\n\t\treturn siblings( elem.firstChild );\n\t},\n\tcontents: function( elem ) {\n\t\tif ( elem.contentDocument != null &&\n\n\t\t\t// Support: IE 11+\n\t\t\t// <object> elements with no `data` attribute has an object\n\t\t\t// `contentDocument` with a `null` prototype.\n\t\t\tgetProto( elem.contentDocument ) ) {\n\n\t\t\treturn elem.contentDocument;\n\t\t}\n\n\t\t// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only\n\t\t// Treat the template element as a regular one in browsers that\n\t\t// don't support it.\n\t\tif ( nodeName( elem, \"template\" ) ) {\n\t\t\telem = elem.content || elem;\n\t\t}\n\n\t\treturn jQuery.merge( [], elem.childNodes );\n\t}\n}, function( name, fn ) {\n\tjQuery.fn[ name ] = function( until, selector ) {\n\t\tvar matched = jQuery.map( this, fn, until );\n\n\t\tif ( name.slice( -5 ) !== \"Until\" ) {\n\t\t\tselector = until;\n\t\t}\n\n\t\tif ( selector && typeof selector === \"string\" ) {\n\t\t\tmatched = jQuery.filter( selector, matched );\n\t\t}\n\n\t\tif ( this.length > 1 ) {\n\n\t\t\t// Remove duplicates\n\t\t\tif ( !guaranteedUnique[ name ] ) {\n\t\t\t\tjQuery.uniqueSort( matched );\n\t\t\t}\n\n\t\t\t// Reverse order for parents* and prev-derivatives\n\t\t\tif ( rparentsprev.test( name ) ) {\n\t\t\t\tmatched.reverse();\n\t\t\t}\n\t\t}\n\n\t\treturn this.pushStack( matched );\n\t};\n} );\nvar rnothtmlwhite = ( /[^\\x20\\t\\r\\n\\f]+/g );\n\n\n\n// Convert String-formatted options into Object-formatted ones\nfunction createOptions( options ) {\n\tvar object = {};\n\tjQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {\n\t\tobject[ flag ] = true;\n\t} );\n\treturn object;\n}\n\n/*\n * Create a callback list using the following parameters:\n *\n *\toptions: an optional list of space-separated options that will change how\n *\t\t\tthe callback list behaves or a more traditional option object\n *\n * By default a callback list will act like an event callback list and can be\n * \"fired\" multiple times.\n *\n * Possible options:\n *\n *\tonce:\t\t\twill ensure the callback list can only be fired once (like a Deferred)\n *\n *\tmemory:\t\t\twill keep track of previous values and will call any callback added\n *\t\t\t\t\tafter the list has been fired right away with the latest \"memorized\"\n *\t\t\t\t\tvalues (like a Deferred)\n *\n *\tunique:\t\t\twill ensure a callback can only be added once (no duplicate in the list)\n *\n *\tstopOnFalse:\tinterrupt callings when a callback returns false\n *\n */\njQuery.Callbacks = function( options ) {\n\n\t// Convert options from String-formatted to Object-formatted if needed\n\t// (we check in cache first)\n\toptions = typeof options === \"string\" ?\n\t\tcreateOptions( options ) :\n\t\tjQuery.extend( {}, options );\n\n\tvar // Flag to know if list is currently firing\n\t\tfiring,\n\n\t\t// Last fire value for non-forgettable lists\n\t\tmemory,\n\n\t\t// Flag to know if list was already fired\n\t\tfired,\n\n\t\t// Flag to prevent firing\n\t\tlocked,\n\n\t\t// Actual callback list\n\t\tlist = [],\n\n\t\t// Queue of execution data for repeatable lists\n\t\tqueue = [],\n\n\t\t// Index of currently firing callback (modified by add/remove as needed)\n\t\tfiringIndex = -1,\n\n\t\t// Fire callbacks\n\t\tfire = function() {\n\n\t\t\t// Enforce single-firing\n\t\t\tlocked = locked || options.once;\n\n\t\t\t// Execute callbacks for all pending executions,\n\t\t\t// respecting firingIndex overrides and runtime changes\n\t\t\tfired = firing = true;\n\t\t\tfor ( ; queue.length; firingIndex = -1 ) {\n\t\t\t\tmemory = queue.shift();\n\t\t\t\twhile ( ++firingIndex < list.length ) {\n\n\t\t\t\t\t// Run callback and check for early termination\n\t\t\t\t\tif ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&\n\t\t\t\t\t\toptions.stopOnFalse ) {\n\n\t\t\t\t\t\t// Jump to end and forget the data so .add doesn't re-fire\n\t\t\t\t\t\tfiringIndex = list.length;\n\t\t\t\t\t\tmemory = false;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Forget the data if we're done with it\n\t\t\tif ( !options.memory ) {\n\t\t\t\tmemory = false;\n\t\t\t}\n\n\t\t\tfiring = false;\n\n\t\t\t// Clean up if we're done firing for good\n\t\t\tif ( locked ) {\n\n\t\t\t\t// Keep an empty list if we have data for future add calls\n\t\t\t\tif ( memory ) {\n\t\t\t\t\tlist = [];\n\n\t\t\t\t// Otherwise, this object is spent\n\t\t\t\t} else {\n\t\t\t\t\tlist = \"\";\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\n\t\t// Actual Callbacks object\n\t\tself = {\n\n\t\t\t// Add a callback or a collection of callbacks to the list\n\t\t\tadd: function() {\n\t\t\t\tif ( list ) {\n\n\t\t\t\t\t// If we have memory from a past run, we should fire after adding\n\t\t\t\t\tif ( memory && !firing ) {\n\t\t\t\t\t\tfiringIndex = list.length - 1;\n\t\t\t\t\t\tqueue.push( memory );\n\t\t\t\t\t}\n\n\t\t\t\t\t( function add( args ) {\n\t\t\t\t\t\tjQuery.each( args, function( _, arg ) {\n\t\t\t\t\t\t\tif ( isFunction( arg ) ) {\n\t\t\t\t\t\t\t\tif ( !options.unique || !self.has( arg ) ) {\n\t\t\t\t\t\t\t\t\tlist.push( arg );\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t} else if ( arg && arg.length && toType( arg ) !== \"string\" ) {\n\n\t\t\t\t\t\t\t\t// Inspect recursively\n\t\t\t\t\t\t\t\tadd( arg );\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} );\n\t\t\t\t\t} )( arguments );\n\n\t\t\t\t\tif ( memory && !firing ) {\n\t\t\t\t\t\tfire();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\treturn this;\n\t\t\t},\n\n\t\t\t// Remove a callback from the list\n\t\t\tremove: function() {\n\t\t\t\tjQuery.each( arguments, function( _, arg ) {\n\t\t\t\t\tvar index;\n\t\t\t\t\twhile ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {\n\t\t\t\t\t\tlist.splice( index, 1 );\n\n\t\t\t\t\t\t// Handle firing indexes\n\t\t\t\t\t\tif ( index <= firingIndex ) {\n\t\t\t\t\t\t\tfiringIndex--;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} );\n\t\t\t\treturn this;\n\t\t\t},\n\n\t\t\t// Check if a given callback is in the list.\n\t\t\t// If no argument is given, return whether or not list has callbacks attached.\n\t\t\thas: function( fn ) {\n\t\t\t\treturn fn ?\n\t\t\t\t\tjQuery.inArray( fn, list ) > -1 :\n\t\t\t\t\tlist.length > 0;\n\t\t\t},\n\n\t\t\t// Remove all callbacks from the list\n\t\t\tempty: function() {\n\t\t\t\tif ( list ) {\n\t\t\t\t\tlist = [];\n\t\t\t\t}\n\t\t\t\treturn this;\n\t\t\t},\n\n\t\t\t// Disable .fire and .add\n\t\t\t// Abort any current/pending executions\n\t\t\t// Clear all callbacks and values\n\t\t\tdisable: function() {\n\t\t\t\tlocked = queue = [];\n\t\t\t\tlist = memory = \"\";\n\t\t\t\treturn this;\n\t\t\t},\n\t\t\tdisabled: function() {\n\t\t\t\treturn !list;\n\t\t\t},\n\n\t\t\t// Disable .fire\n\t\t\t// Also disable .add unless we have memory (since it would have no effect)\n\t\t\t// Abort any pending executions\n\t\t\tlock: function() {\n\t\t\t\tlocked = queue = [];\n\t\t\t\tif ( !memory && !firing ) {\n\t\t\t\t\tlist = memory = \"\";\n\t\t\t\t}\n\t\t\t\treturn this;\n\t\t\t},\n\t\t\tlocked: function() {\n\t\t\t\treturn !!locked;\n\t\t\t},\n\n\t\t\t// Call all callbacks with the given context and arguments\n\t\t\tfireWith: function( context, args ) {\n\t\t\t\tif ( !locked ) {\n\t\t\t\t\targs = args || [];\n\t\t\t\t\targs = [ context, args.slice ? args.slice() : args ];\n\t\t\t\t\tqueue.push( args );\n\t\t\t\t\tif ( !firing ) {\n\t\t\t\t\t\tfire();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\treturn this;\n\t\t\t},\n\n\t\t\t// Call all the callbacks with the given arguments\n\t\t\tfire: function() {\n\t\t\t\tself.fireWith( this, arguments );\n\t\t\t\treturn this;\n\t\t\t},\n\n\t\t\t// To know if the callbacks have already been called at least once\n\t\t\tfired: function() {\n\t\t\t\treturn !!fired;\n\t\t\t}\n\t\t};\n\n\treturn self;\n};\n\n\nfunction Identity( v ) {\n\treturn v;\n}\nfunction Thrower( ex ) {\n\tthrow ex;\n}\n\nfunction adoptValue( value, resolve, reject, noValue ) {\n\tvar method;\n\n\ttry {\n\n\t\t// Check for promise aspect first to privilege synchronous behavior\n\t\tif ( value && isFunction( ( method = value.promise ) ) ) {\n\t\t\tmethod.call( value ).done( resolve ).fail( reject );\n\n\t\t// Other thenables\n\t\t} else if ( value && isFunction( ( method = value.then ) ) ) {\n\t\t\tmethod.call( value, resolve, reject );\n\n\t\t// Other non-thenables\n\t\t} else {\n\n\t\t\t// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:\n\t\t\t// * false: [ value ].slice( 0 ) => resolve( value )\n\t\t\t// * true: [ value ].slice( 1 ) => resolve()\n\t\t\tresolve.apply( undefined, [ value ].slice( noValue ) );\n\t\t}\n\n\t// For Promises/A+, convert exceptions into rejections\n\t// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in\n\t// Deferred#then to conditionally suppress rejection.\n\t} catch ( value ) {\n\n\t\t// Support: Android 4.0 only\n\t\t// Strict mode functions invoked without .call/.apply get global-object context\n\t\treject.apply( undefined, [ value ] );\n\t}\n}\n\njQuery.extend( {\n\n\tDeferred: function( func ) {\n\t\tvar tuples = [\n\n\t\t\t\t// action, add listener, callbacks,\n\t\t\t\t// ... .then handlers, argument index, [final state]\n\t\t\t\t[ \"notify\", \"progress\", jQuery.Callbacks( \"memory\" ),\n\t\t\t\t\tjQuery.Callbacks( \"memory\" ), 2 ],\n\t\t\t\t[ \"resolve\", \"done\", jQuery.Callbacks( \"once memory\" ),\n\t\t\t\t\tjQuery.Callbacks( \"once memory\" ), 0, \"resolved\" ],\n\t\t\t\t[ \"reject\", \"fail\", jQuery.Callbacks( \"once memory\" ),\n\t\t\t\t\tjQuery.Callbacks( \"once memory\" ), 1, \"rejected\" ]\n\t\t\t],\n\t\t\tstate = \"pending\",\n\t\t\tpromise = {\n\t\t\t\tstate: function() {\n\t\t\t\t\treturn state;\n\t\t\t\t},\n\t\t\t\talways: function() {\n\t\t\t\t\tdeferred.done( arguments ).fail( arguments );\n\t\t\t\t\treturn this;\n\t\t\t\t},\n\t\t\t\t\"catch\": function( fn ) {\n\t\t\t\t\treturn promise.then( null, fn );\n\t\t\t\t},\n\n\t\t\t\t// Keep pipe for back-compat\n\t\t\t\tpipe: function( /* fnDone, fnFail, fnProgress */ ) {\n\t\t\t\t\tvar fns = arguments;\n\n\t\t\t\t\treturn jQuery.Deferred( function( newDefer ) {\n\t\t\t\t\t\tjQuery.each( tuples, function( _i, tuple ) {\n\n\t\t\t\t\t\t\t// Map tuples (progress, done, fail) to arguments (done, fail, progress)\n\t\t\t\t\t\t\tvar fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];\n\n\t\t\t\t\t\t\t// deferred.progress(function() { bind to newDefer or newDefer.notify })\n\t\t\t\t\t\t\t// deferred.done(function() { bind to newDefer or newDefer.resolve })\n\t\t\t\t\t\t\t// deferred.fail(function() { bind to newDefer or newDefer.reject })\n\t\t\t\t\t\t\tdeferred[ tuple[ 1 ] ]( function() {\n\t\t\t\t\t\t\t\tvar returned = fn && fn.apply( this, arguments );\n\t\t\t\t\t\t\t\tif ( returned && isFunction( returned.promise ) ) {\n\t\t\t\t\t\t\t\t\treturned.promise()\n\t\t\t\t\t\t\t\t\t\t.progress( newDefer.notify )\n\t\t\t\t\t\t\t\t\t\t.done( newDefer.resolve )\n\t\t\t\t\t\t\t\t\t\t.fail( newDefer.reject );\n\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\tnewDefer[ tuple[ 0 ] + \"With\" ](\n\t\t\t\t\t\t\t\t\t\tthis,\n\t\t\t\t\t\t\t\t\t\tfn ? [ returned ] : arguments\n\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t} );\n\t\t\t\t\t\t} );\n\t\t\t\t\t\tfns = null;\n\t\t\t\t\t} ).promise();\n\t\t\t\t},\n\t\t\t\tthen: function( onFulfilled, onRejected, onProgress ) {\n\t\t\t\t\tvar maxDepth = 0;\n\t\t\t\t\tfunction resolve( depth, deferred, handler, special ) {\n\t\t\t\t\t\treturn function() {\n\t\t\t\t\t\t\tvar that = this,\n\t\t\t\t\t\t\t\targs = arguments,\n\t\t\t\t\t\t\t\tmightThrow = function() {\n\t\t\t\t\t\t\t\t\tvar returned, then;\n\n\t\t\t\t\t\t\t\t\t// Support: Promises/A+ section 2.3.3.3.3\n\t\t\t\t\t\t\t\t\t// https://promisesaplus.com/#point-59\n\t\t\t\t\t\t\t\t\t// Ignore double-resolution attempts\n\t\t\t\t\t\t\t\t\tif ( depth < maxDepth ) {\n\t\t\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\treturned = handler.apply( that, args );\n\n\t\t\t\t\t\t\t\t\t// Support: Promises/A+ section 2.3.1\n\t\t\t\t\t\t\t\t\t// https://promisesaplus.com/#point-48\n\t\t\t\t\t\t\t\t\tif ( returned === deferred.promise() ) {\n\t\t\t\t\t\t\t\t\t\tthrow new TypeError( \"Thenable self-resolution\" );\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t// Support: Promises/A+ sections 2.3.3.1, 3.5\n\t\t\t\t\t\t\t\t\t// https://promisesaplus.com/#point-54\n\t\t\t\t\t\t\t\t\t// https://promisesaplus.com/#point-75\n\t\t\t\t\t\t\t\t\t// Retrieve `then` only once\n\t\t\t\t\t\t\t\t\tthen = returned &&\n\n\t\t\t\t\t\t\t\t\t\t// Support: Promises/A+ section 2.3.4\n\t\t\t\t\t\t\t\t\t\t// https://promisesaplus.com/#point-64\n\t\t\t\t\t\t\t\t\t\t// Only check objects and functions for thenability\n\t\t\t\t\t\t\t\t\t\t( typeof returned === \"object\" ||\n\t\t\t\t\t\t\t\t\t\t\ttypeof returned === \"function\" ) &&\n\t\t\t\t\t\t\t\t\t\treturned.then;\n\n\t\t\t\t\t\t\t\t\t// Handle a returned thenable\n\t\t\t\t\t\t\t\t\tif ( isFunction( then ) ) {\n\n\t\t\t\t\t\t\t\t\t\t// Special processors (notify) just wait for resolution\n\t\t\t\t\t\t\t\t\t\tif ( special ) {\n\t\t\t\t\t\t\t\t\t\t\tthen.call(\n\t\t\t\t\t\t\t\t\t\t\t\treturned,\n\t\t\t\t\t\t\t\t\t\t\t\tresolve( maxDepth, deferred, Identity, special ),\n\t\t\t\t\t\t\t\t\t\t\t\tresolve( maxDepth, deferred, Thrower, special )\n\t\t\t\t\t\t\t\t\t\t\t);\n\n\t\t\t\t\t\t\t\t\t\t// Normal processors (resolve) also hook into progress\n\t\t\t\t\t\t\t\t\t\t} else {\n\n\t\t\t\t\t\t\t\t\t\t\t// ...and disregard older resolution values\n\t\t\t\t\t\t\t\t\t\t\tmaxDepth++;\n\n\t\t\t\t\t\t\t\t\t\t\tthen.call(\n\t\t\t\t\t\t\t\t\t\t\t\treturned,\n\t\t\t\t\t\t\t\t\t\t\t\tresolve( maxDepth, deferred, Identity, special ),\n\t\t\t\t\t\t\t\t\t\t\t\tresolve( maxDepth, deferred, Thrower, special ),\n\t\t\t\t\t\t\t\t\t\t\t\tresolve( maxDepth, deferred, Identity,\n\t\t\t\t\t\t\t\t\t\t\t\t\tdeferred.notifyWith )\n\t\t\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t// Handle all other returned values\n\t\t\t\t\t\t\t\t\t} else {\n\n\t\t\t\t\t\t\t\t\t\t// Only substitute handlers pass on context\n\t\t\t\t\t\t\t\t\t\t// and multiple values (non-spec behavior)\n\t\t\t\t\t\t\t\t\t\tif ( handler !== Identity ) {\n\t\t\t\t\t\t\t\t\t\t\tthat = undefined;\n\t\t\t\t\t\t\t\t\t\t\targs = [ returned ];\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t// Process the value(s)\n\t\t\t\t\t\t\t\t\t\t// Default process is resolve\n\t\t\t\t\t\t\t\t\t\t( special || deferred.resolveWith )( that, args );\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t},\n\n\t\t\t\t\t\t\t\t// Only normal processors (resolve) catch and reject exceptions\n\t\t\t\t\t\t\t\tprocess = special ?\n\t\t\t\t\t\t\t\t\tmightThrow :\n\t\t\t\t\t\t\t\t\tfunction() {\n\t\t\t\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\t\t\t\tmightThrow();\n\t\t\t\t\t\t\t\t\t\t} catch ( e ) {\n\n\t\t\t\t\t\t\t\t\t\t\tif ( jQuery.Deferred.exceptionHook ) {\n\t\t\t\t\t\t\t\t\t\t\t\tjQuery.Deferred.exceptionHook( e,\n\t\t\t\t\t\t\t\t\t\t\t\t\tprocess.stackTrace );\n\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t// Support: Promises/A+ section 2.3.3.3.4.1\n\t\t\t\t\t\t\t\t\t\t\t// https://promisesaplus.com/#point-61\n\t\t\t\t\t\t\t\t\t\t\t// Ignore post-resolution exceptions\n\t\t\t\t\t\t\t\t\t\t\tif ( depth + 1 >= maxDepth ) {\n\n\t\t\t\t\t\t\t\t\t\t\t\t// Only substitute handlers pass on context\n\t\t\t\t\t\t\t\t\t\t\t\t// and multiple values (non-spec behavior)\n\t\t\t\t\t\t\t\t\t\t\t\tif ( handler !== Thrower ) {\n\t\t\t\t\t\t\t\t\t\t\t\t\tthat = undefined;\n\t\t\t\t\t\t\t\t\t\t\t\t\targs = [ e ];\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\tdeferred.rejectWith( that, args );\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t};\n\n\t\t\t\t\t\t\t// Support: Promises/A+ section 2.3.3.3.1\n\t\t\t\t\t\t\t// https://promisesaplus.com/#point-57\n\t\t\t\t\t\t\t// Re-resolve promises immediately to dodge false rejection from\n\t\t\t\t\t\t\t// subsequent errors\n\t\t\t\t\t\t\tif ( depth ) {\n\t\t\t\t\t\t\t\tprocess();\n\t\t\t\t\t\t\t} else {\n\n\t\t\t\t\t\t\t\t// Call an optional hook to record the stack, in case of exception\n\t\t\t\t\t\t\t\t// since it's otherwise lost when execution goes async\n\t\t\t\t\t\t\t\tif ( jQuery.Deferred.getStackHook ) {\n\t\t\t\t\t\t\t\t\tprocess.stackTrace = jQuery.Deferred.getStackHook();\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\twindow.setTimeout( process );\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t};\n\t\t\t\t\t}\n\n\t\t\t\t\treturn jQuery.Deferred( function( newDefer ) {\n\n\t\t\t\t\t\t// progress_handlers.add( ... )\n\t\t\t\t\t\ttuples[ 0 ][ 3 ].add(\n\t\t\t\t\t\t\tresolve(\n\t\t\t\t\t\t\t\t0,\n\t\t\t\t\t\t\t\tnewDefer,\n\t\t\t\t\t\t\t\tisFunction( onProgress ) ?\n\t\t\t\t\t\t\t\t\tonProgress :\n\t\t\t\t\t\t\t\t\tIdentity,\n\t\t\t\t\t\t\t\tnewDefer.notifyWith\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t);\n\n\t\t\t\t\t\t// fulfilled_handlers.add( ... )\n\t\t\t\t\t\ttuples[ 1 ][ 3 ].add(\n\t\t\t\t\t\t\tresolve(\n\t\t\t\t\t\t\t\t0,\n\t\t\t\t\t\t\t\tnewDefer,\n\t\t\t\t\t\t\t\tisFunction( onFulfilled ) ?\n\t\t\t\t\t\t\t\t\tonFulfilled :\n\t\t\t\t\t\t\t\t\tIdentity\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t);\n\n\t\t\t\t\t\t// rejected_handlers.add( ... )\n\t\t\t\t\t\ttuples[ 2 ][ 3 ].add(\n\t\t\t\t\t\t\tresolve(\n\t\t\t\t\t\t\t\t0,\n\t\t\t\t\t\t\t\tnewDefer,\n\t\t\t\t\t\t\t\tisFunction( onRejected ) ?\n\t\t\t\t\t\t\t\t\tonRejected :\n\t\t\t\t\t\t\t\t\tThrower\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t);\n\t\t\t\t\t} ).promise();\n\t\t\t\t},\n\n\t\t\t\t// Get a promise for this deferred\n\t\t\t\t// If obj is provided, the promise aspect is added to the object\n\t\t\t\tpromise: function( obj ) {\n\t\t\t\t\treturn obj != null ? jQuery.extend( obj, promise ) : promise;\n\t\t\t\t}\n\t\t\t},\n\t\t\tdeferred = {};\n\n\t\t// Add list-specific methods\n\t\tjQuery.each( tuples, function( i, tuple ) {\n\t\t\tvar list = tuple[ 2 ],\n\t\t\t\tstateString = tuple[ 5 ];\n\n\t\t\t// promise.progress = list.add\n\t\t\t// promise.done = list.add\n\t\t\t// promise.fail = list.add\n\t\t\tpromise[ tuple[ 1 ] ] = list.add;\n\n\t\t\t// Handle state\n\t\t\tif ( stateString ) {\n\t\t\t\tlist.add(\n\t\t\t\t\tfunction() {\n\n\t\t\t\t\t\t// state = \"resolved\" (i.e., fulfilled)\n\t\t\t\t\t\t// state = \"rejected\"\n\t\t\t\t\t\tstate = stateString;\n\t\t\t\t\t},\n\n\t\t\t\t\t// rejected_callbacks.disable\n\t\t\t\t\t// fulfilled_callbacks.disable\n\t\t\t\t\ttuples[ 3 - i ][ 2 ].disable,\n\n\t\t\t\t\t// rejected_handlers.disable\n\t\t\t\t\t// fulfilled_handlers.disable\n\t\t\t\t\ttuples[ 3 - i ][ 3 ].disable,\n\n\t\t\t\t\t// progress_callbacks.lock\n\t\t\t\t\ttuples[ 0 ][ 2 ].lock,\n\n\t\t\t\t\t// progress_handlers.lock\n\t\t\t\t\ttuples[ 0 ][ 3 ].lock\n\t\t\t\t);\n\t\t\t}\n\n\t\t\t// progress_handlers.fire\n\t\t\t// fulfilled_handlers.fire\n\t\t\t// rejected_handlers.fire\n\t\t\tlist.add( tuple[ 3 ].fire );\n\n\t\t\t// deferred.notify = function() { deferred.notifyWith(...) }\n\t\t\t// deferred.resolve = function() { deferred.resolveWith(...) }\n\t\t\t// deferred.reject = function() { deferred.rejectWith(...) }\n\t\t\tdeferred[ tuple[ 0 ] ] = function() {\n\t\t\t\tdeferred[ tuple[ 0 ] + \"With\" ]( this === deferred ? undefined : this, arguments );\n\t\t\t\treturn this;\n\t\t\t};\n\n\t\t\t// deferred.notifyWith = list.fireWith\n\t\t\t// deferred.resolveWith = list.fireWith\n\t\t\t// deferred.rejectWith = list.fireWith\n\t\t\tdeferred[ tuple[ 0 ] + \"With\" ] = list.fireWith;\n\t\t} );\n\n\t\t// Make the deferred a promise\n\t\tpromise.promise( deferred );\n\n\t\t// Call given func if any\n\t\tif ( func ) {\n\t\t\tfunc.call( deferred, deferred );\n\t\t}\n\n\t\t// All done!\n\t\treturn deferred;\n\t},\n\n\t// Deferred helper\n\twhen: function( singleValue ) {\n\t\tvar\n\n\t\t\t// count of uncompleted subordinates\n\t\t\tremaining = arguments.length,\n\n\t\t\t// count of unprocessed arguments\n\t\t\ti = remaining,\n\n\t\t\t// subordinate fulfillment data\n\t\t\tresolveContexts = Array( i ),\n\t\t\tresolveValues = slice.call( arguments ),\n\n\t\t\t// the master Deferred\n\t\t\tmaster = jQuery.Deferred(),\n\n\t\t\t// subordinate callback factory\n\t\t\tupdateFunc = function( i ) {\n\t\t\t\treturn function( value ) {\n\t\t\t\t\tresolveContexts[ i ] = this;\n\t\t\t\t\tresolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;\n\t\t\t\t\tif ( !( --remaining ) ) {\n\t\t\t\t\t\tmaster.resolveWith( resolveContexts, resolveValues );\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t};\n\n\t\t// Single- and empty arguments are adopted like Promise.resolve\n\t\tif ( remaining <= 1 ) {\n\t\t\tadoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,\n\t\t\t\t!remaining );\n\n\t\t\t// Use .then() to unwrap secondary thenables (cf. gh-3000)\n\t\t\tif ( master.state() === \"pending\" ||\n\t\t\t\tisFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {\n\n\t\t\t\treturn master.then();\n\t\t\t}\n\t\t}\n\n\t\t// Multiple arguments are aggregated like Promise.all array elements\n\t\twhile ( i-- ) {\n\t\t\tadoptValue( resolveValues[ i ], updateFunc( i ), master.reject );\n\t\t}\n\n\t\treturn master.promise();\n\t}\n} );\n\n\n// These usually indicate a programmer mistake during development,\n// warn about them ASAP rather than swallowing them by default.\nvar rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;\n\njQuery.Deferred.exceptionHook = function( error, stack ) {\n\n\t// Support: IE 8 - 9 only\n\t// Console exists when dev tools are open, which can happen at any time\n\tif ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {\n\t\twindow.console.warn( \"jQuery.Deferred exception: \" + error.message, error.stack, stack );\n\t}\n};\n\n\n\n\njQuery.readyException = function( error ) {\n\twindow.setTimeout( function() {\n\t\tthrow error;\n\t} );\n};\n\n\n\n\n// The deferred used on DOM ready\nvar readyList = jQuery.Deferred();\n\njQuery.fn.ready = function( fn ) {\n\n\treadyList\n\t\t.then( fn )\n\n\t\t// Wrap jQuery.readyException in a function so that the lookup\n\t\t// happens at the time of error handling instead of callback\n\t\t// registration.\n\t\t.catch( function( error ) {\n\t\t\tjQuery.readyException( error );\n\t\t} );\n\n\treturn this;\n};\n\njQuery.extend( {\n\n\t// Is the DOM ready to be used? Set to true once it occurs.\n\tisReady: false,\n\n\t// A counter to track how many items to wait for before\n\t// the ready event fires. See #6781\n\treadyWait: 1,\n\n\t// Handle when the DOM is ready\n\tready: function( wait ) {\n\n\t\t// Abort if there are pending holds or we're already ready\n\t\tif ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {\n\t\t\treturn;\n\t\t}\n\n\t\t// Remember that the DOM is ready\n\t\tjQuery.isReady = true;\n\n\t\t// If a normal DOM Ready event fired, decrement, and wait if need be\n\t\tif ( wait !== true && --jQuery.readyWait > 0 ) {\n\t\t\treturn;\n\t\t}\n\n\t\t// If there are functions bound, to execute\n\t\treadyList.resolveWith( document, [ jQuery ] );\n\t}\n} );\n\njQuery.ready.then = readyList.then;\n\n// The ready event handler and self cleanup method\nfunction completed() {\n\tdocument.removeEventListener( \"DOMContentLoaded\", completed );\n\twindow.removeEventListener( \"load\", completed );\n\tjQuery.ready();\n}\n\n// Catch cases where $(document).ready() is called\n// after the browser event has already occurred.\n// Support: IE <=9 - 10 only\n// Older IE sometimes signals \"interactive\" too soon\nif ( document.readyState === \"complete\" ||\n\t( document.readyState !== \"loading\" && !document.documentElement.doScroll ) ) {\n\n\t// Handle it asynchronously to allow scripts the opportunity to delay ready\n\twindow.setTimeout( jQuery.ready );\n\n} else {\n\n\t// Use the handy event callback\n\tdocument.addEventListener( \"DOMContentLoaded\", completed );\n\n\t// A fallback to window.onload, that will always work\n\twindow.addEventListener( \"load\", completed );\n}\n\n\n\n\n// Multifunctional method to get and set values of a collection\n// The value/s can optionally be executed if it's a function\nvar access = function( elems, fn, key, value, chainable, emptyGet, raw ) {\n\tvar i = 0,\n\t\tlen = elems.length,\n\t\tbulk = key == null;\n\n\t// Sets many values\n\tif ( toType( key ) === \"object\" ) {\n\t\tchainable = true;\n\t\tfor ( i in key ) {\n\t\t\taccess( elems, fn, i, key[ i ], true, emptyGet, raw );\n\t\t}\n\n\t// Sets one value\n\t} else if ( value !== undefined ) {\n\t\tchainable = true;\n\n\t\tif ( !isFunction( value ) ) {\n\t\t\traw = true;\n\t\t}\n\n\t\tif ( bulk ) {\n\n\t\t\t// Bulk operations run against the entire set\n\t\t\tif ( raw ) {\n\t\t\t\tfn.call( elems, value );\n\t\t\t\tfn = null;\n\n\t\t\t// ...except when executing function values\n\t\t\t} else {\n\t\t\t\tbulk = fn;\n\t\t\t\tfn = function( elem, _key, value ) {\n\t\t\t\t\treturn bulk.call( jQuery( elem ), value );\n\t\t\t\t};\n\t\t\t}\n\t\t}\n\n\t\tif ( fn ) {\n\t\t\tfor ( ; i < len; i++ ) {\n\t\t\t\tfn(\n\t\t\t\t\telems[ i ], key, raw ?\n\t\t\t\t\tvalue :\n\t\t\t\t\tvalue.call( elems[ i ], i, fn( elems[ i ], key ) )\n\t\t\t\t);\n\t\t\t}\n\t\t}\n\t}\n\n\tif ( chainable ) {\n\t\treturn elems;\n\t}\n\n\t// Gets\n\tif ( bulk ) {\n\t\treturn fn.call( elems );\n\t}\n\n\treturn len ? fn( elems[ 0 ], key ) : emptyGet;\n};\n\n\n// Matches dashed string for camelizing\nvar rmsPrefix = /^-ms-/,\n\trdashAlpha = /-([a-z])/g;\n\n// Used by camelCase as callback to replace()\nfunction fcamelCase( _all, letter ) {\n\treturn letter.toUpperCase();\n}\n\n// Convert dashed to camelCase; used by the css and data modules\n// Support: IE <=9 - 11, Edge 12 - 15\n// Microsoft forgot to hump their vendor prefix (#9572)\nfunction camelCase( string ) {\n\treturn string.replace( rmsPrefix, \"ms-\" ).replace( rdashAlpha, fcamelCase );\n}\nvar acceptData = function( owner ) {\n\n\t// Accepts only:\n\t//  - Node\n\t//    - Node.ELEMENT_NODE\n\t//    - Node.DOCUMENT_NODE\n\t//  - Object\n\t//    - Any\n\treturn owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );\n};\n\n\n\n\nfunction Data() {\n\tthis.expando = jQuery.expando + Data.uid++;\n}\n\nData.uid = 1;\n\nData.prototype = {\n\n\tcache: function( owner ) {\n\n\t\t// Check if the owner object already has a cache\n\t\tvar value = owner[ this.expando ];\n\n\t\t// If not, create one\n\t\tif ( !value ) {\n\t\t\tvalue = {};\n\n\t\t\t// We can accept data for non-element nodes in modern browsers,\n\t\t\t// but we should not, see #8335.\n\t\t\t// Always return an empty object.\n\t\t\tif ( acceptData( owner ) ) {\n\n\t\t\t\t// If it is a node unlikely to be stringify-ed or looped over\n\t\t\t\t// use plain assignment\n\t\t\t\tif ( owner.nodeType ) {\n\t\t\t\t\towner[ this.expando ] = value;\n\n\t\t\t\t// Otherwise secure it in a non-enumerable property\n\t\t\t\t// configurable must be true to allow the property to be\n\t\t\t\t// deleted when data is removed\n\t\t\t\t} else {\n\t\t\t\t\tObject.defineProperty( owner, this.expando, {\n\t\t\t\t\t\tvalue: value,\n\t\t\t\t\t\tconfigurable: true\n\t\t\t\t\t} );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn value;\n\t},\n\tset: function( owner, data, value ) {\n\t\tvar prop,\n\t\t\tcache = this.cache( owner );\n\n\t\t// Handle: [ owner, key, value ] args\n\t\t// Always use camelCase key (gh-2257)\n\t\tif ( typeof data === \"string\" ) {\n\t\t\tcache[ camelCase( data ) ] = value;\n\n\t\t// Handle: [ owner, { properties } ] args\n\t\t} else {\n\n\t\t\t// Copy the properties one-by-one to the cache object\n\t\t\tfor ( prop in data ) {\n\t\t\t\tcache[ camelCase( prop ) ] = data[ prop ];\n\t\t\t}\n\t\t}\n\t\treturn cache;\n\t},\n\tget: function( owner, key ) {\n\t\treturn key === undefined ?\n\t\t\tthis.cache( owner ) :\n\n\t\t\t// Always use camelCase key (gh-2257)\n\t\t\towner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];\n\t},\n\taccess: function( owner, key, value ) {\n\n\t\t// In cases where either:\n\t\t//\n\t\t//   1. No key was specified\n\t\t//   2. A string key was specified, but no value provided\n\t\t//\n\t\t// Take the \"read\" path and allow the get method to determine\n\t\t// which value to return, respectively either:\n\t\t//\n\t\t//   1. The entire cache object\n\t\t//   2. The data stored at the key\n\t\t//\n\t\tif ( key === undefined ||\n\t\t\t\t( ( key && typeof key === \"string\" ) && value === undefined ) ) {\n\n\t\t\treturn this.get( owner, key );\n\t\t}\n\n\t\t// When the key is not a string, or both a key and value\n\t\t// are specified, set or extend (existing objects) with either:\n\t\t//\n\t\t//   1. An object of properties\n\t\t//   2. A key and value\n\t\t//\n\t\tthis.set( owner, key, value );\n\n\t\t// Since the \"set\" path can have two possible entry points\n\t\t// return the expected data based on which path was taken[*]\n\t\treturn value !== undefined ? value : key;\n\t},\n\tremove: function( owner, key ) {\n\t\tvar i,\n\t\t\tcache = owner[ this.expando ];\n\n\t\tif ( cache === undefined ) {\n\t\t\treturn;\n\t\t}\n\n\t\tif ( key !== undefined ) {\n\n\t\t\t// Support array or space separated string of keys\n\t\t\tif ( Array.isArray( key ) ) {\n\n\t\t\t\t// If key is an array of keys...\n\t\t\t\t// We always set camelCase keys, so remove that.\n\t\t\t\tkey = key.map( camelCase );\n\t\t\t} else {\n\t\t\t\tkey = camelCase( key );\n\n\t\t\t\t// If a key with the spaces exists, use it.\n\t\t\t\t// Otherwise, create an array by matching non-whitespace\n\t\t\t\tkey = key in cache ?\n\t\t\t\t\t[ key ] :\n\t\t\t\t\t( key.match( rnothtmlwhite ) || [] );\n\t\t\t}\n\n\t\t\ti = key.length;\n\n\t\t\twhile ( i-- ) {\n\t\t\t\tdelete cache[ key[ i ] ];\n\t\t\t}\n\t\t}\n\n\t\t// Remove the expando if there's no more data\n\t\tif ( key === undefined || jQuery.isEmptyObject( cache ) ) {\n\n\t\t\t// Support: Chrome <=35 - 45\n\t\t\t// Webkit & Blink performance suffers when deleting properties\n\t\t\t// from DOM nodes, so set to undefined instead\n\t\t\t// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)\n\t\t\tif ( owner.nodeType ) {\n\t\t\t\towner[ this.expando ] = undefined;\n\t\t\t} else {\n\t\t\t\tdelete owner[ this.expando ];\n\t\t\t}\n\t\t}\n\t},\n\thasData: function( owner ) {\n\t\tvar cache = owner[ this.expando ];\n\t\treturn cache !== undefined && !jQuery.isEmptyObject( cache );\n\t}\n};\nvar dataPriv = new Data();\n\nvar dataUser = new Data();\n\n\n\n//\tImplementation Summary\n//\n//\t1. Enforce API surface and semantic compatibility with 1.9.x branch\n//\t2. Improve the module's maintainability by reducing the storage\n//\t\tpaths to a single mechanism.\n//\t3. Use the same single mechanism to support \"private\" and \"user\" data.\n//\t4. _Never_ expose \"private\" data to user code (TODO: Drop _data, _removeData)\n//\t5. Avoid exposing implementation details on user objects (eg. expando properties)\n//\t6. Provide a clear path for implementation upgrade to WeakMap in 2014\n\nvar rbrace = /^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])$/,\n\trmultiDash = /[A-Z]/g;\n\nfunction getData( data ) {\n\tif ( data === \"true\" ) {\n\t\treturn true;\n\t}\n\n\tif ( data === \"false\" ) {\n\t\treturn false;\n\t}\n\n\tif ( data === \"null\" ) {\n\t\treturn null;\n\t}\n\n\t// Only convert to a number if it doesn't change the string\n\tif ( data === +data + \"\" ) {\n\t\treturn +data;\n\t}\n\n\tif ( rbrace.test( data ) ) {\n\t\treturn JSON.parse( data );\n\t}\n\n\treturn data;\n}\n\nfunction dataAttr( elem, key, data ) {\n\tvar name;\n\n\t// If nothing was found internally, try to fetch any\n\t// data from the HTML5 data-* attribute\n\tif ( data === undefined && elem.nodeType === 1 ) {\n\t\tname = \"data-\" + key.replace( rmultiDash, \"-$&\" ).toLowerCase();\n\t\tdata = elem.getAttribute( name );\n\n\t\tif ( typeof data === \"string\" ) {\n\t\t\ttry {\n\t\t\t\tdata = getData( data );\n\t\t\t} catch ( e ) {}\n\n\t\t\t// Make sure we set the data so it isn't changed later\n\t\t\tdataUser.set( elem, key, data );\n\t\t} else {\n\t\t\tdata = undefined;\n\t\t}\n\t}\n\treturn data;\n}\n\njQuery.extend( {\n\thasData: function( elem ) {\n\t\treturn dataUser.hasData( elem ) || dataPriv.hasData( elem );\n\t},\n\n\tdata: function( elem, name, data ) {\n\t\treturn dataUser.access( elem, name, data );\n\t},\n\n\tremoveData: function( elem, name ) {\n\t\tdataUser.remove( elem, name );\n\t},\n\n\t// TODO: Now that all calls to _data and _removeData have been replaced\n\t// with direct calls to dataPriv methods, these can be deprecated.\n\t_data: function( elem, name, data ) {\n\t\treturn dataPriv.access( elem, name, data );\n\t},\n\n\t_removeData: function( elem, name ) {\n\t\tdataPriv.remove( elem, name );\n\t}\n} );\n\njQuery.fn.extend( {\n\tdata: function( key, value ) {\n\t\tvar i, name, data,\n\t\t\telem = this[ 0 ],\n\t\t\tattrs = elem && elem.attributes;\n\n\t\t// Gets all values\n\t\tif ( key === undefined ) {\n\t\t\tif ( this.length ) {\n\t\t\t\tdata = dataUser.get( elem );\n\n\t\t\t\tif ( elem.nodeType === 1 && !dataPriv.get( elem, \"hasDataAttrs\" ) ) {\n\t\t\t\t\ti = attrs.length;\n\t\t\t\t\twhile ( i-- ) {\n\n\t\t\t\t\t\t// Support: IE 11 only\n\t\t\t\t\t\t// The attrs elements can be null (#14894)\n\t\t\t\t\t\tif ( attrs[ i ] ) {\n\t\t\t\t\t\t\tname = attrs[ i ].name;\n\t\t\t\t\t\t\tif ( name.indexOf( \"data-\" ) === 0 ) {\n\t\t\t\t\t\t\t\tname = camelCase( name.slice( 5 ) );\n\t\t\t\t\t\t\t\tdataAttr( elem, name, data[ name ] );\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tdataPriv.set( elem, \"hasDataAttrs\", true );\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn data;\n\t\t}\n\n\t\t// Sets multiple values\n\t\tif ( typeof key === \"object\" ) {\n\t\t\treturn this.each( function() {\n\t\t\t\tdataUser.set( this, key );\n\t\t\t} );\n\t\t}\n\n\t\treturn access( this, function( value ) {\n\t\t\tvar data;\n\n\t\t\t// The calling jQuery object (element matches) is not empty\n\t\t\t// (and therefore has an element appears at this[ 0 ]) and the\n\t\t\t// `value` parameter was not undefined. An empty jQuery object\n\t\t\t// will result in `undefined` for elem = this[ 0 ] which will\n\t\t\t// throw an exception if an attempt to read a data cache is made.\n\t\t\tif ( elem && value === undefined ) {\n\n\t\t\t\t// Attempt to get data from the cache\n\t\t\t\t// The key will always be camelCased in Data\n\t\t\t\tdata = dataUser.get( elem, key );\n\t\t\t\tif ( data !== undefined ) {\n\t\t\t\t\treturn data;\n\t\t\t\t}\n\n\t\t\t\t// Attempt to \"discover\" the data in\n\t\t\t\t// HTML5 custom data-* attrs\n\t\t\t\tdata = dataAttr( elem, key );\n\t\t\t\tif ( data !== undefined ) {\n\t\t\t\t\treturn data;\n\t\t\t\t}\n\n\t\t\t\t// We tried really hard, but the data doesn't exist.\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t// Set the data...\n\t\t\tthis.each( function() {\n\n\t\t\t\t// We always store the camelCased key\n\t\t\t\tdataUser.set( this, key, value );\n\t\t\t} );\n\t\t}, null, value, arguments.length > 1, null, true );\n\t},\n\n\tremoveData: function( key ) {\n\t\treturn this.each( function() {\n\t\t\tdataUser.remove( this, key );\n\t\t} );\n\t}\n} );\n\n\njQuery.extend( {\n\tqueue: function( elem, type, data ) {\n\t\tvar queue;\n\n\t\tif ( elem ) {\n\t\t\ttype = ( type || \"fx\" ) + \"queue\";\n\t\t\tqueue = dataPriv.get( elem, type );\n\n\t\t\t// Speed up dequeue by getting out quickly if this is just a lookup\n\t\t\tif ( data ) {\n\t\t\t\tif ( !queue || Array.isArray( data ) ) {\n\t\t\t\t\tqueue = dataPriv.access( elem, type, jQuery.makeArray( data ) );\n\t\t\t\t} else {\n\t\t\t\t\tqueue.push( data );\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn queue || [];\n\t\t}\n\t},\n\n\tdequeue: function( elem, type ) {\n\t\ttype = type || \"fx\";\n\n\t\tvar queue = jQuery.queue( elem, type ),\n\t\t\tstartLength = queue.length,\n\t\t\tfn = queue.shift(),\n\t\t\thooks = jQuery._queueHooks( elem, type ),\n\t\t\tnext = function() {\n\t\t\t\tjQuery.dequeue( elem, type );\n\t\t\t};\n\n\t\t// If the fx queue is dequeued, always remove the progress sentinel\n\t\tif ( fn === \"inprogress\" ) {\n\t\t\tfn = queue.shift();\n\t\t\tstartLength--;\n\t\t}\n\n\t\tif ( fn ) {\n\n\t\t\t// Add a progress sentinel to prevent the fx queue from being\n\t\t\t// automatically dequeued\n\t\t\tif ( type === \"fx\" ) {\n\t\t\t\tqueue.unshift( \"inprogress\" );\n\t\t\t}\n\n\t\t\t// Clear up the last queue stop function\n\t\t\tdelete hooks.stop;\n\t\t\tfn.call( elem, next, hooks );\n\t\t}\n\n\t\tif ( !startLength && hooks ) {\n\t\t\thooks.empty.fire();\n\t\t}\n\t},\n\n\t// Not public - generate a queueHooks object, or return the current one\n\t_queueHooks: function( elem, type ) {\n\t\tvar key = type + \"queueHooks\";\n\t\treturn dataPriv.get( elem, key ) || dataPriv.access( elem, key, {\n\t\t\tempty: jQuery.Callbacks( \"once memory\" ).add( function() {\n\t\t\t\tdataPriv.remove( elem, [ type + \"queue\", key ] );\n\t\t\t} )\n\t\t} );\n\t}\n} );\n\njQuery.fn.extend( {\n\tqueue: function( type, data ) {\n\t\tvar setter = 2;\n\n\t\tif ( typeof type !== \"string\" ) {\n\t\t\tdata = type;\n\t\t\ttype = \"fx\";\n\t\t\tsetter--;\n\t\t}\n\n\t\tif ( arguments.length < setter ) {\n\t\t\treturn jQuery.queue( this[ 0 ], type );\n\t\t}\n\n\t\treturn data === undefined ?\n\t\t\tthis :\n\t\t\tthis.each( function() {\n\t\t\t\tvar queue = jQuery.queue( this, type, data );\n\n\t\t\t\t// Ensure a hooks for this queue\n\t\t\t\tjQuery._queueHooks( this, type );\n\n\t\t\t\tif ( type === \"fx\" && queue[ 0 ] !== \"inprogress\" ) {\n\t\t\t\t\tjQuery.dequeue( this, type );\n\t\t\t\t}\n\t\t\t} );\n\t},\n\tdequeue: function( type ) {\n\t\treturn this.each( function() {\n\t\t\tjQuery.dequeue( this, type );\n\t\t} );\n\t},\n\tclearQueue: function( type ) {\n\t\treturn this.queue( type || \"fx\", [] );\n\t},\n\n\t// Get a promise resolved when queues of a certain type\n\t// are emptied (fx is the type by default)\n\tpromise: function( type, obj ) {\n\t\tvar tmp,\n\t\t\tcount = 1,\n\t\t\tdefer = jQuery.Deferred(),\n\t\t\telements = this,\n\t\t\ti = this.length,\n\t\t\tresolve = function() {\n\t\t\t\tif ( !( --count ) ) {\n\t\t\t\t\tdefer.resolveWith( elements, [ elements ] );\n\t\t\t\t}\n\t\t\t};\n\n\t\tif ( typeof type !== \"string\" ) {\n\t\t\tobj = type;\n\t\t\ttype = undefined;\n\t\t}\n\t\ttype = type || \"fx\";\n\n\t\twhile ( i-- ) {\n\t\t\ttmp = dataPriv.get( elements[ i ], type + \"queueHooks\" );\n\t\t\tif ( tmp && tmp.empty ) {\n\t\t\t\tcount++;\n\t\t\t\ttmp.empty.add( resolve );\n\t\t\t}\n\t\t}\n\t\tresolve();\n\t\treturn defer.promise( obj );\n\t}\n} );\nvar pnum = ( /[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/ ).source;\n\nvar rcssNum = new RegExp( \"^(?:([+-])=|)(\" + pnum + \")([a-z%]*)$\", \"i\" );\n\n\nvar cssExpand = [ \"Top\", \"Right\", \"Bottom\", \"Left\" ];\n\nvar documentElement = document.documentElement;\n\n\n\n\tvar isAttached = function( elem ) {\n\t\t\treturn jQuery.contains( elem.ownerDocument, elem );\n\t\t},\n\t\tcomposed = { composed: true };\n\n\t// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only\n\t// Check attachment across shadow DOM boundaries when possible (gh-3504)\n\t// Support: iOS 10.0-10.2 only\n\t// Early iOS 10 versions support `attachShadow` but not `getRootNode`,\n\t// leading to errors. We need to check for `getRootNode`.\n\tif ( documentElement.getRootNode ) {\n\t\tisAttached = function( elem ) {\n\t\t\treturn jQuery.contains( elem.ownerDocument, elem ) ||\n\t\t\t\telem.getRootNode( composed ) === elem.ownerDocument;\n\t\t};\n\t}\nvar isHiddenWithinTree = function( elem, el ) {\n\n\t\t// isHiddenWithinTree might be called from jQuery#filter function;\n\t\t// in that case, element will be second argument\n\t\telem = el || elem;\n\n\t\t// Inline style trumps all\n\t\treturn elem.style.display === \"none\" ||\n\t\t\telem.style.display === \"\" &&\n\n\t\t\t// Otherwise, check computed style\n\t\t\t// Support: Firefox <=43 - 45\n\t\t\t// Disconnected elements can have computed display: none, so first confirm that elem is\n\t\t\t// in the document.\n\t\t\tisAttached( elem ) &&\n\n\t\t\tjQuery.css( elem, \"display\" ) === \"none\";\n\t};\n\n\n\nfunction adjustCSS( elem, prop, valueParts, tween ) {\n\tvar adjusted, scale,\n\t\tmaxIterations = 20,\n\t\tcurrentValue = tween ?\n\t\t\tfunction() {\n\t\t\t\treturn tween.cur();\n\t\t\t} :\n\t\t\tfunction() {\n\t\t\t\treturn jQuery.css( elem, prop, \"\" );\n\t\t\t},\n\t\tinitial = currentValue(),\n\t\tunit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? \"\" : \"px\" ),\n\n\t\t// Starting value computation is required for potential unit mismatches\n\t\tinitialInUnit = elem.nodeType &&\n\t\t\t( jQuery.cssNumber[ prop ] || unit !== \"px\" && +initial ) &&\n\t\t\trcssNum.exec( jQuery.css( elem, prop ) );\n\n\tif ( initialInUnit && initialInUnit[ 3 ] !== unit ) {\n\n\t\t// Support: Firefox <=54\n\t\t// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)\n\t\tinitial = initial / 2;\n\n\t\t// Trust units reported by jQuery.css\n\t\tunit = unit || initialInUnit[ 3 ];\n\n\t\t// Iteratively approximate from a nonzero starting point\n\t\tinitialInUnit = +initial || 1;\n\n\t\twhile ( maxIterations-- ) {\n\n\t\t\t// Evaluate and update our best guess (doubling guesses that zero out).\n\t\t\t// Finish if the scale equals or crosses 1 (making the old*new product non-positive).\n\t\t\tjQuery.style( elem, prop, initialInUnit + unit );\n\t\t\tif ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {\n\t\t\t\tmaxIterations = 0;\n\t\t\t}\n\t\t\tinitialInUnit = initialInUnit / scale;\n\n\t\t}\n\n\t\tinitialInUnit = initialInUnit * 2;\n\t\tjQuery.style( elem, prop, initialInUnit + unit );\n\n\t\t// Make sure we update the tween properties later on\n\t\tvalueParts = valueParts || [];\n\t}\n\n\tif ( valueParts ) {\n\t\tinitialInUnit = +initialInUnit || +initial || 0;\n\n\t\t// Apply relative offset (+=/-=) if specified\n\t\tadjusted = valueParts[ 1 ] ?\n\t\t\tinitialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :\n\t\t\t+valueParts[ 2 ];\n\t\tif ( tween ) {\n\t\t\ttween.unit = unit;\n\t\t\ttween.start = initialInUnit;\n\t\t\ttween.end = adjusted;\n\t\t}\n\t}\n\treturn adjusted;\n}\n\n\nvar defaultDisplayMap = {};\n\nfunction getDefaultDisplay( elem ) {\n\tvar temp,\n\t\tdoc = elem.ownerDocument,\n\t\tnodeName = elem.nodeName,\n\t\tdisplay = defaultDisplayMap[ nodeName ];\n\n\tif ( display ) {\n\t\treturn display;\n\t}\n\n\ttemp = doc.body.appendChild( doc.createElement( nodeName ) );\n\tdisplay = jQuery.css( temp, \"display\" );\n\n\ttemp.parentNode.removeChild( temp );\n\n\tif ( display === \"none\" ) {\n\t\tdisplay = \"block\";\n\t}\n\tdefaultDisplayMap[ nodeName ] = display;\n\n\treturn display;\n}\n\nfunction showHide( elements, show ) {\n\tvar display, elem,\n\t\tvalues = [],\n\t\tindex = 0,\n\t\tlength = elements.length;\n\n\t// Determine new display value for elements that need to change\n\tfor ( ; index < length; index++ ) {\n\t\telem = elements[ index ];\n\t\tif ( !elem.style ) {\n\t\t\tcontinue;\n\t\t}\n\n\t\tdisplay = elem.style.display;\n\t\tif ( show ) {\n\n\t\t\t// Since we force visibility upon cascade-hidden elements, an immediate (and slow)\n\t\t\t// check is required in this first loop unless we have a nonempty display value (either\n\t\t\t// inline or about-to-be-restored)\n\t\t\tif ( display === \"none\" ) {\n\t\t\t\tvalues[ index ] = dataPriv.get( elem, \"display\" ) || null;\n\t\t\t\tif ( !values[ index ] ) {\n\t\t\t\t\telem.style.display = \"\";\n\t\t\t\t}\n\t\t\t}\n\t\t\tif ( elem.style.display === \"\" && isHiddenWithinTree( elem ) ) {\n\t\t\t\tvalues[ index ] = getDefaultDisplay( elem );\n\t\t\t}\n\t\t} else {\n\t\t\tif ( display !== \"none\" ) {\n\t\t\t\tvalues[ index ] = \"none\";\n\n\t\t\t\t// Remember what we're overwriting\n\t\t\t\tdataPriv.set( elem, \"display\", display );\n\t\t\t}\n\t\t}\n\t}\n\n\t// Set the display of the elements in a second loop to avoid constant reflow\n\tfor ( index = 0; index < length; index++ ) {\n\t\tif ( values[ index ] != null ) {\n\t\t\telements[ index ].style.display = values[ index ];\n\t\t}\n\t}\n\n\treturn elements;\n}\n\njQuery.fn.extend( {\n\tshow: function() {\n\t\treturn showHide( this, true );\n\t},\n\thide: function() {\n\t\treturn showHide( this );\n\t},\n\ttoggle: function( state ) {\n\t\tif ( typeof state === \"boolean\" ) {\n\t\t\treturn state ? this.show() : this.hide();\n\t\t}\n\n\t\treturn this.each( function() {\n\t\t\tif ( isHiddenWithinTree( this ) ) {\n\t\t\t\tjQuery( this ).show();\n\t\t\t} else {\n\t\t\t\tjQuery( this ).hide();\n\t\t\t}\n\t\t} );\n\t}\n} );\nvar rcheckableType = ( /^(?:checkbox|radio)$/i );\n\nvar rtagName = ( /<([a-z][^\\/\\0>\\x20\\t\\r\\n\\f]*)/i );\n\nvar rscriptType = ( /^$|^module$|\\/(?:java|ecma)script/i );\n\n\n\n( function() {\n\tvar fragment = document.createDocumentFragment(),\n\t\tdiv = fragment.appendChild( document.createElement( \"div\" ) ),\n\t\tinput = document.createElement( \"input\" );\n\n\t// Support: Android 4.0 - 4.3 only\n\t// Check state lost if the name is set (#11217)\n\t// Support: Windows Web Apps (WWA)\n\t// `name` and `type` must use .setAttribute for WWA (#14901)\n\tinput.setAttribute( \"type\", \"radio\" );\n\tinput.setAttribute( \"checked\", \"checked\" );\n\tinput.setAttribute( \"name\", \"t\" );\n\n\tdiv.appendChild( input );\n\n\t// Support: Android <=4.1 only\n\t// Older WebKit doesn't clone checked state correctly in fragments\n\tsupport.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;\n\n\t// Support: IE <=11 only\n\t// Make sure textarea (and checkbox) defaultValue is properly cloned\n\tdiv.innerHTML = \"<textarea>x</textarea>\";\n\tsupport.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;\n\n\t// Support: IE <=9 only\n\t// IE <=9 replaces <option> tags with their contents when inserted outside of\n\t// the select element.\n\tdiv.innerHTML = \"<option></option>\";\n\tsupport.option = !!div.lastChild;\n} )();\n\n\n// We have to close these tags to support XHTML (#13200)\nvar wrapMap = {\n\n\t// XHTML parsers do not magically insert elements in the\n\t// same way that tag soup parsers do. So we cannot shorten\n\t// this by omitting <tbody> or other required elements.\n\tthead: [ 1, \"<table>\", \"</table>\" ],\n\tcol: [ 2, \"<table><colgroup>\", \"</colgroup></table>\" ],\n\ttr: [ 2, \"<table><tbody>\", \"</tbody></table>\" ],\n\ttd: [ 3, \"<table><tbody><tr>\", \"</tr></tbody></table>\" ],\n\n\t_default: [ 0, \"\", \"\" ]\n};\n\nwrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;\nwrapMap.th = wrapMap.td;\n\n// Support: IE <=9 only\nif ( !support.option ) {\n\twrapMap.optgroup = wrapMap.option = [ 1, \"<select multiple='multiple'>\", \"</select>\" ];\n}\n\n\nfunction getAll( context, tag ) {\n\n\t// Support: IE <=9 - 11 only\n\t// Use typeof to avoid zero-argument method invocation on host objects (#15151)\n\tvar ret;\n\n\tif ( typeof context.getElementsByTagName !== \"undefined\" ) {\n\t\tret = context.getElementsByTagName( tag || \"*\" );\n\n\t} else if ( typeof context.querySelectorAll !== \"undefined\" ) {\n\t\tret = context.querySelectorAll( tag || \"*\" );\n\n\t} else {\n\t\tret = [];\n\t}\n\n\tif ( tag === undefined || tag && nodeName( context, tag ) ) {\n\t\treturn jQuery.merge( [ context ], ret );\n\t}\n\n\treturn ret;\n}\n\n\n// Mark scripts as having already been evaluated\nfunction setGlobalEval( elems, refElements ) {\n\tvar i = 0,\n\t\tl = elems.length;\n\n\tfor ( ; i < l; i++ ) {\n\t\tdataPriv.set(\n\t\t\telems[ i ],\n\t\t\t\"globalEval\",\n\t\t\t!refElements || dataPriv.get( refElements[ i ], \"globalEval\" )\n\t\t);\n\t}\n}\n\n\nvar rhtml = /<|&#?\\w+;/;\n\nfunction buildFragment( elems, context, scripts, selection, ignored ) {\n\tvar elem, tmp, tag, wrap, attached, j,\n\t\tfragment = context.createDocumentFragment(),\n\t\tnodes = [],\n\t\ti = 0,\n\t\tl = elems.length;\n\n\tfor ( ; i < l; i++ ) {\n\t\telem = elems[ i ];\n\n\t\tif ( elem || elem === 0 ) {\n\n\t\t\t// Add nodes directly\n\t\t\tif ( toType( elem ) === \"object\" ) {\n\n\t\t\t\t// Support: Android <=4.0 only, PhantomJS 1 only\n\t\t\t\t// push.apply(_, arraylike) throws on ancient WebKit\n\t\t\t\tjQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );\n\n\t\t\t// Convert non-html into a text node\n\t\t\t} else if ( !rhtml.test( elem ) ) {\n\t\t\t\tnodes.push( context.createTextNode( elem ) );\n\n\t\t\t// Convert html into DOM nodes\n\t\t\t} else {\n\t\t\t\ttmp = tmp || fragment.appendChild( context.createElement( \"div\" ) );\n\n\t\t\t\t// Deserialize a standard representation\n\t\t\t\ttag = ( rtagName.exec( elem ) || [ \"\", \"\" ] )[ 1 ].toLowerCase();\n\t\t\t\twrap = wrapMap[ tag ] || wrapMap._default;\n\t\t\t\ttmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];\n\n\t\t\t\t// Descend through wrappers to the right content\n\t\t\t\tj = wrap[ 0 ];\n\t\t\t\twhile ( j-- ) {\n\t\t\t\t\ttmp = tmp.lastChild;\n\t\t\t\t}\n\n\t\t\t\t// Support: Android <=4.0 only, PhantomJS 1 only\n\t\t\t\t// push.apply(_, arraylike) throws on ancient WebKit\n\t\t\t\tjQuery.merge( nodes, tmp.childNodes );\n\n\t\t\t\t// Remember the top-level container\n\t\t\t\ttmp = fragment.firstChild;\n\n\t\t\t\t// Ensure the created nodes are orphaned (#12392)\n\t\t\t\ttmp.textContent = \"\";\n\t\t\t}\n\t\t}\n\t}\n\n\t// Remove wrapper from fragment\n\tfragment.textContent = \"\";\n\n\ti = 0;\n\twhile ( ( elem = nodes[ i++ ] ) ) {\n\n\t\t// Skip elements already in the context collection (trac-4087)\n\t\tif ( selection && jQuery.inArray( elem, selection ) > -1 ) {\n\t\t\tif ( ignored ) {\n\t\t\t\tignored.push( elem );\n\t\t\t}\n\t\t\tcontinue;\n\t\t}\n\n\t\tattached = isAttached( elem );\n\n\t\t// Append to fragment\n\t\ttmp = getAll( fragment.appendChild( elem ), \"script\" );\n\n\t\t// Preserve script evaluation history\n\t\tif ( attached ) {\n\t\t\tsetGlobalEval( tmp );\n\t\t}\n\n\t\t// Capture executables\n\t\tif ( scripts ) {\n\t\t\tj = 0;\n\t\t\twhile ( ( elem = tmp[ j++ ] ) ) {\n\t\t\t\tif ( rscriptType.test( elem.type || \"\" ) ) {\n\t\t\t\t\tscripts.push( elem );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn fragment;\n}\n\n\nvar\n\trkeyEvent = /^key/,\n\trmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,\n\trtypenamespace = /^([^.]*)(?:\\.(.+)|)/;\n\nfunction returnTrue() {\n\treturn true;\n}\n\nfunction returnFalse() {\n\treturn false;\n}\n\n// Support: IE <=9 - 11+\n// focus() and blur() are asynchronous, except when they are no-op.\n// So expect focus to be synchronous when the element is already active,\n// and blur to be synchronous when the element is not already active.\n// (focus and blur are always synchronous in other supported browsers,\n// this just defines when we can count on it).\nfunction expectSync( elem, type ) {\n\treturn ( elem === safeActiveElement() ) === ( type === \"focus\" );\n}\n\n// Support: IE <=9 only\n// Accessing document.activeElement can throw unexpectedly\n// https://bugs.jquery.com/ticket/13393\nfunction safeActiveElement() {\n\ttry {\n\t\treturn document.activeElement;\n\t} catch ( err ) { }\n}\n\nfunction on( elem, types, selector, data, fn, one ) {\n\tvar origFn, type;\n\n\t// Types can be a map of types/handlers\n\tif ( typeof types === \"object\" ) {\n\n\t\t// ( types-Object, selector, data )\n\t\tif ( typeof selector !== \"string\" ) {\n\n\t\t\t// ( types-Object, data )\n\t\t\tdata = data || selector;\n\t\t\tselector = undefined;\n\t\t}\n\t\tfor ( type in types ) {\n\t\t\ton( elem, type, selector, data, types[ type ], one );\n\t\t}\n\t\treturn elem;\n\t}\n\n\tif ( data == null && fn == null ) {\n\n\t\t// ( types, fn )\n\t\tfn = selector;\n\t\tdata = selector = undefined;\n\t} else if ( fn == null ) {\n\t\tif ( typeof selector === \"string\" ) {\n\n\t\t\t// ( types, selector, fn )\n\t\t\tfn = data;\n\t\t\tdata = undefined;\n\t\t} else {\n\n\t\t\t// ( types, data, fn )\n\t\t\tfn = data;\n\t\t\tdata = selector;\n\t\t\tselector = undefined;\n\t\t}\n\t}\n\tif ( fn === false ) {\n\t\tfn = returnFalse;\n\t} else if ( !fn ) {\n\t\treturn elem;\n\t}\n\n\tif ( one === 1 ) {\n\t\torigFn = fn;\n\t\tfn = function( event ) {\n\n\t\t\t// Can use an empty set, since event contains the info\n\t\t\tjQuery().off( event );\n\t\t\treturn origFn.apply( this, arguments );\n\t\t};\n\n\t\t// Use same guid so caller can remove using origFn\n\t\tfn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );\n\t}\n\treturn elem.each( function() {\n\t\tjQuery.event.add( this, types, fn, data, selector );\n\t} );\n}\n\n/*\n * Helper functions for managing events -- not part of the public interface.\n * Props to Dean Edwards' addEvent library for many of the ideas.\n */\njQuery.event = {\n\n\tglobal: {},\n\n\tadd: function( elem, types, handler, data, selector ) {\n\n\t\tvar handleObjIn, eventHandle, tmp,\n\t\t\tevents, t, handleObj,\n\t\t\tspecial, handlers, type, namespaces, origType,\n\t\t\telemData = dataPriv.get( elem );\n\n\t\t// Only attach events to objects that accept data\n\t\tif ( !acceptData( elem ) ) {\n\t\t\treturn;\n\t\t}\n\n\t\t// Caller can pass in an object of custom data in lieu of the handler\n\t\tif ( handler.handler ) {\n\t\t\thandleObjIn = handler;\n\t\t\thandler = handleObjIn.handler;\n\t\t\tselector = handleObjIn.selector;\n\t\t}\n\n\t\t// Ensure that invalid selectors throw exceptions at attach time\n\t\t// Evaluate against documentElement in case elem is a non-element node (e.g., document)\n\t\tif ( selector ) {\n\t\t\tjQuery.find.matchesSelector( documentElement, selector );\n\t\t}\n\n\t\t// Make sure that the handler has a unique ID, used to find/remove it later\n\t\tif ( !handler.guid ) {\n\t\t\thandler.guid = jQuery.guid++;\n\t\t}\n\n\t\t// Init the element's event structure and main handler, if this is the first\n\t\tif ( !( events = elemData.events ) ) {\n\t\t\tevents = elemData.events = Object.create( null );\n\t\t}\n\t\tif ( !( eventHandle = elemData.handle ) ) {\n\t\t\teventHandle = elemData.handle = function( e ) {\n\n\t\t\t\t// Discard the second event of a jQuery.event.trigger() and\n\t\t\t\t// when an event is called after a page has unloaded\n\t\t\t\treturn typeof jQuery !== \"undefined\" && jQuery.event.triggered !== e.type ?\n\t\t\t\t\tjQuery.event.dispatch.apply( elem, arguments ) : undefined;\n\t\t\t};\n\t\t}\n\n\t\t// Handle multiple events separated by a space\n\t\ttypes = ( types || \"\" ).match( rnothtmlwhite ) || [ \"\" ];\n\t\tt = types.length;\n\t\twhile ( t-- ) {\n\t\t\ttmp = rtypenamespace.exec( types[ t ] ) || [];\n\t\t\ttype = origType = tmp[ 1 ];\n\t\t\tnamespaces = ( tmp[ 2 ] || \"\" ).split( \".\" ).sort();\n\n\t\t\t// There *must* be a type, no attaching namespace-only handlers\n\t\t\tif ( !type ) {\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\t// If event changes its type, use the special event handlers for the changed type\n\t\t\tspecial = jQuery.event.special[ type ] || {};\n\n\t\t\t// If selector defined, determine special event api type, otherwise given type\n\t\t\ttype = ( selector ? special.delegateType : special.bindType ) || type;\n\n\t\t\t// Update special based on newly reset type\n\t\t\tspecial = jQuery.event.special[ type ] || {};\n\n\t\t\t// handleObj is passed to all event handlers\n\t\t\thandleObj = jQuery.extend( {\n\t\t\t\ttype: type,\n\t\t\t\torigType: origType,\n\t\t\t\tdata: data,\n\t\t\t\thandler: handler,\n\t\t\t\tguid: handler.guid,\n\t\t\t\tselector: selector,\n\t\t\t\tneedsContext: selector && jQuery.expr.match.needsContext.test( selector ),\n\t\t\t\tnamespace: namespaces.join( \".\" )\n\t\t\t}, handleObjIn );\n\n\t\t\t// Init the event handler queue if we're the first\n\t\t\tif ( !( handlers = events[ type ] ) ) {\n\t\t\t\thandlers = events[ type ] = [];\n\t\t\t\thandlers.delegateCount = 0;\n\n\t\t\t\t// Only use addEventListener if the special events handler returns false\n\t\t\t\tif ( !special.setup ||\n\t\t\t\t\tspecial.setup.call( elem, data, namespaces, eventHandle ) === false ) {\n\n\t\t\t\t\tif ( elem.addEventListener ) {\n\t\t\t\t\t\telem.addEventListener( type, eventHandle );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif ( special.add ) {\n\t\t\t\tspecial.add.call( elem, handleObj );\n\n\t\t\t\tif ( !handleObj.handler.guid ) {\n\t\t\t\t\thandleObj.handler.guid = handler.guid;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Add to the element's handler list, delegates in front\n\t\t\tif ( selector ) {\n\t\t\t\thandlers.splice( handlers.delegateCount++, 0, handleObj );\n\t\t\t} else {\n\t\t\t\thandlers.push( handleObj );\n\t\t\t}\n\n\t\t\t// Keep track of which events have ever been used, for event optimization\n\t\t\tjQuery.event.global[ type ] = true;\n\t\t}\n\n\t},\n\n\t// Detach an event or set of events from an element\n\tremove: function( elem, types, handler, selector, mappedTypes ) {\n\n\t\tvar j, origCount, tmp,\n\t\t\tevents, t, handleObj,\n\t\t\tspecial, handlers, type, namespaces, origType,\n\t\t\telemData = dataPriv.hasData( elem ) && dataPriv.get( elem );\n\n\t\tif ( !elemData || !( events = elemData.events ) ) {\n\t\t\treturn;\n\t\t}\n\n\t\t// Once for each type.namespace in types; type may be omitted\n\t\ttypes = ( types || \"\" ).match( rnothtmlwhite ) || [ \"\" ];\n\t\tt = types.length;\n\t\twhile ( t-- ) {\n\t\t\ttmp = rtypenamespace.exec( types[ t ] ) || [];\n\t\t\ttype = origType = tmp[ 1 ];\n\t\t\tnamespaces = ( tmp[ 2 ] || \"\" ).split( \".\" ).sort();\n\n\t\t\t// Unbind all events (on this namespace, if provided) for the element\n\t\t\tif ( !type ) {\n\t\t\t\tfor ( type in events ) {\n\t\t\t\t\tjQuery.event.remove( elem, type + types[ t ], handler, selector, true );\n\t\t\t\t}\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\tspecial = jQuery.event.special[ type ] || {};\n\t\t\ttype = ( selector ? special.delegateType : special.bindType ) || type;\n\t\t\thandlers = events[ type ] || [];\n\t\t\ttmp = tmp[ 2 ] &&\n\t\t\t\tnew RegExp( \"(^|\\\\.)\" + namespaces.join( \"\\\\.(?:.*\\\\.|)\" ) + \"(\\\\.|$)\" );\n\n\t\t\t// Remove matching events\n\t\t\torigCount = j = handlers.length;\n\t\t\twhile ( j-- ) {\n\t\t\t\thandleObj = handlers[ j ];\n\n\t\t\t\tif ( ( mappedTypes || origType === handleObj.origType ) &&\n\t\t\t\t\t( !handler || handler.guid === handleObj.guid ) &&\n\t\t\t\t\t( !tmp || tmp.test( handleObj.namespace ) ) &&\n\t\t\t\t\t( !selector || selector === handleObj.selector ||\n\t\t\t\t\t\tselector === \"**\" && handleObj.selector ) ) {\n\t\t\t\t\thandlers.splice( j, 1 );\n\n\t\t\t\t\tif ( handleObj.selector ) {\n\t\t\t\t\t\thandlers.delegateCount--;\n\t\t\t\t\t}\n\t\t\t\t\tif ( special.remove ) {\n\t\t\t\t\t\tspecial.remove.call( elem, handleObj );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Remove generic event handler if we removed something and no more handlers exist\n\t\t\t// (avoids potential for endless recursion during removal of special event handlers)\n\t\t\tif ( origCount && !handlers.length ) {\n\t\t\t\tif ( !special.teardown ||\n\t\t\t\t\tspecial.teardown.call( elem, namespaces, elemData.handle ) === false ) {\n\n\t\t\t\t\tjQuery.removeEvent( elem, type, elemData.handle );\n\t\t\t\t}\n\n\t\t\t\tdelete events[ type ];\n\t\t\t}\n\t\t}\n\n\t\t// Remove data and the expando if it's no longer used\n\t\tif ( jQuery.isEmptyObject( events ) ) {\n\t\t\tdataPriv.remove( elem, \"handle events\" );\n\t\t}\n\t},\n\n\tdispatch: function( nativeEvent ) {\n\n\t\tvar i, j, ret, matched, handleObj, handlerQueue,\n\t\t\targs = new Array( arguments.length ),\n\n\t\t\t// Make a writable jQuery.Event from the native event object\n\t\t\tevent = jQuery.event.fix( nativeEvent ),\n\n\t\t\thandlers = (\n\t\t\t\t\tdataPriv.get( this, \"events\" ) || Object.create( null )\n\t\t\t\t)[ event.type ] || [],\n\t\t\tspecial = jQuery.event.special[ event.type ] || {};\n\n\t\t// Use the fix-ed jQuery.Event rather than the (read-only) native event\n\t\targs[ 0 ] = event;\n\n\t\tfor ( i = 1; i < arguments.length; i++ ) {\n\t\t\targs[ i ] = arguments[ i ];\n\t\t}\n\n\t\tevent.delegateTarget = this;\n\n\t\t// Call the preDispatch hook for the mapped type, and let it bail if desired\n\t\tif ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {\n\t\t\treturn;\n\t\t}\n\n\t\t// Determine handlers\n\t\thandlerQueue = jQuery.event.handlers.call( this, event, handlers );\n\n\t\t// Run delegates first; they may want to stop propagation beneath us\n\t\ti = 0;\n\t\twhile ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {\n\t\t\tevent.currentTarget = matched.elem;\n\n\t\t\tj = 0;\n\t\t\twhile ( ( handleObj = matched.handlers[ j++ ] ) &&\n\t\t\t\t!event.isImmediatePropagationStopped() ) {\n\n\t\t\t\t// If the event is namespaced, then each handler is only invoked if it is\n\t\t\t\t// specially universal or its namespaces are a superset of the event's.\n\t\t\t\tif ( !event.rnamespace || handleObj.namespace === false ||\n\t\t\t\t\tevent.rnamespace.test( handleObj.namespace ) ) {\n\n\t\t\t\t\tevent.handleObj = handleObj;\n\t\t\t\t\tevent.data = handleObj.data;\n\n\t\t\t\t\tret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||\n\t\t\t\t\t\thandleObj.handler ).apply( matched.elem, args );\n\n\t\t\t\t\tif ( ret !== undefined ) {\n\t\t\t\t\t\tif ( ( event.result = ret ) === false ) {\n\t\t\t\t\t\t\tevent.preventDefault();\n\t\t\t\t\t\t\tevent.stopPropagation();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t// Call the postDispatch hook for the mapped type\n\t\tif ( special.postDispatch ) {\n\t\t\tspecial.postDispatch.call( this, event );\n\t\t}\n\n\t\treturn event.result;\n\t},\n\n\thandlers: function( event, handlers ) {\n\t\tvar i, handleObj, sel, matchedHandlers, matchedSelectors,\n\t\t\thandlerQueue = [],\n\t\t\tdelegateCount = handlers.delegateCount,\n\t\t\tcur = event.target;\n\n\t\t// Find delegate handlers\n\t\tif ( delegateCount &&\n\n\t\t\t// Support: IE <=9\n\t\t\t// Black-hole SVG <use> instance trees (trac-13180)\n\t\t\tcur.nodeType &&\n\n\t\t\t// Support: Firefox <=42\n\t\t\t// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)\n\t\t\t// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click\n\t\t\t// Support: IE 11 only\n\t\t\t// ...but not arrow key \"clicks\" of radio inputs, which can have `button` -1 (gh-2343)\n\t\t\t!( event.type === \"click\" && event.button >= 1 ) ) {\n\n\t\t\tfor ( ; cur !== this; cur = cur.parentNode || this ) {\n\n\t\t\t\t// Don't check non-elements (#13208)\n\t\t\t\t// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)\n\t\t\t\tif ( cur.nodeType === 1 && !( event.type === \"click\" && cur.disabled === true ) ) {\n\t\t\t\t\tmatchedHandlers = [];\n\t\t\t\t\tmatchedSelectors = {};\n\t\t\t\t\tfor ( i = 0; i < delegateCount; i++ ) {\n\t\t\t\t\t\thandleObj = handlers[ i ];\n\n\t\t\t\t\t\t// Don't conflict with Object.prototype properties (#13203)\n\t\t\t\t\t\tsel = handleObj.selector + \" \";\n\n\t\t\t\t\t\tif ( matchedSelectors[ sel ] === undefined ) {\n\t\t\t\t\t\t\tmatchedSelectors[ sel ] = handleObj.needsContext ?\n\t\t\t\t\t\t\t\tjQuery( sel, this ).index( cur ) > -1 :\n\t\t\t\t\t\t\t\tjQuery.find( sel, this, null, [ cur ] ).length;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif ( matchedSelectors[ sel ] ) {\n\t\t\t\t\t\t\tmatchedHandlers.push( handleObj );\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tif ( matchedHandlers.length ) {\n\t\t\t\t\t\thandlerQueue.push( { elem: cur, handlers: matchedHandlers } );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t// Add the remaining (directly-bound) handlers\n\t\tcur = this;\n\t\tif ( delegateCount < handlers.length ) {\n\t\t\thandlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );\n\t\t}\n\n\t\treturn handlerQueue;\n\t},\n\n\taddProp: function( name, hook ) {\n\t\tObject.defineProperty( jQuery.Event.prototype, name, {\n\t\t\tenumerable: true,\n\t\t\tconfigurable: true,\n\n\t\t\tget: isFunction( hook ) ?\n\t\t\t\tfunction() {\n\t\t\t\t\tif ( this.originalEvent ) {\n\t\t\t\t\t\t\treturn hook( this.originalEvent );\n\t\t\t\t\t}\n\t\t\t\t} :\n\t\t\t\tfunction() {\n\t\t\t\t\tif ( this.originalEvent ) {\n\t\t\t\t\t\t\treturn this.originalEvent[ name ];\n\t\t\t\t\t}\n\t\t\t\t},\n\n\t\t\tset: function( value ) {\n\t\t\t\tObject.defineProperty( this, name, {\n\t\t\t\t\tenumerable: true,\n\t\t\t\t\tconfigurable: true,\n\t\t\t\t\twritable: true,\n\t\t\t\t\tvalue: value\n\t\t\t\t} );\n\t\t\t}\n\t\t} );\n\t},\n\n\tfix: function( originalEvent ) {\n\t\treturn originalEvent[ jQuery.expando ] ?\n\t\t\toriginalEvent :\n\t\t\tnew jQuery.Event( originalEvent );\n\t},\n\n\tspecial: {\n\t\tload: {\n\n\t\t\t// Prevent triggered image.load events from bubbling to window.load\n\t\t\tnoBubble: true\n\t\t},\n\t\tclick: {\n\n\t\t\t// Utilize native event to ensure correct state for checkable inputs\n\t\t\tsetup: function( data ) {\n\n\t\t\t\t// For mutual compressibility with _default, replace `this` access with a local var.\n\t\t\t\t// `|| data` is dead code meant only to preserve the variable through minification.\n\t\t\t\tvar el = this || data;\n\n\t\t\t\t// Claim the first handler\n\t\t\t\tif ( rcheckableType.test( el.type ) &&\n\t\t\t\t\tel.click && nodeName( el, \"input\" ) ) {\n\n\t\t\t\t\t// dataPriv.set( el, \"click\", ... )\n\t\t\t\t\tleverageNative( el, \"click\", returnTrue );\n\t\t\t\t}\n\n\t\t\t\t// Return false to allow normal processing in the caller\n\t\t\t\treturn false;\n\t\t\t},\n\t\t\ttrigger: function( data ) {\n\n\t\t\t\t// For mutual compressibility with _default, replace `this` access with a local var.\n\t\t\t\t// `|| data` is dead code meant only to preserve the variable through minification.\n\t\t\t\tvar el = this || data;\n\n\t\t\t\t// Force setup before triggering a click\n\t\t\t\tif ( rcheckableType.test( el.type ) &&\n\t\t\t\t\tel.click && nodeName( el, \"input\" ) ) {\n\n\t\t\t\t\tleverageNative( el, \"click\" );\n\t\t\t\t}\n\n\t\t\t\t// Return non-false to allow normal event-path propagation\n\t\t\t\treturn true;\n\t\t\t},\n\n\t\t\t// For cross-browser consistency, suppress native .click() on links\n\t\t\t// Also prevent it if we're currently inside a leveraged native-event stack\n\t\t\t_default: function( event ) {\n\t\t\t\tvar target = event.target;\n\t\t\t\treturn rcheckableType.test( target.type ) &&\n\t\t\t\t\ttarget.click && nodeName( target, \"input\" ) &&\n\t\t\t\t\tdataPriv.get( target, \"click\" ) ||\n\t\t\t\t\tnodeName( target, \"a\" );\n\t\t\t}\n\t\t},\n\n\t\tbeforeunload: {\n\t\t\tpostDispatch: function( event ) {\n\n\t\t\t\t// Support: Firefox 20+\n\t\t\t\t// Firefox doesn't alert if the returnValue field is not set.\n\t\t\t\tif ( event.result !== undefined && event.originalEvent ) {\n\t\t\t\t\tevent.originalEvent.returnValue = event.result;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n};\n\n// Ensure the presence of an event listener that handles manually-triggered\n// synthetic events by interrupting progress until reinvoked in response to\n// *native* events that it fires directly, ensuring that state changes have\n// already occurred before other listeners are invoked.\nfunction leverageNative( el, type, expectSync ) {\n\n\t// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add\n\tif ( !expectSync ) {\n\t\tif ( dataPriv.get( el, type ) === undefined ) {\n\t\t\tjQuery.event.add( el, type, returnTrue );\n\t\t}\n\t\treturn;\n\t}\n\n\t// Register the controller as a special universal handler for all event namespaces\n\tdataPriv.set( el, type, false );\n\tjQuery.event.add( el, type, {\n\t\tnamespace: false,\n\t\thandler: function( event ) {\n\t\t\tvar notAsync, result,\n\t\t\t\tsaved = dataPriv.get( this, type );\n\n\t\t\tif ( ( event.isTrigger & 1 ) && this[ type ] ) {\n\n\t\t\t\t// Interrupt processing of the outer synthetic .trigger()ed event\n\t\t\t\t// Saved data should be false in such cases, but might be a leftover capture object\n\t\t\t\t// from an async native handler (gh-4350)\n\t\t\t\tif ( !saved.length ) {\n\n\t\t\t\t\t// Store arguments for use when handling the inner native event\n\t\t\t\t\t// There will always be at least one argument (an event object), so this array\n\t\t\t\t\t// will not be confused with a leftover capture object.\n\t\t\t\t\tsaved = slice.call( arguments );\n\t\t\t\t\tdataPriv.set( this, type, saved );\n\n\t\t\t\t\t// Trigger the native event and capture its result\n\t\t\t\t\t// Support: IE <=9 - 11+\n\t\t\t\t\t// focus() and blur() are asynchronous\n\t\t\t\t\tnotAsync = expectSync( this, type );\n\t\t\t\t\tthis[ type ]();\n\t\t\t\t\tresult = dataPriv.get( this, type );\n\t\t\t\t\tif ( saved !== result || notAsync ) {\n\t\t\t\t\t\tdataPriv.set( this, type, false );\n\t\t\t\t\t} else {\n\t\t\t\t\t\tresult = {};\n\t\t\t\t\t}\n\t\t\t\t\tif ( saved !== result ) {\n\n\t\t\t\t\t\t// Cancel the outer synthetic event\n\t\t\t\t\t\tevent.stopImmediatePropagation();\n\t\t\t\t\t\tevent.preventDefault();\n\t\t\t\t\t\treturn result.value;\n\t\t\t\t\t}\n\n\t\t\t\t// If this is an inner synthetic event for an event with a bubbling surrogate\n\t\t\t\t// (focus or blur), assume that the surrogate already propagated from triggering the\n\t\t\t\t// native event and prevent that from happening again here.\n\t\t\t\t// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the\n\t\t\t\t// bubbling surrogate propagates *after* the non-bubbling base), but that seems\n\t\t\t\t// less bad than duplication.\n\t\t\t\t} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {\n\t\t\t\t\tevent.stopPropagation();\n\t\t\t\t}\n\n\t\t\t// If this is a native event triggered above, everything is now in order\n\t\t\t// Fire an inner synthetic event with the original arguments\n\t\t\t} else if ( saved.length ) {\n\n\t\t\t\t// ...and capture the result\n\t\t\t\tdataPriv.set( this, type, {\n\t\t\t\t\tvalue: jQuery.event.trigger(\n\n\t\t\t\t\t\t// Support: IE <=9 - 11+\n\t\t\t\t\t\t// Extend with the prototype to reset the above stopImmediatePropagation()\n\t\t\t\t\t\tjQuery.extend( saved[ 0 ], jQuery.Event.prototype ),\n\t\t\t\t\t\tsaved.slice( 1 ),\n\t\t\t\t\t\tthis\n\t\t\t\t\t)\n\t\t\t\t} );\n\n\t\t\t\t// Abort handling of the native event\n\t\t\t\tevent.stopImmediatePropagation();\n\t\t\t}\n\t\t}\n\t} );\n}\n\njQuery.removeEvent = function( elem, type, handle ) {\n\n\t// This \"if\" is needed for plain objects\n\tif ( elem.removeEventListener ) {\n\t\telem.removeEventListener( type, handle );\n\t}\n};\n\njQuery.Event = function( src, props ) {\n\n\t// Allow instantiation without the 'new' keyword\n\tif ( !( this instanceof jQuery.Event ) ) {\n\t\treturn new jQuery.Event( src, props );\n\t}\n\n\t// Event object\n\tif ( src && src.type ) {\n\t\tthis.originalEvent = src;\n\t\tthis.type = src.type;\n\n\t\t// Events bubbling up the document may have been marked as prevented\n\t\t// by a handler lower down the tree; reflect the correct value.\n\t\tthis.isDefaultPrevented = src.defaultPrevented ||\n\t\t\t\tsrc.defaultPrevented === undefined &&\n\n\t\t\t\t// Support: Android <=2.3 only\n\t\t\t\tsrc.returnValue === false ?\n\t\t\treturnTrue :\n\t\t\treturnFalse;\n\n\t\t// Create target properties\n\t\t// Support: Safari <=6 - 7 only\n\t\t// Target should not be a text node (#504, #13143)\n\t\tthis.target = ( src.target && src.target.nodeType === 3 ) ?\n\t\t\tsrc.target.parentNode :\n\t\t\tsrc.target;\n\n\t\tthis.currentTarget = src.currentTarget;\n\t\tthis.relatedTarget = src.relatedTarget;\n\n\t// Event type\n\t} else {\n\t\tthis.type = src;\n\t}\n\n\t// Put explicitly provided properties onto the event object\n\tif ( props ) {\n\t\tjQuery.extend( this, props );\n\t}\n\n\t// Create a timestamp if incoming event doesn't have one\n\tthis.timeStamp = src && src.timeStamp || Date.now();\n\n\t// Mark it as fixed\n\tthis[ jQuery.expando ] = true;\n};\n\n// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding\n// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html\njQuery.Event.prototype = {\n\tconstructor: jQuery.Event,\n\tisDefaultPrevented: returnFalse,\n\tisPropagationStopped: returnFalse,\n\tisImmediatePropagationStopped: returnFalse,\n\tisSimulated: false,\n\n\tpreventDefault: function() {\n\t\tvar e = this.originalEvent;\n\n\t\tthis.isDefaultPrevented = returnTrue;\n\n\t\tif ( e && !this.isSimulated ) {\n\t\t\te.preventDefault();\n\t\t}\n\t},\n\tstopPropagation: function() {\n\t\tvar e = this.originalEvent;\n\n\t\tthis.isPropagationStopped = returnTrue;\n\n\t\tif ( e && !this.isSimulated ) {\n\t\t\te.stopPropagation();\n\t\t}\n\t},\n\tstopImmediatePropagation: function() {\n\t\tvar e = this.originalEvent;\n\n\t\tthis.isImmediatePropagationStopped = returnTrue;\n\n\t\tif ( e && !this.isSimulated ) {\n\t\t\te.stopImmediatePropagation();\n\t\t}\n\n\t\tthis.stopPropagation();\n\t}\n};\n\n// Includes all common event props including KeyEvent and MouseEvent specific props\njQuery.each( {\n\taltKey: true,\n\tbubbles: true,\n\tcancelable: true,\n\tchangedTouches: true,\n\tctrlKey: true,\n\tdetail: true,\n\teventPhase: true,\n\tmetaKey: true,\n\tpageX: true,\n\tpageY: true,\n\tshiftKey: true,\n\tview: true,\n\t\"char\": true,\n\tcode: true,\n\tcharCode: true,\n\tkey: true,\n\tkeyCode: true,\n\tbutton: true,\n\tbuttons: true,\n\tclientX: true,\n\tclientY: true,\n\toffsetX: true,\n\toffsetY: true,\n\tpointerId: true,\n\tpointerType: true,\n\tscreenX: true,\n\tscreenY: true,\n\ttargetTouches: true,\n\ttoElement: true,\n\ttouches: true,\n\n\twhich: function( event ) {\n\t\tvar button = event.button;\n\n\t\t// Add which for key events\n\t\tif ( event.which == null && rkeyEvent.test( event.type ) ) {\n\t\t\treturn event.charCode != null ? event.charCode : event.keyCode;\n\t\t}\n\n\t\t// Add which for click: 1 === left; 2 === middle; 3 === right\n\t\tif ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {\n\t\t\tif ( button & 1 ) {\n\t\t\t\treturn 1;\n\t\t\t}\n\n\t\t\tif ( button & 2 ) {\n\t\t\t\treturn 3;\n\t\t\t}\n\n\t\t\tif ( button & 4 ) {\n\t\t\t\treturn 2;\n\t\t\t}\n\n\t\t\treturn 0;\n\t\t}\n\n\t\treturn event.which;\n\t}\n}, jQuery.event.addProp );\n\njQuery.each( { focus: \"focusin\", blur: \"focusout\" }, function( type, delegateType ) {\n\tjQuery.event.special[ type ] = {\n\n\t\t// Utilize native event if possible so blur/focus sequence is correct\n\t\tsetup: function() {\n\n\t\t\t// Claim the first handler\n\t\t\t// dataPriv.set( this, \"focus\", ... )\n\t\t\t// dataPriv.set( this, \"blur\", ... )\n\t\t\tleverageNative( this, type, expectSync );\n\n\t\t\t// Return false to allow normal processing in the caller\n\t\t\treturn false;\n\t\t},\n\t\ttrigger: function() {\n\n\t\t\t// Force setup before trigger\n\t\t\tleverageNative( this, type );\n\n\t\t\t// Return non-false to allow normal event-path propagation\n\t\t\treturn true;\n\t\t},\n\n\t\tdelegateType: delegateType\n\t};\n} );\n\n// Create mouseenter/leave events using mouseover/out and event-time checks\n// so that event delegation works in jQuery.\n// Do the same for pointerenter/pointerleave and pointerover/pointerout\n//\n// Support: Safari 7 only\n// Safari sends mouseenter too often; see:\n// https://bugs.chromium.org/p/chromium/issues/detail?id=470258\n// for the description of the bug (it existed in older Chrome versions as well).\njQuery.each( {\n\tmouseenter: \"mouseover\",\n\tmouseleave: \"mouseout\",\n\tpointerenter: \"pointerover\",\n\tpointerleave: \"pointerout\"\n}, function( orig, fix ) {\n\tjQuery.event.special[ orig ] = {\n\t\tdelegateType: fix,\n\t\tbindType: fix,\n\n\t\thandle: function( event ) {\n\t\t\tvar ret,\n\t\t\t\ttarget = this,\n\t\t\t\trelated = event.relatedTarget,\n\t\t\t\thandleObj = event.handleObj;\n\n\t\t\t// For mouseenter/leave call the handler if related is outside the target.\n\t\t\t// NB: No relatedTarget if the mouse left/entered the browser window\n\t\t\tif ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {\n\t\t\t\tevent.type = handleObj.origType;\n\t\t\t\tret = handleObj.handler.apply( this, arguments );\n\t\t\t\tevent.type = fix;\n\t\t\t}\n\t\t\treturn ret;\n\t\t}\n\t};\n} );\n\njQuery.fn.extend( {\n\n\ton: function( types, selector, data, fn ) {\n\t\treturn on( this, types, selector, data, fn );\n\t},\n\tone: function( types, selector, data, fn ) {\n\t\treturn on( this, types, selector, data, fn, 1 );\n\t},\n\toff: function( types, selector, fn ) {\n\t\tvar handleObj, type;\n\t\tif ( types && types.preventDefault && types.handleObj ) {\n\n\t\t\t// ( event )  dispatched jQuery.Event\n\t\t\thandleObj = types.handleObj;\n\t\t\tjQuery( types.delegateTarget ).off(\n\t\t\t\thandleObj.namespace ?\n\t\t\t\t\thandleObj.origType + \".\" + handleObj.namespace :\n\t\t\t\t\thandleObj.origType,\n\t\t\t\thandleObj.selector,\n\t\t\t\thandleObj.handler\n\t\t\t);\n\t\t\treturn this;\n\t\t}\n\t\tif ( typeof types === \"object\" ) {\n\n\t\t\t// ( types-object [, selector] )\n\t\t\tfor ( type in types ) {\n\t\t\t\tthis.off( type, selector, types[ type ] );\n\t\t\t}\n\t\t\treturn this;\n\t\t}\n\t\tif ( selector === false || typeof selector === \"function\" ) {\n\n\t\t\t// ( types [, fn] )\n\t\t\tfn = selector;\n\t\t\tselector = undefined;\n\t\t}\n\t\tif ( fn === false ) {\n\t\t\tfn = returnFalse;\n\t\t}\n\t\treturn this.each( function() {\n\t\t\tjQuery.event.remove( this, types, fn, selector );\n\t\t} );\n\t}\n} );\n\n\nvar\n\n\t// Support: IE <=10 - 11, Edge 12 - 13 only\n\t// In IE/Edge using regex groups here causes severe slowdowns.\n\t// See https://connect.microsoft.com/IE/feedback/details/1736512/\n\trnoInnerhtml = /<script|<style|<link/i,\n\n\t// checked=\"checked\" or checked\n\trchecked = /checked\\s*(?:[^=]|=\\s*.checked.)/i,\n\trcleanScript = /^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*$/g;\n\n// Prefer a tbody over its parent table for containing new rows\nfunction manipulationTarget( elem, content ) {\n\tif ( nodeName( elem, \"table\" ) &&\n\t\tnodeName( content.nodeType !== 11 ? content : content.firstChild, \"tr\" ) ) {\n\n\t\treturn jQuery( elem ).children( \"tbody\" )[ 0 ] || elem;\n\t}\n\n\treturn elem;\n}\n\n// Replace/restore the type attribute of script elements for safe DOM manipulation\nfunction disableScript( elem ) {\n\telem.type = ( elem.getAttribute( \"type\" ) !== null ) + \"/\" + elem.type;\n\treturn elem;\n}\nfunction restoreScript( elem ) {\n\tif ( ( elem.type || \"\" ).slice( 0, 5 ) === \"true/\" ) {\n\t\telem.type = elem.type.slice( 5 );\n\t} else {\n\t\telem.removeAttribute( \"type\" );\n\t}\n\n\treturn elem;\n}\n\nfunction cloneCopyEvent( src, dest ) {\n\tvar i, l, type, pdataOld, udataOld, udataCur, events;\n\n\tif ( dest.nodeType !== 1 ) {\n\t\treturn;\n\t}\n\n\t// 1. Copy private data: events, handlers, etc.\n\tif ( dataPriv.hasData( src ) ) {\n\t\tpdataOld = dataPriv.get( src );\n\t\tevents = pdataOld.events;\n\n\t\tif ( events ) {\n\t\t\tdataPriv.remove( dest, \"handle events\" );\n\n\t\t\tfor ( type in events ) {\n\t\t\t\tfor ( i = 0, l = events[ type ].length; i < l; i++ ) {\n\t\t\t\t\tjQuery.event.add( dest, type, events[ type ][ i ] );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t// 2. Copy user data\n\tif ( dataUser.hasData( src ) ) {\n\t\tudataOld = dataUser.access( src );\n\t\tudataCur = jQuery.extend( {}, udataOld );\n\n\t\tdataUser.set( dest, udataCur );\n\t}\n}\n\n// Fix IE bugs, see support tests\nfunction fixInput( src, dest ) {\n\tvar nodeName = dest.nodeName.toLowerCase();\n\n\t// Fails to persist the checked state of a cloned checkbox or radio button.\n\tif ( nodeName === \"input\" && rcheckableType.test( src.type ) ) {\n\t\tdest.checked = src.checked;\n\n\t// Fails to return the selected option to the default selected state when cloning options\n\t} else if ( nodeName === \"input\" || nodeName === \"textarea\" ) {\n\t\tdest.defaultValue = src.defaultValue;\n\t}\n}\n\nfunction domManip( collection, args, callback, ignored ) {\n\n\t// Flatten any nested arrays\n\targs = flat( args );\n\n\tvar fragment, first, scripts, hasScripts, node, doc,\n\t\ti = 0,\n\t\tl = collection.length,\n\t\tiNoClone = l - 1,\n\t\tvalue = args[ 0 ],\n\t\tvalueIsFunction = isFunction( value );\n\n\t// We can't cloneNode fragments that contain checked, in WebKit\n\tif ( valueIsFunction ||\n\t\t\t( l > 1 && typeof value === \"string\" &&\n\t\t\t\t!support.checkClone && rchecked.test( value ) ) ) {\n\t\treturn collection.each( function( index ) {\n\t\t\tvar self = collection.eq( index );\n\t\t\tif ( valueIsFunction ) {\n\t\t\t\targs[ 0 ] = value.call( this, index, self.html() );\n\t\t\t}\n\t\t\tdomManip( self, args, callback, ignored );\n\t\t} );\n\t}\n\n\tif ( l ) {\n\t\tfragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );\n\t\tfirst = fragment.firstChild;\n\n\t\tif ( fragment.childNodes.length === 1 ) {\n\t\t\tfragment = first;\n\t\t}\n\n\t\t// Require either new content or an interest in ignored elements to invoke the callback\n\t\tif ( first || ignored ) {\n\t\t\tscripts = jQuery.map( getAll( fragment, \"script\" ), disableScript );\n\t\t\thasScripts = scripts.length;\n\n\t\t\t// Use the original fragment for the last item\n\t\t\t// instead of the first because it can end up\n\t\t\t// being emptied incorrectly in certain situations (#8070).\n\t\t\tfor ( ; i < l; i++ ) {\n\t\t\t\tnode = fragment;\n\n\t\t\t\tif ( i !== iNoClone ) {\n\t\t\t\t\tnode = jQuery.clone( node, true, true );\n\n\t\t\t\t\t// Keep references to cloned scripts for later restoration\n\t\t\t\t\tif ( hasScripts ) {\n\n\t\t\t\t\t\t// Support: Android <=4.0 only, PhantomJS 1 only\n\t\t\t\t\t\t// push.apply(_, arraylike) throws on ancient WebKit\n\t\t\t\t\t\tjQuery.merge( scripts, getAll( node, \"script\" ) );\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tcallback.call( collection[ i ], node, i );\n\t\t\t}\n\n\t\t\tif ( hasScripts ) {\n\t\t\t\tdoc = scripts[ scripts.length - 1 ].ownerDocument;\n\n\t\t\t\t// Reenable scripts\n\t\t\t\tjQuery.map( scripts, restoreScript );\n\n\t\t\t\t// Evaluate executable scripts on first document insertion\n\t\t\t\tfor ( i = 0; i < hasScripts; i++ ) {\n\t\t\t\t\tnode = scripts[ i ];\n\t\t\t\t\tif ( rscriptType.test( node.type || \"\" ) &&\n\t\t\t\t\t\t!dataPriv.access( node, \"globalEval\" ) &&\n\t\t\t\t\t\tjQuery.contains( doc, node ) ) {\n\n\t\t\t\t\t\tif ( node.src && ( node.type || \"\" ).toLowerCase()  !== \"module\" ) {\n\n\t\t\t\t\t\t\t// Optional AJAX dependency, but won't run scripts if not present\n\t\t\t\t\t\t\tif ( jQuery._evalUrl && !node.noModule ) {\n\t\t\t\t\t\t\t\tjQuery._evalUrl( node.src, {\n\t\t\t\t\t\t\t\t\tnonce: node.nonce || node.getAttribute( \"nonce\" )\n\t\t\t\t\t\t\t\t}, doc );\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tDOMEval( node.textContent.replace( rcleanScript, \"\" ), node, doc );\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn collection;\n}\n\nfunction remove( elem, selector, keepData ) {\n\tvar node,\n\t\tnodes = selector ? jQuery.filter( selector, elem ) : elem,\n\t\ti = 0;\n\n\tfor ( ; ( node = nodes[ i ] ) != null; i++ ) {\n\t\tif ( !keepData && node.nodeType === 1 ) {\n\t\t\tjQuery.cleanData( getAll( node ) );\n\t\t}\n\n\t\tif ( node.parentNode ) {\n\t\t\tif ( keepData && isAttached( node ) ) {\n\t\t\t\tsetGlobalEval( getAll( node, \"script\" ) );\n\t\t\t}\n\t\t\tnode.parentNode.removeChild( node );\n\t\t}\n\t}\n\n\treturn elem;\n}\n\njQuery.extend( {\n\thtmlPrefilter: function( html ) {\n\t\treturn html;\n\t},\n\n\tclone: function( elem, dataAndEvents, deepDataAndEvents ) {\n\t\tvar i, l, srcElements, destElements,\n\t\t\tclone = elem.cloneNode( true ),\n\t\t\tinPage = isAttached( elem );\n\n\t\t// Fix IE cloning issues\n\t\tif ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&\n\t\t\t\t!jQuery.isXMLDoc( elem ) ) {\n\n\t\t\t// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2\n\t\t\tdestElements = getAll( clone );\n\t\t\tsrcElements = getAll( elem );\n\n\t\t\tfor ( i = 0, l = srcElements.length; i < l; i++ ) {\n\t\t\t\tfixInput( srcElements[ i ], destElements[ i ] );\n\t\t\t}\n\t\t}\n\n\t\t// Copy the events from the original to the clone\n\t\tif ( dataAndEvents ) {\n\t\t\tif ( deepDataAndEvents ) {\n\t\t\t\tsrcElements = srcElements || getAll( elem );\n\t\t\t\tdestElements = destElements || getAll( clone );\n\n\t\t\t\tfor ( i = 0, l = srcElements.length; i < l; i++ ) {\n\t\t\t\t\tcloneCopyEvent( srcElements[ i ], destElements[ i ] );\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tcloneCopyEvent( elem, clone );\n\t\t\t}\n\t\t}\n\n\t\t// Preserve script evaluation history\n\t\tdestElements = getAll( clone, \"script\" );\n\t\tif ( destElements.length > 0 ) {\n\t\t\tsetGlobalEval( destElements, !inPage && getAll( elem, \"script\" ) );\n\t\t}\n\n\t\t// Return the cloned set\n\t\treturn clone;\n\t},\n\n\tcleanData: function( elems ) {\n\t\tvar data, elem, type,\n\t\t\tspecial = jQuery.event.special,\n\t\t\ti = 0;\n\n\t\tfor ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {\n\t\t\tif ( acceptData( elem ) ) {\n\t\t\t\tif ( ( data = elem[ dataPriv.expando ] ) ) {\n\t\t\t\t\tif ( data.events ) {\n\t\t\t\t\t\tfor ( type in data.events ) {\n\t\t\t\t\t\t\tif ( special[ type ] ) {\n\t\t\t\t\t\t\t\tjQuery.event.remove( elem, type );\n\n\t\t\t\t\t\t\t// This is a shortcut to avoid jQuery.event.remove's overhead\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tjQuery.removeEvent( elem, type, data.handle );\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// Support: Chrome <=35 - 45+\n\t\t\t\t\t// Assign undefined instead of using delete, see Data#remove\n\t\t\t\t\telem[ dataPriv.expando ] = undefined;\n\t\t\t\t}\n\t\t\t\tif ( elem[ dataUser.expando ] ) {\n\n\t\t\t\t\t// Support: Chrome <=35 - 45+\n\t\t\t\t\t// Assign undefined instead of using delete, see Data#remove\n\t\t\t\t\telem[ dataUser.expando ] = undefined;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n} );\n\njQuery.fn.extend( {\n\tdetach: function( selector ) {\n\t\treturn remove( this, selector, true );\n\t},\n\n\tremove: function( selector ) {\n\t\treturn remove( this, selector );\n\t},\n\n\ttext: function( value ) {\n\t\treturn access( this, function( value ) {\n\t\t\treturn value === undefined ?\n\t\t\t\tjQuery.text( this ) :\n\t\t\t\tthis.empty().each( function() {\n\t\t\t\t\tif ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {\n\t\t\t\t\t\tthis.textContent = value;\n\t\t\t\t\t}\n\t\t\t\t} );\n\t\t}, null, value, arguments.length );\n\t},\n\n\tappend: function() {\n\t\treturn domManip( this, arguments, function( elem ) {\n\t\t\tif ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {\n\t\t\t\tvar target = manipulationTarget( this, elem );\n\t\t\t\ttarget.appendChild( elem );\n\t\t\t}\n\t\t} );\n\t},\n\n\tprepend: function() {\n\t\treturn domManip( this, arguments, function( elem ) {\n\t\t\tif ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {\n\t\t\t\tvar target = manipulationTarget( this, elem );\n\t\t\t\ttarget.insertBefore( elem, target.firstChild );\n\t\t\t}\n\t\t} );\n\t},\n\n\tbefore: function() {\n\t\treturn domManip( this, arguments, function( elem ) {\n\t\t\tif ( this.parentNode ) {\n\t\t\t\tthis.parentNode.insertBefore( elem, this );\n\t\t\t}\n\t\t} );\n\t},\n\n\tafter: function() {\n\t\treturn domManip( this, arguments, function( elem ) {\n\t\t\tif ( this.parentNode ) {\n\t\t\t\tthis.parentNode.insertBefore( elem, this.nextSibling );\n\t\t\t}\n\t\t} );\n\t},\n\n\tempty: function() {\n\t\tvar elem,\n\t\t\ti = 0;\n\n\t\tfor ( ; ( elem = this[ i ] ) != null; i++ ) {\n\t\t\tif ( elem.nodeType === 1 ) {\n\n\t\t\t\t// Prevent memory leaks\n\t\t\t\tjQuery.cleanData( getAll( elem, false ) );\n\n\t\t\t\t// Remove any remaining nodes\n\t\t\t\telem.textContent = \"\";\n\t\t\t}\n\t\t}\n\n\t\treturn this;\n\t},\n\n\tclone: function( dataAndEvents, deepDataAndEvents ) {\n\t\tdataAndEvents = dataAndEvents == null ? false : dataAndEvents;\n\t\tdeepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;\n\n\t\treturn this.map( function() {\n\t\t\treturn jQuery.clone( this, dataAndEvents, deepDataAndEvents );\n\t\t} );\n\t},\n\n\thtml: function( value ) {\n\t\treturn access( this, function( value ) {\n\t\t\tvar elem = this[ 0 ] || {},\n\t\t\t\ti = 0,\n\t\t\t\tl = this.length;\n\n\t\t\tif ( value === undefined && elem.nodeType === 1 ) {\n\t\t\t\treturn elem.innerHTML;\n\t\t\t}\n\n\t\t\t// See if we can take a shortcut and just use innerHTML\n\t\t\tif ( typeof value === \"string\" && !rnoInnerhtml.test( value ) &&\n\t\t\t\t!wrapMap[ ( rtagName.exec( value ) || [ \"\", \"\" ] )[ 1 ].toLowerCase() ] ) {\n\n\t\t\t\tvalue = jQuery.htmlPrefilter( value );\n\n\t\t\t\ttry {\n\t\t\t\t\tfor ( ; i < l; i++ ) {\n\t\t\t\t\t\telem = this[ i ] || {};\n\n\t\t\t\t\t\t// Remove element nodes and prevent memory leaks\n\t\t\t\t\t\tif ( elem.nodeType === 1 ) {\n\t\t\t\t\t\t\tjQuery.cleanData( getAll( elem, false ) );\n\t\t\t\t\t\t\telem.innerHTML = value;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\telem = 0;\n\n\t\t\t\t// If using innerHTML throws an exception, use the fallback method\n\t\t\t\t} catch ( e ) {}\n\t\t\t}\n\n\t\t\tif ( elem ) {\n\t\t\t\tthis.empty().append( value );\n\t\t\t}\n\t\t}, null, value, arguments.length );\n\t},\n\n\treplaceWith: function() {\n\t\tvar ignored = [];\n\n\t\t// Make the changes, replacing each non-ignored context element with the new content\n\t\treturn domManip( this, arguments, function( elem ) {\n\t\t\tvar parent = this.parentNode;\n\n\t\t\tif ( jQuery.inArray( this, ignored ) < 0 ) {\n\t\t\t\tjQuery.cleanData( getAll( this ) );\n\t\t\t\tif ( parent ) {\n\t\t\t\t\tparent.replaceChild( elem, this );\n\t\t\t\t}\n\t\t\t}\n\n\t\t// Force callback invocation\n\t\t}, ignored );\n\t}\n} );\n\njQuery.each( {\n\tappendTo: \"append\",\n\tprependTo: \"prepend\",\n\tinsertBefore: \"before\",\n\tinsertAfter: \"after\",\n\treplaceAll: \"replaceWith\"\n}, function( name, original ) {\n\tjQuery.fn[ name ] = function( selector ) {\n\t\tvar elems,\n\t\t\tret = [],\n\t\t\tinsert = jQuery( selector ),\n\t\t\tlast = insert.length - 1,\n\t\t\ti = 0;\n\n\t\tfor ( ; i <= last; i++ ) {\n\t\t\telems = i === last ? this : this.clone( true );\n\t\t\tjQuery( insert[ i ] )[ original ]( elems );\n\n\t\t\t// Support: Android <=4.0 only, PhantomJS 1 only\n\t\t\t// .get() because push.apply(_, arraylike) throws on ancient WebKit\n\t\t\tpush.apply( ret, elems.get() );\n\t\t}\n\n\t\treturn this.pushStack( ret );\n\t};\n} );\nvar rnumnonpx = new RegExp( \"^(\" + pnum + \")(?!px)[a-z%]+$\", \"i\" );\n\nvar getStyles = function( elem ) {\n\n\t\t// Support: IE <=11 only, Firefox <=30 (#15098, #14150)\n\t\t// IE throws on elements created in popups\n\t\t// FF meanwhile throws on frame elements through \"defaultView.getComputedStyle\"\n\t\tvar view = elem.ownerDocument.defaultView;\n\n\t\tif ( !view || !view.opener ) {\n\t\t\tview = window;\n\t\t}\n\n\t\treturn view.getComputedStyle( elem );\n\t};\n\nvar swap = function( elem, options, callback ) {\n\tvar ret, name,\n\t\told = {};\n\n\t// Remember the old values, and insert the new ones\n\tfor ( name in options ) {\n\t\told[ name ] = elem.style[ name ];\n\t\telem.style[ name ] = options[ name ];\n\t}\n\n\tret = callback.call( elem );\n\n\t// Revert the old values\n\tfor ( name in options ) {\n\t\telem.style[ name ] = old[ name ];\n\t}\n\n\treturn ret;\n};\n\n\nvar rboxStyle = new RegExp( cssExpand.join( \"|\" ), \"i\" );\n\n\n\n( function() {\n\n\t// Executing both pixelPosition & boxSizingReliable tests require only one layout\n\t// so they're executed at the same time to save the second computation.\n\tfunction computeStyleTests() {\n\n\t\t// This is a singleton, we need to execute it only once\n\t\tif ( !div ) {\n\t\t\treturn;\n\t\t}\n\n\t\tcontainer.style.cssText = \"position:absolute;left:-11111px;width:60px;\" +\n\t\t\t\"margin-top:1px;padding:0;border:0\";\n\t\tdiv.style.cssText =\n\t\t\t\"position:relative;display:block;box-sizing:border-box;overflow:scroll;\" +\n\t\t\t\"margin:auto;border:1px;padding:1px;\" +\n\t\t\t\"width:60%;top:1%\";\n\t\tdocumentElement.appendChild( container ).appendChild( div );\n\n\t\tvar divStyle = window.getComputedStyle( div );\n\t\tpixelPositionVal = divStyle.top !== \"1%\";\n\n\t\t// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44\n\t\treliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;\n\n\t\t// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3\n\t\t// Some styles come back with percentage values, even though they shouldn't\n\t\tdiv.style.right = \"60%\";\n\t\tpixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;\n\n\t\t// Support: IE 9 - 11 only\n\t\t// Detect misreporting of content dimensions for box-sizing:border-box elements\n\t\tboxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;\n\n\t\t// Support: IE 9 only\n\t\t// Detect overflow:scroll screwiness (gh-3699)\n\t\t// Support: Chrome <=64\n\t\t// Don't get tricked when zoom affects offsetWidth (gh-4029)\n\t\tdiv.style.position = \"absolute\";\n\t\tscrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;\n\n\t\tdocumentElement.removeChild( container );\n\n\t\t// Nullify the div so it wouldn't be stored in the memory and\n\t\t// it will also be a sign that checks already performed\n\t\tdiv = null;\n\t}\n\n\tfunction roundPixelMeasures( measure ) {\n\t\treturn Math.round( parseFloat( measure ) );\n\t}\n\n\tvar pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,\n\t\treliableTrDimensionsVal, reliableMarginLeftVal,\n\t\tcontainer = document.createElement( \"div\" ),\n\t\tdiv = document.createElement( \"div\" );\n\n\t// Finish early in limited (non-browser) environments\n\tif ( !div.style ) {\n\t\treturn;\n\t}\n\n\t// Support: IE <=9 - 11 only\n\t// Style of cloned element affects source element cloned (#8908)\n\tdiv.style.backgroundClip = \"content-box\";\n\tdiv.cloneNode( true ).style.backgroundClip = \"\";\n\tsupport.clearCloneStyle = div.style.backgroundClip === \"content-box\";\n\n\tjQuery.extend( support, {\n\t\tboxSizingReliable: function() {\n\t\t\tcomputeStyleTests();\n\t\t\treturn boxSizingReliableVal;\n\t\t},\n\t\tpixelBoxStyles: function() {\n\t\t\tcomputeStyleTests();\n\t\t\treturn pixelBoxStylesVal;\n\t\t},\n\t\tpixelPosition: function() {\n\t\t\tcomputeStyleTests();\n\t\t\treturn pixelPositionVal;\n\t\t},\n\t\treliableMarginLeft: function() {\n\t\t\tcomputeStyleTests();\n\t\t\treturn reliableMarginLeftVal;\n\t\t},\n\t\tscrollboxSize: function() {\n\t\t\tcomputeStyleTests();\n\t\t\treturn scrollboxSizeVal;\n\t\t},\n\n\t\t// Support: IE 9 - 11+, Edge 15 - 18+\n\t\t// IE/Edge misreport `getComputedStyle` of table rows with width/height\n\t\t// set in CSS while `offset*` properties report correct values.\n\t\t// Behavior in IE 9 is more subtle than in newer versions & it passes\n\t\t// some versions of this test; make sure not to make it pass there!\n\t\treliableTrDimensions: function() {\n\t\t\tvar table, tr, trChild, trStyle;\n\t\t\tif ( reliableTrDimensionsVal == null ) {\n\t\t\t\ttable = document.createElement( \"table\" );\n\t\t\t\ttr = document.createElement( \"tr\" );\n\t\t\t\ttrChild = document.createElement( \"div\" );\n\n\t\t\t\ttable.style.cssText = \"position:absolute;left:-11111px\";\n\t\t\t\ttr.style.height = \"1px\";\n\t\t\t\ttrChild.style.height = \"9px\";\n\n\t\t\t\tdocumentElement\n\t\t\t\t\t.appendChild( table )\n\t\t\t\t\t.appendChild( tr )\n\t\t\t\t\t.appendChild( trChild );\n\n\t\t\t\ttrStyle = window.getComputedStyle( tr );\n\t\t\t\treliableTrDimensionsVal = parseInt( trStyle.height ) > 3;\n\n\t\t\t\tdocumentElement.removeChild( table );\n\t\t\t}\n\t\t\treturn reliableTrDimensionsVal;\n\t\t}\n\t} );\n} )();\n\n\nfunction curCSS( elem, name, computed ) {\n\tvar width, minWidth, maxWidth, ret,\n\n\t\t// Support: Firefox 51+\n\t\t// Retrieving style before computed somehow\n\t\t// fixes an issue with getting wrong values\n\t\t// on detached elements\n\t\tstyle = elem.style;\n\n\tcomputed = computed || getStyles( elem );\n\n\t// getPropertyValue is needed for:\n\t//   .css('filter') (IE 9 only, #12537)\n\t//   .css('--customProperty) (#3144)\n\tif ( computed ) {\n\t\tret = computed.getPropertyValue( name ) || computed[ name ];\n\n\t\tif ( ret === \"\" && !isAttached( elem ) ) {\n\t\t\tret = jQuery.style( elem, name );\n\t\t}\n\n\t\t// A tribute to the \"awesome hack by Dean Edwards\"\n\t\t// Android Browser returns percentage for some values,\n\t\t// but width seems to be reliably pixels.\n\t\t// This is against the CSSOM draft spec:\n\t\t// https://drafts.csswg.org/cssom/#resolved-values\n\t\tif ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {\n\n\t\t\t// Remember the original values\n\t\t\twidth = style.width;\n\t\t\tminWidth = style.minWidth;\n\t\t\tmaxWidth = style.maxWidth;\n\n\t\t\t// Put in the new values to get a computed value out\n\t\t\tstyle.minWidth = style.maxWidth = style.width = ret;\n\t\t\tret = computed.width;\n\n\t\t\t// Revert the changed values\n\t\t\tstyle.width = width;\n\t\t\tstyle.minWidth = minWidth;\n\t\t\tstyle.maxWidth = maxWidth;\n\t\t}\n\t}\n\n\treturn ret !== undefined ?\n\n\t\t// Support: IE <=9 - 11 only\n\t\t// IE returns zIndex value as an integer.\n\t\tret + \"\" :\n\t\tret;\n}\n\n\nfunction addGetHookIf( conditionFn, hookFn ) {\n\n\t// Define the hook, we'll check on the first run if it's really needed.\n\treturn {\n\t\tget: function() {\n\t\t\tif ( conditionFn() ) {\n\n\t\t\t\t// Hook not needed (or it's not possible to use it due\n\t\t\t\t// to missing dependency), remove it.\n\t\t\t\tdelete this.get;\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t// Hook needed; redefine it so that the support test is not executed again.\n\t\t\treturn ( this.get = hookFn ).apply( this, arguments );\n\t\t}\n\t};\n}\n\n\nvar cssPrefixes = [ \"Webkit\", \"Moz\", \"ms\" ],\n\temptyStyle = document.createElement( \"div\" ).style,\n\tvendorProps = {};\n\n// Return a vendor-prefixed property or undefined\nfunction vendorPropName( name ) {\n\n\t// Check for vendor prefixed names\n\tvar capName = name[ 0 ].toUpperCase() + name.slice( 1 ),\n\t\ti = cssPrefixes.length;\n\n\twhile ( i-- ) {\n\t\tname = cssPrefixes[ i ] + capName;\n\t\tif ( name in emptyStyle ) {\n\t\t\treturn name;\n\t\t}\n\t}\n}\n\n// Return a potentially-mapped jQuery.cssProps or vendor prefixed property\nfunction finalPropName( name ) {\n\tvar final = jQuery.cssProps[ name ] || vendorProps[ name ];\n\n\tif ( final ) {\n\t\treturn final;\n\t}\n\tif ( name in emptyStyle ) {\n\t\treturn name;\n\t}\n\treturn vendorProps[ name ] = vendorPropName( name ) || name;\n}\n\n\nvar\n\n\t// Swappable if display is none or starts with table\n\t// except \"table\", \"table-cell\", or \"table-caption\"\n\t// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display\n\trdisplayswap = /^(none|table(?!-c[ea]).+)/,\n\trcustomProp = /^--/,\n\tcssShow = { position: \"absolute\", visibility: \"hidden\", display: \"block\" },\n\tcssNormalTransform = {\n\t\tletterSpacing: \"0\",\n\t\tfontWeight: \"400\"\n\t};\n\nfunction setPositiveNumber( _elem, value, subtract ) {\n\n\t// Any relative (+/-) values have already been\n\t// normalized at this point\n\tvar matches = rcssNum.exec( value );\n\treturn matches ?\n\n\t\t// Guard against undefined \"subtract\", e.g., when used as in cssHooks\n\t\tMath.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || \"px\" ) :\n\t\tvalue;\n}\n\nfunction boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {\n\tvar i = dimension === \"width\" ? 1 : 0,\n\t\textra = 0,\n\t\tdelta = 0;\n\n\t// Adjustment may not be necessary\n\tif ( box === ( isBorderBox ? \"border\" : \"content\" ) ) {\n\t\treturn 0;\n\t}\n\n\tfor ( ; i < 4; i += 2 ) {\n\n\t\t// Both box models exclude margin\n\t\tif ( box === \"margin\" ) {\n\t\t\tdelta += jQuery.css( elem, box + cssExpand[ i ], true, styles );\n\t\t}\n\n\t\t// If we get here with a content-box, we're seeking \"padding\" or \"border\" or \"margin\"\n\t\tif ( !isBorderBox ) {\n\n\t\t\t// Add padding\n\t\t\tdelta += jQuery.css( elem, \"padding\" + cssExpand[ i ], true, styles );\n\n\t\t\t// For \"border\" or \"margin\", add border\n\t\t\tif ( box !== \"padding\" ) {\n\t\t\t\tdelta += jQuery.css( elem, \"border\" + cssExpand[ i ] + \"Width\", true, styles );\n\n\t\t\t// But still keep track of it otherwise\n\t\t\t} else {\n\t\t\t\textra += jQuery.css( elem, \"border\" + cssExpand[ i ] + \"Width\", true, styles );\n\t\t\t}\n\n\t\t// If we get here with a border-box (content + padding + border), we're seeking \"content\" or\n\t\t// \"padding\" or \"margin\"\n\t\t} else {\n\n\t\t\t// For \"content\", subtract padding\n\t\t\tif ( box === \"content\" ) {\n\t\t\t\tdelta -= jQuery.css( elem, \"padding\" + cssExpand[ i ], true, styles );\n\t\t\t}\n\n\t\t\t// For \"content\" or \"padding\", subtract border\n\t\t\tif ( box !== \"margin\" ) {\n\t\t\t\tdelta -= jQuery.css( elem, \"border\" + cssExpand[ i ] + \"Width\", true, styles );\n\t\t\t}\n\t\t}\n\t}\n\n\t// Account for positive content-box scroll gutter when requested by providing computedVal\n\tif ( !isBorderBox && computedVal >= 0 ) {\n\n\t\t// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border\n\t\t// Assuming integer scroll gutter, subtract the rest and round down\n\t\tdelta += Math.max( 0, Math.ceil(\n\t\t\telem[ \"offset\" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -\n\t\t\tcomputedVal -\n\t\t\tdelta -\n\t\t\textra -\n\t\t\t0.5\n\n\t\t// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter\n\t\t// Use an explicit zero to avoid NaN (gh-3964)\n\t\t) ) || 0;\n\t}\n\n\treturn delta;\n}\n\nfunction getWidthOrHeight( elem, dimension, extra ) {\n\n\t// Start with computed style\n\tvar styles = getStyles( elem ),\n\n\t\t// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).\n\t\t// Fake content-box until we know it's needed to know the true value.\n\t\tboxSizingNeeded = !support.boxSizingReliable() || extra,\n\t\tisBorderBox = boxSizingNeeded &&\n\t\t\tjQuery.css( elem, \"boxSizing\", false, styles ) === \"border-box\",\n\t\tvalueIsBorderBox = isBorderBox,\n\n\t\tval = curCSS( elem, dimension, styles ),\n\t\toffsetProp = \"offset\" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );\n\n\t// Support: Firefox <=54\n\t// Return a confounding non-pixel value or feign ignorance, as appropriate.\n\tif ( rnumnonpx.test( val ) ) {\n\t\tif ( !extra ) {\n\t\t\treturn val;\n\t\t}\n\t\tval = \"auto\";\n\t}\n\n\n\t// Support: IE 9 - 11 only\n\t// Use offsetWidth/offsetHeight for when box sizing is unreliable.\n\t// In those cases, the computed value can be trusted to be border-box.\n\tif ( ( !support.boxSizingReliable() && isBorderBox ||\n\n\t\t// Support: IE 10 - 11+, Edge 15 - 18+\n\t\t// IE/Edge misreport `getComputedStyle` of table rows with width/height\n\t\t// set in CSS while `offset*` properties report correct values.\n\t\t// Interestingly, in some cases IE 9 doesn't suffer from this issue.\n\t\t!support.reliableTrDimensions() && nodeName( elem, \"tr\" ) ||\n\n\t\t// Fall back to offsetWidth/offsetHeight when value is \"auto\"\n\t\t// This happens for inline elements with no explicit setting (gh-3571)\n\t\tval === \"auto\" ||\n\n\t\t// Support: Android <=4.1 - 4.3 only\n\t\t// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)\n\t\t!parseFloat( val ) && jQuery.css( elem, \"display\", false, styles ) === \"inline\" ) &&\n\n\t\t// Make sure the element is visible & connected\n\t\telem.getClientRects().length ) {\n\n\t\tisBorderBox = jQuery.css( elem, \"boxSizing\", false, styles ) === \"border-box\";\n\n\t\t// Where available, offsetWidth/offsetHeight approximate border box dimensions.\n\t\t// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the\n\t\t// retrieved value as a content box dimension.\n\t\tvalueIsBorderBox = offsetProp in elem;\n\t\tif ( valueIsBorderBox ) {\n\t\t\tval = elem[ offsetProp ];\n\t\t}\n\t}\n\n\t// Normalize \"\" and auto\n\tval = parseFloat( val ) || 0;\n\n\t// Adjust for the element's box model\n\treturn ( val +\n\t\tboxModelAdjustment(\n\t\t\telem,\n\t\t\tdimension,\n\t\t\textra || ( isBorderBox ? \"border\" : \"content\" ),\n\t\t\tvalueIsBorderBox,\n\t\t\tstyles,\n\n\t\t\t// Provide the current computed size to request scroll gutter calculation (gh-3589)\n\t\t\tval\n\t\t)\n\t) + \"px\";\n}\n\njQuery.extend( {\n\n\t// Add in style property hooks for overriding the default\n\t// behavior of getting and setting a style property\n\tcssHooks: {\n\t\topacity: {\n\t\t\tget: function( elem, computed ) {\n\t\t\t\tif ( computed ) {\n\n\t\t\t\t\t// We should always get a number back from opacity\n\t\t\t\t\tvar ret = curCSS( elem, \"opacity\" );\n\t\t\t\t\treturn ret === \"\" ? \"1\" : ret;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t},\n\n\t// Don't automatically add \"px\" to these possibly-unitless properties\n\tcssNumber: {\n\t\t\"animationIterationCount\": true,\n\t\t\"columnCount\": true,\n\t\t\"fillOpacity\": true,\n\t\t\"flexGrow\": true,\n\t\t\"flexShrink\": true,\n\t\t\"fontWeight\": true,\n\t\t\"gridArea\": true,\n\t\t\"gridColumn\": true,\n\t\t\"gridColumnEnd\": true,\n\t\t\"gridColumnStart\": true,\n\t\t\"gridRow\": true,\n\t\t\"gridRowEnd\": true,\n\t\t\"gridRowStart\": true,\n\t\t\"lineHeight\": true,\n\t\t\"opacity\": true,\n\t\t\"order\": true,\n\t\t\"orphans\": true,\n\t\t\"widows\": true,\n\t\t\"zIndex\": true,\n\t\t\"zoom\": true\n\t},\n\n\t// Add in properties whose names you wish to fix before\n\t// setting or getting the value\n\tcssProps: {},\n\n\t// Get and set the style property on a DOM Node\n\tstyle: function( elem, name, value, extra ) {\n\n\t\t// Don't set styles on text and comment nodes\n\t\tif ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {\n\t\t\treturn;\n\t\t}\n\n\t\t// Make sure that we're working with the right name\n\t\tvar ret, type, hooks,\n\t\t\torigName = camelCase( name ),\n\t\t\tisCustomProp = rcustomProp.test( name ),\n\t\t\tstyle = elem.style;\n\n\t\t// Make sure that we're working with the right name. We don't\n\t\t// want to query the value if it is a CSS custom property\n\t\t// since they are user-defined.\n\t\tif ( !isCustomProp ) {\n\t\t\tname = finalPropName( origName );\n\t\t}\n\n\t\t// Gets hook for the prefixed version, then unprefixed version\n\t\thooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];\n\n\t\t// Check if we're setting a value\n\t\tif ( value !== undefined ) {\n\t\t\ttype = typeof value;\n\n\t\t\t// Convert \"+=\" or \"-=\" to relative numbers (#7345)\n\t\t\tif ( type === \"string\" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {\n\t\t\t\tvalue = adjustCSS( elem, name, ret );\n\n\t\t\t\t// Fixes bug #9237\n\t\t\t\ttype = \"number\";\n\t\t\t}\n\n\t\t\t// Make sure that null and NaN values aren't set (#7116)\n\t\t\tif ( value == null || value !== value ) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t// If a number was passed in, add the unit (except for certain CSS properties)\n\t\t\t// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append\n\t\t\t// \"px\" to a few hardcoded values.\n\t\t\tif ( type === \"number\" && !isCustomProp ) {\n\t\t\t\tvalue += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? \"\" : \"px\" );\n\t\t\t}\n\n\t\t\t// background-* props affect original clone's values\n\t\t\tif ( !support.clearCloneStyle && value === \"\" && name.indexOf( \"background\" ) === 0 ) {\n\t\t\t\tstyle[ name ] = \"inherit\";\n\t\t\t}\n\n\t\t\t// If a hook was provided, use that value, otherwise just set the specified value\n\t\t\tif ( !hooks || !( \"set\" in hooks ) ||\n\t\t\t\t( value = hooks.set( elem, value, extra ) ) !== undefined ) {\n\n\t\t\t\tif ( isCustomProp ) {\n\t\t\t\t\tstyle.setProperty( name, value );\n\t\t\t\t} else {\n\t\t\t\t\tstyle[ name ] = value;\n\t\t\t\t}\n\t\t\t}\n\n\t\t} else {\n\n\t\t\t// If a hook was provided get the non-computed value from there\n\t\t\tif ( hooks && \"get\" in hooks &&\n\t\t\t\t( ret = hooks.get( elem, false, extra ) ) !== undefined ) {\n\n\t\t\t\treturn ret;\n\t\t\t}\n\n\t\t\t// Otherwise just get the value from the style object\n\t\t\treturn style[ name ];\n\t\t}\n\t},\n\n\tcss: function( elem, name, extra, styles ) {\n\t\tvar val, num, hooks,\n\t\t\torigName = camelCase( name ),\n\t\t\tisCustomProp = rcustomProp.test( name );\n\n\t\t// Make sure that we're working with the right name. We don't\n\t\t// want to modify the value if it is a CSS custom property\n\t\t// since they are user-defined.\n\t\tif ( !isCustomProp ) {\n\t\t\tname = finalPropName( origName );\n\t\t}\n\n\t\t// Try prefixed name followed by the unprefixed name\n\t\thooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];\n\n\t\t// If a hook was provided get the computed value from there\n\t\tif ( hooks && \"get\" in hooks ) {\n\t\t\tval = hooks.get( elem, true, extra );\n\t\t}\n\n\t\t// Otherwise, if a way to get the computed value exists, use that\n\t\tif ( val === undefined ) {\n\t\t\tval = curCSS( elem, name, styles );\n\t\t}\n\n\t\t// Convert \"normal\" to computed value\n\t\tif ( val === \"normal\" && name in cssNormalTransform ) {\n\t\t\tval = cssNormalTransform[ name ];\n\t\t}\n\n\t\t// Make numeric if forced or a qualifier was provided and val looks numeric\n\t\tif ( extra === \"\" || extra ) {\n\t\t\tnum = parseFloat( val );\n\t\t\treturn extra === true || isFinite( num ) ? num || 0 : val;\n\t\t}\n\n\t\treturn val;\n\t}\n} );\n\njQuery.each( [ \"height\", \"width\" ], function( _i, dimension ) {\n\tjQuery.cssHooks[ dimension ] = {\n\t\tget: function( elem, computed, extra ) {\n\t\t\tif ( computed ) {\n\n\t\t\t\t// Certain elements can have dimension info if we invisibly show them\n\t\t\t\t// but it must have a current display style that would benefit\n\t\t\t\treturn rdisplayswap.test( jQuery.css( elem, \"display\" ) ) &&\n\n\t\t\t\t\t// Support: Safari 8+\n\t\t\t\t\t// Table columns in Safari have non-zero offsetWidth & zero\n\t\t\t\t\t// getBoundingClientRect().width unless display is changed.\n\t\t\t\t\t// Support: IE <=11 only\n\t\t\t\t\t// Running getBoundingClientRect on a disconnected node\n\t\t\t\t\t// in IE throws an error.\n\t\t\t\t\t( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?\n\t\t\t\t\t\tswap( elem, cssShow, function() {\n\t\t\t\t\t\t\treturn getWidthOrHeight( elem, dimension, extra );\n\t\t\t\t\t\t} ) :\n\t\t\t\t\t\tgetWidthOrHeight( elem, dimension, extra );\n\t\t\t}\n\t\t},\n\n\t\tset: function( elem, value, extra ) {\n\t\t\tvar matches,\n\t\t\t\tstyles = getStyles( elem ),\n\n\t\t\t\t// Only read styles.position if the test has a chance to fail\n\t\t\t\t// to avoid forcing a reflow.\n\t\t\t\tscrollboxSizeBuggy = !support.scrollboxSize() &&\n\t\t\t\t\tstyles.position === \"absolute\",\n\n\t\t\t\t// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)\n\t\t\t\tboxSizingNeeded = scrollboxSizeBuggy || extra,\n\t\t\t\tisBorderBox = boxSizingNeeded &&\n\t\t\t\t\tjQuery.css( elem, \"boxSizing\", false, styles ) === \"border-box\",\n\t\t\t\tsubtract = extra ?\n\t\t\t\t\tboxModelAdjustment(\n\t\t\t\t\t\telem,\n\t\t\t\t\t\tdimension,\n\t\t\t\t\t\textra,\n\t\t\t\t\t\tisBorderBox,\n\t\t\t\t\t\tstyles\n\t\t\t\t\t) :\n\t\t\t\t\t0;\n\n\t\t\t// Account for unreliable border-box dimensions by comparing offset* to computed and\n\t\t\t// faking a content-box to get border and padding (gh-3699)\n\t\t\tif ( isBorderBox && scrollboxSizeBuggy ) {\n\t\t\t\tsubtract -= Math.ceil(\n\t\t\t\t\telem[ \"offset\" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -\n\t\t\t\t\tparseFloat( styles[ dimension ] ) -\n\t\t\t\t\tboxModelAdjustment( elem, dimension, \"border\", false, styles ) -\n\t\t\t\t\t0.5\n\t\t\t\t);\n\t\t\t}\n\n\t\t\t// Convert to pixels if value adjustment is needed\n\t\t\tif ( subtract && ( matches = rcssNum.exec( value ) ) &&\n\t\t\t\t( matches[ 3 ] || \"px\" ) !== \"px\" ) {\n\n\t\t\t\telem.style[ dimension ] = value;\n\t\t\t\tvalue = jQuery.css( elem, dimension );\n\t\t\t}\n\n\t\t\treturn setPositiveNumber( elem, value, subtract );\n\t\t}\n\t};\n} );\n\njQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,\n\tfunction( elem, computed ) {\n\t\tif ( computed ) {\n\t\t\treturn ( parseFloat( curCSS( elem, \"marginLeft\" ) ) ||\n\t\t\t\telem.getBoundingClientRect().left -\n\t\t\t\t\tswap( elem, { marginLeft: 0 }, function() {\n\t\t\t\t\t\treturn elem.getBoundingClientRect().left;\n\t\t\t\t\t} )\n\t\t\t\t) + \"px\";\n\t\t}\n\t}\n);\n\n// These hooks are used by animate to expand properties\njQuery.each( {\n\tmargin: \"\",\n\tpadding: \"\",\n\tborder: \"Width\"\n}, function( prefix, suffix ) {\n\tjQuery.cssHooks[ prefix + suffix ] = {\n\t\texpand: function( value ) {\n\t\t\tvar i = 0,\n\t\t\t\texpanded = {},\n\n\t\t\t\t// Assumes a single number if not a string\n\t\t\t\tparts = typeof value === \"string\" ? value.split( \" \" ) : [ value ];\n\n\t\t\tfor ( ; i < 4; i++ ) {\n\t\t\t\texpanded[ prefix + cssExpand[ i ] + suffix ] =\n\t\t\t\t\tparts[ i ] || parts[ i - 2 ] || parts[ 0 ];\n\t\t\t}\n\n\t\t\treturn expanded;\n\t\t}\n\t};\n\n\tif ( prefix !== \"margin\" ) {\n\t\tjQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;\n\t}\n} );\n\njQuery.fn.extend( {\n\tcss: function( name, value ) {\n\t\treturn access( this, function( elem, name, value ) {\n\t\t\tvar styles, len,\n\t\t\t\tmap = {},\n\t\t\t\ti = 0;\n\n\t\t\tif ( Array.isArray( name ) ) {\n\t\t\t\tstyles = getStyles( elem );\n\t\t\t\tlen = name.length;\n\n\t\t\t\tfor ( ; i < len; i++ ) {\n\t\t\t\t\tmap[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );\n\t\t\t\t}\n\n\t\t\t\treturn map;\n\t\t\t}\n\n\t\t\treturn value !== undefined ?\n\t\t\t\tjQuery.style( elem, name, value ) :\n\t\t\t\tjQuery.css( elem, name );\n\t\t}, name, value, arguments.length > 1 );\n\t}\n} );\n\n\nfunction Tween( elem, options, prop, end, easing ) {\n\treturn new Tween.prototype.init( elem, options, prop, end, easing );\n}\njQuery.Tween = Tween;\n\nTween.prototype = {\n\tconstructor: Tween,\n\tinit: function( elem, options, prop, end, easing, unit ) {\n\t\tthis.elem = elem;\n\t\tthis.prop = prop;\n\t\tthis.easing = easing || jQuery.easing._default;\n\t\tthis.options = options;\n\t\tthis.start = this.now = this.cur();\n\t\tthis.end = end;\n\t\tthis.unit = unit || ( jQuery.cssNumber[ prop ] ? \"\" : \"px\" );\n\t},\n\tcur: function() {\n\t\tvar hooks = Tween.propHooks[ this.prop ];\n\n\t\treturn hooks && hooks.get ?\n\t\t\thooks.get( this ) :\n\t\t\tTween.propHooks._default.get( this );\n\t},\n\trun: function( percent ) {\n\t\tvar eased,\n\t\t\thooks = Tween.propHooks[ this.prop ];\n\n\t\tif ( this.options.duration ) {\n\t\t\tthis.pos = eased = jQuery.easing[ this.easing ](\n\t\t\t\tpercent, this.options.duration * percent, 0, 1, this.options.duration\n\t\t\t);\n\t\t} else {\n\t\t\tthis.pos = eased = percent;\n\t\t}\n\t\tthis.now = ( this.end - this.start ) * eased + this.start;\n\n\t\tif ( this.options.step ) {\n\t\t\tthis.options.step.call( this.elem, this.now, this );\n\t\t}\n\n\t\tif ( hooks && hooks.set ) {\n\t\t\thooks.set( this );\n\t\t} else {\n\t\t\tTween.propHooks._default.set( this );\n\t\t}\n\t\treturn this;\n\t}\n};\n\nTween.prototype.init.prototype = Tween.prototype;\n\nTween.propHooks = {\n\t_default: {\n\t\tget: function( tween ) {\n\t\t\tvar result;\n\n\t\t\t// Use a property on the element directly when it is not a DOM element,\n\t\t\t// or when there is no matching style property that exists.\n\t\t\tif ( tween.elem.nodeType !== 1 ||\n\t\t\t\ttween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {\n\t\t\t\treturn tween.elem[ tween.prop ];\n\t\t\t}\n\n\t\t\t// Passing an empty string as a 3rd parameter to .css will automatically\n\t\t\t// attempt a parseFloat and fallback to a string if the parse fails.\n\t\t\t// Simple values such as \"10px\" are parsed to Float;\n\t\t\t// complex values such as \"rotate(1rad)\" are returned as-is.\n\t\t\tresult = jQuery.css( tween.elem, tween.prop, \"\" );\n\n\t\t\t// Empty strings, null, undefined and \"auto\" are converted to 0.\n\t\t\treturn !result || result === \"auto\" ? 0 : result;\n\t\t},\n\t\tset: function( tween ) {\n\n\t\t\t// Use step hook for back compat.\n\t\t\t// Use cssHook if its there.\n\t\t\t// Use .style if available and use plain properties where available.\n\t\t\tif ( jQuery.fx.step[ tween.prop ] ) {\n\t\t\t\tjQuery.fx.step[ tween.prop ]( tween );\n\t\t\t} else if ( tween.elem.nodeType === 1 && (\n\t\t\t\t\tjQuery.cssHooks[ tween.prop ] ||\n\t\t\t\t\ttween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {\n\t\t\t\tjQuery.style( tween.elem, tween.prop, tween.now + tween.unit );\n\t\t\t} else {\n\t\t\t\ttween.elem[ tween.prop ] = tween.now;\n\t\t\t}\n\t\t}\n\t}\n};\n\n// Support: IE <=9 only\n// Panic based approach to setting things on disconnected nodes\nTween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {\n\tset: function( tween ) {\n\t\tif ( tween.elem.nodeType && tween.elem.parentNode ) {\n\t\t\ttween.elem[ tween.prop ] = tween.now;\n\t\t}\n\t}\n};\n\njQuery.easing = {\n\tlinear: function( p ) {\n\t\treturn p;\n\t},\n\tswing: function( p ) {\n\t\treturn 0.5 - Math.cos( p * Math.PI ) / 2;\n\t},\n\t_default: \"swing\"\n};\n\njQuery.fx = Tween.prototype.init;\n\n// Back compat <1.8 extension point\njQuery.fx.step = {};\n\n\n\n\nvar\n\tfxNow, inProgress,\n\trfxtypes = /^(?:toggle|show|hide)$/,\n\trrun = /queueHooks$/;\n\nfunction schedule() {\n\tif ( inProgress ) {\n\t\tif ( document.hidden === false && window.requestAnimationFrame ) {\n\t\t\twindow.requestAnimationFrame( schedule );\n\t\t} else {\n\t\t\twindow.setTimeout( schedule, jQuery.fx.interval );\n\t\t}\n\n\t\tjQuery.fx.tick();\n\t}\n}\n\n// Animations created synchronously will run synchronously\nfunction createFxNow() {\n\twindow.setTimeout( function() {\n\t\tfxNow = undefined;\n\t} );\n\treturn ( fxNow = Date.now() );\n}\n\n// Generate parameters to create a standard animation\nfunction genFx( type, includeWidth ) {\n\tvar which,\n\t\ti = 0,\n\t\tattrs = { height: type };\n\n\t// If we include width, step value is 1 to do all cssExpand values,\n\t// otherwise step value is 2 to skip over Left and Right\n\tincludeWidth = includeWidth ? 1 : 0;\n\tfor ( ; i < 4; i += 2 - includeWidth ) {\n\t\twhich = cssExpand[ i ];\n\t\tattrs[ \"margin\" + which ] = attrs[ \"padding\" + which ] = type;\n\t}\n\n\tif ( includeWidth ) {\n\t\tattrs.opacity = attrs.width = type;\n\t}\n\n\treturn attrs;\n}\n\nfunction createTween( value, prop, animation ) {\n\tvar tween,\n\t\tcollection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ \"*\" ] ),\n\t\tindex = 0,\n\t\tlength = collection.length;\n\tfor ( ; index < length; index++ ) {\n\t\tif ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {\n\n\t\t\t// We're done with this property\n\t\t\treturn tween;\n\t\t}\n\t}\n}\n\nfunction defaultPrefilter( elem, props, opts ) {\n\tvar prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,\n\t\tisBox = \"width\" in props || \"height\" in props,\n\t\tanim = this,\n\t\torig = {},\n\t\tstyle = elem.style,\n\t\thidden = elem.nodeType && isHiddenWithinTree( elem ),\n\t\tdataShow = dataPriv.get( elem, \"fxshow\" );\n\n\t// Queue-skipping animations hijack the fx hooks\n\tif ( !opts.queue ) {\n\t\thooks = jQuery._queueHooks( elem, \"fx\" );\n\t\tif ( hooks.unqueued == null ) {\n\t\t\thooks.unqueued = 0;\n\t\t\toldfire = hooks.empty.fire;\n\t\t\thooks.empty.fire = function() {\n\t\t\t\tif ( !hooks.unqueued ) {\n\t\t\t\t\toldfire();\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\t\thooks.unqueued++;\n\n\t\tanim.always( function() {\n\n\t\t\t// Ensure the complete handler is called before this completes\n\t\t\tanim.always( function() {\n\t\t\t\thooks.unqueued--;\n\t\t\t\tif ( !jQuery.queue( elem, \"fx\" ).length ) {\n\t\t\t\t\thooks.empty.fire();\n\t\t\t\t}\n\t\t\t} );\n\t\t} );\n\t}\n\n\t// Detect show/hide animations\n\tfor ( prop in props ) {\n\t\tvalue = props[ prop ];\n\t\tif ( rfxtypes.test( value ) ) {\n\t\t\tdelete props[ prop ];\n\t\t\ttoggle = toggle || value === \"toggle\";\n\t\t\tif ( value === ( hidden ? \"hide\" : \"show\" ) ) {\n\n\t\t\t\t// Pretend to be hidden if this is a \"show\" and\n\t\t\t\t// there is still data from a stopped show/hide\n\t\t\t\tif ( value === \"show\" && dataShow && dataShow[ prop ] !== undefined ) {\n\t\t\t\t\thidden = true;\n\n\t\t\t\t// Ignore all other no-op show/hide data\n\t\t\t\t} else {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t}\n\t\t\torig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );\n\t\t}\n\t}\n\n\t// Bail out if this is a no-op like .hide().hide()\n\tpropTween = !jQuery.isEmptyObject( props );\n\tif ( !propTween && jQuery.isEmptyObject( orig ) ) {\n\t\treturn;\n\t}\n\n\t// Restrict \"overflow\" and \"display\" styles during box animations\n\tif ( isBox && elem.nodeType === 1 ) {\n\n\t\t// Support: IE <=9 - 11, Edge 12 - 15\n\t\t// Record all 3 overflow attributes because IE does not infer the shorthand\n\t\t// from identically-valued overflowX and overflowY and Edge just mirrors\n\t\t// the overflowX value there.\n\t\topts.overflow = [ style.overflow, style.overflowX, style.overflowY ];\n\n\t\t// Identify a display type, preferring old show/hide data over the CSS cascade\n\t\trestoreDisplay = dataShow && dataShow.display;\n\t\tif ( restoreDisplay == null ) {\n\t\t\trestoreDisplay = dataPriv.get( elem, \"display\" );\n\t\t}\n\t\tdisplay = jQuery.css( elem, \"display\" );\n\t\tif ( display === \"none\" ) {\n\t\t\tif ( restoreDisplay ) {\n\t\t\t\tdisplay = restoreDisplay;\n\t\t\t} else {\n\n\t\t\t\t// Get nonempty value(s) by temporarily forcing visibility\n\t\t\t\tshowHide( [ elem ], true );\n\t\t\t\trestoreDisplay = elem.style.display || restoreDisplay;\n\t\t\t\tdisplay = jQuery.css( elem, \"display\" );\n\t\t\t\tshowHide( [ elem ] );\n\t\t\t}\n\t\t}\n\n\t\t// Animate inline elements as inline-block\n\t\tif ( display === \"inline\" || display === \"inline-block\" && restoreDisplay != null ) {\n\t\t\tif ( jQuery.css( elem, \"float\" ) === \"none\" ) {\n\n\t\t\t\t// Restore the original display value at the end of pure show/hide animations\n\t\t\t\tif ( !propTween ) {\n\t\t\t\t\tanim.done( function() {\n\t\t\t\t\t\tstyle.display = restoreDisplay;\n\t\t\t\t\t} );\n\t\t\t\t\tif ( restoreDisplay == null ) {\n\t\t\t\t\t\tdisplay = style.display;\n\t\t\t\t\t\trestoreDisplay = display === \"none\" ? \"\" : display;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tstyle.display = \"inline-block\";\n\t\t\t}\n\t\t}\n\t}\n\n\tif ( opts.overflow ) {\n\t\tstyle.overflow = \"hidden\";\n\t\tanim.always( function() {\n\t\t\tstyle.overflow = opts.overflow[ 0 ];\n\t\t\tstyle.overflowX = opts.overflow[ 1 ];\n\t\t\tstyle.overflowY = opts.overflow[ 2 ];\n\t\t} );\n\t}\n\n\t// Implement show/hide animations\n\tpropTween = false;\n\tfor ( prop in orig ) {\n\n\t\t// General show/hide setup for this element animation\n\t\tif ( !propTween ) {\n\t\t\tif ( dataShow ) {\n\t\t\t\tif ( \"hidden\" in dataShow ) {\n\t\t\t\t\thidden = dataShow.hidden;\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tdataShow = dataPriv.access( elem, \"fxshow\", { display: restoreDisplay } );\n\t\t\t}\n\n\t\t\t// Store hidden/visible for toggle so `.stop().toggle()` \"reverses\"\n\t\t\tif ( toggle ) {\n\t\t\t\tdataShow.hidden = !hidden;\n\t\t\t}\n\n\t\t\t// Show elements before animating them\n\t\t\tif ( hidden ) {\n\t\t\t\tshowHide( [ elem ], true );\n\t\t\t}\n\n\t\t\t/* eslint-disable no-loop-func */\n\n\t\t\tanim.done( function() {\n\n\t\t\t/* eslint-enable no-loop-func */\n\n\t\t\t\t// The final step of a \"hide\" animation is actually hiding the element\n\t\t\t\tif ( !hidden ) {\n\t\t\t\t\tshowHide( [ elem ] );\n\t\t\t\t}\n\t\t\t\tdataPriv.remove( elem, \"fxshow\" );\n\t\t\t\tfor ( prop in orig ) {\n\t\t\t\t\tjQuery.style( elem, prop, orig[ prop ] );\n\t\t\t\t}\n\t\t\t} );\n\t\t}\n\n\t\t// Per-property setup\n\t\tpropTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );\n\t\tif ( !( prop in dataShow ) ) {\n\t\t\tdataShow[ prop ] = propTween.start;\n\t\t\tif ( hidden ) {\n\t\t\t\tpropTween.end = propTween.start;\n\t\t\t\tpropTween.start = 0;\n\t\t\t}\n\t\t}\n\t}\n}\n\nfunction propFilter( props, specialEasing ) {\n\tvar index, name, easing, value, hooks;\n\n\t// camelCase, specialEasing and expand cssHook pass\n\tfor ( index in props ) {\n\t\tname = camelCase( index );\n\t\teasing = specialEasing[ name ];\n\t\tvalue = props[ index ];\n\t\tif ( Array.isArray( value ) ) {\n\t\t\teasing = value[ 1 ];\n\t\t\tvalue = props[ index ] = value[ 0 ];\n\t\t}\n\n\t\tif ( index !== name ) {\n\t\t\tprops[ name ] = value;\n\t\t\tdelete props[ index ];\n\t\t}\n\n\t\thooks = jQuery.cssHooks[ name ];\n\t\tif ( hooks && \"expand\" in hooks ) {\n\t\t\tvalue = hooks.expand( value );\n\t\t\tdelete props[ name ];\n\n\t\t\t// Not quite $.extend, this won't overwrite existing keys.\n\t\t\t// Reusing 'index' because we have the correct \"name\"\n\t\t\tfor ( index in value ) {\n\t\t\t\tif ( !( index in props ) ) {\n\t\t\t\t\tprops[ index ] = value[ index ];\n\t\t\t\t\tspecialEasing[ index ] = easing;\n\t\t\t\t}\n\t\t\t}\n\t\t} else {\n\t\t\tspecialEasing[ name ] = easing;\n\t\t}\n\t}\n}\n\nfunction Animation( elem, properties, options ) {\n\tvar result,\n\t\tstopped,\n\t\tindex = 0,\n\t\tlength = Animation.prefilters.length,\n\t\tdeferred = jQuery.Deferred().always( function() {\n\n\t\t\t// Don't match elem in the :animated selector\n\t\t\tdelete tick.elem;\n\t\t} ),\n\t\ttick = function() {\n\t\t\tif ( stopped ) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tvar currentTime = fxNow || createFxNow(),\n\t\t\t\tremaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),\n\n\t\t\t\t// Support: Android 2.3 only\n\t\t\t\t// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)\n\t\t\t\ttemp = remaining / animation.duration || 0,\n\t\t\t\tpercent = 1 - temp,\n\t\t\t\tindex = 0,\n\t\t\t\tlength = animation.tweens.length;\n\n\t\t\tfor ( ; index < length; index++ ) {\n\t\t\t\tanimation.tweens[ index ].run( percent );\n\t\t\t}\n\n\t\t\tdeferred.notifyWith( elem, [ animation, percent, remaining ] );\n\n\t\t\t// If there's more to do, yield\n\t\t\tif ( percent < 1 && length ) {\n\t\t\t\treturn remaining;\n\t\t\t}\n\n\t\t\t// If this was an empty animation, synthesize a final progress notification\n\t\t\tif ( !length ) {\n\t\t\t\tdeferred.notifyWith( elem, [ animation, 1, 0 ] );\n\t\t\t}\n\n\t\t\t// Resolve the animation and report its conclusion\n\t\t\tdeferred.resolveWith( elem, [ animation ] );\n\t\t\treturn false;\n\t\t},\n\t\tanimation = deferred.promise( {\n\t\t\telem: elem,\n\t\t\tprops: jQuery.extend( {}, properties ),\n\t\t\topts: jQuery.extend( true, {\n\t\t\t\tspecialEasing: {},\n\t\t\t\teasing: jQuery.easing._default\n\t\t\t}, options ),\n\t\t\toriginalProperties: properties,\n\t\t\toriginalOptions: options,\n\t\t\tstartTime: fxNow || createFxNow(),\n\t\t\tduration: options.duration,\n\t\t\ttweens: [],\n\t\t\tcreateTween: function( prop, end ) {\n\t\t\t\tvar tween = jQuery.Tween( elem, animation.opts, prop, end,\n\t\t\t\t\t\tanimation.opts.specialEasing[ prop ] || animation.opts.easing );\n\t\t\t\tanimation.tweens.push( tween );\n\t\t\t\treturn tween;\n\t\t\t},\n\t\t\tstop: function( gotoEnd ) {\n\t\t\t\tvar index = 0,\n\n\t\t\t\t\t// If we are going to the end, we want to run all the tweens\n\t\t\t\t\t// otherwise we skip this part\n\t\t\t\t\tlength = gotoEnd ? animation.tweens.length : 0;\n\t\t\t\tif ( stopped ) {\n\t\t\t\t\treturn this;\n\t\t\t\t}\n\t\t\t\tstopped = true;\n\t\t\t\tfor ( ; index < length; index++ ) {\n\t\t\t\t\tanimation.tweens[ index ].run( 1 );\n\t\t\t\t}\n\n\t\t\t\t// Resolve when we played the last frame; otherwise, reject\n\t\t\t\tif ( gotoEnd ) {\n\t\t\t\t\tdeferred.notifyWith( elem, [ animation, 1, 0 ] );\n\t\t\t\t\tdeferred.resolveWith( elem, [ animation, gotoEnd ] );\n\t\t\t\t} else {\n\t\t\t\t\tdeferred.rejectWith( elem, [ animation, gotoEnd ] );\n\t\t\t\t}\n\t\t\t\treturn this;\n\t\t\t}\n\t\t} ),\n\t\tprops = animation.props;\n\n\tpropFilter( props, animation.opts.specialEasing );\n\n\tfor ( ; index < length; index++ ) {\n\t\tresult = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );\n\t\tif ( result ) {\n\t\t\tif ( isFunction( result.stop ) ) {\n\t\t\t\tjQuery._queueHooks( animation.elem, animation.opts.queue ).stop =\n\t\t\t\t\tresult.stop.bind( result );\n\t\t\t}\n\t\t\treturn result;\n\t\t}\n\t}\n\n\tjQuery.map( props, createTween, animation );\n\n\tif ( isFunction( animation.opts.start ) ) {\n\t\tanimation.opts.start.call( elem, animation );\n\t}\n\n\t// Attach callbacks from options\n\tanimation\n\t\t.progress( animation.opts.progress )\n\t\t.done( animation.opts.done, animation.opts.complete )\n\t\t.fail( animation.opts.fail )\n\t\t.always( animation.opts.always );\n\n\tjQuery.fx.timer(\n\t\tjQuery.extend( tick, {\n\t\t\telem: elem,\n\t\t\tanim: animation,\n\t\t\tqueue: animation.opts.queue\n\t\t} )\n\t);\n\n\treturn animation;\n}\n\njQuery.Animation = jQuery.extend( Animation, {\n\n\ttweeners: {\n\t\t\"*\": [ function( prop, value ) {\n\t\t\tvar tween = this.createTween( prop, value );\n\t\t\tadjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );\n\t\t\treturn tween;\n\t\t} ]\n\t},\n\n\ttweener: function( props, callback ) {\n\t\tif ( isFunction( props ) ) {\n\t\t\tcallback = props;\n\t\t\tprops = [ \"*\" ];\n\t\t} else {\n\t\t\tprops = props.match( rnothtmlwhite );\n\t\t}\n\n\t\tvar prop,\n\t\t\tindex = 0,\n\t\t\tlength = props.length;\n\n\t\tfor ( ; index < length; index++ ) {\n\t\t\tprop = props[ index ];\n\t\t\tAnimation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];\n\t\t\tAnimation.tweeners[ prop ].unshift( callback );\n\t\t}\n\t},\n\n\tprefilters: [ defaultPrefilter ],\n\n\tprefilter: function( callback, prepend ) {\n\t\tif ( prepend ) {\n\t\t\tAnimation.prefilters.unshift( callback );\n\t\t} else {\n\t\t\tAnimation.prefilters.push( callback );\n\t\t}\n\t}\n} );\n\njQuery.speed = function( speed, easing, fn ) {\n\tvar opt = speed && typeof speed === \"object\" ? jQuery.extend( {}, speed ) : {\n\t\tcomplete: fn || !fn && easing ||\n\t\t\tisFunction( speed ) && speed,\n\t\tduration: speed,\n\t\teasing: fn && easing || easing && !isFunction( easing ) && easing\n\t};\n\n\t// Go to the end state if fx are off\n\tif ( jQuery.fx.off ) {\n\t\topt.duration = 0;\n\n\t} else {\n\t\tif ( typeof opt.duration !== \"number\" ) {\n\t\t\tif ( opt.duration in jQuery.fx.speeds ) {\n\t\t\t\topt.duration = jQuery.fx.speeds[ opt.duration ];\n\n\t\t\t} else {\n\t\t\t\topt.duration = jQuery.fx.speeds._default;\n\t\t\t}\n\t\t}\n\t}\n\n\t// Normalize opt.queue - true/undefined/null -> \"fx\"\n\tif ( opt.queue == null || opt.queue === true ) {\n\t\topt.queue = \"fx\";\n\t}\n\n\t// Queueing\n\topt.old = opt.complete;\n\n\topt.complete = function() {\n\t\tif ( isFunction( opt.old ) ) {\n\t\t\topt.old.call( this );\n\t\t}\n\n\t\tif ( opt.queue ) {\n\t\t\tjQuery.dequeue( this, opt.queue );\n\t\t}\n\t};\n\n\treturn opt;\n};\n\njQuery.fn.extend( {\n\tfadeTo: function( speed, to, easing, callback ) {\n\n\t\t// Show any hidden elements after setting opacity to 0\n\t\treturn this.filter( isHiddenWithinTree ).css( \"opacity\", 0 ).show()\n\n\t\t\t// Animate to the value specified\n\t\t\t.end().animate( { opacity: to }, speed, easing, callback );\n\t},\n\tanimate: function( prop, speed, easing, callback ) {\n\t\tvar empty = jQuery.isEmptyObject( prop ),\n\t\t\toptall = jQuery.speed( speed, easing, callback ),\n\t\t\tdoAnimation = function() {\n\n\t\t\t\t// Operate on a copy of prop so per-property easing won't be lost\n\t\t\t\tvar anim = Animation( this, jQuery.extend( {}, prop ), optall );\n\n\t\t\t\t// Empty animations, or finishing resolves immediately\n\t\t\t\tif ( empty || dataPriv.get( this, \"finish\" ) ) {\n\t\t\t\t\tanim.stop( true );\n\t\t\t\t}\n\t\t\t};\n\t\t\tdoAnimation.finish = doAnimation;\n\n\t\treturn empty || optall.queue === false ?\n\t\t\tthis.each( doAnimation ) :\n\t\t\tthis.queue( optall.queue, doAnimation );\n\t},\n\tstop: function( type, clearQueue, gotoEnd ) {\n\t\tvar stopQueue = function( hooks ) {\n\t\t\tvar stop = hooks.stop;\n\t\t\tdelete hooks.stop;\n\t\t\tstop( gotoEnd );\n\t\t};\n\n\t\tif ( typeof type !== \"string\" ) {\n\t\t\tgotoEnd = clearQueue;\n\t\t\tclearQueue = type;\n\t\t\ttype = undefined;\n\t\t}\n\t\tif ( clearQueue ) {\n\t\t\tthis.queue( type || \"fx\", [] );\n\t\t}\n\n\t\treturn this.each( function() {\n\t\t\tvar dequeue = true,\n\t\t\t\tindex = type != null && type + \"queueHooks\",\n\t\t\t\ttimers = jQuery.timers,\n\t\t\t\tdata = dataPriv.get( this );\n\n\t\t\tif ( index ) {\n\t\t\t\tif ( data[ index ] && data[ index ].stop ) {\n\t\t\t\t\tstopQueue( data[ index ] );\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tfor ( index in data ) {\n\t\t\t\t\tif ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {\n\t\t\t\t\t\tstopQueue( data[ index ] );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfor ( index = timers.length; index--; ) {\n\t\t\t\tif ( timers[ index ].elem === this &&\n\t\t\t\t\t( type == null || timers[ index ].queue === type ) ) {\n\n\t\t\t\t\ttimers[ index ].anim.stop( gotoEnd );\n\t\t\t\t\tdequeue = false;\n\t\t\t\t\ttimers.splice( index, 1 );\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Start the next in the queue if the last step wasn't forced.\n\t\t\t// Timers currently will call their complete callbacks, which\n\t\t\t// will dequeue but only if they were gotoEnd.\n\t\t\tif ( dequeue || !gotoEnd ) {\n\t\t\t\tjQuery.dequeue( this, type );\n\t\t\t}\n\t\t} );\n\t},\n\tfinish: function( type ) {\n\t\tif ( type !== false ) {\n\t\t\ttype = type || \"fx\";\n\t\t}\n\t\treturn this.each( function() {\n\t\t\tvar index,\n\t\t\t\tdata = dataPriv.get( this ),\n\t\t\t\tqueue = data[ type + \"queue\" ],\n\t\t\t\thooks = data[ type + \"queueHooks\" ],\n\t\t\t\ttimers = jQuery.timers,\n\t\t\t\tlength = queue ? queue.length : 0;\n\n\t\t\t// Enable finishing flag on private data\n\t\t\tdata.finish = true;\n\n\t\t\t// Empty the queue first\n\t\t\tjQuery.queue( this, type, [] );\n\n\t\t\tif ( hooks && hooks.stop ) {\n\t\t\t\thooks.stop.call( this, true );\n\t\t\t}\n\n\t\t\t// Look for any active animations, and finish them\n\t\t\tfor ( index = timers.length; index--; ) {\n\t\t\t\tif ( timers[ index ].elem === this && timers[ index ].queue === type ) {\n\t\t\t\t\ttimers[ index ].anim.stop( true );\n\t\t\t\t\ttimers.splice( index, 1 );\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Look for any animations in the old queue and finish them\n\t\t\tfor ( index = 0; index < length; index++ ) {\n\t\t\t\tif ( queue[ index ] && queue[ index ].finish ) {\n\t\t\t\t\tqueue[ index ].finish.call( this );\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Turn off finishing flag\n\t\t\tdelete data.finish;\n\t\t} );\n\t}\n} );\n\njQuery.each( [ \"toggle\", \"show\", \"hide\" ], function( _i, name ) {\n\tvar cssFn = jQuery.fn[ name ];\n\tjQuery.fn[ name ] = function( speed, easing, callback ) {\n\t\treturn speed == null || typeof speed === \"boolean\" ?\n\t\t\tcssFn.apply( this, arguments ) :\n\t\t\tthis.animate( genFx( name, true ), speed, easing, callback );\n\t};\n} );\n\n// Generate shortcuts for custom animations\njQuery.each( {\n\tslideDown: genFx( \"show\" ),\n\tslideUp: genFx( \"hide\" ),\n\tslideToggle: genFx( \"toggle\" ),\n\tfadeIn: { opacity: \"show\" },\n\tfadeOut: { opacity: \"hide\" },\n\tfadeToggle: { opacity: \"toggle\" }\n}, function( name, props ) {\n\tjQuery.fn[ name ] = function( speed, easing, callback ) {\n\t\treturn this.animate( props, speed, easing, callback );\n\t};\n} );\n\njQuery.timers = [];\njQuery.fx.tick = function() {\n\tvar timer,\n\t\ti = 0,\n\t\ttimers = jQuery.timers;\n\n\tfxNow = Date.now();\n\n\tfor ( ; i < timers.length; i++ ) {\n\t\ttimer = timers[ i ];\n\n\t\t// Run the timer and safely remove it when done (allowing for external removal)\n\t\tif ( !timer() && timers[ i ] === timer ) {\n\t\t\ttimers.splice( i--, 1 );\n\t\t}\n\t}\n\n\tif ( !timers.length ) {\n\t\tjQuery.fx.stop();\n\t}\n\tfxNow = undefined;\n};\n\njQuery.fx.timer = function( timer ) {\n\tjQuery.timers.push( timer );\n\tjQuery.fx.start();\n};\n\njQuery.fx.interval = 13;\njQuery.fx.start = function() {\n\tif ( inProgress ) {\n\t\treturn;\n\t}\n\n\tinProgress = true;\n\tschedule();\n};\n\njQuery.fx.stop = function() {\n\tinProgress = null;\n};\n\njQuery.fx.speeds = {\n\tslow: 600,\n\tfast: 200,\n\n\t// Default speed\n\t_default: 400\n};\n\n\n// Based off of the plugin by Clint Helfers, with permission.\n// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/\njQuery.fn.delay = function( time, type ) {\n\ttime = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;\n\ttype = type || \"fx\";\n\n\treturn this.queue( type, function( next, hooks ) {\n\t\tvar timeout = window.setTimeout( next, time );\n\t\thooks.stop = function() {\n\t\t\twindow.clearTimeout( timeout );\n\t\t};\n\t} );\n};\n\n\n( function() {\n\tvar input = document.createElement( \"input\" ),\n\t\tselect = document.createElement( \"select\" ),\n\t\topt = select.appendChild( document.createElement( \"option\" ) );\n\n\tinput.type = \"checkbox\";\n\n\t// Support: Android <=4.3 only\n\t// Default value for a checkbox should be \"on\"\n\tsupport.checkOn = input.value !== \"\";\n\n\t// Support: IE <=11 only\n\t// Must access selectedIndex to make default options select\n\tsupport.optSelected = opt.selected;\n\n\t// Support: IE <=11 only\n\t// An input loses its value after becoming a radio\n\tinput = document.createElement( \"input\" );\n\tinput.value = \"t\";\n\tinput.type = \"radio\";\n\tsupport.radioValue = input.value === \"t\";\n} )();\n\n\nvar boolHook,\n\tattrHandle = jQuery.expr.attrHandle;\n\njQuery.fn.extend( {\n\tattr: function( name, value ) {\n\t\treturn access( this, jQuery.attr, name, value, arguments.length > 1 );\n\t},\n\n\tremoveAttr: function( name ) {\n\t\treturn this.each( function() {\n\t\t\tjQuery.removeAttr( this, name );\n\t\t} );\n\t}\n} );\n\njQuery.extend( {\n\tattr: function( elem, name, value ) {\n\t\tvar ret, hooks,\n\t\t\tnType = elem.nodeType;\n\n\t\t// Don't get/set attributes on text, comment and attribute nodes\n\t\tif ( nType === 3 || nType === 8 || nType === 2 ) {\n\t\t\treturn;\n\t\t}\n\n\t\t// Fallback to prop when attributes are not supported\n\t\tif ( typeof elem.getAttribute === \"undefined\" ) {\n\t\t\treturn jQuery.prop( elem, name, value );\n\t\t}\n\n\t\t// Attribute hooks are determined by the lowercase version\n\t\t// Grab necessary hook if one is defined\n\t\tif ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {\n\t\t\thooks = jQuery.attrHooks[ name.toLowerCase() ] ||\n\t\t\t\t( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );\n\t\t}\n\n\t\tif ( value !== undefined ) {\n\t\t\tif ( value === null ) {\n\t\t\t\tjQuery.removeAttr( elem, name );\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tif ( hooks && \"set\" in hooks &&\n\t\t\t\t( ret = hooks.set( elem, value, name ) ) !== undefined ) {\n\t\t\t\treturn ret;\n\t\t\t}\n\n\t\t\telem.setAttribute( name, value + \"\" );\n\t\t\treturn value;\n\t\t}\n\n\t\tif ( hooks && \"get\" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {\n\t\t\treturn ret;\n\t\t}\n\n\t\tret = jQuery.find.attr( elem, name );\n\n\t\t// Non-existent attributes return null, we normalize to undefined\n\t\treturn ret == null ? undefined : ret;\n\t},\n\n\tattrHooks: {\n\t\ttype: {\n\t\t\tset: function( elem, value ) {\n\t\t\t\tif ( !support.radioValue && value === \"radio\" &&\n\t\t\t\t\tnodeName( elem, \"input\" ) ) {\n\t\t\t\t\tvar val = elem.value;\n\t\t\t\t\telem.setAttribute( \"type\", value );\n\t\t\t\t\tif ( val ) {\n\t\t\t\t\t\telem.value = val;\n\t\t\t\t\t}\n\t\t\t\t\treturn value;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t},\n\n\tremoveAttr: function( elem, value ) {\n\t\tvar name,\n\t\t\ti = 0,\n\n\t\t\t// Attribute names can contain non-HTML whitespace characters\n\t\t\t// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2\n\t\t\tattrNames = value && value.match( rnothtmlwhite );\n\n\t\tif ( attrNames && elem.nodeType === 1 ) {\n\t\t\twhile ( ( name = attrNames[ i++ ] ) ) {\n\t\t\t\telem.removeAttribute( name );\n\t\t\t}\n\t\t}\n\t}\n} );\n\n// Hooks for boolean attributes\nboolHook = {\n\tset: function( elem, value, name ) {\n\t\tif ( value === false ) {\n\n\t\t\t// Remove boolean attributes when set to false\n\t\t\tjQuery.removeAttr( elem, name );\n\t\t} else {\n\t\t\telem.setAttribute( name, name );\n\t\t}\n\t\treturn name;\n\t}\n};\n\njQuery.each( jQuery.expr.match.bool.source.match( /\\w+/g ), function( _i, name ) {\n\tvar getter = attrHandle[ name ] || jQuery.find.attr;\n\n\tattrHandle[ name ] = function( elem, name, isXML ) {\n\t\tvar ret, handle,\n\t\t\tlowercaseName = name.toLowerCase();\n\n\t\tif ( !isXML ) {\n\n\t\t\t// Avoid an infinite loop by temporarily removing this function from the getter\n\t\t\thandle = attrHandle[ lowercaseName ];\n\t\t\tattrHandle[ lowercaseName ] = ret;\n\t\t\tret = getter( elem, name, isXML ) != null ?\n\t\t\t\tlowercaseName :\n\t\t\t\tnull;\n\t\t\tattrHandle[ lowercaseName ] = handle;\n\t\t}\n\t\treturn ret;\n\t};\n} );\n\n\n\n\nvar rfocusable = /^(?:input|select|textarea|button)$/i,\n\trclickable = /^(?:a|area)$/i;\n\njQuery.fn.extend( {\n\tprop: function( name, value ) {\n\t\treturn access( this, jQuery.prop, name, value, arguments.length > 1 );\n\t},\n\n\tremoveProp: function( name ) {\n\t\treturn this.each( function() {\n\t\t\tdelete this[ jQuery.propFix[ name ] || name ];\n\t\t} );\n\t}\n} );\n\njQuery.extend( {\n\tprop: function( elem, name, value ) {\n\t\tvar ret, hooks,\n\t\t\tnType = elem.nodeType;\n\n\t\t// Don't get/set properties on text, comment and attribute nodes\n\t\tif ( nType === 3 || nType === 8 || nType === 2 ) {\n\t\t\treturn;\n\t\t}\n\n\t\tif ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {\n\n\t\t\t// Fix name and attach hooks\n\t\t\tname = jQuery.propFix[ name ] || name;\n\t\t\thooks = jQuery.propHooks[ name ];\n\t\t}\n\n\t\tif ( value !== undefined ) {\n\t\t\tif ( hooks && \"set\" in hooks &&\n\t\t\t\t( ret = hooks.set( elem, value, name ) ) !== undefined ) {\n\t\t\t\treturn ret;\n\t\t\t}\n\n\t\t\treturn ( elem[ name ] = value );\n\t\t}\n\n\t\tif ( hooks && \"get\" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {\n\t\t\treturn ret;\n\t\t}\n\n\t\treturn elem[ name ];\n\t},\n\n\tpropHooks: {\n\t\ttabIndex: {\n\t\t\tget: function( elem ) {\n\n\t\t\t\t// Support: IE <=9 - 11 only\n\t\t\t\t// elem.tabIndex doesn't always return the\n\t\t\t\t// correct value when it hasn't been explicitly set\n\t\t\t\t// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/\n\t\t\t\t// Use proper attribute retrieval(#12072)\n\t\t\t\tvar tabindex = jQuery.find.attr( elem, \"tabindex\" );\n\n\t\t\t\tif ( tabindex ) {\n\t\t\t\t\treturn parseInt( tabindex, 10 );\n\t\t\t\t}\n\n\t\t\t\tif (\n\t\t\t\t\trfocusable.test( elem.nodeName ) ||\n\t\t\t\t\trclickable.test( elem.nodeName ) &&\n\t\t\t\t\telem.href\n\t\t\t\t) {\n\t\t\t\t\treturn 0;\n\t\t\t\t}\n\n\t\t\t\treturn -1;\n\t\t\t}\n\t\t}\n\t},\n\n\tpropFix: {\n\t\t\"for\": \"htmlFor\",\n\t\t\"class\": \"className\"\n\t}\n} );\n\n// Support: IE <=11 only\n// Accessing the selectedIndex property\n// forces the browser to respect setting selected\n// on the option\n// The getter ensures a default option is selected\n// when in an optgroup\n// eslint rule \"no-unused-expressions\" is disabled for this code\n// since it considers such accessions noop\nif ( !support.optSelected ) {\n\tjQuery.propHooks.selected = {\n\t\tget: function( elem ) {\n\n\t\t\t/* eslint no-unused-expressions: \"off\" */\n\n\t\t\tvar parent = elem.parentNode;\n\t\t\tif ( parent && parent.parentNode ) {\n\t\t\t\tparent.parentNode.selectedIndex;\n\t\t\t}\n\t\t\treturn null;\n\t\t},\n\t\tset: function( elem ) {\n\n\t\t\t/* eslint no-unused-expressions: \"off\" */\n\n\t\t\tvar parent = elem.parentNode;\n\t\t\tif ( parent ) {\n\t\t\t\tparent.selectedIndex;\n\n\t\t\t\tif ( parent.parentNode ) {\n\t\t\t\t\tparent.parentNode.selectedIndex;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t};\n}\n\njQuery.each( [\n\t\"tabIndex\",\n\t\"readOnly\",\n\t\"maxLength\",\n\t\"cellSpacing\",\n\t\"cellPadding\",\n\t\"rowSpan\",\n\t\"colSpan\",\n\t\"useMap\",\n\t\"frameBorder\",\n\t\"contentEditable\"\n], function() {\n\tjQuery.propFix[ this.toLowerCase() ] = this;\n} );\n\n\n\n\n\t// Strip and collapse whitespace according to HTML spec\n\t// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace\n\tfunction stripAndCollapse( value ) {\n\t\tvar tokens = value.match( rnothtmlwhite ) || [];\n\t\treturn tokens.join( \" \" );\n\t}\n\n\nfunction getClass( elem ) {\n\treturn elem.getAttribute && elem.getAttribute( \"class\" ) || \"\";\n}\n\nfunction classesToArray( value ) {\n\tif ( Array.isArray( value ) ) {\n\t\treturn value;\n\t}\n\tif ( typeof value === \"string\" ) {\n\t\treturn value.match( rnothtmlwhite ) || [];\n\t}\n\treturn [];\n}\n\njQuery.fn.extend( {\n\taddClass: function( value ) {\n\t\tvar classes, elem, cur, curValue, clazz, j, finalValue,\n\t\t\ti = 0;\n\n\t\tif ( isFunction( value ) ) {\n\t\t\treturn this.each( function( j ) {\n\t\t\t\tjQuery( this ).addClass( value.call( this, j, getClass( this ) ) );\n\t\t\t} );\n\t\t}\n\n\t\tclasses = classesToArray( value );\n\n\t\tif ( classes.length ) {\n\t\t\twhile ( ( elem = this[ i++ ] ) ) {\n\t\t\t\tcurValue = getClass( elem );\n\t\t\t\tcur = elem.nodeType === 1 && ( \" \" + stripAndCollapse( curValue ) + \" \" );\n\n\t\t\t\tif ( cur ) {\n\t\t\t\t\tj = 0;\n\t\t\t\t\twhile ( ( clazz = classes[ j++ ] ) ) {\n\t\t\t\t\t\tif ( cur.indexOf( \" \" + clazz + \" \" ) < 0 ) {\n\t\t\t\t\t\t\tcur += clazz + \" \";\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// Only assign if different to avoid unneeded rendering.\n\t\t\t\t\tfinalValue = stripAndCollapse( cur );\n\t\t\t\t\tif ( curValue !== finalValue ) {\n\t\t\t\t\t\telem.setAttribute( \"class\", finalValue );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn this;\n\t},\n\n\tremoveClass: function( value ) {\n\t\tvar classes, elem, cur, curValue, clazz, j, finalValue,\n\t\t\ti = 0;\n\n\t\tif ( isFunction( value ) ) {\n\t\t\treturn this.each( function( j ) {\n\t\t\t\tjQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );\n\t\t\t} );\n\t\t}\n\n\t\tif ( !arguments.length ) {\n\t\t\treturn this.attr( \"class\", \"\" );\n\t\t}\n\n\t\tclasses = classesToArray( value );\n\n\t\tif ( classes.length ) {\n\t\t\twhile ( ( elem = this[ i++ ] ) ) {\n\t\t\t\tcurValue = getClass( elem );\n\n\t\t\t\t// This expression is here for better compressibility (see addClass)\n\t\t\t\tcur = elem.nodeType === 1 && ( \" \" + stripAndCollapse( curValue ) + \" \" );\n\n\t\t\t\tif ( cur ) {\n\t\t\t\t\tj = 0;\n\t\t\t\t\twhile ( ( clazz = classes[ j++ ] ) ) {\n\n\t\t\t\t\t\t// Remove *all* instances\n\t\t\t\t\t\twhile ( cur.indexOf( \" \" + clazz + \" \" ) > -1 ) {\n\t\t\t\t\t\t\tcur = cur.replace( \" \" + clazz + \" \", \" \" );\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// Only assign if different to avoid unneeded rendering.\n\t\t\t\t\tfinalValue = stripAndCollapse( cur );\n\t\t\t\t\tif ( curValue !== finalValue ) {\n\t\t\t\t\t\telem.setAttribute( \"class\", finalValue );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn this;\n\t},\n\n\ttoggleClass: function( value, stateVal ) {\n\t\tvar type = typeof value,\n\t\t\tisValidValue = type === \"string\" || Array.isArray( value );\n\n\t\tif ( typeof stateVal === \"boolean\" && isValidValue ) {\n\t\t\treturn stateVal ? this.addClass( value ) : this.removeClass( value );\n\t\t}\n\n\t\tif ( isFunction( value ) ) {\n\t\t\treturn this.each( function( i ) {\n\t\t\t\tjQuery( this ).toggleClass(\n\t\t\t\t\tvalue.call( this, i, getClass( this ), stateVal ),\n\t\t\t\t\tstateVal\n\t\t\t\t);\n\t\t\t} );\n\t\t}\n\n\t\treturn this.each( function() {\n\t\t\tvar className, i, self, classNames;\n\n\t\t\tif ( isValidValue ) {\n\n\t\t\t\t// Toggle individual class names\n\t\t\t\ti = 0;\n\t\t\t\tself = jQuery( this );\n\t\t\t\tclassNames = classesToArray( value );\n\n\t\t\t\twhile ( ( className = classNames[ i++ ] ) ) {\n\n\t\t\t\t\t// Check each className given, space separated list\n\t\t\t\t\tif ( self.hasClass( className ) ) {\n\t\t\t\t\t\tself.removeClass( className );\n\t\t\t\t\t} else {\n\t\t\t\t\t\tself.addClass( className );\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t// Toggle whole class name\n\t\t\t} else if ( value === undefined || type === \"boolean\" ) {\n\t\t\t\tclassName = getClass( this );\n\t\t\t\tif ( className ) {\n\n\t\t\t\t\t// Store className if set\n\t\t\t\t\tdataPriv.set( this, \"__className__\", className );\n\t\t\t\t}\n\n\t\t\t\t// If the element has a class name or if we're passed `false`,\n\t\t\t\t// then remove the whole classname (if there was one, the above saved it).\n\t\t\t\t// Otherwise bring back whatever was previously saved (if anything),\n\t\t\t\t// falling back to the empty string if nothing was stored.\n\t\t\t\tif ( this.setAttribute ) {\n\t\t\t\t\tthis.setAttribute( \"class\",\n\t\t\t\t\t\tclassName || value === false ?\n\t\t\t\t\t\t\"\" :\n\t\t\t\t\t\tdataPriv.get( this, \"__className__\" ) || \"\"\n\t\t\t\t\t);\n\t\t\t\t}\n\t\t\t}\n\t\t} );\n\t},\n\n\thasClass: function( selector ) {\n\t\tvar className, elem,\n\t\t\ti = 0;\n\n\t\tclassName = \" \" + selector + \" \";\n\t\twhile ( ( elem = this[ i++ ] ) ) {\n\t\t\tif ( elem.nodeType === 1 &&\n\t\t\t\t( \" \" + stripAndCollapse( getClass( elem ) ) + \" \" ).indexOf( className ) > -1 ) {\n\t\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\n\t\treturn false;\n\t}\n} );\n\n\n\n\nvar rreturn = /\\r/g;\n\njQuery.fn.extend( {\n\tval: function( value ) {\n\t\tvar hooks, ret, valueIsFunction,\n\t\t\telem = this[ 0 ];\n\n\t\tif ( !arguments.length ) {\n\t\t\tif ( elem ) {\n\t\t\t\thooks = jQuery.valHooks[ elem.type ] ||\n\t\t\t\t\tjQuery.valHooks[ elem.nodeName.toLowerCase() ];\n\n\t\t\t\tif ( hooks &&\n\t\t\t\t\t\"get\" in hooks &&\n\t\t\t\t\t( ret = hooks.get( elem, \"value\" ) ) !== undefined\n\t\t\t\t) {\n\t\t\t\t\treturn ret;\n\t\t\t\t}\n\n\t\t\t\tret = elem.value;\n\n\t\t\t\t// Handle most common string cases\n\t\t\t\tif ( typeof ret === \"string\" ) {\n\t\t\t\t\treturn ret.replace( rreturn, \"\" );\n\t\t\t\t}\n\n\t\t\t\t// Handle cases where value is null/undef or number\n\t\t\t\treturn ret == null ? \"\" : ret;\n\t\t\t}\n\n\t\t\treturn;\n\t\t}\n\n\t\tvalueIsFunction = isFunction( value );\n\n\t\treturn this.each( function( i ) {\n\t\t\tvar val;\n\n\t\t\tif ( this.nodeType !== 1 ) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tif ( valueIsFunction ) {\n\t\t\t\tval = value.call( this, i, jQuery( this ).val() );\n\t\t\t} else {\n\t\t\t\tval = value;\n\t\t\t}\n\n\t\t\t// Treat null/undefined as \"\"; convert numbers to string\n\t\t\tif ( val == null ) {\n\t\t\t\tval = \"\";\n\n\t\t\t} else if ( typeof val === \"number\" ) {\n\t\t\t\tval += \"\";\n\n\t\t\t} else if ( Array.isArray( val ) ) {\n\t\t\t\tval = jQuery.map( val, function( value ) {\n\t\t\t\t\treturn value == null ? \"\" : value + \"\";\n\t\t\t\t} );\n\t\t\t}\n\n\t\t\thooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];\n\n\t\t\t// If set returns undefined, fall back to normal setting\n\t\t\tif ( !hooks || !( \"set\" in hooks ) || hooks.set( this, val, \"value\" ) === undefined ) {\n\t\t\t\tthis.value = val;\n\t\t\t}\n\t\t} );\n\t}\n} );\n\njQuery.extend( {\n\tvalHooks: {\n\t\toption: {\n\t\t\tget: function( elem ) {\n\n\t\t\t\tvar val = jQuery.find.attr( elem, \"value\" );\n\t\t\t\treturn val != null ?\n\t\t\t\t\tval :\n\n\t\t\t\t\t// Support: IE <=10 - 11 only\n\t\t\t\t\t// option.text throws exceptions (#14686, #14858)\n\t\t\t\t\t// Strip and collapse whitespace\n\t\t\t\t\t// https://html.spec.whatwg.org/#strip-and-collapse-whitespace\n\t\t\t\t\tstripAndCollapse( jQuery.text( elem ) );\n\t\t\t}\n\t\t},\n\t\tselect: {\n\t\t\tget: function( elem ) {\n\t\t\t\tvar value, option, i,\n\t\t\t\t\toptions = elem.options,\n\t\t\t\t\tindex = elem.selectedIndex,\n\t\t\t\t\tone = elem.type === \"select-one\",\n\t\t\t\t\tvalues = one ? null : [],\n\t\t\t\t\tmax = one ? index + 1 : options.length;\n\n\t\t\t\tif ( index < 0 ) {\n\t\t\t\t\ti = max;\n\n\t\t\t\t} else {\n\t\t\t\t\ti = one ? index : 0;\n\t\t\t\t}\n\n\t\t\t\t// Loop through all the selected options\n\t\t\t\tfor ( ; i < max; i++ ) {\n\t\t\t\t\toption = options[ i ];\n\n\t\t\t\t\t// Support: IE <=9 only\n\t\t\t\t\t// IE8-9 doesn't update selected after form reset (#2551)\n\t\t\t\t\tif ( ( option.selected || i === index ) &&\n\n\t\t\t\t\t\t\t// Don't return options that are disabled or in a disabled optgroup\n\t\t\t\t\t\t\t!option.disabled &&\n\t\t\t\t\t\t\t( !option.parentNode.disabled ||\n\t\t\t\t\t\t\t\t!nodeName( option.parentNode, \"optgroup\" ) ) ) {\n\n\t\t\t\t\t\t// Get the specific value for the option\n\t\t\t\t\t\tvalue = jQuery( option ).val();\n\n\t\t\t\t\t\t// We don't need an array for one selects\n\t\t\t\t\t\tif ( one ) {\n\t\t\t\t\t\t\treturn value;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Multi-Selects return an array\n\t\t\t\t\t\tvalues.push( value );\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\treturn values;\n\t\t\t},\n\n\t\t\tset: function( elem, value ) {\n\t\t\t\tvar optionSet, option,\n\t\t\t\t\toptions = elem.options,\n\t\t\t\t\tvalues = jQuery.makeArray( value ),\n\t\t\t\t\ti = options.length;\n\n\t\t\t\twhile ( i-- ) {\n\t\t\t\t\toption = options[ i ];\n\n\t\t\t\t\t/* eslint-disable no-cond-assign */\n\n\t\t\t\t\tif ( option.selected =\n\t\t\t\t\t\tjQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1\n\t\t\t\t\t) {\n\t\t\t\t\t\toptionSet = true;\n\t\t\t\t\t}\n\n\t\t\t\t\t/* eslint-enable no-cond-assign */\n\t\t\t\t}\n\n\t\t\t\t// Force browsers to behave consistently when non-matching value is set\n\t\t\t\tif ( !optionSet ) {\n\t\t\t\t\telem.selectedIndex = -1;\n\t\t\t\t}\n\t\t\t\treturn values;\n\t\t\t}\n\t\t}\n\t}\n} );\n\n// Radios and checkboxes getter/setter\njQuery.each( [ \"radio\", \"checkbox\" ], function() {\n\tjQuery.valHooks[ this ] = {\n\t\tset: function( elem, value ) {\n\t\t\tif ( Array.isArray( value ) ) {\n\t\t\t\treturn ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );\n\t\t\t}\n\t\t}\n\t};\n\tif ( !support.checkOn ) {\n\t\tjQuery.valHooks[ this ].get = function( elem ) {\n\t\t\treturn elem.getAttribute( \"value\" ) === null ? \"on\" : elem.value;\n\t\t};\n\t}\n} );\n\n\n\n\n// Return jQuery for attributes-only inclusion\n\n\nsupport.focusin = \"onfocusin\" in window;\n\n\nvar rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,\n\tstopPropagationCallback = function( e ) {\n\t\te.stopPropagation();\n\t};\n\njQuery.extend( jQuery.event, {\n\n\ttrigger: function( event, data, elem, onlyHandlers ) {\n\n\t\tvar i, cur, tmp, bubbleType, ontype, handle, special, lastElement,\n\t\t\teventPath = [ elem || document ],\n\t\t\ttype = hasOwn.call( event, \"type\" ) ? event.type : event,\n\t\t\tnamespaces = hasOwn.call( event, \"namespace\" ) ? event.namespace.split( \".\" ) : [];\n\n\t\tcur = lastElement = tmp = elem = elem || document;\n\n\t\t// Don't do events on text and comment nodes\n\t\tif ( elem.nodeType === 3 || elem.nodeType === 8 ) {\n\t\t\treturn;\n\t\t}\n\n\t\t// focus/blur morphs to focusin/out; ensure we're not firing them right now\n\t\tif ( rfocusMorph.test( type + jQuery.event.triggered ) ) {\n\t\t\treturn;\n\t\t}\n\n\t\tif ( type.indexOf( \".\" ) > -1 ) {\n\n\t\t\t// Namespaced trigger; create a regexp to match event type in handle()\n\t\t\tnamespaces = type.split( \".\" );\n\t\t\ttype = namespaces.shift();\n\t\t\tnamespaces.sort();\n\t\t}\n\t\tontype = type.indexOf( \":\" ) < 0 && \"on\" + type;\n\n\t\t// Caller can pass in a jQuery.Event object, Object, or just an event type string\n\t\tevent = event[ jQuery.expando ] ?\n\t\t\tevent :\n\t\t\tnew jQuery.Event( type, typeof event === \"object\" && event );\n\n\t\t// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)\n\t\tevent.isTrigger = onlyHandlers ? 2 : 3;\n\t\tevent.namespace = namespaces.join( \".\" );\n\t\tevent.rnamespace = event.namespace ?\n\t\t\tnew RegExp( \"(^|\\\\.)\" + namespaces.join( \"\\\\.(?:.*\\\\.|)\" ) + \"(\\\\.|$)\" ) :\n\t\t\tnull;\n\n\t\t// Clean up the event in case it is being reused\n\t\tevent.result = undefined;\n\t\tif ( !event.target ) {\n\t\t\tevent.target = elem;\n\t\t}\n\n\t\t// Clone any incoming data and prepend the event, creating the handler arg list\n\t\tdata = data == null ?\n\t\t\t[ event ] :\n\t\t\tjQuery.makeArray( data, [ event ] );\n\n\t\t// Allow special events to draw outside the lines\n\t\tspecial = jQuery.event.special[ type ] || {};\n\t\tif ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {\n\t\t\treturn;\n\t\t}\n\n\t\t// Determine event propagation path in advance, per W3C events spec (#9951)\n\t\t// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)\n\t\tif ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {\n\n\t\t\tbubbleType = special.delegateType || type;\n\t\t\tif ( !rfocusMorph.test( bubbleType + type ) ) {\n\t\t\t\tcur = cur.parentNode;\n\t\t\t}\n\t\t\tfor ( ; cur; cur = cur.parentNode ) {\n\t\t\t\teventPath.push( cur );\n\t\t\t\ttmp = cur;\n\t\t\t}\n\n\t\t\t// Only add window if we got to document (e.g., not plain obj or detached DOM)\n\t\t\tif ( tmp === ( elem.ownerDocument || document ) ) {\n\t\t\t\teventPath.push( tmp.defaultView || tmp.parentWindow || window );\n\t\t\t}\n\t\t}\n\n\t\t// Fire handlers on the event path\n\t\ti = 0;\n\t\twhile ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {\n\t\t\tlastElement = cur;\n\t\t\tevent.type = i > 1 ?\n\t\t\t\tbubbleType :\n\t\t\t\tspecial.bindType || type;\n\n\t\t\t// jQuery handler\n\t\t\thandle = (\n\t\t\t\t\tdataPriv.get( cur, \"events\" ) || Object.create( null )\n\t\t\t\t)[ event.type ] &&\n\t\t\t\tdataPriv.get( cur, \"handle\" );\n\t\t\tif ( handle ) {\n\t\t\t\thandle.apply( cur, data );\n\t\t\t}\n\n\t\t\t// Native handler\n\t\t\thandle = ontype && cur[ ontype ];\n\t\t\tif ( handle && handle.apply && acceptData( cur ) ) {\n\t\t\t\tevent.result = handle.apply( cur, data );\n\t\t\t\tif ( event.result === false ) {\n\t\t\t\t\tevent.preventDefault();\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tevent.type = type;\n\n\t\t// If nobody prevented the default action, do it now\n\t\tif ( !onlyHandlers && !event.isDefaultPrevented() ) {\n\n\t\t\tif ( ( !special._default ||\n\t\t\t\tspecial._default.apply( eventPath.pop(), data ) === false ) &&\n\t\t\t\tacceptData( elem ) ) {\n\n\t\t\t\t// Call a native DOM method on the target with the same name as the event.\n\t\t\t\t// Don't do default actions on window, that's where global variables be (#6170)\n\t\t\t\tif ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {\n\n\t\t\t\t\t// Don't re-trigger an onFOO event when we call its FOO() method\n\t\t\t\t\ttmp = elem[ ontype ];\n\n\t\t\t\t\tif ( tmp ) {\n\t\t\t\t\t\telem[ ontype ] = null;\n\t\t\t\t\t}\n\n\t\t\t\t\t// Prevent re-triggering of the same event, since we already bubbled it above\n\t\t\t\t\tjQuery.event.triggered = type;\n\n\t\t\t\t\tif ( event.isPropagationStopped() ) {\n\t\t\t\t\t\tlastElement.addEventListener( type, stopPropagationCallback );\n\t\t\t\t\t}\n\n\t\t\t\t\telem[ type ]();\n\n\t\t\t\t\tif ( event.isPropagationStopped() ) {\n\t\t\t\t\t\tlastElement.removeEventListener( type, stopPropagationCallback );\n\t\t\t\t\t}\n\n\t\t\t\t\tjQuery.event.triggered = undefined;\n\n\t\t\t\t\tif ( tmp ) {\n\t\t\t\t\t\telem[ ontype ] = tmp;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn event.result;\n\t},\n\n\t// Piggyback on a donor event to simulate a different one\n\t// Used only for `focus(in | out)` events\n\tsimulate: function( type, elem, event ) {\n\t\tvar e = jQuery.extend(\n\t\t\tnew jQuery.Event(),\n\t\t\tevent,\n\t\t\t{\n\t\t\t\ttype: type,\n\t\t\t\tisSimulated: true\n\t\t\t}\n\t\t);\n\n\t\tjQuery.event.trigger( e, null, elem );\n\t}\n\n} );\n\njQuery.fn.extend( {\n\n\ttrigger: function( type, data ) {\n\t\treturn this.each( function() {\n\t\t\tjQuery.event.trigger( type, data, this );\n\t\t} );\n\t},\n\ttriggerHandler: function( type, data ) {\n\t\tvar elem = this[ 0 ];\n\t\tif ( elem ) {\n\t\t\treturn jQuery.event.trigger( type, data, elem, true );\n\t\t}\n\t}\n} );\n\n\n// Support: Firefox <=44\n// Firefox doesn't have focus(in | out) events\n// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787\n//\n// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1\n// focus(in | out) events fire after focus & blur events,\n// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order\n// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857\nif ( !support.focusin ) {\n\tjQuery.each( { focus: \"focusin\", blur: \"focusout\" }, function( orig, fix ) {\n\n\t\t// Attach a single capturing handler on the document while someone wants focusin/focusout\n\t\tvar handler = function( event ) {\n\t\t\tjQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );\n\t\t};\n\n\t\tjQuery.event.special[ fix ] = {\n\t\t\tsetup: function() {\n\n\t\t\t\t// Handle: regular nodes (via `this.ownerDocument`), window\n\t\t\t\t// (via `this.document`) & document (via `this`).\n\t\t\t\tvar doc = this.ownerDocument || this.document || this,\n\t\t\t\t\tattaches = dataPriv.access( doc, fix );\n\n\t\t\t\tif ( !attaches ) {\n\t\t\t\t\tdoc.addEventListener( orig, handler, true );\n\t\t\t\t}\n\t\t\t\tdataPriv.access( doc, fix, ( attaches || 0 ) + 1 );\n\t\t\t},\n\t\t\tteardown: function() {\n\t\t\t\tvar doc = this.ownerDocument || this.document || this,\n\t\t\t\t\tattaches = dataPriv.access( doc, fix ) - 1;\n\n\t\t\t\tif ( !attaches ) {\n\t\t\t\t\tdoc.removeEventListener( orig, handler, true );\n\t\t\t\t\tdataPriv.remove( doc, fix );\n\n\t\t\t\t} else {\n\t\t\t\t\tdataPriv.access( doc, fix, attaches );\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t} );\n}\nvar location = window.location;\n\nvar nonce = { guid: Date.now() };\n\nvar rquery = ( /\\?/ );\n\n\n\n// Cross-browser xml parsing\njQuery.parseXML = function( data ) {\n\tvar xml;\n\tif ( !data || typeof data !== \"string\" ) {\n\t\treturn null;\n\t}\n\n\t// Support: IE 9 - 11 only\n\t// IE throws on parseFromString with invalid input.\n\ttry {\n\t\txml = ( new window.DOMParser() ).parseFromString( data, \"text/xml\" );\n\t} catch ( e ) {\n\t\txml = undefined;\n\t}\n\n\tif ( !xml || xml.getElementsByTagName( \"parsererror\" ).length ) {\n\t\tjQuery.error( \"Invalid XML: \" + data );\n\t}\n\treturn xml;\n};\n\n\nvar\n\trbracket = /\\[\\]$/,\n\trCRLF = /\\r?\\n/g,\n\trsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,\n\trsubmittable = /^(?:input|select|textarea|keygen)/i;\n\nfunction buildParams( prefix, obj, traditional, add ) {\n\tvar name;\n\n\tif ( Array.isArray( obj ) ) {\n\n\t\t// Serialize array item.\n\t\tjQuery.each( obj, function( i, v ) {\n\t\t\tif ( traditional || rbracket.test( prefix ) ) {\n\n\t\t\t\t// Treat each array item as a scalar.\n\t\t\t\tadd( prefix, v );\n\n\t\t\t} else {\n\n\t\t\t\t// Item is non-scalar (array or object), encode its numeric index.\n\t\t\t\tbuildParams(\n\t\t\t\t\tprefix + \"[\" + ( typeof v === \"object\" && v != null ? i : \"\" ) + \"]\",\n\t\t\t\t\tv,\n\t\t\t\t\ttraditional,\n\t\t\t\t\tadd\n\t\t\t\t);\n\t\t\t}\n\t\t} );\n\n\t} else if ( !traditional && toType( obj ) === \"object\" ) {\n\n\t\t// Serialize object item.\n\t\tfor ( name in obj ) {\n\t\t\tbuildParams( prefix + \"[\" + name + \"]\", obj[ name ], traditional, add );\n\t\t}\n\n\t} else {\n\n\t\t// Serialize scalar item.\n\t\tadd( prefix, obj );\n\t}\n}\n\n// Serialize an array of form elements or a set of\n// key/values into a query string\njQuery.param = function( a, traditional ) {\n\tvar prefix,\n\t\ts = [],\n\t\tadd = function( key, valueOrFunction ) {\n\n\t\t\t// If value is a function, invoke it and use its return value\n\t\t\tvar value = isFunction( valueOrFunction ) ?\n\t\t\t\tvalueOrFunction() :\n\t\t\t\tvalueOrFunction;\n\n\t\t\ts[ s.length ] = encodeURIComponent( key ) + \"=\" +\n\t\t\t\tencodeURIComponent( value == null ? \"\" : value );\n\t\t};\n\n\tif ( a == null ) {\n\t\treturn \"\";\n\t}\n\n\t// If an array was passed in, assume that it is an array of form elements.\n\tif ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {\n\n\t\t// Serialize the form elements\n\t\tjQuery.each( a, function() {\n\t\t\tadd( this.name, this.value );\n\t\t} );\n\n\t} else {\n\n\t\t// If traditional, encode the \"old\" way (the way 1.3.2 or older\n\t\t// did it), otherwise encode params recursively.\n\t\tfor ( prefix in a ) {\n\t\t\tbuildParams( prefix, a[ prefix ], traditional, add );\n\t\t}\n\t}\n\n\t// Return the resulting serialization\n\treturn s.join( \"&\" );\n};\n\njQuery.fn.extend( {\n\tserialize: function() {\n\t\treturn jQuery.param( this.serializeArray() );\n\t},\n\tserializeArray: function() {\n\t\treturn this.map( function() {\n\n\t\t\t// Can add propHook for \"elements\" to filter or add form elements\n\t\t\tvar elements = jQuery.prop( this, \"elements\" );\n\t\t\treturn elements ? jQuery.makeArray( elements ) : this;\n\t\t} )\n\t\t.filter( function() {\n\t\t\tvar type = this.type;\n\n\t\t\t// Use .is( \":disabled\" ) so that fieldset[disabled] works\n\t\t\treturn this.name && !jQuery( this ).is( \":disabled\" ) &&\n\t\t\t\trsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&\n\t\t\t\t( this.checked || !rcheckableType.test( type ) );\n\t\t} )\n\t\t.map( function( _i, elem ) {\n\t\t\tvar val = jQuery( this ).val();\n\n\t\t\tif ( val == null ) {\n\t\t\t\treturn null;\n\t\t\t}\n\n\t\t\tif ( Array.isArray( val ) ) {\n\t\t\t\treturn jQuery.map( val, function( val ) {\n\t\t\t\t\treturn { name: elem.name, value: val.replace( rCRLF, \"\\r\\n\" ) };\n\t\t\t\t} );\n\t\t\t}\n\n\t\t\treturn { name: elem.name, value: val.replace( rCRLF, \"\\r\\n\" ) };\n\t\t} ).get();\n\t}\n} );\n\n\nvar\n\tr20 = /%20/g,\n\trhash = /#.*$/,\n\trantiCache = /([?&])_=[^&]*/,\n\trheaders = /^(.*?):[ \\t]*([^\\r\\n]*)$/mg,\n\n\t// #7653, #8125, #8152: local protocol detection\n\trlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,\n\trnoContent = /^(?:GET|HEAD)$/,\n\trprotocol = /^\\/\\//,\n\n\t/* Prefilters\n\t * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)\n\t * 2) These are called:\n\t *    - BEFORE asking for a transport\n\t *    - AFTER param serialization (s.data is a string if s.processData is true)\n\t * 3) key is the dataType\n\t * 4) the catchall symbol \"*\" can be used\n\t * 5) execution will start with transport dataType and THEN continue down to \"*\" if needed\n\t */\n\tprefilters = {},\n\n\t/* Transports bindings\n\t * 1) key is the dataType\n\t * 2) the catchall symbol \"*\" can be used\n\t * 3) selection will start with transport dataType and THEN go to \"*\" if needed\n\t */\n\ttransports = {},\n\n\t// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression\n\tallTypes = \"*/\".concat( \"*\" ),\n\n\t// Anchor tag for parsing the document origin\n\toriginAnchor = document.createElement( \"a\" );\n\toriginAnchor.href = location.href;\n\n// Base \"constructor\" for jQuery.ajaxPrefilter and jQuery.ajaxTransport\nfunction addToPrefiltersOrTransports( structure ) {\n\n\t// dataTypeExpression is optional and defaults to \"*\"\n\treturn function( dataTypeExpression, func ) {\n\n\t\tif ( typeof dataTypeExpression !== \"string\" ) {\n\t\t\tfunc = dataTypeExpression;\n\t\t\tdataTypeExpression = \"*\";\n\t\t}\n\n\t\tvar dataType,\n\t\t\ti = 0,\n\t\t\tdataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];\n\n\t\tif ( isFunction( func ) ) {\n\n\t\t\t// For each dataType in the dataTypeExpression\n\t\t\twhile ( ( dataType = dataTypes[ i++ ] ) ) {\n\n\t\t\t\t// Prepend if requested\n\t\t\t\tif ( dataType[ 0 ] === \"+\" ) {\n\t\t\t\t\tdataType = dataType.slice( 1 ) || \"*\";\n\t\t\t\t\t( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );\n\n\t\t\t\t// Otherwise append\n\t\t\t\t} else {\n\t\t\t\t\t( structure[ dataType ] = structure[ dataType ] || [] ).push( func );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t};\n}\n\n// Base inspection function for prefilters and transports\nfunction inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {\n\n\tvar inspected = {},\n\t\tseekingTransport = ( structure === transports );\n\n\tfunction inspect( dataType ) {\n\t\tvar selected;\n\t\tinspected[ dataType ] = true;\n\t\tjQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {\n\t\t\tvar dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );\n\t\t\tif ( typeof dataTypeOrTransport === \"string\" &&\n\t\t\t\t!seekingTransport && !inspected[ dataTypeOrTransport ] ) {\n\n\t\t\t\toptions.dataTypes.unshift( dataTypeOrTransport );\n\t\t\t\tinspect( dataTypeOrTransport );\n\t\t\t\treturn false;\n\t\t\t} else if ( seekingTransport ) {\n\t\t\t\treturn !( selected = dataTypeOrTransport );\n\t\t\t}\n\t\t} );\n\t\treturn selected;\n\t}\n\n\treturn inspect( options.dataTypes[ 0 ] ) || !inspected[ \"*\" ] && inspect( \"*\" );\n}\n\n// A special extend for ajax options\n// that takes \"flat\" options (not to be deep extended)\n// Fixes #9887\nfunction ajaxExtend( target, src ) {\n\tvar key, deep,\n\t\tflatOptions = jQuery.ajaxSettings.flatOptions || {};\n\n\tfor ( key in src ) {\n\t\tif ( src[ key ] !== undefined ) {\n\t\t\t( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];\n\t\t}\n\t}\n\tif ( deep ) {\n\t\tjQuery.extend( true, target, deep );\n\t}\n\n\treturn target;\n}\n\n/* Handles responses to an ajax request:\n * - finds the right dataType (mediates between content-type and expected dataType)\n * - returns the corresponding response\n */\nfunction ajaxHandleResponses( s, jqXHR, responses ) {\n\n\tvar ct, type, finalDataType, firstDataType,\n\t\tcontents = s.contents,\n\t\tdataTypes = s.dataTypes;\n\n\t// Remove auto dataType and get content-type in the process\n\twhile ( dataTypes[ 0 ] === \"*\" ) {\n\t\tdataTypes.shift();\n\t\tif ( ct === undefined ) {\n\t\t\tct = s.mimeType || jqXHR.getResponseHeader( \"Content-Type\" );\n\t\t}\n\t}\n\n\t// Check if we're dealing with a known content-type\n\tif ( ct ) {\n\t\tfor ( type in contents ) {\n\t\t\tif ( contents[ type ] && contents[ type ].test( ct ) ) {\n\t\t\t\tdataTypes.unshift( type );\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\n\t// Check to see if we have a response for the expected dataType\n\tif ( dataTypes[ 0 ] in responses ) {\n\t\tfinalDataType = dataTypes[ 0 ];\n\t} else {\n\n\t\t// Try convertible dataTypes\n\t\tfor ( type in responses ) {\n\t\t\tif ( !dataTypes[ 0 ] || s.converters[ type + \" \" + dataTypes[ 0 ] ] ) {\n\t\t\t\tfinalDataType = type;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\tif ( !firstDataType ) {\n\t\t\t\tfirstDataType = type;\n\t\t\t}\n\t\t}\n\n\t\t// Or just use first one\n\t\tfinalDataType = finalDataType || firstDataType;\n\t}\n\n\t// If we found a dataType\n\t// We add the dataType to the list if needed\n\t// and return the corresponding response\n\tif ( finalDataType ) {\n\t\tif ( finalDataType !== dataTypes[ 0 ] ) {\n\t\t\tdataTypes.unshift( finalDataType );\n\t\t}\n\t\treturn responses[ finalDataType ];\n\t}\n}\n\n/* Chain conversions given the request and the original response\n * Also sets the responseXXX fields on the jqXHR instance\n */\nfunction ajaxConvert( s, response, jqXHR, isSuccess ) {\n\tvar conv2, current, conv, tmp, prev,\n\t\tconverters = {},\n\n\t\t// Work with a copy of dataTypes in case we need to modify it for conversion\n\t\tdataTypes = s.dataTypes.slice();\n\n\t// Create converters map with lowercased keys\n\tif ( dataTypes[ 1 ] ) {\n\t\tfor ( conv in s.converters ) {\n\t\t\tconverters[ conv.toLowerCase() ] = s.converters[ conv ];\n\t\t}\n\t}\n\n\tcurrent = dataTypes.shift();\n\n\t// Convert to each sequential dataType\n\twhile ( current ) {\n\n\t\tif ( s.responseFields[ current ] ) {\n\t\t\tjqXHR[ s.responseFields[ current ] ] = response;\n\t\t}\n\n\t\t// Apply the dataFilter if provided\n\t\tif ( !prev && isSuccess && s.dataFilter ) {\n\t\t\tresponse = s.dataFilter( response, s.dataType );\n\t\t}\n\n\t\tprev = current;\n\t\tcurrent = dataTypes.shift();\n\n\t\tif ( current ) {\n\n\t\t\t// There's only work to do if current dataType is non-auto\n\t\t\tif ( current === \"*\" ) {\n\n\t\t\t\tcurrent = prev;\n\n\t\t\t// Convert response if prev dataType is non-auto and differs from current\n\t\t\t} else if ( prev !== \"*\" && prev !== current ) {\n\n\t\t\t\t// Seek a direct converter\n\t\t\t\tconv = converters[ prev + \" \" + current ] || converters[ \"* \" + current ];\n\n\t\t\t\t// If none found, seek a pair\n\t\t\t\tif ( !conv ) {\n\t\t\t\t\tfor ( conv2 in converters ) {\n\n\t\t\t\t\t\t// If conv2 outputs current\n\t\t\t\t\t\ttmp = conv2.split( \" \" );\n\t\t\t\t\t\tif ( tmp[ 1 ] === current ) {\n\n\t\t\t\t\t\t\t// If prev can be converted to accepted input\n\t\t\t\t\t\t\tconv = converters[ prev + \" \" + tmp[ 0 ] ] ||\n\t\t\t\t\t\t\t\tconverters[ \"* \" + tmp[ 0 ] ];\n\t\t\t\t\t\t\tif ( conv ) {\n\n\t\t\t\t\t\t\t\t// Condense equivalence converters\n\t\t\t\t\t\t\t\tif ( conv === true ) {\n\t\t\t\t\t\t\t\t\tconv = converters[ conv2 ];\n\n\t\t\t\t\t\t\t\t// Otherwise, insert the intermediate dataType\n\t\t\t\t\t\t\t\t} else if ( converters[ conv2 ] !== true ) {\n\t\t\t\t\t\t\t\t\tcurrent = tmp[ 0 ];\n\t\t\t\t\t\t\t\t\tdataTypes.unshift( tmp[ 1 ] );\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Apply converter (if not an equivalence)\n\t\t\t\tif ( conv !== true ) {\n\n\t\t\t\t\t// Unless errors are allowed to bubble, catch and return them\n\t\t\t\t\tif ( conv && s.throws ) {\n\t\t\t\t\t\tresponse = conv( response );\n\t\t\t\t\t} else {\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\tresponse = conv( response );\n\t\t\t\t\t\t} catch ( e ) {\n\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\tstate: \"parsererror\",\n\t\t\t\t\t\t\t\terror: conv ? e : \"No conversion from \" + prev + \" to \" + current\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn { state: \"success\", data: response };\n}\n\njQuery.extend( {\n\n\t// Counter for holding the number of active queries\n\tactive: 0,\n\n\t// Last-Modified header cache for next request\n\tlastModified: {},\n\tetag: {},\n\n\tajaxSettings: {\n\t\turl: location.href,\n\t\ttype: \"GET\",\n\t\tisLocal: rlocalProtocol.test( location.protocol ),\n\t\tglobal: true,\n\t\tprocessData: true,\n\t\tasync: true,\n\t\tcontentType: \"application/x-www-form-urlencoded; charset=UTF-8\",\n\n\t\t/*\n\t\ttimeout: 0,\n\t\tdata: null,\n\t\tdataType: null,\n\t\tusername: null,\n\t\tpassword: null,\n\t\tcache: null,\n\t\tthrows: false,\n\t\ttraditional: false,\n\t\theaders: {},\n\t\t*/\n\n\t\taccepts: {\n\t\t\t\"*\": allTypes,\n\t\t\ttext: \"text/plain\",\n\t\t\thtml: \"text/html\",\n\t\t\txml: \"application/xml, text/xml\",\n\t\t\tjson: \"application/json, text/javascript\"\n\t\t},\n\n\t\tcontents: {\n\t\t\txml: /\\bxml\\b/,\n\t\t\thtml: /\\bhtml/,\n\t\t\tjson: /\\bjson\\b/\n\t\t},\n\n\t\tresponseFields: {\n\t\t\txml: \"responseXML\",\n\t\t\ttext: \"responseText\",\n\t\t\tjson: \"responseJSON\"\n\t\t},\n\n\t\t// Data converters\n\t\t// Keys separate source (or catchall \"*\") and destination types with a single space\n\t\tconverters: {\n\n\t\t\t// Convert anything to text\n\t\t\t\"* text\": String,\n\n\t\t\t// Text to html (true = no transformation)\n\t\t\t\"text html\": true,\n\n\t\t\t// Evaluate text as a json expression\n\t\t\t\"text json\": JSON.parse,\n\n\t\t\t// Parse text as xml\n\t\t\t\"text xml\": jQuery.parseXML\n\t\t},\n\n\t\t// For options that shouldn't be deep extended:\n\t\t// you can add your own custom options here if\n\t\t// and when you create one that shouldn't be\n\t\t// deep extended (see ajaxExtend)\n\t\tflatOptions: {\n\t\t\turl: true,\n\t\t\tcontext: true\n\t\t}\n\t},\n\n\t// Creates a full fledged settings object into target\n\t// with both ajaxSettings and settings fields.\n\t// If target is omitted, writes into ajaxSettings.\n\tajaxSetup: function( target, settings ) {\n\t\treturn settings ?\n\n\t\t\t// Building a settings object\n\t\t\tajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :\n\n\t\t\t// Extending ajaxSettings\n\t\t\tajaxExtend( jQuery.ajaxSettings, target );\n\t},\n\n\tajaxPrefilter: addToPrefiltersOrTransports( prefilters ),\n\tajaxTransport: addToPrefiltersOrTransports( transports ),\n\n\t// Main method\n\tajax: function( url, options ) {\n\n\t\t// If url is an object, simulate pre-1.5 signature\n\t\tif ( typeof url === \"object\" ) {\n\t\t\toptions = url;\n\t\t\turl = undefined;\n\t\t}\n\n\t\t// Force options to be an object\n\t\toptions = options || {};\n\n\t\tvar transport,\n\n\t\t\t// URL without anti-cache param\n\t\t\tcacheURL,\n\n\t\t\t// Response headers\n\t\t\tresponseHeadersString,\n\t\t\tresponseHeaders,\n\n\t\t\t// timeout handle\n\t\t\ttimeoutTimer,\n\n\t\t\t// Url cleanup var\n\t\t\turlAnchor,\n\n\t\t\t// Request state (becomes false upon send and true upon completion)\n\t\t\tcompleted,\n\n\t\t\t// To know if global events are to be dispatched\n\t\t\tfireGlobals,\n\n\t\t\t// Loop variable\n\t\t\ti,\n\n\t\t\t// uncached part of the url\n\t\t\tuncached,\n\n\t\t\t// Create the final options object\n\t\t\ts = jQuery.ajaxSetup( {}, options ),\n\n\t\t\t// Callbacks context\n\t\t\tcallbackContext = s.context || s,\n\n\t\t\t// Context for global events is callbackContext if it is a DOM node or jQuery collection\n\t\t\tglobalEventContext = s.context &&\n\t\t\t\t( callbackContext.nodeType || callbackContext.jquery ) ?\n\t\t\t\t\tjQuery( callbackContext ) :\n\t\t\t\t\tjQuery.event,\n\n\t\t\t// Deferreds\n\t\t\tdeferred = jQuery.Deferred(),\n\t\t\tcompleteDeferred = jQuery.Callbacks( \"once memory\" ),\n\n\t\t\t// Status-dependent callbacks\n\t\t\tstatusCode = s.statusCode || {},\n\n\t\t\t// Headers (they are sent all at once)\n\t\t\trequestHeaders = {},\n\t\t\trequestHeadersNames = {},\n\n\t\t\t// Default abort message\n\t\t\tstrAbort = \"canceled\",\n\n\t\t\t// Fake xhr\n\t\t\tjqXHR = {\n\t\t\t\treadyState: 0,\n\n\t\t\t\t// Builds headers hashtable if needed\n\t\t\t\tgetResponseHeader: function( key ) {\n\t\t\t\t\tvar match;\n\t\t\t\t\tif ( completed ) {\n\t\t\t\t\t\tif ( !responseHeaders ) {\n\t\t\t\t\t\t\tresponseHeaders = {};\n\t\t\t\t\t\t\twhile ( ( match = rheaders.exec( responseHeadersString ) ) ) {\n\t\t\t\t\t\t\t\tresponseHeaders[ match[ 1 ].toLowerCase() + \" \" ] =\n\t\t\t\t\t\t\t\t\t( responseHeaders[ match[ 1 ].toLowerCase() + \" \" ] || [] )\n\t\t\t\t\t\t\t\t\t\t.concat( match[ 2 ] );\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tmatch = responseHeaders[ key.toLowerCase() + \" \" ];\n\t\t\t\t\t}\n\t\t\t\t\treturn match == null ? null : match.join( \", \" );\n\t\t\t\t},\n\n\t\t\t\t// Raw string\n\t\t\t\tgetAllResponseHeaders: function() {\n\t\t\t\t\treturn completed ? responseHeadersString : null;\n\t\t\t\t},\n\n\t\t\t\t// Caches the header\n\t\t\t\tsetRequestHeader: function( name, value ) {\n\t\t\t\t\tif ( completed == null ) {\n\t\t\t\t\t\tname = requestHeadersNames[ name.toLowerCase() ] =\n\t\t\t\t\t\t\trequestHeadersNames[ name.toLowerCase() ] || name;\n\t\t\t\t\t\trequestHeaders[ name ] = value;\n\t\t\t\t\t}\n\t\t\t\t\treturn this;\n\t\t\t\t},\n\n\t\t\t\t// Overrides response content-type header\n\t\t\t\toverrideMimeType: function( type ) {\n\t\t\t\t\tif ( completed == null ) {\n\t\t\t\t\t\ts.mimeType = type;\n\t\t\t\t\t}\n\t\t\t\t\treturn this;\n\t\t\t\t},\n\n\t\t\t\t// Status-dependent callbacks\n\t\t\t\tstatusCode: function( map ) {\n\t\t\t\t\tvar code;\n\t\t\t\t\tif ( map ) {\n\t\t\t\t\t\tif ( completed ) {\n\n\t\t\t\t\t\t\t// Execute the appropriate callbacks\n\t\t\t\t\t\t\tjqXHR.always( map[ jqXHR.status ] );\n\t\t\t\t\t\t} else {\n\n\t\t\t\t\t\t\t// Lazy-add the new callbacks in a way that preserves old ones\n\t\t\t\t\t\t\tfor ( code in map ) {\n\t\t\t\t\t\t\t\tstatusCode[ code ] = [ statusCode[ code ], map[ code ] ];\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\treturn this;\n\t\t\t\t},\n\n\t\t\t\t// Cancel the request\n\t\t\t\tabort: function( statusText ) {\n\t\t\t\t\tvar finalText = statusText || strAbort;\n\t\t\t\t\tif ( transport ) {\n\t\t\t\t\t\ttransport.abort( finalText );\n\t\t\t\t\t}\n\t\t\t\t\tdone( 0, finalText );\n\t\t\t\t\treturn this;\n\t\t\t\t}\n\t\t\t};\n\n\t\t// Attach deferreds\n\t\tdeferred.promise( jqXHR );\n\n\t\t// Add protocol if not provided (prefilters might expect it)\n\t\t// Handle falsy url in the settings object (#10093: consistency with old signature)\n\t\t// We also use the url parameter if available\n\t\ts.url = ( ( url || s.url || location.href ) + \"\" )\n\t\t\t.replace( rprotocol, location.protocol + \"//\" );\n\n\t\t// Alias method option to type as per ticket #12004\n\t\ts.type = options.method || options.type || s.method || s.type;\n\n\t\t// Extract dataTypes list\n\t\ts.dataTypes = ( s.dataType || \"*\" ).toLowerCase().match( rnothtmlwhite ) || [ \"\" ];\n\n\t\t// A cross-domain request is in order when the origin doesn't match the current origin.\n\t\tif ( s.crossDomain == null ) {\n\t\t\turlAnchor = document.createElement( \"a\" );\n\n\t\t\t// Support: IE <=8 - 11, Edge 12 - 15\n\t\t\t// IE throws exception on accessing the href property if url is malformed,\n\t\t\t// e.g. http://example.com:80x/\n\t\t\ttry {\n\t\t\t\turlAnchor.href = s.url;\n\n\t\t\t\t// Support: IE <=8 - 11 only\n\t\t\t\t// Anchor's host property isn't correctly set when s.url is relative\n\t\t\t\turlAnchor.href = urlAnchor.href;\n\t\t\t\ts.crossDomain = originAnchor.protocol + \"//\" + originAnchor.host !==\n\t\t\t\t\turlAnchor.protocol + \"//\" + urlAnchor.host;\n\t\t\t} catch ( e ) {\n\n\t\t\t\t// If there is an error parsing the URL, assume it is crossDomain,\n\t\t\t\t// it can be rejected by the transport if it is invalid\n\t\t\t\ts.crossDomain = true;\n\t\t\t}\n\t\t}\n\n\t\t// Convert data if not already a string\n\t\tif ( s.data && s.processData && typeof s.data !== \"string\" ) {\n\t\t\ts.data = jQuery.param( s.data, s.traditional );\n\t\t}\n\n\t\t// Apply prefilters\n\t\tinspectPrefiltersOrTransports( prefilters, s, options, jqXHR );\n\n\t\t// If request was aborted inside a prefilter, stop there\n\t\tif ( completed ) {\n\t\t\treturn jqXHR;\n\t\t}\n\n\t\t// We can fire global events as of now if asked to\n\t\t// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)\n\t\tfireGlobals = jQuery.event && s.global;\n\n\t\t// Watch for a new set of requests\n\t\tif ( fireGlobals && jQuery.active++ === 0 ) {\n\t\t\tjQuery.event.trigger( \"ajaxStart\" );\n\t\t}\n\n\t\t// Uppercase the type\n\t\ts.type = s.type.toUpperCase();\n\n\t\t// Determine if request has content\n\t\ts.hasContent = !rnoContent.test( s.type );\n\n\t\t// Save the URL in case we're toying with the If-Modified-Since\n\t\t// and/or If-None-Match header later on\n\t\t// Remove hash to simplify url manipulation\n\t\tcacheURL = s.url.replace( rhash, \"\" );\n\n\t\t// More options handling for requests with no content\n\t\tif ( !s.hasContent ) {\n\n\t\t\t// Remember the hash so we can put it back\n\t\t\tuncached = s.url.slice( cacheURL.length );\n\n\t\t\t// If data is available and should be processed, append data to url\n\t\t\tif ( s.data && ( s.processData || typeof s.data === \"string\" ) ) {\n\t\t\t\tcacheURL += ( rquery.test( cacheURL ) ? \"&\" : \"?\" ) + s.data;\n\n\t\t\t\t// #9682: remove data so that it's not used in an eventual retry\n\t\t\t\tdelete s.data;\n\t\t\t}\n\n\t\t\t// Add or update anti-cache param if needed\n\t\t\tif ( s.cache === false ) {\n\t\t\t\tcacheURL = cacheURL.replace( rantiCache, \"$1\" );\n\t\t\t\tuncached = ( rquery.test( cacheURL ) ? \"&\" : \"?\" ) + \"_=\" + ( nonce.guid++ ) +\n\t\t\t\t\tuncached;\n\t\t\t}\n\n\t\t\t// Put hash and anti-cache on the URL that will be requested (gh-1732)\n\t\t\ts.url = cacheURL + uncached;\n\n\t\t// Change '%20' to '+' if this is encoded form body content (gh-2658)\n\t\t} else if ( s.data && s.processData &&\n\t\t\t( s.contentType || \"\" ).indexOf( \"application/x-www-form-urlencoded\" ) === 0 ) {\n\t\t\ts.data = s.data.replace( r20, \"+\" );\n\t\t}\n\n\t\t// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.\n\t\tif ( s.ifModified ) {\n\t\t\tif ( jQuery.lastModified[ cacheURL ] ) {\n\t\t\t\tjqXHR.setRequestHeader( \"If-Modified-Since\", jQuery.lastModified[ cacheURL ] );\n\t\t\t}\n\t\t\tif ( jQuery.etag[ cacheURL ] ) {\n\t\t\t\tjqXHR.setRequestHeader( \"If-None-Match\", jQuery.etag[ cacheURL ] );\n\t\t\t}\n\t\t}\n\n\t\t// Set the correct header, if data is being sent\n\t\tif ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {\n\t\t\tjqXHR.setRequestHeader( \"Content-Type\", s.contentType );\n\t\t}\n\n\t\t// Set the Accepts header for the server, depending on the dataType\n\t\tjqXHR.setRequestHeader(\n\t\t\t\"Accept\",\n\t\t\ts.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?\n\t\t\t\ts.accepts[ s.dataTypes[ 0 ] ] +\n\t\t\t\t\t( s.dataTypes[ 0 ] !== \"*\" ? \", \" + allTypes + \"; q=0.01\" : \"\" ) :\n\t\t\t\ts.accepts[ \"*\" ]\n\t\t);\n\n\t\t// Check for headers option\n\t\tfor ( i in s.headers ) {\n\t\t\tjqXHR.setRequestHeader( i, s.headers[ i ] );\n\t\t}\n\n\t\t// Allow custom headers/mimetypes and early abort\n\t\tif ( s.beforeSend &&\n\t\t\t( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {\n\n\t\t\t// Abort if not done already and return\n\t\t\treturn jqXHR.abort();\n\t\t}\n\n\t\t// Aborting is no longer a cancellation\n\t\tstrAbort = \"abort\";\n\n\t\t// Install callbacks on deferreds\n\t\tcompleteDeferred.add( s.complete );\n\t\tjqXHR.done( s.success );\n\t\tjqXHR.fail( s.error );\n\n\t\t// Get transport\n\t\ttransport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );\n\n\t\t// If no transport, we auto-abort\n\t\tif ( !transport ) {\n\t\t\tdone( -1, \"No Transport\" );\n\t\t} else {\n\t\t\tjqXHR.readyState = 1;\n\n\t\t\t// Send global event\n\t\t\tif ( fireGlobals ) {\n\t\t\t\tglobalEventContext.trigger( \"ajaxSend\", [ jqXHR, s ] );\n\t\t\t}\n\n\t\t\t// If request was aborted inside ajaxSend, stop there\n\t\t\tif ( completed ) {\n\t\t\t\treturn jqXHR;\n\t\t\t}\n\n\t\t\t// Timeout\n\t\t\tif ( s.async && s.timeout > 0 ) {\n\t\t\t\ttimeoutTimer = window.setTimeout( function() {\n\t\t\t\t\tjqXHR.abort( \"timeout\" );\n\t\t\t\t}, s.timeout );\n\t\t\t}\n\n\t\t\ttry {\n\t\t\t\tcompleted = false;\n\t\t\t\ttransport.send( requestHeaders, done );\n\t\t\t} catch ( e ) {\n\n\t\t\t\t// Rethrow post-completion exceptions\n\t\t\t\tif ( completed ) {\n\t\t\t\t\tthrow e;\n\t\t\t\t}\n\n\t\t\t\t// Propagate others as results\n\t\t\t\tdone( -1, e );\n\t\t\t}\n\t\t}\n\n\t\t// Callback for when everything is done\n\t\tfunction done( status, nativeStatusText, responses, headers ) {\n\t\t\tvar isSuccess, success, error, response, modified,\n\t\t\t\tstatusText = nativeStatusText;\n\n\t\t\t// Ignore repeat invocations\n\t\t\tif ( completed ) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tcompleted = true;\n\n\t\t\t// Clear timeout if it exists\n\t\t\tif ( timeoutTimer ) {\n\t\t\t\twindow.clearTimeout( timeoutTimer );\n\t\t\t}\n\n\t\t\t// Dereference transport for early garbage collection\n\t\t\t// (no matter how long the jqXHR object will be used)\n\t\t\ttransport = undefined;\n\n\t\t\t// Cache response headers\n\t\t\tresponseHeadersString = headers || \"\";\n\n\t\t\t// Set readyState\n\t\t\tjqXHR.readyState = status > 0 ? 4 : 0;\n\n\t\t\t// Determine if successful\n\t\t\tisSuccess = status >= 200 && status < 300 || status === 304;\n\n\t\t\t// Get response data\n\t\t\tif ( responses ) {\n\t\t\t\tresponse = ajaxHandleResponses( s, jqXHR, responses );\n\t\t\t}\n\n\t\t\t// Use a noop converter for missing script\n\t\t\tif ( !isSuccess && jQuery.inArray( \"script\", s.dataTypes ) > -1 ) {\n\t\t\t\ts.converters[ \"text script\" ] = function() {};\n\t\t\t}\n\n\t\t\t// Convert no matter what (that way responseXXX fields are always set)\n\t\t\tresponse = ajaxConvert( s, response, jqXHR, isSuccess );\n\n\t\t\t// If successful, handle type chaining\n\t\t\tif ( isSuccess ) {\n\n\t\t\t\t// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.\n\t\t\t\tif ( s.ifModified ) {\n\t\t\t\t\tmodified = jqXHR.getResponseHeader( \"Last-Modified\" );\n\t\t\t\t\tif ( modified ) {\n\t\t\t\t\t\tjQuery.lastModified[ cacheURL ] = modified;\n\t\t\t\t\t}\n\t\t\t\t\tmodified = jqXHR.getResponseHeader( \"etag\" );\n\t\t\t\t\tif ( modified ) {\n\t\t\t\t\t\tjQuery.etag[ cacheURL ] = modified;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// if no content\n\t\t\t\tif ( status === 204 || s.type === \"HEAD\" ) {\n\t\t\t\t\tstatusText = \"nocontent\";\n\n\t\t\t\t// if not modified\n\t\t\t\t} else if ( status === 304 ) {\n\t\t\t\t\tstatusText = \"notmodified\";\n\n\t\t\t\t// If we have data, let's convert it\n\t\t\t\t} else {\n\t\t\t\t\tstatusText = response.state;\n\t\t\t\t\tsuccess = response.data;\n\t\t\t\t\terror = response.error;\n\t\t\t\t\tisSuccess = !error;\n\t\t\t\t}\n\t\t\t} else {\n\n\t\t\t\t// Extract error from statusText and normalize for non-aborts\n\t\t\t\terror = statusText;\n\t\t\t\tif ( status || !statusText ) {\n\t\t\t\t\tstatusText = \"error\";\n\t\t\t\t\tif ( status < 0 ) {\n\t\t\t\t\t\tstatus = 0;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Set data for the fake xhr object\n\t\t\tjqXHR.status = status;\n\t\t\tjqXHR.statusText = ( nativeStatusText || statusText ) + \"\";\n\n\t\t\t// Success/Error\n\t\t\tif ( isSuccess ) {\n\t\t\t\tdeferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );\n\t\t\t} else {\n\t\t\t\tdeferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );\n\t\t\t}\n\n\t\t\t// Status-dependent callbacks\n\t\t\tjqXHR.statusCode( statusCode );\n\t\t\tstatusCode = undefined;\n\n\t\t\tif ( fireGlobals ) {\n\t\t\t\tglobalEventContext.trigger( isSuccess ? \"ajaxSuccess\" : \"ajaxError\",\n\t\t\t\t\t[ jqXHR, s, isSuccess ? success : error ] );\n\t\t\t}\n\n\t\t\t// Complete\n\t\t\tcompleteDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );\n\n\t\t\tif ( fireGlobals ) {\n\t\t\t\tglobalEventContext.trigger( \"ajaxComplete\", [ jqXHR, s ] );\n\n\t\t\t\t// Handle the global AJAX counter\n\t\t\t\tif ( !( --jQuery.active ) ) {\n\t\t\t\t\tjQuery.event.trigger( \"ajaxStop\" );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn jqXHR;\n\t},\n\n\tgetJSON: function( url, data, callback ) {\n\t\treturn jQuery.get( url, data, callback, \"json\" );\n\t},\n\n\tgetScript: function( url, callback ) {\n\t\treturn jQuery.get( url, undefined, callback, \"script\" );\n\t}\n} );\n\njQuery.each( [ \"get\", \"post\" ], function( _i, method ) {\n\tjQuery[ method ] = function( url, data, callback, type ) {\n\n\t\t// Shift arguments if data argument was omitted\n\t\tif ( isFunction( data ) ) {\n\t\t\ttype = type || callback;\n\t\t\tcallback = data;\n\t\t\tdata = undefined;\n\t\t}\n\n\t\t// The url can be an options object (which then must have .url)\n\t\treturn jQuery.ajax( jQuery.extend( {\n\t\t\turl: url,\n\t\t\ttype: method,\n\t\t\tdataType: type,\n\t\t\tdata: data,\n\t\t\tsuccess: callback\n\t\t}, jQuery.isPlainObject( url ) && url ) );\n\t};\n} );\n\njQuery.ajaxPrefilter( function( s ) {\n\tvar i;\n\tfor ( i in s.headers ) {\n\t\tif ( i.toLowerCase() === \"content-type\" ) {\n\t\t\ts.contentType = s.headers[ i ] || \"\";\n\t\t}\n\t}\n} );\n\n\njQuery._evalUrl = function( url, options, doc ) {\n\treturn jQuery.ajax( {\n\t\turl: url,\n\n\t\t// Make this explicit, since user can override this through ajaxSetup (#11264)\n\t\ttype: \"GET\",\n\t\tdataType: \"script\",\n\t\tcache: true,\n\t\tasync: false,\n\t\tglobal: false,\n\n\t\t// Only evaluate the response if it is successful (gh-4126)\n\t\t// dataFilter is not invoked for failure responses, so using it instead\n\t\t// of the default converter is kludgy but it works.\n\t\tconverters: {\n\t\t\t\"text script\": function() {}\n\t\t},\n\t\tdataFilter: function( response ) {\n\t\t\tjQuery.globalEval( response, options, doc );\n\t\t}\n\t} );\n};\n\n\njQuery.fn.extend( {\n\twrapAll: function( html ) {\n\t\tvar wrap;\n\n\t\tif ( this[ 0 ] ) {\n\t\t\tif ( isFunction( html ) ) {\n\t\t\t\thtml = html.call( this[ 0 ] );\n\t\t\t}\n\n\t\t\t// The elements to wrap the target around\n\t\t\twrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );\n\n\t\t\tif ( this[ 0 ].parentNode ) {\n\t\t\t\twrap.insertBefore( this[ 0 ] );\n\t\t\t}\n\n\t\t\twrap.map( function() {\n\t\t\t\tvar elem = this;\n\n\t\t\t\twhile ( elem.firstElementChild ) {\n\t\t\t\t\telem = elem.firstElementChild;\n\t\t\t\t}\n\n\t\t\t\treturn elem;\n\t\t\t} ).append( this );\n\t\t}\n\n\t\treturn this;\n\t},\n\n\twrapInner: function( html ) {\n\t\tif ( isFunction( html ) ) {\n\t\t\treturn this.each( function( i ) {\n\t\t\t\tjQuery( this ).wrapInner( html.call( this, i ) );\n\t\t\t} );\n\t\t}\n\n\t\treturn this.each( function() {\n\t\t\tvar self = jQuery( this ),\n\t\t\t\tcontents = self.contents();\n\n\t\t\tif ( contents.length ) {\n\t\t\t\tcontents.wrapAll( html );\n\n\t\t\t} else {\n\t\t\t\tself.append( html );\n\t\t\t}\n\t\t} );\n\t},\n\n\twrap: function( html ) {\n\t\tvar htmlIsFunction = isFunction( html );\n\n\t\treturn this.each( function( i ) {\n\t\t\tjQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );\n\t\t} );\n\t},\n\n\tunwrap: function( selector ) {\n\t\tthis.parent( selector ).not( \"body\" ).each( function() {\n\t\t\tjQuery( this ).replaceWith( this.childNodes );\n\t\t} );\n\t\treturn this;\n\t}\n} );\n\n\njQuery.expr.pseudos.hidden = function( elem ) {\n\treturn !jQuery.expr.pseudos.visible( elem );\n};\njQuery.expr.pseudos.visible = function( elem ) {\n\treturn !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );\n};\n\n\n\n\njQuery.ajaxSettings.xhr = function() {\n\ttry {\n\t\treturn new window.XMLHttpRequest();\n\t} catch ( e ) {}\n};\n\nvar xhrSuccessStatus = {\n\n\t\t// File protocol always yields status code 0, assume 200\n\t\t0: 200,\n\n\t\t// Support: IE <=9 only\n\t\t// #1450: sometimes IE returns 1223 when it should be 204\n\t\t1223: 204\n\t},\n\txhrSupported = jQuery.ajaxSettings.xhr();\n\nsupport.cors = !!xhrSupported && ( \"withCredentials\" in xhrSupported );\nsupport.ajax = xhrSupported = !!xhrSupported;\n\njQuery.ajaxTransport( function( options ) {\n\tvar callback, errorCallback;\n\n\t// Cross domain only allowed if supported through XMLHttpRequest\n\tif ( support.cors || xhrSupported && !options.crossDomain ) {\n\t\treturn {\n\t\t\tsend: function( headers, complete ) {\n\t\t\t\tvar i,\n\t\t\t\t\txhr = options.xhr();\n\n\t\t\t\txhr.open(\n\t\t\t\t\toptions.type,\n\t\t\t\t\toptions.url,\n\t\t\t\t\toptions.async,\n\t\t\t\t\toptions.username,\n\t\t\t\t\toptions.password\n\t\t\t\t);\n\n\t\t\t\t// Apply custom fields if provided\n\t\t\t\tif ( options.xhrFields ) {\n\t\t\t\t\tfor ( i in options.xhrFields ) {\n\t\t\t\t\t\txhr[ i ] = options.xhrFields[ i ];\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Override mime type if needed\n\t\t\t\tif ( options.mimeType && xhr.overrideMimeType ) {\n\t\t\t\t\txhr.overrideMimeType( options.mimeType );\n\t\t\t\t}\n\n\t\t\t\t// X-Requested-With header\n\t\t\t\t// For cross-domain requests, seeing as conditions for a preflight are\n\t\t\t\t// akin to a jigsaw puzzle, we simply never set it to be sure.\n\t\t\t\t// (it can always be set on a per-request basis or even using ajaxSetup)\n\t\t\t\t// For same-domain requests, won't change header if already provided.\n\t\t\t\tif ( !options.crossDomain && !headers[ \"X-Requested-With\" ] ) {\n\t\t\t\t\theaders[ \"X-Requested-With\" ] = \"XMLHttpRequest\";\n\t\t\t\t}\n\n\t\t\t\t// Set headers\n\t\t\t\tfor ( i in headers ) {\n\t\t\t\t\txhr.setRequestHeader( i, headers[ i ] );\n\t\t\t\t}\n\n\t\t\t\t// Callback\n\t\t\t\tcallback = function( type ) {\n\t\t\t\t\treturn function() {\n\t\t\t\t\t\tif ( callback ) {\n\t\t\t\t\t\t\tcallback = errorCallback = xhr.onload =\n\t\t\t\t\t\t\t\txhr.onerror = xhr.onabort = xhr.ontimeout =\n\t\t\t\t\t\t\t\t\txhr.onreadystatechange = null;\n\n\t\t\t\t\t\t\tif ( type === \"abort\" ) {\n\t\t\t\t\t\t\t\txhr.abort();\n\t\t\t\t\t\t\t} else if ( type === \"error\" ) {\n\n\t\t\t\t\t\t\t\t// Support: IE <=9 only\n\t\t\t\t\t\t\t\t// On a manual native abort, IE9 throws\n\t\t\t\t\t\t\t\t// errors on any property access that is not readyState\n\t\t\t\t\t\t\t\tif ( typeof xhr.status !== \"number\" ) {\n\t\t\t\t\t\t\t\t\tcomplete( 0, \"error\" );\n\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\tcomplete(\n\n\t\t\t\t\t\t\t\t\t\t// File: protocol always yields status 0; see #8605, #14207\n\t\t\t\t\t\t\t\t\t\txhr.status,\n\t\t\t\t\t\t\t\t\t\txhr.statusText\n\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tcomplete(\n\t\t\t\t\t\t\t\t\txhrSuccessStatus[ xhr.status ] || xhr.status,\n\t\t\t\t\t\t\t\t\txhr.statusText,\n\n\t\t\t\t\t\t\t\t\t// Support: IE <=9 only\n\t\t\t\t\t\t\t\t\t// IE9 has no XHR2 but throws on binary (trac-11426)\n\t\t\t\t\t\t\t\t\t// For XHR2 non-text, let the caller handle it (gh-2498)\n\t\t\t\t\t\t\t\t\t( xhr.responseType || \"text\" ) !== \"text\"  ||\n\t\t\t\t\t\t\t\t\ttypeof xhr.responseText !== \"string\" ?\n\t\t\t\t\t\t\t\t\t\t{ binary: xhr.response } :\n\t\t\t\t\t\t\t\t\t\t{ text: xhr.responseText },\n\t\t\t\t\t\t\t\t\txhr.getAllResponseHeaders()\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t};\n\n\t\t\t\t// Listen to events\n\t\t\t\txhr.onload = callback();\n\t\t\t\terrorCallback = xhr.onerror = xhr.ontimeout = callback( \"error\" );\n\n\t\t\t\t// Support: IE 9 only\n\t\t\t\t// Use onreadystatechange to replace onabort\n\t\t\t\t// to handle uncaught aborts\n\t\t\t\tif ( xhr.onabort !== undefined ) {\n\t\t\t\t\txhr.onabort = errorCallback;\n\t\t\t\t} else {\n\t\t\t\t\txhr.onreadystatechange = function() {\n\n\t\t\t\t\t\t// Check readyState before timeout as it changes\n\t\t\t\t\t\tif ( xhr.readyState === 4 ) {\n\n\t\t\t\t\t\t\t// Allow onerror to be called first,\n\t\t\t\t\t\t\t// but that will not handle a native abort\n\t\t\t\t\t\t\t// Also, save errorCallback to a variable\n\t\t\t\t\t\t\t// as xhr.onerror cannot be accessed\n\t\t\t\t\t\t\twindow.setTimeout( function() {\n\t\t\t\t\t\t\t\tif ( callback ) {\n\t\t\t\t\t\t\t\t\terrorCallback();\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t} );\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t}\n\n\t\t\t\t// Create the abort callback\n\t\t\t\tcallback = callback( \"abort\" );\n\n\t\t\t\ttry {\n\n\t\t\t\t\t// Do send the request (this may raise an exception)\n\t\t\t\t\txhr.send( options.hasContent && options.data || null );\n\t\t\t\t} catch ( e ) {\n\n\t\t\t\t\t// #14683: Only rethrow if this hasn't been notified as an error yet\n\t\t\t\t\tif ( callback ) {\n\t\t\t\t\t\tthrow e;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\n\t\t\tabort: function() {\n\t\t\t\tif ( callback ) {\n\t\t\t\t\tcallback();\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t}\n} );\n\n\n\n\n// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)\njQuery.ajaxPrefilter( function( s ) {\n\tif ( s.crossDomain ) {\n\t\ts.contents.script = false;\n\t}\n} );\n\n// Install script dataType\njQuery.ajaxSetup( {\n\taccepts: {\n\t\tscript: \"text/javascript, application/javascript, \" +\n\t\t\t\"application/ecmascript, application/x-ecmascript\"\n\t},\n\tcontents: {\n\t\tscript: /\\b(?:java|ecma)script\\b/\n\t},\n\tconverters: {\n\t\t\"text script\": function( text ) {\n\t\t\tjQuery.globalEval( text );\n\t\t\treturn text;\n\t\t}\n\t}\n} );\n\n// Handle cache's special case and crossDomain\njQuery.ajaxPrefilter( \"script\", function( s ) {\n\tif ( s.cache === undefined ) {\n\t\ts.cache = false;\n\t}\n\tif ( s.crossDomain ) {\n\t\ts.type = \"GET\";\n\t}\n} );\n\n// Bind script tag hack transport\njQuery.ajaxTransport( \"script\", function( s ) {\n\n\t// This transport only deals with cross domain or forced-by-attrs requests\n\tif ( s.crossDomain || s.scriptAttrs ) {\n\t\tvar script, callback;\n\t\treturn {\n\t\t\tsend: function( _, complete ) {\n\t\t\t\tscript = jQuery( \"<script>\" )\n\t\t\t\t\t.attr( s.scriptAttrs || {} )\n\t\t\t\t\t.prop( { charset: s.scriptCharset, src: s.url } )\n\t\t\t\t\t.on( \"load error\", callback = function( evt ) {\n\t\t\t\t\t\tscript.remove();\n\t\t\t\t\t\tcallback = null;\n\t\t\t\t\t\tif ( evt ) {\n\t\t\t\t\t\t\tcomplete( evt.type === \"error\" ? 404 : 200, evt.type );\n\t\t\t\t\t\t}\n\t\t\t\t\t} );\n\n\t\t\t\t// Use native DOM manipulation to avoid our domManip AJAX trickery\n\t\t\t\tdocument.head.appendChild( script[ 0 ] );\n\t\t\t},\n\t\t\tabort: function() {\n\t\t\t\tif ( callback ) {\n\t\t\t\t\tcallback();\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t}\n} );\n\n\n\n\nvar oldCallbacks = [],\n\trjsonp = /(=)\\?(?=&|$)|\\?\\?/;\n\n// Default jsonp settings\njQuery.ajaxSetup( {\n\tjsonp: \"callback\",\n\tjsonpCallback: function() {\n\t\tvar callback = oldCallbacks.pop() || ( jQuery.expando + \"_\" + ( nonce.guid++ ) );\n\t\tthis[ callback ] = true;\n\t\treturn callback;\n\t}\n} );\n\n// Detect, normalize options and install callbacks for jsonp requests\njQuery.ajaxPrefilter( \"json jsonp\", function( s, originalSettings, jqXHR ) {\n\n\tvar callbackName, overwritten, responseContainer,\n\t\tjsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?\n\t\t\t\"url\" :\n\t\t\ttypeof s.data === \"string\" &&\n\t\t\t\t( s.contentType || \"\" )\n\t\t\t\t\t.indexOf( \"application/x-www-form-urlencoded\" ) === 0 &&\n\t\t\t\trjsonp.test( s.data ) && \"data\"\n\t\t);\n\n\t// Handle iff the expected data type is \"jsonp\" or we have a parameter to set\n\tif ( jsonProp || s.dataTypes[ 0 ] === \"jsonp\" ) {\n\n\t\t// Get callback name, remembering preexisting value associated with it\n\t\tcallbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?\n\t\t\ts.jsonpCallback() :\n\t\t\ts.jsonpCallback;\n\n\t\t// Insert callback into url or form data\n\t\tif ( jsonProp ) {\n\t\t\ts[ jsonProp ] = s[ jsonProp ].replace( rjsonp, \"$1\" + callbackName );\n\t\t} else if ( s.jsonp !== false ) {\n\t\t\ts.url += ( rquery.test( s.url ) ? \"&\" : \"?\" ) + s.jsonp + \"=\" + callbackName;\n\t\t}\n\n\t\t// Use data converter to retrieve json after script execution\n\t\ts.converters[ \"script json\" ] = function() {\n\t\t\tif ( !responseContainer ) {\n\t\t\t\tjQuery.error( callbackName + \" was not called\" );\n\t\t\t}\n\t\t\treturn responseContainer[ 0 ];\n\t\t};\n\n\t\t// Force json dataType\n\t\ts.dataTypes[ 0 ] = \"json\";\n\n\t\t// Install callback\n\t\toverwritten = window[ callbackName ];\n\t\twindow[ callbackName ] = function() {\n\t\t\tresponseContainer = arguments;\n\t\t};\n\n\t\t// Clean-up function (fires after converters)\n\t\tjqXHR.always( function() {\n\n\t\t\t// If previous value didn't exist - remove it\n\t\t\tif ( overwritten === undefined ) {\n\t\t\t\tjQuery( window ).removeProp( callbackName );\n\n\t\t\t// Otherwise restore preexisting value\n\t\t\t} else {\n\t\t\t\twindow[ callbackName ] = overwritten;\n\t\t\t}\n\n\t\t\t// Save back as free\n\t\t\tif ( s[ callbackName ] ) {\n\n\t\t\t\t// Make sure that re-using the options doesn't screw things around\n\t\t\t\ts.jsonpCallback = originalSettings.jsonpCallback;\n\n\t\t\t\t// Save the callback name for future use\n\t\t\t\toldCallbacks.push( callbackName );\n\t\t\t}\n\n\t\t\t// Call if it was a function and we have a response\n\t\t\tif ( responseContainer && isFunction( overwritten ) ) {\n\t\t\t\toverwritten( responseContainer[ 0 ] );\n\t\t\t}\n\n\t\t\tresponseContainer = overwritten = undefined;\n\t\t} );\n\n\t\t// Delegate to script\n\t\treturn \"script\";\n\t}\n} );\n\n\n\n\n// Support: Safari 8 only\n// In Safari 8 documents created via document.implementation.createHTMLDocument\n// collapse sibling forms: the second one becomes a child of the first one.\n// Because of that, this security measure has to be disabled in Safari 8.\n// https://bugs.webkit.org/show_bug.cgi?id=137337\nsupport.createHTMLDocument = ( function() {\n\tvar body = document.implementation.createHTMLDocument( \"\" ).body;\n\tbody.innerHTML = \"<form></form><form></form>\";\n\treturn body.childNodes.length === 2;\n} )();\n\n\n// Argument \"data\" should be string of html\n// context (optional): If specified, the fragment will be created in this context,\n// defaults to document\n// keepScripts (optional): If true, will include scripts passed in the html string\njQuery.parseHTML = function( data, context, keepScripts ) {\n\tif ( typeof data !== \"string\" ) {\n\t\treturn [];\n\t}\n\tif ( typeof context === \"boolean\" ) {\n\t\tkeepScripts = context;\n\t\tcontext = false;\n\t}\n\n\tvar base, parsed, scripts;\n\n\tif ( !context ) {\n\n\t\t// Stop scripts or inline event handlers from being executed immediately\n\t\t// by using document.implementation\n\t\tif ( support.createHTMLDocument ) {\n\t\t\tcontext = document.implementation.createHTMLDocument( \"\" );\n\n\t\t\t// Set the base href for the created document\n\t\t\t// so any parsed elements with URLs\n\t\t\t// are based on the document's URL (gh-2965)\n\t\t\tbase = context.createElement( \"base\" );\n\t\t\tbase.href = document.location.href;\n\t\t\tcontext.head.appendChild( base );\n\t\t} else {\n\t\t\tcontext = document;\n\t\t}\n\t}\n\n\tparsed = rsingleTag.exec( data );\n\tscripts = !keepScripts && [];\n\n\t// Single tag\n\tif ( parsed ) {\n\t\treturn [ context.createElement( parsed[ 1 ] ) ];\n\t}\n\n\tparsed = buildFragment( [ data ], context, scripts );\n\n\tif ( scripts && scripts.length ) {\n\t\tjQuery( scripts ).remove();\n\t}\n\n\treturn jQuery.merge( [], parsed.childNodes );\n};\n\n\n/**\n * Load a url into a page\n */\njQuery.fn.load = function( url, params, callback ) {\n\tvar selector, type, response,\n\t\tself = this,\n\t\toff = url.indexOf( \" \" );\n\n\tif ( off > -1 ) {\n\t\tselector = stripAndCollapse( url.slice( off ) );\n\t\turl = url.slice( 0, off );\n\t}\n\n\t// If it's a function\n\tif ( isFunction( params ) ) {\n\n\t\t// We assume that it's the callback\n\t\tcallback = params;\n\t\tparams = undefined;\n\n\t// Otherwise, build a param string\n\t} else if ( params && typeof params === \"object\" ) {\n\t\ttype = \"POST\";\n\t}\n\n\t// If we have elements to modify, make the request\n\tif ( self.length > 0 ) {\n\t\tjQuery.ajax( {\n\t\t\turl: url,\n\n\t\t\t// If \"type\" variable is undefined, then \"GET\" method will be used.\n\t\t\t// Make value of this field explicit since\n\t\t\t// user can override it through ajaxSetup method\n\t\t\ttype: type || \"GET\",\n\t\t\tdataType: \"html\",\n\t\t\tdata: params\n\t\t} ).done( function( responseText ) {\n\n\t\t\t// Save response for use in complete callback\n\t\t\tresponse = arguments;\n\n\t\t\tself.html( selector ?\n\n\t\t\t\t// If a selector was specified, locate the right elements in a dummy div\n\t\t\t\t// Exclude scripts to avoid IE 'Permission Denied' errors\n\t\t\t\tjQuery( \"<div>\" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :\n\n\t\t\t\t// Otherwise use the full result\n\t\t\t\tresponseText );\n\n\t\t// If the request succeeds, this function gets \"data\", \"status\", \"jqXHR\"\n\t\t// but they are ignored because response was set above.\n\t\t// If it fails, this function gets \"jqXHR\", \"status\", \"error\"\n\t\t} ).always( callback && function( jqXHR, status ) {\n\t\t\tself.each( function() {\n\t\t\t\tcallback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );\n\t\t\t} );\n\t\t} );\n\t}\n\n\treturn this;\n};\n\n\n\n\njQuery.expr.pseudos.animated = function( elem ) {\n\treturn jQuery.grep( jQuery.timers, function( fn ) {\n\t\treturn elem === fn.elem;\n\t} ).length;\n};\n\n\n\n\njQuery.offset = {\n\tsetOffset: function( elem, options, i ) {\n\t\tvar curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,\n\t\t\tposition = jQuery.css( elem, \"position\" ),\n\t\t\tcurElem = jQuery( elem ),\n\t\t\tprops = {};\n\n\t\t// Set position first, in-case top/left are set even on static elem\n\t\tif ( position === \"static\" ) {\n\t\t\telem.style.position = \"relative\";\n\t\t}\n\n\t\tcurOffset = curElem.offset();\n\t\tcurCSSTop = jQuery.css( elem, \"top\" );\n\t\tcurCSSLeft = jQuery.css( elem, \"left\" );\n\t\tcalculatePosition = ( position === \"absolute\" || position === \"fixed\" ) &&\n\t\t\t( curCSSTop + curCSSLeft ).indexOf( \"auto\" ) > -1;\n\n\t\t// Need to be able to calculate position if either\n\t\t// top or left is auto and position is either absolute or fixed\n\t\tif ( calculatePosition ) {\n\t\t\tcurPosition = curElem.position();\n\t\t\tcurTop = curPosition.top;\n\t\t\tcurLeft = curPosition.left;\n\n\t\t} else {\n\t\t\tcurTop = parseFloat( curCSSTop ) || 0;\n\t\t\tcurLeft = parseFloat( curCSSLeft ) || 0;\n\t\t}\n\n\t\tif ( isFunction( options ) ) {\n\n\t\t\t// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)\n\t\t\toptions = options.call( elem, i, jQuery.extend( {}, curOffset ) );\n\t\t}\n\n\t\tif ( options.top != null ) {\n\t\t\tprops.top = ( options.top - curOffset.top ) + curTop;\n\t\t}\n\t\tif ( options.left != null ) {\n\t\t\tprops.left = ( options.left - curOffset.left ) + curLeft;\n\t\t}\n\n\t\tif ( \"using\" in options ) {\n\t\t\toptions.using.call( elem, props );\n\n\t\t} else {\n\t\t\tif ( typeof props.top === \"number\" ) {\n\t\t\t\tprops.top += \"px\";\n\t\t\t}\n\t\t\tif ( typeof props.left === \"number\" ) {\n\t\t\t\tprops.left += \"px\";\n\t\t\t}\n\t\t\tcurElem.css( props );\n\t\t}\n\t}\n};\n\njQuery.fn.extend( {\n\n\t// offset() relates an element's border box to the document origin\n\toffset: function( options ) {\n\n\t\t// Preserve chaining for setter\n\t\tif ( arguments.length ) {\n\t\t\treturn options === undefined ?\n\t\t\t\tthis :\n\t\t\t\tthis.each( function( i ) {\n\t\t\t\t\tjQuery.offset.setOffset( this, options, i );\n\t\t\t\t} );\n\t\t}\n\n\t\tvar rect, win,\n\t\t\telem = this[ 0 ];\n\n\t\tif ( !elem ) {\n\t\t\treturn;\n\t\t}\n\n\t\t// Return zeros for disconnected and hidden (display: none) elements (gh-2310)\n\t\t// Support: IE <=11 only\n\t\t// Running getBoundingClientRect on a\n\t\t// disconnected node in IE throws an error\n\t\tif ( !elem.getClientRects().length ) {\n\t\t\treturn { top: 0, left: 0 };\n\t\t}\n\n\t\t// Get document-relative position by adding viewport scroll to viewport-relative gBCR\n\t\trect = elem.getBoundingClientRect();\n\t\twin = elem.ownerDocument.defaultView;\n\t\treturn {\n\t\t\ttop: rect.top + win.pageYOffset,\n\t\t\tleft: rect.left + win.pageXOffset\n\t\t};\n\t},\n\n\t// position() relates an element's margin box to its offset parent's padding box\n\t// This corresponds to the behavior of CSS absolute positioning\n\tposition: function() {\n\t\tif ( !this[ 0 ] ) {\n\t\t\treturn;\n\t\t}\n\n\t\tvar offsetParent, offset, doc,\n\t\t\telem = this[ 0 ],\n\t\t\tparentOffset = { top: 0, left: 0 };\n\n\t\t// position:fixed elements are offset from the viewport, which itself always has zero offset\n\t\tif ( jQuery.css( elem, \"position\" ) === \"fixed\" ) {\n\n\t\t\t// Assume position:fixed implies availability of getBoundingClientRect\n\t\t\toffset = elem.getBoundingClientRect();\n\n\t\t} else {\n\t\t\toffset = this.offset();\n\n\t\t\t// Account for the *real* offset parent, which can be the document or its root element\n\t\t\t// when a statically positioned element is identified\n\t\t\tdoc = elem.ownerDocument;\n\t\t\toffsetParent = elem.offsetParent || doc.documentElement;\n\t\t\twhile ( offsetParent &&\n\t\t\t\t( offsetParent === doc.body || offsetParent === doc.documentElement ) &&\n\t\t\t\tjQuery.css( offsetParent, \"position\" ) === \"static\" ) {\n\n\t\t\t\toffsetParent = offsetParent.parentNode;\n\t\t\t}\n\t\t\tif ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {\n\n\t\t\t\t// Incorporate borders into its offset, since they are outside its content origin\n\t\t\t\tparentOffset = jQuery( offsetParent ).offset();\n\t\t\t\tparentOffset.top += jQuery.css( offsetParent, \"borderTopWidth\", true );\n\t\t\t\tparentOffset.left += jQuery.css( offsetParent, \"borderLeftWidth\", true );\n\t\t\t}\n\t\t}\n\n\t\t// Subtract parent offsets and element margins\n\t\treturn {\n\t\t\ttop: offset.top - parentOffset.top - jQuery.css( elem, \"marginTop\", true ),\n\t\t\tleft: offset.left - parentOffset.left - jQuery.css( elem, \"marginLeft\", true )\n\t\t};\n\t},\n\n\t// This method will return documentElement in the following cases:\n\t// 1) For the element inside the iframe without offsetParent, this method will return\n\t//    documentElement of the parent window\n\t// 2) For the hidden or detached element\n\t// 3) For body or html element, i.e. in case of the html node - it will return itself\n\t//\n\t// but those exceptions were never presented as a real life use-cases\n\t// and might be considered as more preferable results.\n\t//\n\t// This logic, however, is not guaranteed and can change at any point in the future\n\toffsetParent: function() {\n\t\treturn this.map( function() {\n\t\t\tvar offsetParent = this.offsetParent;\n\n\t\t\twhile ( offsetParent && jQuery.css( offsetParent, \"position\" ) === \"static\" ) {\n\t\t\t\toffsetParent = offsetParent.offsetParent;\n\t\t\t}\n\n\t\t\treturn offsetParent || documentElement;\n\t\t} );\n\t}\n} );\n\n// Create scrollLeft and scrollTop methods\njQuery.each( { scrollLeft: \"pageXOffset\", scrollTop: \"pageYOffset\" }, function( method, prop ) {\n\tvar top = \"pageYOffset\" === prop;\n\n\tjQuery.fn[ method ] = function( val ) {\n\t\treturn access( this, function( elem, method, val ) {\n\n\t\t\t// Coalesce documents and windows\n\t\t\tvar win;\n\t\t\tif ( isWindow( elem ) ) {\n\t\t\t\twin = elem;\n\t\t\t} else if ( elem.nodeType === 9 ) {\n\t\t\t\twin = elem.defaultView;\n\t\t\t}\n\n\t\t\tif ( val === undefined ) {\n\t\t\t\treturn win ? win[ prop ] : elem[ method ];\n\t\t\t}\n\n\t\t\tif ( win ) {\n\t\t\t\twin.scrollTo(\n\t\t\t\t\t!top ? val : win.pageXOffset,\n\t\t\t\t\ttop ? val : win.pageYOffset\n\t\t\t\t);\n\n\t\t\t} else {\n\t\t\t\telem[ method ] = val;\n\t\t\t}\n\t\t}, method, val, arguments.length );\n\t};\n} );\n\n// Support: Safari <=7 - 9.1, Chrome <=37 - 49\n// Add the top/left cssHooks using jQuery.fn.position\n// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084\n// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347\n// getComputedStyle returns percent when specified for top/left/bottom/right;\n// rather than make the css module depend on the offset module, just check for it here\njQuery.each( [ \"top\", \"left\" ], function( _i, prop ) {\n\tjQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,\n\t\tfunction( elem, computed ) {\n\t\t\tif ( computed ) {\n\t\t\t\tcomputed = curCSS( elem, prop );\n\n\t\t\t\t// If curCSS returns percentage, fallback to offset\n\t\t\t\treturn rnumnonpx.test( computed ) ?\n\t\t\t\t\tjQuery( elem ).position()[ prop ] + \"px\" :\n\t\t\t\t\tcomputed;\n\t\t\t}\n\t\t}\n\t);\n} );\n\n\n// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods\njQuery.each( { Height: \"height\", Width: \"width\" }, function( name, type ) {\n\tjQuery.each( { padding: \"inner\" + name, content: type, \"\": \"outer\" + name },\n\t\tfunction( defaultExtra, funcName ) {\n\n\t\t// Margin is only for outerHeight, outerWidth\n\t\tjQuery.fn[ funcName ] = function( margin, value ) {\n\t\t\tvar chainable = arguments.length && ( defaultExtra || typeof margin !== \"boolean\" ),\n\t\t\t\textra = defaultExtra || ( margin === true || value === true ? \"margin\" : \"border\" );\n\n\t\t\treturn access( this, function( elem, type, value ) {\n\t\t\t\tvar doc;\n\n\t\t\t\tif ( isWindow( elem ) ) {\n\n\t\t\t\t\t// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)\n\t\t\t\t\treturn funcName.indexOf( \"outer\" ) === 0 ?\n\t\t\t\t\t\telem[ \"inner\" + name ] :\n\t\t\t\t\t\telem.document.documentElement[ \"client\" + name ];\n\t\t\t\t}\n\n\t\t\t\t// Get document width or height\n\t\t\t\tif ( elem.nodeType === 9 ) {\n\t\t\t\t\tdoc = elem.documentElement;\n\n\t\t\t\t\t// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],\n\t\t\t\t\t// whichever is greatest\n\t\t\t\t\treturn Math.max(\n\t\t\t\t\t\telem.body[ \"scroll\" + name ], doc[ \"scroll\" + name ],\n\t\t\t\t\t\telem.body[ \"offset\" + name ], doc[ \"offset\" + name ],\n\t\t\t\t\t\tdoc[ \"client\" + name ]\n\t\t\t\t\t);\n\t\t\t\t}\n\n\t\t\t\treturn value === undefined ?\n\n\t\t\t\t\t// Get width or height on the element, requesting but not forcing parseFloat\n\t\t\t\t\tjQuery.css( elem, type, extra ) :\n\n\t\t\t\t\t// Set width or height on the element\n\t\t\t\t\tjQuery.style( elem, type, value, extra );\n\t\t\t}, type, chainable ? margin : undefined, chainable );\n\t\t};\n\t} );\n} );\n\n\njQuery.each( [\n\t\"ajaxStart\",\n\t\"ajaxStop\",\n\t\"ajaxComplete\",\n\t\"ajaxError\",\n\t\"ajaxSuccess\",\n\t\"ajaxSend\"\n], function( _i, type ) {\n\tjQuery.fn[ type ] = function( fn ) {\n\t\treturn this.on( type, fn );\n\t};\n} );\n\n\n\n\njQuery.fn.extend( {\n\n\tbind: function( types, data, fn ) {\n\t\treturn this.on( types, null, data, fn );\n\t},\n\tunbind: function( types, fn ) {\n\t\treturn this.off( types, null, fn );\n\t},\n\n\tdelegate: function( selector, types, data, fn ) {\n\t\treturn this.on( types, selector, data, fn );\n\t},\n\tundelegate: function( selector, types, fn ) {\n\n\t\t// ( namespace ) or ( selector, types [, fn] )\n\t\treturn arguments.length === 1 ?\n\t\t\tthis.off( selector, \"**\" ) :\n\t\t\tthis.off( types, selector || \"**\", fn );\n\t},\n\n\thover: function( fnOver, fnOut ) {\n\t\treturn this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );\n\t}\n} );\n\njQuery.each( ( \"blur focus focusin focusout resize scroll click dblclick \" +\n\t\"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave \" +\n\t\"change select submit keydown keypress keyup contextmenu\" ).split( \" \" ),\n\tfunction( _i, name ) {\n\n\t\t// Handle event binding\n\t\tjQuery.fn[ name ] = function( data, fn ) {\n\t\t\treturn arguments.length > 0 ?\n\t\t\t\tthis.on( name, null, data, fn ) :\n\t\t\t\tthis.trigger( name );\n\t\t};\n\t} );\n\n\n\n\n// Support: Android <=4.0 only\n// Make sure we trim BOM and NBSP\nvar rtrim = /^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g;\n\n// Bind a function to a context, optionally partially applying any\n// arguments.\n// jQuery.proxy is deprecated to promote standards (specifically Function#bind)\n// However, it is not slated for removal any time soon\njQuery.proxy = function( fn, context ) {\n\tvar tmp, args, proxy;\n\n\tif ( typeof context === \"string\" ) {\n\t\ttmp = fn[ context ];\n\t\tcontext = fn;\n\t\tfn = tmp;\n\t}\n\n\t// Quick check to determine if target is callable, in the spec\n\t// this throws a TypeError, but we will just return undefined.\n\tif ( !isFunction( fn ) ) {\n\t\treturn undefined;\n\t}\n\n\t// Simulated bind\n\targs = slice.call( arguments, 2 );\n\tproxy = function() {\n\t\treturn fn.apply( context || this, args.concat( slice.call( arguments ) ) );\n\t};\n\n\t// Set the guid of unique handler to the same of original handler, so it can be removed\n\tproxy.guid = fn.guid = fn.guid || jQuery.guid++;\n\n\treturn proxy;\n};\n\njQuery.holdReady = function( hold ) {\n\tif ( hold ) {\n\t\tjQuery.readyWait++;\n\t} else {\n\t\tjQuery.ready( true );\n\t}\n};\njQuery.isArray = Array.isArray;\njQuery.parseJSON = JSON.parse;\njQuery.nodeName = nodeName;\njQuery.isFunction = isFunction;\njQuery.isWindow = isWindow;\njQuery.camelCase = camelCase;\njQuery.type = toType;\n\njQuery.now = Date.now;\n\njQuery.isNumeric = function( obj ) {\n\n\t// As of jQuery 3.0, isNumeric is limited to\n\t// strings and numbers (primitives or objects)\n\t// that can be coerced to finite numbers (gh-2662)\n\tvar type = jQuery.type( obj );\n\treturn ( type === \"number\" || type === \"string\" ) &&\n\n\t\t// parseFloat NaNs numeric-cast false positives (\"\")\n\t\t// ...but misinterprets leading-number strings, particularly hex literals (\"0x...\")\n\t\t// subtraction forces infinities to NaN\n\t\t!isNaN( obj - parseFloat( obj ) );\n};\n\njQuery.trim = function( text ) {\n\treturn text == null ?\n\t\t\"\" :\n\t\t( text + \"\" ).replace( rtrim, \"\" );\n};\n\n\n\n// Register as a named AMD module, since jQuery can be concatenated with other\n// files that may use define, but not via a proper concatenation script that\n// understands anonymous AMD modules. A named AMD is safest and most robust\n// way to register. Lowercase jquery is used because AMD module names are\n// derived from file names, and jQuery is normally delivered in a lowercase\n// file name. Do this after creating the global so that if an AMD module wants\n// to call noConflict to hide this version of jQuery, it will work.\n\n// Note that for maximum portability, libraries that are not jQuery should\n// declare themselves as anonymous modules, and avoid setting a global if an\n// AMD loader is present. jQuery is a special case. For more information, see\n// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon\n\nif ( true ) {\n\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {\n\t\treturn jQuery;\n\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n}\n\n\n\n\nvar\n\n\t// Map over jQuery in case of overwrite\n\t_jQuery = window.jQuery,\n\n\t// Map over the $ in case of overwrite\n\t_$ = window.$;\n\njQuery.noConflict = function( deep ) {\n\tif ( window.$ === jQuery ) {\n\t\twindow.$ = _$;\n\t}\n\n\tif ( deep && window.jQuery === jQuery ) {\n\t\twindow.jQuery = _jQuery;\n\t}\n\n\treturn jQuery;\n};\n\n// Expose jQuery and $ identifiers, even in AMD\n// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)\n// and CommonJS for browser emulators (#13566)\nif ( typeof noGlobal === \"undefined\" ) {\n\twindow.jQuery = window.$ = jQuery;\n}\n\n\n\n\nreturn jQuery;\n} );\n\n\n//# sourceURL=webpack:///./test/node_modules/jquery/dist/jquery.js?");

/***/ })

/******/ });
});

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map