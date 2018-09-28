! function (e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/", n(n.s = 2)
}([function (e, t, n) {
    var i;
    ! function (t, n) {
        "use strict";
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function (n, o) {
        "use strict";
        var r = [],
            s = n.document,
            a = Object.getPrototypeOf,
            l = r.slice,
            c = r.concat,
            u = r.push,
            d = r.indexOf,
            f = {},
            p = f.toString,
            h = f.hasOwnProperty,
            g = h.toString,
            m = g.call(Object),
            v = {},
            y = function (e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            b = function (e) {
                return null != e && e === e.window
            },
            w = {
                type: !0,
                src: !0,
                noModule: !0
            };

        function T(e, t, n) {
            var i, o = (t = t || s).createElement("script");
            if (o.text = e, n)
                for (i in w) n[i] && (o[i] = n[i]);
            t.head.appendChild(o).parentNode.removeChild(o)
        }

        function _(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[p.call(e)] || "object" : typeof e
        }
        var S = function (e, t) {
                return new S.fn.init(e, t)
            },
            C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function x(e) {
            var t = !!e && "length" in e && e.length,
                n = _(e);
            return !y(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        S.fn = S.prototype = {
            jquery: "3.3.1",
            constructor: S,
            length: 0,
            toArray: function () {
                return l.call(this)
            },
            get: function (e) {
                return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function (e) {
                var t = S.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function (e) {
                return S.each(this, e)
            },
            map: function (e) {
                return this.pushStack(S.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function () {
                return this.pushStack(l.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: u,
            sort: r.sort,
            splice: r.splice
        }, S.extend = S.fn.extend = function () {
            var e, t, n, i, o, r, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || y(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                if (null != (e = arguments[a]))
                    for (t in e) n = s[t], s !== (i = e[t]) && (c && i && (S.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && S.isPlainObject(n) ? n : {}, s[t] = S.extend(c, r, i)) : void 0 !== i && (s[t] = i));
            return s
        }, S.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== p.call(e)) && (!(t = a(e)) || "function" == typeof (n = h.call(t, "constructor") && t.constructor) && g.call(n) === m)
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function (e) {
                T(e)
            },
            each: function (e, t) {
                var n, i = 0;
                if (x(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(C, "")
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (x(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : d.call(t, e, n)
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
                return e.length = o, e
            },
            grep: function (e, t, n) {
                for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
                return i
            },
            map: function (e, t, n) {
                var i, o, r = 0,
                    s = [];
                if (x(e))
                    for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
                else
                    for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
                return c.apply([], s)
            },
            guid: 1,
            support: v
        }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = r[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            f["[object " + t + "]"] = t.toLowerCase()
        });
        var k = function (e) {
            var t, n, i, o, r, s, a, l, c, u, d, f, p, h, g, m, v, y, b, w = "sizzle" + 1 * new Date,
                T = e.document,
                _ = 0,
                S = 0,
                C = se(),
                x = se(),
                k = se(),
                E = function (e, t) {
                    return e === t && (d = !0), 0
                },
                A = {}.hasOwnProperty,
                D = [],
                O = D.pop,
                N = D.push,
                I = D.push,
                $ = D.slice,
                L = function (e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                P = "[\\x20\\t\\r\\n\\f]",
                H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                M = "\\[" + P + "*(" + H + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + P + "*\\]",
                q = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
                R = new RegExp(P + "+", "g"),
                W = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                F = new RegExp("^" + P + "*," + P + "*"),
                B = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                z = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
                U = new RegExp(q),
                Y = new RegExp("^" + H + "$"),
                K = {
                    ID: new RegExp("^#(" + H + ")"),
                    CLASS: new RegExp("^\\.(" + H + ")"),
                    TAG: new RegExp("^(" + H + "|[*])"),
                    ATTR: new RegExp("^" + M),
                    PSEUDO: new RegExp("^" + q),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + j + ")$", "i"),
                    needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
                },
                V = /^(?:input|select|textarea|button)$/i,
                Q = /^h\d$/i,
                X = /^[^{]+\{\s*\[native \w/,
                G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                J = /[+~]/,
                Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
                ee = function (e, t, n) {
                    var i = "0x" + t - 65536;
                    return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ne = function (e, t) {
                    return t ? "\0" === e ? "пїЅ" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                ie = function () {
                    f()
                },
                oe = ye(function (e) {
                    return !0 === e.disabled && ("form" in e || "label" in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                I.apply(D = $.call(T.childNodes), T.childNodes), D[T.childNodes.length].nodeType
            } catch (e) {
                I = {
                    apply: D.length ? function (e, t) {
                        N.apply(e, $.call(t))
                    } : function (e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }

            function re(e, t, i, o) {
                var r, a, c, u, d, h, v, y = t && t.ownerDocument,
                    _ = t ? t.nodeType : 9;
                if (i = i || [], "string" != typeof e || !e || 1 !== _ && 9 !== _ && 11 !== _) return i;
                if (!o && ((t ? t.ownerDocument || t : T) !== p && f(t), t = t || p, g)) {
                    if (11 !== _ && (d = G.exec(e)))
                        if (r = d[1]) {
                            if (9 === _) {
                                if (!(c = t.getElementById(r))) return i;
                                if (c.id === r) return i.push(c), i
                            } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r) return i.push(c), i
                        } else {
                            if (d[2]) return I.apply(i, t.getElementsByTagName(e)), i;
                            if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return I.apply(i, t.getElementsByClassName(r)), i
                        } if (n.qsa && !k[e + " "] && (!m || !m.test(e))) {
                        if (1 !== _) y = t, v = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = w), a = (h = s(e)).length; a--;) h[a] = "#" + u + " " + ve(h[a]);
                            v = h.join(","), y = J.test(e) && ge(t.parentNode) || t
                        }
                        if (v) try {
                            return I.apply(i, y.querySelectorAll(v)), i
                        } catch (e) {} finally {
                            u === w && t.removeAttribute("id")
                        }
                    }
                }
                return l(e.replace(W, "$1"), t, i, o)
            }

            function se() {
                var e = [];
                return function t(n, o) {
                    return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o
                }
            }

            function ae(e) {
                return e[w] = !0, e
            }

            function le(e) {
                var t = p.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function ce(e, t) {
                for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t
            }

            function ue(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function de(e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function fe(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function pe(e) {
                return function (t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function he(e) {
                return ae(function (t) {
                    return t = +t, ae(function (n, i) {
                        for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function ge(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (t in n = re.support = {}, r = re.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, f = re.setDocument = function (e) {
                    var t, o, s = e ? e.ownerDocument || e : T;
                    return s !== p && 9 === s.nodeType && s.documentElement ? (h = (p = s).documentElement, g = !r(p), T !== p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.attributes = le(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), n.getElementsByTagName = le(function (e) {
                        return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                    }), n.getElementsByClassName = X.test(p.getElementsByClassName), n.getById = le(function (e) {
                        return h.appendChild(e).id = w, !p.getElementsByName || !p.getElementsByName(w).length
                    }), n.getById ? (i.filter.ID = function (e) {
                        var t = e.replace(Z, ee);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }, i.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (i.filter.ID = function (e) {
                        var t = e.replace(Z, ee);
                        return function (e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, i.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                            var n, i, o, r = t.getElementById(e);
                            if (r) {
                                if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                    if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                            }
                            return []
                        }
                    }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var n, i = [],
                            o = 0,
                            r = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return r
                    }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                        if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                    }, v = [], m = [], (n.qsa = X.test(p.querySelectorAll)) && (le(function (e) {
                        h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + j + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
                    }), le(function (e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = p.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                    })), (n.matchesSelector = X.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le(function (e) {
                        n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", q)
                    }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = X.test(h.compareDocumentPosition), b = t || X.test(h.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function (e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, E = t ? function (e, t) {
                        if (e === t) return d = !0, 0;
                        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === p || e.ownerDocument === T && b(T, e) ? -1 : t === p || t.ownerDocument === T && b(T, t) ? 1 : u ? L(u, e) - L(u, t) : 0 : 4 & i ? -1 : 1)
                    } : function (e, t) {
                        if (e === t) return d = !0, 0;
                        var n, i = 0,
                            o = e.parentNode,
                            r = t.parentNode,
                            s = [e],
                            a = [t];
                        if (!o || !r) return e === p ? -1 : t === p ? 1 : o ? -1 : r ? 1 : u ? L(u, e) - L(u, t) : 0;
                        if (o === r) return ue(e, t);
                        for (n = e; n = n.parentNode;) s.unshift(n);
                        for (n = t; n = n.parentNode;) a.unshift(n);
                        for (; s[i] === a[i];) i++;
                        return i ? ue(s[i], a[i]) : s[i] === T ? -1 : a[i] === T ? 1 : 0
                    }, p) : p
                }, re.matches = function (e, t) {
                    return re(e, null, null, t)
                }, re.matchesSelector = function (e, t) {
                    if ((e.ownerDocument || e) !== p && f(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !k[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                        var i = y.call(e, t);
                        if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                    } catch (e) {}
                    return re(t, p, null, [e]).length > 0
                }, re.contains = function (e, t) {
                    return (e.ownerDocument || e) !== p && f(e), b(e, t)
                }, re.attr = function (e, t) {
                    (e.ownerDocument || e) !== p && f(e);
                    var o = i.attrHandle[t.toLowerCase()],
                        r = o && A.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
                    return void 0 !== r ? r : n.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, re.escape = function (e) {
                    return (e + "").replace(te, ne)
                }, re.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, re.uniqueSort = function (e) {
                    var t, i = [],
                        o = 0,
                        r = 0;
                    if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(E), d) {
                        for (; t = e[r++];) t === e[r] && (o = i.push(r));
                        for (; o--;) e.splice(i[o], 1)
                    }
                    return u = null, e
                }, o = re.getText = function (e) {
                    var t, n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else
                        for (; t = e[i++];) n += o(t);
                    return n
                }, (i = re.selectors = {
                    cacheLength: 50,
                    createPseudo: ae,
                    match: K,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                        },
                        PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(Z, ee).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function (e) {
                            var t = C[e + " "];
                            return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && C(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function (e, t, n) {
                            return function (i) {
                                var o = re.attr(i, e);
                                return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function (e, t, n, i, o) {
                            var r = "nth" !== e.slice(0, 3),
                                s = "last" !== e.slice(-4),
                                a = "of-type" === t;
                            return 1 === i && 0 === o ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, l) {
                                var c, u, d, f, p, h, g = r !== s ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    v = a && t.nodeName.toLowerCase(),
                                    y = !l && !a,
                                    b = !1;
                                if (m) {
                                    if (r) {
                                        for (; g;) {
                                            for (f = t; f = f[g];)
                                                if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                        for (b = (p = (c = (u = (d = (f = m)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === _ && c[1]) && c[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (b = p = 0) || h.pop();)
                                            if (1 === f.nodeType && ++b && f === t) {
                                                u[e] = [_, p, b];
                                                break
                                            }
                                    } else if (y && (b = p = (c = (u = (d = (f = t)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === _ && c[1]), !1 === b)
                                        for (;
                                            (f = ++p && f && f[g] || (b = p = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((u = (d = f[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [_, b]), f !== t)););
                                    return (b -= o) === i || b % i == 0 && b / i >= 0
                                }
                            }
                        },
                        PSEUDO: function (e, t) {
                            var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                            return o[w] ? o(t) : o.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, n) {
                                for (var i, r = o(e, t), s = r.length; s--;) e[i = L(e, r[s])] = !(n[i] = r[s])
                            }) : function (e) {
                                return o(e, 0, n)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: ae(function (e) {
                            var t = [],
                                n = [],
                                i = a(e.replace(W, "$1"));
                            return i[w] ? ae(function (e, t, n, o) {
                                for (var r, s = i(e, null, o, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                            }) : function (e, o, r) {
                                return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: ae(function (e) {
                            return function (t) {
                                return re(e, t).length > 0
                            }
                        }),
                        contains: ae(function (e) {
                            return e = e.replace(Z, ee),
                                function (t) {
                                    return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                                }
                        }),
                        lang: ae(function (e) {
                            return Y.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                                function (t) {
                                    var n;
                                    do {
                                        if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function (e) {
                            return e === h
                        },
                        focus: function (e) {
                            return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: pe(!1),
                        disabled: pe(!0),
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function (e) {
                            return !i.pseudos.empty(e)
                        },
                        header: function (e) {
                            return Q.test(e.nodeName)
                        },
                        input: function (e) {
                            return V.test(e.nodeName)
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: he(function () {
                            return [0]
                        }),
                        last: he(function (e, t) {
                            return [t - 1]
                        }),
                        eq: he(function (e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: he(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: he(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: he(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                            return e
                        }),
                        gt: he(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }).pseudos.nth = i.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) i.pseudos[t] = de(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) i.pseudos[t] = fe(t);

            function me() {}

            function ve(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function ye(e, t, n) {
                var i = t.dir,
                    o = t.next,
                    r = o || i,
                    s = n && "parentNode" === r,
                    a = S++;
                return t.first ? function (t, n, o) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || s) return e(t, n, o);
                    return !1
                } : function (t, n, l) {
                    var c, u, d, f = [_, a];
                    if (l) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || s)
                                if (u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
                                else {
                                    if ((c = u[r]) && c[0] === _ && c[1] === a) return f[2] = c[2];
                                    if (u[r] = f, f[2] = e(t, n, l)) return !0
                                } return !1
                }
            }

            function be(e) {
                return e.length > 1 ? function (t, n, i) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function we(e, t, n, i, o) {
                for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
                return s
            }

            function Te(e, t, n, i, o, r) {
                return i && !i[w] && (i = Te(i)), o && !o[w] && (o = Te(o, r)), ae(function (r, s, a, l) {
                    var c, u, d, f = [],
                        p = [],
                        h = s.length,
                        g = r || function (e, t, n) {
                            for (var i = 0, o = t.length; i < o; i++) re(e, t[i], n);
                            return n
                        }(t || "*", a.nodeType ? [a] : a, []),
                        m = !e || !r && t ? g : we(g, f, e, a, l),
                        v = n ? o || (r ? e : h || i) ? [] : s : m;
                    if (n && n(m, v, a, l), i)
                        for (c = we(v, p), i(c, [], a, l), u = c.length; u--;)(d = c[u]) && (v[p[u]] = !(m[p[u]] = d));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (c = [], u = v.length; u--;)(d = v[u]) && c.push(m[u] = d);
                                o(null, v = [], c, l)
                            }
                            for (u = v.length; u--;)(d = v[u]) && (c = o ? L(r, d) : f[u]) > -1 && (r[c] = !(s[c] = d))
                        }
                    } else v = we(v === s ? v.splice(h, v.length) : v), o ? o(null, s, v, l) : I.apply(s, v)
                })
            }

            function _e(e) {
                for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = ye(function (e) {
                        return e === t
                    }, a, !0), d = ye(function (e) {
                        return L(t, e) > -1
                    }, a, !0), f = [function (e, n, i) {
                        var o = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                        return t = null, o
                    }]; l < r; l++)
                    if (n = i.relative[e[l].type]) f = [ye(be(f), n)];
                    else {
                        if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                            for (o = ++l; o < r && !i.relative[e[o].type]; o++);
                            return Te(l > 1 && be(f), l > 1 && ve(e.slice(0, l - 1).concat({
                                value: " " === e[l - 2].type ? "*" : ""
                            })).replace(W, "$1"), n, l < o && _e(e.slice(l, o)), o < r && _e(e = e.slice(o)), o < r && ve(e))
                        }
                        f.push(n)
                    } return be(f)
            }
            return me.prototype = i.filters = i.pseudos, i.setFilters = new me, s = re.tokenize = function (e, t) {
                var n, o, r, s, a, l, c, u = x[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (a = e, l = [], c = i.preFilter; a;) {
                    for (s in n && !(o = F.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = B.exec(a)) && (n = o.shift(), r.push({
                            value: n,
                            type: o[0].replace(W, " ")
                        }), a = a.slice(n.length)), i.filter) !(o = K[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
                        value: n,
                        type: s,
                        matches: o
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return t ? a.length : a ? re.error(e) : x(e, l).slice(0)
            }, a = re.compile = function (e, t) {
                var n, o = [],
                    r = [],
                    a = k[e + " "];
                if (!a) {
                    for (t || (t = s(e)), n = t.length; n--;)(a = _e(t[n]))[w] ? o.push(a) : r.push(a);
                    (a = k(e, function (e, t) {
                        var n = t.length > 0,
                            o = e.length > 0,
                            r = function (r, s, a, l, u) {
                                var d, h, m, v = 0,
                                    y = "0",
                                    b = r && [],
                                    w = [],
                                    T = c,
                                    S = r || o && i.find.TAG("*", u),
                                    C = _ += null == T ? 1 : Math.random() || .1,
                                    x = S.length;
                                for (u && (c = s === p || s || u); y !== x && null != (d = S[y]); y++) {
                                    if (o && d) {
                                        for (h = 0, s || d.ownerDocument === p || (f(d), a = !g); m = e[h++];)
                                            if (m(d, s || p, a)) {
                                                l.push(d);
                                                break
                                            } u && (_ = C)
                                    }
                                    n && ((d = !m && d) && v--, r && b.push(d))
                                }
                                if (v += y, n && y !== v) {
                                    for (h = 0; m = t[h++];) m(b, w, s, a);
                                    if (r) {
                                        if (v > 0)
                                            for (; y--;) b[y] || w[y] || (w[y] = O.call(l));
                                        w = we(w)
                                    }
                                    I.apply(l, w), u && !r && w.length > 0 && v + t.length > 1 && re.uniqueSort(l)
                                }
                                return u && (_ = C, c = T), b
                            };
                        return n ? ae(r) : r
                    }(r, o))).selector = e
                }
                return a
            }, l = re.select = function (e, t, n, o) {
                var r, l, c, u, d, f = "function" == typeof e && e,
                    p = !o && s(e = f.selector || e);
                if (n = n || [], 1 === p.length) {
                    if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                        if (!(t = (i.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])) return n;
                        f && (t = t.parentNode), e = e.slice(l.shift().value.length)
                    }
                    for (r = K.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !i.relative[u = c.type]);)
                        if ((d = i.find[u]) && (o = d(c.matches[0].replace(Z, ee), J.test(l[0].type) && ge(t.parentNode) || t))) {
                            if (l.splice(r, 1), !(e = o.length && ve(l))) return I.apply(n, o), n;
                            break
                        }
                }
                return (f || a(e, p))(o, t, !g, n, !t || J.test(e) && ge(t.parentNode) || t), n
            }, n.sortStable = w.split("").sort(E).join("") === w, n.detectDuplicates = !!d, f(), n.sortDetached = le(function (e) {
                return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
            }), le(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || ce("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), n.attributes && le(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || ce("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), le(function (e) {
                return null == e.getAttribute("disabled")
            }) || ce(j, function (e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), re
        }(n);
        S.find = k, S.expr = k.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = k.uniqueSort, S.text = k.getText, S.isXMLDoc = k.isXML, S.contains = k.contains, S.escapeSelector = k.escape;
        var E = function (e, t, n) {
                for (var i = [], o = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && S(e).is(n)) break;
                        i.push(e)
                    } return i
            },
            A = function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            D = S.expr.match.needsContext;

        function O(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function I(e, t, n) {
            return y(t) ? S.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n
            }) : t.nodeType ? S.grep(e, function (e) {
                return e === t !== n
            }) : "string" != typeof t ? S.grep(e, function (e) {
                return d.call(t, e) > -1 !== n
            }) : S.filter(t, e, n)
        }
        S.filter = function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? S.find.matchesSelector(i, e) ? [i] : [] : S.find.matches(e, S.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, S.fn.extend({
            find: function (e) {
                var t, n, i = this.length,
                    o = this;
                if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
                    for (t = 0; t < i; t++)
                        if (S.contains(o[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < i; t++) S.find(e, o[t], n);
                return i > 1 ? S.uniqueSort(n) : n
            },
            filter: function (e) {
                return this.pushStack(I(this, e || [], !1))
            },
            not: function (e) {
                return this.pushStack(I(this, e || [], !0))
            },
            is: function (e) {
                return !!I(this, "string" == typeof e && D.test(e) ? S(e) : e || [], !1).length
            }
        });
        var $, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (S.fn.init = function (e, t, n) {
            var i, o;
            if (!e) return this;
            if (n = n || $, "string" == typeof e) {
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), N.test(i[1]) && S.isPlainObject(t))
                        for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return (o = s.getElementById(i[2])) && (this[0] = o, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
        }).prototype = S.fn, $ = S(s);
        var j = /^(?:parents|prev(?:Until|All))/,
            P = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function H(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        S.fn.extend({
            has: function (e) {
                var t = S(e, this),
                    n = t.length;
                return this.filter(function () {
                    for (var e = 0; e < n; e++)
                        if (S.contains(this, t[e])) return !0
                })
            },
            closest: function (e, t) {
                var n, i = 0,
                    o = this.length,
                    r = [],
                    s = "string" != typeof e && S(e);
                if (!D.test(e))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                                r.push(n);
                                break
                            } return this.pushStack(r.length > 1 ? S.uniqueSort(r) : r)
            },
            index: function (e) {
                return e ? "string" == typeof e ? d.call(S(e), this[0]) : d.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (e, t) {
                return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), S.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return E(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return E(e, "parentNode", n)
            },
            next: function (e) {
                return H(e, "nextSibling")
            },
            prev: function (e) {
                return H(e, "previousSibling")
            },
            nextAll: function (e) {
                return E(e, "nextSibling")
            },
            prevAll: function (e) {
                return E(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return E(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return E(e, "previousSibling", n)
            },
            siblings: function (e) {
                return A((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return A(e.firstChild)
            },
            contents: function (e) {
                return O(e, "iframe") ? e.contentDocument : (O(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
            }
        }, function (e, t) {
            S.fn[e] = function (n, i) {
                var o = S.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = S.filter(i, o)), this.length > 1 && (P[e] || S.uniqueSort(o), j.test(e) && o.reverse()), this.pushStack(o)
            }
        });
        var M = /[^\x20\t\r\n\f]+/g;

        function q(e) {
            return e
        }

        function R(e) {
            throw e
        }

        function W(e, t, n, i) {
            var o;
            try {
                e && y(o = e.promise) ? o.call(e).done(t).fail(n) : e && y(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        S.Callbacks = function (e) {
            e = "string" == typeof e ? function (e) {
                var t = {};
                return S.each(e.match(M) || [], function (e, n) {
                    t[n] = !0
                }), t
            }(e) : S.extend({}, e);
            var t, n, i, o, r = [],
                s = [],
                a = -1,
                l = function () {
                    for (o = o || e.once, i = t = !0; s.length; a = -1)
                        for (n = s.shift(); ++a < r.length;) !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length, n = !1);
                    e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
                },
                c = {
                    add: function () {
                        return r && (n && !t && (a = r.length - 1, s.push(n)), function t(n) {
                            S.each(n, function (n, i) {
                                y(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== _(i) && t(i)
                            })
                        }(arguments), n && !t && l()), this
                    },
                    remove: function () {
                        return S.each(arguments, function (e, t) {
                            for (var n;
                                (n = S.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= a && a--
                        }), this
                    },
                    has: function (e) {
                        return e ? S.inArray(e, r) > -1 : r.length > 0
                    },
                    empty: function () {
                        return r && (r = []), this
                    },
                    disable: function () {
                        return o = s = [], r = n = "", this
                    },
                    disabled: function () {
                        return !r
                    },
                    lock: function () {
                        return o = s = [], n || t || (r = n = ""), this
                    },
                    locked: function () {
                        return !!o
                    },
                    fireWith: function (e, n) {
                        return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
                    },
                    fire: function () {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!i
                    }
                };
            return c
        }, S.extend({
            Deferred: function (e) {
                var t = [
                        ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                        ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    o = {
                        state: function () {
                            return i
                        },
                        always: function () {
                            return r.done(arguments).fail(arguments), this
                        },
                        catch: function (e) {
                            return o.then(null, e)
                        },
                        pipe: function () {
                            var e = arguments;
                            return S.Deferred(function (n) {
                                S.each(t, function (t, i) {
                                    var o = y(e[i[4]]) && e[i[4]];
                                    r[i[1]](function () {
                                        var e = o && o.apply(this, arguments);
                                        e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function (e, i, o) {
                            var r = 0;

                            function s(e, t, i, o) {
                                return function () {
                                    var a = this,
                                        l = arguments,
                                        c = function () {
                                            var n, c;
                                            if (!(e < r)) {
                                                if ((n = i.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                c = n && ("object" == typeof n || "function" == typeof n) && n.then, y(c) ? o ? c.call(n, s(r, t, q, o), s(r, t, R, o)) : (r++, c.call(n, s(r, t, q, o), s(r, t, R, o), s(r, t, q, t.notifyWith))) : (i !== q && (a = void 0, l = [n]), (o || t.resolveWith)(a, l))
                                            }
                                        },
                                        u = o ? c : function () {
                                            try {
                                                c()
                                            } catch (n) {
                                                S.Deferred.exceptionHook && S.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= r && (i !== R && (a = void 0, l = [n]), t.rejectWith(a, l))
                                            }
                                        };
                                    e ? u() : (S.Deferred.getStackHook && (u.stackTrace = S.Deferred.getStackHook()), n.setTimeout(u))
                                }
                            }
                            return S.Deferred(function (n) {
                                t[0][3].add(s(0, n, y(o) ? o : q, n.notifyWith)), t[1][3].add(s(0, n, y(e) ? e : q)), t[2][3].add(s(0, n, y(i) ? i : R))
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? S.extend(e, o) : o
                        }
                    },
                    r = {};
                return S.each(t, function (e, n) {
                    var s = n[2],
                        a = n[5];
                    o[n[1]] = s.add, a && s.add(function () {
                        i = a
                    }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), r[n[0]] = function () {
                        return r[n[0] + "With"](this === r ? void 0 : this, arguments), this
                    }, r[n[0] + "With"] = s.fireWith
                }), o.promise(r), e && e.call(r, r), r
            },
            when: function (e) {
                var t = arguments.length,
                    n = t,
                    i = Array(n),
                    o = l.call(arguments),
                    r = S.Deferred(),
                    s = function (e) {
                        return function (n) {
                            i[e] = this, o[e] = arguments.length > 1 ? l.call(arguments) : n, --t || r.resolveWith(i, o)
                        }
                    };
                if (t <= 1 && (W(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || y(o[n] && o[n].then))) return r.then();
                for (; n--;) W(o[n], s(n), r.reject);
                return r.promise()
            }
        });
        var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        S.Deferred.exceptionHook = function (e, t) {
            n.console && n.console.warn && e && F.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, S.readyException = function (e) {
            n.setTimeout(function () {
                throw e
            })
        };
        var B = S.Deferred();

        function z() {
            s.removeEventListener("DOMContentLoaded", z), n.removeEventListener("load", z), S.ready()
        }
        S.fn.ready = function (e) {
            return B.then(e).catch(function (e) {
                S.readyException(e)
            }), this
        }, S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0, !0 !== e && --S.readyWait > 0 || B.resolveWith(s, [S]))
            }
        }), S.ready.then = B.then, "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(S.ready) : (s.addEventListener("DOMContentLoaded", z), n.addEventListener("load", z));
        var U = function (e, t, n, i, o, r, s) {
                var a = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === _(n))
                    for (a in o = !0, n) U(e, t, a, n[a], !0, r, s);
                else if (void 0 !== i && (o = !0, y(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                        return c.call(S(e), n)
                    })), t))
                    for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
            },
            Y = /^-ms-/,
            K = /-([a-z])/g;

        function V(e, t) {
            return t.toUpperCase()
        }

        function Q(e) {
            return e.replace(Y, "ms-").replace(K, V)
        }
        var X = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function G() {
            this.expando = S.expando + G.uid++
        }
        G.uid = 1, G.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function (e, t, n) {
                var i, o = this.cache(e);
                if ("string" == typeof t) o[Q(t)] = n;
                else
                    for (i in t) o[Q(i)] = t[i];
                return o
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Q(t)]
            },
            access: function (e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function (e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(Q) : (t = Q(t)) in i ? [t] : t.match(M) || []).length;
                        for (; n--;) delete i[t[n]]
                    }(void 0 === t || S.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !S.isEmptyObject(t)
            }
        };
        var J = new G,
            Z = new G,
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;

        function ne(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                    try {
                        n = function (e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {}
                    Z.set(e, t, n)
                } else n = void 0;
            return n
        }
        S.extend({
            hasData: function (e) {
                return Z.hasData(e) || J.hasData(e)
            },
            data: function (e, t, n) {
                return Z.access(e, t, n)
            },
            removeData: function (e, t) {
                Z.remove(e, t)
            },
            _data: function (e, t, n) {
                return J.access(e, t, n)
            },
            _removeData: function (e, t) {
                J.remove(e, t)
            }
        }), S.fn.extend({
            data: function (e, t) {
                var n, i, o, r = this[0],
                    s = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (o = Z.get(r), 1 === r.nodeType && !J.get(r, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = Q(i.slice(5)), ne(r, i, o[i]));
                        J.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function () {
                    Z.set(this, e)
                }) : U(this, function (t) {
                    var n;
                    if (r && void 0 === t) return void 0 !== (n = Z.get(r, e)) ? n : void 0 !== (n = ne(r, e)) ? n : void 0;
                    this.each(function () {
                        Z.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function (e) {
                return this.each(function () {
                    Z.remove(this, e)
                })
            }
        }), S.extend({
            queue: function (e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = J.get(e, t), n && (!i || Array.isArray(n) ? i = J.access(e, t, S.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = S.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = S._queueHooks(e, t);
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function () {
                    S.dequeue(e, t)
                }, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return J.get(e, n) || J.access(e, n, {
                    empty: S.Callbacks("once memory").add(function () {
                        J.remove(e, [t + "queue", n])
                    })
                })
            }
        }), S.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? S.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = S.queue(this, e, t);
                    S._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && S.dequeue(this, e)
                })
            },
            dequeue: function (e) {
                return this.each(function () {
                    S.dequeue(this, e)
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                var n, i = 1,
                    o = S.Deferred(),
                    r = this,
                    s = this.length,
                    a = function () {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = J.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(t)
            }
        });
        var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            oe = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
            re = ["Top", "Right", "Bottom", "Left"],
            se = function (e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && S.contains(e.ownerDocument, e) && "none" === S.css(e, "display")
            },
            ae = function (e, t, n, i) {
                var o, r, s = {};
                for (r in t) s[r] = e.style[r], e.style[r] = t[r];
                for (r in o = n.apply(e, i || []), t) e.style[r] = s[r];
                return o
            };

        function le(e, t, n, i) {
            var o, r, s = 20,
                a = i ? function () {
                    return i.cur()
                } : function () {
                    return S.css(e, t, "")
                },
                l = a(),
                c = n && n[3] || (S.cssNumber[t] ? "" : "px"),
                u = (S.cssNumber[t] || "px" !== c && +l) && oe.exec(S.css(e, t));
            if (u && u[3] !== c) {
                for (l /= 2, c = c || u[3], u = +l || 1; s--;) S.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
                u *= 2, S.style(e, t, u + c), n = n || []
            }
            return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
        }
        var ce = {};

        function ue(e) {
            var t, n = e.ownerDocument,
                i = e.nodeName,
                o = ce[i];
            return o || (t = n.body.appendChild(n.createElement(i)), o = S.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), ce[i] = o, o)
        }

        function de(e, t) {
            for (var n, i, o = [], r = 0, s = e.length; r < s; r++)(i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = J.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && se(i) && (o[r] = ue(i))) : "none" !== n && (o[r] = "none", J.set(i, "display", n)));
            for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
            return e
        }
        S.fn.extend({
            show: function () {
                return de(this, !0)
            },
            hide: function () {
                return de(this)
            },
            toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    se(this) ? S(this).show() : S(this).hide()
                })
            }
        });
        var fe = /^(?:checkbox|radio)$/i,
            pe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            he = /^$|^module$|\/(?:java|ecma)script/i,
            ge = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function me(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && O(e, t) ? S.merge([e], n) : n
        }

        function ve(e, t) {
            for (var n = 0, i = e.length; n < i; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
        }
        ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
        var ye, be, we = /<|&#?\w+;/;

        function Te(e, t, n, i, o) {
            for (var r, s, a, l, c, u, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
                if ((r = e[p]) || 0 === r)
                    if ("object" === _(r)) S.merge(f, r.nodeType ? [r] : r);
                    else if (we.test(r)) {
                for (s = s || d.appendChild(t.createElement("div")), a = (pe.exec(r) || ["", ""])[1].toLowerCase(), l = ge[a] || ge._default, s.innerHTML = l[1] + S.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
                S.merge(f, s.childNodes), (s = d.firstChild).textContent = ""
            } else f.push(t.createTextNode(r));
            for (d.textContent = "", p = 0; r = f[p++];)
                if (i && S.inArray(r, i) > -1) o && o.push(r);
                else if (c = S.contains(r.ownerDocument, r), s = me(d.appendChild(r), "script"), c && ve(s), n)
                for (u = 0; r = s[u++];) he.test(r.type || "") && n.push(r);
            return d
        }
        ye = s.createDocumentFragment().appendChild(s.createElement("div")), (be = s.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), ye.appendChild(be), v.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
        var _e = s.documentElement,
            Se = /^key/,
            Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            xe = /^([^.]*)(?:\.(.+)|)/;

        function ke() {
            return !0
        }

        function Ee() {
            return !1
        }

        function Ae() {
            try {
                return s.activeElement
            } catch (e) {}
        }

        function De(e, t, n, i, o, r) {
            var s, a;
            if ("object" == typeof t) {
                for (a in "string" != typeof n && (i = i || n, n = void 0), t) De(e, a, n, i, t[a], r);
                return e
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Ee;
            else if (!o) return e;
            return 1 === r && (s = o, (o = function (e) {
                return S().off(e), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = S.guid++)), e.each(function () {
                S.event.add(this, t, o, i, n)
            })
        }
        S.event = {
            global: {},
            add: function (e, t, n, i, o) {
                var r, s, a, l, c, u, d, f, p, h, g, m = J.get(e);
                if (m)
                    for (n.handler && (n = (r = n).handler, o = r.selector), o && S.find.matchesSelector(_e, o), n.guid || (n.guid = S.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                            return void 0 !== S && S.event.triggered !== t.type ? S.event.dispatch.apply(e, arguments) : void 0
                        }), c = (t = (t || "").match(M) || [""]).length; c--;) p = g = (a = xe.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), p && (d = S.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = S.event.special[p] || {}, u = S.extend({
                        type: p,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && S.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, r), (f = l[p]) || ((f = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(p, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, u) : f.push(u), S.event.global[p] = !0)
            },
            remove: function (e, t, n, i, o) {
                var r, s, a, l, c, u, d, f, p, h, g, m = J.hasData(e) && J.get(e);
                if (m && (l = m.events)) {
                    for (c = (t = (t || "").match(M) || [""]).length; c--;)
                        if (p = g = (a = xe.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), p) {
                            for (d = S.event.special[p] || {}, f = l[p = (i ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = f.length; r--;) u = f[r], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                            s && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || S.removeEvent(e, p, m.handle), delete l[p])
                        } else
                            for (p in l) S.event.remove(e, p + t[c], n, i, !0);
                    S.isEmptyObject(l) && J.remove(e, "handle events")
                }
            },
            dispatch: function (e) {
                var t, n, i, o, r, s, a = S.event.fix(e),
                    l = new Array(arguments.length),
                    c = (J.get(this, "events") || {})[a.type] || [],
                    u = S.event.special[a.type] || {};
                for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                    for (s = S.event.handlers.call(this, a, c), t = 0;
                        (o = s[t++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((S.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, a), a.result
                }
            },
            handlers: function (e, t) {
                var n, i, o, r, s, a = [],
                    l = t.delegateCount,
                    c = e.target;
                if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                            for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? S(o, this).index(c) > -1 : S.find(o, this, null, [c]).length), s[o] && r.push(i);
                            r.length && a.push({
                                elem: c,
                                handlers: r
                            })
                        } return c = this, l < t.length && a.push({
                    elem: c,
                    handlers: t.slice(l)
                }), a
            },
            addProp: function (e, t) {
                Object.defineProperty(S.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: y(t) ? function () {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function (t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function (e) {
                return e[S.expando] ? e : new S.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== Ae() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        if (this === Ae() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && O(this, "input")) return this.click(), !1
                    },
                    _default: function (e) {
                        return O(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, S.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, S.Event = function (e, t) {
            if (!(this instanceof S.Event)) return new S.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
        }, S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: Ee,
            isPropagationStopped: Ee,
            isImmediatePropagationStopped: Ee,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, S.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
                var t = e.button;
                return null == e.which && Se.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, S.event.addProp), S.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            S.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n, i = e.relatedTarget,
                        o = e.handleObj;
                    return i && (i === this || S.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), S.fn.extend({
            on: function (e, t, n, i) {
                return De(this, e, t, n, i)
            },
            one: function (e, t, n, i) {
                return De(this, e, t, n, i, 1)
            },
            off: function (e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, S(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
                    S.event.remove(this, e, n, t)
                })
            }
        });
        var Oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Ne = /<script|<style|<link/i,
            Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
            $e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Le(e, t) {
            return O(e, "table") && O(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
        }

        function je(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function Pe(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function He(e, t) {
            var n, i, o, r, s, a, l, c;
            if (1 === t.nodeType) {
                if (J.hasData(e) && (r = J.access(e), s = J.set(t, r), c = r.events))
                    for (o in delete s.handle, s.events = {}, c)
                        for (n = 0, i = c[o].length; n < i; n++) S.event.add(t, o, c[o][n]);
                Z.hasData(e) && (a = Z.access(e), l = S.extend({}, a), Z.set(t, l))
            }
        }

        function Me(e, t, n, i) {
            t = c.apply([], t);
            var o, r, s, a, l, u, d = 0,
                f = e.length,
                p = f - 1,
                h = t[0],
                g = y(h);
            if (g || f > 1 && "string" == typeof h && !v.checkClone && Ie.test(h)) return e.each(function (o) {
                var r = e.eq(o);
                g && (t[0] = h.call(this, o, r.html())), Me(r, t, n, i)
            });
            if (f && (r = (o = Te(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
                for (a = (s = S.map(me(o, "script"), je)).length; d < f; d++) l = o, d !== p && (l = S.clone(l, !0, !0), a && S.merge(s, me(l, "script"))), n.call(e[d], l, d);
                if (a)
                    for (u = s[s.length - 1].ownerDocument, S.map(s, Pe), d = 0; d < a; d++) l = s[d], he.test(l.type || "") && !J.access(l, "globalEval") && S.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? S._evalUrl && S._evalUrl(l.src) : T(l.textContent.replace($e, ""), u, l))
            }
            return e
        }

        function qe(e, t, n) {
            for (var i, o = t ? S.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || S.cleanData(me(i)), i.parentNode && (n && S.contains(i.ownerDocument, i) && ve(me(i, "script")), i.parentNode.removeChild(i));
            return e
        }
        S.extend({
            htmlPrefilter: function (e) {
                return e.replace(Oe, "<$1></$2>")
            },
            clone: function (e, t, n) {
                var i, o, r, s, a, l, c, u = e.cloneNode(!0),
                    d = S.contains(e.ownerDocument, e);
                if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                    for (s = me(u), i = 0, o = (r = me(e)).length; i < o; i++) a = r[i], l = s[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && fe.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
                if (t)
                    if (n)
                        for (r = r || me(e), s = s || me(u), i = 0, o = r.length; i < o; i++) He(r[i], s[i]);
                    else He(e, u);
                return (s = me(u, "script")).length > 0 && ve(s, !d && me(e, "script")), u
            },
            cleanData: function (e) {
                for (var t, n, i, o = S.event.special, r = 0; void 0 !== (n = e[r]); r++)
                    if (X(n)) {
                        if (t = n[J.expando]) {
                            if (t.events)
                                for (i in t.events) o[i] ? S.event.remove(n, i) : S.removeEvent(n, i, t.handle);
                            n[J.expando] = void 0
                        }
                        n[Z.expando] && (n[Z.expando] = void 0)
                    }
            }
        }), S.fn.extend({
            detach: function (e) {
                return qe(this, e, !0)
            },
            remove: function (e) {
                return qe(this, e)
            },
            text: function (e) {
                return U(this, function (e) {
                    return void 0 === e ? S.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function () {
                return Me(this, arguments, function (e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
                })
            },
            prepend: function () {
                return Me(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Le(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function () {
                return Me(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function () {
                return Me(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(me(e, !1)), e.textContent = "");
                return this
            },
            clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return S.clone(this, e, t)
                })
            },
            html: function (e) {
                return U(this, function (e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Ne.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = S.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(me(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function () {
                var e = [];
                return Me(this, arguments, function (t) {
                    var n = this.parentNode;
                    S.inArray(this, e) < 0 && (S.cleanData(me(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), S.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            S.fn[e] = function (e) {
                for (var n, i = [], o = S(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), S(o[s])[t](n), u.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Re = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
            We = function (e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            },
            Fe = new RegExp(re.join("|"), "i");

        function Be(e, t, n) {
            var i, o, r, s, a = e.style;
            return (n = n || We(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || S.contains(e.ownerDocument, e) || (s = S.style(e, t)), !v.pixelBoxStyles() && Re.test(s) && Fe.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
        }

        function ze(e, t) {
            return {
                get: function () {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }! function () {
            function e() {
                if (u) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", _e.appendChild(c).appendChild(u);
                    var e = n.getComputedStyle(u);
                    i = "1%" !== e.top, l = 12 === t(e.marginLeft), u.style.right = "60%", a = 36 === t(e.right), o = 36 === t(e.width), u.style.position = "absolute", r = 36 === u.offsetWidth || "absolute", _e.removeChild(c), u = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }
            var i, o, r, a, l, c = s.createElement("div"),
                u = s.createElement("div");
            u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === u.style.backgroundClip, S.extend(v, {
                boxSizingReliable: function () {
                    return e(), o
                },
                pixelBoxStyles: function () {
                    return e(), a
                },
                pixelPosition: function () {
                    return e(), i
                },
                reliableMarginLeft: function () {
                    return e(), l
                },
                scrollboxSize: function () {
                    return e(), r
                }
            }))
        }();
        var Ue = /^(none|table(?!-c[ea]).+)/,
            Ye = /^--/,
            Ke = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ve = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Qe = ["Webkit", "Moz", "ms"],
            Xe = s.createElement("div").style;

        function Ge(e) {
            var t = S.cssProps[e];
            return t || (t = S.cssProps[e] = function (e) {
                if (e in Xe) return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; n--;)
                    if ((e = Qe[n] + t) in Xe) return e
            }(e) || e), t
        }

        function Je(e, t, n) {
            var i = oe.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function Ze(e, t, n, i, o, r) {
            var s = "width" === t ? 1 : 0,
                a = 0,
                l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === n && (l += S.css(e, n + re[s], !0, o)), i ? ("content" === n && (l -= S.css(e, "padding" + re[s], !0, o)), "margin" !== n && (l -= S.css(e, "border" + re[s] + "Width", !0, o))) : (l += S.css(e, "padding" + re[s], !0, o), "padding" !== n ? l += S.css(e, "border" + re[s] + "Width", !0, o) : a += S.css(e, "border" + re[s] + "Width", !0, o));
            return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5))), l
        }

        function et(e, t, n) {
            var i = We(e),
                o = Be(e, t, i),
                r = "border-box" === S.css(e, "boxSizing", !1, i),
                s = r;
            if (Re.test(o)) {
                if (!n) return o;
                o = "auto"
            }
            return s = s && (v.boxSizingReliable() || o === e.style[t]), ("auto" === o || !parseFloat(o) && "inline" === S.css(e, "display", !1, i)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (o = parseFloat(o) || 0) + Ze(e, t, n || (r ? "border" : "content"), s, i, o) + "px"
        }

        function tt(e, t, n, i, o) {
            return new tt.prototype.init(e, t, n, i, o)
        }
        S.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = Be(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, s, a = Q(t),
                        l = Ye.test(t),
                        c = e.style;
                    if (l || (t = Ge(a)), s = S.cssHooks[t] || S.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                    "string" === (r = typeof n) && (o = oe.exec(n)) && o[1] && (n = le(e, t, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (S.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function (e, t, n, i) {
                var o, r, s, a = Q(t);
                return Ye.test(t) || (t = Ge(a)), (s = S.cssHooks[t] || S.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = Be(e, t, i)), "normal" === o && t in Ve && (o = Ve[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
            }
        }), S.each(["height", "width"], function (e, t) {
            S.cssHooks[t] = {
                get: function (e, n, i) {
                    if (n) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, i) : ae(e, Ke, function () {
                        return et(e, t, i)
                    })
                },
                set: function (e, n, i) {
                    var o, r = We(e),
                        s = "border-box" === S.css(e, "boxSizing", !1, r),
                        a = i && Ze(e, t, i, s, r);
                    return s && v.scrollboxSize() === r.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - Ze(e, t, "border", !1, r) - .5)), a && (o = oe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = S.css(e, t)), Je(0, n, a)
                }
            }
        }), S.cssHooks.marginLeft = ze(v.reliableMarginLeft, function (e, t) {
            if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, {
                marginLeft: 0
            }, function () {
                return e.getBoundingClientRect().left
            })) + "px"
        }), S.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (e, t) {
            S.cssHooks[e + t] = {
                expand: function (n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + re[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, "margin" !== e && (S.cssHooks[e + t].set = Je)
        }), S.fn.extend({
            css: function (e, t) {
                return U(this, function (e, t, n) {
                    var i, o, r = {},
                        s = 0;
                    if (Array.isArray(t)) {
                        for (i = We(e), o = t.length; s < o; s++) r[t[s]] = S.css(e, t[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), S.Tween = tt, tt.prototype = {
            constructor: tt,
            init: function (e, t, n, i, o, r) {
                this.elem = e, this.prop = n, this.easing = o || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (S.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = tt.propHooks[this.prop];
                return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = tt.propHooks[this.prop];
                return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
            }
        }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function (e) {
                    S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[S.cssProps[e.prop]] && !S.cssHooks[e.prop] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, S.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, S.fx = tt.prototype.init, S.fx.step = {};
        var nt, it, ot = /^(?:toggle|show|hide)$/,
            rt = /queueHooks$/;

        function st() {
            it && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(st) : n.setTimeout(st, S.fx.interval), S.fx.tick())
        }

        function at() {
            return n.setTimeout(function () {
                nt = void 0
            }), nt = Date.now()
        }

        function lt(e, t) {
            var n, i = 0,
                o = {
                    height: e
                };
            for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = re[i])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function ct(e, t, n) {
            for (var i, o = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                if (i = o[r].call(n, t, e)) return i
        }

        function ut(e, t, n) {
            var i, o, r = 0,
                s = ut.prefilters.length,
                a = S.Deferred().always(function () {
                    delete l.elem
                }),
                l = function () {
                    if (o) return !1;
                    for (var t = nt || at(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
                    return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
                },
                c = a.promise({
                    elem: e,
                    props: S.extend({}, t),
                    opts: S.extend(!0, {
                        specialEasing: {},
                        easing: S.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: nt || at(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var i = S.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function (t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < i; n++) c.tweens[n].run(1);
                        return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for (! function (e, t) {
                    var n, i, o, r, s;
                    for (n in e)
                        if (o = t[i = Q(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = S.cssHooks[i]) && "expand" in s)
                            for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                        else t[i] = o
                }(u, c.opts.specialEasing); r < s; r++)
                if (i = ut.prefilters[r].call(c, e, u, c.opts)) return y(i.stop) && (S._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
            return S.map(u, ct, c), y(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), S.fx.timer(S.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c
        }
        S.Animation = S.extend(ut, {
                tweeners: {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return le(n.elem, e, oe.exec(t), n), n
                    }]
                },
                tweener: function (e, t) {
                    y(e) ? (t = e, e = ["*"]) : e = e.match(M);
                    for (var n, i = 0, o = e.length; i < o; i++) n = e[i], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t)
                },
                prefilters: [function (e, t, n) {
                    var i, o, r, s, a, l, c, u, d = "width" in t || "height" in t,
                        f = this,
                        p = {},
                        h = e.style,
                        g = e.nodeType && se(e),
                        m = J.get(e, "fxshow");
                    for (i in n.queue || (null == (s = S._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                            s.unqueued || a()
                        }), s.unqueued++, f.always(function () {
                            f.always(function () {
                                s.unqueued--, S.queue(e, "fx").length || s.empty.fire()
                            })
                        })), t)
                        if (o = t[i], ot.test(o)) {
                            if (delete t[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                                if ("show" !== o || !m || void 0 === m[i]) continue;
                                g = !0
                            }
                            p[i] = m && m[i] || S.style(e, i)
                        } if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(p))
                        for (i in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = m && m.display) && (c = J.get(e, "display")), "none" === (u = S.css(e, "display")) && (c ? u = c : (de([e], !0), c = e.style.display || c, u = S.css(e, "display"), de([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === S.css(e, "float") && (l || (f.done(function () {
                                h.display = c
                            }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function () {
                                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                            })), l = !1, p) l || (m ? "hidden" in m && (g = m.hidden) : m = J.access(e, "fxshow", {
                            display: c
                        }), r && (m.hidden = !g), g && de([e], !0), f.done(function () {
                            for (i in g || de([e]), J.remove(e, "fxshow"), p) S.style(e, i, p[i])
                        })), l = ct(g ? m[i] : 0, i, f), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
                }],
                prefilter: function (e, t) {
                    t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
                }
            }), S.speed = function (e, t, n) {
                var i = e && "object" == typeof e ? S.extend({}, e) : {
                    complete: n || !n && t || y(e) && e,
                    duration: e,
                    easing: n && t || t && !y(t) && t
                };
                return S.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in S.fx.speeds ? i.duration = S.fx.speeds[i.duration] : i.duration = S.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                    y(i.old) && i.old.call(this), i.queue && S.dequeue(this, i.queue)
                }, i
            }, S.fn.extend({
                fadeTo: function (e, t, n, i) {
                    return this.filter(se).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function (e, t, n, i) {
                    var o = S.isEmptyObject(e),
                        r = S.speed(t, n, i),
                        s = function () {
                            var t = ut(this, S.extend({}, e), r);
                            (o || J.get(this, "finish")) && t.stop(!0)
                        };
                    return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function (e, t, n) {
                    var i = function (e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            r = S.timers,
                            s = J.get(this);
                        if (o) s[o] && s[o].stop && i(s[o]);
                        else
                            for (o in s) s[o] && s[o].stop && rt.test(o) && i(s[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                        !t && n || S.dequeue(this, e)
                    })
                },
                finish: function (e) {
                    return !1 !== e && (e = e || "fx"), this.each(function () {
                        var t, n = J.get(this),
                            i = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            r = S.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, S.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), S.each(["toggle", "show", "hide"], function (e, t) {
                var n = S.fn[t];
                S.fn[t] = function (e, i, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(lt(t, !0), e, i, o)
                }
            }), S.each({
                slideDown: lt("show"),
                slideUp: lt("hide"),
                slideToggle: lt("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (e, t) {
                S.fn[e] = function (e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), S.timers = [], S.fx.tick = function () {
                var e, t = 0,
                    n = S.timers;
                for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || S.fx.stop(), nt = void 0
            }, S.fx.timer = function (e) {
                S.timers.push(e), S.fx.start()
            }, S.fx.interval = 13, S.fx.start = function () {
                it || (it = !0, st())
            }, S.fx.stop = function () {
                it = null
            }, S.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, S.fn.delay = function (e, t) {
                return e = S.fx && S.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, i) {
                    var o = n.setTimeout(t, e);
                    i.stop = function () {
                        n.clearTimeout(o)
                    }
                })
            },
            function () {
                var e = s.createElement("input"),
                    t = s.createElement("select").appendChild(s.createElement("option"));
                e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = s.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value
            }();
        var dt, ft = S.expr.attrHandle;
        S.fn.extend({
            attr: function (e, t) {
                return U(this, S.attr, e, t, arguments.length > 1)
            },
            removeAttr: function (e) {
                return this.each(function () {
                    S.removeAttr(this, e)
                })
            }
        }), S.extend({
            attr: function (e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === r && S.isXMLDoc(e) || (o = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = S.find.attr(e, t)) ? void 0 : i)
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!v.radioValue && "radio" === t && O(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function (e, t) {
                var n, i = 0,
                    o = t && t.match(M);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++];) e.removeAttribute(n)
            }
        }), dt = {
            set: function (e, t, n) {
                return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ft[t] || S.find.attr;
            ft[t] = function (e, t, i) {
                var o, r, s = t.toLowerCase();
                return i || (r = ft[s], ft[s] = o, o = null != n(e, t, i) ? s : null, ft[s] = r), o
            }
        });
        var pt = /^(?:input|select|textarea|button)$/i,
            ht = /^(?:a|area)$/i;

        function gt(e) {
            return (e.match(M) || []).join(" ")
        }

        function mt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function vt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
        }
        S.fn.extend({
            prop: function (e, t) {
                return U(this, S.prop, e, t, arguments.length > 1)
            },
            removeProp: function (e) {
                return this.each(function () {
                    delete this[S.propFix[e] || e]
                })
            }
        }), S.extend({
            prop: function (e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && S.isXMLDoc(e) || (t = S.propFix[t] || t, o = S.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = S.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : pt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), v.optSelected || (S.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            S.propFix[this.toLowerCase()] = this
        }), S.fn.extend({
            addClass: function (e) {
                var t, n, i, o, r, s, a, l = 0;
                if (y(e)) return this.each(function (t) {
                    S(this).addClass(e.call(this, t, mt(this)))
                });
                if ((t = vt(e)).length)
                    for (; n = this[l++];)
                        if (o = mt(n), i = 1 === n.nodeType && " " + gt(o) + " ") {
                            for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            o !== (a = gt(i)) && n.setAttribute("class", a)
                        } return this
            },
            removeClass: function (e) {
                var t, n, i, o, r, s, a, l = 0;
                if (y(e)) return this.each(function (t) {
                    S(this).removeClass(e.call(this, t, mt(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((t = vt(e)).length)
                    for (; n = this[l++];)
                        if (o = mt(n), i = 1 === n.nodeType && " " + gt(o) + " ") {
                            for (s = 0; r = t[s++];)
                                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                            o !== (a = gt(i)) && n.setAttribute("class", a)
                        } return this
            },
            toggleClass: function (e, t) {
                var n = typeof e,
                    i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each(function (n) {
                    S(this).toggleClass(e.call(this, n, mt(this), t), t)
                }) : this.each(function () {
                    var t, o, r, s;
                    if (i)
                        for (o = 0, r = S(this), s = vt(e); t = s[o++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
                })
            },
            hasClass: function (e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + gt(mt(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var yt = /\r/g;
        S.fn.extend({
            val: function (e) {
                var t, n, i, o = this[0];
                return arguments.length ? (i = y(e), this.each(function (n) {
                    var o;
                    1 === this.nodeType && (null == (o = i ? e.call(this, n, S(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = S.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                })) : o ? (t = S.valHooks[o.type] || S.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(yt, "") : null == n ? "" : n : void 0
            }
        }), S.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = S.find.attr(e, "value");
                        return null != t ? t : gt(S.text(e))
                    }
                },
                select: {
                    get: function (e) {
                        var t, n, i, o = e.options,
                            r = e.selectedIndex,
                            s = "select-one" === e.type,
                            a = s ? null : [],
                            l = s ? r + 1 : o.length;
                        for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !O(n.parentNode, "optgroup"))) {
                                if (t = S(n).val(), s) return t;
                                a.push(t)
                            } return a
                    },
                    set: function (e, t) {
                        for (var n, i, o = e.options, r = S.makeArray(t), s = o.length; s--;)((i = o[s]).selected = S.inArray(S.valHooks.option.get(i), r) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), S.each(["radio", "checkbox"], function () {
            S.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return e.checked = S.inArray(S(e).val(), t) > -1
                }
            }, v.checkOn || (S.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), v.focusin = "onfocusin" in n;
        var bt = /^(?:focusinfocus|focusoutblur)$/,
            wt = function (e) {
                e.stopPropagation()
            };
        S.extend(S.event, {
            trigger: function (e, t, i, o) {
                var r, a, l, c, u, d, f, p, g = [i || s],
                    m = h.call(e, "type") ? e.type : e,
                    v = h.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = p = l = i = i || s, 3 !== i.nodeType && 8 !== i.nodeType && !bt.test(m + S.event.triggered) && (m.indexOf(".") > -1 && (m = (v = m.split(".")).shift(), v.sort()), u = m.indexOf(":") < 0 && "on" + m, (e = e[S.expando] ? e : new S.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : S.makeArray(t, [e]), f = S.event.special[m] || {}, o || !f.trigger || !1 !== f.trigger.apply(i, t))) {
                    if (!o && !f.noBubble && !b(i)) {
                        for (c = f.delegateType || m, bt.test(c + m) || (a = a.parentNode); a; a = a.parentNode) g.push(a), l = a;
                        l === (i.ownerDocument || s) && g.push(l.defaultView || l.parentWindow || n)
                    }
                    for (r = 0;
                        (a = g[r++]) && !e.isPropagationStopped();) p = a, e.type = r > 1 ? c : f.bindType || m, (d = (J.get(a, "events") || {})[e.type] && J.get(a, "handle")) && d.apply(a, t), (d = u && a[u]) && d.apply && X(a) && (e.result = d.apply(a, t), !1 === e.result && e.preventDefault());
                    return e.type = m, o || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(g.pop(), t) || !X(i) || u && y(i[m]) && !b(i) && ((l = i[u]) && (i[u] = null), S.event.triggered = m, e.isPropagationStopped() && p.addEventListener(m, wt), i[m](), e.isPropagationStopped() && p.removeEventListener(m, wt), S.event.triggered = void 0, l && (i[u] = l)), e.result
                }
            },
            simulate: function (e, t, n) {
                var i = S.extend(new S.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                S.event.trigger(i, null, t)
            }
        }), S.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    S.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return S.event.trigger(e, t, n, !0)
            }
        }), v.focusin || S.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            var n = function (e) {
                S.event.simulate(t, e.target, S.event.fix(e))
            };
            S.event.special[t] = {
                setup: function () {
                    var i = this.ownerDocument || this,
                        o = J.access(i, t);
                    o || i.addEventListener(e, n, !0), J.access(i, t, (o || 0) + 1)
                },
                teardown: function () {
                    var i = this.ownerDocument || this,
                        o = J.access(i, t) - 1;
                    o ? J.access(i, t, o) : (i.removeEventListener(e, n, !0), J.remove(i, t))
                }
            }
        });
        var Tt = n.location,
            _t = Date.now(),
            St = /\?/;
        S.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
        };
        var Ct = /\[\]$/,
            xt = /\r?\n/g,
            kt = /^(?:submit|button|image|reset|file)$/i,
            Et = /^(?:input|select|textarea|keygen)/i;

        function At(e, t, n, i) {
            var o;
            if (Array.isArray(t)) S.each(t, function (t, o) {
                n || Ct.test(e) ? i(e, o) : At(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
            });
            else if (n || "object" !== _(t)) i(e, t);
            else
                for (o in t) At(e + "[" + o + "]", t[o], n, i)
        }
        S.param = function (e, t) {
            var n, i = [],
                o = function (e, t) {
                    var n = y(t) ? t() : t;
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
                o(this.name, this.value)
            });
            else
                for (n in e) At(n, e[n], t, o);
            return i.join("&")
        }, S.fn.extend({
            serialize: function () {
                return S.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = S.prop(this, "elements");
                    return e ? S.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !S(this).is(":disabled") && Et.test(this.nodeName) && !kt.test(e) && (this.checked || !fe.test(e))
                }).map(function (e, t) {
                    var n = S(this).val();
                    return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
                        return {
                            name: t.name,
                            value: e.replace(xt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(xt, "\r\n")
                    }
                }).get()
            }
        });
        var Dt = /%20/g,
            Ot = /#.*$/,
            Nt = /([?&])_=[^&]*/,
            It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            $t = /^(?:GET|HEAD)$/,
            Lt = /^\/\//,
            jt = {},
            Pt = {},
            Ht = "*/".concat("*"),
            Mt = s.createElement("a");

        function qt(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0,
                    r = t.toLowerCase().match(M) || [];
                if (y(n))
                    for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function Rt(e, t, n, i) {
            var o = {},
                r = e === Pt;

            function s(a) {
                var l;
                return o[a] = !0, S.each(e[a] || [], function (e, a) {
                    var c = a(t, n, i);
                    return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
                }), l
            }
            return s(t.dataTypes[0]) || !o["*"] && s("*")
        }

        function Wt(e, t) {
            var n, i, o = S.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
            return i && S.extend(!0, e, i), e
        }
        Mt.href = Tt.href, S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ht,
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
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": S.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (e, t) {
                return t ? Wt(Wt(e, S.ajaxSettings), t) : Wt(S.ajaxSettings, e)
            },
            ajaxPrefilter: qt(jt),
            ajaxTransport: qt(Pt),
            ajax: function (e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, o, r, a, l, c, u, d, f, p, h = S.ajaxSetup({}, t),
                    g = h.context || h,
                    m = h.context && (g.nodeType || g.jquery) ? S(g) : S.event,
                    v = S.Deferred(),
                    y = S.Callbacks("once memory"),
                    b = h.statusCode || {},
                    w = {},
                    T = {},
                    _ = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (u) {
                                if (!a)
                                    for (a = {}; t = It.exec(r);) a[t[1].toLowerCase()] = t[2];
                                t = a[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function () {
                            return u ? r : null
                        },
                        setRequestHeader: function (e, t) {
                            return null == u && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, w[e] = t), this
                        },
                        overrideMimeType: function (e) {
                            return null == u && (h.mimeType = e), this
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (u) C.always(e[C.status]);
                                else
                                    for (t in e) b[t] = [b[t], e[t]];
                            return this
                        },
                        abort: function (e) {
                            var t = e || _;
                            return i && i.abort(t), x(0, t), this
                        }
                    };
                if (v.promise(C), h.url = ((e || h.url || Tt.href) + "").replace(Lt, Tt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
                    c = s.createElement("a");
                    try {
                        c.href = h.url, c.href = c.href, h.crossDomain = Mt.protocol + "//" + Mt.host != c.protocol + "//" + c.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = S.param(h.data, h.traditional)), Rt(jt, h, t, C), u) return C;
                for (f in (d = S.event && h.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !$t.test(h.type), o = h.url.replace(Ot, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Dt, "+")) : (p = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (St.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Nt, "$1"), p = (St.test(o) ? "&" : "?") + "_=" + _t++ + p), h.url = o + p), h.ifModified && (S.lastModified[o] && C.setRequestHeader("If-Modified-Since", S.lastModified[o]), S.etag[o] && C.setRequestHeader("If-None-Match", S.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : h.accepts["*"]), h.headers) C.setRequestHeader(f, h.headers[f]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || u)) return C.abort();
                if (_ = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), i = Rt(Pt, h, t, C)) {
                    if (C.readyState = 1, d && m.trigger("ajaxSend", [C, h]), u) return C;
                    h.async && h.timeout > 0 && (l = n.setTimeout(function () {
                        C.abort("timeout")
                    }, h.timeout));
                    try {
                        u = !1, i.send(w, x)
                    } catch (e) {
                        if (u) throw e;
                        x(-1, e)
                    }
                } else x(-1, "No Transport");

                function x(e, t, s, a) {
                    var c, f, p, w, T, _ = t;
                    u || (u = !0, l && n.clearTimeout(l), i = void 0, r = a || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, s && (w = function (e, t, n) {
                        for (var i, o, r, s, a = e.contents, l = e.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (i)
                            for (o in a)
                                if (a[o] && a[o].test(i)) {
                                    l.unshift(o);
                                    break
                                } if (l[0] in n) r = l[0];
                        else {
                            for (o in n) {
                                if (!l[0] || e.converters[o + " " + l[0]]) {
                                    r = o;
                                    break
                                }
                                s || (s = o)
                            }
                            r = r || s
                        }
                        if (r) return r !== l[0] && l.unshift(r), n[r]
                    }(h, C, s)), w = function (e, t, n, i) {
                        var o, r, s, a, l, c = {},
                            u = e.dataTypes.slice();
                        if (u[1])
                            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                        for (r = u.shift(); r;)
                            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                                if ("*" === r) r = l;
                                else if ("*" !== l && l !== r) {
                            if (!(s = c[l + " " + r] || c["* " + r]))
                                for (o in c)
                                    if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                        !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                        break
                                    } if (!0 !== s)
                                if (s && e.throws) t = s(t);
                                else try {
                                    t = s(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: s ? e : "No conversion from " + l + " to " + r
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(h, w, C, c), c ? (h.ifModified && ((T = C.getResponseHeader("Last-Modified")) && (S.lastModified[o] = T), (T = C.getResponseHeader("etag")) && (S.etag[o] = T)), 204 === e || "HEAD" === h.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = w.state, f = w.data, c = !(p = w.error))) : (p = _, !e && _ || (_ = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || _) + "", c ? v.resolveWith(g, [f, _, C]) : v.rejectWith(g, [C, _, p]), C.statusCode(b), b = void 0, d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? f : p]), y.fireWith(g, [C, _]), d && (m.trigger("ajaxComplete", [C, h]), --S.active || S.event.trigger("ajaxStop")))
                }
                return C
            },
            getJSON: function (e, t, n) {
                return S.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return S.get(e, void 0, t, "script")
            }
        }), S.each(["get", "post"], function (e, t) {
            S[t] = function (e, n, i, o) {
                return y(n) && (o = o || i, i = n, n = void 0), S.ajax(S.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                }, S.isPlainObject(e) && e))
            }
        }), S._evalUrl = function (e) {
            return S.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, S.fn.extend({
            wrapAll: function (e) {
                var t;
                return this[0] && (y(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function (e) {
                return y(e) ? this.each(function (t) {
                    S(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = S(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function (e) {
                var t = y(e);
                return this.each(function (n) {
                    S(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function (e) {
                return this.parent(e).not("body").each(function () {
                    S(this).replaceWith(this.childNodes)
                }), this
            }
        }), S.expr.pseudos.hidden = function (e) {
            return !S.expr.pseudos.visible(e)
        }, S.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, S.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        };
        var Ft = {
                0: 200,
                1223: 204
            },
            Bt = S.ajaxSettings.xhr();
        v.cors = !!Bt && "withCredentials" in Bt, v.ajax = Bt = !!Bt, S.ajaxTransport(function (e) {
            var t, i;
            if (v.cors || Bt && !e.crossDomain) return {
                send: function (o, r) {
                    var s, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
                    t = function (e) {
                        return function () {
                            t && (t = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Ft[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = t(), i = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                        4 === a.readyState && n.setTimeout(function () {
                            t && i()
                        })
                    }, t = t("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                },
                abort: function () {
                    t && t()
                }
            }
        }), S.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1)
        }), S.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (e) {
                    return S.globalEval(e), e
                }
            }
        }), S.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), S.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain) return {
                send: function (i, o) {
                    t = S("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), s.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        });
        var zt, Ut = [],
            Yt = /(=)\?(?=&|$)|\?\?/;
        S.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = Ut.pop() || S.expando + "_" + _t++;
                return this[e] = !0, e
            }
        }), S.ajaxPrefilter("json jsonp", function (e, t, i) {
            var o, r, s, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + o) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
                return s || S.error(o + " was not called"), s[0]
            }, e.dataTypes[0] = "json", r = n[o], n[o] = function () {
                s = arguments
            }, i.always(function () {
                void 0 === r ? S(n).removeProp(o) : n[o] = r, e[o] && (e.jsonpCallback = t.jsonpCallback, Ut.push(o)), s && y(r) && r(s[0]), s = r = void 0
            }), "script"
        }), v.createHTMLDocument = ((zt = s.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === zt.childNodes.length), S.parseHTML = function (e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((i = (t = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href, t.head.appendChild(i)) : t = s), o = N.exec(e), r = !n && [], o ? [t.createElement(o[1])] : (o = Te([e], t, r), r && r.length && S(r).remove(), S.merge([], o.childNodes)));
            var i, o, r
        }, S.fn.load = function (e, t, n) {
            var i, o, r, s = this,
                a = e.indexOf(" ");
            return a > -1 && (i = gt(e.slice(a)), e = e.slice(0, a)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && S.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                r = arguments, s.html(i ? S("<div>").append(S.parseHTML(e)).find(i) : e)
            }).always(n && function (e, t) {
                s.each(function () {
                    n.apply(this, r || [e.responseText, t, e])
                })
            }), this
        }, S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            S.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), S.expr.pseudos.animated = function (e) {
            return S.grep(S.timers, function (t) {
                return e === t.elem
            }).length
        }, S.offset = {
            setOffset: function (e, t, n) {
                var i, o, r, s, a, l, c = S.css(e, "position"),
                    u = S(e),
                    d = {};
                "static" === c && (e.style.position = "relative"), a = u.offset(), r = S.css(e, "top"), l = S.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), y(t) && (t = t.call(e, n, S.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : u.css(d)
            }
        }, S.fn.extend({
            offset: function (e) {
                if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                    S.offset.setOffset(this, e, t)
                });
                var t, n, i = this[0];
                return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function () {
                if (this[0]) {
                    var e, t, n, i = this[0],
                        o = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === S.css(i, "position")) t = i.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position");) e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && ((o = S(e).offset()).top += S.css(e, "borderTopWidth", !0), o.left += S.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - S.css(i, "marginTop", !0),
                        left: t.left - o.left - S.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === S.css(e, "position");) e = e.offsetParent;
                    return e || _e
                })
            }
        }), S.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, t) {
            var n = "pageYOffset" === t;
            S.fn[e] = function (i) {
                return U(this, function (e, i, o) {
                    var r;
                    if (b(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];
                    r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
                }, e, i, arguments.length)
            }
        }), S.each(["top", "left"], function (e, t) {
            S.cssHooks[t] = ze(v.pixelPosition, function (e, n) {
                if (n) return n = Be(e, t), Re.test(n) ? S(e).position()[t] + "px" : n
            })
        }), S.each({
            Height: "height",
            Width: "width"
        }, function (e, t) {
            S.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function (n, i) {
                S.fn[i] = function (o, r) {
                    var s = arguments.length && (n || "boolean" != typeof o),
                        a = n || (!0 === o || !0 === r ? "margin" : "border");
                    return U(this, function (t, n, o) {
                        var r;
                        return b(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? S.css(t, n, a) : S.style(t, n, o, a)
                    }, t, s ? o : void 0, s)
                }
            })
        }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            S.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), S.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), S.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), S.proxy = function (e, t) {
            var n, i, o;
            if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return i = l.call(arguments, 2), (o = function () {
                return e.apply(t || this, i.concat(l.call(arguments)))
            }).guid = e.guid = e.guid || S.guid++, o
        }, S.holdReady = function (e) {
            e ? S.readyWait++ : S.ready(!0)
        }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = O, S.isFunction = y, S.isWindow = b, S.camelCase = Q, S.type = _, S.now = Date.now, S.isNumeric = function (e) {
            var t = S.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, void 0 === (i = function () {
            return S
        }.apply(t, [])) || (e.exports = i);
        var Kt = n.jQuery,
            Vt = n.$;
        return S.noConflict = function (e) {
            return n.$ === S && (n.$ = Vt), e && n.jQuery === S && (n.jQuery = Kt), S
        }, o || (n.jQuery = n.$ = S), S
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function (e) {
            for (var n = "undefined" != typeof window && "undefined" != typeof document, i = ["Edge", "Trident", "Firefox"], o = 0, r = 0; r < i.length; r += 1)
                if (n && navigator.userAgent.indexOf(i[r]) >= 0) {
                    o = 1;
                    break
                } var s = n && window.Promise ? function (e) {
                var t = !1;
                return function () {
                    t || (t = !0, window.Promise.resolve().then(function () {
                        t = !1, e()
                    }))
                }
            } : function (e) {
                var t = !1;
                return function () {
                    t || (t = !0, setTimeout(function () {
                        t = !1, e()
                    }, o))
                }
            };

            function a(e) {
                return e && "[object Function]" === {}.toString.call(e)
            }

            function l(e, t) {
                if (1 !== e.nodeType) return [];
                var n = getComputedStyle(e, null);
                return t ? n[t] : n
            }

            function c(e) {
                return "HTML" === e.nodeName ? e : e.parentNode || e.host
            }

            function u(e) {
                if (!e) return document.body;
                switch (e.nodeName) {
                    case "HTML":
                    case "BODY":
                        return e.ownerDocument.body;
                    case "#document":
                        return e.body
                }
                var t = l(e),
                    n = t.overflow,
                    i = t.overflowX,
                    o = t.overflowY;
                return /(auto|scroll|overlay)/.test(n + o + i) ? e : u(c(e))
            }
            var d = n && !(!window.MSInputMethodContext || !document.documentMode),
                f = n && /MSIE 10/.test(navigator.userAgent);

            function p(e) {
                return 11 === e ? d : 10 === e ? f : d || f
            }

            function h(e) {
                if (!e) return document.documentElement;
                for (var t = p(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
                var i = n && n.nodeName;
                return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === l(n, "position") ? h(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
            }

            function g(e) {
                return null !== e.parentNode ? g(e.parentNode) : e
            }

            function m(e, t) {
                if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                    i = n ? e : t,
                    o = n ? t : e,
                    r = document.createRange();
                r.setStart(i, 0), r.setEnd(o, 0);
                var s, a, l = r.commonAncestorContainer;
                if (e !== l && t !== l || i.contains(o)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && h(s.firstElementChild) !== s ? h(l) : l;
                var c = g(e);
                return c.host ? m(c.host, t) : m(e, g(t).host)
            }

            function v(e) {
                var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                    n = e.nodeName;
                if ("BODY" === n || "HTML" === n) {
                    var i = e.ownerDocument.documentElement;
                    return (e.ownerDocument.scrollingElement || i)[t]
                }
                return e[t]
            }

            function y(e, t) {
                var n = "x" === t ? "Left" : "Top",
                    i = "Left" === n ? "Right" : "Bottom";
                return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
            }

            function b(e, t, n, i) {
                return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], p(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
            }

            function w() {
                var e = document.body,
                    t = document.documentElement,
                    n = p(10) && getComputedStyle(t);
                return {
                    height: b("Height", e, t, n),
                    width: b("Width", e, t, n)
                }
            }
            var T = function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                },
                _ = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                S = function (e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                },
                C = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                };

            function x(e) {
                return C({}, e, {
                    right: e.left + e.width,
                    bottom: e.top + e.height
                })
            }

            function k(e) {
                var t = {};
                try {
                    if (p(10)) {
                        t = e.getBoundingClientRect();
                        var n = v(e, "top"),
                            i = v(e, "left");
                        t.top += n, t.left += i, t.bottom += n, t.right += i
                    } else t = e.getBoundingClientRect()
                } catch (e) {}
                var o = {
                        left: t.left,
                        top: t.top,
                        width: t.right - t.left,
                        height: t.bottom - t.top
                    },
                    r = "HTML" === e.nodeName ? w() : {},
                    s = r.width || e.clientWidth || o.right - o.left,
                    a = r.height || e.clientHeight || o.bottom - o.top,
                    c = e.offsetWidth - s,
                    u = e.offsetHeight - a;
                if (c || u) {
                    var d = l(e);
                    c -= y(d, "x"), u -= y(d, "y"), o.width -= c, o.height -= u
                }
                return x(o)
            }

            function E(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = p(10),
                    o = "HTML" === t.nodeName,
                    r = k(e),
                    s = k(t),
                    a = u(e),
                    c = l(t),
                    d = parseFloat(c.borderTopWidth, 10),
                    f = parseFloat(c.borderLeftWidth, 10);
                n && "HTML" === t.nodeName && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
                var h = x({
                    top: r.top - s.top - d,
                    left: r.left - s.left - f,
                    width: r.width,
                    height: r.height
                });
                if (h.marginTop = 0, h.marginLeft = 0, !i && o) {
                    var g = parseFloat(c.marginTop, 10),
                        m = parseFloat(c.marginLeft, 10);
                    h.top -= d - g, h.bottom -= d - g, h.left -= f - m, h.right -= f - m, h.marginTop = g, h.marginLeft = m
                }
                return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (h = function (e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = v(t, "top"),
                        o = v(t, "left"),
                        r = n ? -1 : 1;
                    return e.top += i * r, e.bottom += i * r, e.left += o * r, e.right += o * r, e
                }(h, t)), h
            }

            function A(e) {
                if (!e || !e.parentElement || p()) return document.documentElement;
                for (var t = e.parentElement; t && "none" === l(t, "transform");) t = t.parentElement;
                return t || document.documentElement
            }

            function D(e, t, n, i) {
                var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    r = {
                        top: 0,
                        left: 0
                    },
                    s = o ? A(e) : m(e, t);
                if ("viewport" === i) r = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = e.ownerDocument.documentElement,
                        i = E(e, n),
                        o = Math.max(n.clientWidth, window.innerWidth || 0),
                        r = Math.max(n.clientHeight, window.innerHeight || 0),
                        s = t ? 0 : v(n),
                        a = t ? 0 : v(n, "left");
                    return x({
                        top: s - i.top + i.marginTop,
                        left: a - i.left + i.marginLeft,
                        width: o,
                        height: r
                    })
                }(s, o);
                else {
                    var a = void 0;
                    "scrollParent" === i ? "BODY" === (a = u(c(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
                    var d = E(a, s, o);
                    if ("HTML" !== a.nodeName || function e(t) {
                            var n = t.nodeName;
                            return "BODY" !== n && "HTML" !== n && ("fixed" === l(t, "position") || e(c(t)))
                        }(s)) r = d;
                    else {
                        var f = w(),
                            p = f.height,
                            h = f.width;
                        r.top += d.top - d.marginTop, r.bottom = p + d.top, r.left += d.left - d.marginLeft, r.right = h + d.left
                    }
                }
                return r.left += n, r.top += n, r.right -= n, r.bottom -= n, r
            }

            function O(e, t, n, i, o) {
                var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (-1 === e.indexOf("auto")) return e;
                var s = D(n, i, r, o),
                    a = {
                        top: {
                            width: s.width,
                            height: t.top - s.top
                        },
                        right: {
                            width: s.right - t.right,
                            height: s.height
                        },
                        bottom: {
                            width: s.width,
                            height: s.bottom - t.bottom
                        },
                        left: {
                            width: t.left - s.left,
                            height: s.height
                        }
                    },
                    l = Object.keys(a).map(function (e) {
                        return C({
                            key: e
                        }, a[e], {
                            area: (t = a[e], t.width * t.height)
                        });
                        var t
                    }).sort(function (e, t) {
                        return t.area - e.area
                    }),
                    c = l.filter(function (e) {
                        var t = e.width,
                            i = e.height;
                        return t >= n.clientWidth && i >= n.clientHeight
                    }),
                    u = c.length > 0 ? c[0].key : l[0].key,
                    d = e.split("-")[1];
                return u + (d ? "-" + d : "")
            }

            function N(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return E(n, i ? A(t) : m(t, n), i)
            }

            function I(e) {
                var t = getComputedStyle(e),
                    n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
                    i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
                return {
                    width: e.offsetWidth + i,
                    height: e.offsetHeight + n
                }
            }

            function $(e) {
                var t = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };
                return e.replace(/left|right|bottom|top/g, function (e) {
                    return t[e]
                })
            }

            function L(e, t, n) {
                n = n.split("-")[0];
                var i = I(e),
                    o = {
                        width: i.width,
                        height: i.height
                    },
                    r = -1 !== ["right", "left"].indexOf(n),
                    s = r ? "top" : "left",
                    a = r ? "left" : "top",
                    l = r ? "height" : "width",
                    c = r ? "width" : "height";
                return o[s] = t[s] + t[l] / 2 - i[l] / 2, o[a] = n === a ? t[a] - i[c] : t[$(a)], o
            }

            function j(e, t) {
                return Array.prototype.find ? e.find(t) : e.filter(t)[0]
            }

            function P(e, t, n) {
                return (void 0 === n ? e : e.slice(0, function (e, t, n) {
                    if (Array.prototype.findIndex) return e.findIndex(function (e) {
                        return e[t] === n
                    });
                    var i = j(e, function (e) {
                        return e[t] === n
                    });
                    return e.indexOf(i)
                }(e, "name", n))).forEach(function (e) {
                    e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var n = e.function || e.fn;
                    e.enabled && a(n) && (t.offsets.popper = x(t.offsets.popper), t.offsets.reference = x(t.offsets.reference), t = n(t, e))
                }), t
            }

            function H(e, t) {
                return e.some(function (e) {
                    var n = e.name;
                    return e.enabled && n === t
                })
            }

            function M(e) {
                for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                    var o = t[i],
                        r = o ? "" + o + n : e;
                    if (void 0 !== document.body.style[r]) return r
                }
                return null
            }

            function q(e) {
                var t = e.ownerDocument;
                return t ? t.defaultView : window
            }

            function R(e, t, n, i) {
                n.updateBound = i, q(e).addEventListener("resize", n.updateBound, {
                    passive: !0
                });
                var o = u(e);
                return function e(t, n, i, o) {
                    var r = "BODY" === t.nodeName,
                        s = r ? t.ownerDocument.defaultView : t;
                    s.addEventListener(n, i, {
                        passive: !0
                    }), r || e(u(s.parentNode), n, i, o), o.push(s)
                }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
            }

            function W() {
                var e, t;
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, q(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
                    e.removeEventListener("scroll", t.updateBound)
                }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
            }

            function F(e) {
                return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
            }

            function B(e, t) {
                Object.keys(t).forEach(function (n) {
                    var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && F(t[n]) && (i = "px"), e.style[n] = t[n] + i
                })
            }

            function z(e, t, n) {
                var i = j(e, function (e) {
                        return e.name === t
                    }),
                    o = !!i && e.some(function (e) {
                        return e.name === n && e.enabled && e.order < i.order
                    });
                if (!o) {
                    var r = "`" + t + "`",
                        s = "`" + n + "`";
                    console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
                }
                return o
            }
            var U = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                Y = U.slice(3);

            function K(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = Y.indexOf(e),
                    i = Y.slice(n + 1).concat(Y.slice(0, n));
                return t ? i.reverse() : i
            }
            var V = {
                FLIP: "flip",
                CLOCKWISE: "clockwise",
                COUNTERCLOCKWISE: "counterclockwise"
            };

            function Q(e, t, n, i) {
                var o = [0, 0],
                    r = -1 !== ["right", "left"].indexOf(i),
                    s = e.split(/(\+|\-)/).map(function (e) {
                        return e.trim()
                    }),
                    a = s.indexOf(j(s, function (e) {
                        return -1 !== e.search(/,|\s/)
                    }));
                s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                var l = /\s*,\s*|\s+/,
                    c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                return (c = c.map(function (e, i) {
                    var o = (1 === i ? !r : r) ? "height" : "width",
                        s = !1;
                    return e.reduce(function (e, t) {
                        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
                    }, []).map(function (e) {
                        return function (e, t, n, i) {
                            var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                r = +o[1],
                                s = o[2];
                            if (!r) return e;
                            if (0 === s.indexOf("%")) {
                                var a = void 0;
                                switch (s) {
                                    case "%p":
                                        a = n;
                                        break;
                                    case "%":
                                    case "%r":
                                    default:
                                        a = i
                                }
                                return x(a)[t] / 100 * r
                            }
                            if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;
                            return r
                        }(e, o, t, n)
                    })
                })).forEach(function (e, t) {
                    e.forEach(function (n, i) {
                        F(n) && (o[t] += n * ("-" === e[i - 1] ? -1 : 1))
                    })
                }), o
            }
            var X = {
                    placement: "bottom",
                    positionFixed: !1,
                    eventsEnabled: !0,
                    removeOnDestroy: !1,
                    onCreate: function () {},
                    onUpdate: function () {},
                    modifiers: {
                        shift: {
                            order: 100,
                            enabled: !0,
                            fn: function (e) {
                                var t = e.placement,
                                    n = t.split("-")[0],
                                    i = t.split("-")[1];
                                if (i) {
                                    var o = e.offsets,
                                        r = o.reference,
                                        s = o.popper,
                                        a = -1 !== ["bottom", "top"].indexOf(n),
                                        l = a ? "left" : "top",
                                        c = a ? "width" : "height",
                                        u = {
                                            start: S({}, l, r[l]),
                                            end: S({}, l, r[l] + r[c] - s[c])
                                        };
                                    e.offsets.popper = C({}, s, u[i])
                                }
                                return e
                            }
                        },
                        offset: {
                            order: 200,
                            enabled: !0,
                            fn: function (e, t) {
                                var n = t.offset,
                                    i = e.placement,
                                    o = e.offsets,
                                    r = o.popper,
                                    s = o.reference,
                                    a = i.split("-")[0],
                                    l = void 0;
                                return l = F(+n) ? [+n, 0] : Q(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), e.popper = r, e
                            },
                            offset: 0
                        },
                        preventOverflow: {
                            order: 300,
                            enabled: !0,
                            fn: function (e, t) {
                                var n = t.boundariesElement || h(e.instance.popper);
                                e.instance.reference === n && (n = h(n));
                                var i = M("transform"),
                                    o = e.instance.popper.style,
                                    r = o.top,
                                    s = o.left,
                                    a = o[i];
                                o.top = "", o.left = "", o[i] = "";
                                var l = D(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                                o.top = r, o.left = s, o[i] = a, t.boundaries = l;
                                var c = t.priority,
                                    u = e.offsets.popper,
                                    d = {
                                        primary: function (e) {
                                            var n = u[e];
                                            return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), S({}, e, n)
                                        },
                                        secondary: function (e) {
                                            var n = "right" === e ? "left" : "top",
                                                i = u[n];
                                            return u[e] > l[e] && !t.escapeWithReference && (i = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), S({}, n, i)
                                        }
                                    };
                                return c.forEach(function (e) {
                                    var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                    u = C({}, u, d[t](e))
                                }), e.offsets.popper = u, e
                            },
                            priority: ["left", "right", "top", "bottom"],
                            padding: 5,
                            boundariesElement: "scrollParent"
                        },
                        keepTogether: {
                            order: 400,
                            enabled: !0,
                            fn: function (e) {
                                var t = e.offsets,
                                    n = t.popper,
                                    i = t.reference,
                                    o = e.placement.split("-")[0],
                                    r = Math.floor,
                                    s = -1 !== ["top", "bottom"].indexOf(o),
                                    a = s ? "right" : "bottom",
                                    l = s ? "left" : "top",
                                    c = s ? "width" : "height";
                                return n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])), e
                            }
                        },
                        arrow: {
                            order: 500,
                            enabled: !0,
                            fn: function (e, t) {
                                var n;
                                if (!z(e.instance.modifiers, "arrow", "keepTogether")) return e;
                                var i = t.element;
                                if ("string" == typeof i) {
                                    if (!(i = e.instance.popper.querySelector(i))) return e
                                } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                                var o = e.placement.split("-")[0],
                                    r = e.offsets,
                                    s = r.popper,
                                    a = r.reference,
                                    c = -1 !== ["left", "right"].indexOf(o),
                                    u = c ? "height" : "width",
                                    d = c ? "Top" : "Left",
                                    f = d.toLowerCase(),
                                    p = c ? "left" : "top",
                                    h = c ? "bottom" : "right",
                                    g = I(i)[u];
                                a[h] - g < s[f] && (e.offsets.popper[f] -= s[f] - (a[h] - g)), a[f] + g > s[h] && (e.offsets.popper[f] += a[f] + g - s[h]), e.offsets.popper = x(e.offsets.popper);
                                var m = a[f] + a[u] / 2 - g / 2,
                                    v = l(e.instance.popper),
                                    y = parseFloat(v["margin" + d], 10),
                                    b = parseFloat(v["border" + d + "Width"], 10),
                                    w = m - e.offsets.popper[f] - y - b;
                                return w = Math.max(Math.min(s[u] - g, w), 0), e.arrowElement = i, e.offsets.arrow = (S(n = {}, f, Math.round(w)), S(n, p, ""), n), e
                            },
                            element: "[x-arrow]"
                        },
                        flip: {
                            order: 600,
                            enabled: !0,
                            fn: function (e, t) {
                                if (H(e.instance.modifiers, "inner")) return e;
                                if (e.flipped && e.placement === e.originalPlacement) return e;
                                var n = D(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                    i = e.placement.split("-")[0],
                                    o = $(i),
                                    r = e.placement.split("-")[1] || "",
                                    s = [];
                                switch (t.behavior) {
                                    case V.FLIP:
                                        s = [i, o];
                                        break;
                                    case V.CLOCKWISE:
                                        s = K(i);
                                        break;
                                    case V.COUNTERCLOCKWISE:
                                        s = K(i, !0);
                                        break;
                                    default:
                                        s = t.behavior
                                }
                                return s.forEach(function (a, l) {
                                    if (i !== a || s.length === l + 1) return e;
                                    i = e.placement.split("-")[0], o = $(i);
                                    var c = e.offsets.popper,
                                        u = e.offsets.reference,
                                        d = Math.floor,
                                        f = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom),
                                        p = d(c.left) < d(n.left),
                                        h = d(c.right) > d(n.right),
                                        g = d(c.top) < d(n.top),
                                        m = d(c.bottom) > d(n.bottom),
                                        v = "left" === i && p || "right" === i && h || "top" === i && g || "bottom" === i && m,
                                        y = -1 !== ["top", "bottom"].indexOf(i),
                                        b = !!t.flipVariations && (y && "start" === r && p || y && "end" === r && h || !y && "start" === r && g || !y && "end" === r && m);
                                    (f || v || b) && (e.flipped = !0, (f || v) && (i = s[l + 1]), b && (r = function (e) {
                                        return "end" === e ? "start" : "start" === e ? "end" : e
                                    }(r)), e.placement = i + (r ? "-" + r : ""), e.offsets.popper = C({}, e.offsets.popper, L(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, "flip"))
                                }), e
                            },
                            behavior: "flip",
                            padding: 5,
                            boundariesElement: "viewport"
                        },
                        inner: {
                            order: 700,
                            enabled: !1,
                            fn: function (e) {
                                var t = e.placement,
                                    n = t.split("-")[0],
                                    i = e.offsets,
                                    o = i.popper,
                                    r = i.reference,
                                    s = -1 !== ["left", "right"].indexOf(n),
                                    a = -1 === ["top", "left"].indexOf(n);
                                return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), e.placement = $(t), e.offsets.popper = x(o), e
                            }
                        },
                        hide: {
                            order: 800,
                            enabled: !0,
                            fn: function (e) {
                                if (!z(e.instance.modifiers, "hide", "preventOverflow")) return e;
                                var t = e.offsets.reference,
                                    n = j(e.instance.modifiers, function (e) {
                                        return "preventOverflow" === e.name
                                    }).boundaries;
                                if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                    if (!0 === e.hide) return e;
                                    e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                                } else {
                                    if (!1 === e.hide) return e;
                                    e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                                }
                                return e
                            }
                        },
                        computeStyle: {
                            order: 850,
                            enabled: !0,
                            fn: function (e, t) {
                                var n = t.x,
                                    i = t.y,
                                    o = e.offsets.popper,
                                    r = j(e.instance.modifiers, function (e) {
                                        return "applyStyle" === e.name
                                    }).gpuAcceleration;
                                void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                var s = void 0 !== r ? r : t.gpuAcceleration,
                                    a = k(h(e.instance.popper)),
                                    l = {
                                        position: o.position
                                    },
                                    c = {
                                        left: Math.floor(o.left),
                                        top: Math.round(o.top),
                                        bottom: Math.round(o.bottom),
                                        right: Math.floor(o.right)
                                    },
                                    u = "bottom" === n ? "top" : "bottom",
                                    d = "right" === i ? "left" : "right",
                                    f = M("transform"),
                                    p = void 0,
                                    g = void 0;
                                if (g = "bottom" === u ? -a.height + c.bottom : c.top, p = "right" === d ? -a.width + c.right : c.left, s && f) l[f] = "translate3d(" + p + "px, " + g + "px, 0)", l[u] = 0, l[d] = 0, l.willChange = "transform";
                                else {
                                    var m = "bottom" === u ? -1 : 1,
                                        v = "right" === d ? -1 : 1;
                                    l[u] = g * m, l[d] = p * v, l.willChange = u + ", " + d
                                }
                                var y = {
                                    "x-placement": e.placement
                                };
                                return e.attributes = C({}, y, e.attributes), e.styles = C({}, l, e.styles), e.arrowStyles = C({}, e.offsets.arrow, e.arrowStyles), e
                            },
                            gpuAcceleration: !0,
                            x: "bottom",
                            y: "right"
                        },
                        applyStyle: {
                            order: 900,
                            enabled: !0,
                            fn: function (e) {
                                var t, n;
                                return B(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function (e) {
                                    !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                                }), e.arrowElement && Object.keys(e.arrowStyles).length && B(e.arrowElement, e.arrowStyles), e
                            },
                            onLoad: function (e, t, n, i, o) {
                                var r = N(o, t, e, n.positionFixed),
                                    s = O(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                return t.setAttribute("x-placement", s), B(t, {
                                    position: n.positionFixed ? "fixed" : "absolute"
                                }), n
                            },
                            gpuAcceleration: void 0
                        }
                    }
                },
                G = function () {
                    function e(t, n) {
                        var i = this,
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        T(this, e), this.scheduleUpdate = function () {
                            return requestAnimationFrame(i.update)
                        }, this.update = s(this.update.bind(this)), this.options = C({}, e.Defaults, o), this.state = {
                            isDestroyed: !1,
                            isCreated: !1,
                            scrollParents: []
                        }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(C({}, e.Defaults.modifiers, o.modifiers)).forEach(function (t) {
                            i.options.modifiers[t] = C({}, e.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {})
                        }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                            return C({
                                name: e
                            }, i.options.modifiers[e])
                        }).sort(function (e, t) {
                            return e.order - t.order
                        }), this.modifiers.forEach(function (e) {
                            e.enabled && a(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
                        }), this.update();
                        var r = this.options.eventsEnabled;
                        r && this.enableEventListeners(), this.state.eventsEnabled = r
                    }
                    return _(e, [{
                        key: "update",
                        value: function () {
                            return function () {
                                if (!this.state.isDestroyed) {
                                    var e = {
                                        instance: this,
                                        styles: {},
                                        arrowStyles: {},
                                        attributes: {},
                                        flipped: !1,
                                        offsets: {}
                                    };
                                    e.offsets.reference = N(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = L(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                                }
                            }.call(this)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            return function () {
                                return this.state.isDestroyed = !0, H(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[M("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                            }.call(this)
                        }
                    }, {
                        key: "enableEventListeners",
                        value: function () {
                            return function () {
                                this.state.eventsEnabled || (this.state = R(this.reference, this.options, this.state, this.scheduleUpdate))
                            }.call(this)
                        }
                    }, {
                        key: "disableEventListeners",
                        value: function () {
                            return W.call(this)
                        }
                    }]), e
                }();
            G.Utils = ("undefined" != typeof window ? window : e).PopperUtils, G.placements = U, G.Defaults = X, t.default = G
        }.call(t, n(4))
}, function (e, t, n) {
    n(3), e.exports = n(10)
}, function (e, t, n) {
    window.Popper = n(1).default, window.$ = window.jQuery = n(0), window.slick = n(5), n(6), n(7), n(8)
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    var i, o, r;
    ! function (s) {
        "use strict";
        o = [n(0)], void 0 === (r = "function" == typeof (i = s) ? i.apply(t, o) : i) || (e.exports = r)
    }(function (e) {
        "use strict";
        var t = window.Slick || {};
        (t = function () {
            var t = 0;
            return function (n, i) {
                var o, r = this;
                r.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(n),
                    appendDots: e(n),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (t, n) {
                        return e('<button type="button" />').text(n + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, r.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(n), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(n).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = t++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
            }
        }()).prototype.activateADA = function () {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
            var o = this;
            if ("boolean" == typeof n) i = n, n = null;
            else if (n < 0 || n >= o.slideCount) return !1;
            o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (t, n) {
                e(n).attr("data-slick-index", t)
            }), o.$slidesCache = o.$slides, o.reinit()
        }, t.prototype.animateHeight = function () {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, t.prototype.animateSlide = function (t, n) {
            var i = {},
                o = this;
            o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
                left: t
            }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
                top: t
            }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
                animStart: o.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function (e) {
                    e = Math.ceil(e), !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))
                },
                complete: function () {
                    n && n.call()
                }
            })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function () {
                o.disableTransition(), n.call()
            }, o.options.speed))
        }, t.prototype.getNavTarget = function () {
            var t = this.options.asNavFor;
            return t && null !== t && (t = e(t).not(this.$slider)), t
        }, t.prototype.asNavFor = function (t) {
            var n = this.getNavTarget();
            null !== n && "object" == typeof n && n.each(function () {
                var n = e(this).slick("getSlick");
                n.unslicked || n.slideHandler(t, !0)
            })
        }, t.prototype.applyTransition = function (e) {
            var t = this,
                n = {};
            !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.autoPlay = function () {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function () {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function () {
            var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
        }, t.prototype.buildArrows = function () {
            var t = this;
            !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, t.prototype.buildDots = function () {
            var t, n, i = this;
            if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
                for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
                i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
            }
        }, t.prototype.buildOut = function () {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, n) {
                e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
            }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
        }, t.prototype.buildRows = function () {
            var e, t, n, i, o, r, s, a = this;
            if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 0) {
                for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < a.options.rows; t++) {
                        var c = document.createElement("div");
                        for (n = 0; n < a.options.slidesPerRow; n++) {
                            var u = e * s + (t * a.options.slidesPerRow + n);
                            r.get(u) && c.appendChild(r.get(u))
                        }
                        l.appendChild(c)
                    }
                    i.appendChild(l)
                }
                a.$slider.empty().append(i), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, t.prototype.checkResponsive = function (t, n) {
            var i, o, r, s = this,
                a = !1,
                l = s.$slider.width(),
                c = window.innerWidth || e(window).width();
            if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                for (i in o = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
                null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
            }
        }, t.prototype.changeSlide = function (t, n) {
            var i, o, r = this,
                s = e(t.currentTarget);
            switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), i = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
                case "previous":
                    o = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, n);
                    break;
                case "next":
                    o = 0 === i ? r.options.slidesToScroll : i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, n);
                    break;
                case "index":
                    var a = 0 === t.data.index ? 0 : t.data.index || s.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(a), !1, n), s.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function (e) {
            var t, n;
            if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
            else
                for (var i in t) {
                    if (e < t[i]) {
                        e = n;
                        break
                    }
                    n = t[i]
                }
            return e
        }, t.prototype.cleanUpEvents = function () {
            var t = this;
            t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.cleanUpSlideEvents = function () {
            var t = this;
            t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.cleanUpRows = function () {
            var e, t = this;
            t.options.rows > 0 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
        }, t.prototype.clickHandler = function (e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function (t) {
            var n = this;
            n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
                e(this).attr("style", e(this).data("originalStyling"))
            }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
        }, t.prototype.disableTransition = function (e) {
            var t = this,
                n = {};
            n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.fadeSlide = function (e, t) {
            var n = this;
            !1 === n.cssTransitions ? (n.$slides.eq(e).css({
                zIndex: n.options.zIndex
            }), n.$slides.eq(e).animate({
                opacity: 1
            }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
                opacity: 1,
                zIndex: n.options.zIndex
            }), t && setTimeout(function () {
                n.disableTransition(e), t.call()
            }, n.options.speed))
        }, t.prototype.fadeSlideOut = function (e) {
            var t = this;
            !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.focusHandler = function () {
            var t = this;
            t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (n) {
                n.stopImmediatePropagation();
                var i = e(this);
                setTimeout(function () {
                    t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
                }, 0)
            })
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
            return this.currentSlide
        }, t.prototype.getDotCount = function () {
            var e = this,
                t = 0,
                n = 0,
                i = 0;
            if (!0 === e.options.infinite)
                if (e.slideCount <= e.options.slidesToShow) ++i;
                else
                    for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) i = e.slideCount;
            else if (e.options.asNavFor)
                for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return i - 1
        }, t.prototype.getLeft = function (e) {
            var t, n, i, o, r = this,
                s = 0;
            return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s, !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t
        }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
            return this.options[e]
        }, t.prototype.getNavigableIndexes = function () {
            var e, t = this,
                n = 0,
                i = 0,
                o = [];
            for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return o
        }, t.prototype.getSlick = function () {
            return this
        }, t.prototype.getSlideCount = function () {
            var t, n, i = this;
            return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function (o, r) {
                if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft) return t = r, !1
            }), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, t.prototype.init = function (t) {
            var n = this;
            e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
        }, t.prototype.initADA = function () {
            var t = this,
                n = Math.ceil(t.slideCount / t.options.slidesToShow),
                i = t.getNavigableIndexes().filter(function (e) {
                    return e >= 0 && e < t.slideCount
                });
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (n) {
                var o = i.indexOf(n);
                if (e(this).attr({
                        role: "tabpanel",
                        id: "slick-slide" + t.instanceUid + n,
                        tabindex: -1
                    }), -1 !== o) {
                    var r = "slick-slide-control" + t.instanceUid + o;
                    e("#" + r).length && e(this).attr({
                        "aria-describedby": r
                    })
                }
            }), t.$dots.attr("role", "tablist").find("li").each(function (o) {
                var r = i[o];
                e(this).attr({
                    role: "presentation"
                }), e(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + t.instanceUid + o,
                    "aria-controls": "slick-slide" + t.instanceUid + r,
                    "aria-label": o + 1 + " of " + n,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(t.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++) t.options.focusOnChange ? t.$slides.eq(o).attr({
                tabindex: "0"
            }) : t.$slides.eq(o).removeAttr("tabindex");
            t.activateADA()
        }, t.prototype.initArrowEvents = function () {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
        }, t.prototype.initDotEvents = function () {
            var t = this;
            !0 === t.options.dots && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.initSlideEvents = function () {
            var t = this;
            t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
        }, t.prototype.initializeEvents = function () {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
        }, t.prototype.initUI = function () {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, t.prototype.keyHandler = function (e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "next" : "previous"
                }
            }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "previous" : "next"
                }
            }))
        }, t.prototype.lazyLoad = function () {
            var t, n, i, o = this;

            function r(t) {
                e("img[data-lazy]", t).each(function () {
                    var t = e(this),
                        n = e(this).attr("data-lazy"),
                        i = e(this).attr("data-srcset"),
                        r = e(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                        s = document.createElement("img");
                    s.onload = function () {
                        t.animate({
                            opacity: 0
                        }, 100, function () {
                            i && (t.attr("srcset", i), r && t.attr("sizes", r)), t.attr("src", n).animate({
                                opacity: 1
                            }, 200, function () {
                                t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), o.$slider.trigger("lazyLoaded", [o, t, n])
                        })
                    }, s.onerror = function () {
                        t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, t, n])
                    }, s.src = n
                })
            }
            if (!0 === o.options.centerMode ? !0 === o.options.infinite ? i = (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), i = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, i = Math.ceil(n + o.options.slidesToShow), !0 === o.options.fade && (n > 0 && n--, i <= o.slideCount && i++)), t = o.$slider.find(".slick-slide").slice(n, i), "anticipated" === o.options.lazyLoad)
                for (var s = n - 1, a = i, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++) s < 0 && (s = o.slideCount - 1), t = (t = t.add(l.eq(s))).add(l.eq(a)), s--, a++;
            r(t), o.slideCount <= o.options.slidesToShow ? r(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? r(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && r(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
        }, t.prototype.loadSlider = function () {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.slickNext = function () {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.orientationChange = function () {
            this.checkResponsive(), this.setPosition()
        }, t.prototype.pause = t.prototype.slickPause = function () {
            this.autoPlayClear(), this.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function () {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, t.prototype.postSlide = function (t) {
            var n = this;
            n.unslicked || (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()))
        }, t.prototype.prev = t.prototype.slickPrev = function () {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, t.prototype.preventDefault = function (e) {
            e.preventDefault()
        }, t.prototype.progressiveLazyLoad = function (t) {
            t = t || 1;
            var n, i, o, r, s, a = this,
                l = e("img[data-lazy]", a.$slider);
            l.length ? (n = l.first(), i = n.attr("data-lazy"), o = n.attr("data-srcset"), r = n.attr("data-sizes") || a.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function () {
                o && (n.attr("srcset", o), r && n.attr("sizes", r)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad()
            }, s.onerror = function () {
                t < 3 ? setTimeout(function () {
                    a.progressiveLazyLoad(t + 1)
                }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad())
            }, s.src = i) : a.$slider.trigger("allImagesLoaded", [a])
        }, t.prototype.refresh = function (t) {
            var n, i, o = this;
            i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
                currentSlide: n
            }), o.init(), t || o.changeSlide({
                data: {
                    message: "index",
                    index: n
                }
            }, !1)
        }, t.prototype.registerBreakpoints = function () {
            var t, n, i, o = this,
                r = o.options.responsive || null;
            if ("array" === e.type(r) && r.length) {
                for (t in o.respondTo = o.options.respondTo || "window", r)
                    if (i = o.breakpoints.length - 1, r.hasOwnProperty(t)) {
                        for (n = r[t].breakpoint; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                        o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings
                    } o.breakpoints.sort(function (e, t) {
                    return o.options.mobileFirst ? e - t : t - e
                })
            }
        }, t.prototype.reinit = function () {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
        }, t.prototype.resize = function () {
            var t = this;
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
                t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
            }, 50))
        }, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
            var i = this;
            if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
            i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
        }, t.prototype.setCSS = function (e) {
            var t, n, i = this,
                o = {};
            !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
        }, t.prototype.setDimensions = function () {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, t.prototype.setFade = function () {
            var t, n = this;
            n.$slides.each(function (i, o) {
                t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                }) : e(o).css({
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                })
            }), n.$slides.eq(n.currentSlide).css({
                zIndex: n.options.zIndex - 1,
                opacity: 1
            })
        }, t.prototype.setHeight = function () {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setOption = t.prototype.slickSetOption = function () {
            var t, n, i, o, r, s = this,
                a = !1;
            if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[i] = o;
            else if ("multiple" === r) e.each(i, function (e, t) {
                s.options[e] = t
            });
            else if ("responsive" === r)
                for (n in o)
                    if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]];
                    else {
                        for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
                        s.options.responsive.push(o[n])
                    } a && (s.unload(), s.reinit())
        }, t.prototype.setPosition = function () {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function () {
            var e = this,
                t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, t.prototype.setSlideClasses = function (e) {
            var t, n, i, o, r = this;
            if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
                var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
            } else e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
        }, t.prototype.setupInfinite = function () {
            var t, n, i, o = this;
            if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
                for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                for (t = 0; t < i + o.slideCount; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                    e(this).attr("id", "")
                })
            }
        }, t.prototype.interrupt = function (e) {
            e || this.autoPlay(), this.interrupted = e
        }, t.prototype.selectHandler = function (t) {
            var n = this,
                i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                o = parseInt(i.attr("data-slick-index"));
            o || (o = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o)
        }, t.prototype.slideHandler = function (e, t, n) {
            var i, o, r, s, a, l, c = this;
            if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
                if (!1 === t && c.asNavFor(e), i = e, a = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, function () {
                    c.postSlide(i)
                }) : c.postSlide(i));
                else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, function () {
                c.postSlide(i)
            }) : c.postSlide(i));
            else {
                if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(r), c.fadeSlide(o, function () {
                    c.postSlide(o)
                })) : c.postSlide(o), void c.animateHeight();
                !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(a, function () {
                    c.postSlide(o)
                }) : c.postSlide(o)
            }
        }, t.prototype.startLoad = function () {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function () {
            var e, t, n, i, o = this;
            return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? !1 === o.options.rtl ? "left" : "right" : i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
        }, t.prototype.swipeEnd = function (e) {
            var t, n, i = this;
            if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
            if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
            if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
                switch (n = i.swipeDirection()) {
                    case "left":
                    case "down":
                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
                }
                "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
            } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
        }, t.prototype.swipeHandler = function (e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function (e) {
            var t, n, i, o, r, s, a = this;
            return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
        }, t.prototype.swipeStart = function (e) {
            var t, n = this;
            if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function () {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.unslick = function (e) {
            var t = this;
            t.$slider.trigger("unslick", [t, e]), t.destroy()
        }, t.prototype.updateArrows = function () {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, t.prototype.updateDots = function () {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, t.prototype.visibility = function () {
            var e = this;
            e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
        }, e.fn.slick = function () {
            var e, n, i = this,
                o = arguments[0],
                r = Array.prototype.slice.call(arguments, 1),
                s = i.length;
            for (e = 0; e < s; e++)
                if ("object" == typeof o || void 0 === o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), void 0 !== n) return n;
            return i
        }
    })
}, function (e, t, n) {
    (function (e, t, n) {
        "use strict";

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function o(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e
        }

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), i.forEach(function (t) {
                    r(e, t, n[t])
                })
            }
            return e
        }
        t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
        var a = function (e) {
                var t = "transitionend";

                function n(t) {
                    var n = this,
                        o = !1;
                    return e(this).one(i.TRANSITION_END, function () {
                        o = !0
                    }), setTimeout(function () {
                        o || i.triggerTransitionEnd(n)
                    }, t), this
                }
                var i = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function (e) {
                        do {
                            e += ~~(1e6 * Math.random())
                        } while (document.getElementById(e));
                        return e
                    },
                    getSelectorFromElement: function (e) {
                        var t = e.getAttribute("data-target");
                        t && "#" !== t || (t = e.getAttribute("href") || "");
                        try {
                            return document.querySelector(t) ? t : null
                        } catch (e) {
                            return null
                        }
                    },
                    getTransitionDurationFromElement: function (t) {
                        if (!t) return 0;
                        var n = e(t).css("transition-duration");
                        return parseFloat(n) ? (n = n.split(",")[0], 1e3 * parseFloat(n)) : 0
                    },
                    reflow: function (e) {
                        return e.offsetHeight
                    },
                    triggerTransitionEnd: function (n) {
                        e(n).trigger(t)
                    },
                    supportsTransitionEnd: function () {
                        return Boolean(t)
                    },
                    isElement: function (e) {
                        return (e[0] || e).nodeType
                    },
                    typeCheckConfig: function (e, t, n) {
                        for (var o in n)
                            if (Object.prototype.hasOwnProperty.call(n, o)) {
                                var r = n[o],
                                    s = t[o],
                                    a = s && i.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                                if (!new RegExp(r).test(a)) throw new Error(e.toUpperCase() + ': Option "' + o + '" provided type "' + a + '" but expected type "' + r + '".')
                            } var l
                    }
                };
                return e.fn.emulateTransitionEnd = n, e.event.special[i.TRANSITION_END] = {
                    bindType: t,
                    delegateType: t,
                    handle: function (t) {
                        if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                    }
                }, i
            }(t),
            l = function (e) {
                var t = e.fn.alert,
                    n = {
                        CLOSE: "close.bs.alert",
                        CLOSED: "closed.bs.alert",
                        CLICK_DATA_API: "click.bs.alert.data-api"
                    },
                    i = "alert",
                    r = "fade",
                    s = "show",
                    l = function () {
                        function t(e) {
                            this._element = e
                        }
                        var l = t.prototype;
                        return l.close = function (e) {
                            var t = this._element;
                            e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                        }, l.dispose = function () {
                            e.removeData(this._element, "bs.alert"), this._element = null
                        }, l._getRootElement = function (t) {
                            var n = a.getSelectorFromElement(t),
                                o = !1;
                            return n && (o = document.querySelector(n)), o || (o = e(t).closest("." + i)[0]), o
                        }, l._triggerCloseEvent = function (t) {
                            var i = e.Event(n.CLOSE);
                            return e(t).trigger(i), i
                        }, l._removeElement = function (t) {
                            var n = this;
                            if (e(t).removeClass(s), e(t).hasClass(r)) {
                                var i = a.getTransitionDurationFromElement(t);
                                e(t).one(a.TRANSITION_END, function (e) {
                                    return n._destroyElement(t, e)
                                }).emulateTransitionEnd(i)
                            } else this._destroyElement(t)
                        }, l._destroyElement = function (t) {
                            e(t).detach().trigger(n.CLOSED).remove()
                        }, t._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = e(this),
                                    o = i.data("bs.alert");
                                o || (o = new t(this), i.data("bs.alert", o)), "close" === n && o[n](this)
                            })
                        }, t._handleDismiss = function (e) {
                            return function (t) {
                                t && t.preventDefault(), e.close(this)
                            }
                        }, o(t, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.1.2"
                            }
                        }]), t
                    }();
                return e(document).on(n.CLICK_DATA_API, '[data-dismiss="alert"]', l._handleDismiss(new l)), e.fn.alert = l._jQueryInterface, e.fn.alert.Constructor = l, e.fn.alert.noConflict = function () {
                    return e.fn.alert = t, l._jQueryInterface
                }, l
            }(t),
            c = function (e) {
                var t = "button",
                    n = e.fn[t],
                    i = "active",
                    r = "btn",
                    s = "focus",
                    a = '[data-toggle^="button"]',
                    l = '[data-toggle="buttons"]',
                    c = "input",
                    u = ".active",
                    d = ".btn",
                    f = {
                        CLICK_DATA_API: "click.bs.button.data-api",
                        FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
                    },
                    p = function () {
                        function t(e) {
                            this._element = e
                        }
                        var n = t.prototype;
                        return n.toggle = function () {
                            var t = !0,
                                n = !0,
                                o = e(this._element).closest(l)[0];
                            if (o) {
                                var r = this._element.querySelector(c);
                                if (r) {
                                    if ("radio" === r.type)
                                        if (r.checked && this._element.classList.contains(i)) t = !1;
                                        else {
                                            var s = o.querySelector(u);
                                            s && e(s).removeClass(i)
                                        } if (t) {
                                        if (r.hasAttribute("disabled") || o.hasAttribute("disabled") || r.classList.contains("disabled") || o.classList.contains("disabled")) return;
                                        r.checked = !this._element.classList.contains(i), e(r).trigger("change")
                                    }
                                    r.focus(), n = !1
                                }
                            }
                            n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(i)), t && e(this._element).toggleClass(i)
                        }, n.dispose = function () {
                            e.removeData(this._element, "bs.button"), this._element = null
                        }, t._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = e(this).data("bs.button");
                                i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]()
                            })
                        }, o(t, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.1.2"
                            }
                        }]), t
                    }();
                return e(document).on(f.CLICK_DATA_API, a, function (t) {
                    t.preventDefault();
                    var n = t.target;
                    e(n).hasClass(r) || (n = e(n).closest(d)), p._jQueryInterface.call(e(n), "toggle")
                }).on(f.FOCUS_BLUR_DATA_API, a, function (t) {
                    var n = e(t.target).closest(d)[0];
                    e(n).toggleClass(s, /^focus(in)?$/.test(t.type))
                }), e.fn[t] = p._jQueryInterface, e.fn[t].Constructor = p, e.fn[t].noConflict = function () {
                    return e.fn[t] = n, p._jQueryInterface
                }, p
            }(t),
            u = function (e) {
                var t = "carousel",
                    n = "bs.carousel",
                    i = "." + n,
                    r = e.fn[t],
                    l = {
                        interval: 5e3,
                        keyboard: !0,
                        slide: !1,
                        pause: "hover",
                        wrap: !0
                    },
                    c = {
                        interval: "(number|boolean)",
                        keyboard: "boolean",
                        slide: "(boolean|string)",
                        pause: "(string|boolean)",
                        wrap: "boolean"
                    },
                    u = "next",
                    d = "prev",
                    f = "left",
                    p = "right",
                    h = {
                        SLIDE: "slide" + i,
                        SLID: "slid" + i,
                        KEYDOWN: "keydown" + i,
                        MOUSEENTER: "mouseenter" + i,
                        MOUSELEAVE: "mouseleave" + i,
                        TOUCHEND: "touchend" + i,
                        LOAD_DATA_API: "load.bs.carousel.data-api",
                        CLICK_DATA_API: "click.bs.carousel.data-api"
                    },
                    g = "carousel",
                    m = "active",
                    v = "slide",
                    y = "carousel-item-right",
                    b = "carousel-item-left",
                    w = "carousel-item-next",
                    T = "carousel-item-prev",
                    _ = {
                        ACTIVE: ".active",
                        ACTIVE_ITEM: ".active.carousel-item",
                        ITEM: ".carousel-item",
                        NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                        INDICATORS: ".carousel-indicators",
                        DATA_SLIDE: "[data-slide], [data-slide-to]",
                        DATA_RIDE: '[data-ride="carousel"]'
                    },
                    S = function () {
                        function r(t, n) {
                            this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = this._element.querySelector(_.INDICATORS), this._addEventListeners()
                        }
                        var S = r.prototype;
                        return S.next = function () {
                            this._isSliding || this._slide(u)
                        }, S.nextWhenVisible = function () {
                            !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
                        }, S.prev = function () {
                            this._isSliding || this._slide(d)
                        }, S.pause = function (e) {
                            e || (this._isPaused = !0), this._element.querySelector(_.NEXT_PREV) && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                        }, S.cycle = function (e) {
                            e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                        }, S.to = function (t) {
                            var n = this;
                            this._activeElement = this._element.querySelector(_.ACTIVE_ITEM);
                            var i = this._getItemIndex(this._activeElement);
                            if (!(t > this._items.length - 1 || t < 0))
                                if (this._isSliding) e(this._element).one(h.SLID, function () {
                                    return n.to(t)
                                });
                                else {
                                    if (i === t) return this.pause(), void this.cycle();
                                    var o = t > i ? u : d;
                                    this._slide(o, this._items[t])
                                }
                        }, S.dispose = function () {
                            e(this._element).off(i), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                        }, S._getConfig = function (e) {
                            return e = s({}, l, e), a.typeCheckConfig(t, e, c), e
                        }, S._addEventListeners = function () {
                            var t = this;
                            this._config.keyboard && e(this._element).on(h.KEYDOWN, function (e) {
                                return t._keydown(e)
                            }), "hover" === this._config.pause && (e(this._element).on(h.MOUSEENTER, function (e) {
                                return t.pause(e)
                            }).on(h.MOUSELEAVE, function (e) {
                                return t.cycle(e)
                            }), "ontouchstart" in document.documentElement && e(this._element).on(h.TOUCHEND, function () {
                                t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                                    return t.cycle(e)
                                }, 500 + t._config.interval)
                            }))
                        }, S._keydown = function (e) {
                            if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                                case 37:
                                    e.preventDefault(), this.prev();
                                    break;
                                case 39:
                                    e.preventDefault(), this.next()
                            }
                        }, S._getItemIndex = function (e) {
                            return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(_.ITEM)) : [], this._items.indexOf(e)
                        }, S._getItemByDirection = function (e, t) {
                            var n = e === u,
                                i = e === d,
                                o = this._getItemIndex(t),
                                r = this._items.length - 1;
                            if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;
                            var s = (o + (e === d ? -1 : 1)) % this._items.length;
                            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                        }, S._triggerSlideEvent = function (t, n) {
                            var i = this._getItemIndex(t),
                                o = this._getItemIndex(this._element.querySelector(_.ACTIVE_ITEM)),
                                r = e.Event(h.SLIDE, {
                                    relatedTarget: t,
                                    direction: n,
                                    from: o,
                                    to: i
                                });
                            return e(this._element).trigger(r), r
                        }, S._setActiveIndicatorElement = function (t) {
                            if (this._indicatorsElement) {
                                var n = [].slice.call(this._indicatorsElement.querySelectorAll(_.ACTIVE));
                                e(n).removeClass(m);
                                var i = this._indicatorsElement.children[this._getItemIndex(t)];
                                i && e(i).addClass(m)
                            }
                        }, S._slide = function (t, n) {
                            var i, o, r, s = this,
                                l = this._element.querySelector(_.ACTIVE_ITEM),
                                c = this._getItemIndex(l),
                                d = n || l && this._getItemByDirection(t, l),
                                g = this._getItemIndex(d),
                                S = Boolean(this._interval);
                            if (t === u ? (i = b, o = w, r = f) : (i = y, o = T, r = p), d && e(d).hasClass(m)) this._isSliding = !1;
                            else if (!this._triggerSlideEvent(d, r).isDefaultPrevented() && l && d) {
                                this._isSliding = !0, S && this.pause(), this._setActiveIndicatorElement(d);
                                var C = e.Event(h.SLID, {
                                    relatedTarget: d,
                                    direction: r,
                                    from: c,
                                    to: g
                                });
                                if (e(this._element).hasClass(v)) {
                                    e(d).addClass(o), a.reflow(d), e(l).addClass(i), e(d).addClass(i);
                                    var x = a.getTransitionDurationFromElement(l);
                                    e(l).one(a.TRANSITION_END, function () {
                                        e(d).removeClass(i + " " + o).addClass(m), e(l).removeClass(m + " " + o + " " + i), s._isSliding = !1, setTimeout(function () {
                                            return e(s._element).trigger(C)
                                        }, 0)
                                    }).emulateTransitionEnd(x)
                                } else e(l).removeClass(m), e(d).addClass(m), this._isSliding = !1, e(this._element).trigger(C);
                                S && this.cycle()
                            }
                        }, r._jQueryInterface = function (t) {
                            return this.each(function () {
                                var i = e(this).data(n),
                                    o = s({}, l, e(this).data());
                                "object" == typeof t && (o = s({}, o, t));
                                var a = "string" == typeof t ? t : o.slide;
                                if (i || (i = new r(this, o), e(this).data(n, i)), "number" == typeof t) i.to(t);
                                else if ("string" == typeof a) {
                                    if (void 0 === i[a]) throw new TypeError('No method named "' + a + '"');
                                    i[a]()
                                } else o.interval && (i.pause(), i.cycle())
                            })
                        }, r._dataApiClickHandler = function (t) {
                            var i = a.getSelectorFromElement(this);
                            if (i) {
                                var o = e(i)[0];
                                if (o && e(o).hasClass(g)) {
                                    var l = s({}, e(o).data(), e(this).data()),
                                        c = this.getAttribute("data-slide-to");
                                    c && (l.interval = !1), r._jQueryInterface.call(e(o), l), c && e(o).data(n).to(c), t.preventDefault()
                                }
                            }
                        }, o(r, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.1.2"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return l
                            }
                        }]), r
                    }();
                return e(document).on(h.CLICK_DATA_API, _.DATA_SLIDE, S._dataApiClickHandler), e(window).on(h.LOAD_DATA_API, function () {
                    for (var t = [].slice.call(document.querySelectorAll(_.DATA_RIDE)), n = 0, i = t.length; n < i; n++) {
                        var o = e(t[n]);
                        S._jQueryInterface.call(o, o.data())
                    }
                }), e.fn[t] = S._jQueryInterface, e.fn[t].Constructor = S, e.fn[t].noConflict = function () {
                    return e.fn[t] = r, S._jQueryInterface
                }, S
            }(t),
            d = function (e) {
                var t = "collapse",
                    n = "bs.collapse",
                    i = e.fn[t],
                    r = {
                        toggle: !0,
                        parent: ""
                    },
                    l = {
                        toggle: "boolean",
                        parent: "(string|element)"
                    },
                    c = {
                        SHOW: "show.bs.collapse",
                        SHOWN: "shown.bs.collapse",
                        HIDE: "hide.bs.collapse",
                        HIDDEN: "hidden.bs.collapse",
                        CLICK_DATA_API: "click.bs.collapse.data-api"
                    },
                    u = "show",
                    d = "collapse",
                    f = "collapsing",
                    p = "collapsed",
                    h = "width",
                    g = "height",
                    m = {
                        ACTIVES: ".show, .collapsing",
                        DATA_TOGGLE: '[data-toggle="collapse"]'
                    },
                    v = function () {
                        function i(t, n) {
                            this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                            for (var i = [].slice.call(document.querySelectorAll(m.DATA_TOGGLE)), o = 0, r = i.length; o < r; o++) {
                                var s = i[o],
                                    l = a.getSelectorFromElement(s),
                                    c = [].slice.call(document.querySelectorAll(l)).filter(function (e) {
                                        return e === t
                                    });
                                null !== l && c.length > 0 && (this._selector = l, this._triggerArray.push(s))
                            }
                            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                        }
                        var v = i.prototype;
                        return v.toggle = function () {
                            e(this._element).hasClass(u) ? this.hide() : this.show()
                        }, v.show = function () {
                            var t, o, r = this;
                            if (!this._isTransitioning && !e(this._element).hasClass(u) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(m.ACTIVES)).filter(function (e) {
                                    return e.getAttribute("data-parent") === r._config.parent
                                })).length && (t = null), !(t && (o = e(t).not(this._selector).data(n)) && o._isTransitioning))) {
                                var s = e.Event(c.SHOW);
                                if (e(this._element).trigger(s), !s.isDefaultPrevented()) {
                                    t && (i._jQueryInterface.call(e(t).not(this._selector), "hide"), o || e(t).data(n, null));
                                    var l = this._getDimension();
                                    e(this._element).removeClass(d).addClass(f), this._element.style[l] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(p).attr("aria-expanded", !0), this.setTransitioning(!0);
                                    var h = "scroll" + (l[0].toUpperCase() + l.slice(1)),
                                        g = a.getTransitionDurationFromElement(this._element);
                                    e(this._element).one(a.TRANSITION_END, function () {
                                        e(r._element).removeClass(f).addClass(d).addClass(u), r._element.style[l] = "", r.setTransitioning(!1), e(r._element).trigger(c.SHOWN)
                                    }).emulateTransitionEnd(g), this._element.style[l] = this._element[h] + "px"
                                }
                            }
                        }, v.hide = function () {
                            var t = this;
                            if (!this._isTransitioning && e(this._element).hasClass(u)) {
                                var n = e.Event(c.HIDE);
                                if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                                    var i = this._getDimension();
                                    this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", a.reflow(this._element), e(this._element).addClass(f).removeClass(d).removeClass(u);
                                    var o = this._triggerArray.length;
                                    if (o > 0)
                                        for (var r = 0; r < o; r++) {
                                            var s = this._triggerArray[r],
                                                l = a.getSelectorFromElement(s);
                                            if (null !== l) e([].slice.call(document.querySelectorAll(l))).hasClass(u) || e(s).addClass(p).attr("aria-expanded", !1)
                                        }
                                    this.setTransitioning(!0);
                                    this._element.style[i] = "";
                                    var h = a.getTransitionDurationFromElement(this._element);
                                    e(this._element).one(a.TRANSITION_END, function () {
                                        t.setTransitioning(!1), e(t._element).removeClass(f).addClass(d).trigger(c.HIDDEN)
                                    }).emulateTransitionEnd(h)
                                }
                            }
                        }, v.setTransitioning = function (e) {
                            this._isTransitioning = e
                        }, v.dispose = function () {
                            e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                        }, v._getConfig = function (e) {
                            return (e = s({}, r, e)).toggle = Boolean(e.toggle), a.typeCheckConfig(t, e, l), e
                        }, v._getDimension = function () {
                            return e(this._element).hasClass(h) ? h : g
                        }, v._getParent = function () {
                            var t = this,
                                n = null;
                            a.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                            var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                                r = [].slice.call(n.querySelectorAll(o));
                            return e(r).each(function (e, n) {
                                t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                            }), n
                        }, v._addAriaAndCollapsedClass = function (t, n) {
                            if (t) {
                                var i = e(t).hasClass(u);
                                n.length && e(n).toggleClass(p, !i).attr("aria-expanded", i)
                            }
                        }, i._getTargetFromElement = function (e) {
                            var t = a.getSelectorFromElement(e);
                            return t ? document.querySelector(t) : null
                        }, i._jQueryInterface = function (t) {
                            return this.each(function () {
                                var o = e(this),
                                    a = o.data(n),
                                    l = s({}, r, o.data(), "object" == typeof t && t ? t : {});
                                if (!a && l.toggle && /show|hide/.test(t) && (l.toggle = !1), a || (a = new i(this, l), o.data(n, a)), "string" == typeof t) {
                                    if (void 0 === a[t]) throw new TypeError('No method named "' + t + '"');
                                    a[t]()
                                }
                            })
                        }, o(i, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.1.2"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return r
                            }
                        }]), i
                    }();
                return e(document).on(c.CLICK_DATA_API, m.DATA_TOGGLE, function (t) {
                    "A" === t.currentTarget.tagName && t.preventDefault();
                    var i = e(this),
                        o = a.getSelectorFromElement(this),
                        r = [].slice.call(document.querySelectorAll(o));
                    e(r).each(function () {
                        var t = e(this),
                            o = t.data(n) ? "toggle" : i.data();
                        v._jQueryInterface.call(t, o)
                    })
                }), e.fn[t] = v._jQueryInterface, e.fn[t].Constructor = v, e.fn[t].noConflict = function () {
                    return e.fn[t] = i, v._jQueryInterface
                }, v
            }(t),
            f = function (e) {
                var t = "dropdown",
                    i = "bs.dropdown",
                    r = "." + i,
                    l = e.fn[t],
                    c = new RegExp("38|40|27"),
                    u = {
                        HIDE: "hide" + r,
                        HIDDEN: "hidden" + r,
                        SHOW: "show" + r,
                        SHOWN: "shown" + r,
                        CLICK: "click" + r,
                        CLICK_DATA_API: "click.bs.dropdown.data-api",
                        KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
                        KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
                    },
                    d = "disabled",
                    f = "show",
                    p = "dropup",
                    h = "dropright",
                    g = "dropleft",
                    m = "dropdown-menu-right",
                    v = "position-static",
                    y = '[data-toggle="dropdown"]',
                    b = ".dropdown form",
                    w = ".dropdown-menu",
                    T = ".navbar-nav",
                    _ = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                    S = "top-start",
                    C = "top-end",
                    x = "bottom-start",
                    k = "bottom-end",
                    E = "right-start",
                    A = "left-start",
                    D = {
                        offset: 0,
                        flip: !0,
                        boundary: "scrollParent",
                        reference: "toggle",
                        display: "dynamic"
                    },
                    O = {
                        offset: "(number|string|function)",
                        flip: "boolean",
                        boundary: "(string|element)",
                        reference: "(string|element)",
                        display: "string"
                    },
                    N = function () {
                        function l(e, t) {
                            this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                        }
                        var b = l.prototype;
                        return b.toggle = function () {
                            if (!this._element.disabled && !e(this._element).hasClass(d)) {
                                var t = l._getParentFromElement(this._element),
                                    i = e(this._menu).hasClass(f);
                                if (l._clearMenus(), !i) {
                                    var o = {
                                            relatedTarget: this._element
                                        },
                                        r = e.Event(u.SHOW, o);
                                    if (e(t).trigger(r), !r.isDefaultPrevented()) {
                                        if (!this._inNavbar) {
                                            if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                            var s = this._element;
                                            "parent" === this._config.reference ? s = t : a.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(t).addClass(v), this._popper = new n(s, this._menu, this._getPopperConfig())
                                        }
                                        "ontouchstart" in document.documentElement && 0 === e(t).closest(T).length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(f), e(t).toggleClass(f).trigger(e.Event(u.SHOWN, o))
                                    }
                                }
                            }
                        }, b.dispose = function () {
                            e.removeData(this._element, i), e(this._element).off(r), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                        }, b.update = function () {
                            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                        }, b._addEventListeners = function () {
                            var t = this;
                            e(this._element).on(u.CLICK, function (e) {
                                e.preventDefault(), e.stopPropagation(), t.toggle()
                            })
                        }, b._getConfig = function (n) {
                            return n = s({}, this.constructor.Default, e(this._element).data(), n), a.typeCheckConfig(t, n, this.constructor.DefaultType), n
                        }, b._getMenuElement = function () {
                            if (!this._menu) {
                                var e = l._getParentFromElement(this._element);
                                e && (this._menu = e.querySelector(w))
                            }
                            return this._menu
                        }, b._getPlacement = function () {
                            var t = e(this._element.parentNode),
                                n = x;
                            return t.hasClass(p) ? (n = S, e(this._menu).hasClass(m) && (n = C)) : t.hasClass(h) ? n = E : t.hasClass(g) ? n = A : e(this._menu).hasClass(m) && (n = k), n
                        }, b._detectNavbar = function () {
                            return e(this._element).closest(".navbar").length > 0
                        }, b._getPopperConfig = function () {
                            var e = this,
                                t = {};
                            "function" == typeof this._config.offset ? t.fn = function (t) {
                                return t.offsets = s({}, t.offsets, e._config.offset(t.offsets) || {}), t
                            } : t.offset = this._config.offset;
                            var n = {
                                placement: this._getPlacement(),
                                modifiers: {
                                    offset: t,
                                    flip: {
                                        enabled: this._config.flip
                                    },
                                    preventOverflow: {
                                        boundariesElement: this._config.boundary
                                    }
                                }
                            };
                            return "static" === this._config.display && (n.modifiers.applyStyle = {
                                enabled: !1
                            }), n
                        }, l._jQueryInterface = function (t) {
                            return this.each(function () {
                                var n = e(this).data(i);
                                if (n || (n = new l(this, "object" == typeof t ? t : null), e(this).data(i, n)), "string" == typeof t) {
                                    if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                    n[t]()
                                }
                            })
                        }, l._clearMenus = function (t) {
                            if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                                for (var n = [].slice.call(document.querySelectorAll(y)), o = 0, r = n.length; o < r; o++) {
                                    var s = l._getParentFromElement(n[o]),
                                        a = e(n[o]).data(i),
                                        c = {
                                            relatedTarget: n[o]
                                        };
                                    if (t && "click" === t.type && (c.clickEvent = t), a) {
                                        var d = a._menu;
                                        if (e(s).hasClass(f) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(s, t.target))) {
                                            var p = e.Event(u.HIDE, c);
                                            e(s).trigger(p), p.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), n[o].setAttribute("aria-expanded", "false"), e(d).removeClass(f), e(s).removeClass(f).trigger(e.Event(u.HIDDEN, c)))
                                        }
                                    }
                                }
                        }, l._getParentFromElement = function (e) {
                            var t, n = a.getSelectorFromElement(e);
                            return n && (t = document.querySelector(n)), t || e.parentNode
                        }, l._dataApiKeydownHandler = function (t) {
                            if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(w).length)) : c.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(d))) {
                                var n = l._getParentFromElement(this),
                                    i = e(n).hasClass(f);
                                if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
                                    var o = [].slice.call(n.querySelectorAll(_));
                                    if (0 !== o.length) {
                                        var r = o.indexOf(t.target);
                                        38 === t.which && r > 0 && r--, 40 === t.which && r < o.length - 1 && r++, r < 0 && (r = 0), o[r].focus()
                                    }
                                } else {
                                    if (27 === t.which) {
                                        var s = n.querySelector(y);
                                        e(s).trigger("focus")
                                    }
                                    e(this).trigger("click")
                                }
                            }
                        }, o(l, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.1.2"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return D
                            }
                        }, {
                            key: "DefaultType",
                            get: function () {
                                return O
                            }
                        }]), l
                    }();
                return e(document).on(u.KEYDOWN_DATA_API, y, N._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API, w, N._dataApiKeydownHandler).on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, N._clearMenus).on(u.CLICK_DATA_API, y, function (t) {
                    t.preventDefault(), t.stopPropagation(), N._jQueryInterface.call(e(this), "toggle")
                }).on(u.CLICK_DATA_API, b, function (e) {
                    e.stopPropagation()
                }), e.fn[t] = N._jQueryInterface, e.fn[t].Constructor = N, e.fn[t].noConflict = function () {
                    return e.fn[t] = l, N._jQueryInterface
                }, N
            }(t),
            p = function (e) {
                var t = "modal",
                    n = ".bs.modal",
                    i = e.fn.modal,
                    r = {
                        backdrop: !0,
                        keyboard: !0,
                        focus: !0,
                        show: !0
                    },
                    l = {
                        backdrop: "(boolean|string)",
                        keyboard: "boolean",
                        focus: "boolean",
                        show: "boolean"
                    },
                    c = {
                        HIDE: "hide.bs.modal",
                        HIDDEN: "hidden.bs.modal",
                        SHOW: "show.bs.modal",
                        SHOWN: "shown.bs.modal",
                        FOCUSIN: "focusin.bs.modal",
                        RESIZE: "resize.bs.modal",
                        CLICK_DISMISS: "click.dismiss.bs.modal",
                        KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
                        MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
                        MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
                        CLICK_DATA_API: "click.bs.modal.data-api"
                    },
                    u = "modal-scrollbar-measure",
                    d = "modal-backdrop",
                    f = "modal-open",
                    p = "fade",
                    h = "show",
                    g = {
                        DIALOG: ".modal-dialog",
                        DATA_TOGGLE: '[data-toggle="modal"]',
                        DATA_DISMISS: '[data-dismiss="modal"]',
                        FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                        STICKY_CONTENT: ".sticky-top"
                    },
                    m = function () {
                        function i(e, t) {
                            this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(g.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
                        }
                        var m = i.prototype;
                        return m.toggle = function (e) {
                            return this._isShown ? this.hide() : this.show(e)
                        }, m.show = function (t) {
                            var n = this;
                            if (!this._isTransitioning && !this._isShown) {
                                e(this._element).hasClass(p) && (this._isTransitioning = !0);
                                var i = e.Event(c.SHOW, {
                                    relatedTarget: t
                                });
                                e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(f), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(c.CLICK_DISMISS, g.DATA_DISMISS, function (e) {
                                    return n.hide(e)
                                }), e(this._dialog).on(c.MOUSEDOWN_DISMISS, function () {
                                    e(n._element).one(c.MOUSEUP_DISMISS, function (t) {
                                        e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                    })
                                }), this._showBackdrop(function () {
                                    return n._showElement(t)
                                }))
                            }
                        }, m.hide = function (t) {
                            var n = this;
                            if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                                var i = e.Event(c.HIDE);
                                if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                                    this._isShown = !1;
                                    var o = e(this._element).hasClass(p);
                                    if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(c.FOCUSIN), e(this._element).removeClass(h), e(this._element).off(c.CLICK_DISMISS), e(this._dialog).off(c.MOUSEDOWN_DISMISS), o) {
                                        var r = a.getTransitionDurationFromElement(this._element);
                                        e(this._element).one(a.TRANSITION_END, function (e) {
                                            return n._hideModal(e)
                                        }).emulateTransitionEnd(r)
                                    } else this._hideModal()
                                }
                            }
                        }, m.dispose = function () {
                            e.removeData(this._element, "bs.modal"), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                        }, m.handleUpdate = function () {
                            this._adjustDialog()
                        }, m._getConfig = function (e) {
                            return e = s({}, r, e), a.typeCheckConfig(t, e, l), e
                        }, m._showElement = function (t) {
                            var n = this,
                                i = e(this._element).hasClass(p);
                            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && a.reflow(this._element), e(this._element).addClass(h), this._config.focus && this._enforceFocus();
                            var o = e.Event(c.SHOWN, {
                                    relatedTarget: t
                                }),
                                r = function () {
                                    n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(o)
                                };
                            if (i) {
                                var s = a.getTransitionDurationFromElement(this._element);
                                e(this._dialog).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
                            } else r()
                        }, m._enforceFocus = function () {
                            var t = this;
                            e(document).off(c.FOCUSIN).on(c.FOCUSIN, function (n) {
                                document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
                            })
                        }, m._setEscapeEvent = function () {
                            var t = this;
                            this._isShown && this._config.keyboard ? e(this._element).on(c.KEYDOWN_DISMISS, function (e) {
                                27 === e.which && (e.preventDefault(), t.hide())
                            }) : this._isShown || e(this._element).off(c.KEYDOWN_DISMISS)
                        }, m._setResizeEvent = function () {
                            var t = this;
                            this._isShown ? e(window).on(c.RESIZE, function (e) {
                                return t.handleUpdate(e)
                            }) : e(window).off(c.RESIZE)
                        }, m._hideModal = function () {
                            var t = this;
                            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                                e(document.body).removeClass(f), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(c.HIDDEN)
                            })
                        }, m._removeBackdrop = function () {
                            this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                        }, m._showBackdrop = function (t) {
                            var n = this,
                                i = e(this._element).hasClass(p) ? p : "";
                            if (this._isShown && this._config.backdrop) {
                                if (this._backdrop = document.createElement("div"), this._backdrop.className = d, i && this._backdrop.classList.add(i), e(this._backdrop).appendTo(document.body), e(this._element).on(c.CLICK_DISMISS, function (e) {
                                        n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                                    }), i && a.reflow(this._backdrop), e(this._backdrop).addClass(h), !t) return;
                                if (!i) return void t();
                                var o = a.getTransitionDurationFromElement(this._backdrop);
                                e(this._backdrop).one(a.TRANSITION_END, t).emulateTransitionEnd(o)
                            } else if (!this._isShown && this._backdrop) {
                                e(this._backdrop).removeClass(h);
                                var r = function () {
                                    n._removeBackdrop(), t && t()
                                };
                                if (e(this._element).hasClass(p)) {
                                    var s = a.getTransitionDurationFromElement(this._backdrop);
                                    e(this._backdrop).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
                                } else r()
                            } else t && t()
                        }, m._adjustDialog = function () {
                            var e = this._element.scrollHeight > document.documentElement.clientHeight;
                            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                        }, m._resetAdjustments = function () {
                            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                        }, m._checkScrollbar = function () {
                            var e = document.body.getBoundingClientRect();
                            this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                        }, m._setScrollbar = function () {
                            var t = this;
                            if (this._isBodyOverflowing) {
                                var n = [].slice.call(document.querySelectorAll(g.FIXED_CONTENT)),
                                    i = [].slice.call(document.querySelectorAll(g.STICKY_CONTENT));
                                e(n).each(function (n, i) {
                                    var o = i.style.paddingRight,
                                        r = e(i).css("padding-right");
                                    e(i).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px")
                                }), e(i).each(function (n, i) {
                                    var o = i.style.marginRight,
                                        r = e(i).css("margin-right");
                                    e(i).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px")
                                });
                                var o = document.body.style.paddingRight,
                                    r = e(document.body).css("padding-right");
                                e(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                            }
                        }, m._resetScrollbar = function () {
                            var t = [].slice.call(document.querySelectorAll(g.FIXED_CONTENT));
                            e(t).each(function (t, n) {
                                var i = e(n).data("padding-right");
                                e(n).removeData("padding-right"), n.style.paddingRight = i || ""
                            });
                            var n = [].slice.call(document.querySelectorAll("" + g.STICKY_CONTENT));
                            e(n).each(function (t, n) {
                                var i = e(n).data("margin-right");
                                void 0 !== i && e(n).css("margin-right", i).removeData("margin-right")
                            });
                            var i = e(document.body).data("padding-right");
                            e(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
                        }, m._getScrollbarWidth = function () {
                            var e = document.createElement("div");
                            e.className = u, document.body.appendChild(e);
                            var t = e.getBoundingClientRect().width - e.clientWidth;
                            return document.body.removeChild(e), t
                        }, i._jQueryInterface = function (t, n) {
                            return this.each(function () {
                                var o = e(this).data("bs.modal"),
                                    a = s({}, r, e(this).data(), "object" == typeof t && t ? t : {});
                                if (o || (o = new i(this, a), e(this).data("bs.modal", o)), "string" == typeof t) {
                                    if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
                                    o[t](n)
                                } else a.show && o.show(n)
                            })
                        }, o(i, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.1.2"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return r
                            }
                        }]), i
                    }();
                return e(document).on(c.CLICK_DATA_API, g.DATA_TOGGLE, function (t) {
                    var n, i = this,
                        o = a.getSelectorFromElement(this);
                    o && (n = document.querySelector(o));
                    var r = e(n).data("bs.modal") ? "toggle" : s({}, e(n).data(), e(this).data());
                    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
                    var l = e(n).one(c.SHOW, function (t) {
                        t.isDefaultPrevented() || l.one(c.HIDDEN, function () {
                            e(i).is(":visible") && i.focus()
                        })
                    });
                    m._jQueryInterface.call(e(n), r, this)
                }), e.fn.modal = m._jQueryInterface, e.fn.modal.Constructor = m, e.fn.modal.noConflict = function () {
                    return e.fn.modal = i, m._jQueryInterface
                }, m
            }(t),
            h = function (e) {
                var t = "tooltip",
                    i = ".bs.tooltip",
                    r = e.fn[t],
                    l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                    c = {
                        animation: "boolean",
                        template: "string",
                        title: "(string|element|function)",
                        trigger: "string",
                        delay: "(number|object)",
                        html: "boolean",
                        selector: "(string|boolean)",
                        placement: "(string|function)",
                        offset: "(number|string)",
                        container: "(string|element|boolean)",
                        fallbackPlacement: "(string|array)",
                        boundary: "(string|element)"
                    },
                    u = {
                        AUTO: "auto",
                        TOP: "top",
                        RIGHT: "right",
                        BOTTOM: "bottom",
                        LEFT: "left"
                    },
                    d = {
                        animation: !0,
                        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                        trigger: "hover focus",
                        title: "",
                        delay: 0,
                        html: !1,
                        selector: !1,
                        placement: "top",
                        offset: 0,
                        container: !1,
                        fallbackPlacement: "flip",
                        boundary: "scrollParent"
                    },
                    f = "show",
                    p = "out",
                    h = {
                        HIDE: "hide" + i,
                        HIDDEN: "hidden" + i,
                        SHOW: "show" + i,
                        SHOWN: "shown" + i,
                        INSERTED: "inserted" + i,
                        CLICK: "click" + i,
                        FOCUSIN: "focusin" + i,
                        FOCUSOUT: "focusout" + i,
                        MOUSEENTER: "mouseenter" + i,
                        MOUSELEAVE: "mouseleave" + i
                    },
                    g = "fade",
                    m = "show",
                    v = ".tooltip-inner",
                    y = ".arrow",
                    b = "hover",
                    w = "focus",
                    T = "click",
                    _ = "manual",
                    S = function () {
                        function r(e, t) {
                            if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                            this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                        }
                        var S = r.prototype;
                        return S.enable = function () {
                            this._isEnabled = !0
                        }, S.disable = function () {
                            this._isEnabled = !1
                        }, S.toggleEnabled = function () {
                            this._isEnabled = !this._isEnabled
                        }, S.toggle = function (t) {
                            if (this._isEnabled)
                                if (t) {
                                    var n = this.constructor.DATA_KEY,
                                        i = e(t.currentTarget).data(n);
                                    i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                                } else {
                                    if (e(this.getTipElement()).hasClass(m)) return void this._leave(null, this);
                                    this._enter(null, this)
                                }
                        }, S.dispose = function () {
                            clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                        }, S.show = function () {
                            var t = this;
                            if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                            var i = e.Event(this.constructor.Event.SHOW);
                            if (this.isWithContent() && this._isEnabled) {
                                e(this.element).trigger(i);
                                var o = e.contains(this.element.ownerDocument.documentElement, this.element);
                                if (i.isDefaultPrevented() || !o) return;
                                var r = this.getTipElement(),
                                    s = a.getUID(this.constructor.NAME);
                                r.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && e(r).addClass(g);
                                var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                                    c = this._getAttachment(l);
                                this.addAttachmentClass(c);
                                var u = !1 === this.config.container ? document.body : e(document).find(this.config.container);
                                e(r).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(r).appendTo(u), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, {
                                    placement: c,
                                    modifiers: {
                                        offset: {
                                            offset: this.config.offset
                                        },
                                        flip: {
                                            behavior: this.config.fallbackPlacement
                                        },
                                        arrow: {
                                            element: y
                                        },
                                        preventOverflow: {
                                            boundariesElement: this.config.boundary
                                        }
                                    },
                                    onCreate: function (e) {
                                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                                    },
                                    onUpdate: function (e) {
                                        t._handlePopperPlacementChange(e)
                                    }
                                }), e(r).addClass(m), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                                var d = function () {
                                    t.config.animation && t._fixTransition();
                                    var n = t._hoverState;
                                    t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === p && t._leave(null, t)
                                };
                                if (e(this.tip).hasClass(g)) {
                                    var f = a.getTransitionDurationFromElement(this.tip);
                                    e(this.tip).one(a.TRANSITION_END, d).emulateTransitionEnd(f)
                                } else d()
                            }
                        }, S.hide = function (t) {
                            var n = this,
                                i = this.getTipElement(),
                                o = e.Event(this.constructor.Event.HIDE),
                                r = function () {
                                    n._hoverState !== f && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
                                };
                            if (e(this.element).trigger(o), !o.isDefaultPrevented()) {
                                if (e(i).removeClass(m), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger[T] = !1, this._activeTrigger[w] = !1, this._activeTrigger[b] = !1, e(this.tip).hasClass(g)) {
                                    var s = a.getTransitionDurationFromElement(i);
                                    e(i).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
                                } else r();
                                this._hoverState = ""
                            }
                        }, S.update = function () {
                            null !== this._popper && this._popper.scheduleUpdate()
                        }, S.isWithContent = function () {
                            return Boolean(this.getTitle())
                        }, S.addAttachmentClass = function (t) {
                            e(this.getTipElement()).addClass("bs-tooltip-" + t)
                        }, S.getTipElement = function () {
                            return this.tip = this.tip || e(this.config.template)[0], this.tip
                        }, S.setContent = function () {
                            var t = this.getTipElement();
                            this.setElementContent(e(t.querySelectorAll(v)), this.getTitle()), e(t).removeClass(g + " " + m)
                        }, S.setElementContent = function (t, n) {
                            var i = this.config.html;
                            "object" == typeof n && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n)
                        }, S.getTitle = function () {
                            var e = this.element.getAttribute("data-original-title");
                            return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                        }, S._getAttachment = function (e) {
                            return u[e.toUpperCase()]
                        }, S._setListeners = function () {
                            var t = this;
                            this.config.trigger.split(" ").forEach(function (n) {
                                if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                                    return t.toggle(e)
                                });
                                else if (n !== _) {
                                    var i = n === b ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                        o = n === b ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                    e(t.element).on(i, t.config.selector, function (e) {
                                        return t._enter(e)
                                    }).on(o, t.config.selector, function (e) {
                                        return t._leave(e)
                                    })
                                }
                                e(t.element).closest(".modal").on("hide.bs.modal", function () {
                                    return t.hide()
                                })
                            }), this.config.selector ? this.config = s({}, this.config, {
                                trigger: "manual",
                                selector: ""
                            }) : this._fixTitle()
                        }, S._fixTitle = function () {
                            var e = typeof this.element.getAttribute("data-original-title");
                            (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                        }, S._enter = function (t, n) {
                            var i = this.constructor.DATA_KEY;
                            (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? w : b] = !0), e(n.getTipElement()).hasClass(m) || n._hoverState === f ? n._hoverState = f : (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                                n._hoverState === f && n.show()
                            }, n.config.delay.show) : n.show())
                        }, S._leave = function (t, n) {
                            var i = this.constructor.DATA_KEY;
                            (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? w : b] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = p, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                                n._hoverState === p && n.hide()
                            }, n.config.delay.hide) : n.hide())
                        }, S._isWithActiveTrigger = function () {
                            for (var e in this._activeTrigger)
                                if (this._activeTrigger[e]) return !0;
                            return !1
                        }, S._getConfig = function (n) {
                            return "number" == typeof (n = s({}, this.constructor.Default, e(this.element).data(), "object" == typeof n && n ? n : {})).delay && (n.delay = {
                                show: n.delay,
                                hide: n.delay
                            }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), a.typeCheckConfig(t, n, this.constructor.DefaultType), n
                        }, S._getDelegateConfig = function () {
                            var e = {};
                            if (this.config)
                                for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                            return e
                        }, S._cleanTipClass = function () {
                            var t = e(this.getTipElement()),
                                n = t.attr("class").match(l);
                            null !== n && n.length && t.removeClass(n.join(""))
                        }, S._handlePopperPlacementChange = function (e) {
                            var t = e.instance;
                            this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                        }, S._fixTransition = function () {
                            var t = this.getTipElement(),
                                n = this.config.animation;
                            null === t.getAttribute("x-placement") && (e(t).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                        }, r._jQueryInterface = function (t) {
                            return this.each(function () {
                                var n = e(this).data("bs.tooltip"),
                                    i = "object" == typeof t && t;
                                if ((n || !/dispose|hide/.test(t)) && (n || (n = new r(this, i), e(this).data("bs.tooltip", n)), "string" == typeof t)) {
                                    if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                    n[t]()
                                }
                            })
                        }, o(r, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.1.2"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return d
                            }
                        }, {
                            key: "NAME",
                            get: function () {
                                return t
                            }
                        }, {
                            key: "DATA_KEY",
                            get: function () {
                                return "bs.tooltip"
                            }
                        }, {
                            key: "Event",
                            get: function () {
                                return h
                            }
                        }, {
                            key: "EVENT_KEY",
                            get: function () {
                                return i
                            }
                        }, {
                            key: "DefaultType",
                            get: function () {
                                return c
                            }
                        }]), r
                    }();
                return e.fn[t] = S._jQueryInterface, e.fn[t].Constructor = S, e.fn[t].noConflict = function () {
                    return e.fn[t] = r, S._jQueryInterface
                }, S
            }(t),
            g = function (e) {
                var t = "popover",
                    n = ".bs.popover",
                    i = e.fn[t],
                    r = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                    a = s({}, h.Default, {
                        placement: "right",
                        trigger: "click",
                        content: "",
                        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                    }),
                    l = s({}, h.DefaultType, {
                        content: "(string|element|function)"
                    }),
                    c = "fade",
                    u = "show",
                    d = ".popover-header",
                    f = ".popover-body",
                    p = {
                        HIDE: "hide" + n,
                        HIDDEN: "hidden" + n,
                        SHOW: "show" + n,
                        SHOWN: "shown" + n,
                        INSERTED: "inserted" + n,
                        CLICK: "click" + n,
                        FOCUSIN: "focusin" + n,
                        FOCUSOUT: "focusout" + n,
                        MOUSEENTER: "mouseenter" + n,
                        MOUSELEAVE: "mouseleave" + n
                    },
                    g = function (i) {
                        var s, h;

                        function g() {
                            return i.apply(this, arguments) || this
                        }
                        h = i, (s = g).prototype = Object.create(h.prototype), s.prototype.constructor = s, s.__proto__ = h;
                        var m = g.prototype;
                        return m.isWithContent = function () {
                            return this.getTitle() || this._getContent()
                        }, m.addAttachmentClass = function (t) {
                            e(this.getTipElement()).addClass("bs-popover-" + t)
                        }, m.getTipElement = function () {
                            return this.tip = this.tip || e(this.config.template)[0], this.tip
                        }, m.setContent = function () {
                            var t = e(this.getTipElement());
                            this.setElementContent(t.find(d), this.getTitle());
                            var n = this._getContent();
                            "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(f), n), t.removeClass(c + " " + u)
                        }, m._getContent = function () {
                            return this.element.getAttribute("data-content") || this.config.content
                        }, m._cleanTipClass = function () {
                            var t = e(this.getTipElement()),
                                n = t.attr("class").match(r);
                            null !== n && n.length > 0 && t.removeClass(n.join(""))
                        }, g._jQueryInterface = function (t) {
                            return this.each(function () {
                                var n = e(this).data("bs.popover"),
                                    i = "object" == typeof t ? t : null;
                                if ((n || !/destroy|hide/.test(t)) && (n || (n = new g(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) {
                                    if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                    n[t]()
                                }
                            })
                        }, o(g, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.1.2"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return a
                            }
                        }, {
                            key: "NAME",
                            get: function () {
                                return t
                            }
                        }, {
                            key: "DATA_KEY",
                            get: function () {
                                return "bs.popover"
                            }
                        }, {
                            key: "Event",
                            get: function () {
                                return p
                            }
                        }, {
                            key: "EVENT_KEY",
                            get: function () {
                                return n
                            }
                        }, {
                            key: "DefaultType",
                            get: function () {
                                return l
                            }
                        }]), g
                    }(h);
                return e.fn[t] = g._jQueryInterface, e.fn[t].Constructor = g, e.fn[t].noConflict = function () {
                    return e.fn[t] = i, g._jQueryInterface
                }, g
            }(t),
            m = function (e) {
                var t = "scrollspy",
                    n = e.fn[t],
                    i = {
                        offset: 10,
                        method: "auto",
                        target: ""
                    },
                    r = {
                        offset: "number",
                        method: "string",
                        target: "(string|element)"
                    },
                    l = {
                        ACTIVATE: "activate.bs.scrollspy",
                        SCROLL: "scroll.bs.scrollspy",
                        LOAD_DATA_API: "load.bs.scrollspy.data-api"
                    },
                    c = "dropdown-item",
                    u = "active",
                    d = {
                        DATA_SPY: '[data-spy="scroll"]',
                        ACTIVE: ".active",
                        NAV_LIST_GROUP: ".nav, .list-group",
                        NAV_LINKS: ".nav-link",
                        NAV_ITEMS: ".nav-item",
                        LIST_ITEMS: ".list-group-item",
                        DROPDOWN: ".dropdown",
                        DROPDOWN_ITEMS: ".dropdown-item",
                        DROPDOWN_TOGGLE: ".dropdown-toggle"
                    },
                    f = "offset",
                    p = "position",
                    h = function () {
                        function n(t, n) {
                            var i = this;
                            this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + d.NAV_LINKS + "," + this._config.target + " " + d.LIST_ITEMS + "," + this._config.target + " " + d.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(l.SCROLL, function (e) {
                                return i._process(e)
                            }), this.refresh(), this._process()
                        }
                        var h = n.prototype;
                        return h.refresh = function () {
                            var t = this,
                                n = this._scrollElement === this._scrollElement.window ? f : p,
                                i = "auto" === this._config.method ? n : this._config.method,
                                o = i === p ? this._getScrollTop() : 0;
                            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
                                var n, r = a.getSelectorFromElement(t);
                                if (r && (n = document.querySelector(r)), n) {
                                    var s = n.getBoundingClientRect();
                                    if (s.width || s.height) return [e(n)[i]().top + o, r]
                                }
                                return null
                            }).filter(function (e) {
                                return e
                            }).sort(function (e, t) {
                                return e[0] - t[0]
                            }).forEach(function (e) {
                                t._offsets.push(e[0]), t._targets.push(e[1])
                            })
                        }, h.dispose = function () {
                            e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                        }, h._getConfig = function (n) {
                            if ("string" != typeof (n = s({}, i, "object" == typeof n && n ? n : {})).target) {
                                var o = e(n.target).attr("id");
                                o || (o = a.getUID(t), e(n.target).attr("id", o)), n.target = "#" + o
                            }
                            return a.typeCheckConfig(t, n, r), n
                        }, h._getScrollTop = function () {
                            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                        }, h._getScrollHeight = function () {
                            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                        }, h._getOffsetHeight = function () {
                            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                        }, h._process = function () {
                            var e = this._getScrollTop() + this._config.offset,
                                t = this._getScrollHeight(),
                                n = this._config.offset + t - this._getOffsetHeight();
                            if (this._scrollHeight !== t && this.refresh(), e >= n) {
                                var i = this._targets[this._targets.length - 1];
                                this._activeTarget !== i && this._activate(i)
                            } else {
                                if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                                for (var o = this._offsets.length; o--;) {
                                    this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
                                }
                            }
                        }, h._activate = function (t) {
                            this._activeTarget = t, this._clear();
                            var n = this._selector.split(",");
                            n = n.map(function (e) {
                                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                            });
                            var i = e([].slice.call(document.querySelectorAll(n.join(","))));
                            i.hasClass(c) ? (i.closest(d.DROPDOWN).find(d.DROPDOWN_TOGGLE).addClass(u), i.addClass(u)) : (i.addClass(u), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_LINKS + ", " + d.LIST_ITEMS).addClass(u), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_ITEMS).children(d.NAV_LINKS).addClass(u)), e(this._scrollElement).trigger(l.ACTIVATE, {
                                relatedTarget: t
                            })
                        }, h._clear = function () {
                            var t = [].slice.call(document.querySelectorAll(this._selector));
                            e(t).filter(d.ACTIVE).removeClass(u)
                        }, n._jQueryInterface = function (t) {
                            return this.each(function () {
                                var i = e(this).data("bs.scrollspy");
                                if (i || (i = new n(this, "object" == typeof t && t), e(this).data("bs.scrollspy", i)), "string" == typeof t) {
                                    if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                    i[t]()
                                }
                            })
                        }, o(n, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.1.2"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return i
                            }
                        }]), n
                    }();
                return e(window).on(l.LOAD_DATA_API, function () {
                    for (var t = [].slice.call(document.querySelectorAll(d.DATA_SPY)), n = t.length; n--;) {
                        var i = e(t[n]);
                        h._jQueryInterface.call(i, i.data())
                    }
                }), e.fn[t] = h._jQueryInterface, e.fn[t].Constructor = h, e.fn[t].noConflict = function () {
                    return e.fn[t] = n, h._jQueryInterface
                }, h
            }(t),
            v = function (e) {
                var t = e.fn.tab,
                    n = {
                        HIDE: "hide.bs.tab",
                        HIDDEN: "hidden.bs.tab",
                        SHOW: "show.bs.tab",
                        SHOWN: "shown.bs.tab",
                        CLICK_DATA_API: "click.bs.tab.data-api"
                    },
                    i = "dropdown-menu",
                    r = "active",
                    s = "disabled",
                    l = "fade",
                    c = "show",
                    u = ".dropdown",
                    d = ".nav, .list-group",
                    f = ".active",
                    p = "> li > .active",
                    h = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                    g = ".dropdown-toggle",
                    m = "> .dropdown-menu .active",
                    v = function () {
                        function t(e) {
                            this._element = e
                        }
                        var h = t.prototype;
                        return h.show = function () {
                            var t = this;
                            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(r) || e(this._element).hasClass(s))) {
                                var i, o, l = e(this._element).closest(d)[0],
                                    c = a.getSelectorFromElement(this._element);
                                if (l) {
                                    var u = "UL" === l.nodeName ? p : f;
                                    o = (o = e.makeArray(e(l).find(u)))[o.length - 1]
                                }
                                var h = e.Event(n.HIDE, {
                                        relatedTarget: this._element
                                    }),
                                    g = e.Event(n.SHOW, {
                                        relatedTarget: o
                                    });
                                if (o && e(o).trigger(h), e(this._element).trigger(g), !g.isDefaultPrevented() && !h.isDefaultPrevented()) {
                                    c && (i = document.querySelector(c)), this._activate(this._element, l);
                                    var m = function () {
                                        var i = e.Event(n.HIDDEN, {
                                                relatedTarget: t._element
                                            }),
                                            r = e.Event(n.SHOWN, {
                                                relatedTarget: o
                                            });
                                        e(o).trigger(i), e(t._element).trigger(r)
                                    };
                                    i ? this._activate(i, i.parentNode, m) : m()
                                }
                            }
                        }, h.dispose = function () {
                            e.removeData(this._element, "bs.tab"), this._element = null
                        }, h._activate = function (t, n, i) {
                            var o = this,
                                r = ("UL" === n.nodeName ? e(n).find(p) : e(n).children(f))[0],
                                s = i && r && e(r).hasClass(l),
                                c = function () {
                                    return o._transitionComplete(t, r, i)
                                };
                            if (r && s) {
                                var u = a.getTransitionDurationFromElement(r);
                                e(r).one(a.TRANSITION_END, c).emulateTransitionEnd(u)
                            } else c()
                        }, h._transitionComplete = function (t, n, o) {
                            if (n) {
                                e(n).removeClass(c + " " + r);
                                var s = e(n.parentNode).find(m)[0];
                                s && e(s).removeClass(r), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                            }
                            if (e(t).addClass(r), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), a.reflow(t), e(t).addClass(c), t.parentNode && e(t.parentNode).hasClass(i)) {
                                var l = e(t).closest(u)[0];
                                if (l) {
                                    var d = [].slice.call(l.querySelectorAll(g));
                                    e(d).addClass(r)
                                }
                                t.setAttribute("aria-expanded", !0)
                            }
                            o && o()
                        }, t._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = e(this),
                                    o = i.data("bs.tab");
                                if (o || (o = new t(this), i.data("bs.tab", o)), "string" == typeof n) {
                                    if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                                    o[n]()
                                }
                            })
                        }, o(t, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.1.2"
                            }
                        }]), t
                    }();
                return e(document).on(n.CLICK_DATA_API, h, function (t) {
                    t.preventDefault(), v._jQueryInterface.call(e(this), "show")
                }), e.fn.tab = v._jQueryInterface, e.fn.tab.Constructor = v, e.fn.tab.noConflict = function () {
                    return e.fn.tab = t, v._jQueryInterface
                }, v
            }(t);
        ! function (e) {
            if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = e.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(t), e.Util = a, e.Alert = l, e.Button = c, e.Carousel = u, e.Collapse = d, e.Dropdown = f, e.Modal = p, e.Popover = g, e.Scrollspy = m, e.Tab = v, e.Tooltip = h, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    })(t, n(0), n(1))
}, function (e, t) {
    jQuery,
    $(".top-slider").slick({
        infinite: !0,
        dots: !1,
        arrows: !0,
        appendArrows: $(".top-slider-controls"),
        prevArrow: $(".top-slider-controls .btn-prev"),
        nextArrow: $(".top-slider-controls .btn-next"),
        autoplay: !0
    }),
    $(".testimonials").slick({
        infinite: !0,
        dots: !0,
        arrows: !0,
        appendArrows: $(".testimonials-controls .col-md-3"),
        appendDots: $(".testimonials-controls .col-md-6"),
        prevArrow: $(".testimonials-controls .btn-prev"),
        nextArrow: $(".testimonials-controls .btn-next")
    }),
    $(".form-control").on("focus", function () {
        $(this).parent().addClass("is-focused")
    }),
    $(".form-control").on("blur", function () {
        "" === $(this).val() && $(this).parent().removeClass("is-focused")
    }),
    $('[href="#enroll"]').on("click", function (e) {
        var t = $(this).attr("href"),
            n = $(this).data("format");
        n && $('[name="format"]').val(n), e.preventDefault(), $(t) && t.length > 1 && $("body, html").animate({
            scrollTop: $(t).offset().top
        })
    }),
    $(window).on("scroll", function () {
        var e = $(document).scrollTop(),
            t = $(".section-quote").offset().top,
            n = $(".section-questions").offset().top,
            i = e - t;
        Math.abs(i) <= n && i <= 0 && $(".main-photo").css({
            transform: "translateY(" + i + "px) scale(" + e / t + ")"
        }), i >= 0 && $(".main-photo").css({
            transform: "translateY(0) scale(1)"
        })
    })
}, function (e, t, n) {
    var i = n(9);
    window.sr = i(), sr.reveal(".section-title", {
        origin: "left",
        distance: "150px",
        duration: 1e3
    }), sr.reveal("ol li, ul li, table td, .for-who", {
        origin: "top",
        distance: "100px"
    }, 20), sr.reveal(".palisade", {
        origin: "right",
        distance: "300px",
        duration: 1e3
    })
}, function (e, t, n) {
    var i;
    ! function () {
        "use strict";
        var o, r;

        function s(e) {
            return void 0 === this || Object.getPrototypeOf(this) !== s.prototype ? new s(e) : ((o = this).version = "3.4.0", o.tools = new w, o.isSupported() ? (o.tools.extend(o.defaults, e || {}), o.defaults.container = a(o.defaults), o.store = {
                elements: {},
                containers: []
            }, o.sequences = {}, o.history = [], o.uid = 0, o.initialized = !1) : "undefined" != typeof console && null !== console && console.log("ScrollReveal is not supported in this browser."), o)
        }

        function a(e) {
            if (e && e.container) {
                if ("string" == typeof e.container) return window.document.documentElement.querySelector(e.container);
                if (o.tools.isNode(e.container)) return e.container;
                console.log('ScrollReveal: invalid container "' + e.container + '" provided.'), console.log("ScrollReveal: falling back to default container.")
            }
            return o.defaults.container
        }

        function l() {
            return ++o.uid
        }

        function c(e, t, n) {
            t.container && (t.container = n), e.config ? e.config = o.tools.extendClone(e.config, t) : e.config = o.tools.extendClone(o.defaults, t), "top" === e.config.origin || "bottom" === e.config.origin ? e.config.axis = "Y" : e.config.axis = "X"
        }

        function u(e) {
            var t = window.getComputedStyle(e.domEl);
            e.styles || (e.styles = {
                transition: {},
                transform: {},
                computed: {}
            }, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" !== t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = d(e, 0), e.styles.transition.delayed = d(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", f(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", f(e)
        }

        function d(e, t) {
            var n = e.config;
            return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; "
        }

        function f(e) {
            var t, n = e.config,
                i = e.styles.transform;
            t = "top" === n.origin || "left" === n.origin ? /^-/.test(n.distance) ? n.distance.substr(1) : "-" + n.distance : n.distance, parseInt(n.distance) && (i.initial += " translate" + n.axis + "(" + t + ")", i.target += " translate" + n.axis + "(0)"), n.scale && (i.initial += " scale(" + n.scale + ")", i.target += " scale(1)"), n.rotate.x && (i.initial += " rotateX(" + n.rotate.x + "deg)", i.target += " rotateX(0)"), n.rotate.y && (i.initial += " rotateY(" + n.rotate.y + "deg)", i.target += " rotateY(0)"), n.rotate.z && (i.initial += " rotateZ(" + n.rotate.z + "deg)", i.target += " rotateZ(0)"), i.initial += "; opacity: " + n.opacity + ";", i.target += "; opacity: " + e.styles.computed.opacity + ";"
        }

        function p(e) {
            var t = e.config.container;
            t && -1 === o.store.containers.indexOf(t) && o.store.containers.push(e.config.container), o.store.elements[e.id] = e
        }

        function h() {
            if (o.isSupported()) {
                m();
                for (var e = 0; e < o.store.containers.length; e++) o.store.containers[e].addEventListener("scroll", g), o.store.containers[e].addEventListener("resize", g);
                o.initialized || (window.addEventListener("scroll", g), window.addEventListener("resize", g), o.initialized = !0)
            }
            return o
        }

        function g() {
            r(m)
        }

        function m() {
            var e, t, n, i, r;
            o.tools.forOwn(o.sequences, function (e) {
                r = o.sequences[e], n = !1;
                for (var t = 0; t < r.elemIds.length; t++) i = r.elemIds[t], b(o.store.elements[i]) && !n && (n = !0);
                r.active = n
            }), o.tools.forOwn(o.store.elements, function (n) {
                t = o.store.elements[n], e = function (e) {
                        var t = e.config.useDelay;
                        return "always" === t || "onload" === t && !o.initialized || "once" === t && !e.seen
                    }(t),
                    function (e) {
                        if (e.sequence) {
                            var t = o.sequences[e.sequence.id];
                            return t.active && !t.blocked && !e.revealing && !e.disabled
                        }
                        return b(e) && !e.revealing && !e.disabled
                    }(t) ? (t.config.beforeReveal(t.domEl), e ? t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.delayed) : t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.instant), v("reveal", t, e), t.revealing = !0, t.seen = !0, t.sequence && function (e, t) {
                        var n = 0,
                            i = 0,
                            r = o.sequences[e.sequence.id];
                        r.blocked = !0, t && "onload" === e.config.useDelay && (i = e.config.delay);
                        e.sequence.timer && (n = Math.abs(e.sequence.timer.started - new Date), window.clearTimeout(e.sequence.timer));
                        e.sequence.timer = {
                            started: new Date
                        }, e.sequence.timer.clock = window.setTimeout(function () {
                            r.blocked = !1, e.sequence.timer = null, g()
                        }, Math.abs(r.interval) + i - n)
                    }(t, e)) : function (e) {
                        if (e.sequence) {
                            var t = o.sequences[e.sequence.id];
                            return !t.active && e.config.reset && e.revealing && !e.disabled
                        }
                        return !b(e) && e.config.reset && e.revealing && !e.disabled
                    }(t) && (t.config.beforeReset(t.domEl), t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.initial + t.styles.transition.instant), v("reset", t), t.revealing = !1)
            })
        }

        function v(e, t, n) {
            var i = 0,
                o = 0,
                r = "after";
            switch (e) {
                case "reveal":
                    o = t.config.duration, n && (o += t.config.delay), r += "Reveal";
                    break;
                case "reset":
                    o = t.config.duration, r += "Reset"
            }
            t.timer && (i = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = {
                started: new Date
            }, t.timer.clock = window.setTimeout(function () {
                t.config[r](t.domEl), t.timer = null
            }, o - i)
        }

        function y(e) {
            var t = 0,
                n = 0,
                i = e.offsetHeight,
                o = e.offsetWidth;
            do {
                isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft), e = e.offsetParent
            } while (e);
            return {
                top: t,
                left: n,
                height: i,
                width: o
            }
        }

        function b(e) {
            var t, n, i, o, r, s, a, l, c = y(e.domEl),
                u = function (e) {
                    return {
                        width: e.clientWidth,
                        height: e.clientHeight
                    }
                }(e.config.container),
                d = function (e) {
                    if (e && e !== window.document.documentElement) {
                        var t = y(e);
                        return {
                            x: e.scrollLeft + t.left,
                            y: e.scrollTop + t.top
                        }
                    }
                    return {
                        x: window.pageXOffset,
                        y: window.pageYOffset
                    }
                }(e.config.container),
                f = e.config.viewFactor,
                p = c.height,
                h = c.width,
                g = c.top,
                m = c.left;
            return t = g + p * f, n = m + h * f, i = g + p - p * f, o = m + h - h * f, r = d.y + e.config.viewOffset.top, s = d.x + e.config.viewOffset.left, a = d.y - e.config.viewOffset.bottom + u.height, l = d.x - e.config.viewOffset.right + u.width, t < a && i > r && n < l && o > s || "fixed" === window.getComputedStyle(e.domEl).position
        }

        function w() {}
        s.prototype.defaults = {
            origin: "bottom",
            distance: "20px",
            duration: 500,
            delay: 0,
            rotate: {
                x: 0,
                y: 0,
                z: 0
            },
            opacity: 0,
            scale: .9,
            easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
            container: window.document.documentElement,
            mobile: !0,
            reset: !1,
            useDelay: "always",
            viewFactor: .2,
            viewOffset: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            beforeReveal: function (e) {},
            beforeReset: function (e) {},
            afterReveal: function (e) {},
            afterReset: function (e) {}
        }, s.prototype.isSupported = function () {
            var e = document.documentElement.style;
            return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e
        }, s.prototype.reveal = function (e, t, n, i) {
            var r, s, d, f, g, m;
            if (void 0 !== t && "number" == typeof t ? (n = t, t = {}) : void 0 !== t && null !== t || (t = {}), !(s = function (e, t) {
                    if ("string" == typeof e) return Array.prototype.slice.call(t.querySelectorAll(e));
                    if (o.tools.isNode(e)) return [e];
                    if (o.tools.isNodeList(e)) return Array.prototype.slice.call(e);
                    if (Array.isArray(e)) return e.filter(o.tools.isNode);
                    return []
                }(e, r = a(t))).length) return console.log('ScrollReveal: reveal on "' + e + '" failed, no elements found.'), o;
            n && "number" == typeof n && (m = l(), g = o.sequences[m] = {
                id: m,
                interval: n,
                elemIds: [],
                active: !1
            });
            for (var v = 0; v < s.length; v++)(f = s[v].getAttribute("data-sr-id")) ? d = o.store.elements[f] : (d = {
                id: l(),
                domEl: s[v],
                seen: !1,
                revealing: !1
            }).domEl.setAttribute("data-sr-id", d.id), g && (d.sequence = {
                id: g.id,
                index: g.elemIds.length
            }, g.elemIds.push(d.id)), c(d, t, r), u(d), p(d), o.tools.isMobile() && !d.config.mobile || !o.isSupported() ? (d.domEl.setAttribute("style", d.styles.inline), d.disabled = !0) : d.revealing || d.domEl.setAttribute("style", d.styles.inline + d.styles.transform.initial);
            return !i && o.isSupported() && (! function (e, t, n) {
                var i = {
                    target: e,
                    config: t,
                    interval: n
                };
                o.history.push(i)
            }(e, t, n), o.initTimeout && window.clearTimeout(o.initTimeout), o.initTimeout = window.setTimeout(h, 0)), o
        }, s.prototype.sync = function () {
            if (o.history.length && o.isSupported()) {
                for (var e = 0; e < o.history.length; e++) {
                    var t = o.history[e];
                    o.reveal(t.target, t.config, t.interval, !0)
                }
                h()
            } else console.log("ScrollReveal: sync failed, no reveals found.");
            return o
        }, w.prototype.isObject = function (e) {
            return null !== e && "object" == typeof e && e.constructor === Object
        }, w.prototype.isNode = function (e) {
            return "object" == typeof window.Node ? e instanceof window.Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
        }, w.prototype.isNodeList = function (e) {
            var t = Object.prototype.toString.call(e);
            return "object" == typeof window.NodeList ? e instanceof window.NodeList : e && "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(t) && "number" == typeof e.length && (0 === e.length || this.isNode(e[0]))
        }, w.prototype.forOwn = function (e, t) {
            if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".');
            for (var n in e) e.hasOwnProperty(n) && t(n)
        }, w.prototype.extend = function (e, t) {
            return this.forOwn(t, function (n) {
                this.isObject(t[n]) ? (e[n] && this.isObject(e[n]) || (e[n] = {}), this.extend(e[n], t[n])) : e[n] = t[n]
            }.bind(this)), e
        }, w.prototype.extendClone = function (e, t) {
            return this.extend(this.extend({}, e), t)
        }, w.prototype.isMobile = function () {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        }, r = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
            window.setTimeout(e, 1e3 / 60)
        }, void 0 === (i = function () {
            return s
        }.call(t, n, t, e)) || (e.exports = i)
    }()
}, function (e, t) {}]);