!(function(e, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = t())
		: 'function' == typeof define && define.amd
			? define(t)
			: (e.ES6Promise = t());
})(this, function() {
	'use strict';
	function e(e) {
		return 'function' == typeof e || ('object' == typeof e && null !== e);
	}
	function t(e) {
		return 'function' == typeof e;
	}
	function n(e) {
		K = e;
	}
	function r(e) {
		z = e;
	}
	function o() {
		return function() {
			return process.nextTick(l);
		};
	}
	function i() {
		return 'undefined' != typeof Y
			? function() {
					Y(l);
				}
			: a();
	}
	function s() {
		var e = 0,
			t = new Q(l),
			n = document.createTextNode('');
		return t.observe(n, { characterData: !0 }), function() {
			n.data = e = ++e % 2;
		};
	}
	function u() {
		var e = new MessageChannel();
		return (e.port1.onmessage = l), function() {
			return e.port2.postMessage(0);
		};
	}
	function a() {
		var e = setTimeout;
		return function() {
			return e(l, 1);
		};
	}
	function l() {
		for (var e = 0; e < V; e += 2) {
			var t = $[e],
				n = $[e + 1];
			t(n), ($[e] = void 0), ($[e + 1] = void 0);
		}
		V = 0;
	}
	function c() {
		try {
			var e = require,
				t = e('vertx');
			return (Y = t.runOnLoop || t.runOnContext), i();
		} catch (n) {
			return a();
		}
	}
	function f(e, t) {
		var n = arguments,
			r = this,
			o = new this.constructor(p);
		void 0 === o[te] && I(o);
		var i = r._state;
		return i
			? !(function() {
					var e = n[i - 1];
					z(function() {
						return A(i, o, e, r._result);
					});
				})()
			: C(r, o, e, t), o;
	}
	function d(e) {
		var t = this;
		if (e && 'object' == typeof e && e.constructor === t) return e;
		var n = new t(p);
		return b(n, e), n;
	}
	function p() {}
	function h() {
		return new TypeError('You cannot resolve a promise with itself');
	}
	function _() {
		return new TypeError(
			'A promises callback cannot return that same promise.'
		);
	}
	function m(e) {
		try {
			return e.then;
		} catch (t) {
			return (ie.error = t), ie;
		}
	}
	function g(e, t, n, r) {
		try {
			e.call(t, n, r);
		} catch (o) {
			return o;
		}
	}
	function v(e, t, n) {
		z(function(e) {
			var r = !1,
				o = g(
					n,
					t,
					function(n) {
						r || ((r = !0), t !== n ? b(e, n) : P(e, n));
					},
					function(t) {
						r || ((r = !0), x(e, t));
					},
					'Settle: ' + (e._label || ' unknown promise')
				);
			!r && o && ((r = !0), x(e, o));
		}, e);
	}
	function y(e, t) {
		t._state === re
			? P(e, t._result)
			: t._state === oe
				? x(e, t._result)
				: C(
						t,
						void 0,
						function(t) {
							return b(e, t);
						},
						function(t) {
							return x(e, t);
						}
					);
	}
	function M(e, n, r) {
		n.constructor === e.constructor &&
			r === f &&
			n.constructor.resolve === d
			? y(e, n)
			: r === ie
				? (x(e, ie.error), (ie.error = null))
				: void 0 === r ? P(e, n) : t(r) ? v(e, n, r) : P(e, n);
	}
	function b(t, n) {
		t === n ? x(t, h()) : e(n) ? M(t, n, m(n)) : P(t, n);
	}
	function w(e) {
		e._onerror && e._onerror(e._result), O(e);
	}
	function P(e, t) {
		e._state === ne &&
			(
				(e._result = t),
				(e._state = re),
				0 !== e._subscribers.length && z(O, e)
			);
	}
	function x(e, t) {
		e._state === ne && ((e._state = oe), (e._result = t), z(w, e));
	}
	function C(e, t, n, r) {
		var o = e._subscribers,
			i = o.length;
		(e._onerror = null), (o[i] = t), (o[i + re] = n), (o[i + oe] = r), 0 === i && e._state && z(O, e);
	}
	function O(e) {
		var t = e._subscribers,
			n = e._state;
		if (0 !== t.length) {
			for (
				var r = void 0, o = void 0, i = e._result, s = 0;
				s < t.length;
				s += 3
			)
				(r = t[s]), (o = t[s + n]), r ? A(n, r, o, i) : o(i);
			e._subscribers.length = 0;
		}
	}
	function L() {
		this.error = null;
	}
	function j(e, t) {
		try {
			return e(t);
		} catch (n) {
			return (se.error = n), se;
		}
	}
	function A(e, n, r, o) {
		var i = t(r),
			s = void 0,
			u = void 0,
			a = void 0,
			l = void 0;
		if (i) {
			if (
				(
					(s = j(r, o)),
					s === se
						? ((l = !0), (u = s.error), (s.error = null))
						: (a = !0),
					n === s
				)
			)
				return void x(n, _());
		} else (s = o), (a = !0);
		n._state !== ne ||
			(i && a
				? b(n, s)
				: l ? x(n, u) : e === re ? P(n, s) : e === oe && x(n, s));
	}
	function E(e, t) {
		try {
			t(
				function(t) {
					b(e, t);
				},
				function(t) {
					x(e, t);
				}
			);
		} catch (n) {
			x(e, n);
		}
	}
	function R() {
		return ue++;
	}
	function I(e) {
		(e[
			te
		] = ue++), (e._state = void 0), (e._result = void 0), (e._subscribers = []);
	}
	function S(e, t) {
		(this._instanceConstructor = e), (this.promise = new e(p)), this.promise[te] || I(this.promise), W(t) ? ((this._input = t), (this.length = t.length), (this._remaining = t.length), (this._result = new Array(this.length)), 0 === this.length ? P(this.promise, this._result) : ((this.length = this.length || 0), this._enumerate(), 0 === this._remaining && P(this.promise, this._result))) : x(this.promise, q());
	}
	function q() {
		return new Error('Array Methods must be provided an Array');
	}
	function B(e) {
		return new S(this, e).promise;
	}
	function F(e) {
		var t = this;
		return new t(
			W(e)
				? function(n, r) {
						for (var o = e.length, i = 0; i < o; i++)
							t.resolve(e[i]).then(n, r);
					}
				: function(e, t) {
						return t(
							new TypeError('You must pass an array to race.')
						);
					}
		);
	}
	function k(e) {
		var t = this,
			n = new t(p);
		return x(n, e), n;
	}
	function G() {
		throw new TypeError(
			'You must pass a resolver function as the first argument to the promise constructor'
		);
	}
	function D() {
		throw new TypeError(
			"Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
		);
	}
	function N(e) {
		(this[
			te
		] = R()), (this._result = this._state = void 0), (this._subscribers = []), p !== e && ('function' != typeof e && G(), this instanceof N ? E(this, e) : D());
	}
	function U() {
		var e = void 0;
		if ('undefined' != typeof global) e = global;
		else if ('undefined' != typeof self) e = self;
		else
			try {
				e = Function('return this')();
			} catch (t) {
				throw new Error(
					'polyfill failed because global object is unavailable in this environment'
				);
			}
		var n = e.Promise;
		if (n) {
			var r = null;
			try {
				r = Object.prototype.toString.call(n.resolve());
			} catch (t) {}
			if ('[object Promise]' === r && !n.cast) return;
		}
		e.Promise = N;
	}
	var T = void 0;
	T = Array.isArray
		? Array.isArray
		: function(e) {
				return '[object Array]' === Object.prototype.toString.call(e);
			};
	var W = T,
		V = 0,
		Y = void 0,
		K = void 0,
		z = function(e, t) {
			($[V] = e), ($[V + 1] = t), (V += 2), 2 === V && (K ? K(l) : ee());
		},
		H = 'undefined' != typeof window ? window : void 0,
		J = H || {},
		Q = J.MutationObserver || J.WebKitMutationObserver,
		X =
			'undefined' == typeof self &&
			'undefined' != typeof process &&
			'[object process]' === {}.toString.call(process),
		Z =
			'undefined' != typeof Uint8ClampedArray &&
			'undefined' != typeof importScripts &&
			'undefined' != typeof MessageChannel,
		$ = new Array(1e3),
		ee = void 0;
	ee = X
		? o()
		: Q
			? s()
			: Z ? u() : void 0 === H && 'function' == typeof require ? c() : a();
	var te = Math.random().toString(36).substring(16),
		ne = void 0,
		re = 1,
		oe = 2,
		ie = new L(),
		se = new L(),
		ue = 0;
	return (S.prototype._enumerate = function() {
		for (
			var e = this.length, t = this._input, n = 0;
			this._state === ne && n < e;
			n++
		)
			this._eachEntry(t[n], n);
	}), (S.prototype._eachEntry = function(e, t) {
		var n = this._instanceConstructor,
			r = n.resolve;
		if (r === d) {
			var o = m(e);
			if (o === f && e._state !== ne)
				this._settledAt(e._state, t, e._result);
			else if ('function' != typeof o)
				this._remaining--, (this._result[t] = e);
			else if (n === N) {
				var i = new n(p);
				M(i, e, o), this._willSettleAt(i, t);
			} else
				this._willSettleAt(
					new n(function(t) {
						return t(e);
					}),
					t
				);
		} else this._willSettleAt(r(e), t);
	}), (S.prototype._settledAt = function(e, t, n) {
		var r = this.promise;
		r._state === ne &&
			(
				this._remaining--,
				e === oe ? x(r, n) : (this._result[t] = n)
			), 0 === this._remaining && P(r, this._result);
	}), (S.prototype._willSettleAt = function(e, t) {
		var n = this;
		C(
			e,
			void 0,
			function(e) {
				return n._settledAt(re, t, e);
			},
			function(e) {
				return n._settledAt(oe, t, e);
			}
		);
	}), (N.all = B), (N.race = F), (N.resolve = d), (N.reject = k), (N._setScheduler = n), (N._setAsap = r), (N._asap = z), (N.prototype = {
		constructor: N,
		then: f,
		catch: function(e) {
			return this.then(null, e);
		}
	}), (N.polyfill = U), (N.Promise = N), N;
}), (function() {
	var global = {};
	(global.__CONFIG__ = window.__CONFIG__), (function(e, t) {
		'use strict';
		var n = t(e);
		'object' == typeof module &&
			module &&
			(module.exports = n), 'function' == typeof define &&
			define.amd &&
			define(t), (e.EventEmitter = n);
	})('undefined' != typeof global ? global : this, function(e) {
		'use strict';
		function t() {
			this._events = {};
		}
		return (t.prototype = {
			constructor: t,
			on: function(e, t) {
				var n = (this._events[e] = this._events[e] || []);
				n.push(t);
			},
			off: function(e, t) {
				var n = this._events[e];
				if (n) {
					var r = n.indexOf(t);
					r > -1 && n.splice(r, 1);
				}
			},
			emit: function(e, t) {
				var n = this._events[e];
				if (n) {
					n = n.slice(0);
					for (var r = 0; r < n.length; r++) {
						var o = n[r];
						o.call(o, t);
					}
				}
			}
		}), t;
	}), (function(e, t) {
		'use strict';
		var n = t(e);
		'object' == typeof module &&
			module &&
			(module.exports = n), 'function' == typeof define &&
			define.amd &&
			define(t), (e.ConfigParser = n);
	})('undefined' != typeof global ? global : this, function(e) {
		'use strict';
		function t(e) {
			(this._config = {}), (this._modules = {}), (this._conditionalModules = {}), this._parseConfig(e);
		}
		return (t.prototype = {
			constructor: t,
			addModule: function(e) {
				var t = this._modules[e.name];
				if (t)
					for (var n in e)
						Object.prototype.hasOwnProperty.call(e, n) &&
							(t[n] = e[n]);
				else this._modules[e.name] = e;
				return this._registerConditionalModule(e), this._modules[
					e.name
				];
			},
			getConfig: function() {
				return this._config;
			},
			getConditionalModules: function() {
				return this._conditionalModules;
			},
			getModules: function() {
				return this._modules;
			},
			mapModule: function(e, t) {
				if (!this._config.maps && !t) return e;
				var n;
				return (n = Array.isArray(e) ? e : [e]), t &&
					(n = n.map(this._getModuleMapper(t))), this._config.maps &&
					(n = n.map(
						this._getModuleMapper(this._config.maps)
					)), Array.isArray(e) ? n : n[0];
			},
			_getModuleMapper: function(e) {
				return function(t) {
					var n;
					return (n = this._mapExactMatch(t, e)), n ||
						(n = this._mapPartialMatch(t, e)), n ||
						(n = this._mapWildcardMatch(t, e)), n || t;
				}.bind(this);
			},
			_mapExactMatch: function(e, t) {
				for (var n in t)
					if (Object.prototype.hasOwnProperty.call(t, n)) {
						var r = t[n];
						if (r.value && r.exactMatch && e === n) return r.value;
					}
			},
			_mapPartialMatch: function(e, t) {
				for (var n in t)
					if (Object.prototype.hasOwnProperty.call(t, n)) {
						var r = t[n];
						if (
							!r.exactMatch &&
							(
								r.value && (r = r.value),
								e === n || 0 === e.indexOf(n + '/')
							)
						)
							return r + e.substring(n.length);
					}
			},
			_mapWildcardMatch: function(e, t) {
				if ('function' == typeof t['*']) return t['*'](e);
			},
			_parseConfig: function(e) {
				for (var t in e)
					Object.prototype.hasOwnProperty.call(e, t) &&
						('modules' === t
							? this._parseModules(e[t])
							: (this._config[t] = e[t]));
				return this._config;
			},
			_parseModules: function(e) {
				for (var t in e)
					if (Object.prototype.hasOwnProperty.call(e, t)) {
						var n = e[t];
						(n.name = t), this.addModule(n);
					}
				return this._modules;
			},
			_registerConditionalModule: function(e) {
				if (e.condition) {
					var t = this._conditionalModules[e.condition.trigger];
					t ||
						(this._conditionalModules[
							e.condition.trigger
						] = t = []), t.push(e.name);
				}
			}
		}), t;
	}), (function(e, t) {
		'use strict';
		var n = t(e);
		'object' == typeof module &&
			module &&
			(module.exports = n), 'function' == typeof define &&
			define.amd &&
			define(t), (e.DependencyBuilder = n);
	})('undefined' != typeof global ? global : this, function(global) {
		'use strict';
		function DependencyBuilder(e) {
			(this._configParser = e), (this._pathResolver = new global.PathResolver()), (this._result = []);
		}
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		return (DependencyBuilder.prototype = {
			constructor: DependencyBuilder,
			resolveDependencies: function(e) {
				this._queue = e.slice(0);
				var t;
				try {
					this._resolveDependencies(), (t = this._result
						.reverse()
						.slice(0));
				} finally {
					this._cleanup();
				}
				return t;
			},
			_cleanup: function() {
				var e = this._configParser.getModules();
				for (var t in e)
					if (hasOwnProperty.call(e, t)) {
						var n = e[t];
						(n.conditionalMark = !1), (n.mark = !1), (n.tmpMark = !1);
					}
				(this._queue.length = 0), (this._result.length = 0);
			},
			_processConditionalModules: function(e) {
				var t = this._configParser.getConditionalModules()[e.name];
				if (t && !e.conditionalMark) {
					for (
						var n = this._configParser.getModules(), r = 0;
						r < t.length;
						r++
					) {
						var o = n[t[r]];
						this._queue.indexOf(o.name) === -1 &&
							this._testConditionalModule(o.condition.test) &&
							this._queue.push(o.name);
					}
					e.conditionalMark = !0;
				}
			},
			_resolveDependencies: function() {
				for (
					var e = this._configParser.getModules(), t = 0;
					t < this._queue.length;
					t++
				) {
					var n = e[this._queue[t]];
					n ||
						(n = this._configParser.addModule({
							name: this._queue[t],
							dependencies: []
						})), n.mark || this._visit(n);
				}
			},
			_testConditionalModule: function(testFunction) {
				return 'function' == typeof testFunction
					? testFunction()
					: eval('false || ' + testFunction)();
			},
			_visit: function(e) {
				if (e.tmpMark)
					throw new Error(
						'Error processing module: ' +
							e.name +
							'. The provided configuration is not Directed Acyclic Graph.'
					);
				if ((this._processConditionalModules(e), !e.mark)) {
					e.tmpMark = !0;
					for (
						var t = this._configParser.getModules(), n = 0;
						n < e.dependencies.length;
						n++
					) {
						var r = e.dependencies[n];
						if (
							'require' !== r &&
							'exports' !== r &&
							'module' !== r
						) {
							r = this._pathResolver.resolvePath(e.name, r);
							var o = this._configParser.mapModule(r, e.map),
								i = t[o];
							i ||
								(i = this._configParser.addModule({
									name: o,
									dependencies: []
								})), this._visit(i);
						}
					}
					(e.mark = !0), (e.tmpMark = !1), this._result.unshift(
						e.name
					);
				}
			},
			_queue: []
		}), DependencyBuilder;
	}), (function(e, t) {
		'use strict';
		var n = t(e);
		'object' == typeof module &&
			module &&
			(module.exports = n), 'function' == typeof define &&
			define.amd &&
			define(t), (e.URLBuilder = n);
	})('undefined' != typeof global ? global : this, function(e) {
		'use strict';
		function t(e) {
			this._configParser = e;
		}
		var n = /^https?:\/\/|\/\/|www\./;
		return (t.prototype = {
			constructor: t,
			build: function(e) {
				var t = [],
					r = [],
					o = [],
					i = [],
					s = [],
					u = this._configParser.getConfig(),
					a = u.basePath || '',
					l = this._configParser.getModules();
				a.length && '/' !== a.charAt(a.length - 1) && (a += '/');
				for (var c = 0; c < e.length; c++) {
					var f = l[e[c]];
					if (f.fullPath)
						s.push({
							modules: [f.name],
							url: this._getURLWithParams(f.fullPath)
						});
					else {
						var d = this._getModulePath(f),
							p = 0 === d.indexOf('/');
						n.test(d)
							? s.push({
									modules: [f.name],
									url: this._getURLWithParams(d)
								})
							: !u.combine || f.anonymous
								? s.push({
										modules: [f.name],
										url: this._getURLWithParams(
											u.url + (p ? '' : a) + d
										)
									})
								: p
									? (t.push(d), o.push(f.name))
									: (r.push(d), i.push(f.name));
					}
					f.requested = !0;
				}
				return r.length &&
					(
						(s = s.concat(
							this._generateBufferURLs(i, r, {
								basePath: a,
								url: u.url,
								urlMaxLength: u.urlMaxLength
							})
						)),
						(r.length = 0)
					), t.length &&
					(
						(s = s.concat(
							this._generateBufferURLs(o, t, {
								url: u.url,
								urlMaxLength: u.urlMaxLength
							})
						)),
						(t.length = 0)
					), s;
			},
			_generateBufferURLs: function(e, t, n) {
				var r,
					o = n.basePath || '',
					i = [],
					s = n.urlMaxLength || 2e3,
					u = { modules: [e[0]], url: n.url + o + t[0] };
				for (r = 1; r < t.length; r++) {
					var a = e[r],
						l = t[r];
					u.url.length + o.length + l.length + 1 < s
						? (u.modules.push(a), (u.url += '&' + o + l))
						: (
								i.push(u),
								(u = { modules: [a], url: n.url + o + l })
							);
				}
				return (u.url = this._getURLWithParams(u.url)), i.push(u), i;
			},
			_getModulePath: function(e) {
				var t = e.path || e.name,
					r = this._configParser.getConfig().paths || {},
					o = !1;
				return Object.keys(r).forEach(function(e) {
					(t !== e && 0 !== t.indexOf(e + '/')) ||
						(t = r[e] + t.substring(e.length));
				}), o || 'function' != typeof r['*'] || (t = r['*'](t)), n.test(
					t
				) ||
					t.lastIndexOf('.js') === t.length - 3 ||
					(t += '.js'), t;
			},
			_getURLWithParams: function(e) {
				var t = this._configParser.getConfig(),
					n = t.defaultURLParams || {},
					r = Object.keys(n);
				if (!r.length) return e;
				var o = r
					.map(function(e) {
						return e + '=' + n[e];
					})
					.join('&');
				return e + (e.indexOf('?') > -1 ? '&' : '?') + o;
			}
		}), t;
	}), (function(e, t) {
		'use strict';
		var n = t(e);
		'object' == typeof module &&
			module &&
			(module.exports = n), 'function' == typeof define &&
			define.amd &&
			define(t), (e.PathResolver = n);
	})('undefined' != typeof global ? global : this, function(e) {
		'use strict';
		function t() {}
		return (t.prototype = {
			constructor: t,
			resolvePath: function(e, t) {
				if (
					'require' === t ||
					'exports' === t ||
					'module' === t ||
					(0 !== t.indexOf('.') && 0 !== t.indexOf('..'))
				)
					return t;
				var n = e.split('/');
				n.splice(-1, 1);
				for (
					var r = t.split('/'), o = r.splice(-1, 1), i = 0;
					i < r.length;
					i++
				) {
					var s = r[i];
					if ('.' !== s)
						if ('..' === s) {
							if (!n.length) {
								n = n.concat(r.slice(i));
								break;
							}
							n.splice(-1, 1);
						} else n.push(s);
				}
				return n.push(o), n.join('/');
			}
		}), t;
	}), (function(e, t) {
		'use strict';
		var n = t(e);
		'object' == typeof module &&
			module &&
			(module.exports = n), 'function' == typeof define &&
			define.amd &&
			define(t), (e.Loader = new n()), (e.require = e.Loader.require.bind(
			e.Loader
		)), (e.define = e.Loader.define.bind(e.Loader)), (e.define.amd = {});
	})('undefined' != typeof global ? global : this, function(e) {
		'use strict';
		function t(n) {
			t.superclass.constructor.apply(
				this,
				arguments
			), (this._config = n || e.__CONFIG__), (this._modulesMap = {});
		}
		(t.prototype = Object.create(
			e.EventEmitter.prototype
		)), (t.prototype.constructor = t), (t.superclass = e.EventEmitter.prototype);
		var n = {
			addModule: function(e) {
				return this._getConfigParser().addModule(e);
			},
			define: function() {
				var e = this,
					t = arguments[0],
					n = arguments[1],
					r = arguments[2],
					o = arguments[3] || {};
				o.anonymous = !1;
				var i = arguments.length;
				if (
					(
						i < 2
							? (
									(r = arguments[0]),
									(n = ['module', 'exports']),
									(o.anonymous = !0)
								)
							: 2 === i &&
									('string' == typeof t
										? (
												(n = ['module', 'exports']),
												(r = arguments[1])
											)
										: (
												(n = arguments[0]),
												(r = arguments[1]),
												(o.anonymous = !0)
											)),
						o.anonymous
					)
				) {
					var s = function(t) {
						if ((e.off('scriptLoaded', s), 1 !== t.length))
							e._reportMismatchedAnonymousModules(r.toString());
						else {
							var i = t[0],
								u = e.getModules()[i];
							u &&
								u.pendingImplementation &&
								e._reportMismatchedAnonymousModules(
									r.toString()
								), e._define(i, n, r, o);
						}
					};
					e.on('scriptLoaded', s);
				} else this._define(t, n, r, o);
			},
			getConditionalModules: function() {
				return this._getConfigParser().getConditionalModules();
			},
			getModules: function() {
				return this._getConfigParser().getModules();
			},
			require: function() {
				var e,
					t,
					n,
					r,
					o = this;
				if (Array.isArray(arguments[0]))
					(n = arguments[0]), (r = 'function' == typeof arguments[1]
						? arguments[1]
						: null), (e = 'function' == typeof arguments[2]
						? arguments[2]
						: null);
				else
					for (n = [], t = 0; t < arguments.length; ++t)
						if ('string' == typeof arguments[t])
							n[t] = arguments[t];
						else if ('function' == typeof arguments[t]) {
							(r = arguments[t]), (e = 'function' ==
								typeof arguments[++t]
								? arguments[t]
								: null);
							break;
						}
				var i,
					s = o._getConfigParser(),
					u = s.mapModule(n);
				new Promise(function(e, t) {
					o._resolveDependencies(u).then(function(r) {
						var a = s.getConfig();
						0 !== a.waitTimeout &&
							(i = setTimeout(function() {
								var e = s.getModules(),
									o = new Error(
										'Load timeout for modules: ' + n
									);
								(o.dependencies = r), (o.mappedModules = u), (o.missingDependencies = r.filter(
									function(t) {
										return (
											'undefined' ==
											typeof e[t].implementation
										);
									}
								)), (o.modules = n), (o.dependecies = o.dependencies), t(o);
							}, a.waitTimeout ||
								7e3)), o._loadModules(r).then(e, t);
					}, t);
				}).then(
					function(e) {
						if ((clearTimeout(i), r)) {
							var t = o._getModuleImplementations(u);
							r.apply(r, t);
						}
					},
					function(t) {
						clearTimeout(i), e && e.call(e, t);
					}
				);
			},
			_createModulePromise: function(e) {
				var t = this;
				return new Promise(function(n, r) {
					var o = t._getConfigParser().getModules(),
						i = o[e];
					if (i.exports) {
						var s = t._getValueGlobalNS(i.exports);
						if (s) n(s);
						else {
							var u = function(o) {
								if (o.indexOf(e) >= 0) {
									t.off('scriptLoaded', u);
									var s = t._getValueGlobalNS(i.exports);
									s
										? n(s)
										: r(
												new Error(
													'Module ' +
														e +
														' does not export the specified value: ' +
														i.exports
												)
											);
								}
							};
							t.on('scriptLoaded', u);
						}
					} else {
						var a = function(r) {
							r === e &&
								(
									t.off('moduleRegister', a),
									(t._modulesMap[e] = !0),
									n(e)
								);
						};
						t.on('moduleRegister', a);
					}
				});
			},
			_define: function(e, t, n, r) {
				var o = r || {},
					i = this._getConfigParser(),
					s = this._getPathResolver();
				(t = t.map(function(t) {
					return s.resolvePath(e, t);
				})), (o.name = e), (o.dependencies = t), (o.pendingImplementation = n), i.addModule(
					o
				), this._modulesMap[o.name] ||
					(this._modulesMap[o.name] = !0), this.emit(
					'moduleRegister',
					e
				);
			},
			_getConfigParser: function() {
				return this._configParser ||
					(this._configParser = new e.ConfigParser(
						this._config
					)), this._configParser;
			},
			_getDependencyBuilder: function() {
				return this._dependencyBuilder ||
					(this._dependencyBuilder = new e.DependencyBuilder(
						this._getConfigParser()
					)), this._dependencyBuilder;
			},
			_getValueGlobalNS: function(e) {
				for (
					var t = e.split('.'), n = (0, eval)('this')[t[0]], r = 1;
					n && r < t.length;
					r++
				) {
					if (!Object.prototype.hasOwnProperty.call(n, t[r]))
						return null;
					n = n[t[r]];
				}
				return n;
			},
			_getMissingDependencies: function(e) {
				for (
					var t = this._getConfigParser(),
						n = t.getModules(),
						r = Object.create(null),
						o = 0;
					o < e.length;
					o++
				)
					for (
						var i = n[e[o]],
							s = t.mapModule(i.dependencies, i.map),
							u = 0;
						u < s.length;
						u++
					) {
						var a = s[u],
							l = n[a];
						'require' === a ||
							'exports' === a ||
							'module' === a ||
							(l && l.pendingImplementation) ||
							(r[a] = 1);
					}
				return Object.keys(r);
			},
			_getModuleImplementations: function(e) {
				for (
					var t = [], n = this._getConfigParser().getModules(), r = 0;
					r < e.length;
					r++
				) {
					var o = n[e[r]];
					t.push(o ? o.implementation : void 0);
				}
				return t;
			},
			_getPathResolver: function() {
				return this._pathResolver ||
					(this._pathResolver = new e.PathResolver()), this
					._pathResolver;
			},
			_getURLBuilder: function() {
				return this._urlBuilder ||
					(this._urlBuilder = new e.URLBuilder(
						this._getConfigParser()
					)), this._urlBuilder;
			},
			_filterModulesByProperty: function(e, t) {
				var n = t;
				'string' == typeof t && (n = [t]);
				for (
					var r = [], o = this._getConfigParser().getModules(), i = 0;
					i < e.length;
					i++
				) {
					var s = e[i],
						u = o[e[i]];
					if (u) {
						if (
							'require' !== u &&
							'exports' !== u &&
							'module' !== u
						) {
							for (var a = 0, l = 0; l < n.length; l++)
								if (u[n[l]]) {
									a = !0;
									break;
								}
							a || r.push(s);
						}
					} else r.push(s);
				}
				return r;
			},
			_loadModules: function(e) {
				var t = this;
				return new Promise(function(n, r) {
					var o = t._filterModulesByProperty(e, [
						'requested',
						'pendingImplementation'
					]);
					if (o.length) {
						for (
							var i = t._getURLBuilder().build(o), s = [], u = 0;
							u < i.length;
							u++
						)
							s.push(t._loadScript(i[u]));
						Promise.all(s)
							.then(function(n) {
								return t._waitForModules(e);
							})
							.then(function(e) {
								n(e);
							})['catch'](function(e) {
								r(e);
							});
					} else
						t._waitForModules(e).then(function(e) {
							n(e);
						})['catch'](function(e) {
							r(e);
						});
				});
			},
			_loadScript: function(e) {
				var t = this;
				return new Promise(function(n, r) {
					var o = document.createElement('script');
					(o.src =
						e.url), (o.async = !1), (o.onload = o.onreadystatechange = function() {
						(this.readyState &&
							'complete' !== this.readyState &&
							'load' !== this.readyState) ||
							(
								(o.onload = o.onreadystatechange = null),
								n(o),
								t.emit('scriptLoaded', e.modules)
							);
					}), (o.onerror = function() {
						document.head.removeChild(o), r(o);
					}), document.head.appendChild(o);
				});
			},
			_resolveDependencies: function(e) {
				var t = this;
				return new Promise(function(n, r) {
					try {
						var o = t
							._getDependencyBuilder()
							.resolveDependencies(e);
						n(o);
					} catch (i) {
						r(i);
					}
				});
			},
			_reportMismatchedAnonymousModules: function(e) {
				var t = 'Mismatched anonymous define() module: ' + e,
					n = this._config.reportMismatchedAnonymousModules;
				if (!n || 'exception' === n) throw new Error(t);
				console && console[n] && console[n].call(console, t);
			},
			_setModuleImplementation: function(t) {
				for (
					var n = this,
						r = this._getConfigParser().getModules(),
						o = 0;
					o < t.length;
					o++
				) {
					var i = t[o];
					if ('undefined' == typeof i.implementation)
						if ('undefined' == typeof i.exports) {
							for (
								var s = [],
									u = { exports: {} },
									a = this._getConfigParser(),
									l = this._getPathResolver(),
									c = 0;
								c < i.dependencies.length;
								c++
							) {
								var f = i.dependencies[c];
								if ('exports' === f) s.push(u.exports);
								else if ('module' === f) s.push(u);
								else if ('require' === f) {
									var d = function(t) {
										var n = arguments.length;
										if (!(n > 1)) {
											(t = l.resolvePath(
												i.name,
												t
											)), (t = a.mapModule(t, i.map));
											var r = a.getModules()[t];
											if (
												!r ||
												'undefined' ==
													typeof r.implementation
											)
												throw new Error(
													'Module "' +
														t +
														'" has not been loaded yet for context: ' +
														i.name
												);
											return r.implementation;
										}
										e.require.apply(e.Loader, arguments);
									};
									(d.toUrl = function(e) {
										var t = n._getURLBuilder().build([e]);
										return t[0].url;
									}), s.push(d);
								} else {
									var p = r[a.mapModule(f, i.map)],
										h = p.implementation;
									s.push(h);
								}
							}
							var _;
							(_ = 'function' == typeof i.pendingImplementation
								? i.pendingImplementation.apply(
										i.pendingImplementation,
										s
									)
								: i.pendingImplementation), 'undefined' !=
								typeof _
								? (i.implementation = _)
								: (i.implementation = u.exports);
						} else
							i.pendingImplementation = i.implementation = this._getValueGlobalNS(
								i.exports
							);
				}
			},
			_waitForModule: function(e) {
				var t = this,
					n = t._modulesMap[e];
				return n ||
					(
						(n = t._createModulePromise(e)),
						(t._modulesMap[e] = n)
					), n;
			},
			_waitForModules: function(e) {
				var t = this;
				return new Promise(function(n, r) {
					for (var o = [], i = 0; i < e.length; i++)
						o.push(t._waitForModule(e[i]));
					Promise.all(o).then(function(o) {
						var i = t._getConfigParser().getModules(),
							s = function() {
								for (var r = [], o = 0; o < e.length; o++)
									r.push(i[e[o]]);
								t._setModuleImplementation(r), n(r);
							},
							u = t._getMissingDependencies(e);
						u.length ? t.require(u, s, r) : s();
					}, r);
				});
			}
		};
		return Object.keys(n).forEach(function(e) {
			t.prototype[e] = n[e];
		}), (t.prototype.define.amd = {}), t;
	});
	var namespace = null,
		exposeGlobal = !0;
	if (
		(
			'object' == typeof global.__CONFIG__ &&
				(
					'string' == typeof global.__CONFIG__.namespace &&
						(namespace = global.__CONFIG__.namespace),
					'boolean' == typeof global.__CONFIG__.exposeGlobal &&
						(exposeGlobal = global.__CONFIG__.exposeGlobal)
				),
			namespace
		)
	) {
		var ns = window[global.__CONFIG__.namespace]
			? window[global.__CONFIG__.namespace]
			: {};
		(ns.Loader = global.Loader), (window[global.__CONFIG__.namespace] = ns);
	} else window.Loader = global.Loader;
	exposeGlobal &&
		(
			(window.Loader = global.Loader),
			(window.require = global.require),
			(window.define = global.define)
		), (global.Loader.version = function() {
		return '2.0.0';
	});
})(), (function() {
	'undefined' == typeof window.Promise &&
		'undefined' != typeof window.ES6Promise &&
		(window.Promise = window.ES6Promise);
})();
