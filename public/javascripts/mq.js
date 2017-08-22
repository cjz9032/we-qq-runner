/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (a, b) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document)throw new Error("jQuery requires a window with a document");
    return b(a)
  } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
  "use strict";
  var c = [], d = a.document, e = Object.getPrototypeOf, f = c.slice, g = c.concat, h = c.push, i = c.indexOf, j = {},
      k = j.toString, l = j.hasOwnProperty, m = l.toString, n = m.call(Object), o = {};

  function p(a, b) {
    b = b || d;
    var c = b.createElement("script");
    c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
  }

  var q = "3.2.1", r = function (a, b) {
    return new r.fn.init(a, b)
  }, s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, t = /^-ms-/, u = /-([a-z])/g, v = function (a, b) {
    return b.toUpperCase()
  };
  r.fn = r.prototype = {
    jquery: q, constructor: r, length: 0, toArray: function () {
      return f.call(this)
    }, get: function (a) {
      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
    }, pushStack: function (a) {
      var b = r.merge(this.constructor(), a);
      return b.prevObject = this, b
    }, each: function (a) {
      return r.each(this, a)
    }, map: function (a) {
      return this.pushStack(r.map(this, function (b, c) {
        return a.call(b, c, b)
      }))
    }, slice: function () {
      return this.pushStack(f.apply(this, arguments))
    }, first: function () {
      return this.eq(0)
    }, last: function () {
      return this.eq(-1)
    }, eq: function (a) {
      var b = this.length, c = +a + (a < 0 ? b : 0);
      return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
    }, end: function () {
      return this.prevObject || this.constructor()
    }, push: h, sort: c.sort, splice: c.splice
  }, r.extend = r.fn.extend = function () {
    var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)if (null != (a = arguments[h]))for (b in a)c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
    return g
  }, r.extend({
    expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
      throw new Error(a)
    }, noop: function () {
    }, isFunction: function (a) {
      return "function" === r.type(a)
    }, isWindow: function (a) {
      return null != a && a === a.window
    }, isNumeric: function (a) {
      var b = r.type(a);
      return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
    }, isPlainObject: function (a) {
      var b, c;
      return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n))
    }, isEmptyObject: function (a) {
      var b;
      for (b in a)return !1;
      return !0
    }, type: function (a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
    }, globalEval: function (a) {
      p(a)
    }, camelCase: function (a) {
      return a.replace(t, "ms-").replace(u, v)
    }, each: function (a, b) {
      var c, d = 0;
      if (w(a)) {
        for (c = a.length; d < c; d++)if (b.call(a[d], d, a[d]) === !1)break
      } else for (d in a)if (b.call(a[d], d, a[d]) === !1)break;
      return a
    }, trim: function (a) {
      return null == a ? "" : (a + "").replace(s, "")
    }, makeArray: function (a, b) {
      var c = b || [];
      return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
    }, inArray: function (a, b, c) {
      return null == b ? -1 : i.call(b, a, c)
    }, merge: function (a, b) {
      for (var c = +b.length, d = 0, e = a.length; d < c; d++)a[e++] = b[d];
      return a.length = e, a
    }, grep: function (a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
      return e
    }, map: function (a, b, c) {
      var d, e, f = 0, h = [];
      if (w(a))for (d = a.length; f < d; f++)e = b(a[f], f, c), null != e && h.push(e); else for (f in a)e = b(a[f], f, c), null != e && h.push(e);
      return g.apply([], h)
    }, guid: 1, proxy: function (a, b) {
      var c, d, e;
      if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a))return d = f.call(arguments, 2), e = function () {
        return a.apply(b || this, d.concat(f.call(arguments)))
      }, e.guid = a.guid = a.guid || r.guid++, e
    }, now: Date.now, support: o
  }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    j["[object " + b + "]"] = b.toLowerCase()
  });
  function w(a) {
    var b = !!a && "length" in a && a.length, c = r.type(a);
    return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
  }

  var x = function (a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0,
        x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) {
          return a === b && (l = !0), 0
        }, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = function (a, b) {
          for (var c = 0, d = a.length; c < d; c++)if (a[c] === b)return c;
          return -1
        },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
        N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
        O = new RegExp(K + "+", "g"), P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
        Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"), T = new RegExp(N), U = new RegExp("^" + L + "$"),
        V = {
          ID: new RegExp("^#(" + L + ")"),
          CLASS: new RegExp("^\\.(" + L + ")"),
          TAG: new RegExp("^(" + L + "|[*])"),
          ATTR: new RegExp("^" + M),
          PSEUDO: new RegExp("^" + N),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + J + ")$", "i"),
          needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
        }, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/,
        _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"), aa = function (a, b, c) {
          var d = "0x" + b - 65536;
          return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ca = function (a, b) {
          return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
        }, da = function () {
          m()
        }, ea = ta(function (a) {
          return a.disabled === !0 && ("form" in a || "label" in a)
        }, {dir: "parentNode", next: "legend"});
    try {
      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
    } catch (fa) {
      G = {
        apply: D.length ? function (a, b) {
          F.apply(a, H.call(b))
        } : function (a, b) {
          var c = a.length, d = 0;
          while (a[c++] = b[d++]);
          a.length = c - 1
        }
      }
    }
    function ga(a, b, d, e) {
      var f, h, j, k, l, o, r, s = b && b.ownerDocument, w = b ? b.nodeType : 9;
      if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w)return d;
      if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== w && (l = Z.exec(a)))if (f = l[1]) {
          if (9 === w) {
            if (!(j = b.getElementById(f)))return d;
            if (j.id === f)return d.push(j), d
          } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f)return d.push(j), d
        } else {
          if (l[2])return G.apply(d, b.getElementsByTagName(a)), d;
          if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName)return G.apply(d, b.getElementsByClassName(f)), d
        }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) s = b, r = a; else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;
            while (h--)o[h] = "#" + k + " " + sa(o[h]);
            r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
          }
          if (r)try {
            return G.apply(d, s.querySelectorAll(r)), d
          } catch (x) {
          } finally {
            k === u && b.removeAttribute("id")
          }
        }
      }
      return i(a.replace(P, "$1"), b, d, e)
    }

    function ha() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
      }

      return b
    }

    function ia(a) {
      return a[u] = !0, a
    }

    function ja(a) {
      var b = n.createElement("fieldset");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function ka(a, b) {
      var c = a.split("|"), e = c.length;
      while (e--)d.attrHandle[c[e]] = b
    }

    function la(a, b) {
      var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
      if (d)return d;
      if (c)while (c = c.nextSibling)if (c === b)return -1;
      return a ? 1 : -1
    }

    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a
      }
    }

    function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a
      }
    }

    function oa(a) {
      return function (b) {
        return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a
      }
    }

    function pa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e, f = a([], c.length, b), g = f.length;
          while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
        })
      })
    }

    function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a
    }

    c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return !!b && "HTML" !== b.nodeName
    }, m = ga.setDocument = function (a) {
      var b, e, g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className")
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
      }), c.getById ? (d.filter.ID = function (a) {
        var b = a.replace(_, aa);
        return function (a) {
          return a.getAttribute("id") === b
        }
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);
          return c ? [c] : []
        }
      }) : (d.filter.ID = function (a) {
        var b = a.replace(_, aa);
        return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
          return c && c.value === b
        }
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c, d, e, f = b.getElementById(a);
          if (f) {
            if (c = f.getAttributeNode("id"), c && c.value === a)return [f];
            e = b.getElementsByName(a), d = 0;
            while (f = e[d++])if (c = f.getAttributeNode("id"), c && c.value === a)return [f]
          }
          return []
        }
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
      } : function (a, b) {
        var c, d = [], e = 0, f = b.getElementsByTagName(a);
        if ("*" === a) {
          while (c = f[e++])1 === c.nodeType && d.push(c);
          return d
        }
        return f
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
            if ("undefined" != typeof b.getElementsByClassName && p)return b.getElementsByClassName(a)
          }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
      }), ja(function (a) {
        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var b = n.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      } : function (a, b) {
        if (b)while (b = b.parentNode)if (b === a)return !0;
        return !1
      }, B = b ? function (a, b) {
        if (a === b)return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
      } : function (a, b) {
        if (a === b)return l = !0, 0;
        var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
        if (!e || !f)return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
        if (e === f)return la(a, b);
        c = a;
        while (c = c.parentNode)g.unshift(c);
        c = b;
        while (c = c.parentNode)h.unshift(c);
        while (g[d] === h[d])d++;
        return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
      }, n) : n
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b)
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b)))try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
      } catch (e) {
      }
      return ga(b, n, null, [a]).length > 0
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b)
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()], f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
    }, ga.escape = function (a) {
      return (a + "").replace(ba, ca)
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a)
    }, ga.uniqueSort = function (a) {
      var b, d = [], e = 0, f = 0;
      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++])b === a[f] && (e = d.push(f));
        while (e--)a.splice(d[e], 1)
      }
      return k = null, a
    }, e = ga.getText = function (a) {
      var b, c = "", d = 0, f = a.nodeType;
      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent)return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling)c += e(a)
        } else if (3 === f || 4 === f)return a.nodeValue
      } else while (b = a[d++])c += e(b);
      return c
    }, d = ga.selectors = {
      cacheLength: 50,
      createPseudo: ia,
      match: V,
      attrHandle: {},
      find: {},
      relative: {
        ">": {dir: "parentNode", first: !0},
        " ": {dir: "parentNode"},
        "+": {dir: "previousSibling", first: !0},
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        ATTR: function (a) {
          return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        }, CHILD: function (a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
        }, PSEUDO: function (a) {
          var b, c = !a[6] && a[2];
          return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }
      },
      filter: {
        TAG: function (a) {
          var b = a.replace(_, aa).toLowerCase();
          return "*" === a ? function () {
            return !0
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b
          }
        }, CLASS: function (a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
                return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
              })
        }, ATTR: function (a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);
            return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
          }
        }, CHILD: function (a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode
          } : function (b, c, i) {
            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode,
                r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
            if (q) {
              if (f) {
                while (p) {
                  m = b;
                  while (m = m[p])if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)return !1;
                  o = p = "only" === a && !o && "nextSibling"
                }
                return !0
              }
              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())if (1 === m.nodeType && ++t && m === b) {
                  k[a] = [w, n, t];
                  break
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)while (m = ++n && m && m[p] || (t = n = 0) || o.pop())if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b))break;
              return t -= e, t === d || t % d === 0 && t / d >= 0
            }
          }
        }, PSEUDO: function (a, b) {
          var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d, f = e(a, b), g = f.length;
            while (g--)d = I(a, f[g]), a[d] = !(c[d] = f[g])
          }) : function (a) {
            return e(a, 0, c)
          }) : e
        }
      },
      pseudos: {
        not: ia(function (a) {
          var b = [], c = [], d = h(a.replace(P, "$1"));
          return d[u] ? ia(function (a, b, c, e) {
            var f, g = d(a, null, e, []), h = a.length;
            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
          }
        }), has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0
          }
        }), contains: ia(function (a) {
          return a = a.replace(_, aa), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
          }
        }), lang: ia(function (a) {
          return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
            var c;
            do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
            return !1
          }
        }), target: function (b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id
        }, root: function (a) {
          return a === o
        }, focus: function (a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        }, enabled: oa(!1), disabled: oa(!0), checked: function (a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected
        }, selected: function (a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        }, empty: function (a) {
          for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
          return !0
        }, parent: function (a) {
          return !d.pseudos.empty(a)
        }, header: function (a) {
          return X.test(a.nodeName)
        }, input: function (a) {
          return W.test(a.nodeName)
        }, button: function (a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b
        }, text: function (a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        }, first: pa(function () {
          return [0]
        }), last: pa(function (a, b) {
          return [b - 1]
        }), eq: pa(function (a, b, c) {
          return [c < 0 ? c + b : c]
        }), even: pa(function (a, b) {
          for (var c = 0; c < b; c += 2)a.push(c);
          return a
        }), odd: pa(function (a, b) {
          for (var c = 1; c < b; c += 2)a.push(c);
          return a
        }), lt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; --d >= 0;)a.push(d);
          return a
        }), gt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; ++d < b;)a.push(d);
          return a
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})d.pseudos[b] = ma(b);
    for (b in{submit: !0, reset: !0})d.pseudos[b] = na(b);
    function ra() {
    }

    ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function (a, b) {
      var c, e, f, g, h, i, j, k = z[a + " "];
      if (k)return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;
      while (h) {
        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(P, " ")
        }), h = h.slice(c.length));
        for (g in d.filter)!(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
          value: c,
          type: g,
          matches: e
        }), h = h.slice(c.length));
        if (!c)break
      }
      return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
    };
    function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++)d += a[b].value;
      return d
    }

    function ta(a, b, c) {
      var d = b.dir, e = b.next, f = e || d, g = c && "parentNode" === f, h = x++;
      return b.first ? function (b, c, e) {
        while (b = b[d])if (1 === b.nodeType || g)return a(b, c, e);
        return !1
      } : function (b, c, i) {
        var j, k, l, m = [w, h];
        if (i) {
          while (b = b[d])if ((1 === b.nodeType || g) && a(b, c, i))return !0
        } else while (b = b[d])if (1 === b.nodeType || g)if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b; else {
          if ((j = k[f]) && j[0] === w && j[1] === h)return m[2] = j[2];
          if (k[f] = m, m[2] = a(b, c, i))return !0
        }
        return !1
      }
    }

    function ua(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;
        while (e--)if (!a[e](b, c, d))return !1;
        return !0
      } : a[0]
    }

    function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++)ga(a, b[d], c);
      return c
    }

    function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      return g
    }

    function xa(a, b, c, d, e, f) {
      return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
        var j, k, l, m = [], n = [], o = g.length, p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : wa(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
        if (c && c(q, r, h, i), d) {
          j = wa(r, n), d(j, [], h, i), k = j.length;
          while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
        }
        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;
              while (k--)(l = r[k]) && j.push(q[k] = l);
              e(null, r = [], j, i)
            }
            k = r.length;
            while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
          }
        } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
      })
    }

    function ya(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
        return a === b
      }, h, !0), l = ta(function (a) {
        return I(b, a) > -1
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
        return b = null, e
      }]; i < f; i++)if (c = d.relative[a[i].type]) m = [ta(ua(m), c)]; else {
        if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
          for (e = ++i; e < f; e++)if (d.relative[a[e].type])break;
          return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
        }
        m.push(c)
      }
      return ua(m)
    }

    function za(a, b) {
      var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
        var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1, z = x.length;
        for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
            while (q = a[o++])if (q(l, g || n, h)) {
              i.push(l);
              break
            }
            k && (w = y)
          }
          c && ((l = !q && l) && r--, f && t.push(l))
        }
        if (r += s, c && s !== r) {
          o = 0;
          while (q = b[o++])q(t, u, g, h);
          if (f) {
            if (r > 0)while (s--)t[s] || u[s] || (u[s] = E.call(i));
            u = wa(u)
          }
          G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
        }
        return k && (w = y, j = v), t
      };
      return c ? ia(f) : f
    }

    return h = ga.compile = function (a, b) {
      var c, d = [], e = [], f = A[a + " "];
      if (!f) {
        b || (b = g(a)), c = b.length;
        while (c--)f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
        f = A(a, za(e, d)), f.selector = a
      }
      return f
    }, i = ga.select = function (a, b, c, e) {
      var f, i, j, k, l, m = "function" == typeof a && a, n = !e && g(a = m.selector || a);
      if (c = c || [], 1 === n.length) {
        if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
          if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b)return c;
          m && (b = b.parentNode), a = a.slice(i.shift().value.length)
        }
        f = V.needsContext.test(a) ? 0 : i.length;
        while (f--) {
          if (j = i[f], d.relative[k = j.type])break;
          if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
            if (i.splice(f, 1), a = e.length && sa(i), !a)return G.apply(c, e), c;
            break
          }
        }
      }
      return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || ka("type|href|height|width", function (a, b, c) {
      if (!c)return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || ka("value", function (a, b, c) {
      if (!c && "input" === a.nodeName.toLowerCase())return a.defaultValue
    }), ja(function (a) {
      return null == a.getAttribute("disabled")
    }) || ka(J, function (a, b, c) {
      var d;
      if (!c)return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }), ga
  }(a);
  r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
  var y = function (a, b, c) {
    var d = [], e = void 0 !== c;
    while ((a = a[b]) && 9 !== a.nodeType)if (1 === a.nodeType) {
      if (e && r(a).is(c))break;
      d.push(a)
    }
    return d
  }, z = function (a, b) {
    for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
    return c
  }, A = r.expr.match.needsContext;

  function B(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
  }

  var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, D = /^.[^:#\[\.,]*$/;

  function E(a, b, c) {
    return r.isFunction(b) ? r.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c
    }) : b.nodeType ? r.grep(a, function (a) {
      return a === b !== c
    }) : "string" != typeof b ? r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c
    }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c && 1 === a.nodeType
    }))
  }

  r.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
      return 1 === a.nodeType
    }))
  }, r.fn.extend({
    find: function (a) {
      var b, c, d = this.length, e = this;
      if ("string" != typeof a)return this.pushStack(r(a).filter(function () {
        for (b = 0; b < d; b++)if (r.contains(e[b], this))return !0
      }));
      for (c = this.pushStack([]), b = 0; b < d; b++)r.find(a, e[b], c);
      return d > 1 ? r.uniqueSort(c) : c
    }, filter: function (a) {
      return this.pushStack(E(this, a || [], !1))
    }, not: function (a) {
      return this.pushStack(E(this, a || [], !0))
    }, is: function (a) {
      return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
    }
  });
  var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, H = r.fn.init = function (a, b, c) {
    var e, f;
    if (!a)return this;
    if (c = c || F, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b)return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
      if (e[1]) {
        if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b))for (e in b)r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        return this
      }
      return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
    }
    return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
  };
  H.prototype = r.fn, F = r(d);
  var I = /^(?:parents|prev(?:Until|All))/, J = {children: !0, contents: !0, next: !0, prev: !0};
  r.fn.extend({
    has: function (a) {
      var b = r(a, this), c = b.length;
      return this.filter(function () {
        for (var a = 0; a < c; a++)if (r.contains(this, b[a]))return !0
      })
    }, closest: function (a, b) {
      var c, d = 0, e = this.length, f = [], g = "string" != typeof a && r(a);
      if (!A.test(a))for (; d < e; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
        f.push(c);
        break
      }
      return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
    }, index: function (a) {
      return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
    }, addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
  });
  function K(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a
  }

  r.each({
    parent: function (a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    }, parents: function (a) {
      return y(a, "parentNode")
    }, parentsUntil: function (a, b, c) {
      return y(a, "parentNode", c)
    }, next: function (a) {
      return K(a, "nextSibling")
    }, prev: function (a) {
      return K(a, "previousSibling")
    }, nextAll: function (a) {
      return y(a, "nextSibling")
    }, prevAll: function (a) {
      return y(a, "previousSibling")
    }, nextUntil: function (a, b, c) {
      return y(a, "nextSibling", c)
    }, prevUntil: function (a, b, c) {
      return y(a, "previousSibling", c)
    }, siblings: function (a) {
      return z((a.parentNode || {}).firstChild, a)
    }, children: function (a) {
      return z(a.firstChild)
    }, contents: function (a) {
      return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes))
    }
  }, function (a, b) {
    r.fn[a] = function (c, d) {
      var e = r.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e)
    }
  });
  var L = /[^\x20\t\r\n\f]+/g;

  function M(a) {
    var b = {};
    return r.each(a.match(L) || [], function (a, c) {
      b[c] = !0
    }), b
  }

  r.Callbacks = function (a) {
    a = "string" == typeof a ? M(a) : r.extend({}, a);
    var b, c, d, e, f = [], g = [], h = -1, i = function () {
      for (e = e || a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();
        while (++h < f.length)f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
      }
      a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
    }, j = {
      add: function () {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          r.each(b, function (b, c) {
            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
          })
        }(arguments), c && !b && i()), this
      }, remove: function () {
        return r.each(arguments, function (a, b) {
          var c;
          while ((c = r.inArray(b, f, c)) > -1)f.splice(c, 1), c <= h && h--
        }), this
      }, has: function (a) {
        return a ? r.inArray(a, f) > -1 : f.length > 0
      }, empty: function () {
        return f && (f = []), this
      }, disable: function () {
        return e = g = [], f = c = "", this
      }, disabled: function () {
        return !f
      }, lock: function () {
        return e = g = [], c || b || (f = c = ""), this
      }, locked: function () {
        return !!e
      }, fireWith: function (a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
      }, fire: function () {
        return j.fireWith(this, arguments), this
      }, fired: function () {
        return !!d
      }
    };
    return j
  };
  function N(a) {
    return a
  }

  function O(a) {
    throw a
  }

  function P(a, b, c, d) {
    var e;
    try {
      a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d))
    } catch (a) {
      c.apply(void 0, [a])
    }
  }

  r.extend({
    Deferred: function (b) {
      var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
          d = "pending", e = {
            state: function () {
              return d
            }, always: function () {
              return f.done(arguments).fail(arguments), this
            }, "catch": function (a) {
              return e.then(null, a)
            }, pipe: function () {
              var a = arguments;
              return r.Deferred(function (b) {
                r.each(c, function (c, d) {
                  var e = r.isFunction(a[d[4]]) && a[d[4]];
                  f[d[1]](function () {
                    var a = e && e.apply(this, arguments);
                    a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                  })
                }), a = null
              }).promise()
            }, then: function (b, d, e) {
              var f = 0;

              function g(b, c, d, e) {
                return function () {
                  var h = this, i = arguments, j = function () {
                    var a, j;
                    if (!(b < f)) {
                      if (a = d.apply(h, i), a === c.promise())throw new TypeError("Thenable self-resolution");
                      j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                    }
                  }, k = e ? j : function () {
                    try {
                      j()
                    } catch (a) {
                      r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i))
                    }
                  };
                  b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
                }
              }

              return r.Deferred(function (a) {
                c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O))
              }).promise()
            }, promise: function (a) {
              return null != a ? r.extend(a, e) : e
            }
          }, f = {};
      return r.each(c, function (a, b) {
        var g = b[2], h = b[5];
        e[b[1]] = g.add, h && g.add(function () {
          d = h
        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
          return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
        }, f[b[0] + "With"] = g.fireWith
      }), e.promise(f), b && b.call(f, f), f
    }, when: function (a) {
      var b = arguments.length, c = b, d = Array(c), e = f.call(arguments), g = r.Deferred(), h = function (a) {
        return function (c) {
          d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e)
        }
      };
      if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then)))return g.then();
      while (c--)P(e[c], h(c), g.reject);
      return g.promise()
    }
  });
  var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  r.Deferred.exceptionHook = function (b, c) {
    a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
  }, r.readyException = function (b) {
    a.setTimeout(function () {
      throw b
    })
  };
  var R = r.Deferred();
  r.fn.ready = function (a) {
    return R.then(a)["catch"](function (a) {
      r.readyException(a)
    }), this
  }, r.extend({
    isReady: !1, readyWait: 1, ready: function (a) {
      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]))
    }
  }), r.ready.then = R.then;
  function S() {
    d.removeEventListener("DOMContentLoaded", S),
        a.removeEventListener("load", S), r.ready()
  }

  "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));
  var T = function (a, b, c, d, e, f, g) {
    var h = 0, i = a.length, j = null == c;
    if ("object" === r.type(c)) {
      e = !0;
      for (h in c)T(a, b, h, c[h], !0, f, g)
    } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
          return j.call(r(a), c)
        })), b))for (; h < i; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
  }, U = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
  };

  function V() {
    this.expando = r.expando + V.uid++
  }

  V.uid = 1, V.prototype = {
    cache: function (a) {
      var b = a[this.expando];
      return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
        value: b,
        configurable: !0
      }))), b
    }, set: function (a, b, c) {
      var d, e = this.cache(a);
      if ("string" == typeof b) e[r.camelCase(b)] = c; else for (d in b)e[r.camelCase(d)] = b[d];
      return e
    }, get: function (a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
    }, access: function (a, b, c) {
      return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
    }, remove: function (a, b) {
      var c, d = a[this.expando];
      if (void 0 !== d) {
        if (void 0 !== b) {
          Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length;
          while (c--)delete d[b[c]]
        }
        (void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
      }
    }, hasData: function (a) {
      var b = a[this.expando];
      return void 0 !== b && !r.isEmptyObject(b)
    }
  };
  var W = new V, X = new V, Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z = /[A-Z]/g;

  function $(a) {
    return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a)
  }

  function _(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = $(c)
      } catch (e) {
      }
      X.set(a, b, c)
    } else c = void 0;
    return c
  }

  r.extend({
    hasData: function (a) {
      return X.hasData(a) || W.hasData(a)
    }, data: function (a, b, c) {
      return X.access(a, b, c)
    }, removeData: function (a, b) {
      X.remove(a, b)
    }, _data: function (a, b, c) {
      return W.access(a, b, c)
    }, _removeData: function (a, b) {
      W.remove(a, b)
    }
  }), r.fn.extend({
    data: function (a, b) {
      var c, d, e, f = this[0], g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
          c = g.length;
          while (c--)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
          W.set(f, "hasDataAttrs", !0)
        }
        return e
      }
      return "object" == typeof a ? this.each(function () {
        X.set(this, a)
      }) : T(this, function (b) {
        var c;
        if (f && void 0 === b) {
          if (c = X.get(f, a), void 0 !== c)return c;
          if (c = _(f, a), void 0 !== c)return c
        } else this.each(function () {
          X.set(this, a, b)
        })
      }, null, b, arguments.length > 1, null, !0)
    }, removeData: function (a) {
      return this.each(function () {
        X.remove(this, a)
      })
    }
  }), r.extend({
    queue: function (a, b, c) {
      var d;
      if (a)return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || []
    }, dequeue: function (a, b) {
      b = b || "fx";
      var c = r.queue(a, b), d = c.length, e = c.shift(), f = r._queueHooks(a, b), g = function () {
        r.dequeue(a, b)
      };
      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
    }, _queueHooks: function (a, b) {
      var c = b + "queueHooks";
      return W.get(a, c) || W.access(a, c, {
            empty: r.Callbacks("once memory").add(function () {
              W.remove(a, [b + "queue", c])
            })
          })
    }
  }), r.fn.extend({
    queue: function (a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = r.queue(this, a, b);
        r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
      })
    }, dequeue: function (a) {
      return this.each(function () {
        r.dequeue(this, a)
      })
    }, clearQueue: function (a) {
      return this.queue(a || "fx", [])
    }, promise: function (a, b) {
      var c, d = 1, e = r.Deferred(), f = this, g = this.length, h = function () {
        --d || e.resolveWith(f, [f])
      };
      "string" != typeof a && (b = a, a = void 0), a = a || "fx";
      while (g--)c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b)
    }
  });
  var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
      ca = ["Top", "Right", "Bottom", "Left"], da = function (a, b) {
        return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
      }, ea = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b)g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)a.style[f] = g[f];
        return e
      };

  function fa(a, b, c, d) {
    var e, f = 1, g = 20, h = d ? function () {
          return d.cur()
        } : function () {
          return r.css(a, b, "")
        }, i = h(), j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
        k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));
    if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;
      do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
    }
    return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
  }

  var ga = {};

  function ha(a) {
    var b, c = a.ownerDocument, d = a.nodeName, e = ga[d];
    return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e)
  }

  function ia(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++)d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
    for (f = 0; f < g; f++)null != e[f] && (a[f].style.display = e[f]);
    return a
  }

  r.fn.extend({
    show: function () {
      return ia(this, !0)
    }, hide: function () {
      return ia(this)
    }, toggle: function (a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        da(this) ? r(this).show() : r(this).hide()
      })
    }
  });
  var ja = /^(?:checkbox|radio)$/i, ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, la = /^$|\/(?:java|ecma)script/i, ma = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;
  function na(a, b) {
    var c;
    return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c
  }

  function oa(a, b) {
    for (var c = 0, d = a.length; c < d; c++)W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"))
  }

  var pa = /<|&#?\w+;/;

  function qa(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)if (f = a[n], f || 0 === f)if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f); else if (pa.test(f)) {
      g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
      while (k--)g = g.lastChild;
      r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
    } else m.push(b.createTextNode(f));
    l.textContent = "", n = 0;
    while (f = m[n++])if (d && r.inArray(f, d) > -1) e && e.push(f); else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) {
      k = 0;
      while (f = g[k++])la.test(f.type || "") && c.push(f)
    }
    return l
  }

  !function () {
    var a = d.createDocumentFragment(), b = a.appendChild(d.createElement("div")), c = d.createElement("input");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
  }();
  var ra = d.documentElement, sa = /^key/, ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ua = /^([^.]*)(?:\.(.+)|)/;

  function va() {
    return !0
  }

  function wa() {
    return !1
  }

  function xa() {
    try {
      return d.activeElement
    } catch (a) {
    }
  }

  function ya(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && (d = d || c, c = void 0);
      for (h in b)ya(a, h, c, d, b[h], f);
      return a
    }
    if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa; else if (!e)return a;
    return 1 === f && (g = e, e = function (a) {
      return r().off(a), g.apply(this, arguments)
    }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
      r.event.add(this, b, e, d, c)
    })
  }

  r.event = {
    global: {}, add: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, n, o, p, q = W.get(a);
      if (q) {
        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
        }), b = (b || "").match(L) || [""], j = b.length;
        while (j--)h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
          type: n,
          origType: p,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && r.expr.match.needsContext.test(e),
          namespace: o.join(".")
        }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
      }
    }, remove: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, n, o, p, q = W.hasData(a) && W.get(a);
      if (q && (i = q.events)) {
        b = (b || "").match(L) || [""], j = b.length;
        while (j--)if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
          l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
          while (f--)k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
          g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
        } else for (n in i)r.event.remove(a, n + b[j], c, d, !0);
        r.isEmptyObject(i) && W.remove(a, "handle events")
      }
    }, dispatch: function (a) {
      var b = r.event.fix(a), c, d, e, f, g, h, i = new Array(arguments.length),
          j = (W.get(this, "events") || {})[b.type] || [], k = r.event.special[b.type] || {};
      for (i[0] = b, c = 1; c < arguments.length; c++)i[c] = arguments[c];
      if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
        h = r.event.handlers.call(this, b, j), c = 0;
        while ((f = h[c++]) && !b.isPropagationStopped()) {
          b.currentTarget = f.elem, d = 0;
          while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped())b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()))
        }
        return k.postDispatch && k.postDispatch.call(this, b), b.result
      }
    }, handlers: function (a, b) {
      var c, d, e, f, g, h = [], i = b.delegateCount, j = a.target;
      if (i && j.nodeType && !("click" === a.type && a.button >= 1))for (; j !== this; j = j.parentNode || this)if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
        for (f = [], g = {}, c = 0; c < i; c++)d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
        f.length && h.push({elem: j, handlers: f})
      }
      return j = this, i < b.length && h.push({elem: j, handlers: b.slice(i)}), h
    }, addProp: function (a, b) {
      Object.defineProperty(r.Event.prototype, a, {
        enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
          if (this.originalEvent)return b(this.originalEvent)
        } : function () {
          if (this.originalEvent)return this.originalEvent[a]
        }, set: function (b) {
          Object.defineProperty(this, a, {enumerable: !0, configurable: !0, writable: !0, value: b})
        }
      })
    }, fix: function (a) {
      return a[r.expando] ? a : new r.Event(a)
    }, special: {
      load: {noBubble: !0}, focus: {
        trigger: function () {
          if (this !== xa() && this.focus)return this.focus(), !1
        }, delegateType: "focusin"
      }, blur: {
        trigger: function () {
          if (this === xa() && this.blur)return this.blur(), !1
        }, delegateType: "focusout"
      }, click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && B(this, "input"))return this.click(), !1
        }, _default: function (a) {
          return B(a.target, "a")
        }
      }, beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
        }
      }
    }
  }, r.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c)
  }, r.Event = function (a, b) {
    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b)
  }, r.Event.prototype = {
    constructor: r.Event,
    isDefaultPrevented: wa,
    isPropagationStopped: wa,
    isImmediatePropagationStopped: wa,
    isSimulated: !1,
    preventDefault: function () {
      var a = this.originalEvent;
      this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault()
    },
    stopPropagation: function () {
      var a = this.originalEvent;
      this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
    }
  }, r.each({
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
    "char": !0,
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
    which: function (a) {
      var b = a.button;
      return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
    }
  }, r.event.addProp), r.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (a, b) {
    r.event.special[a] = {
      delegateType: b, bindType: b, handle: function (a) {
        var c, d = this, e = a.relatedTarget, f = a.handleObj;
        return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
      }
    }
  }), r.fn.extend({
    on: function (a, b, c, d) {
      return ya(this, a, b, c, d)
    }, one: function (a, b, c, d) {
      return ya(this, a, b, c, d, 1)
    }, off: function (a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj)return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a)this.off(e, b, a[e]);
        return this
      }
      return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function () {
        r.event.remove(this, a, c, b)
      })
    }
  });
  var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Aa = /<script|<style|<link/i, Ba = /checked\s*(?:[^=]|=\s*.checked.)/i, Ca = /^true\/(.*)/,
      Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Ea(a, b) {
    return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a
  }

  function Fa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
  }

  function Ga(a) {
    var b = Ca.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a
  }

  function Ha(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};
        for (e in j)for (c = 0, d = j[e].length; c < d; c++)r.event.add(b, e, j[e][c])
      }
      X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i))
    }
  }

  function Ia(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
  }

  function Ja(a, b, c, d) {
    b = g.apply([], b);
    var e, f, h, i, j, k, l = 0, m = a.length, n = m - 1, q = b[0], s = r.isFunction(q);
    if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q))return a.each(function (e) {
      var f = a.eq(e);
      s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d)
    });
    if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
      for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++)j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
      if (i)for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++)j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k))
    }
    return a
  }

  function Ka(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++)c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
    return a
  }

  r.extend({
    htmlPrefilter: function (a) {
      return a.replace(za, "<$1></$2>")
    }, clone: function (a, b, c) {
      var d, e, f, g, h = a.cloneNode(!0), i = r.contains(a.ownerDocument, a);
      if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++)Ia(f[d], g[d]);
      if (b)if (c)for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++)Ha(f[d], g[d]); else Ha(a, h);
      return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h
    }, cleanData: function (a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)if (U(c)) {
        if (b = c[W.expando]) {
          if (b.events)for (d in b.events)e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
          c[W.expando] = void 0
        }
        c[X.expando] && (c[X.expando] = void 0)
      }
    }
  }), r.fn.extend({
    detach: function (a) {
      return Ka(this, a, !0)
    }, remove: function (a) {
      return Ka(this, a)
    }, text: function (a) {
      return T(this, function (a) {
        return void 0 === a ? r.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
        })
      }, null, a, arguments.length)
    }, append: function () {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);
          b.appendChild(a)
        }
      })
    }, prepend: function () {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);
          b.insertBefore(a, b.firstChild)
        }
      })
    }, before: function () {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    }, after: function () {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
      })
    }, empty: function () {
      for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
      return this
    }, clone: function (a, b) {
      return a = null != a && a, b = null == b ? a : b, this.map(function () {
        return r.clone(this, a, b)
      })
    }, html: function (a) {
      return T(this, function (a) {
        var b = this[0] || {}, c = 0, d = this.length;
        if (void 0 === a && 1 === b.nodeType)return b.innerHTML;
        if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = r.htmlPrefilter(a);
          try {
            for (; c < d; c++)b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
            b = 0
          } catch (e) {
          }
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    }, replaceWith: function () {
      var a = [];
      return Ja(this, arguments, function (b) {
        var c = this.parentNode;
        r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this))
      }, a)
    }
  }), r.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, b) {
    r.fn[a] = function (a) {
      for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++)c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
      return this.pushStack(d)
    }
  });
  var La = /^margin/, Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"), Na = function (b) {
    var c = b.ownerDocument.defaultView;
    return c && c.opener || (c = a), c.getComputedStyle(b)
  };
  !function () {
    function b() {
      if (i) {
        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);
        var b = a.getComputedStyle(i);
        c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null
      }
    }

    var c, e, f, g, h = d.createElement("div"), i = d.createElement("div");
    i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
      pixelPosition: function () {
        return b(), c
      }, boxSizingReliable: function () {
        return b(), e
      }, pixelMarginRight: function () {
        return b(), f
      }, reliableMarginLeft: function () {
        return b(), g
      }
    }))
  }();
  function Oa(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
  }

  function Pa(a, b) {
    return {
      get: function () {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments)
      }
    }
  }

  var Qa = /^(none|table(?!-c[ea]).+)/, Ra = /^--/, Sa = {position: "absolute", visibility: "hidden", display: "block"},
      Ta = {letterSpacing: "0", fontWeight: "400"}, Ua = ["Webkit", "Moz", "ms"], Va = d.createElement("div").style;

  function Wa(a) {
    if (a in Va)return a;
    var b = a[0].toUpperCase() + a.slice(1), c = Ua.length;
    while (c--)if (a = Ua[c] + b, a in Va)return a
  }

  function Xa(a) {
    var b = r.cssProps[a];
    return b || (b = r.cssProps[a] = Wa(a) || a), b
  }

  function Ya(a, b, c) {
    var d = ba.exec(b);
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
  }

  function Za(a, b, c, d, e) {
    var f, g = 0;
    for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2)"margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
    return g
  }

  function $a(a, b, c) {
    var d, e = Na(a), f = Oa(a, b, e), g = "border-box" === r.css(a, "boxSizing", !1, e);
    return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px")
  }

  r.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Oa(a, "opacity");
            return "" === c ? "1" : c
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
    cssProps: {"float": "cssFloat"},
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = r.camelCase(b), i = Ra.test(b), j = a.style;
        return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c, "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0)
      }
    },
    css: function (a, b, c, d) {
      var e, f, g, h = r.camelCase(b), i = Ra.test(b);
      return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
    }
  }), r.each(["height", "width"], function (a, b) {
    r.cssHooks[b] = {
      get: function (a, c, d) {
        if (c)return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function () {
          return $a(a, b, d)
        })
      }, set: function (a, c, d) {
        var e, f = d && Na(a), g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
        return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g)
      }
    }
  }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
    if (b)return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, {marginLeft: 0}, function () {
          return a.getBoundingClientRect().left
        })) + "px"
  }), r.each({margin: "", padding: "", border: "Width"}, function (a, b) {
    r.cssHooks[a + b] = {
      expand: function (c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++)e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
        return e
      }
    }, La.test(a) || (r.cssHooks[a + b].set = Ya)
  }), r.fn.extend({
    css: function (a, b) {
      return T(this, function (a, b, c) {
        var d, e, f = {}, g = 0;
        if (Array.isArray(b)) {
          for (d = Na(a), e = b.length; g < e; g++)f[b[g]] = r.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
      }, a, b, arguments.length > 1)
    }
  });
  function _a(a, b, c, d, e) {
    return new _a.prototype.init(a, b, c, d, e)
  }

  r.Tween = _a, _a.prototype = {
    constructor: _a, init: function (a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px")
    }, cur: function () {
      var a = _a.propHooks[this.prop];
      return a && a.get ? a.get(this) : _a.propHooks._default.get(this)
    }, run: function (a) {
      var b, c = _a.propHooks[this.prop];
      return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this
    }
  }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = {
    _default: {
      get: function (a) {
        var b;
        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
      }, set: function (a) {
        r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
      }
    }
  }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
    set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }
  }, r.easing = {
    linear: function (a) {
      return a
    }, swing: function (a) {
      return .5 - Math.cos(a * Math.PI) / 2
    }, _default: "swing"
  }, r.fx = _a.prototype.init, r.fx.step = {};
  var ab, bb, cb = /^(?:toggle|show|hide)$/, db = /queueHooks$/;

  function eb() {
    bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick())
  }

  function fb() {
    return a.setTimeout(function () {
      ab = void 0
    }), ab = r.now()
  }

  function gb(a, b) {
    var c, d = 0, e = {height: a};
    for (b = b ? 1 : 0; d < 4; d += 2 - b)c = ca[d], e["margin" + c] = e["padding" + c] = a;
    return b && (e.opacity = e.width = a), e
  }

  function hb(a, b, c) {
    for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++)if (d = e[f].call(c, b, a))return d
  }

  function ib(a, b, c) {
    var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b, m = this, n = {}, o = a.style,
        p = a.nodeType && da(a), q = W.get(a, "fxshow");
    c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
      g.unqueued || h()
    }), g.unqueued++, m.always(function () {
      m.always(function () {
        g.unqueued--, r.queue(a, "fx").length || g.empty.fire()
      })
    }));
    for (d in b)if (e = b[d], cb.test(e)) {
      if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
        if ("show" !== e || !q || void 0 === q[d])continue;
        p = !0
      }
      n[d] = q && q[d] || r.style(a, d)
    }
    if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
      l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
        o.display = j
      }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
      })), i = !1;
      for (d in n)i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", {display: j}), f && (q.hidden = !p), p && ia([a], !0), m.done(function () {
        p || ia([a]), W.remove(a, "fxshow");
        for (d in n)r.style(a, d, n[d])
      })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
    }
  }

  function jb(a, b) {
    var c, d, e, f, g;
    for (c in a)if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
      f = g.expand(f), delete a[d];
      for (c in f)c in a || (a[c] = f[c], b[c] = e)
    } else b[d] = e
  }

  function kb(a, b, c) {
    var d, e, f = 0, g = kb.prefilters.length, h = r.Deferred().always(function () {
      delete i.elem
    }), i = function () {
      if (e)return !1;
      for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++)j.tweens[g].run(f);
      return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
    }, j = h.promise({
      elem: a,
      props: r.extend({}, b),
      opts: r.extend(!0, {specialEasing: {}, easing: r.easing._default}, c),
      originalProperties: b,
      originalOptions: c,
      startTime: ab || fb(),
      duration: c.duration,
      tweens: [],
      createTween: function (b, c) {
        var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
        return j.tweens.push(d), d
      },
      stop: function (b) {
        var c = 0, d = b ? j.tweens.length : 0;
        if (e)return this;
        for (e = !0; c < d; c++)j.tweens[c].run(1);
        return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
      }
    }), k = j.props;
    for (jb(k, j.opts.specialEasing); f < g; f++)if (d = kb.prefilters[f].call(j, a, k, j.opts))return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
    return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j
  }

  r.Animation = r.extend(kb, {
    tweeners: {
      "*": [function (a, b) {
        var c = this.createTween(a, b);
        return fa(c.elem, a, ba.exec(b), c), c
      }]
    }, tweener: function (a, b) {
      r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L);
      for (var c, d = 0, e = a.length; d < e; d++)c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b)
    }, prefilters: [ib], prefilter: function (a, b) {
      b ? kb.prefilters.unshift(a) : kb.prefilters.push(a)
    }
  }), r.speed = function (a, b, c) {
    var d = a && "object" == typeof a ? r.extend({}, a) : {
      complete: c || !c && b || r.isFunction(a) && a,
      duration: a,
      easing: c && b || b && !r.isFunction(b) && b
    };
    return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue)
    }, d
  }, r.fn.extend({
    fadeTo: function (a, b, c, d) {
      return this.filter(da).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
    }, animate: function (a, b, c, d) {
      var e = r.isEmptyObject(a), f = r.speed(b, c, d), g = function () {
        var b = kb(this, r.extend({}, a), f);
        (e || W.get(this, "finish")) && b.stop(!0)
      };
      return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
    }, stop: function (a, b, c) {
      var d = function (a) {
        var b = a.stop;
        delete a.stop, b(c)
      };
      return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0, e = null != a && a + "queueHooks", f = r.timers, g = W.get(this);
        if (e) g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && db.test(e) && d(g[e]);
        for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        !b && c || r.dequeue(this, a)
      })
    }, finish: function (a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b, c = W.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = r.timers, g = d ? d.length : 0;
        for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        for (b = 0; b < g; b++)d[b] && d[b].finish && d[b].finish.call(this);
        delete c.finish
      })
    }
  }), r.each(["toggle", "show", "hide"], function (a, b) {
    var c = r.fn[b];
    r.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
    }
  }), r.each({
    slideDown: gb("show"),
    slideUp: gb("hide"),
    slideToggle: gb("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function (a, b) {
    r.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d)
    }
  }), r.timers = [], r.fx.tick = function () {
    var a, b = 0, c = r.timers;
    for (ab = r.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    c.length || r.fx.stop(), ab = void 0
  }, r.fx.timer = function (a) {
    r.timers.push(a), r.fx.start()
  }, r.fx.interval = 13, r.fx.start = function () {
    bb || (bb = !0, eb())
  }, r.fx.stop = function () {
    bb = null
  }, r.fx.speeds = {slow: 600, fast: 200, _default: 400}, r.fn.delay = function (b, c) {
    return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);
      d.stop = function () {
        a.clearTimeout(e)
      }
    })
  }, function () {
    var a = d.createElement("input"), b = d.createElement("select"), c = b.appendChild(d.createElement("option"));
    a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
  }();
  var lb, mb = r.expr.attrHandle;
  r.fn.extend({
    attr: function (a, b) {
      return T(this, r.attr, a, b, arguments.length > 1)
    }, removeAttr: function (a) {
      return this.each(function () {
        r.removeAttr(this, a)
      })
    }
  }), r.extend({
    attr: function (a, b, c) {
      var d, e, f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f)return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b),
          null == d ? void 0 : d))
    }, attrHooks: {
      type: {
        set: function (a, b) {
          if (!o.radioValue && "radio" === b && B(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
          }
        }
      }
    }, removeAttr: function (a, b) {
      var c, d = 0, e = b && b.match(L);
      if (e && 1 === a.nodeType)while (c = e[d++])a.removeAttribute(c)
    }
  }), lb = {
    set: function (a, b, c) {
      return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c
    }
  }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = mb[b] || r.find.attr;
    mb[b] = function (a, b, d) {
      var e, f, g = b.toLowerCase();
      return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e
    }
  });
  var nb = /^(?:input|select|textarea|button)$/i, ob = /^(?:a|area)$/i;
  r.fn.extend({
    prop: function (a, b) {
      return T(this, r.prop, a, b, arguments.length > 1)
    }, removeProp: function (a) {
      return this.each(function () {
        delete this[r.propFix[a] || a]
      })
    }
  }), r.extend({
    prop: function (a, b, c) {
      var d, e, f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f)return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
    }, propHooks: {
      tabIndex: {
        get: function (a) {
          var b = r.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1
        }
      }
    }, propFix: {"for": "htmlFor", "class": "className"}
  }), o.optSelected || (r.propHooks.selected = {
    get: function (a) {
      var b = a.parentNode;
      return b && b.parentNode && b.parentNode.selectedIndex, null
    }, set: function (a) {
      var b = a.parentNode;
      b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
    }
  }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    r.propFix[this.toLowerCase()] = this
  });
  function pb(a) {
    var b = a.match(L) || [];
    return b.join(" ")
  }

  function qb(a) {
    return a.getAttribute && a.getAttribute("class") || ""
  }

  r.fn.extend({
    addClass: function (a) {
      var b, c, d, e, f, g, h, i = 0;
      if (r.isFunction(a))return this.each(function (b) {
        r(this).addClass(a.call(this, b, qb(this)))
      });
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while (c = this[i++])if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
          g = 0;
          while (f = b[g++])d.indexOf(" " + f + " ") < 0 && (d += f + " ");
          h = pb(d), e !== h && c.setAttribute("class", h)
        }
      }
      return this
    }, removeClass: function (a) {
      var b, c, d, e, f, g, h, i = 0;
      if (r.isFunction(a))return this.each(function (b) {
        r(this).removeClass(a.call(this, b, qb(this)))
      });
      if (!arguments.length)return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while (c = this[i++])if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
          g = 0;
          while (f = b[g++])while (d.indexOf(" " + f + " ") > -1)d = d.replace(" " + f + " ", " ");
          h = pb(d), e !== h && c.setAttribute("class", h)
        }
      }
      return this
    }, toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
        r(this).toggleClass(a.call(this, c, qb(this), b), b)
      }) : this.each(function () {
        var b, d, e, f;
        if ("string" === c) {
          d = 0, e = r(this), f = a.match(L) || [];
          while (b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
        } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""))
      })
    }, hasClass: function (a) {
      var b, c, d = 0;
      b = " " + a + " ";
      while (c = this[d++])if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1)return !0;
      return !1
    }
  });
  var rb = /\r/g;
  r.fn.extend({
    val: function (a) {
      var b, c, d, e = this[0];
      {
        if (arguments.length)return d = r.isFunction(a), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function (a) {
                return null == a ? "" : a + ""
              })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
        });
        if (e)return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
      }
    }
  }), r.extend({
    valHooks: {
      option: {
        get: function (a) {
          var b = r.find.attr(a, "value");
          return null != b ? b : pb(r.text(a))
        }
      }, select: {
        get: function (a) {
          var b, c, d, e = a.options, f = a.selectedIndex, g = "select-one" === a.type, h = g ? null : [],
              i = g ? f + 1 : e.length;
          for (d = f < 0 ? i : g ? f : 0; d < i; d++)if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
            if (b = r(c).val(), g)return b;
            h.push(b)
          }
          return h
        }, set: function (a, b) {
          var c, d, e = a.options, f = r.makeArray(b), g = e.length;
          while (g--)d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
          return c || (a.selectedIndex = -1), f
        }
      }
    }
  }), r.each(["radio", "checkbox"], function () {
    r.valHooks[this] = {
      set: function (a, b) {
        if (Array.isArray(b))return a.checked = r.inArray(r(a).val(), b) > -1
      }
    }, o.checkOn || (r.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value
    })
  });
  var sb = /^(?:focusinfocus|focusoutblur)$/;
  r.extend(r.event, {
    trigger: function (b, c, e, f) {
      var g, h, i, j, k, m, n, o = [e || d], p = l.call(b, "type") ? b.type : b,
          q = l.call(b, "namespace") ? b.namespace.split(".") : [];
      if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode)o.push(h), i = h;
          i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
        }
        g = 0;
        while ((h = o[g++]) && !b.isPropagationStopped())b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
      }
    }, simulate: function (a, b, c) {
      var d = r.extend(new r.Event, c, {type: a, isSimulated: !0});
      r.event.trigger(d, null, b)
    }
  }), r.fn.extend({
    trigger: function (a, b) {
      return this.each(function () {
        r.event.trigger(a, b, this)
      })
    }, triggerHandler: function (a, b) {
      var c = this[0];
      if (c)return r.event.trigger(a, b, c, !0)
    }
  }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
    r.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), r.fn.extend({
    hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    }
  }), o.focusin = "onfocusin" in a, o.focusin || r.each({focus: "focusin", blur: "focusout"}, function (a, b) {
    var c = function (a) {
      r.event.simulate(b, a.target, r.event.fix(a))
    };
    r.event.special[b] = {
      setup: function () {
        var d = this.ownerDocument || this, e = W.access(d, b);
        e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1)
      }, teardown: function () {
        var d = this.ownerDocument || this, e = W.access(d, b) - 1;
        e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b))
      }
    }
  });
  var tb = a.location, ub = r.now(), vb = /\?/;
  r.parseXML = function (b) {
    var c;
    if (!b || "string" != typeof b)return null;
    try {
      c = (new a.DOMParser).parseFromString(b, "text/xml")
    } catch (d) {
      c = void 0
    }
    return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c
  };
  var wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i,
      zb = /^(?:input|select|textarea|keygen)/i;

  function Ab(a, b, c, d) {
    var e;
    if (Array.isArray(b)) r.each(b, function (b, e) {
      c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
    }); else if (c || "object" !== r.type(b)) d(a, b); else for (e in b)Ab(a + "[" + e + "]", b[e], c, d)
  }

  r.param = function (a, b) {
    var c, d = [], e = function (a, b) {
      var c = r.isFunction(b) ? b() : b;
      d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
    };
    if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
      e(this.name, this.value)
    }); else for (c in a)Ab(c, a[c], b, e);
    return d.join("&")
  }, r.fn.extend({
    serialize: function () {
      return r.param(this.serializeArray())
    }, serializeArray: function () {
      return this.map(function () {
        var a = r.prop(this, "elements");
        return a ? r.makeArray(a) : this
      }).filter(function () {
        var a = this.type;
        return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a))
      }).map(function (a, b) {
        var c = r(this).val();
        return null == c ? null : Array.isArray(c) ? r.map(c, function (a) {
          return {name: b.name, value: a.replace(xb, "\r\n")}
        }) : {name: b.name, value: c.replace(xb, "\r\n")}
      }).get()
    }
  });
  var Bb = /%20/g, Cb = /#.*$/, Db = /([?&])_=[^&]*/, Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Gb = /^(?:GET|HEAD)$/, Hb = /^\/\//, Ib = {},
      Jb = {}, Kb = "*/".concat("*"), Lb = d.createElement("a");
  Lb.href = tb.href;
  function Mb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0, f = b.toLowerCase().match(L) || [];
      if (r.isFunction(c))while (d = f[e++])"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function Nb(a, b, c, d) {
    var e = {}, f = a === Jb;

    function g(h) {
      var i;
      return e[h] = !0, r.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
      }), i
    }

    return g(b.dataTypes[0]) || !e["*"] && g("*")
  }

  function Ob(a, b) {
    var c, d, e = r.ajaxSettings.flatOptions || {};
    for (c in b)void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && r.extend(!0, a, d), a
  }

  function Pb(a, b, c) {
    var d, e, f, g, h = a.contents, i = a.dataTypes;
    while ("*" === i[0])i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)for (e in h)if (h[e] && h[e].test(d)) {
      i.unshift(e);
      break
    }
    if (i[0] in c) f = i[0]; else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break
        }
        g || (g = e)
      }
      f = f || g
    }
    if (f)return f !== i[0] && i.unshift(f), c[f]
  }

  function Qb(a, b, c, d) {
    var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
    if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f) f = i; else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
        break
      }
      if (g !== !0)if (g && a["throws"]) b = g(b); else try {
        b = g(b)
      } catch (l) {
        return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
      }
    }
    return {state: "success", data: b}
  }

  r.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: tb.href,
      type: "GET",
      isLocal: Fb.test(tb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Kb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
      responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
      converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML},
      flatOptions: {url: !0, context: !0}
    },
    ajaxSetup: function (a, b) {
      return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a)
    },
    ajaxPrefilter: Mb(Ib),
    ajaxTransport: Mb(Jb),
    ajax: function (b, c) {
      "object" == typeof b && (c = b, b = void 0), c = c || {};
      var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c), p = o.context || o,
          q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event, s = r.Deferred(), t = r.Callbacks("once memory"),
          u = o.statusCode || {}, v = {}, w = {}, x = "canceled", y = {
            readyState: 0, getResponseHeader: function (a) {
              var b;
              if (k) {
                if (!h) {
                  h = {};
                  while (b = Eb.exec(g))h[b[1].toLowerCase()] = b[2]
                }
                b = h[a.toLowerCase()]
              }
              return null == b ? null : b
            }, getAllResponseHeaders: function () {
              return k ? g : null
            }, setRequestHeader: function (a, b) {
              return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this
            }, overrideMimeType: function (a) {
              return null == k && (o.mimeType = a), this
            }, statusCode: function (a) {
              var b;
              if (a)if (k) y.always(a[y.status]); else for (b in a)u[b] = [u[b], a[b]];
              return this
            }, abort: function (a) {
              var b = a || x;
              return e && e.abort(b), A(0, b), this
            }
          };
      if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
        j = d.createElement("a");
        try {
          j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host
        } catch (z) {
          o.crossDomain = !0
        }
      }
      if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k)return y;
      l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);
      for (m in o.headers)y.setRequestHeader(m, o.headers[m]);
      if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k))return y.abort();
      if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
        if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k)return y;
        o.async && o.timeout > 0 && (i = a.setTimeout(function () {
          y.abort("timeout")
        }, o.timeout));
        try {
          k = !1, e.send(v, A)
        } catch (z) {
          if (k)throw z;
          A(-1, z)
        }
      } else A(-1, "No Transport");
      function A(b, c, d, h) {
        var j, m, n, v, w, x = c;
        k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
      }

      return y
    },
    getJSON: function (a, b, c) {
      return r.get(a, b, c, "json")
    },
    getScript: function (a, b) {
      return r.get(a, void 0, b, "script")
    }
  }), r.each(["get", "post"], function (a, b) {
    r[b] = function (a, c, d, e) {
      return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      }, r.isPlainObject(a) && a))
    }
  }), r._evalUrl = function (a) {
    return r.ajax({url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
  }, r.fn.extend({
    wrapAll: function (a) {
      var b;
      return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;
        while (a.firstElementChild)a = a.firstElementChild;
        return a
      }).append(this)), this
    }, wrapInner: function (a) {
      return r.isFunction(a) ? this.each(function (b) {
        r(this).wrapInner(a.call(this, b))
      }) : this.each(function () {
        var b = r(this), c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a)
      })
    }, wrap: function (a) {
      var b = r.isFunction(a);
      return this.each(function (c) {
        r(this).wrapAll(b ? a.call(this, c) : a)
      })
    }, unwrap: function (a) {
      return this.parent(a).not("body").each(function () {
        r(this).replaceWith(this.childNodes)
      }), this
    }
  }), r.expr.pseudos.hidden = function (a) {
    return !r.expr.pseudos.visible(a)
  }, r.expr.pseudos.visible = function (a) {
    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
  }, r.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest
    } catch (b) {
    }
  };
  var Rb = {0: 200, 1223: 204}, Sb = r.ajaxSettings.xhr();
  o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function (b) {
    var c, d;
    if (o.cors || Sb && !b.crossDomain)return {
      send: function (e, f) {
        var g, h = b.xhr();
        if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)for (g in b.xhrFields)h[g] = b.xhrFields[g];
        b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
        for (g in e)h.setRequestHeader(g, e[g]);
        c = function (a) {
          return function () {
            c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {binary: h.response} : {text: h.responseText}, h.getAllResponseHeaders()))
          }
        }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            c && d()
          })
        }, c = c("abort");
        try {
          h.send(b.hasContent && b.data || null)
        } catch (i) {
          if (c)throw i
        }
      }, abort: function () {
        c && c()
      }
    }
  }), r.ajaxPrefilter(function (a) {
    a.crossDomain && (a.contents.script = !1)
  }), r.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
    contents: {script: /\b(?:java|ecma)script\b/},
    converters: {
      "text script": function (a) {
        return r.globalEval(a), a
      }
    }
  }), r.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
  }), r.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, c;
      return {
        send: function (e, f) {
          b = r("<script>").prop({charset: a.scriptCharset, src: a.url}).on("load error", c = function (a) {
            b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
          }), d.head.appendChild(b[0])
        }, abort: function () {
          c && c()
        }
      }
    }
  });
  var Tb = [], Ub = /(=)\?(?=&|$)|\?\?/;
  r.ajaxSetup({
    jsonp: "callback", jsonpCallback: function () {
      var a = Tb.pop() || r.expando + "_" + ub++;
      return this[a] = !0, a
    }
  }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e, f, g,
        h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");
    if (h || "jsonp" === b.dataTypes[0])return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || r.error(e + " was not called"), g[0]
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments
    }, d.always(function () {
      void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0
    }), "script"
  }), o.createHTMLDocument = function () {
    var a = d.implementation.createHTMLDocument("").body;
    return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
  }(), r.parseHTML = function (a, b, c) {
    if ("string" != typeof a)return [];
    "boolean" == typeof b && (c = b, b = !1);
    var e, f, g;
    return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes))
  }, r.fn.load = function (a, b, c) {
    var d, e, f, g = this, h = a.indexOf(" ");
    return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({
      url: a,
      type: e || "GET",
      dataType: "html",
      data: b
    }).done(function (a) {
      f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
    }).always(c && function (a, b) {
          g.each(function () {
            c.apply(this, f || [a.responseText, b, a])
          })
        }), this
  }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    r.fn[b] = function (a) {
      return this.on(b, a)
    }
  }), r.expr.pseudos.animated = function (a) {
    return r.grep(r.timers, function (b) {
      return a === b.elem
    }).length
  }, r.offset = {
    setOffset: function (a, b, c) {
      var d, e, f, g, h, i, j, k = r.css(a, "position"), l = r(a), m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
    }
  }, r.fn.extend({
    offset: function (a) {
      if (arguments.length)return void 0 === a ? this : this.each(function (b) {
        r.offset.setOffset(this, a, b)
      });
      var b, c, d, e, f = this[0];
      if (f)return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, {
        top: d.top + e.pageYOffset - c.clientTop,
        left: d.left + e.pageXOffset - c.clientLeft
      }) : {top: 0, left: 0}
    }, position: function () {
      if (this[0]) {
        var a, b, c = this[0], d = {top: 0, left: 0};
        return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = {
          top: d.top + r.css(a[0], "borderTopWidth", !0),
          left: d.left + r.css(a[0], "borderLeftWidth", !0)
        }), {top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0)}
      }
    }, offsetParent: function () {
      return this.map(function () {
        var a = this.offsetParent;
        while (a && "static" === r.css(a, "position"))a = a.offsetParent;
        return a || ra
      })
    }
  }), r.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
    var c = "pageYOffset" === b;
    r.fn[a] = function (d) {
      return T(this, function (a, d, e) {
        var f;
        return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
      }, a, d, arguments.length)
    }
  }), r.each(["top", "left"], function (a, b) {
    r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
      if (c)return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c
    })
  }), r.each({Height: "height", Width: "width"}, function (a, b) {
    r.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
      r.fn[d] = function (e, f) {
        var g = arguments.length && (c || "boolean" != typeof e), h = c || (e === !0 || f === !0 ? "margin" : "border");
        return T(this, function (b, c, e) {
          var f;
          return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
        }, b, g ? e : void 0, g)
      }
    })
  }), r.fn.extend({
    bind: function (a, b, c) {
      return this.on(a, null, b, c)
    }, unbind: function (a, b) {
      return this.off(a, null, b)
    }, delegate: function (a, b, c, d) {
      return this.on(b, a, c, d)
    }, undelegate: function (a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }
  }), r.holdReady = function (a) {
    a ? r.readyWait++ : r.ready(!0)
  }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function () {
    return r
  });
  var Vb = a.jQuery, Wb = a.$;
  return r.noConflict = function (b) {
    return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r
  }, b || (a.jQuery = a.$ = r), r
});
/**
 * @license almond 0.3.2 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
  !(function () {
    if (!window.XtApp) {
      function XtApp() {
        this._middle = []
      }

      XtApp.prototype.use = function (handler) {
        this._middle.push(handler)
      }
      XtApp.prototype.handleMsg = function (msg) {
        try {
          this._middle.reduce(function (prev, cur, i, arr) {
            if (prev.then) {
              // promise
              return prev.then(function () {
                return cur(msg)
              })
            } else {
              // bool
              if (prev) {
                return cur(msg)
              } else {
                // 拦截后续请求
                return false
              }
            }
          }, true)
        } catch (e) {
          debugger
        }
      }
      // TODO 嵌入额外处理程序
      window.xtApp = new XtApp()
    }
  })()


  var main, req, makeMap, handlers,
      defined = {},
      waiting = {},
      config = {},
      defining = {},
      hasOwn = Object.prototype.hasOwnProperty,
      aps = [].slice,
      jsSuffixRegExp = /\.js$/;

  function hasProp(obj, prop) {
    return hasOwn.call(obj, prop);
  }

  /**
   * Given a relative module name, like ./something, normalize it to
   * a real name that can be mapped to a path.
   * @param {String} name the relative name
   * @param {String} baseName a real name that the name arg is relative
   * to.
   * @returns {String} normalized name
   */
  function normalize(name, baseName) {
    var nameParts, nameSegment, mapValue, foundMap, lastIndex,
        foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,
        baseParts = baseName && baseName.split("/"),
        map = config.map,
        starMap = (map && map['*']) || {};

    //Adjust any relative paths.
    if (name) {
      name = name.split('/');
      lastIndex = name.length - 1;

      // If wanting node ID compatibility, strip .js from end
      // of IDs. Have to do this here, and not in nameToUrl
      // because node allows either .js or non .js to map
      // to same file.
      if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
        name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
      }

      // Starts with a '.' so need the baseName
      if (name[0].charAt(0) === '.' && baseParts) {
        //Convert baseName to array, and lop off the last part,
        //so that . matches that 'directory' and not name of the baseName's
        //module. For instance, baseName of 'one/two/three', maps to
        //'one/two/three.js', but we want the directory, 'one/two' for
        //this normalization.
        normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
        name = normalizedBaseParts.concat(name);
      }

      //start trimDots
      for (i = 0; i < name.length; i++) {
        part = name[i];
        if (part === '.') {
          name.splice(i, 1);
          i -= 1;
        } else if (part === '..') {
          // If at the start, or previous value is still ..,
          // keep them so that when converted to a path it may
          // still work when converted to a path, even though
          // as an ID it is less than ideal. In larger point
          // releases, may be better to just kick out an error.
          if (i === 0 || (i === 1 && name[2] === '..') || name[i - 1] === '..') {
            continue;
          } else if (i > 0) {
            name.splice(i - 1, 2);
            i -= 2;
          }
        }
      }
      //end trimDots

      name = name.join('/');
    }

    //Apply map config if available.
    if ((baseParts || starMap) && map) {
      nameParts = name.split('/');

      for (i = nameParts.length; i > 0; i -= 1) {
        nameSegment = nameParts.slice(0, i).join("/");

        if (baseParts) {
          //Find the longest baseName segment match in the config.
          //So, do joins on the biggest to smallest lengths of baseParts.
          for (j = baseParts.length; j > 0; j -= 1) {
            mapValue = map[baseParts.slice(0, j).join('/')];

            //baseName segment has  config, find if it has one for
            //this name.
            if (mapValue) {
              mapValue = mapValue[nameSegment];
              if (mapValue) {
                //Match, update name to the new value.
                foundMap = mapValue;
                foundI = i;
                break;
              }
            }
          }
        }

        if (foundMap) {
          break;
        }

        //Check for a star map match, but just hold on to it,
        //if there is a shorter segment match later in a matching
        //config, then favor over this star map.
        if (!foundStarMap && starMap && starMap[nameSegment]) {
          foundStarMap = starMap[nameSegment];
          starI = i;
        }
      }

      if (!foundMap && foundStarMap) {
        foundMap = foundStarMap;
        foundI = starI;
      }

      if (foundMap) {
        nameParts.splice(0, foundI, foundMap);
        name = nameParts.join('/');
      }
    }

    return name;
  }

  function makeRequire(relName, forceSync) {
    return function () {
      //A version of a require function that passes a moduleName
      //value for items that may need to
      //look up paths relative to the moduleName
      var args = aps.call(arguments, 0);

      //If first arg is not require('string'), and there is only
      //one arg, it is the array form without a callback. Insert
      //a null so that the following concat is correct.
      if (typeof args[0] !== 'string' && args.length === 1) {
        args.push(null);
      }
      return req.apply(undef, args.concat([relName, forceSync]));
    };
  }

  function makeNormalize(relName) {
    return function (name) {
      return normalize(name, relName);
    };
  }

  function makeLoad(depName) {
    return function (value) {
      defined[depName] = value;
    };
  }

  function callDep(name) {
    if (hasProp(waiting, name)) {
      var args = waiting[name];
      delete waiting[name];
      defining[name] = true;
      main.apply(undef, args);
    }

    if (!hasProp(defined, name) && !hasProp(defining, name)) {
      throw new Error('No ' + name);
    }
    return defined[name];
  }

  //Turns a plugin!resource to [plugin, resource]
  //with the plugin being undefined if the name
  //did not have a plugin prefix.
  function splitPrefix(name) {
    var prefix,
        index = name ? name.indexOf('!') : -1;
    if (index > -1) {
      prefix = name.substring(0, index);
      name = name.substring(index + 1, name.length);
    }
    return [prefix, name];
  }

  /**
   * Makes a name map, normalizing the name, and using a plugin
   * for normalization if necessary. Grabs a ref to plugin
   * too, as an optimization.
   */
  makeMap = function (name, relName) {
    var plugin,
        parts = splitPrefix(name),
        prefix = parts[0];

    name = parts[1];

    if (prefix) {
      prefix = normalize(prefix, relName);
      plugin = callDep(prefix);
    }

    //Normalize according
    if (prefix) {
      if (plugin && plugin.normalize) {
        name = plugin.normalize(name, makeNormalize(relName));
      } else {
        name = normalize(name, relName);
      }
    } else {
      name = normalize(name, relName);
      parts = splitPrefix(name);
      prefix = parts[0];
      name = parts[1];
      if (prefix) {
        plugin = callDep(prefix);
      }
    }

    //Using ridiculous property names for space reasons
    return {
      f: prefix ? prefix + '!' + name : name, //fullName
      n: name,
      pr: prefix,
      p: plugin
    };
  };

  function makeConfig(name) {
    return function () {
      return (config && config.config && config.config[name]) || {};
    };
  }

  handlers = {
    require: function (name) {
      return makeRequire(name);
    },
    exports: function (name) {
      var e = defined[name];
      if (typeof e !== 'undefined') {
        return e;
      } else {
        return (defined[name] = {});
      }
    },
    module: function (name) {
      return {
        id: name,
        uri: '',
        exports: defined[name],
        config: makeConfig(name)
      };
    }
  };

  main = function (name, deps, callback, relName) {
    var cjsModule, depName, ret, map, i,
        args = [],
        callbackType = typeof callback,
        usingExports;

    //Use name if no relName
    relName = relName || name;

    //Call the callback to define the module, if necessary.
    if (callbackType === 'undefined' || callbackType === 'function') {
      //Pull out the defined dependencies and pass the ordered
      //values to the callback.
      //Default to [require, exports, module] if no deps
      deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
      for (i = 0; i < deps.length; i += 1) {
        map = makeMap(deps[i], relName);
        depName = map.f;

        //Fast path CommonJS standard dependencies.
        if (depName === "require") {
          args[i] = handlers.require(name);
        } else if (depName === "exports") {
          //CommonJS module spec 1.1
          args[i] = handlers.exports(name);
          usingExports = true;
        } else if (depName === "module") {
          //CommonJS module spec 1.1
          cjsModule = args[i] = handlers.module(name);
        } else if (hasProp(defined, depName) ||
            hasProp(waiting, depName) ||
            hasProp(defining, depName)) {
          args[i] = callDep(depName);
        } else if (map.p) {
          map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
          args[i] = defined[depName];
        } else {
          throw new Error(name + ' missing ' + depName);
        }
      }

      ret = callback ? callback.apply(defined[name], args) : undefined;

      if (name) {
        //If setting exports via "module" is in play,
        //favor that over return value and exports. After that,
        //favor a non-undefined return value over exports use.
        if (cjsModule && cjsModule.exports !== undef &&
            cjsModule.exports !== defined[name]) {
          defined[name] = cjsModule.exports;
        } else if (ret !== undef || !usingExports) {
          //Use the return value from the function.
          defined[name] = ret;
        }
      }
    } else if (name) {
      //May just be an object definition for the module. Only
      //worry about defining if have a module name.
      defined[name] = callback;
    }
  };

  requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
    if (typeof deps === "string") {
      if (handlers[deps]) {
        //callback in this case is really relName
        return handlers[deps](callback);
      }
      //Just return the module wanted. In this scenario, the
      //deps arg is the module name, and second arg (if passed)
      //is just the relName.
      //Normalize module name, if it contains . or ..
      return callDep(makeMap(deps, callback).f);
    } else if (!deps.splice) {
      //deps is a config object, not an array.
      config = deps;
      if (config.deps) {
        req(config.deps, config.callback);
      }
      if (!callback) {
        return;
      }

      if (callback.splice) {
        //callback is an array, which means it is a dependency list.
        //Adjust args if there are dependencies
        deps = callback;
        callback = relName;
        relName = null;
      } else {
        deps = undef;
      }
    }

    //Support require(['a'])
    callback = callback || function () {
        };

    //If relName is a function, it is an errback handler,
    //so remove it.
    if (typeof relName === 'function') {
      relName = forceSync;
      forceSync = alt;
    }

    //Simulate async callback;
    if (forceSync) {
      main(undef, deps, callback, relName);
    } else {
      //Using a non-zero value because of concern for what old browsers
      //do, and latest browsers "upgrade" to 4 if lower value is used:
      //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
      //If want a value immediately, use require('id') instead -- something
      //that works in almond on the global level, but not guaranteed and
      //unlikely to work in other AMD implementations.
      setTimeout(function () {
        main(undef, deps, callback, relName);
      }, 4);
    }

    return req;
  };

  /**
   * Just drops the config on the floor, but returns req in case
   * the config return value is used.
   */
  req.config = function (cfg) {
    return req(cfg);
  };

  /**
   * Expose module registry for debugging and tooling
   */
  requirejs._defined = defined;

  define = function (name, deps, callback) {
    if (typeof name !== 'string') {
      throw new Error('See almond README: incorrect module build, no module name');
    }

    //This module may not have dependencies
    if (!deps.splice) {
      //deps is not an array, so probably means
      //an object literal or factory function for
      //the value. Adjust args.
      callback = deps;
      deps = [];
    }

    if (!hasProp(defined, name) && !hasProp(waiting, name)) {
      waiting[name] = [name, deps, callback];
    }
  };

  define.amd = {
    jQuery: true
  };
}());

define("requireLib", function () {
});

//base
(function () {
  var J = {
    $namespace: function (name) {
      if (!name) {
        return window;
      }

      nsArr = name.split(".");
      var ns = window;

      for (i = 0 , l = nsArr.length; i < l; i++) {
        var n = nsArr[i];
        ns[n] = ns[n] || {};
        ns = ns[n];
      }

      return ns;
    },
    $package: function (ns, func) {
      var target;
      if (typeof ns == "function") {
        func = ns;
        target = window;
      }
      else if (typeof ns == "string") {
        target = this.$namespace(ns);
      }
      else if (typeof ns == "object") {
        target = ns;
      }
      func.call(target, this);
    },
    extend: function (destination, source) {
      for (var n in source) {
        if (source.hasOwnProperty(n)) {
          destination[n] = source[n];
        }
      }
      return destination;
    },
    bind: function (func, context, var_args) {
      var slice = [].slice;
      var a = slice.call(arguments, 2);
      return function () {
        return func.apply(context, a.concat(slice.call(arguments)));
      };
    },
    Class: function () {
      var length = arguments.length;
      var option = arguments[length - 1];
      option.init = option.init || function () {
          };

      if (length === 2) {
        var superClass = arguments[0].extend;

        var tempClass = function () {
        };
        tempClass.prototype = superClass.prototype;

        var subClass = function () {
          return new subClass.prototype._init(arguments);
        }

        subClass.superClass = superClass.prototype;
        subClass.callSuper = function (context, func) {
          var slice = Array.prototype.slice;
          var a = slice.call(arguments, 2);
          var func = subClass.superClass[func];

          if (func) {
            func.apply(context, a.concat(slice.call(arguments)));
          }
        };
        subClass.prototype = new tempClass();
        subClass.prototype.constructor = subClass;

        J.extend(subClass.prototype, option);

        subClass.prototype._init = function (args) {
          this.init.apply(this, args);
        };
        subClass.prototype._init.prototype = subClass.prototype;
        return subClass;

      } else if (length === 1) {
        var newClass = function () {
          return new newClass.prototype._init(arguments);
        }
        newClass.prototype = option;
        newClass.prototype._init = function (arg) {
          this.init.apply(this, arg);
        };
        newClass.prototype.constructor = newClass;
        newClass.prototype._init.prototype = newClass.prototype;
        return newClass;
      }
    },
    // Convert pseudo array object to real array
    toArray: function (pseudoArrayObj) {
      var arr = [], i, l;
      try {
        return arr.slice.call(pseudoArrayObj);
      }
      catch (e) {
        arr = [];
        for (i = 0, l = pseudoArrayObj.length; i < l; ++i) {
          arr[i] = pseudoArrayObj[i];
        }
        return arr;
      }
    },
    indexOf: function (arr, elem) {
      var $T = J.type;
      //数组或类数组对象
      if (arr.length) {
        return [].indexOf.call(arr, elem);
      }
      else if ($T.isObject(arr)) {
        for (var i in arr) {
          if (arr.hasOwnProperty(i) && arr[i] === elem) {
            return i;
          }
        }
      }
    },
    every: function (arr, callback) {
      if (arr.length) {
        return [].every.call(arr, callback);
      }
      else if ($T.isObject(arr)) {
        var flag = true;
        this.each(arr, function (e, i, arr) {
          if (!callback(e, i, arr)) flag = false;
        });
        return flag;
      }
    },
    some: function (arr, callback) {
      if (arr.length) {
        return [].some.call(arr, callback);
      }
      else if ($T.isObject(arr)) {
        var flag = false;
        this.each(arr, function (e, i, arr) {
          if (callback(e, i, arr)) flag = true;
        });
        return flag;
      }
    },
    each: function (arr, callback) {
      var $T = J.type;
      if (arr.length) {
        return [].forEach.call(arr, callback);
      }
      else if ($T.isObject(arr)) {
        for (var i in arr) {
          if (arr.hasOwnProperty(i))
            if (callback.call(arr[i], arr[i], i, arr) === false) return;
        }
      }
    },
    map: function (arr, callback) {
      var $T = J.type;
      if (arr.length) {
        [].map.call(arr, callback);
      }
      else if ($T.isObject(arr)) {
        for (var i in arr) {
          if (arr.hasOwnProperty(i))
            arr[i] = callback.call(arr[i], arr[i], i, arr);
        }
      }
    },
    filter: function (arr, callback) {
      var $T = J.type;
      if (arr.length) {
        return [].filter.call(arr, callback);
      }
      else if ($T.isObject(arr)) {
        var newObj = {};
        this.each(arr, function (e, i) {
          if (callback(e, i)) {
            newObj[i] = e;
          }
        });
        return newObj;
      }
    },
    isEmptyObject: function (obj) {
      for (var n in obj) {
        return false;
      }
      return true;
    },
    random: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    $default: function (value, defaultValue) {
      if (typeof value === 'undefined') {
        return defaultValue;
      }
      return value;
    }

  }
  window.JM = window.J = J;
})();
//connection
J.$package(function (J) {
  var c = navigator.connection || {type: 0};
  var ct = ["unknow", "ethernet", "wifi", "cell_2g", "cell_3g"];
  J.connectType = ct[c.type];
});
//type
J.$package(function (J) {

  var ots = Object.prototype.toString;

  var type = {
    isArray: function (o) {
      return o && (o.constructor === Array || ots.call(o) === "[object Array]");
    },
    isObject: function (o) {
      return o && (o.constructor === Object || ots.call(o) === "[object Object]");
    },
    isBoolean: function (o) {
      return (o === false || o) && (o.constructor === Boolean);
    },
    isNumber: function (o) {
      return (o === 0 || o) && o.constructor === Number;
    },
    isUndefined: function (o) {
      return typeof(o) === "undefined";
    },
    isNull: function (o) {
      return o === null;
    },
    isFunction: function (o) {
      return o && (o.constructor === Function);
    },
    isString: function (o) {
      return (o === "" || o) && (o.constructor === String);
    }
  }
  J.type = type;
});
//platform
J.$package(function (J) {
  var ua = navigator.userAgent;
  var platform = {};

  // return the IE version or -1
  function getIeVersion() {
    var retVal = -1,
        ua, re;
    if (navigator.appName === 'Microsoft Internet Explorer') {
      ua = navigator.userAgent;
      re = new RegExp('MSIE ([0-9]{1,})');
      if (re.exec(ua) !== null) {
        retVal = parseInt(RegExp.$1);
      }
    }
    return retVal;
  }

  platform.ieVersion = getIeVersion();
  platform.ie = platform.ieVersion !== -1;
  platform.android = ua.match(/Android/i) === null ? false : true;
  platform.iPhone = ua.match(/iPhone/i) === null ? false : true;
  platform.iPad = ua.match(/iPad/i) === null ? false : true;
  platform.iPod = ua.match(/iPod/i) === null ? false : true;
  platform.winPhone = ua.match(/Windows Phone/i) === null ? false : true;
  platform.IOS = platform.iPad || platform.iPhone;
  platform.touchDevice = "ontouchstart" in window;

  J.platform = platform;
});
//browser
J.$package(function (J) {
  var s, browser,
      ua = navigator.userAgent.toLowerCase(),
      plug = navigator.plugins;

  /**
   * @ignore
   * @param String ver
   * @param Number floatLength
   * @return Number
   */
  var toFixedVersion = function (ver, floatLength) {
    ver = ("" + ver).replace(/_/g, ".");
    floatLength = floatLength || 1;
    ver = String(ver).split(".");
    ver = ver[0] + "." + (ver[1] || "0");
    ver = Number(ver).toFixed(floatLength);
    return ver;
  };
  /**
   * browser 名字空间
   *
   * @namespace
   * @name browser
   */
  browser = {
    /**
     * @namespace
     * @name features
     * @memberOf browser
     */
    features: /**
     * @lends browser.features
     */
        {
          /**
           * @property xpath
           */
          xpath: !!(document.evaluate),

          /**
           * @property air
           */
          air: !!(window.runtime),

          /**
           * @property query
           */
          query: !!(document.querySelector)
        },

    /**
     * @namespace
     * @name plugins
     * @memberOf browser
     */
    plugins: /**
     * @lends browser.plugins
     */
        {
          flash: (function () {
            //var ver = "none";
            var ver = 0;
            if (plug && plug.length) {
              var flash = plug['Shockwave Flash'];
              if (flash && flash.description) {
                ver = toFixedVersion(flash.description.match(/\b(\d+)\.\d+\b/)[1], 1) || ver;
              }
            } else {
              var startVer = 13;
              while (startVer--) {
                try {
                  new ActiveXObject('ShockwaveFlash.ShockwaveFlash.' + startVer);
                  ver = toFixedVersion(startVer);
                  break;
                } catch (e) {
                }
              }
            }

            return ver;
          })()
        },

    /**
     * 获取浏览器的userAgent信息
     *
     * @memberOf browser
     */
    getUserAgent: function () {
      return ua;
    },

    /**
     * 用户使用的浏览器的名称，如：chrome
     *
     *
     * @description {String} 用户使用的浏览器的名称，如：chrome
     * @type Number
     */
    name: "unknown",

    /**
     * @property version
     * @lends browser
     */
    version: 0,

    /**
     * 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     *
     *
     * @description {Number} 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     * @type Number
     */
    ie: 0,

    /**
     * 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     *
     *
     * @description {Number} 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     * @type Number
     */
    firefox: 0,

    /**
     * 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     *
     *
     * @description {Number} 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     * @type Number
     */
    chrome: 0,


    /**
     * 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     *
     *
     * @description {Number} 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     * @type Number
     */
    opera: 0,

    /**
     * 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     *
     *
     * @description {Number} 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     * @type Number
     */
    safari: 0,

    /**
     * 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     *
     *
     * @description {Number} 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     * @type Number
     */
    mobileSafari: 0,

    /**
     * 用户使用的是否是adobe 的air内嵌浏览器
     */
    adobeAir: 0,

    /**
     * 是否支持css3的borderimage
     *
     * @description {boolean} 检测是否支持css3属性borderimage
     */
    //borderimage: false,

    /**
     * 设置浏览器类型和版本
     *
     * @ignore
     * @private
     * @memberOf browser
     *
     */
    set: function (name, ver) {
      this.name = name;
      this.version = ver;
      this[name] = ver;
    }
  };

  // 探测浏览器并存入 browser 对象
  (s = ua.match(/msie ([\d.]+)/)) ? browser.set("ie", toFixedVersion(s[1])) :
      (s = ua.match(/firefox\/([\d.]+)/)) ? browser.set("firefox", toFixedVersion(s[1])) :
          (s = ua.match(/chrome\/([\d.]+)/)) ? browser.set("chrome", toFixedVersion(s[1])) :
              (s = ua.match(/opera.([\d.]+)/)) ? browser.set("opera", toFixedVersion(s[1])) :
                  (s = ua.match(/adobeair\/([\d.]+)/)) ? browser.set("adobeAir", toFixedVersion(s[1])) :
                      (s = ua.match(/version\/([\d.]+).*safari/)) ? browser.set("safari", toFixedVersion(s[1])) : 0;


  J.browser = browser;

});
// detect vender prefix
J.$package(function (J) {
  var styles, pre, dom;

  if (window.getComputedStyle) {
    styles = window.getComputedStyle(document.documentElement, '');
    pre = (Array.prototype.slice
            .call(styles)
            .join('')
            .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
    )[1];
    dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];

    J.prefix = {
      dom: dom,
      lowercase: pre,
      css: '-' + pre + '-',
      js: pre
    };
  }
  // IE8- don't support `getComputedStyle`, so there is no prefix
  else {
    J.prefix = {
      dom: '',
      lowercase: '',
      css: '',
      js: ''
    }
  }
});
//dom
J.$package(function (J) {
  var doc = document,
      $T = J.type,
      tagNameExpr = /^[\w-]+$/,
      idExpr = /^#([\w-]*)$/,
      classExpr = /^\.([\w-]+)$/,
      selectorEngine;

  var hasClassListProperty = 'classList' in document.documentElement;
  var vendors = ['o', 'ms', 'moz', 'webkit'];
  var div = document.createElement('div');

  var $D = {

    $: function (selector, context) {
      var result;
      var qsa;
      context = context || doc;

      //优先使用原始的
      if (idExpr.test(selector)) {
        result = this.id(selector.replace("#", ""));
        if (result)  return [result];
        else return [];
      }
      else if (tagNameExpr.test(selector)) {
        result = this.tagName(selector, context);
      }
      else if (classExpr.test(selector)) {
        result = this.className(selector.replace(".", ""), context);
      }
      // //自定义选择器
      // else if(selectorEngine) result = selectorEngine(selector,context);
      //querySelectorAll
      else result = context.querySelectorAll(selector);


      //nodeList转为array
      return J.toArray(result);

    },
    id: function (id) {
      return doc.getElementById(id);
    },
    tagName: function (tagName, context) {
      context = context || doc;
      return context.getElementsByTagName(tagName);
    },
    node: function (name) {
      return doc.createElement(name);
    },
    className: function (className, context) {
      var children, elements, i, l, classNames;
      context = context || doc;
      if (context.getElementsByClassName) {
        return context.getElementsByClassName(className);
      }
      else {
        children = context.getElementsByTagName('*');
        elements = [];
        for (i = 0, l = children.length; i < l; ++i) {
          if (classNames = children[i].className
                  && J.indexOf(classNames.split(' '), className) >= 0) {
            elements.push(children[i]);
          }
        }
        return elements;
      }
    },
    remove: function (node) {
      var context = node.parentNode;
      if (context) context.removeChild(node);
    },
    setSelectorEngine: function (func) {
      selectorEngine = func;
    },
    matchesSelector: function (ele, selector) {
      if (!ele || !selector) return;
      var matchesSelector = ele.webkitMatchesSelector || ele.mozMatchesSelector || ele.oMatchesSelector || ele.matchesSelector;
      if (matchesSelector) return matchesSelector.call(ele, selector);
      var list = this.$(selector);
      if (J.indexOf(list, ele) > 0) return true;
      return false;
    },
    closest: function (elem, selector) {
      while (elem) {
        if ($D.matchesSelector(elem, selector)) {
          return elem;
        }
        elem = elem.parentNode;
      }
    },
    toDomStyle: function (cssStyle) {
      if (!$T.isString(cssStyle)) return;
      return cssStyle.replace(/\-[a-z]/g, function (m) {
        return m.charAt(1).toUpperCase();
      });
    },
    toCssStyle: function (domStyle) {
      if (!$T.isString(domStyle)) return;
      return domStyle.replace(/[A-Z]/g, function (m) {
        return '-' + m.toLowerCase();
      });
    },
    setStyle: function (elem, styleName, styleValue) {
      var self = this;
      if (elem.length) {
        J.each(elem, function (e) {
          self.setStyle(e, styleName, styleValue);
        });
        return;
      }
      if ($T.isObject(styleName)) {
        for (var n in styleName) {
          if (styleName.hasOwnProperty(n)) {
            elem.style[n] = styleName[n];
          }
        }
        return;
      }
      if ($T.isString(styleName)) {
        elem.style[styleName] = styleValue;
      }
    },
    /**
     *
     * 获取元素的当前实际样式，css 属性需要用驼峰式写法，如：fontFamily
     *
     * @method getStyle
     * @memberOf dom
     *
     * @param {Element} el 元素
     * @param {String} styleName css 属性名称
     * @return {String} 返回元素样式
     */
    getStyle: function (el, styleName) {
      if (!el) {
        return;
      }
      if (styleName === "float") {
        styleName = "cssFloat";
      }
      if (el.style[styleName]) {
        return el.style[styleName];
      } else if (window.getComputedStyle) {
        return window.getComputedStyle(el, null)[styleName];
      } else if (document.defaultView && document.defaultView.getComputedStyle) {
        styleName = styleName.replace(/([/A-Z])/g, "-$1");
        styleName = styleName.toLowerCase();
        var style = document.defaultView.getComputedStyle(el, "");
        return style && style.getPropertyValue(styleName);
      } else if (el.currentStyle) {
        return el.currentStyle[styleName];
      }

    },
    //获取带有出产商的属性名
    getVendorPropertyName: function (prop) {
      var style = div.style;
      var _prop;
      if (prop in style) return prop;
      // _prop = prop;
      _prop = prop.charAt(0).toUpperCase() + prop.substr(1);
      for (var i = vendors.length; i--;) {
        var v = vendors[i];
        var vendorProp = v + _prop;
        if (vendorProp in style) {
          return vendorProp;
        }
      }
    },
    //检测是否支持3D属性
    isSupprot3d: function () {
      // var transformStr = $D.getVendorPropertyName("transform");
      // $D.setStyle(div ,transformStr ,"rotatex(90deg)");
      // if(div.style[transformStr] == "") return false;
      // return true;
      var p_prop = $D.getVendorPropertyName("perspective");
      return p_prop && p_prop in div.style;
    },
    filterSelector: function (arr, selector) {
      return J.filter(arr, function (elem) {
        return $D.matchesSelector(elem, selector);
      });
    },
    addClass: (function () {
      if (hasClassListProperty) {
        return function (elem, className) {
          if (!elem || !className || $D.hasClass(elem, className)) {
            return;
          }
          elem.classList.add(className);
        };
      }
      else {
        return function (elem, className) {
          if (!elem || !className || $D.hasClass(elem, className)) {
            return;
          }
          elem.className += " " + className;
        }
      }
    })(),
    hasClass: (function () {
      if (hasClassListProperty) {
        return function (elem, className) {
          if (!elem || !className) {
            return false;
          }
          return elem.classList.contains(className);
        };
      } else {
        return function (elem, className) {
          if (!elem || !className) {
            return false;
          }
          return -1 < (' ' + elem.className + ' ').indexOf(' ' + className + ' ');
        };
      }
    })(),
    removeClass: (function () {
      if (hasClassListProperty) {
        return function (elem, className) {
          if (!elem || !className || !$D.hasClass(elem, className)) {
            return;
          }
          elem.classList.remove(className);
        };
      } else {
        return function (elem, className) {
          if (!elem || !className || !$D.hasClass(elem, className)) {
            return;
          }
          elem.className = elem.className.replace(new RegExp('(?:^|\\s)' + className + '(?:\\s|$)'), ' ');
        };
      }
    })(),
    toggleClass: function (ele, className) {
      if ($D.hasClass(ele, className)) {
        $D.removeClass(ele, className);
      }
      else {
        $D.addClass(ele, className);
      }
    },
    // 类似源生方法 `insertBefore`
    insertAfter: function (parentElement, newElement, refernceElement) {
      var next = refernceElement.nextSibling;
      if (next) {
        parentElement.insertBefore(newElement, next);
      }
      else {
        parentElement.appendChild(newElement);
      }
      return newElement;
    }
  };

  J.dom = $D;
});
//string
J.$package(function (J) {

  var cache = {};
  var template = function (str, data) {
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
        cache[str] = cache[str] ||
            template(document.getElementById(str).innerHTML) :

        // Generate a reusable function that will serve as a template
        // generator (and which will be cached).
        new Function("obj",
            "var p=[],print=function(){p.push.apply(p,arguments);};" +

            // Introduce the data as local variables using with(){}
            "with(obj){p.push('" +

            // Convert the template into pure JavaScript
            str
                .replace(/[\r\t\n]/g, " ")
                .split("<%").join("\t")
                .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                .replace(/\t=(.*?)%>/g, "',$1,'")
                .split("\t").join("');")
                .split("%>").join("p.push('")
                .split("\r").join("\\'")
            + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn(data) : fn;
  };
  J.string = J.string || {};
  J.string.template = template;

  //html正文编码：对需要出现在HTML正文里(除了HTML属性外)的不信任输入进行编码
  var encodeHtml = function (sStr) {
    sStr = '' + sStr;
    sStr = sStr.replace(/&/g, "&amp;");
    sStr = sStr.replace(/>/g, "&gt;");
    sStr = sStr.replace(/</g, "&lt;");
    sStr = sStr.replace(/"/g, "&quot;");
    sStr = sStr.replace(/'/g, "&#39;");
    return sStr;
  };

  J.string.encodeHtml = encodeHtml;

  /**
   * 判断是否是一个可接受的 url 串
   *
   * @method isURL
   * @memberOf string
   *
   * @param {String} str 要检测的字符串
   * @return {Boolean} 如果是可接受的 url 则返回 true
   */
  var isURL = function (str) {
    return isURL.RE.test(str);
  };

  /**
   * @ignore
   */
  isURL.RE = /^(?:ht|f)tp(?:s)?\:\/\/(?:[\w\-\.]+)\.\w+/i;


  /**
   * 分解 URL 为一个对象，成员为：scheme, user, pass, host, port, path, query, fragment
   *
   * @method parseURL
   * @memberOf string
   *
   * @param {String} str URL 地址
   * @return {Object} 如果解析失败则返回 null
   */
  var parseURL = function (str) {
    var ret = null;

    if (/^\/\//.test(str)) { // 以//开头的url
      str = location.protocol + str;
    }

    if (null !== (ret = parseURL.RE.exec(str))) {
      var specObj = {};
      for (var i = 0, j = parseURL.SPEC.length; i < j; i++) {
        var curSpec = parseURL.SPEC[i];
        specObj[curSpec] = ret[i + 1];
      }
      ret = specObj;
      specObj = null;
    }

    return ret;
  };


  /**
   * 将一个对象（成员为：scheme, user, pass, host, port, path, query, fragment）重新组成为一个字符串
   *
   * @method buildURL
   * @memberOf string
   *
   * @param {Object} obj URl 对象
   * @return {String} 如果是可接受的 url 则返回 true
   */
  var buildURL = function (obj) {
    var ret = '';

    // prefix & surffix
    var prefix = {},
        surffix = {};

    for (var i = 0, j = parseURL.SPEC.length; i < j; i++) {
      var curSpec = parseURL.SPEC[i];
      if (!obj[curSpec]) {
        continue;
      }
      switch (curSpec) {
        case 'scheme':
          surffix[curSpec] = '://';
          break;
        case 'pass':
          prefix[curSpec] = ':';
        case 'user':
          prefix['host'] = '@';
          break;
          //case 'host':
        case 'port':
          prefix[curSpec] = ':';
          break;
          //case 'path':
        case 'query':
          prefix[curSpec] = '?';
          break;
        case 'fragment':
          prefix[curSpec] = '#';
          break;
      }

      // rebuild
      if (curSpec in prefix) {
        ret += prefix[curSpec];
      }
      if (curSpec in obj) {
        ret += obj[curSpec];
      }
      if (curSpec in surffix) {
        ret += surffix[curSpec];
      }
    }

    prefix = null;
    surffix = null;
    obj = null;

    return ret;
  };

  /**
   * @ignore
   */
  parseURL.SPEC = ['scheme', 'user', 'pass', 'host', 'port', 'path', 'query', 'fragment'];
  parseURL.RE = /^([^:]+):\/\/(?:([^:@]+):?([^@]*)@)?(?:([^/?#:]+):?(\d*))([^?#]*)(?:\?([^#]+))?(?:#(.+))?$/;

  J.string.parseURL = parseURL;
  J.string.buildURL = buildURL;

});
//format
J.$package(function (J) {
  J.format = J.format || {};

  /**
   * 让日期和时间按照指定的格式显示的方法
   * @method date
   * @memberOf format
   * @param {String} format 格式字符串
   * @return {String} 返回生成的日期时间字符串
   *
   * @example
   * Jx().$package(function(J){
     *     var d = new Date();
     *     // 以 YYYY-MM-dd hh:mm:ss 格式输出 d 的时间字符串
     *     J.format.date(d, "YYYY-MM-DD hh:mm:ss");
     * };
   *
   */
  var date = function (date, formatString) {
    /*
     * eg:formatString="YYYY-MM-DD hh:mm:ss";
     */
    var o = {
      "M+": date.getMonth() + 1,    //month
      "D+": date.getDate(),    //day
      "h+": date.getHours(),    //hour
      "m+": date.getMinutes(),    //minute
      "s+": date.getSeconds(),    //second
      "q+": Math.floor((date.getMonth() + 3) / 3),    //quarter
      "S": date.getMilliseconds()    //millisecond
    }

    if (/(Y+)/.test(formatString)) {
      formatString = formatString.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
      if (new RegExp("(" + k + ")").test(formatString)) {
        formatString = formatString.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
      }
    }
    return formatString;
  };

  J.format.date = date;

});

//support
J.$package(function (J) {
  var win = window,
      doc = win.document,
      nav = win.navigator,
      $D = J.dom,
      $E = J.event;
  var support = {
    fixed: (function () {
      var container = document.body;
      var el = $D.node('div');
      $D.setStyle(el, {
        position: "fixed",
        top: "100px"
      });
      container.appendChild(el);

      var originalHeight = container.style.height,
          originalScrollTop = container.scrollTop;

      $D.setStyle(container, "height", "3000px");
      container.scrollTop = 500;

      var elementTop = el.getBoundingClientRect().top;
      if (originalHeight)
        $D.setStyle(container, "height", originalHeight + "px");
      else
        $D.setStyle(container, "height", "");

      container.removeChild(el);
      container.scrollTop = originalScrollTop;
      return elementTop === 100;
    })(),
    // 如果支持 `transitionend` 事件返回真正的事件名，如果不支持，返回布尔值 `false`
    // 检测结果可能需要异步进行，所以不要缓存此检测结果，每次需要用到此事件时再访问
    transitionend: (function () {
      var ret, endEventNames, div, handler, i;

      if ('ontransitionend' in win) {
        return 'transitionend';
      }
      else if ('onwebkittransitionend' in win) {
        return 'webkitTransitionEnd';
      }
      // IE10+
      else if ('transition' in doc.body.style) {
        return 'transitionend';
      }
      // 模拟transition，异步得出检测结果
      else if ('addEventListener' in win) {
        endEventNames = [
          'transitionend',
          'webkitTransitionEnd',
          'MozTransitionEnd',
          'MSTransitionEnd',
          'otransitionend',
          'oTransitionEnd'
        ];
        div = doc.createElement('div');
        handler = function (e) {
          var i = endEventNames.length;
          while (i--) {
            this.removeEventListener(endEventNames[i], handler);
          }
          support.transitionend = e.type;
          handler = null;
        };
        $D.setStyle(div, {
          'position': 'absolute',
          'top': '0px',
          'left': '-99999px',
          'transition': 'top 1ms',
          'WebkitTransition': 'top 1ms',
          'MozTransition': 'top 1ms',
          'MSTransitionEnd': 'top 1ms',
          'OTransitionEnd': 'top 1ms'
        });
        i = endEventNames.length;
        while (i--) {
          div.addEventListener(endEventNames[i], handler, false);
        }
        doc.documentElement.appendChild(div);
        setTimeout(function () {
          div.style.top = '100px';
          setTimeout(function () {
            div.parentNode.removeChild(div);
            div = null;
            handler = null;
          }, 100);
        }, 0);
      }
      return false;
    })(),
    // 如果支持 `audio` 标签，返回一个对象，其属性有ogg, mp3, wav, m4a，表示这些格式的支持情况。
    // 可能的属性值有 `"", "maybe", "probably"` ，
    // 分别表示不支持，可能支持，很可能支持
    audio: (function () {
      var elem = document.createElement('audio'),
          result,
          NOT_SUPPORT_RE = /^no$/i,
          EMPTY_STR = '';

      try {
        if (elem.canPlayType) {
          result = {};
          result.mp3 = elem.canPlayType('audio/mpeg;').replace(NOT_SUPPORT_RE, EMPTY_STR);
          result.wav = elem.canPlayType('audio/wav; codecs="1"').replace(NOT_SUPPORT_RE, EMPTY_STR);
          result.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(NOT_SUPPORT_RE, EMPTY_STR);
          result.m4a = (elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;')).replace(NOT_SUPPORT_RE, EMPTY_STR);
        }
      }
      catch (e) {
      }

      return result;
    })(),
    // 是否安装了flash插件
    flash: (function () {
      if (nav.plugins && nav.plugins.length && nav.plugins['Shockwave Flash']) {
        return true;
      }
      else if (nav.mimeTypes && nav.mimeTypes.length) {
        var mimeType = nav.mimeTypes['application/x-shockwave-flash'];
        return mimeType && mimeType.enabledPlugin;
      }
      else {
        var ax;
        try {
          if (ActiveXObject) {
            ax = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
            return true;
          }
        }
        catch (e) {
        }
      }
      return false;
    })()
  }
  J.support = support;
});

//event
J.$package(function (J) {

  var $T = J.type,
      $S = J.support,
      win = window;

  // 如果是DOM事件，返回正确的事件名；否则返回布尔值 `false`
  var isDomEvent = function (obj, evtType) {
    if (("on" + evtType).toLowerCase() in obj) {
      return evtType;
    }
    else if ($S.transitionend && (evtType === 'transitionend' || evtType === $S.transitionend)) {
      return $S.transitionend;
    }
    return false;
  };
  // 封装绑定和解除绑定DOM事件的方法以兼容低版本IE
  var bindDomEvent = function (obj, evtType, handler) {
    var oldHandler;
    if (obj.addEventListener) {
      obj.addEventListener(evtType, handler, false);
    }
    else {
      evtType = evtType.toLowerCase();
      if (obj.attachEvent) {
        obj.attachEvent('on' + evtType, handler);
      }
      else {
        oldHandler = obj['on' + evtType];
        obj['on' + evtType] = function () {
          if (oldHandler) {
            oldHandler.apply(this, arguments);
          }
          return handler.apply(this, arguments);
        }
      }
    }
  };
  var unbindDomEvent = function (obj, evtType, handler) {
    if (obj.removeEventListener) {
      obj.removeEventListener(evtType, handler, false);
    }
    else {
      evtType = evtType.toLowerCase();
      if (obj.detachEvent) {
        obj.detachEvent('on' + evtType, handler);
      }
      else {
        // TODO: 对特定handler的去除
        obj['on' + evtType] = null;
      }
    }
  };

  var $E = {
    on: function (obj, evtType, handler) {
      var tmpEvtType;
      if ($T.isArray(obj)) {
        for (var i = obj.length; i--;) {
          $E.on(obj[i], evtType, handler);
        }
        return;
      }
      //evtType is a string split by space
      if ($T.isString(evtType) && evtType.indexOf(" ") > 0) {
        evtType = evtType.split(" ");
        for (var i = evtType.length; i--;) {
          $E.on(obj, evtType[i], handler);
        }
        return;
      }
      //handler is an array
      if ($T.isArray(handler)) {
        for (var i = handler.length; i--;) {
          $E.on(obj, evtType, handler[i]);
        }
        return;
      }
      //evtType is an object
      if ($T.isObject(evtType)) {
        for (var eName in evtType) {
          $E.on(obj, eName, evtType[eName]);
        }
        return;
      }
      //is dom event support
      if (tmpEvtType = isDomEvent(obj, evtType)) {
        evtType = tmpEvtType;
        bindDomEvent(obj, evtType, handler);
        return;
      }
      //dom event in origin element
      if (obj.elem && (tmpEvtType = isDomEvent(obj.elem, evtType))) {
        evtType = tmpEvtType;
        bindDomEvent(obj.elem, evtType, handler);
        return;
      }
      //is specific custom event
      if (customEvent[evtType]) {
        customEvent[evtType](obj, handler);
        return;
      }
      //other custom event
      if (!obj.events) obj.events = {};
      if (!obj.events[evtType]) obj.events[evtType] = [];

      obj.events[evtType].push(handler);


    },
    once: function (obj, evtType, handler) {
      var f = function () {
        handler.apply(win, arguments);
        $E.off(obj, evtType, f);
      }
      $E.on(obj, evtType, f);
    },
    off: function (obj, evtType, handler) {
      //evtType is a string split by space
      if ($T.isString(evtType) && evtType.indexOf(" ") > 0) {
        evtType = evtType.split(" ");
        for (var i = evtType.length; i--;) {
          $E.off(obj, evtType[i], handler);
        }
        return;
      }
      //handler is an array
      if ($T.isArray(handler)) {
        for (var i = handler.length; i--;) {
          $E.off(obj, evtType, handler[i]);
        }
        return;
      }
      //evtType is an object
      if ($T.isObject(evtType)) {
        for (var eName in evtType) {
          $E.off(obj, eName, evtType[eName]);
        }
        return;
      }

      if (tmpEvtType = isDomEvent(obj, evtType)) {
        evtType = tmpEvtType;
        unbindDomEvent(obj, evtType, handler);
        return;
      }
      //dom event in origin element
      if (obj.elem && (tmpEvtType = isDomEvent(obj.elem, evtType))) {
        evtType = tmpEvtType;
        unbindDomEvent(obj.elem, evtType, handler);
        return;
      }
      //is specific custom event
      if (customEvent[evtType]) {
        customEvent._off(obj, evtType, handler);
        return;
      }

      if (!evtType) {
        obj.events = {};
        return;
      }

      if (obj.events) {
        if (!handler) {
          obj.events[evtType] = [];
          return;
        }
        if (obj.events[evtType]) {
          var evtArr = obj.events[evtType];
          for (var i = evtArr.length; i--;) {
            if (evtArr[i] == handler) {
              evtArr.splice(i, 1);
              return;
            }
          }
        }
      }
    },
    fire: function (obj, evtType) {
      var arg = [].slice.call(arguments, 2),
          tmpEvtType;
      //obj is dom element
      if (tmpEvtType = isDomEvent(obj, evtType)) {
        evtType = tmpEvtType;
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent(evtType, true, true);
        obj.dispatchEvent(evt);
        return;
      }
      //dom event in origin element
      if (obj.elem && (tmpEvtType = isDomEvent(obj.elem, evtType))) {
        evtType = tmpEvtType;
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent(evtType, true, true);
        obj.elem.dispatchEvent(evt);
        return;
      }
      if (obj.events && obj.events[evtType]) {
        var handler = obj.events[evtType];
        for (var i = 0, l = handler.length; i < l; i++) {
          // if(!arg[0]) arg[0] = {};
          // arg[0].type = evtType;
          // try{
          handler[i].apply(window, arg);
          // } catch(e){ window.console && console.log && console.log(e.message); };

        }
      }
    },
    /**
     * 获取点击的事件源, 该事件源是有 cmd 属性的 默认从 event.target 往上找三层,找不到就返回null
     *
     * @param {Event}
     *            event
     * @param {Int}
     *            level 指定寻找的层次
     * @param {String}
     *            property 查找具有特定属性的target,默认为cmd
     * @param {HTMLElement} parent 指定查找结束点, 默认为document.body
     * @return {HTMLElement} | null
     */
    getActionTarget: function (event, level, property, parent) {
      var t = event.target,
          l = level || 3,
          s = level !== -1,
          p = property || 'cmd',
          end = parent || document.body;
      if (t === end) {
        return t.getAttribute(p) ? t : null;
      }
      while (t && (t !== end) && (s ? (l-- > 0) : true)) {
        if (t.getAttribute(p)) {
          return t;
        } else {
          t = t.parentNode;
        }
      }
      return null;
    },
    /**
     * @example
     * bindCommands(cmds);
     * bindCommands(el, cmds);
     * bindCommands(el, 'click', cmds);
     *
     * function(param, target, event){
         * }
     */
    bindCommands: function (targetElement, eventName, commends, commendName) {
      var defaultEvent = J.platform.touchDevice ? "tap" : "click";
      if (arguments.length === 1) {
        commends = targetElement;
        targetElement = document.body;
        eventName = defaultEvent;
      } else if (arguments.length === 2) {
        commends = eventName;
        eventName = defaultEvent;
      }
      if (!targetElement._commends) {
        targetElement._commends = {};
      }
      if (targetElement._commends[eventName]) {//已经有commends 就合并
        J.extend(targetElement._commends[eventName], commends);
        return;
      }
      targetElement._commends[eventName] = commends;
      commendName = commendName || 'cmd';
      if (!targetElement.getAttribute(commendName)) {
        targetElement.setAttribute(commendName, 'void');
      }
      J.event.on(targetElement, eventName, function (e) {
        var target = J.event.getActionTarget(e, -1, commendName, this.parentNode);
        if (target) {
          var cmd = target.getAttribute(commendName);
          var param = target.getAttribute('param');
          if (target.href && target.getAttribute('href').indexOf('#') === 0) {
            e.preventDefault();
          }
          if (this._commends[eventName][cmd]) {
            this._commends[eventName][cmd](param, target, e);
          }
        }
      });
    }

  };

  var startEvt, moveEvt, endEvt;
  //选择不同事件
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    startEvt = "touchstart";
    moveEvt = "touchmove";
    endEvt = "touchend";
  }
  else {
    startEvt = "mousedown";
    moveEvt = "mousemove";
    endEvt = "mouseup";
  }

  var getTouchPos = function (e) {
    var t = e.touches;
    if (t && t[0]) {
      return {x: t[0].clientX, y: t[0].clientY};
    }
    return {x: e.clientX, y: e.clientY};
  }
  //计算两点之间距离
  var getDist = function (p1, p2) {
    if (!p1 || !p2) return 0;
    return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));

  }
  //计算两点之间所成角度
  var getAngle = function (p1, p2) {
    var r = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    var a = r * 180 / Math.PI;
    return a;
  };


  var customEventHandlers = [];
  var isCustomEvtMatch = function (ch, ele, evtType, handler) {
    return ch.ele == ele && evtType == ch.evtType && handler == ch.handler
  }
  //自定义事件
  var customEvent = {
    _fire: function (ele, evtType, handler) {
      J.each(customEventHandlers, function (ch) {
        if (isCustomEvtMatch(ch, ele, evtType, handler)) {
          handler.call(ele, {
            type: evtType
          });
        }
      });
    },
    _off: function (ele, evtType, handler) {
      J.each(customEventHandlers, function (ch, i) {
        var at = ch.actions;
        if (isCustomEvtMatch(ch, ele, evtType, handler)) {
          //删除辅助处理程序
          for (var n in at) {
            var h = at[n];
            if ($T.isObject(h)) {
              //非绑定在该元素的handler
              $E.off(h.ele, n, h.handler);
            }
            else {
              $E.off(ele, n, h);
            }
          }
          //删除本处理程序数据
          customEventHandlers.splice(i, 1);
          return;
        }
      });
    },
    tap: function (ele, handler) {
      //按下松开之间的移动距离小于20，认为发生了tap
      var TAP_DISTANCE = 20;
      //双击之间最大耗时
      var DOUBLE_TAP_TIME = 300;
      var pt_pos;
      var ct_pos;
      var pt_up_pos;
      var pt_up_time;
      var evtType;
      var startEvtHandler = function (e) {
        // e.stopPropagation();
        var touches = e.touches;
        if (!touches || touches.length == 1) {//鼠标点击或者单指点击
          ct_pos = pt_pos = getTouchPos(e);
        }
      }
      var moveEvtHandler = function (e) {
        // e.stopPropagation();
        e.preventDefault();
        ct_pos = getTouchPos(e);
      }
      var endEvtHandler = function (e) {
        // e.stopPropagation();
        var now = Date.now();
        var dist = getDist(ct_pos, pt_pos);
        var up_dist = getDist(ct_pos, pt_up_pos);

        if (dist < TAP_DISTANCE) {
          if (pt_up_time && now - pt_up_time < DOUBLE_TAP_TIME && up_dist < TAP_DISTANCE) {
            evtType = "doubletap";
          }
          else {
            evtType = "tap";
          }
          handler.call(ele, {
            target: e.target,
            oriEvt: e,
            type: evtType
          });
        }
        pt_up_pos = ct_pos;
        pt_up_time = now;
      }

      $E.on(ele, startEvt, startEvtHandler);
      $E.on(ele, moveEvt, moveEvtHandler);
      $E.on(ele, endEvt, endEvtHandler);

      var evtOpt = {
        ele: ele,
        evtType: "tap",
        handler: handler
      }
      evtOpt.actions = {};
      evtOpt.actions[startEvt] = startEvtHandler;
      evtOpt.actions[moveEvt] = moveEvtHandler;
      evtOpt.actions[endEvt] = endEvtHandler;

      customEventHandlers.push(evtOpt);

    },
    hold: function (ele, handler) {
      //按下松开之间的移动距离小于20，认为点击生效
      var HOLD_DISTANCE = 20;
      //按下两秒后hold触发
      var HOLD_TIME = 2000;
      var holdTimeId;
      var pt_pos;
      var ct_pos;
      var startEvtHandler = function (e) {
        e.stopPropagation();
        var touches = e.touches;
        if (!touches || touches.length == 1) {//鼠标点击或者单指点击
          pt_pos = ct_pos = getTouchPos(e);
          pt_time = Date.now();

          holdTimeId = setTimeout(function () {
            if (touches && touches.length != 1) return;
            if (getDist(pt_pos, ct_pos) < HOLD_DISTANCE) {
              handler.call(ele, {
                oriEvt: e,
                target: e.target,
                type: "hold"
              });
            }
          }, HOLD_TIME);
        }
      }
      var moveEvtHandler = function (e) {
        e.stopPropagation();
        e.preventDefault();
        ct_pos = getTouchPos(e);
      }
      var endEvtHandler = function (e) {
        e.stopPropagation();
        clearTimeout(holdTimeId);
      }

      $E.on(ele, startEvt, startEvtHandler);
      $E.on(ele, moveEvt, moveEvtHandler);
      $E.on(ele, endEvt, endEvtHandler);

      var evtOpt = {
        ele: ele,
        evtType: "hold",
        handler: handler
      }
      evtOpt.actions = {};
      evtOpt.actions[startEvt] = startEvtHandler;
      evtOpt.actions[moveEvt] = moveEvtHandler;
      evtOpt.actions[endEvt] = endEvtHandler;

      customEventHandlers.push(evtOpt);
    },
    swipe: function (ele, handler) {
      //按下之后移动30px之后就认为swipe开始
      var SWIPE_DISTANCE = 30;
      //swipe最大经历时间
      var SWIPE_TIME = 500;
      var pt_pos;
      var ct_pos;
      var pt_time;
      var pt_up_time;
      var pt_up_pos;
      //获取swipe的方向
      var getSwipeDirection = function (p2, p1) {
        var dx = p2.x - p1.x;
        var dy = -p2.y + p1.y;
        var angle = Math.atan2(dy, dx) * 180 / Math.PI;

        if (angle < 45 && angle > -45) return "right";
        if (angle >= 45 && angle < 135) return "top";
        if (angle >= 135 || angle < -135) return "left";
        if (angle >= -135 && angle <= -45) return "bottom";

      }
      var startEvtHandler = function (e) {
        // e.stopPropagation();
        var touches = e.touches;
        if (!touches || touches.length == 1) {//鼠标点击或者单指点击
          pt_pos = ct_pos = getTouchPos(e);
          pt_time = Date.now();

        }
      }
      var moveEvtHandler = function (e) {
        // e.stopPropagation();
        e.preventDefault();
        ct_pos = getTouchPos(e);
      }
      var endEvtHandler = function (e) {
        // e.stopPropagation();
        var dir;
        pt_up_pos = ct_pos;
        pt_up_time = Date.now();

        if (getDist(pt_pos, pt_up_pos) > SWIPE_DISTANCE && pt_up_time - pt_time < SWIPE_TIME) {
          dir = getSwipeDirection(pt_up_pos, pt_pos);
          handler.call(ele, {
            oriEvt: e,
            target: e.target,
            type: "swipe",
            direction: dir
          });
        }
      }

      $E.on(ele, startEvt, startEvtHandler);
      $E.on(ele, moveEvt, moveEvtHandler);
      $E.on(ele, endEvt, endEvtHandler);

      var evtOpt = {
        ele: ele,
        evtType: "swipe",
        handler: handler
      }
      evtOpt.actions = {};
      evtOpt.actions[startEvt] = startEvtHandler;
      evtOpt.actions[moveEvt] = moveEvtHandler;
      evtOpt.actions[endEvt] = endEvtHandler;

      customEventHandlers.push(evtOpt);
    },
    transform: function (ele, handler) {
      var pt_pos1;
      var pt_pos2;
      var pt_len;//初始两指距离
      var pt_angle;//初始两指所成角度
      var startEvtHandler = function (e) {
        var touches = e.touches;
        if (!touches) return;

        if (touches.length == 2) {//双指点击
          pt_pos1 = getTouchPos(e.touches[0]);
          pt_pos2 = getTouchPos(e.touches[1]);
          pt_len = getDist(pt_pos1, pt_pos2);
          pt_angle = getAngle(pt_pos1, pt_pos2);
        }
      }
      var moveEvtHandler = function (e) {
        e.preventDefault();
        var touches = e.touches;
        if (!touches) return;
        if (touches.length == 2) {//双指点击

          var ct_pos1 = getTouchPos(e.touches[0]);
          var ct_pos2 = getTouchPos(e.touches[1]);
          var ct_len = getDist(ct_pos1, ct_pos2);
          var ct_angle = getAngle(ct_pos1, ct_pos2);
          var scale = ct_len / pt_len;
          var rotation = ct_angle - pt_angle;

          handler.call(ele, {
            oriEvt: e,
            target: e.target,
            type: "transform",
            scale: scale,
            rotate: rotate
          });
        }
      }

      $E.on(ele, startEvt, startEvtHandler);
      $E.on(ele, moveEvt, moveEvtHandler);
      var evtOpt = {
        ele: ele,
        evtType: "transform",
        handler: handler
      }
      evtOpt.actions = {};
      evtOpt.actions[startEvt] = startEvtHandler;
      evtOpt.actions[moveEvt] = moveEvtHandler;

      customEventHandlers.push(evtOpt);
    },
    scrollstart: function (ele, handler) {
      var isScrolling;
      var scrollTimeId;
      var scrollHandler = function (e) {
        if (!isScrolling) {
          isScrolling = true;
          handler.call(ele, {
            oriEvt: e,
            target: e.target,
            type: "scrollstart"
          });
        }
        clearTimeout(scrollTimeId);
        scrollTimeId = setTimeout(function () {
          isScrolling = false;
        }, 250);
      }

      $E.on(ele, "scroll", scrollHandler);

      var evtOpt = {
        ele: ele,
        evtType: "scrollstart",
        handler: handler
      };
      evtOpt.actions = {};
      evtOpt.actions["scroll"] = scrollHandler;
      customEventHandlers.push(evtOpt);
    },
    scrollend: function (ele, handler) {
      var scrollTimeId;
      var scrollHandler = function (e) {
        clearTimeout(scrollTimeId);
        scrollTimeId = setTimeout(function () {
          handler.call(ele, {
            oriEvt: e,
            target: e.target,
            type: "scrollend"
          });
        }, 250);
      }
      $E.on(ele, "scroll", scrollHandler);

      var evtOpt = {
        ele: ele,
        evtType: "scrollend",
        handler: handler
      };
      evtOpt.actions = {};
      evtOpt.actions["scroll"] = scrollHandler;
      customEventHandlers.push(evtOpt);
    },
    scrolltobottom: function (ele, handler) {
      var body = document.body;
      var scrollHandler = function (e) {
        if (body.scrollHeight <= body.scrollTop + window.innerHeight) {
          handler.call(ele, {
            oriEvt: e,
            target: e.target,
            type: "scrolltobottom"
          });

        }
      }
      $E.on(ele, "scroll", scrollHandler);

      var evtOpt = {
        ele: ele,
        evtType: "scrolltobottom",
        handler: handler
      };
      evtOpt.actions = {};
      evtOpt.actions["scroll"] = scrollHandler;
      customEventHandlers.push(evtOpt);
    },
    //兼容性更好的orientationchange事件，这里使用resize实现。不覆盖原生orientation change 和 resize事件
    ortchange: function (ele, handler) {
      var pre_w = window.innerWidth;
      var resizeHandler = function (e) {
        var current_w = window.innerWidth,
            current_h = window.innerHeight,
            orientation;

        if (pre_w == current_w) return;
        if (current_w > current_h) {
          orientation = "landscape";
        }
        else {
          orientation = "portrait";
        }
        handler.call(ele, {
          oriEvt: e,
          target: e.target,
          type: "ortchange",
          orientation: orientation
        });
        pre_w = current_w;
      }
      $E.on(window, "resize", resizeHandler);

      var evtOpt = {
        ele: ele,
        evtType: "ortchange",
        handler: handler
      };
      evtOpt.actions = {};
      evtOpt.actions["resize"] = resizeHandler;
      customEventHandlers.push(evtOpt);
    }
  }

  var transitionEndNames = [
    'transitionend',
    'webkitTransitionEnd',
    'MozTransitionEnd',
    'MSTransitionEnd'
  ];

  J.event = $E;
});

//Util
J.$package(function (J) {
  var $D = J.dom,
      $E = J.event,
      $T = J.type;

  var preventScroll = function (e) {
    if (e.target.type === 'range') {
      return;
    }
    e.preventDefault();
  }
  var hideScroll = function () {
    setTimeout(function () {
      if (!location.hash) {
        var ph = window.innerHeight + 60;
        if (document.documentElement.clientHeight < ph) {
          $D.setStyle(document.body, "minHeight", ph + "px");
        }
        window.scrollTo(0, 1);
      }
    }, 200);
  }


  var Util = {
    //隐藏URL栏
    hideUrlBar: function () {
      $E.on(window, "load", hideScroll);
    },
    //禁止滚动
    preventScrolling: function () {
      $E.on(document, 'touchmove', preventScroll);
    },
    //启用滚动
    activeScrolling: function () {
      $E.off(document, 'touchmove', preventScroll);
    },
    //滚动到顶部动画(css3动画)
    scrollToTop: function (duration, runType) {
      var $A = J.Animation;
      var body = document.body;
      var scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

      $D.setStyle(body, $D.getVendorPropertyName("transform"), "translate3d(0," + (-scrollTop) + "px,0)");
      body.scrollTop ? body.scrollTop = 0 : document.documentElement.scrollTop = 0;

      new $A({
        selector: body,
        duration: duration,
        runType: runType,
        use3d: true
      }).translateY(0).transit();

    },
    //兼容浏览器的fixed定位
    fixElement: function (ele, options) {
      var iu = $T.isUndefined;
      var wh = window.innerHeight;
      var ww = window.innerWidth;
      var eh = ele.clientHeight;
      var ew = ele.clientWidth;
      var top;
      var left;

      //支持原生fixed
      if (J.support.fixed) {
        $D.setStyle(ele, {
          position: "fixed",
          top: options.top + "px",
          left: options.left + "px",
          bottom: options.bottom + "px",
          right: options.right + "px"
        });
        return;
      }
      //fixed模拟
      $E.on(window, "scrollend", function () {

        top = window.pageYOffset + ( iu(options.top) ? (iu(options.bottom) ? "" : wh - options.bottom - eh) : options.top );
        left = window.pageXOffset + ( iu(options.left) ? (iu(options.right) ? "" : ww - options.right - ew) : options.left );

        $D.setStyle(ele, {
          position: "absolute",
          top: top + "px",
          left: left + "px"
        });
      });
    },
    //hover效果
    hoverEffect: function (ele, className) {
      var startEvt, moveEvt, endEvt;
      var touchDevice = J.platform.touchDevice;
      var upTarget;

      //选择不同事件
      if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        startEvt = "touchstart";
        moveEvt = "touchmove";
        endEvt = "touchend";
        upTarget = ele;
      }
      else {
        startEvt = "mousedown";
        moveEvt = "mousemove";
        endEvt = "mouseup";
        upTarget = document.body;
      }
      $E.on(ele, startEvt, function () {
        $D.addClass(ele, className);
      });
      $E.on(ele, moveEvt, function (e) {
        e.preventDefault();
      });
      $E.on(upTarget, endEvt, function () {
        $D.removeClass(ele, className);
      });
    }

  }
  J.Util = Util;
});

//animation time, runType ,scale, rotate, rotateX, rotateY, translateX, translateY, skewX, skewY
J.$package(function (J) {
  var $D = J.dom,
      $E = J.event,
      $T = J.type;

  //3d支持
  var support3d = $D.isSupprot3d();
  var finishedCount = 0;

  var Animation = J.Class({
    init: function (options) {

      this.setElems(options.selector);
      this.setDuration(options.duration || 1000);
      this.setRunType(options.runType || "ease-in-out");
      this.setDelay(options.delay || 0);
      this.setUsed3d(options.use3d);
      this.transformArr = [];
    },
    setDuration: function (duration) {
      this.duration = duration;
      return this;
    },
    setDelay: function (delay) {
      this.delay = delay;
      return this;
    },
    setElems: function (selector) {
      if ($T.isString(selector)) {
        this.elems = $D.$(selector);
      }
      else if ($T.isArray(selector)) {
        this.elems = selector;
      }
      else if (selector.tagName) {
        this.elems = [selector];
      }
      return this;
    },
    setRunType: function (runType) {
      this.runType = runType;
      return this;
    },
    setUsed3d: function (use3d) {
      this.use3d = use3d;
      return this;
    },
    scale: function (scale) {
      this.transformArr.push("scale(" + scale + ")");
      return this;
    },
    scaleX: function (scaleX) {
      this.transformArr.push("scalex(" + scaleX + ")");
      return this;
    },
    scaleY: function (scaleY) {
      this.transformArr.push("scaley(" + scaleY + ")");
      return this;
    },
    rotate: function (rotate) {
      this.transformArr.push("rotate(" + rotate + "deg)");
      return this;
    },
    rotateX: function (rotateX) {
      this.transformArr.push("rotatex(" + rotateX + "deg)");
      return this;
    },
    rotateY: function (rotateX) {
      this.transformArr.push("rotatey(" + rotateY + "deg)");
      return this;
    },
    rotateZ: function (rotateZ) {
      this.transformArr.push("rotatez(" + rotateZ + "deg)");
      return this;
    },
    translate: function (translateX, translateY, translateZ) {
      if (support3d && translateZ)
        this.transformArr.push("translate3d" + '(' + translateX + ',' + translateY + ',' + translateZ + ')');
      else
        this.transformArr.push("translate" + '(' + translateX + ',' + translateY + ')');
      return this;
    },
    translateX: function (translateX) {
      this.translate(translateX, 0);
      return this;
    },
    translateY: function (translateY) {
      this.translate(0, translateY);
      return this;
    },
    skew: function (x, y) {
      this.transformArr.push("skew(" + x + "deg," + y + "deg)");
      return this;
    },
    skewX: function (x) {
      this.transformArr.push("skewx(" + x + "deg)");
      return this;
    },
    skewY: function (y) {
      this.transformArr.push("skewy(" + y + "deg)");
      return this;
    },
    setStyle: function (styleName, styleValue) {
      var s = "";
      if ($T.isUndefined(this.styleStr)) this.styleStr = "";
      //样式变化
      if ($T.isObject(styleName)) {
        J.each(styleName, function (sv, sn) {
          s += $D.toCssStyle($D.getVendorPropertyName(sn)) + ":" + sv + ";";
        });
      }
      else if ($T.isString(styleName)) {
        s += $D.toCssStyle($D.getVendorPropertyName(styleName)) + ":" + styleValue + ";";
      }
      this.styleStr += s;
      return this;

    },
    toOrigin: function () {
      this.transformArr = [];
      return this;
    },
    transit: function (onFinished) {
      var self = this;
      var elems = this.elems;
      J.each(elems, function (e) {
        self._transit(e);
      });
      window.setTimeout(function () {
        $E.fire(self, "end");
        J.each(elems, function (elem) {
          $D.setStyle(elem, $D.getVendorPropertyName("transition"), "");
        });
        onFinished && onFinished.call(self);
      }, this.duration);
      return this;
    },
    _transit: function (elem) {

      var self = this;
      var transformStr = this.transformArr.join(" ");
      if (support3d && this.use3d) {
        transformStr += " translatez(0)";
      }

      var aStr = "all"
          + ' ' + this.duration / 1000 + 's '
          + this.runType
          + ' ' + this.delay / 1000 + 's';

      $D.setStyle(elem, $D.getVendorPropertyName("transition"), aStr);

      elem.style[$D.getVendorPropertyName("transform")] = transformStr;
      elem.style.cssText += this.styleStr;

      $E.fire(this, "start");
    }
  });
  J.Animation = Animation;
});
//cookie
J.$package(function (J) {
  var domainPrefix = window.location.host;
  var cookie = {
    set: function (name, value, domain, path, hour) {
      if (hour) {
        var today = new Date();
        var expire = new Date();
        expire.setTime(today.getTime() + 3600000 * hour);
      }
      window.document.cookie = name + "=" + value + "; " + (hour ? ("expires=" + expire.toGMTString() + "; ") : "") + (path ? ("path=" + path + "; ") : "path=/; ") + (domain ? ("domain=" + domain + ";") : ("domain=" + domainPrefix + ";"));
      return true;
    },
    get: function (name) {
      var r = new RegExp("(?:^|;+|\\s+)" + name + "=([^;]*)");
      var m = window.document.cookie.match(r);
      return (!m ? "" : m[1]);
    },
    remove: function (name, domain, path) {
      window.document.cookie = name + "=; expires=Mon, 26 Jul 1997 05:00:00 GMT; " + (path ? ("path=" + path + "; ") : "path=/; ") + (domain ? ("domain=" + domain + ";") : ("domain=" + domainPrefix + ";"));
    }
  };
  J.cookie = cookie;

});

//http
J.$package(function (J) {
  // var localData;
  // var saveDataLocal = function(data){
  //     if(!localdata) localdata = {};
  //     else localdata = JSON.parse(localStorage.getItem("localdata"));

  //     localdata[Date.now()] = data;
  //     localStorage.setItem("localdata",JSON.stringify(localData));
  // }
  // var getLocalData = function(){
  //     var localdataStr = localStorage.getItem("localdata");
  //     if(localdataStr){
  //         localdata = JSON.parse(localdataStr);
  //     }
  //     return localdata;
  // }

  // $E.on(window,"online",function(){
  //     var data = getLocalData();
  //     for(var n in data){
  //         var opt = data[n];
  //         http.ajax(opt);
  //     }
  // });
  // $E.on(window,"offline",function(){

  // });


  var http = {
    serializeParam: function (param) {
      if (!param) return '';
      var qstr = [];
      for (var key in  param) {
        qstr.push(encodeURIComponent(key) + '=' + encodeURIComponent(param[key]));
      }
      ;
      return qstr.join('&');
    },
    getUrlParam: function (name, href, noDecode) {
      var re = new RegExp('(?:\\?|#|&)' + name + '=([^&]*)(?:$|&|#)', 'i'), m = re.exec(href);
      var ret = m ? m[1] : '';
      return !noDecode ? decodeURIComponent(ret) : ret;
    },
    ajax: function (option) {
      var o = option;
      var m = o.method.toLocaleUpperCase();
      var isPost = 'POST' == m;
      var isComplete = false;
      var timeout = o.timeout;
      var withCredentials = o.withCredentials;//跨域ajax
      var async = ('async' in option) ? option.async : true;//默认为异步请求, 可以设置为同步

      var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : false;
      if (!xhr) {
        o.error && o.error.call(null, {ret: 999, msg: 'Create XHR Error!'});
        return false;
      }

      var qstr = http.serializeParam(o.param);

      // get 请求 参数处理
      !isPost && ( o.url += ( o.url.indexOf('?') > -1 ? '&' : '?' ) + qstr );

      xhr.open(m, o.url, async);
      if (withCredentials) xhr.withCredentials = true;

      isPost && xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      var timer = 0;

      xhr.onreadystatechange = function () {
        if (4 == xhr.readyState) {
          var status = xhr.status;
          if ((status >= 200 && status < 300) || status == 304 || status == 0) {
            var response = xhr.responseText.replace(/(\r|\n|\t)/gi, '');
            // var m = /callback\((.+)\)/gi.exec( response );
            // var result = { ret : 998, msg : '解析数据出错，请稍后再试' };
            // try{ result = eval( '(' + m[1] + ')' ) } catch ( e ) {};
            // result = eval( '(' + m[1] + ')' )
            var json = null;
            try {
              json = JSON.parse(response);
            } catch (e) {
            }
            o.onSuccess && o.onSuccess(json, xhr);
          } else {
            o.onError && o.onError(xhr, +new Date - startTime);
          }
          ;
          isComplete = true;
          if (timer) {
            clearTimeout(timer);
          }
        }

      };

      var startTime = +new Date;
      xhr.send(isPost ? qstr : void(0));

      if (timeout) {
        timer = setTimeout(function () {
          if (!isComplete) {
            xhr.abort();//不abort同一url无法重新发送请求？
            o.onTimeout && o.onTimeout(xhr);
          }
        }, timeout);
      }

      return xhr;
    },
    offlineSend: function (options) {
      if (navigator.onLine) {
        http.ajax(options);
      }
      else {
        saveDataLocal(options);
      }
    }
  }
  J.http = http;
});

if (typeof define === "function") {
  define('jm', [], function () {
    return J;
  });
}

;
/*!
 * iScroll v4.2 ~ Copyright (c) 2012 Matteo Spinelli, http://cubiq.org
 * Released under MIT license, http://cubiq.org/license
 */
(function (window, doc) {
  var m = Math,
      dummyStyle = doc.createElement('div').style,
      vendor = (function () {
        //滚动bug，火狐要走Moz路线,更改了顺序
        var vendors = 'webkitT,MozT,msT,OT,t'.split(','),
            t,
            i = 0,
            l = vendors.length;
        //fix pc FF can't roll
        //var ua = navigator.userAgent.toLowerCase();
        // var isFF = ua.indexOf("firefox");
        //if (isFF != -1){
        //    return 'Moz';
        // }
        for (; i < l; i++) {
          t = vendors[i] + 'ransform';
          if (t in dummyStyle) {
            return vendors[i].substr(0, vendors[i].length - 1);
          }
        }
        return false;
      })(),
      cssVendor = vendor ? '-' + vendor.toLowerCase() + '-' : '',

      // Style properties
      transform = prefixStyle('transform'),
      transitionProperty = prefixStyle('transitionProperty'),
      transitionDuration = prefixStyle('transitionDuration'),
      transformOrigin = prefixStyle('transformOrigin'),
      transitionTimingFunction = prefixStyle('transitionTimingFunction'),
      transitionDelay = prefixStyle('transitionDelay'),

      // Browser capabilities
      isAndroid = (/android/gi).test(navigator.appVersion),
      isIDevice = (/iphone|ipad/gi).test(navigator.appVersion),
      isTouchPad = (/hp-tablet/gi).test(navigator.appVersion),

      has3d = prefixStyle('perspective') in dummyStyle,
      hasTouch = 'ontouchstart' in window && !isTouchPad,
      hasTransform = !!vendor,
      hasTransitionEnd = prefixStyle('transition') in dummyStyle,

      RESIZE_EV = 'onorientationchange' in window ? 'orientationchange' : 'resize',
      START_EV = hasTouch ? 'touchstart' : 'mousedown',
      MOVE_EV = hasTouch ? 'touchmove' : 'mousemove',
      END_EV = hasTouch ? 'touchend' : 'mouseup',
      CANCEL_EV = hasTouch ? 'touchcancel' : 'mouseup',
      WHEEL_EV = vendor == 'Moz' ? 'DOMMouseScroll' : 'mousewheel',
      TRNEND_EV = (function () {
        if (vendor === false) return false;

        var transitionEnd = {
          '': 'transitionend',
          'webkit': 'webkitTransitionEnd',
          'Moz': 'transitionend',
          'O': 'oTransitionEnd',
          'ms': 'MSTransitionEnd'
        };

        return transitionEnd[vendor];
      })(),

      nextFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
              return setTimeout(callback, 1);
            };
      })(),
      cancelFrame = (function () {
        return window.cancelRequestAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.webkitCancelRequestAnimationFrame ||
            window.mozCancelRequestAnimationFrame ||
            window.oCancelRequestAnimationFrame ||
            window.msCancelRequestAnimationFrame ||
            clearTimeout;
      })(),

      // Helpers
      translateZ = has3d ? ' translateZ(0)' : '',

      // Constructor
      iScroll = function (el, options) {
        var that = this,
            i;

        that.wrapper = typeof el == 'object' ? el : doc.getElementById(el);
        that.wrapper.style.overflow = 'hidden';
        that.scroller = that.wrapper.children[0];

        // Default options
        that.options = {
          hScroll: true,
          vScroll: true,
          x: 0,
          y: 0,
          bounce: true,
          bounceLock: false,
          momentum: true,
          lockDirection: true,
          useTransform: true,
          useTransition: false,
          topOffset: 0,
          checkDOMChanges: false,        // Experimental
          handleClick: true,

          // Scrollbar
          hScrollbar: true,
          vScrollbar: true,
          fixedScrollbar: isAndroid,
          hideScrollbar: isIDevice,
          fadeScrollbar: isIDevice && has3d,
          scrollbarClass: '',

          // Zoom
          zoom: false,
          zoomMin: 1,
          zoomMax: 4,
          doubleTapZoom: 2,
          wheelAction: 'scroll',

          // Snap
          snap: false,
          snapThreshold: 1,

          // Events
          onRefresh: null,
          onBeforeScrollStart: function (e) {
            var target = e.target;
            while (target.nodeType != 1) target = target.parentNode;
            if (target.tagName != 'P') e.preventDefault();
          },
          onScrollStart: null,
          onBeforeScrollMove: null,
          onScrollMove: null,
          onBeforeScrollEnd: null,
          onScrollEnd: null,
          onTouchEnd: null,
          onDestroy: null,
          onZoomStart: null,
          onZoom: null,
          onZoomEnd: null
        };

        // User defined options
        for (i in options) that.options[i] = options[i];

        // Set starting position
        that.x = that.options.x;
        that.y = that.options.y;

        // Normalize options
        that.options.useTransform = hasTransform && that.options.useTransform;
        that.options.hScrollbar = that.options.hScroll && that.options.hScrollbar;
        that.options.vScrollbar = that.options.vScroll && that.options.vScrollbar;
        that.options.zoom = that.options.useTransform && that.options.zoom;
        that.options.useTransition = hasTransitionEnd && that.options.useTransition;

        // Helpers FIX ANDROID BUG!
        // translate3d and scale doesn't work together!
        // Ignoring 3d ONLY WHEN YOU SET that.options.zoom
        if (that.options.zoom && isAndroid) {
          translateZ = '';
        }

        // Set some default styles
        that.scroller.style[transitionProperty] = that.options.useTransform ? cssVendor + 'transform' : 'top left';
        that.scroller.style[transitionDuration] = '0';
        that.scroller.style[transformOrigin] = '0 0';
        if (that.options.useTransition) that.scroller.style[transitionTimingFunction] = 'cubic-bezier(0.33,0.66,0.66,1)';

        if (that.options.useTransform) that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px)' + translateZ;
        else that.scroller.style.cssText += ';position:absolute;top:' + that.y + 'px;left:' + that.x + 'px';

        if (that.options.useTransition) that.options.fixedScrollbar = true;

        that.refresh();

        that._bind(RESIZE_EV, window);
        that._bind(START_EV);
        if (!hasTouch) {
          that._bind('mouseout', that.wrapper);
          if (that.options.wheelAction != 'none')
            that._bind(WHEEL_EV);
        }

        if (that.options.checkDOMChanges) that.checkDOMTime = setInterval(function () {
          that._checkDOMChanges();
        }, 500);
      };

// Prototype
  iScroll.prototype = {
    enabled: true,
    x: 0,
    y: 0,
    steps: [],
    scale: 1,
    currPageX: 0, currPageY: 0,
    pagesX: [], pagesY: [],
    aniTime: null,
    wheelZoomCount: 0,

    handleEvent: function (e) {
      var that = this;
      switch (e.type) {
        case START_EV:
          if (!hasTouch && e.button !== 0) return;
          that._start(e);
          break;
        case MOVE_EV:
          that._move(e);
          break;
        case END_EV:
        case CANCEL_EV:
          that._end(e);
          break;
        case RESIZE_EV:
          that._resize();
          break;
        case WHEEL_EV:
          that._wheel(e);
          break;
        case 'mouseout':
          that._mouseout(e);
          break;
        case TRNEND_EV:
          that._transitionEnd(e);
          break;
      }
    },

    _checkDOMChanges: function () {
      if (this.moved || this.zoomed || this.animating ||
          (this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale)) return;

      this.refresh();
    },

    _scrollbar: function (dir) {
      var that = this,
          bar;

      if (!that[dir + 'Scrollbar']) {
        if (that[dir + 'ScrollbarWrapper']) {
          if (hasTransform) that[dir + 'ScrollbarIndicator'].style[transform] = '';
          that[dir + 'ScrollbarWrapper'].parentNode.removeChild(that[dir + 'ScrollbarWrapper']);
          that[dir + 'ScrollbarWrapper'] = null;
          that[dir + 'ScrollbarIndicator'] = null;
        }

        return;
      }

      if (!that[dir + 'ScrollbarWrapper']) {
        // Create the scrollbar wrapper
        bar = doc.createElement('div');

        if (that.options.scrollbarClass) bar.className = that.options.scrollbarClass + dir.toUpperCase();
        else bar.style.cssText = 'position:absolute;z-index:100;' + (dir == 'h' ? 'height:7px;bottom:1px;left:2px;right:' + (that.vScrollbar ? '7' : '2') + 'px' : 'width:7px;bottom:' + (that.hScrollbar ? '7' : '2') + 'px;top:2px;right:1px');

        bar.style.cssText += ';pointer-events:none;' + cssVendor + 'transition-property:opacity;' + cssVendor + 'transition-duration:' + (that.options.fadeScrollbar ? '350ms' : '0') + ';overflow:hidden;opacity:' + (that.options.hideScrollbar ? '0' : '1');

        that.wrapper.appendChild(bar);
        that[dir + 'ScrollbarWrapper'] = bar;

        // Create the scrollbar indicator
        bar = doc.createElement('div');
        if (!that.options.scrollbarClass) {
          bar.style.cssText = 'position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);' + cssVendor + 'background-clip:padding-box;' + cssVendor + 'box-sizing:border-box;' + (dir == 'h' ? 'height:100%' : 'width:100%') + ';' + cssVendor + 'border-radius:3px;border-radius:3px';
        }
        bar.style.cssText += ';pointer-events:none;' + cssVendor + 'transition-property:' + cssVendor + 'transform;' + cssVendor + 'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);' + cssVendor + 'transition-duration:0;' + cssVendor + 'transform: translate(0,0)' + translateZ;
        if (that.options.useTransition) bar.style.cssText += ';' + cssVendor + 'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)';

        that[dir + 'ScrollbarWrapper'].appendChild(bar);
        that[dir + 'ScrollbarIndicator'] = bar;
      }

      if (dir == 'h') {
        that.hScrollbarSize = that.hScrollbarWrapper.clientWidth;
        that.hScrollbarIndicatorSize = m.max(m.round(that.hScrollbarSize * that.hScrollbarSize / that.scrollerW), 8);
        that.hScrollbarIndicator.style.width = that.hScrollbarIndicatorSize + 'px';
        that.hScrollbarMaxScroll = that.hScrollbarSize - that.hScrollbarIndicatorSize;
        that.hScrollbarProp = that.hScrollbarMaxScroll / that.maxScrollX;
      } else {
        that.vScrollbarSize = that.vScrollbarWrapper.clientHeight;
        that.vScrollbarIndicatorSize = m.max(m.round(that.vScrollbarSize * that.vScrollbarSize / that.scrollerH), 8);
        that.vScrollbarIndicator.style.height = that.vScrollbarIndicatorSize + 'px';
        that.vScrollbarMaxScroll = that.vScrollbarSize - that.vScrollbarIndicatorSize;
        that.vScrollbarProp = that.vScrollbarMaxScroll / that.maxScrollY;
      }

      // Reset position
      that._scrollbarPos(dir, true);
    },

    _resize: function () {
      var that = this;
      setTimeout(function () {
        that.refresh();
      }, isAndroid ? 200 : 0);
    },

    _pos: function (x, y) {
      if (this.zoomed) return;

      x = this.hScroll ? x : 0;
      y = this.vScroll ? y : 0;

      if (this.options.useTransform) {
        this.scroller.style[transform] = 'translate(' + x + 'px,' + y + 'px) scale(' + this.scale + ')' + translateZ;
      } else {
        x = m.round(x);
        y = m.round(y);
        this.scroller.style.left = x + 'px';
        this.scroller.style.top = y + 'px';
      }

      this.x = x;
      this.y = y;

      this._scrollbarPos('h');
      this._scrollbarPos('v');
    },

    _scrollbarPos: function (dir, hidden) {
      var that = this,
          pos = dir == 'h' ? that.x : that.y,
          size;

      if (!that[dir + 'Scrollbar']) return;

      pos = that[dir + 'ScrollbarProp'] * pos;

      if (pos < 0) {
        if (!that.options.fixedScrollbar) {
          size = that[dir + 'ScrollbarIndicatorSize'] + m.round(pos * 3);
          if (size < 8) size = 8;
          that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
        }
        pos = 0;
      } else if (pos > that[dir + 'ScrollbarMaxScroll']) {
        if (!that.options.fixedScrollbar) {
          size = that[dir + 'ScrollbarIndicatorSize'] - m.round((pos - that[dir + 'ScrollbarMaxScroll']) * 3);
          if (size < 8) size = 8;
          that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
          pos = that[dir + 'ScrollbarMaxScroll'] + (that[dir + 'ScrollbarIndicatorSize'] - size);
        } else {
          pos = that[dir + 'ScrollbarMaxScroll'];
        }
      }

      that[dir + 'ScrollbarWrapper'].style[transitionDelay] = '0';
      that[dir + 'ScrollbarWrapper'].style.opacity = hidden && that.options.hideScrollbar ? '0' : '1';
      that[dir + 'ScrollbarIndicator'].style[transform] = 'translate(' + (dir == 'h' ? pos + 'px,0)' : '0,' + pos + 'px)') + translateZ;
    },

    _start: function (e) {
      var that = this,
          point = hasTouch ? e.touches[0] : e,
          matrix, x, y,
          c1, c2;

      if (!that.enabled) return;

      if (that.options.onBeforeScrollStart) that.options.onBeforeScrollStart.call(that, e);

      if (that.options.useTransition || that.options.zoom) that._transitionTime(0);

      that.moved = false;
      that.animating = false;
      that.zoomed = false;
      that.distX = 0;
      that.distY = 0;
      that.absDistX = 0;
      that.absDistY = 0;
      that.dirX = 0;
      that.dirY = 0;

      // Gesture start
      if (that.options.zoom && hasTouch && e.touches.length > 1) {
        c1 = m.abs(e.touches[0].pageX - e.touches[1].pageX);
        c2 = m.abs(e.touches[0].pageY - e.touches[1].pageY);
        that.touchesDistStart = m.sqrt(c1 * c1 + c2 * c2);

        that.originX = m.abs(e.touches[0].pageX + e.touches[1].pageX - that.wrapperOffsetLeft * 2) / 2 - that.x;
        that.originY = m.abs(e.touches[0].pageY + e.touches[1].pageY - that.wrapperOffsetTop * 2) / 2 - that.y;

        if (that.options.onZoomStart) that.options.onZoomStart.call(that, e);
      }

      if (that.options.momentum) {
        if (that.options.useTransform) {
          // Very lame general purpose alternative to CSSMatrix
          matrix = getComputedStyle(that.scroller, null)[transform].replace(/[^0-9\-.,]/g, '').split(',');
          x = matrix[4] * 1;
          y = matrix[5] * 1;
        } else {
          x = getComputedStyle(that.scroller, null).left.replace(/[^0-9-]/g, '') * 1;
          y = getComputedStyle(that.scroller, null).top.replace(/[^0-9-]/g, '') * 1;
        }

        if (x != that.x || y != that.y) {
          if (that.options.useTransition) that._unbind(TRNEND_EV);
          else cancelFrame(that.aniTime);
          that.steps = [];
          that._pos(x, y);
        }
      }

      that.absStartX = that.x;    // Needed by snap threshold
      that.absStartY = that.y;

      that.startX = that.x;
      that.startY = that.y;
      that.pointX = point.pageX;
      that.pointY = point.pageY;

      that.startTime = e.timeStamp || Date.now();

      if (that.options.onScrollStart) that.options.onScrollStart.call(that, e);

      that._bind(MOVE_EV);
      that._bind(END_EV);
      that._bind(CANCEL_EV);
    },

    _move: function (e) {
      var that = this,
          point = hasTouch ? e.touches[0] : e,
          deltaX = point.pageX - that.pointX,
          deltaY = point.pageY - that.pointY,
          newX = that.x + deltaX,
          newY = that.y + deltaY,
          c1, c2, scale,
          timestamp = e.timeStamp || Date.now();

      if (that.options.onBeforeScrollMove) that.options.onBeforeScrollMove.call(that, e);

      // Zoom
      if (that.options.zoom && hasTouch && e.touches.length > 1) {
        c1 = m.abs(e.touches[0].pageX - e.touches[1].pageX);
        c2 = m.abs(e.touches[0].pageY - e.touches[1].pageY);
        that.touchesDist = m.sqrt(c1 * c1 + c2 * c2);

        that.zoomed = true;

        scale = 1 / that.touchesDistStart * that.touchesDist * this.scale;

        if (scale < that.options.zoomMin) scale = 0.5 * that.options.zoomMin * Math.pow(2.0, scale / that.options.zoomMin);
        else if (scale > that.options.zoomMax) scale = 2.0 * that.options.zoomMax * Math.pow(0.5, that.options.zoomMax / scale);

        that.lastScale = scale / this.scale;

        newX = this.originX - this.originX * that.lastScale + this.x,
            newY = this.originY - this.originY * that.lastScale + this.y;

        this.scroller.style[transform] = 'translate(' + newX + 'px,' + newY + 'px) scale(' + scale + ')' + translateZ;

        if (that.options.onZoom) that.options.onZoom.call(that, e);
        return;
      }

      that.pointX = point.pageX;
      that.pointY = point.pageY;

      // Slow down if outside of the boundaries
      if (newX > 0 || newX < that.maxScrollX) {
        newX = that.options.bounce ? that.x + (deltaX / 2) : newX >= 0 || that.maxScrollX >= 0 ? 0 : that.maxScrollX;
      }
      if (newY > that.minScrollY || newY < that.maxScrollY) {
        newY = that.options.bounce ? that.y + (deltaY / 2) : newY >= that.minScrollY || that.maxScrollY >= 0 ? that.minScrollY : that.maxScrollY;
      }

      that.distX += deltaX;
      that.distY += deltaY;
      that.absDistX = m.abs(that.distX);
      that.absDistY = m.abs(that.distY);

      if (that.absDistX < 6 && that.absDistY < 6) {
        return;
      }

      // Lock direction
      if (that.options.lockDirection) {
        if (that.absDistX > that.absDistY + 5) {
          newY = that.y;
          deltaY = 0;
        } else if (that.absDistY > that.absDistX + 5) {
          newX = that.x;
          deltaX = 0;
        }
      }

      that.moved = true;
      that._pos(newX, newY);
      that.dirX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
      that.dirY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

      if (timestamp - that.startTime > 300) {
        that.startTime = timestamp;
        that.startX = that.x;
        that.startY = that.y;
      }

      if (that.options.onScrollMove) that.options.onScrollMove.call(that, e);
    },

    _end: function (e) {
      if (hasTouch && e.touches.length !== 0) return;

      var that = this,
          point = hasTouch ? e.changedTouches[0] : e,
          target, ev,
          momentumX = {dist: 0, time: 0},
          momentumY = {dist: 0, time: 0},
          duration = (e.timeStamp || Date.now()) - that.startTime,
          newPosX = that.x,
          newPosY = that.y,
          distX, distY,
          newDuration,
          snap,
          scale;

      that._unbind(MOVE_EV);
      that._unbind(END_EV);
      that._unbind(CANCEL_EV);


      if (that.options.onBeforeScrollEnd) that.options.onBeforeScrollEnd.call(that, e);

      if (that.zoomed) {
        scale = that.scale * that.lastScale;
        scale = Math.max(that.options.zoomMin, scale);
        scale = Math.min(that.options.zoomMax, scale);
        that.lastScale = scale / that.scale;
        that.scale = scale;

        that.x = that.originX - that.originX * that.lastScale + that.x;
        that.y = that.originY - that.originY * that.lastScale + that.y;

        that.scroller.style[transitionDuration] = '200ms';
        that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px) scale(' + that.scale + ')' + translateZ;

        that.zoomed = false;
        that.refresh();

        if (that.options.onZoomEnd) that.options.onZoomEnd.call(that, e);

        return;
      }

      if (!that.moved) {
        if (hasTouch) {
          if (that.doubleTapTimer && that.options.zoom) {
            // Double tapped
            clearTimeout(that.doubleTapTimer);
            that.doubleTapTimer = null;
            if (that.options.onZoomStart) that.options.onZoomStart.call(that, e);
            that.zoom(that.pointX, that.pointY, that.scale == 1 ? that.options.doubleTapZoom : 1);
            if (that.options.onZoomEnd) {
              setTimeout(function () {
                that.options.onZoomEnd.call(that, e);
              }, 200); // 200 is default zoom duration
            }
          } else if (this.options.handleClick) {
            that.doubleTapTimer = setTimeout(function () {
              that.doubleTapTimer = null;

              // Find the last touched element
              target = point.target;
              while (target.nodeType != 1) target = target.parentNode;

              if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA') {
                ev = doc.createEvent('MouseEvents');
                ev.initMouseEvent('click', true, true, e.view, 1,
                    point.screenX, point.screenY, point.clientX, point.clientY,
                    e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
                    0, null);
                ev._fake = true;
                target.dispatchEvent(ev);
              }
            }, that.options.zoom ? 250 : 0);
          }
        }

        that._resetPos(200);
        if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
        return;
      }

      if (duration < 300 && that.options.momentum) {
        momentumX = newPosX ? that._momentum(newPosX - that.startX, duration, -that.x, that.scrollerW - that.wrapperW + that.x, that.options.bounce ? that.wrapperW : 0) : momentumX;
        momentumY = newPosY ? that._momentum(newPosY - that.startY, duration, -that.y, (that.maxScrollY < 0 ? that.scrollerH - that.wrapperH + that.y - that.minScrollY : 0), that.options.bounce ? that.wrapperH : 0) : momentumY;

        newPosX = that.x + momentumX.dist;
        newPosY = that.y + momentumY.dist;

        if ((that.x > 0 && newPosX > 0) || (that.x < that.maxScrollX && newPosX < that.maxScrollX)) momentumX = {
          dist: 0,
          time: 0
        };
        if ((that.y > that.minScrollY && newPosY > that.minScrollY) || (that.y < that.maxScrollY && newPosY < that.maxScrollY)) momentumY = {
          dist: 0,
          time: 0
        };

        //如果,已经移动过,中止唤起聊天窗口
        var ptarget = JM.event.getActionTarget(e, 2);
        //clickMemberItem
        if (ptarget && ptarget.getAttribute('cmd') == 'clickMemberItem') {
          var stopPropogation = function (ev) {
            ev.stopPropagation();
            ev.preventDefault();
            JM.event.off(ptarget, 'click', stopPropogation);
          };
          JM.event.on(ptarget, 'click', stopPropogation);
        }
      }

      if (momentumX.dist || momentumY.dist) {
        newDuration = m.max(m.max(momentumX.time, momentumY.time), 10);

        // Do we need to snap?
        if (that.options.snap) {
          distX = newPosX - that.absStartX;
          distY = newPosY - that.absStartY;
          if (m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) {
            that.scrollTo(that.absStartX, that.absStartY, 200);
          }
          else {
            snap = that._snap(newPosX, newPosY);
            newPosX = snap.x;
            newPosY = snap.y;
            newDuration = m.max(snap.time, newDuration);
          }
        }

        that.scrollTo(m.round(newPosX), m.round(newPosY), newDuration);
        if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
        return;
      }

      // Do we need to snap?
      if (that.options.snap) {
        distX = newPosX - that.absStartX;
        distY = newPosY - that.absStartY;
        if (m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) that.scrollTo(that.absStartX, that.absStartY, 200);
        else {
          snap = that._snap(that.x, that.y);
          if (snap.x != that.x || snap.y != that.y) that.scrollTo(snap.x, snap.y, snap.time);
        }

        if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
        return;
      }
      that._resetPos(200);
      if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
    },

    _resetPos: function (time) {
      var that = this,
          resetX = that.x >= 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x,
          resetY = that.y >= that.minScrollY || that.maxScrollY > 0 ? that.minScrollY : that.y < that.maxScrollY ? that.maxScrollY : that.y;

      if (resetX == that.x && resetY == that.y) {
        if (that.moved) {
          that.moved = false;
          if (that.options.onScrollEnd) that.options.onScrollEnd.call(that);        // Execute custom code on scroll end
        }

        if (that.hScrollbar && that.options.hideScrollbar) {
          if (vendor == 'webkit') that.hScrollbarWrapper.style[transitionDelay] = '300ms';
          that.hScrollbarWrapper.style.opacity = '0';
        }
        if (that.vScrollbar && that.options.hideScrollbar) {
          if (vendor == 'webkit') that.vScrollbarWrapper.style[transitionDelay] = '300ms';
          that.vScrollbarWrapper.style.opacity = '0';
        }

        return;
      }

      that.scrollTo(resetX, resetY, time || 0);
    },

    _wheel: function (e) {
      var that = this,
          wheelDeltaX, wheelDeltaY,
          deltaX, deltaY,
          deltaScale;
      //滚轮速度
      if ('wheelDeltaX' in e) {

        wheelDeltaX = e.wheelDeltaX / 2;
        wheelDeltaY = e.wheelDeltaY / 2;
      } else if ('wheelDelta' in e) {
        wheelDeltaX = wheelDeltaY = e.wheelDelta / 2;
      } else if ('detail' in e) {
        wheelDeltaX = wheelDeltaY = -e.detail * 9;
      } else {
        return;
      }

      if (that.options.wheelAction == 'zoom') {
        deltaScale = that.scale * Math.pow(2, 1 / 3 * (wheelDeltaY ? wheelDeltaY / Math.abs(wheelDeltaY) : 0));
        if (deltaScale < that.options.zoomMin) deltaScale = that.options.zoomMin;
        if (deltaScale > that.options.zoomMax) deltaScale = that.options.zoomMax;

        if (deltaScale != that.scale) {
          if (!that.wheelZoomCount && that.options.onZoomStart) that.options.onZoomStart.call(that, e);
          that.wheelZoomCount++;

          that.zoom(e.pageX, e.pageY, deltaScale, 400);

          setTimeout(function () {
            that.wheelZoomCount--;
            if (!that.wheelZoomCount && that.options.onZoomEnd) that.options.onZoomEnd.call(that, e);
          }, 400);
        }

        return;
      }

      deltaX = that.x + wheelDeltaX;
      deltaY = that.y + wheelDeltaY;

      if (deltaX > 0) deltaX = 0;
      else if (deltaX < that.maxScrollX) deltaX = that.maxScrollX;

      if (deltaY > that.minScrollY) deltaY = that.minScrollY;
      else if (deltaY < that.maxScrollY) deltaY = that.maxScrollY;

      if (that.maxScrollY < 0) {
        that.scrollTo(deltaX, deltaY, 0);
      }
    },

    _mouseout: function (e) {
      var t = e.relatedTarget;

      if (!t) {
        this._end(e);
        return;
      }

      while (t = t.parentNode) if (t == this.wrapper) return;

      this._end(e);
    },

    _transitionEnd: function (e) {
      var that = this;

      if (e.target != that.scroller) return;

      that._unbind(TRNEND_EV);

      that._startAni();
    },


    /**
     *
     * Utilities
     *
     */
    _startAni: function () {
      var that = this,
          startX = that.x, startY = that.y,
          startTime = Date.now(),
          step, easeOut,
          animate;

      if (that.animating) return;

      if (!that.steps.length) {
        that._resetPos(400);
        return;
      }

      step = that.steps.shift();

      if (step.x == startX && step.y == startY) step.time = 0;

      that.animating = true;
      that.moved = true;

      if (that.options.useTransition) {
        that._transitionTime(step.time);
        that._pos(step.x, step.y);
        that.animating = false;
        if (step.time) that._bind(TRNEND_EV);
        else that._resetPos(0);
        return;
      }

      animate = function () {
        var now = Date.now(),
            newX, newY;

        if (now >= startTime + step.time) {
          that._pos(step.x, step.y);
          that.animating = false;
          if (that.options.onAnimationEnd) that.options.onAnimationEnd.call(that);            // Execute custom code on animation end
          that._startAni();
          return;
        }

        now = (now - startTime) / step.time - 1;
        easeOut = m.sqrt(1 - now * now);
        newX = (step.x - startX) * easeOut + startX;
        newY = (step.y - startY) * easeOut + startY;
        that._pos(newX, newY);
        if (that.animating) that.aniTime = nextFrame(animate);
      };

      animate();
    },

    _transitionTime: function (time) {
      time += 'ms';
      this.scroller.style[transitionDuration] = time;
      if (this.hScrollbar) this.hScrollbarIndicator.style[transitionDuration] = time;
      if (this.vScrollbar) this.vScrollbarIndicator.style[transitionDuration] = time;
    },

    _momentum: function (dist, time, maxDistUpper, maxDistLower, size) {
      var deceleration = 0.0006,
          speed = m.abs(dist) / time,
          newDist = (speed * speed) / (2 * deceleration),
          newTime = 0, outsideDist = 0;

      // Proportinally reduce speed if we are outside of the boundaries
      if (dist > 0 && newDist > maxDistUpper) {
        outsideDist = size / (6 / (newDist / speed * deceleration));
        maxDistUpper = maxDistUpper + outsideDist;
        speed = speed * maxDistUpper / newDist;
        newDist = maxDistUpper;
      } else if (dist < 0 && newDist > maxDistLower) {
        outsideDist = size / (6 / (newDist / speed * deceleration));
        maxDistLower = maxDistLower + outsideDist;
        speed = speed * maxDistLower / newDist;
        newDist = maxDistLower;
      }

      newDist = newDist * (dist < 0 ? -1 : 1);
      newTime = speed / deceleration;

      return {dist: newDist, time: m.round(newTime)};
    },

    _offset: function (el) {
      var left = -el.offsetLeft,
          top = -el.offsetTop;

      while (el = el.offsetParent) {
        left -= el.offsetLeft;
        top -= el.offsetTop;
      }

      if (el != this.wrapper) {
        left *= this.scale;
        top *= this.scale;
      }

      return {left: left, top: top};
    },

    _snap: function (x, y) {
      var that = this,
          i, l,
          page, time,
          sizeX, sizeY;

      // Check page X
      page = that.pagesX.length - 1;
      for (i = 0, l = that.pagesX.length; i < l; i++) {
        if (x >= that.pagesX[i]) {
          page = i;
          break;
        }
      }
      if (page == that.currPageX && page > 0 && that.dirX < 0) page--;
      x = that.pagesX[page];
      sizeX = m.abs(x - that.pagesX[that.currPageX]);
      sizeX = sizeX ? m.abs(that.x - x) / sizeX * 500 : 0;
      that.currPageX = page;

      // Check page Y
      page = that.pagesY.length - 1;
      for (i = 0; i < page; i++) {
        if (y >= that.pagesY[i]) {
          page = i;
          break;
        }
      }
      if (page == that.currPageY && page > 0 && that.dirY < 0) page--;
      y = that.pagesY[page];
      sizeY = m.abs(y - that.pagesY[that.currPageY]);
      sizeY = sizeY ? m.abs(that.y - y) / sizeY * 500 : 0;
      that.currPageY = page;

      // Snap with constant speed (proportional duration)
      time = m.round(m.max(sizeX, sizeY)) || 200;

      return {x: x, y: y, time: time};
    },

    _bind: function (type, el, bubble) {
      (el || this.scroller).addEventListener(type, this, !!bubble);
    },

    _unbind: function (type, el, bubble) {
      (el || this.scroller).removeEventListener(type, this, !!bubble);
    },


    /**
     *
     * Public methods
     *
     */
    destroy: function () {
      var that = this;

      that.scroller.style[transform] = '';

      // Remove the scrollbars
      that.hScrollbar = false;
      that.vScrollbar = false;
      that._scrollbar('h');
      that._scrollbar('v');

      // Remove the event listeners
      that._unbind(RESIZE_EV, window);
      that._unbind(START_EV);
      that._unbind(MOVE_EV);
      that._unbind(END_EV);
      that._unbind(CANCEL_EV);

      if (!that.options.hasTouch) {
        that._unbind('mouseout', that.wrapper);
        that._unbind(WHEEL_EV);
      }

      if (that.options.useTransition) that._unbind(TRNEND_EV);

      if (that.options.checkDOMChanges) clearInterval(that.checkDOMTime);

      if (that.options.onDestroy) that.options.onDestroy.call(that);
    },

    refresh: function () {
      var that = this,
          offset,
          i, l,
          els,
          pos = 0,
          page = 0;

      if (that.scale < that.options.zoomMin) that.scale = that.options.zoomMin;
      that.wrapperW = that.wrapper.clientWidth || 1;
      that.wrapperH = that.wrapper.clientHeight || 1;

      that.minScrollY = -that.options.topOffset || 0;
      that.scrollerW = m.round(that.scroller.offsetWidth * that.scale);
      that.scrollerH = m.round((that.scroller.offsetHeight + that.minScrollY) * that.scale);
      that.maxScrollX = that.wrapperW - that.scrollerW;
      that.maxScrollY = that.wrapperH - that.scrollerH + that.minScrollY;
      that.dirX = 0;
      that.dirY = 0;

      if (that.options.onRefresh) that.options.onRefresh.call(that);

      that.hScroll = that.options.hScroll && that.maxScrollX < 0;
      that.vScroll = that.options.vScroll && (!that.options.bounceLock && !that.hScroll || that.scrollerH > that.wrapperH);

      that.hScrollbar = that.hScroll && that.options.hScrollbar;
      that.vScrollbar = that.vScroll && that.options.vScrollbar && that.scrollerH > that.wrapperH;

      offset = that._offset(that.wrapper);
      that.wrapperOffsetLeft = -offset.left;
      that.wrapperOffsetTop = -offset.top;

      // Prepare snap
      if (typeof that.options.snap == 'string') {
        that.pagesX = [];
        that.pagesY = [];
        els = that.scroller.querySelectorAll(that.options.snap);
        for (i = 0, l = els.length; i < l; i++) {
          pos = that._offset(els[i]);
          pos.left += that.wrapperOffsetLeft;
          pos.top += that.wrapperOffsetTop;
          that.pagesX[i] = pos.left < that.maxScrollX ? that.maxScrollX : pos.left * that.scale;
          that.pagesY[i] = pos.top < that.maxScrollY ? that.maxScrollY : pos.top * that.scale;
        }
      } else if (that.options.snap) {
        that.pagesX = [];
        while (pos >= that.maxScrollX) {
          that.pagesX[page] = pos;
          pos = pos - that.wrapperW;
          page++;
        }
        if (that.maxScrollX % that.wrapperW) that.pagesX[that.pagesX.length] = that.maxScrollX - that.pagesX[that.pagesX.length - 1] + that.pagesX[that.pagesX.length - 1];

        pos = 0;
        page = 0;
        that.pagesY = [];
        while (pos >= that.maxScrollY) {
          that.pagesY[page] = pos;
          pos = pos - that.wrapperH;
          page++;
        }
        if (that.maxScrollY % that.wrapperH) that.pagesY[that.pagesY.length] = that.maxScrollY - that.pagesY[that.pagesY.length - 1] + that.pagesY[that.pagesY.length - 1];
      }

      // Prepare the scrollbars
      that._scrollbar('h');
      that._scrollbar('v');

      if (!that.zoomed) {
        that.scroller.style[transitionDuration] = '0';
        that._resetPos(200);
      }
    },

    scrollTo: function (x, y, time, relative) {
      var that = this,
          step = x,
          i, l;

      that.stop();

      if (!step.length) step = [{x: x, y: y, time: time, relative: relative}];

      for (i = 0, l = step.length; i < l; i++) {
        if (step[i].relative) {
          step[i].x = that.x - step[i].x;
          step[i].y = that.y - step[i].y;
        }
        that.steps.push({x: step[i].x, y: step[i].y, time: step[i].time || 0});
      }

      that._startAni();
    },

    scrollToElement: function (el, time) {
      var that = this, pos;
      el = el.nodeType ? el : that.scroller.querySelector(el);
      if (!el) return;

      pos = that._offset(el);
      pos.left += that.wrapperOffsetLeft;
      pos.top += that.wrapperOffsetTop;

      pos.left = pos.left > 0 ? 0 : pos.left < that.maxScrollX ? that.maxScrollX : pos.left;
      pos.top = pos.top > that.minScrollY ? that.minScrollY : pos.top < that.maxScrollY ? that.maxScrollY : pos.top;
      time = time === undefined ? m.max(m.abs(pos.left) * 2, m.abs(pos.top) * 2) : time;

      that.scrollTo(pos.left, pos.top, time);
    },

    scrollToPage: function (pageX, pageY, time) {
      var that = this, x, y;

      time = time === undefined ? 400 : time;

      if (that.options.onScrollStart) that.options.onScrollStart.call(that);

      if (that.options.snap) {
        pageX = pageX == 'next' ? that.currPageX + 1 : pageX == 'prev' ? that.currPageX - 1 : pageX;
        pageY = pageY == 'next' ? that.currPageY + 1 : pageY == 'prev' ? that.currPageY - 1 : pageY;

        pageX = pageX < 0 ? 0 : pageX > that.pagesX.length - 1 ? that.pagesX.length - 1 : pageX;
        pageY = pageY < 0 ? 0 : pageY > that.pagesY.length - 1 ? that.pagesY.length - 1 : pageY;

        that.currPageX = pageX;
        that.currPageY = pageY;
        x = that.pagesX[pageX];
        y = that.pagesY[pageY];
      } else {
        x = -that.wrapperW * pageX;
        y = -that.wrapperH * pageY;
        if (x < that.maxScrollX) x = that.maxScrollX;
        if (y < that.maxScrollY) y = that.maxScrollY;
      }

      that.scrollTo(x, y, time);
    },

    disable: function () {
      this.stop();
      this._resetPos(0);
      this.enabled = false;

      // If disabled after touchstart we make sure that there are no left over events
      this._unbind(MOVE_EV);
      this._unbind(END_EV);
      this._unbind(CANCEL_EV);
    },

    enable: function () {
      this.enabled = true;
    },

    stop: function () {
      if (this.options.useTransition) this._unbind(TRNEND_EV);
      else cancelFrame(this.aniTime);
      this.steps = [];
      this.moved = false;
      this.animating = false;
    },

    zoom: function (x, y, scale, time) {
      var that = this,
          relScale = scale / that.scale;

      if (!that.options.useTransform) return;

      that.zoomed = true;
      time = time === undefined ? 200 : time;
      x = x - that.wrapperOffsetLeft - that.x;
      y = y - that.wrapperOffsetTop - that.y;
      that.x = x - x * relScale + that.x;
      that.y = y - y * relScale + that.y;

      that.scale = scale;
      that.refresh();

      that.x = that.x > 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x;
      that.y = that.y > that.minScrollY ? that.minScrollY : that.y < that.maxScrollY ? that.maxScrollY : that.y;

      that.scroller.style[transitionDuration] = time + 'ms';
      that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px) scale(' + scale + ')' + translateZ;
      that.zoomed = false;
    },

    isReady: function () {
      return !this.moved && !this.zoomed && !this.animating;
    }
  };

  function prefixStyle(style) {
    if (vendor === '') return style;

    style = style.charAt(0).toUpperCase() + style.substr(1);
    return vendor + style;
  }

  dummyStyle = null;    // for the sake of it

  window.iScroll = iScroll;
  if (typeof define === "function") define('iscroll', [], function () {
    return iScroll;
  });

})(this, document);

/**
 * @monitorId MonitorId 可选，但强烈建议上报Monitor系统便于监控
 * 错误查询界面：http;//nlog.server.com
 */
(function error(monitorId) {
  var BID = 130;
  var ERROR_URL = 'https://badjs2.qq.com/cgi-bin/js_report?';
  var MONITOR_URL = "https://report.url.cn/report/report_vm?";
  var errorTransport = null;
  var monitorTransport = null;
  window.onerror = function (errorMsg, url, lineNumber) {
    var bid = 'bid=' + BID;
    var mid = '';
    var msg = 'msg=' + encodeURIComponent([errorMsg, url, lineNumber, navigator.userAgent].join("|_|"));
    var src = ERROR_URL + [bid, mid, msg].join("&");
    errorTransport = new Image;
    errorTransport.src = src;
    monitorTransport = new Image;
    errorTransport.src = MONITOR_URL + "monitors=[" + monitorId + "]";
  };
})(340059);
define("error", function () {
});

define('mq.portal', [
  /*"./ping",*/
  "./error",
  "jm"
], function () {
  J.$package("mq", function (J) {
    var VERSION = '0.0.1';

    this.MAIN_DOMAIN = window.location.host;
    this.MAIN_URL = '//' + this.MAIN_DOMAIN + '/';
    this.WEBQQ_MAIN_URL = '//web2.qq.com/';

    this.STATIC_CGI_URL = '//s.web2.qq.com/';
    this.DYNAMIC_CGI_URL = '//d1.web2.qq.com/';

    this.FILE_SERVER = '//file1.web.qq.com/';

    this.setting = {};

    this.getVersion = function () {
      return VERSION;
    }

    this.log = function (msg) {
      if (window.console && console.log && console.log.apply) {
        console.log.apply(console, arguments);
      }
    }

    this.debug = function (msg) {
      if (window.console) {
        var method = console.error || console.debug || console.dir || console.log;
        method.apply && method.apply(console, arguments);
      }
    }

    this.error = function (msg) {
      if (window.console && console.error && console.log.apply) {
        console.error.apply(console, arguments);
      }
    }

    if (typeof pgvMain == 'function') {
      pgvMain();
    }

    // monitor视图ID：16049
    this.monitor = function (n) {
      Object.prototype.toString.call(n) !== "[object Array]" && (n = [n]);
      var t = "//report.url.cn/report/report_vm?monitors=[" + n.join(",") + "]&t=" + new Date, i = new Image;
      i.src = t
    };

    if (typeof localStorage == 'undefined') {
      localStorage = this.setting;
    }

    var getLocalBoolean = function (key, $default) {
      if (key in localStorage) {
        return localStorage[key] == 'true';
      } else {
        return $default;
      }
    };

    this.loadSetting = function () {
      this.setting = {
        enableHttps: getLocalBoolean("enableHttps", false),
        enableCtrlEnter: getLocalBoolean("enableCtrlEnter", false),
        enableVoice: getLocalBoolean("enableVoice", true),
        enableNotification: getLocalBoolean("enableNotification", true)
      }
    };

    this.saveSetting = function (setting) {
      var keys = ["enableVoice", "enableNotification", "enableHttps", "enableCtrlEnter"];
      for (var i = 0, key; key = keys[i]; i++) {
        if (key in setting) {
          this.setting[key] = localStorage[key] = setting[key];
        }
      }
    };

  });
});

define('tmpl', {
  load: function (id) {
    throw new Error("Dynamic load not allowed: " + id);
  }
});

define('tmpl!../tmpl/tmpl_main_top.html', [], function () {
  return function (obj) {
    var __t, __p = '', __j = Array.prototype.join, print = function () {
      __p += __j.call(arguments, '');
    };
    with (obj || {}) {
      __p += '<div class="accountHeader">\r\n    <div class="avatar_wrap">\r\n        <img src="' +
          ((__t = (user.avatar)) == null ? '' : __t) +
          '" width="40" height="40"/>\r\n        <span id="user_online_state"></span>\r\n    </div>\r\n    <span class="text_ellipsis user_nick">' +
          ((__t = (encode(user.nick))) == null ? '' : __t) +
          '</span>\r\n    <span class="text_ellipsis user_shuoshuo">' +
          ((__t = (encode(user.lnick))) == null ? '' : __t) +
          '</span>\r\n    <div class="icons_list">\r\n    \t<a href="https://qzone.qq.com" class="i_qzone" target="_blank" title="QQ空间">QQ空间</a>\r\n    \t<a href="https://mail.qq.com" class="i_mail" target="_blank" title="QQ邮箱">QQ邮箱</a>\r\n    \t<a href="http://t.qq.com" class="i_weibo" target="_blank" title="腾讯微博">腾讯微博</a>\r\n    \t<a href="https://v.qq.com" class="i_video" target="_blank" title="腾讯视频">腾讯视频</a>\r\n    \t<a href="http://www.qq.com" class="i_qqwebsite" target="_blank" title="腾讯网">腾讯网</a>\r\n    \t<a href="https://y.qq.com" class="i_music" target="_blank" title="QQ音乐">QQ音乐</a>\r\n    \t<a href="https://wallet.tenpay.com/web/" class="i_wallet" target="_blank" title="QQ钱包">QQ钱包</a>\r\n    \t<a href="http://www.pengyou.com" class="i_pengyou" target="_blank" title="朋友网">朋友网</a>\r\n    \t<a href="https://www.weiyun.com" class="i_weiyun" target="_blank" title="微云">微云</a>\r\n    </div>\r\n</div>\r\n<div class="wallpaper-ctrl">\r\n    <a href="###" class="wallpaperImg pre" id="wp-ctrl-pre" title="点击切换背景图片" cmd="clickWPPre"> </a>\r\n    <a href="###" class="wallpaperImg next" id="wp-ctrl-next" title="点击切换背景图片" cmd="clickWPNext"> </a>\r\n</div>\r\n';
    }
    return __p;
  };
});

define('../lib/mui/js/mui.tab', ['jm'], function () {
  JM.$package("MUI", function (J) {
    var $D = J.dom,
        $E = J.event,
        $T = J.type;

    /**
     * Tab 逻辑类
     * @type {Object} option
     * items: [{id, trigger, sheet }]
     */
    var Tab = new J.Class({
      init: function (option) {
        this._arr = [];
        this._map = {};
        this._selectedIndex = -1;

        option = option || {};
        if (option.items) {
          this.addRange(option.items);
        }
        this._selectedClass = option.selectedClass || "selected";
        //是否允许重复选择当前 tab
        this._selectOnCurrent = option.selectOnCurrent || false;
        if ('defaultSelected' in option) {
          this.select(option.defaultSelected, true);
        }
      },
      /**
       * 选中指定 tab, 参数可以传 id 或者 tab 下标
       * @param  {Mixed} idOrIndex
       * @return {Boolean}
       */
      select: function (idOrIndex, noEvent, force) {
        var obj = this.get(idOrIndex);
        if (!obj) {
          return false;
        }
        if (this._selectedIndex === obj.index && !this._selectOnCurrent && !force) {
          return false;
        }
        var target = obj.item,
            current = null,
            currentIndex = this._selectedIndex;
        if (this._selectedIndex !== -1 && (current = this._arr[this._selectedIndex])) {
          current.trigger &&
          $D.removeClass(current.trigger, this._selectedClass);
          current.sheet &&
          $D.removeClass(current.sheet, this._selectedClass);
        }
        if (this._selectedIndex === obj.index) {
          //如果是再次选中当前 tab , 隐藏之
          this._selectedIndex = -1;
        } else {
          this._selectedIndex = obj.index;
          target.trigger &&
          $D.addClass(target.trigger, this._selectedClass);
          target.sheet &&
          $D.addClass(target.sheet, this._selectedClass);
        }
        if (!noEvent) {
          $E.fire(this, 'selected', {
            current: target,
            currentIndex: obj.index,
            last: current,
            lastIndex: currentIndex
          });
        }

        return true;
      },
      add: function (item, index) {
        if (this._map[item.id]) {
          return false;
        }
        this._map[item.id] = item;
        if (typeof index == 'undefined') {
          this._arr.push(item);
        } else {
          this._arr.splice(index, 0, item);
          if (this._selectedIndex >= index) {
            this._selectedIndex++;
          }
        }
      },
      addRange: function (items) {
        for (var i = 0, item; item = items[i]; i++) {
          this.add(item);
        }
      },
      remove: function (idOrIndex) {
        var obj = this.get(idOrIndex);
        if (!obj) {
          return false;
        }
        this._arr.splice(obj.index, 1);
        delete this._map[obj.item.id];
        if (this._selectedIndex === obj.index) {
          this.select(this._arr.length - 1);
        }
        return obj;
      },
      clear: function () {
        this._selectedIndex = -1;
        this._arr = [];
        this._map = {};
      },
      get: function (idOrIndex) {
        var index, id, item;
        index = id = idOrIndex;
        if ($T.isNumber(idOrIndex)) {//is index
          item = this._arr[index];
          if (!item) {
            return null;
          }
          return {item: item, index: index};
        } else {
          item = this._map[id];
          if (!item) {
            return null;
          }
          for (var i = 0, t; t = this._arr[i]; i++) {
            if (t.id === id) {
              return {item: item, index: i};
            }
          }
          return null;
        }
      },
      getSelected: function () {
        if (this._selectedIndex !== -1) {
          return {item: this._arr[this._selectedIndex], index: this._selectedIndex};
        }
        return null;
      },
      getSelectedIndex: function () {
        return this._selectedIndex;
      },
      length: function () {
        return this._arr.length;
      },
      unselect: function (noEvent) {
        this.select(this._selectedIndex, noEvent, true);
      }
    });

    this.Tab = Tab;
  });
})
;
define('../lib/mui/js/mui.textarea', ['jm'], function () {
  JM.$package("MUI", function (J) {
    var $D = J.dom,
        $E = J.event;

    var packageContext = this;


    var AutoGrowTextarea = J.Class({
      init: function (options) {
        this.id = options.id;
        this.elem = $D.id(this.id);

        // var lineHeight = parseInt($D.getStyle(this.elem, 'line-height')) || 12;
        // var fontSize = parseInt($D.getStyle(this.elem, 'font-size')) || 12;
        // this.textLineHeight = Math.max(lineHeight, fontSize);
        this.maxHeight = options.maxHeight;//this.maxLine * this.textLineHeight * 2;
        this.initHeight = options.initHeight;//this.textLineHeight * 2;

        this.hiddenTextarea = this.elem.cloneNode();
        this.hiddenTextarea.id = '';

        $D.addClass(this.hiddenTextarea, 'hidden_textarea');
        this.elem.parentNode.appendChild(this.hiddenTextarea);

        this.bindHandler();
      },
      _handleEvent: function (e) {
        var type = e.type;
        if (type == "input") {
          var context = this;
          // packageContext.delay('input', 100, function(){
          context._onInput(e);
          // });
        }
      },
      bindHandler: function () {
        var _handleEvent = this._handleEvent = J.bind(this._handleEvent, this);
        $E.on(this.elem, "input", _handleEvent);
      },
      _onInput: function (e) {
        this.adjust();
      },
      adjust: function () {
        this.hiddenTextarea.value = this.elem.value;
        this.hiddenTextarea.style.width = this.elem.clientWidth + "px";//不设置的话 hiddenTextarea和textArea的宽度不一致

        var scrollHeight = this.hiddenTextarea.scrollHeight;
        if (scrollHeight > this.maxHeight) {
          scrollHeight = this.maxHeight;
        } else if (scrollHeight < this.initHeight) {
          scrollHeight = this.initHeight;
        }
        var oldHeight = parseInt($D.getStyle(this.elem, 'height')) || 0;
        if (oldHeight !== scrollHeight) {
          $D.setStyle(this.elem, "height", scrollHeight + "px");
          $E.fire(this, 'heightChange', scrollHeight);
        }
      },
      reset: function () {
        $D.setStyle(this.hiddenTextarea, 'height', this.initHeight + 'px');
        $D.setStyle(this.hiddenTextarea, 'width', parseInt($D.getStyle(this.elem, 'width')) + 'px');
      },
      getContent: function () {
        return this.elem.value;
      },
      setContent: function (value) {
        this.elem.value = value;
        this.reset();
        this.adjust();
      },
      destory: function () {
        $E.off(this.elem, "input", this._handleEvent);
        $D.remove(this.elem);
      }
    });
    this.AutoGrowTextarea = AutoGrowTextarea;
  });
})
;
define('../lib/mui/js/mui.lazyload', ['jm'], function () {
  JM.$package("MUI", function (J) {
    var $D = J.dom,
        $E = J.event;

    //图片懒加载 只实现了垂直的情况
    var I_LazyLoadImgs = J.Class({
      init: function (options) {
        var self = this;

        this.scrollObj = options.scrollObj;//iscroll 对象
        this.elem = this.scrollObj.wrapper;//iscroll 使用的dom元素
        this.souceProperty = options.souceProperty || "_ori_src";
        this.isFade = options.isFade;

        this.bindHandlers();
      },
      // _getScrollPosition:function(){
      //     var scroller = this.scrollObj.scroller;
      //     var wt = scroller.style.webkitTransform;
      //     var leftIndex = wt.indexOf(",") + 1;
      //     var rightIndex = wt.indexOf(")");
      //     var i = wt.slice(leftIndex,rightIndex);
      //     return parseInt(i);
      // },

      // 当滚动结束时，加载可视区域中还未加载或加载失败了的图片
      _onScrollEnd: function () {
        var self = this;
        var _loadFunc = this._loadFunc;
        var souceProperty = this.souceProperty;
        var container = this.elem;
        // var containerTop = this.elem.getBoundingClientRect().top;
        // var viewHeight = document.documentElement.clientHeight;
        var imgs = $D.$("img[" + souceProperty + "]", container);
        var scrollerTop = this.scrollObj.y;//滚动位置
        var sp;


        if (imgs.length == 0) return;

        J.each(imgs, function (img, i) {
          // `souceProperty` 变量所保存属性的存在表示该图片还未开始加载或加载失败
          if (self.inVisibleArea(img) && (sp = img.getAttribute(souceProperty))) {
            _loadFunc(img, sp);
          }
          else {
            return false;//中断遍历
          }
        });
        //开始加载事件通知
        $E.fire(this, "loadstart");
      },
      _loadFunc: function (img, url) {
        var self = this,
            newImg = img.cloneNode();

        if (this.isFade) {
          $D.addClass(newImg, 'lazyLoadImg');
        }

        $E.once(newImg, 'load', function () {
          if (img.parentNode) {
            img.parentNode.replaceChild(newImg, img);
            if (self.isFade) {
              // hack: 要用 `setTimeout` 才能在展示时有过渡效果
              setTimeout(function () {
                $D.addClass(newImg, 'loaded');
              }, 0);
            }
            //加载完图片的处理
            $E.fire(self, 'loadImgOver');
          }
          else {
            // `parentNode` 的缺失，可能是因为 `newImg` 还没 `load` ，
            // `img` 所在的好友条目就被remove，比如搜索面板中的好友条目
            return;
          }
        });
        $E.once(newImg, 'error', function () {
          // 加载失败，就重新加上保存着欲加载url的DOM属性，以此属性的存在表示该图片在可视区域的时候需要加载
          // img.setAttribute(self.souceProperty);
          // newImg.setAttribute(self.souceProperty, url);
        });

        // 开始加载，就去除保存着欲加载url的DOM属性，以此属性的没有表示该图片不需要再加载
        img.removeAttribute(self.souceProperty);
        newImg.removeAttribute(self.souceProperty);
        newImg.src = url;
      },
      inVisibleArea: function (ele) {
        var containerTop = this.elem.getBoundingClientRect().top;
        var viewHeight = document.documentElement.clientHeight;
        var eleTop = ele.getBoundingClientRect().top - containerTop;
        var eleH = ele.clientHeight;
        if (eleTop > -eleH / 2) {
          if (eleTop < viewHeight - eleH / 2) {
            return true;
          }
        }
        return false;
      },
      refresh: function () {
        this._onScrollEnd();
      },
      bindHandlers: function () {
        var self = this,
            scrollObjOptions, oldOnScrollEnd;

        this._onScrollEnd = J.bind(this._onScrollEnd, this);
        this._loadFunc = J.bind(this._loadFunc, this);

        scrollObjOptions = this.scrollObj.options;
        oldOnScrollEnd = scrollObjOptions.onScrollEnd;
        if (oldOnScrollEnd) {
          scrollObjOptions.onScrollEnd = function () {
            oldOnScrollEnd.apply(this, arguments);
            self._onScrollEnd.apply(this, arguments);
          }
        }
        else {
          scrollObjOptions.onScrollEnd = this._onScrollEnd;
        }

        $E.on(window, "load resize", this._onScrollEnd);
      },
      destory: function () {
        this.scrollObj.options.onScrollEnd = null;
        $E.off(window, "load resize", this._onScrollEnd);
      }
    });

    this.I_LazyLoadImgs = I_LazyLoadImgs;
  });
})
;
define('../lib/mui/js/mui.imagechange', ['jm'], function () {
  JM.$package("MUI", function (J) {
    var $D = J.dom,
        $E = J.event;

    var ImageChange = J.Class({
      init: function (options) {
        this.elem = $D.id(options.id);
        this.imgsWrapClassName = options.imgsWrapClassName || "wrap";
        this.btnsWrapClassName = options.btnsWrapClassName || "btnsWrap";
        this.imgsContainer = $D.className(this.imgsWrapClassName, this.elem)[0];
        this.btnsContainer = $D.className(this.btnsWrapClassName, this.elem)[0];
        this.currentIndex = options.currentIndex || 0;

        this.contentsSwipe = MUI.SwipeChange({
          id: options.id,
          wrapClassName: this.imgsWrapClassName,
          //fastChange:true
          fastChange: false
        });

        this.preIndex = this.currentIndex;
        this.count = this.contentsSwipe.count;

        this.isAutoChange = options.isAutoChange;
        this.autoChangeTime = options.autoChangeTime || 3000;
        this._initBtns();
        this.bindHandlers();
        if (this.isAutoChange) this.autoChange();

      },
      _handleEvent: function (e) {
        e = e || window.event;
        var type = e.type;

        if (type == "changed") {
          this._onSwipeChanged(e);
        }
        if (type == "click") {
          var target = e.target || e.srcElement;
          if (target.tagName != "LI") return;
          var index = Number(target.getAttribute("_index"));

          this.slideTo(index);
          this._onSwipeChanged({
            currentIndex: index
          });

        }
      },
      _onSwipeChanged: function (e) {
        var currentIndex = e.currentIndex;
        $D.removeClass(this.btns[this.preIndex], "selected");
        $D.addClass(this.btns[currentIndex], "selected");
        this.currentIndex = this.preIndex = currentIndex;
        if (this.isAutoChange) this.autoChange();

      },
      autoChange: function () {
        var self = this;
        var count = this.count;
        clearTimeout(this.runTimeId);
        this.runTimeId = setTimeout(function () {
          var currentIndex = self.currentIndex;
          if (currentIndex >= count - 1) currentIndex = 0;
          else currentIndex++;
          self.slideTo(currentIndex);
        }, self.autoChangeTime);
      },
      slideTo: function (index) {
        this.contentsSwipe.slideTo(index);
      },
      _initBtns: function () {
        var count = this.count;
        var currentIndex = this.currentIndex;
        var content = "";
        for (var i = 0; i < count; i++) {
          if (i === currentIndex) content += "<li class='selected' _index='" + i + "'></li>";
          else content += "<li _index='" + i + "'></li>";
        }
        this.btnsContainer.innerHTML = content;
        this.btns = $D.tagName("li", this.btnsContainer);
      },
      bindHandlers: function () {
        var _handleEvent = this._handleEvent = J.bind(this._handleEvent, this);
        $E.on(this.contentsSwipe, "changed", _handleEvent);
        $E.on(this.btnsContainer, "click", _handleEvent);
      },
      destory: function () {
        $E.off(this.contentsSwipe, "changed", this._handleEvent);
        this.contentsSwipe.destory();
        $D.remove(this.elem);

      },
      refresh: function () {
        this.contentsSwipe.refresh();
      }
    });

    this.ImageChange = ImageChange;
  });
})
;
define('../lib/mui/js/mui.slide', ['jm'], function () {
  JM.$package("MUI", function (J) {
    var $D = J.dom,
        $E = J.event;
    var isTouchDevice = J.platform.touchDevice;
    var dragingElem;
    var isTouchDevice = J.platform.touchDevice;
    var startEvt = isTouchDevice ? "touchstart" : "mousedown";
    var moveEvt = isTouchDevice ? "touchmove" : "mousemove";
    var endEvt = isTouchDevice ? "touchend" : "mouseup";
    var hasClientRect = "getBoundingClientRect" in document.body;
    var isWebkit = "-webkit-transform" in document.body.style;

    var Slide = J.Class({
      init: function (options) {

        this.elem = $D.id(options.id) || options.id;
        this.wrapClassName = options.wrapClassName || "wrap";

        this.contentWrap = $D.$("." + this.wrapClassName, this.elem)[0];
        this.contents = $D.$("." + this.wrapClassName + ">li", this.elem);
        this.count = this.contents.length;
        this.currentIndex = options.currentIndex || 0;
        this.moveDist = 0;
        this.runType = options.runType || "ease-out";
        this.slideTime = options.slideTime || 200;
        this.fastChange = options.fastChange;
        this._sizeAdjust();
        this._moveTo(this.currentIndex * -this.contentWidth);
        this.bindHandlers();
      },
      bindHandlers: function () {
        var startX = 0;
        var self = this;
        var elem = this.elem;
        $E.on(this.contentWrap, ["webkitTransitionEnd", "mozTransitionEnd"], function (e) {
          alert("p");
          // self._removeAnimation();
          $E.fire(self, "changed", {
            type: "changed",
            currentIndex: self.currentIndex
          });
        });
        //用于fastchange恢复
        $E.on(self, "changed", function (e) {
          if (!self.fastChange || !self.hideArr) return;
          while (self.hideArr[0]) {
            $D.setStyle(self.hideArr[0], "display", "");
            self.hideArr.shift();
          }
          self._removeAnimation();
          self._moveTo(e.currentIndex * -self.contentWidth);
        });
        $E.on(window, "resize", function () {
          self.refresh();
        });
      },
      _removeAnimation: function (ele) {
        if (isWebkit)
          this.contentWrap.style["-webkit-transition"] = "";//删除动画效果

      },
      _sizeAdjust: function () {
        var ele = this.elem;
        var count = this.count;
        //幻灯片宽度
        var contentWidth = hasClientRect ? ele.getBoundingClientRect().width : ele.offsetWidth;

        $D.setStyle(this.contentWrap, "width", contentWidth * count + "px");
        J.each(this.contents, function (e) {
          $D.setStyle(e, "width", contentWidth + "px");
        });
        //尺寸变化后重新计算当前位移位置
        this._removeAnimation();
        this._moveTo(-contentWidth * this.currentIndex);
        this.contentWidth = contentWidth;
      },
      _moveTo: function (x) {
        //webkit和moz可用3D加速，ms和o只能使用translate
        if (isWebkit) {
          this.contentWrap.style["-webkit-transform"] = "translate3d(" + x + "px, 0,0 )";
        }
        else {
          this.contentWrap.style["position"] = "relative";
          this.contentWrap.style["left"] = x + "px";
        }

      },
      slideTo: function (index) {
        var self = this;
        var currentIndex = this.currentIndex;
        var d_index = index - currentIndex;
        this.currentIndex = index;

        if (this.fastChange && d_index && Math.abs(d_index) != 1) {
          if (d_index != 0) {
            var l, p;
            var cts = this.contents;
            if (!this.hideArr) this.hideArr = [];
            if (d_index > 0) {
              l = d_index - 1;
              p = 1;
              index = currentIndex + 1;
            }
            else {
              l = -(d_index + 1);
              p = -1;
              this._removeAnimation();
              this._moveTo((this.currentIndex + 1) * -this.contentWidth);
            }

            for (var i = 1; i <= l; i++) {
              var ct = cts[currentIndex + i * p];

              $D.setStyle(ct, "display", "none");
              this.hideArr.push(ct);
            }

          }
        }
        //不加setTimeout 0 在fastchange并且倒行的时候会闪白
        setTimeout(function () {
          if (isWebkit)
            self.contentWrap.style["-webkit-transition"] = "all " + self.slideTime / 1000 + "s " + self.runType;

          self._moveTo(index * -self.contentWidth);
        }, 0);
      },
      next: function () {
        var index = this.currentIndex + 1;
        if (index >= this.count) return;
        this.slideTo(index);
      },
      pre: function () {
        var index = this.currentIndex - 1;
        if (index < 0) return;
        this.slideTo(index);
      },
      refresh: function () {
        this._sizeAdjust();
      }

    });
    this.Slide = Slide;
  });
})
;
define('../lib/mui/js/mui.swipechange', [
  'jm',
  './mui.slide'
], function () {
  JM.$package("MUI", function (J) {
    var $D = J.dom,
        $E = J.event;
    var isTouchDevice = J.platform.touchDevice;
    var dragingElem;
    var isTouchDevice = J.platform.touchDevice;
    var startEvt = isTouchDevice ? "touchstart" : "mousedown";
    var moveEvt = isTouchDevice ? "touchmove" : "mousemove";
    var endEvt = isTouchDevice ? "touchend" : "mouseup";
    var hasClientRect = "getBoundingClientRect" in document.body;

    var SwipeChange = J.Class({extend: MUI.Slide}, {
      init: function (options) {
        SwipeChange.callSuper(this, "init", options);
        this.startX = 0;
      },
      _handleEvent: function (e) {
        SwipeChange.callSuper(this, "_handleEvent", e);
        switch (e.type) {
          case startEvt:
            this._onStartEvt(e);
            break;
          case moveEvt:
            this._onMoveEvt(e);
            break;
          case endEvt:
            this._onEndEvt(e);
            break;
        }
      },
      _onStartEvt: function (e) {
        var elem = this.elem;
        var target = e.target || e.srcElement;
        if (!$D.closest(target, "." + this.wrapClassName)) return;
        dragingElem = target;
        var tou = e.touches ? e.touches[0] : e;
        var elemLeft = hasClientRect ? elem.getBoundingClientRect().left : elem.offsetLeft;

        var x = tou.clientX - elemLeft;
        this.startX = x;//相对于container
      },
      _onMoveEvt: function (e) {
        if (!dragingElem) return;
        e.preventDefault();
        var elem = this.elem;
        var tou = e.touches ? e.touches[0] : e;
        var x = tou.clientX;
        var elemLeft = hasClientRect ? elem.getBoundingClientRect().left : elem.offsetLeft;
        var elemRight = elemLeft + this.contentWidth;

        if (x < elemLeft || x > elemRight) return;
        x = x - elemLeft;

        this.moveDist = x - this.startX;
        this._removeAnimation();
        this._moveTo(this.currentIndex * -this.contentWidth + this.moveDist);
        // e.preventDefault();

      },
      _onEndEvt: function (e) {
        if (!dragingElem) return;

        var d = this.moveDist;
        var elem = this.elem;
        var currentIndex = this.currentIndex;
        var elemLeft = hasClientRect ? elem.getBoundingClientRect().left : elem.offsetLeft;
        var elemHalf = elemLeft + this.contentWidth / 3;

        if (d > elemHalf) {
          currentIndex = Math.max(0, currentIndex - 1);
        }
        else if (d < -elemHalf) {
          currentIndex = Math.min(this.contents.length - 1, currentIndex + 1);
        }
        // self._moveTo(currentIndex * -self.contentWidth);
        this.slideTo(currentIndex);
        dragingElem = null;
        this.moveDist = 0;
      },
      bindHandlers: function () {
        var _handleEvent = this._handleEvent = J.bind(this._handleEvent, this);
        SwipeChange.callSuper(this, "bindHandlers");
        if (isTouchDevice) //pc上暂不提供拖动支持
          $E.on(this.elem, [startEvt, moveEvt, endEvt].join(" "), _handleEvent);
      },
      destory: function () {
        if (isTouchDevice) //pc上暂不提供拖动支持
          $E.off(this.elem, [startEvt, moveEvt, endEvt].join(" "), this._handleEvent);
        SwipeChange.callSuper(this, "destory");
      }

    });
    this.SwipeChange = SwipeChange;
  });
})
;
define('mq.i18n', [
  "jm"
], function () {
  J.$package("mq.i18n", function (J) {

    // 语言包完善上线 by gc
    var userLang = (window.navigator.language || window.navigator.browserLanguage).toLowerCase(),
        langIndex = 0;

    if (userLang) {
      if (userLang.indexOf('zh') === 0) {
        langIndex = 0;
      } else {
        langIndex = 1;
      }
    }
    /**
     * 后续需要改成按情况去加载语言包
     */
    var messageList = {
      'con_friends': ['好友', 'Friends'],
      'con_groups': ['群', 'Groups'],
      'con_discus': ['讨论组', 'Discussion'],
      'return': ['返回', 'Back'],
      'close': ['关闭', 'Close'],
      'unname': ['未命名', 'Unnamed'],
      'session': ['会话', 'Chats'],
      'contact': ['联系人', 'Contacts'],
      'setting': ['设置', 'Settings'],
      'plugin': ['发现', 'Discover'],
      'send': ['发送', 'Send'],
      'cancel': ['取消', 'Cancel'],
      'search': ['搜索', 'Search'],
      'members': ['成员', 'Members'],
      'record': ['聊天记录', 'Chat History'],
      'noRecord': ['暂无聊天记录', 'No Chat Records'],
      'sendMsg': ['发消息', 'Send Message'],
      'beforeclose': ['您确定要离开吗？', 'Are you sure you want to leave this page? '],
      //详细资料
      'profile': ['详细资料', 'Profile'],
      'signature': ['个性签名: ', "What's Up: "],
      'publish': ['公告', 'Notice'],
      'gender': ['性别', 'Gender'],
      'male': ['男', 'Male'],
      'female': ['女', 'Female'],
      'unknown': ['未知', 'Unknown'],
      'birthday': ['生日', 'Birthday'],
      'country': ['国家', 'Country'],
      'province': ['省份', 'Province'],
      'city': ['城市', 'City'],
      'phone': ['电话', 'Phone'],
      'mobile': ['手机', 'Mobile'],
      'email': ['电子邮箱', 'Email'],
      'group_member': ['群成员', 'Group Members'],
      'group_profile': ['群资料', 'Group Profile'],
      'group_profile': ['群资料', 'Group Profile'],
      'discuss_member': ['讨论组成员', 'Discussion Members'],
      'discuss_profile': ['讨论组资料', 'Discussion Profile'],
      'buddy_unit': ['人', 'people'],
      //设置 setting
      'account': ['帐号', 'Account'],
      'about_qq': ['关于QQ', 'About'],
      'loginout': ['退出当前帐号', 'Log Out'],
      'place': ['所在地', 'Location'],
      'version': ['当前版本', 'Version'],
      'current_version': 'V1.0',
      'service': ['服务条款', 'Terms'],
      'help': ['帮助与反馈', 'Feedback'],
      'notify_setting': ['消息相关设置', 'Notify Setting'],
      'voice': ['声音', 'Voice'],
      'notification': ['消息浮窗', 'Notifications'],
      'https_setting': ['HTTPS', 'HTTPS'],
      'https_msg': ['使用 HTTPS 加密聊天内容', 'Encrypt records via HTTPS'],
      'send_msg_way': ['按Ctrl+Enter键发送消息', 'Send Message by pressing "Ctrl" + "Enter"'],
      //plugin
      'qzone': ['QQ空间', 'Qzone'],
      'qmail': ['QQ邮箱', 'QQ Mail'],
      'qq_portal': ['腾讯网', 'QQ.com'],
      'soso_map': ['soso地图', 'soso Maps'],
      //在线状态
      'online': ['在线', 'Online'],
      'offline': ['离线', 'Offline'],
      'away': ['离开', 'Away'],
      'hidden': ['隐身', 'Invisible'],
      'busy': ['忙碌', 'Busy'],
      'callme': ['Q我', 'Q Me'],
      'silent': ['静音', 'Silence'],
      // 表情
      'cface': ['自定义表情', 'Custom Avatars']
    };

    var faceTextArr = [
      [
        "微笑", "撇嘴", "色", "发呆", "得意", "流泪", "害羞", "闭嘴", "睡", "大哭", "尴尬", "发怒", "调皮", "呲牙", "惊讶", "难过", "酷", "冷汗", "抓狂", "吐",
        "偷笑", "可爱", "白眼", "傲慢", "饥饿", "困", "惊恐", "流汗", "憨笑", "大兵", "奋斗", "咒骂", "疑问", "嘘", "晕", "折磨", "衰", "骷髅", "敲打", "再见",
        "擦汗", "抠鼻", "鼓掌", "糗大了", "坏笑", "左哼哼", "右哼哼", "哈欠", "鄙视", "委屈", "快哭了", "阴险", "亲亲", "吓", "可怜", "菜刀", "西瓜", "啤酒", "篮球", "乒乓",
        "咖啡", "饭", "猪头", "玫瑰", "凋谢", "示爱", "爱心", "心碎", "蛋糕", "闪电", "炸弹", "刀", "足球", "瓢虫", "便便", "月亮", "太阳", "礼物", "拥抱", "强",
        "弱", "握手", "胜利", "抱拳", "勾引", "拳头", "差劲", "爱你", "NO", "OK", "爱情", "飞吻", "跳跳", "发抖", "怄火", "转圈", "磕头", "回头", "跳绳", "挥手",
        "激动", "街舞", "献吻", "左太极", "右太极", "双喜", "鞭炮", "灯笼", "发财", "K歌", "购物", "邮件", "帅", "喝彩", "祈祷", "爆筋", "棒棒糖", "喝奶", "下面", "香蕉",
        "飞机", "开车", "左车头", "车厢", "右车头", "多云", "下雨", "钞票", "熊猫", "灯泡", "风车", "闹钟", "打伞", "彩球", "钻戒", "沙发", "纸巾", "药", "手枪", "青蛙"
      ],
      [
        "Smile", "Grimace", "Drool", "Scowl", "CoolGuy", "Sob", "Shy", "Silent", "Sleep", "Cry", "Awkward", "Angry", "Tongue", "Grin", "Surprise", "Frown", "Ruthless", "Blush", "Scream", "Puke",
        "Chuckle", "Joyful", "Slight", "Smug", "Hungry", "Drowsy", "Panic", "Sweat", "Laugh", "Commando", "Determined", "Scold", "Shocked", "Shhh", "Dizzy", "Tormented", "Toasted", "Skull", "Hammer", "Wave",
        "Speechless", "NosePick", "Clap", "Shame", "Trick", "Bah! L", "Bah! R", "Yawn", "Pooh-pooh", "Shrunken", "TearingUp", "Sly", "Kiss", "Wrath", "Whimper", "Cleaver", "Watermelon", "Beer", "Basketball", "PingPong",
        "Coffee", "Rice", "Pig", "Rose", "Wilt", "Lips", "Heart", "BrokenHeart", "Cake", "Lightning", "Bomb", "Dagger", "Soccer", "Ladybug", "Poop", "Moon", "Sun", "Gift", "Hug", "Strong",
        "Weak", "Shake", "Peace", "Fight", "Beckon", "Fist", "Pinky", "RockOn", "NO", "OK", "InLove", "Blowkiss", "Waddle", "Tremble", "Aaagh", "Twirl", "Kotow", "Dramatic", "JumpRope", "Surrender",
        "Exciting", "HipHot", "ShowLove", "Tai Chi L", "Tai Chi R", "Congratulations", "Firecracker", "Lantern", "Richer", "Karaoke", "Shopping", "Email", "Handsome", "Cheers", "Pray", "BlowUp", "Lolly", "Milk", "Noodles", "Banana",
        "Plane", "Car", "Locomotive", "Train", "Train Tail", "Cloudy", "Rain", "Dollor", "Panda", "Bulb", "Windmill", "Clock", "Umbrella", "Balloon", "Ring", "Sofa", "toiletPaper", "Pill", "Pistol", "Frog"
      ]
    ];

    //系统文字
    this.message = function (msgId) {
      return messageList[msgId] ? ( J.type.isArray(messageList[msgId]) ? messageList[msgId][langIndex] : messageList[msgId] ) : msgId;
    };

    //表情wording
    this.faceText = function (faceId) {
      return faceTextArr[langIndex][faceId];
    };

    // 表情ID索引
    this.getFaceIndex = function (faceText) {
      return faceTextArr[langIndex].indexOf(faceText);
    };
  });
})

;
define('mq.view.transitionmanager', [
  'jm'
], function () {
  J.$package("mq.view.transitionManager", function (J) {
    var packageContext = this,
        $S = J.support;

    var TRANSITION_IN = 'transform 0.4s cubic-bezier(0,1,0,1)';
    var TRANSITION_OUT = 'transform 0.4s cubic-bezier(0,1,0,1)';

    var panels = {};

    var prefix = J.prefix && J.prefix.lowercase,
        cssPrefix = J.prefix && J.prefix.css;

    if (!prefix) {
      prefix = '';
    }
    if (!cssPrefix) {
      cssPrefix = '';
    }

    var findOne = function (arr, id) {
      for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i].id === id) {
          return {item: arr[i], index: i};
        }
      }
      return null;
    }

    this.push = function (obj) {
      var id = obj.id,
          cate = obj.cate || 'default',
          element = obj.element,
          transition = J.$default(obj.transition, true),
          callback = obj.callback;
      if (!panels[cate]) {
        panels[cate] = [];
      }
      var panel,
          arr = panels[cate];
      var result = findOne(arr, id);
      if (result !== null) {
        if (transition !== true) {
          transition = result.index === arr.length - 1;
        }
        arr.splice(result.index, 1);
        panel = result.item;
      } else {
        panel = {
          element: element,
          id: id,
          cate: cate
        }
      }
      var from = arr.length > 0 ? arr[arr.length - 1] : null;
      var fromId = null;
      if (from) {
        fromId = from.id;
        from = from.element;
      }
      var to = panel.element;
      arr.push(panel);
      if (transition) {
        this.transition(from, to, false, function () {
          J.event.fire(packageContext, 'transitionEnd', {from: fromId, to: id});
          callback && callback();
        });
      }
    }

    this.pop = function (id, cate, callback) {
      if (arguments.length === 2) {
        callback = cate;
        cate = null;
      }
      if (!cate) {
        cate = 'default';
      }
      if (!panels[cate]) {
        return;
      }
      var arr = panels[cate];
      var result = findOne(arr, id);
      if (result === null) {
        return;
      }
      //panel 堆栈: a > b > [c] > d >e
      //如果pop c,则把c之后的d,e都干掉, 然后执行动画 c -> b
      arr.splice(result.index);
      var from = result.item.element;
      var to = arr.length > 0 ? arr[arr.length - 1] : null;
      var toId = null;
      if (to) {
        toId = to.id;
        to = to.element;
      }
      this.transition(from, to, true, function () {
        J.event.fire(packageContext, 'transitionEnd', {from: id, to: toId});
        callback && callback();
      });
    }

    this.transition = function (from, to, reverse, callback) {
      //这里需要做个队列, 防止快速动画时导致显示问题
      ready(from, to, reverse, function () {
        if (reverse) {
          if (from) {
            from.style['transition'] = TRANSITION_OUT;
            from.style['transform'] = 'translate3d(100%, 0, 0)';
            if (cssPrefix) {
              from.style[cssPrefix + 'transform'] = 'translate3d(100%, 0, 0)';
              from.style[cssPrefix + 'transition'] = cssPrefix + TRANSITION_OUT.slice(0, 1).toUpperCase() + TRANSITION_OUT.slice(1);
            }
          }
          if (to) {
            to.style['transition'] = TRANSITION_OUT;
            to.style['transform'] = 'translate3d(0, 0, 0)';
            if (cssPrefix) {
              to.style[cssPrefix + 'transform'] = 'translate3d(0, 0, 0)';
              to.style[cssPrefix + 'transition'] = cssPrefix + TRANSITION_OUT.slice(0, 1).toUpperCase() + TRANSITION_OUT.slice(1);
            }
          }
        } else {
          if (from) {
            from.style['transition'] = TRANSITION_IN;
            from.style['transform'] = 'translate3d(-100%, 0, 0)';
            if (cssPrefix) {
              from.style[cssPrefix + 'transition'] = cssPrefix + TRANSITION_IN.slice(0, 1).toUpperCase() + TRANSITION_IN.slice(1);
              from.style[cssPrefix + 'transform'] = 'translate3d(-100%, 0, 0)';
            }
          }
          if (to) {
            to.style['transition'] = TRANSITION_IN;
            to.style['transform'] = 'translate3d(0, 0, 0)';
            if (cssPrefix) {
              to.style[cssPrefix + 'transition'] = cssPrefix + TRANSITION_IN.slice(0, 1).toUpperCase() + TRANSITION_IN.slice(1);
              to.style[cssPrefix + 'transform'] = 'translate3d(0, 0, 0)';
            }
          }
        }
        var element = to || from;
        var onTransitionEnd = function () {
          if (from) {
            from.style['display'] = 'none';
          }
          callback && callback();
        };
        if (window.matchMedia) {
          var maxWidth = window.matchMedia("(min-width:1000px)");
          if (maxWidth.matches) {
            onTransitionEnd();
            return;
          }
        }
        if ($S.transitionend) {
          J.event.once(element, 'transitionend', onTransitionEnd);
        }
        else {
          onTransitionEnd();
        }
      });
    }

    var ready = function (from, to, reverse, callback) {
      if (to) {
        to.style['transition'] = 'none';
        to.style['transform'] = 'translate3d(' + (reverse ? '-' : '') + '100%, 0, 0)';
        if (cssPrefix) {
          to.style[cssPrefix + 'transition'] = 'none';
          to.style[cssPrefix + 'transform'] = 'translate3d(' + (reverse ? '-' : '') + '100%, 0, 0)';
        }
        to.style['display'] = 'block';
        setTimeout(callback, 20);
      }
    };

  });

})
;
define('mq.util', [
  "jm"
], function () {
  J.$package("mq.util", function (J) {

    var DELAY_STATUS = {
      NORMAL: 0,
      ID_EXIST: 1,
      ID_NOT_EXIST: 2
    };

    var timerList = {};
    /**
     * @param {String} id @optional
     * @param {Number} time @optional
     * @param {Function} func
     * @param {Function} onClearFunc @optional
     * @example
     * 1. delay('id01', 1000, func)
     * 2. delay(1000, func)
     * 3. delay(func) === delay(0, func)
     */
    this.delay = function (id, time, func) {
      var argu = arguments;
      var flag = DELAY_STATUS.NORMAL;
      if (argu.length === 1) {
        func = id;
        time = 0;
        id = null;
      } else if (argu.length === 2) {
        func = time;
        time = id;
        id = null;
      }
      time = time || 0;
      if (id && time) {
        if (id in timerList) {
          window.clearTimeout(timerList[id]);
          flag = DELAY_STATUS.ID_EXIST;
        }
        var wrapFunc = function () {
          timerList[id] = 0;
          delete timerList[id];
          func.apply(window, [id]);
        };
        var timer = window.setTimeout(wrapFunc, time);
        timerList[id] = timer;
      } else {
        window.setTimeout(func, time);
      }
      return flag;
    }

    this.clearDelay = function (id) {
      if (id in timerList) {
        window.clearTimeout(timerList[id]);
        timerList[id] = 0;
        delete timerList[id];
        return DELAY_STATUS.NORMAL;
      }
      return DELAY_STATUS.ID_NOT_EXIST;
    }


    var REPORT_CGI = 'https://report.url.cn/report/report';

    /*
     上报到伯努利系统
     opername=xxx 标明活动还是合辑，活动是activity，合辑是heji
     name=xxx  活动或合辑的名称字符串或id串
     t=xxxx 时间戳
     action=xxxx 活动或合辑底下的行为
     obj=xxx 活动或合辑底下的行为所操作的对象，如果对象是app就填appid，如果没有对象就填0
     上面的这些参数合成一个参数放到strValue这个参数里，然后tag=0
     例子：
     http://cgi.qplus.com/report/report?strValue={action=runapp,name=$sfsf$sdfsdf,t=1340606062,opername=activity,obj=200002021}&tag=0
     */
    this.report2BNL = function (param) {
      if (!param) {
        return false;
      }
      if (!param.opername) {
        param.opername = 'mediacenter';
      }
      if (!param.obj) {
        param.obj = 0;
      }
      var s = JSON.stringify(param);
      var url = REPORT_CGI + '?strValue=' + s + '&tag=0' +
          '&qver=' + mq.getVersion();

      qtracker.tracker.Img.send(url);
    }

    this.report2BNL2 = function (id, obj) {
      obj = obj || 0;
      var url = REPORT_CGI + '?strValue=' + obj +
          '&nValue=' + id + '&tag=0' +
          '&qver=' + mq.getVersion();
      qtracker.tracker.Img.send(url);
    }

    var code2stateMap = {10: 'online', 20: 'offline', 30: 'away', 40: 'hidden', 50: 'busy', 60: 'callme', 70: 'silent'};
    this.code2state = function (code) {

      return code2stateMap[code] || 'online';
    };

    var state2codeMap = {'online': 10, 'offline': 20, 'away': 30, 'hidden': 40, 'busy': 50, 'callme': 60, 'silent': 70};
    this.state2code = function (code) {

      return state2codeMap[code] || 0;
    };

    // 下载文件
    this.download = function (fileUrl) {
      var frame = J.dom.id('fileDownloader');
      if (!frame) {
        frame = document.createElement("iframe");
        frame.id = 'fileDownloader';
        frame.name = 'fileDownloader';
        frame.src = mq.WEBQQ_MAIN_URL + "domain.html";
        frame.style.display = 'none';
        document.body.appendChild(frame);
      }
      frame.src = fileUrl;
    }
  });

  J.$package("mq.util", function () {
    var win = window;
    var doc = win.document;

    // `onload` event is not supported in WebKit < 535.23 and Firefox < 9.0
    var isOldWebkit = +navigator.userAgent
            .replace(/.*AppleWebKit\/(\d+)\..*/, "$1") < 536;

    var head = doc.getElementsByTagName('head')[0] || doc.documentElement;
    var baseElement = head.getElementsByTagName('base')[0];

    var IS_CSS_RE = /\.css(?:\?|$)/i;


    /**
     * Main function
     */

    function loadFile(url, callback) {
      if (IS_CSS_RE.test(url)) {
        loadCss(url, callback);
      }
      else {
        loadJs(url, callback);
      }
    }

    function loadJs(url, callback) {
      var element = doc.createElement('script');

      // Add proxy callback when onload
      if ('onload' in element) {
        element.onload = onload;
        element.onerror = function () {
          // To do: log error
          onload();
        };
      }
      else {
        element.onreadystatechange = function () {
          if (/loaded|complete/.test(element.readyState)) {
            onload();
          }
        }
      }

      // The `async` property make browser to run the script as soon as possible
      // but not to block document parsing while the script is being downloading.
      element.async = true;
      element.src = url;

      insert(element);

      function onload() {
        // Ensure only run once and handle memory lead in IE
        element.onload = element.onerror = element.onreadystatechange = null;
        element = null;
        callback();
      }
    }

    function loadCss(url, callback) {
      var element = doc.createElement('link');
      var supportOnload = 'onload' in element;

      if (!supportOnload || isOldWebkit) {
        // Begin after element
        setTimeout(function () {
          checkCssLoaded(element, callback);
        }, 1);
      }
      else if (supportOnload) {
        element.onload = onload;
        element.onerror = function () {
          // To do: log error
          onload();
        }
      }

      element.rel = 'stylesheet';
      element.type = 'text/css';
      element.href = url;

      insert(element);

      function onload() {
        // Ensure only run once and handle memory lead in IE
        element.onload = element.onerror = element.onreadystatechange = null;
        element = null;
        callback();
      }
    }

    /**
     * Helper function
     */

    function insert(element) {
      baseElement ?
          head.insertBefore(element, baseElement) :
          head.appendChild(element);
    }

    function checkCssLoaded(element, callback) {
      var sheet = element.sheet;
      var isLoaded;

      // For webkit < 536
      if (isOldWebkit) {
        if (sheet) {
          isLoaded = true;
        }
      }
      // For firefox < 9.0
      else if (sheet) {
        try {
          if (sheet.cssRules) {
            isLoaded = true;
          }
        }
        catch (error) {
          if (error.name === 'NS_ERROR_DOM_SECURITY_ERR') {
            isLoaded = true;
          }
        }
      }

      setTimeout(function () {
        if (isLoaded) {
          callback();
        }
        else {
          checkCssLoaded(element, callback);
        }
      }, 20);
    }


    /**
     * Public API
     */
    this.loadJs = loadJs;
    this.loadCss = loadCss;
    this.loadFile = loadFile;
  });

  MM = (function () {
    var image = new Image(),
        paramObj = {};

    /**
     * @param {string} cgi cgi路径, 不携带参数, 例如: https://openmobile.qq.com/oauth2.0/m_sdkauthorize
     * @param {string} retcode 返回码, 透传cgi的retcode
     * @param {string} tmcost cgi耗时, 在请求cgi前打"请求时间戳"t1, 执行callback时马上打"响应时间戳"t2
     *                          此处传入t2-t1的值, 单位为ms
     * @param {object} extra 扩展参数对象
     */
    var report = function (cgi, retcode, tmcost, extra) {
      var url,
          paramArr = [];

      // 处理上报项
      paramObj.commandid = cgi;
      paramObj.resultcode = retcode;
      paramObj.tmcost = tmcost;
      if (extra) {
        for (var i in extra) {
          if (extra.hasOwnProperty(i)) {
            paramObj[i] = extra[i];
          }
        }
      }

      if (retcode == 0) {
        // 成功的上报采样为1/20
        // frequency为采样分母
        paramObj.frequency = 1;
      }

      for (var j in paramObj) {
        if (paramObj.hasOwnProperty(j)) {
          paramArr.push(j + "=" + encodeURIComponent(paramObj[j]));
        }
      }
      url = "https://wspeed.qq.com/w.cgi?" + paramArr.join("&");
      image.src = url;
    };

    /**
     * @param {string} appid 可到http://m.isd.com/app/mm 申请
     *                 互联Web: 1000128, 查找Web: 1000130
     * @param {string} uin 用户qq号
     * @param {string} version 版本号 'QC_WEB' -> 互联, 'FIND_WEB_4.2' -> 查找
     */
    var init = function (appid, uin, version) {
      paramObj = {
        appid: appid,
        touin: uin,
        releaseversion: version,
        frequency: 1
      };
    };

    return {
      init: init,
      report: report
    };
  })();


  //上报初始化
  MM.init(1000143, null, 'SMARTQQ');
  // //上报cgi
  // MM.report(cgi , '0', time);
});


define('tmpl!../tmpl/tmpl_title_panel.html', [], function () {
  return function (obj) {
    var __t, __p = '', __j = Array.prototype.join, print = function () {
      __p += __j.call(arguments, '');
    };
    with (obj || {}) {
      __p += '';
      if (hasHeader) {
        __p += '\r\n<header id="panelHeader-' +
            ((__t = (id)) == null ? '' : __t) +
            '" class="panel_header">\r\n    ';
        if (leftButton) {
          __p += '\r\n    <div id="panelLeftButton-' +
              ((__t = (id)) == null ? '' : __t) +
              '" class="btn btn_small btn_left btn_black ' +
              ((__t = (leftButton.className)) == null ? '' : __t) +
              '" cmd="clickLeftButton">\r\n        <span id="panelLeftButtonText-' +
              ((__t = (id)) == null ? '' : __t) +
              '" class="' +
              ((__t = (!!leftButton.text ? 'btn_text' : 'btn_img')) == null ? '' : __t) +
              '">' +
              ((__t = (encode(leftButton.text))) == null ? '' : __t) +
              '</span>\r\n    </div>\r\n    ';
        }
        __p += '\r\n        <h1 id="panelTitle-' +
            ((__t = (id)) == null ? '' : __t) +
            '" class="text_ellipsis padding_20">' +
            ((__t = (encode(title) )) == null ? '' : __t) +
            '</h1>\r\n    ';
        if (rightButton) {
          __p += '\r\n    <button id="panelRightButton-' +
              ((__t = (id)) == null ? '' : __t) +
              '" class="btn btn_small btn_right btn_black ' +
              ((__t = (rightButton.className)) == null ? '' : __t) +
              '" cmd="clickRightButton">\r\n        <span id="panelRightButtonText-' +
              ((__t = (id)) == null ? '' : __t) +
              '" class="' +
              ((__t = (!!rightButton.text ? 'btn_text' : 'btn_img')) == null ? '' : __t) +
              '">' +
              ((__t = (encode(rightButton.text))) == null ? '' : __t) +
              '</span>\r\n    </button>\r\n    ';
        }
        __p += '\r\n</header>\r\n';
      }
      __p += '\r\n<div id="panelBodyWrapper-' +
          ((__t = (id)) == null ? '' : __t) +
          '" class="panel_body_container" style="' +
          ((__t = (hasHeader ? 'top: 45px;' : '' )) == null ? '' : __t) +
          ' ' +
          ((__t = (hasFooter ? 'bottom: 50px;' : '' )) == null ? '' : __t) +
          '">\r\n    <div id="panelBody-' +
          ((__t = (id)) == null ? '' : __t) +
          '" class="panel_body ' +
          ((__t = (body.className )) == null ? '' : __t) +
          '">' +
          ((__t = (body.html )) == null ? '' : __t) +
          '</div>\r\n    <ul id="pannelMenuList-' +
          ((__t = (id)) == null ? '' : __t) +
          '" class="pannel_menu_list">\r\n    </ul>\r\n</div>\r\n';
      if (hasFooter) {
        __p += '\r\n<footer id="panelFooter-' +
            ((__t = (id)) == null ? '' : __t) +
            '" class="' +
            ((__t = (footer.className || '' )) == null ? '' : __t) +
            '" >\r\n    ' +
            ((__t = (footer.html )) == null ? '' : __t) +
            '\r\n</footer>\r\n';
      }
      __p += '\r\n';
    }
    return __p;
  };
});


define('tmpl!../tmpl/tmpl_main_menu.html', [], function () {
  return function (obj) {
    var __t, __p = '', __j = Array.prototype.join, print = function () {
      __p += __j.call(arguments, '');
    };
    with (obj || {}) {
      __p += '';
      for (var i = 0, item; item = menuItems[i]; i++) {
        __p += '\r\n<li cmd="' +
            ((__t = (item.cmd )) == null ? '' : __t) +
            '" class="' +
            ((__t = (item.cmd )) == null ? '' : __t) +
            '">\r\n    <div class="menu_list_icon"></div>\r\n    ' +
            ((__t = (item.text )) == null ? '' : __t) +
            '\r\n</li>\r\n';
      }
      __p += '';
    }
    return __p;
  };
});

define('mq.view.TitlePanel', [
  'tmpl!../tmpl/tmpl_title_panel.html',
  'tmpl!../tmpl/tmpl_main_menu.html',
  "./mq.i18n",
  "./mq.view.transitionmanager"
], function (tmplTitlePanel, tmplMainMenu) {
  J.$package("mq.view", function (J) {
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http,
        $S = JM.string;

    var $M = mq.i18n.message,
        $T = mq.templateManager;

    var pid = 0;

    var createId = function () {
      return pid++;
    }

    /**
     * onCreate, onDestory, onTitleClick, onBackButtonClick
     * onRightButtonClick
     */
    this.TitlePanel = J.Class({
      /**
       * 进行初始化, 所有继承TitlePanel的子类都必须显示的调用父类的 init 方法
       * @param  {[type]} option
       * @return {[type]}
       */
      init: function (option) {
        option = option || {};
        this.parent = option.parent || document.body;
        this.containerNode = option.containerNode || 'div';
        this.id = option.id || createId();
        this.option = option;

        var renderData = this.renderData = {
          id: this.id,
          title: option.title || $M('unname'),
          className: option.className || '',
          hasHeader: typeof option.hasHeader === 'undefined' ? true : option.hasHeader,
          leftButton: option.leftButton || false,
          rightButton: option.rightButton || false,
          hasFooter: !!option.footer || option.hasFooter || false,
          footer: option.footer,
          body: J.extend({
            html: '',
            className: ''
          }, option.body || {}),
          encode: $S.encodeHtml
        };
        if (option.leftButton) {
          renderData.leftButton = J.extend({
            text: $M('return'),
            className: ''
          }, option.leftButton);
        }
        if (option.hasBackButton) {
          renderData.leftButton = {
            className: 'btn_arrow_left',
            text: $M('return')
          };
        }
        if (option.rightButton) {
          renderData.rightButton = J.extend({
            text: '',
            className: ''
          }, option.rightButton);
        }

        //get template to render
        var tmpl = tmplTitlePanel;
        this.create(tmpl);
      },
      create: function (tmpl) {
        if (!tmpl) {
          throw new Error('no panel template!');
        }
        this.container = document.createElement(this.containerNode);
        this.container.setAttribute('class', 'panel ' + this.renderData.className);
        this.container.id = 'panel-' + this.id;
        this.container.innerHTML = tmpl(this.renderData);

        this.parent.appendChild(this.container);
        this.bodyWrapper = $D.id('panelBodyWrapper-' + this.id);
        this.body = $D.id('panelBody-' + this.id);
        this.title = $D.id('panelTitle-' + this.id);
        this.header = $D.id('panelHeader-' + this.id);
        this.footer = $D.id('panelFooter-' + this.id);
        this.menuList = $D.id('pannelMenuList-' + this.id);
        this.leftButton = $D.id('panelLeftButton-' + this.id);
        this.rightButton = $D.id('panelRightButton-' + this.id);

        if (this.option.hasScroller) {
          this.scroller = new iScroll(this.bodyWrapper);
        }

        $E.fire(this, "create", this);
      },
      destory: function () {
        $E.fire(this, "beforeDestory", this);
        this.parent.removeChild(this.container);
        for (var i in this) {
          if (this.hasOwnProperty(i)) {
            this[i] = null;
            delete this[i];
          }
        }
        // $E.fire(this,"destory",this);
      },
      setTitle: function (title) {
        this.title.innerHTML = $S.encodeHtml(title);
      },
      setBody: function (html) {
        this.body.innerHTML = html;
      },
      show: function () {
        $D.setStyle(this.container, 'display', 'block');
      },
      hide: function () {
        $D.setStyle(this.container, 'display', 'none');
      },
      setLeftText: function (text) {
        if (!this.leftButtonText) {
          this.leftButtonText = $D.id('panelLeftButtonText-' + this.id);
        }
        this.leftButtonText.innerHTML = $S.encodeHtml(text);
      },
      setMenuItems: function (menuItems) {
        this.menuList.innerHTML = tmplMainMenu({
          menuItems: menuItems
        });
        this.hideMenuList();
        $D.setStyle(this.menuList, 'display', 'block');
      },
      hideMenuList: function () {
        $D.removeClass(this.menuList, "show");
      },
      showMenuList: function () {
        $D.addClass(this.menuList, "show");
      },
      toggleMenuList: function () {
        var ml = this.menuList;
        if (ml) {
          if (!$D.hasClass(ml, "show")) {
            this.showMenuList();
          }
          else {
            this.hideMenuList();
          }
        }
      }

    });
  });
})
;
define('mq.report', [
  'jm'
], function () {

  J.$package("mq.report", function (J) {
    var $T = JM.type;

    var ISD_SPEED_CGI = 'https://isdspeed.qq.com/cgi-bin/r.cgi';

    var BID = 254;//badjs 上报id
    var ERROR_REPORT_URL = 'https://badjs.qq.com/cgi-bin/js_report?';
    var imageTransport = null;
    // 测速数据的缓存
    var speedCache = {};

    //初始化，将已有的缓存数据copy进来
    var reportInit = function () {
      var speedTempCache = window.speedTempCache;
      if (!speedTempCache || !$T.isObject(speedTempCache)) return;

      J.extend(speedCache, speedTempCache);

    };


    //上报接口
    var serializeParam = function (param) {
      if (!param) return '';
      var qstr = [];
      for (var key in param) {
        if (param.hasOwnProperty(key)) {
          qstr.push(encodeURIComponent(key) + '=' + encodeURIComponent(param[key]));
        }
      }
      return qstr.join('&');
    }

    var report = function (url, param) {
      var img = new Image();
      img.onload = function () {
        img = null;
      }

      if (!param) {
        img.src = url;
      } else {
        if (url.indexOf('?') == -1) {
          url += '?';
        } else {
          url += '&';
        }
        url = url + serializeParam(param);
        img.src = url;
      }
    };

    /**
     * 上报到 isd 测速平台, 默认都会把所有上报缓存, 直到指定 fulsh 为 true,
     * 不指定 end 的调用是记录开始时间, 当 end 为 true 时为结束时间
     *
     * @param  {String} flag   测速平台上申请到的 flag 如: 7832-7-1
     * @param  {Number} id     代表该业务的 id, 如 7832-7-1-1 中的 1
     * @param  {Boolean} end   这次上报是否是结束点
     * @param  {Boolean} flush 是否把缓存的测速数据全部发送到后台,
     *                         注意: end 为 true 时, 该参数才生效
     * @example
     * isdSpeed('7832-7-1', 1); // 计时开始
     * // do something
     * isdSpeed('7832-7-1', 1, true); // 计时结束
     * // do something
     * isdSpeed('7832-7-1', 2); // 计时开始
     * // do something
     * isdSpeed('7832-7-1', 2, true, true); // 计时结束, 同时把缓存的请求发送到后台
     */
    var flushSpeedCache = function (idArray) {
      for (var flag in speedCache) {
        var cache = speedCache[flag],
            param = {},
            arr = flag.split('-'),
            got = false;

        for (var i = 0; i < arr.length; i++) {
          param['flag' + (i + 1)] = arr[i];
        }

        for (var id in cache) {
          if ($T.isArray(cache[id])) {
            param[id] = cache[id][0];
            got = true;
            delete cache[id];
          }
        }
        if (got) {
          report(ISD_SPEED_CGI, param);
        }
        idArray && clearSpeedCache(flag, idArray);
      }
      // alert(JSON.stringify(speedCache));
    };

    var clearSpeedCache = function (flag, idArray) {
      if (!flag) return;
      var cache = speedCache[flag];
      if (!cache) return;

      if (!idArray) {
        cache = {};//没有传idArray则清空所有的cache
        return;
      } else if ($T.isArray(idArray)) {
        for (var id in cache) {
          if (id in idArray) {
            delete cache[id];
          }
        }
      }
    };

    var speedReport = function (flag, id, end, flush) {
      if (!flag) return;
      var cache = speedCache[flag];
      if (!cache) {
        cache = speedCache[flag] = {};
      }
      if (!end) {
        if (cache[id]) { // 这个上报已经有初始值了, 是不是哪里出错了?
          // throw new Error('reduplicate speed start point [' + flag +
          //         '-' + id + ']');
          return;
        }
        cache[id] = Date.now();//开始时间是数字
      } else {
        if ($T.isArray(cache[id])) { // 这个上报已经有结束值了, 是不是哪里出错了?
          // throw new Error('reduplicate speed end point [' + flag +
          //         '-' + id + ']');
          return;
        }
        if (cache[id]) {
          cache[id] = [Date.now() - cache[id]];//结束时间是数组
        } else {
          // throw new Error('this speed point [' + flag + '-' + id +
          //         '] doesn\'t have a start point');
          return;
        }
        flush && flushSpeedCache();
      }
    };

    /**
     * 上报js错误
     * @param  {[type]} errorMsg   [description]
     * @param  {[type]} url        [description]
     * @param  {[type]} lineNumber [description]
     * @return {[type]}            [description]
     */
    var errorReport = function (errorMsg, url, lineNumber) {

      var bid = 'bid=' + BID;
      var mid = '';//monitorId? 'mid='+ monitorId : '';

      var msg = 'msg=' + encodeURIComponent([errorMsg, url, lineNumber, navigator.userAgent].join("|_|"));

      var src = ERROR_REPORT_URL + [bid, mid, msg].join("&");

      imageTransport = new Image;
      imageTransport.src = src;
    };

    /**
     * @monitorId MonitorId 可选，但强烈建议上报Monitor系统便于监控
     * 错误查询界面：http;//nlog.server.com
     */
    (function (monitorId) {

      window.onerror = function (errorMsg, url, lineNumber) {
        errorReport(errorMsg, url, lineNumber);
      };
    })();


    J.extend(this, {
      speedReport: speedReport,
      flushSpeedCache: flushSpeedCache,
      clearSpeedCache: clearSpeedCache
    });

    reportInit();
  });


  // MM上报，cgi返回码
  MM = (function () {
    var image = new Image(),
        paramObj = {};

    /**
     * @param {string} cgi cgi路径, 不携带参数, 例如: https://openmobile.qq.com/oauth2.0/m_sdkauthorize
     * @param {string} retcode 返回码, 透传cgi的retcode
     * @param {string} tmcost cgi耗时, 在请求cgi前打"请求时间戳"t1, 执行callback时马上打"响应时间戳"t2
     *                          此处传入t2-t1的值, 单位为ms
     * @param {object} extra 扩展参数对象
     */
    var report = function (cgi, retcode, tmcost, extra) {
      var url,
          paramArr = [];

      // 处理上报项
      paramObj.commandid = cgi;
      paramObj.resultcode = retcode;
      paramObj.tmcost = tmcost;
      if (extra) {
        for (var i in extra) {
          if (extra.hasOwnProperty(i)) {
            paramObj[i] = extra[i];
          }
        }
      }

      if (retcode == 0) {
        // 成功的上报采样为1/20
        // frequency为采样分母
        paramObj.frequency = 1;
      }

      for (var j in paramObj) {
        if (paramObj.hasOwnProperty(j)) {
          paramArr.push(j + "=" + encodeURIComponent(paramObj[j]));
        }
      }
      url = "https://wspeed.qq.com/w.cgi?" + paramArr.join("&");
      image.src = url;
    };

    /**
     * @param {string} appid 可到http://m.isd.com/app/mm 申请
     *                 互联Web: 1000128, 查找Web: 1000130
     * @param {string} uin 用户qq号
     * @param {string} version 版本号 'QC_WEB' -> 互联, 'FIND_WEB_4.2' -> 查找
     */
    var init = function (appid, uin, version) {
      paramObj = {
        appid: appid,
        touin: uin,
        releaseversion: version,
        frequency: 1
      };
    };

    return {
      init: init,
      report: report
    };
  })();


  //上报初始化
  MM.init(1000164, null, 'SMARTQQ');
  // //上报cgi
  // MM.report(cgi , '0', time);
});

define('mq.rpcservice', [
  "./mq.portal",
  "./mq.report"
], function () {
  J.$package("alloy", function (J) {
    //ajaxProxy的回调
    //这里为了安全，不直接传回调函数过来，这里做一层map
    this.ajaxProxyCallback = function (callback, id) {
      switch (callback) {
        case 1 :
          mq.rpcService.onAjaxFrameLoad(id);
          break;
        default :
          break;
      }
    }

  });

  J.$package("mq.rpcService", function (J) {
    var packageContext = this;

    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http;

    var LOGIN_CGI = mq.DYNAMIC_CGI_URL + "channel/login2",
        SEND_POLL_CGI = mq.DYNAMIC_CGI_URL + "channel/poll2",
        GET_VFWEBQQ_CGI = mq.STATIC_CGI_URL + "api/getvfwebqq",
        REFUSE_FILE_CGI = mq.DYNAMIC_CGI_URL + "channel/refuse_file2",
        REFUSE_OFFLINE_FILE_CGI = mq.DYNAMIC_CGI_URL + "channel/notify_offfile2"
    ;

    var PROXY_URLS = {
      "s.web2.qq.com": "//s.web2.qq.com/proxy.html?v=20130916001", // 有一部分cgi使用域名
      "d.web2.qq.com": "//d1.web2.qq.com/proxy.html?v=20130916001", // 不用
      "d1.web2.qq.com": "//d1.web2.qq.com/proxy.html?v=20151105001" // 有一部分cgi，长轮询推消息的
    };

    var pollFailureCount = 0,
        pollFailureCountMax = 8;


    var proxyFactory;

    // 特殊灰度名单
    var testUinArr = [545947669, 2625798700, 2060334992, 815804054, 824526678, 2393411919, 1622896200, 1780117600, 545947669, 2625798700, 815804054, 806631455, 2258559233, 397409136, 343385528, 6427213, 2293957953, 271516791, 805966355, 529115674, 514308206, 412842543, 75982457, 962085702, 987733967, 3279623776];


    //------------------------------------------------------------------------------------------------------------
    //== mq.rpcService 的私有方法 ===============================================================================
    //------------------------------------------------------------------------------------------------------------
    /**
     * @private
     * @class ajax请求的封装类
     * @name HttpRequest
     * @memberOf mq.rpcService
     * @author azrael
     * @version 1.0
     * @constructor
     * @param {Function} ajaxRequestInstant 一个实现了发送请求的方法
     * @description
     *  把跨域请求和同域请求封装成一个类,减少重复的代码,初始化时传入一个具体发送ajax请求的方法
     * @example
     *  1. var selfSendRequest = new HttpRequest(J.http.ajax);
     *     selfSendRequest.send(...);
     *  2. var crossSendRequest = new HttpRequest(proxySend);
     *     crossSendRequest.send(...);
     */
    var HttpRequest = new J.Class(
        /**
         * @lends mq.rpcService.HttpRequest.prototype
         */
        {
          /**
           * HttpRequest 构造函数
           * @ignore 忽略
           */
          init: function (ajaxRequestInstant) {
            this._ajaxRequestInstant = ajaxRequestInstant;
          },
          /**
           * 发送ajax请求
           * @public
           * @param {String} url
           * @param {Object} option 请求参数
           *
           */
          send: function (url, option) {
            option = option || {};
            // 默认不缓存
            option.cacheTime = option.cacheTime || 0;
            option.onSuccess = option.onSuccess;
            option.onError = option.onError;
            option.onTimeout = option.onTimeout;
            option.onComplete = option.onComplete;

            var opt = {
              iframeName: option.iframeName,
              method: option.method || "GET",
              contentType: option.contentType || "",
              enctype: option.enctype || "",  //"multipart/form-data",
              data: option.data || {},
              arguments: option.arguments || {},
              context: option.context || null,
              timeout: option.timeout || 30000,

              onSuccess: option.onSuccess && function (o) {
                var responseText = o.responseText || '-';
                var data = {};
                try {
                  data = JSON.parse(responseText);
                } catch (e) {
                  mq.error("alloy.rpcservice: JSON 格式出错", 'HttpRequest');
                }
                data.arguments = option.arguments || {};
                option.onSuccess.call(option.context, data);
              },
              onError: option.onError && function (o) {
                option.onError.call(option.context, o);
              },
              //尚未测试
              onTimeout: option.onTimeout && function (o) {
                var data = {};
                data.arguments = option.arguments || {};
                option.onTimeout.call(option.context, data);
              },
              onComplete: option.onComplete && function (o) {
                var data = {};
                data.arguments = option.arguments || {};
                option.onComplete.call(option.context, data);
              }
            };


            opt.data = J.http.serializeParam(opt.data);
            if (opt.method == "GET") {
              var queryString = opt.data;
              if (option.cacheTime === 0) {
                if (queryString) {
                  queryString += "&t=" + (new Date()).getTime();
                } else {
                  queryString += "t=" + (new Date()).getTime();
                }
              }
              if (queryString) {
                url = url + "?" + queryString;
              }

              opt.data = null;
              this._ajaxRequestInstant(url, opt);
            } else {
              if (!opt.contentType) {
                opt.contentType = 'application/x-www-form-urlencoded';
              }
              // 由于后台某个cgi在有时间戳时会出错，暂时去掉POST方式下的时间戳
              this._ajaxRequestInstant(url, opt);
            }
          }

        });

    /**
     * @private
     * @class ajax跨域请求代理的封装类
     * @name ProxyRequest
     * @memberOf mq.rpcService
     * @author azrael
     * @version 1.0
     * @constructor
     * @param {String} id 请求代理的id,根据这个id识别各个代理
     * @param {String} proxyUrl 代理文件的URL
     * @description 每个不同的代理, 需要new一个不同的 ProxyRequest 实例
     * @example
     *  var proxyRequest = new ProxyRequest(proxyId, proxyUrl);
     *  proxyRequest.send(...);
     */
    var ProxyRequest = new J.Class(
        /**
         * @lends mq.rpcService.ProxyRequest.prototype
         */
        {
          /**
           * ProxyRequest 构造函数
           * @ignore
           */
          init: function (id, proxyUrl) {
            var iframeName = "qqweb_proxySendIframe_" + id;

            var context = this,
                proxyIframe,
                retryCount = 3;
            this.iframeName = iframeName;
            this._ajaxCallbacks = [];
            this._proxySend = null;
            this._proxyAjaxSend = null;
            proxyUrl += (/\?/.test(proxyUrl) ? "&" : "?") + 'id=' + id;
            //mq.log('ProxyRequest >>>>> init: ' + proxyUrl, 'ProxyRequest');
            var resetIframeSrc = function () {
              //              if(retryCount-- > 0){
              //                  J.warn("ProxyRequest >>>>> set proxyIframe src again!", 'ProxyRequest');
              //                  var url = proxyUrl;
              //                  if((url.indexOf('?') > -1)){
              //                      url += '&t2=' + (new Date()).getTime();
              //                  }else{
              //                      url += '?t2=' + (new Date()).getTime();
              //                  }
              //                  proxyIframe.setAttribute("src", url);
              //              }else{
              //                  J.warn("ProxyRequest >>>>> set proxyIframe src over 3 time, not set now!", 'ProxyRequest');
              //              }
            };
            /**
             * @ignore
             */
            var onAjaxFrameLoad = function () {
              var ajaxProxy = window.frames[iframeName];
              //mq.log('ProxyRequest >>>>> load: ' + ajaxProxy.location.href, 'ProxyRequest');
              try {
                if (ajaxProxy.ajax) {
                  context._proxyAjaxSend = ajaxProxy.ajax;
                  var ajaxCallbacks = context._ajaxCallbacks;
                  for (var i = 0, len = ajaxCallbacks.length; i < len; i++) {
                    var url = ajaxCallbacks[i].url;
                    var option = ajaxCallbacks[i].option;
                    context.proxySend(url, option);
                  }
                  context._ajaxCallbacks = [];
                } else {
                  //mq.log("ProxyRequest >>>>> ajaxProxy error: ajax is undefined!!!!", 'ProxyRequest');
                  // resetIframeSrc();
                  //                        setTimeout(onAjaxFrameLoad, 200);
                }
              } catch (e) {
                mq.error("ProxyRequest >>>>> ajaxProxy error: " + e.message + " !!!!", 'ProxyRequest');
                // resetIframeSrc();
              }
            };
            //            var onAjaxFrameUnLoad = function(){
            //
            //               bodyEl.removeChild(proxyIframe);
            //            };
            var bodyEl = document.body,
                divEl = $D.node("div");
            divEl.setAttribute("class", "hiddenIframe");

            var html = '<iframe id="' + iframeName + '" class="hiddenIframe" name="' + iframeName + '" src="' + proxyUrl + '" width="1" height="1"></iframe>';
            divEl.innerHTML = html;
            bodyEl.appendChild(divEl);
            proxyIframe = document.getElementById(iframeName);
            this.id = id;
            this.onAjaxFrameLoad = onAjaxFrameLoad;
            //TODO 兼容旧的回调方式
            //            $E.on(proxyIframe, "load", onAjaxFrameLoad);
            //            $E.on(window, "unload", onAjaxFrameUnLoad);
            if (J.browser.firefox/* && isFirstRequest*/) {//firefox有iframe的内存泄漏bug, 这里采用放弃第一次请求的方法
              //                isFirstRequest = false;
              proxyIframe.setAttribute("src", proxyUrl);
            }
          },
          /**
           * 使用代理发送跨域ajax请求
           * @public
           * @param {String} url
           * @param {Object} option 请求参数
           *
           */
          send: function (url, option) {
            if (this._proxyAjaxSend) {
              this.proxySend(url, option);
              this.send = this.proxySend;
            } else {
              this._ajaxCallbacks.push({'url': url, 'option': option});

            }
          },

          /**
           * 使用代理进行发送的方法, 调用这个方法时必须保证已经存在一个代理<br/>
           * 建议不要直接调用这个方法, 使用 send 方法代替
           * @see send
           * @private
           * @param {String} url
           * @param {Object} option 请求参数
           */
          proxySend: function (url, option) {
            if (!this._proxySend) {
              this._proxySend = new HttpRequest(this._proxyAjaxSend);
            }
            option.iframeName = this.iframeName;
            this._proxySend.send(url, option);
          }
        });

    var CfProxyRequest = new J.Class(
        /**
         * @lends mq.rpcService.ProxyRequest.prototype
         */
        {
          /**
           * ProxyRequest 构造函数
           * @ignore
           */
          init: function (id, proxyUrl) {
            var iframeName = "qqweb_proxySendIframe" + id;
            this.iframeName = iframeName;
            //              ajaxFrameUrlSetted = false,
            var context = this;
            var proxyIframe;
            this._ajaxCallbacks = [];
            this._proxySend = null;
            this._proxyAjaxSend = null;
            //mq.log('ProxyRequest >>>>> init: ' + proxyUrl, 'ProxyRequest');
            /**
             * @ignore
             */
            var onAjaxFrameLoad = function () {
              context._proxyAjaxSend = context.cfProxySend;
              var ajaxCallbacks = context._ajaxCallbacks;
              for (var i = 0, len = ajaxCallbacks.length; i < len; i++) {
                var url = ajaxCallbacks[i].url;
                var option = ajaxCallbacks[i].option;
                context.proxySend(url, option);
              }
              context._ajaxCallbacks = [];
            };
            var bodyEl = document.body,
                divEl = $D.node("div");
            divEl.setAttribute("class", "hiddenIframe");

            var html = '<iframe id="' + iframeName + '" class="hiddenIframe" name="' + iframeName + '" src="' + proxyUrl + '" width="1" height="1"></iframe>';
            divEl.innerHTML = html;
            bodyEl.appendChild(divEl);

            proxyIframe = $D.id(iframeName);
            $E.on(proxyIframe, "load", onAjaxFrameLoad);
            //            $E.on(window, "unload", onAjaxFrameUnLoad);
            proxyIframe.setAttribute("src", proxyUrl);

          },
          /**
           * 使用代理发送跨域ajax请求
           * @public
           * @param {String} url
           * @param {Object} option 请求参数
           *
           */
          send: function (url, option) {
            //          this.cfProxySend(url, option);
            //            this.send = this.cfProxySend;
            //            return;
            if (this._proxyAjaxSend) {
              this.proxySend(url, option);
              this.send = this.proxySend;
            } else {
              this._ajaxCallbacks.push({'url': url, 'option': option});

            }
          },
          /**
           * 使用代理进行发送的方法, 调用这个方法时必须保证已经存在一个代理<br/>
           * 建议不要直接调用这个方法, 使用 send 方法代替
           * @see send
           * @private
           * @param {String} url
           * @param {Object} option 请求参数
           */
          proxySend: function (url, option) {
            if (!this._proxySend) {
              this._proxySend = new HttpRequest(this._proxyAjaxSend);
            }
            option.iframeName = this.iframeName;
            this._proxySend.send(url, option);
          },
          cfProxySend: function (uri, option) {
            var id = cfHelper.setOption(option);
            uri = uri.replace('http://', 'https://');
            var param = {
              method: option.method || "GET",
              data: option.data || null,
              isAsync: option.isAsync || true,
              timeout: option.timeout,
              contentType: option.contentType || "",
              type: option.type,
              uri: uri
            };
            var opt = {
              id: id,
              option: param,
              uri: uri,
              iframeName: option.iframeName,
              host: mq.MAIN_URL,
              timestamp: +new Date//chrome 会收到两次message....
            };
            var msg = JSON.stringify(opt);
            var reg = RegExp(/(^(https:)?\/\/[\w\.]+)\//);
            //解析出视频ID
            reg.test(uri);
            var host = RegExp.$1;//url参数
            host.replace(/^http(s)?/, '');
            host = location.protocol + host;

            if (('postMessage' in window) && !J.browser.ie) {
              var target = window.frames[option.iframeName];
              target.postMessage(msg, host);
            } else {
              var divEl = $D.node("div");
              var proxyUrl = host + "/app.rpc.proxy.html"
              divEl.innerHTML = '<iframe class="hiddenCFProxy" name="' + encodeURIComponent(msg) + '" src="' + proxyUrl + '" onload="mq.rpcService.removeCF(this)"></iframe>';
              document.body.appendChild(divEl);
            }
          }
        });

    /**
     * @private
     * @class ajax跨域代理工厂类
     * @name ProxyFactory
     * @memberOf alloy.rpcService
     * @author azrael
     * @version 1.0
     * @constructor
     * @param {Object} option 工厂初始化参数
     * @description
     * @example
     *  var proxyFactory = new ProxyFactory();
     *  var proxyRequest = proxyFactory.getProxy(proxyUrl);
     *  proxyRequest.send(url, option);
     */
    var ProxyFactory = new J.Class(
        /**
         * @lends alloy.rpcService.ProxyFactory.prototype
         */
        {
          /**
           * 构造函数
           * @ignore
           */
          init: function (option) {
            this._proxyArr = {};
            this._cFproxyArr = {};
            this._proxyId = 1;
          },
          /**
           * 获取一个proxy自增的id
           * @private
           * @return {Int}
           */
          getProxyId: function () {
            return this._proxyId++;
          },
          /**
           * 获取一个请求代理,如果不存在就创建
           * @param {String} proxyUrl 代理文件的Url
           * @return {ProxyRequest}
           */
          getProxy: function (proxyUrl, useHttps) {
            if (useHttps) {
              proxyUrl = proxyUrl.replace("proxy.html", "cfproxy.html").replace('http://', 'https://');
            }
            var proxyRequest = this._proxyArr[proxyUrl];
            if (!proxyRequest) {
              if (useHttps) {
                proxyRequest = new CfProxyRequest(this.getProxyId(), proxyUrl);
              } else {
                proxyRequest = new ProxyRequest(this.getProxyId(), proxyUrl);
              }
              this._proxyArr[proxyUrl] = proxyRequest;
            }
            return proxyRequest;
          },
          getProxyById: function (id) {
            for (var p in this._proxyArr) {
              if (this._proxyArr[p].id == id) {
                return this._proxyArr[p];
              }
            }
            return null;
          }
        });

    this.onAjaxFrameLoad = function (id) {
      var proxyRequest = proxyFactory.getProxyById(id);
      proxyRequest && proxyRequest.onAjaxFrameLoad();
    };

    //******************************************************************
    // https 相关逻辑
    //******************************************************************

    var cfHelper = {
      id: 0,
      map: {},
      getOptionId: function () {
        return this.id++;
      },
      setOption: function (option) {
        var id = this.getOptionId();
        this.map[id] = option;
        return id;
      },
      /**
       * 取回调对象，默认取一次就删除
       * @param {Number} id 参数ID
       * @param {Boolen} isKeep 是否保留，默认不保留
       */
      getOption: function (id, isKeep) {
        var option = this.map[id];
        if (!isKeep) {
          delete this.map[id];
        }
        return option;
      }
    }

    this.rpcProxyCallback = function (data) {
      var opt = J.type.isObject(data) ? data : JSON.parse(data);
      var id = opt.id;
      var type = opt.type;
      var option = cfHelper.getOption(id);
      if (option) {
        option[type](opt.option);
      }
    };
    var onCFMessage = function (e) {
      var data = e.data;
      if (e.origin.indexOf('web2.qq.com') > -1) {
        data && packageContext.rpcProxyCallback(data);
      }
    };
    if ('postMessage' in window) {
      if (window.addEventListener) {
        window.addEventListener("message", onCFMessage, false);
      } else if (window.attachEvent) {
        window.attachEvent("onmessage", onCFMessage);
      } else {
        window.onmessage = onCFMessage;
      }
    }
    this.removeCF = function (el) {
      if (el) {
        window.setTimeout(function () {
          var d = el.parentNode;
          d.parentNode.removeChild(d);
        }, 1000);
      }
    };


    /**
     * 统一封装ajax请求, 防止以后修改底层库或者要统一添加参数
     */
    this.require = function (option) {
      var data = option.data || option.param || {};
      var url = option.url;
      var action = option.action;
      var useHttps = option.https;
      var lastUinNum;
      var userUin;

      // 过滤cgi
      if (/^(http|https):\/\/d.web2.qq.com/.test(url)) {

        // url = url.replace(/https/,'http');

        userUin = J.cookie.get("uin");
        if (userUin) {
          userUin = userUin.replace('o', '');
          lastUinNum = Number(userUin[userUin.length - 1]);
          // 灰度逻辑
          // if((lastUinNum >= 0 && lastUinNum <= 7) || testUinArr.indexOf(Number(userUin)) > -1){
          url = url.replace(/^http:\/\/d.web2.qq.com/, 'http:\/\/d1.web2.qq.com');
          //}
        }
      }
      option.method = option.method || 'GET';
      if (option.method == 'POST') {
        option.data = {
          r: JSON.stringify(data)
        };
      } else {
        option.data = data;
      }

      option.onSuccess = option.onSuccess || function (data) {
            var code = ('retcode' in data) ? data.retcode :
                ('ret' in data ? data.ret : -1);

            // cgi MM上报
            window.MM && MM.report(url.split("?")[0], code || 0, +new Date - startTime);

            if (code === 0) {
              $E.fire(packageContext, action + 'Success', data);
            } else {
              $E.fire(packageContext, action + 'Failure', data);
            }
          };
      option.onError = option.onError || function (data) {
            $E.fire(packageContext, action + 'Failure', data);
          };
      option.onTimeout = option.onTimeout || function (data) {
            $E.fire(packageContext, action + 'Timeout', data);
          };

      if (!proxyFactory) {
        proxyFactory = new ProxyFactory();
      }
      var obj = J.string.parseURL(url);
      var proxyUrl = PROXY_URLS[obj.host];

      if (!proxyUrl) {
        mq.error('wrong url or no proxy!');
        return;
      }
      proxyUrl += (/\?/.test(proxyUrl) ? "&" : "?") + 'callback=1';
      var proxyRequest = proxyFactory.getProxy(proxyUrl, useHttps);

      //上报开始时间
      var startTime = +new Date;
      proxyRequest.send(url, option);

    }

    this.login = function () {
      var data = {
        ptwebqq: mq.ptwebqq,
        clientid: mq.clientid,
        psessionid: mq.psessionid
      };
      var state = mq.util.code2state(mq.main.loginType);

      data.status = state;

      // $E.fire(mq,"onlineStateChange",{
      //     state : state
      // });

      this.require({
        url: LOGIN_CGI,
        action: 'login',
        method: 'POST',
        data: data,
        onSuccess: onLoginSuccess,
        onError: onLoginError,
        onTimeout: onLoginTimeout
      });

    };
    // 登录成功的回调
    var onLoginSuccess = function (data, jsonfail) {
      switch (data.retcode) {
        case 0:
          $E.fire(packageContext, "LoginSuccess", data);
          break;
          // 先不处理这些个 az
          // case 103://跟uin与skey有关的错误
          //     $E.fire(packageContext,  "NotLogin", data.result);
          //     break;
          // case 106:
          //     //用户不在白名单
          //     $E.fire(packageContext,  "UinNotInWhitelist", data.result);
          //     break;
          // case 111:
          //     //用户在黑名单
          //     $E.fire(packageContext,  "UinInBlacklist", data.result);
          //     break;
          // case 112:
          //     //后台超载
          //     $E.fire(packageContext, "Overload", data.result);
          //     break;
          // case 100000:
          // case 100001:
          // case 100002:
          //     //ptwebqq失效
          //     $E.fire(packageContext, "PtwebqqFail", data.result);
          //     break;
        default:
          $E.fire(packageContext, "LoginFailure", {text: "登陆失败"});
          break;
      }
    };
    // 登录失败的回调
    var onLoginError = function (data) {
      $E.fire(packageContext, "LoginFailure", {text: "登陆失败"});
    };
    var onLoginTimeout = function (data) {
      $E.fire(packageContext, "LoginFailure", {text: "登陆失败"});
    }

    this.getVfWebQQ = function () {
      var data = {
        ptwebqq: mq.ptwebqq,
        clientid: mq.clientid,
        psessionid: mq.psessionid
      };
      this.require({
        url: GET_VFWEBQQ_CGI,
        action: 'getVfWebQQ',
        method: 'GET',
        data: data
      });
    };

    //发送poll请求
    this.sendPoll = function () {
      var data = {
        ptwebqq: mq.ptwebqq,
        clientid: mq.clientid,
        psessionid: mq.psessionid,
        key: ""
      };

      this.require({
        url: SEND_POLL_CGI,
        https: false, // mq.setting.enableHttps, 强制https
        action: 'poll',
        method: 'POST',
        data: data,
        timeout: 120000,//long poll 120s timeout
        onSuccess: onPollSuccess,
        onError: onPollError,
        onTimeout: onPollTimeout
      });
    };

    var onPollSuccess = function (data) {
      var code = data ? data.retcode : -1;
      if (code === 0 || code === 102) {
        resetFailCount();
        try {
          $E.fire(packageContext, "PollSuccess", data.result);
        } finally {
          $E.fire(packageContext, "PollComplete");
        }
      } else if (code === 100) {
        $E.fire(packageContext, "NotReLogin");
      } else if (code === 120) {//断线重连之类的逻辑, 现在先不做
        $E.fire(packageContext, "ReLinkFailure", data);
      } else if (code === 121) {
        $E.fire(packageContext, "ReLinkFailure", data);
      } else if (code === 116) {
        //ptwebqq过期, 更换
        mq.main.setValidate({ptwebqq: data.p});
        try {
          $E.fire(packageContext, "PollComplete");
        } catch (e) {
          mq.debug("pollComplete notify error: " + e.message, e);
        }
        mq.monitor(2518488);
      } else {
        setTimeout(function () {
          if (code != 109 && code != 110) {
            //poll失败超过 4次就进行重新登录尝试
            onPollFailure();
          }
          try {
            $E.fire(packageContext, "PollComplete");
          } catch (e) {
            mq.debug("pollComplete notify error: " + e.message, e);
          }
        }, 10 * 1000);


      }
    }

    var onPollError = function (data) {
      // if(data && data.status == 504 && Math.abs(costTime - 30000) < 3000){
      //     //因后台nginx 30s就会挂断xhr的问题, 504的超时不能算为超时
      //     try{
      //         $E.fire(packageContext, "PollComplete");
      //     }catch(e){
      //         mq.debug("pollComplete notify error: " + e.message, e);
      //     }
      // }else{
      mq.debug("onPollError");
      onPollTimeout(data);
      // }
    }

    var onPollTimeout = function (data) {
      onPollFailure();
      try {
        $E.fire(packageContext, "PollComplete");
      } catch (e) {
        mq.debug("pollComplete notify error: " + e.message, e);
      }
      mq.monitor(2518489);
    }

    var onPollFailure = function () {
      mq.debug('pool failure ' + pollFailureCount);
      if (++pollFailureCount > pollFailureCountMax) {
        pollFailureCount = 0;
        $E.fire(packageContext, "FailCountOverMax");
      }
    }

    var resetFailCount = function () {
      pollFailureCount = 0;
    }

    // 重连 ===========================
    this.sendReLink = function (param) {

      var data = {
        ptwebqq: mq.ptwebqq,
        clientid: mq.clientid,
        psessionid: mq.psessionid,
        key: "",
        state: mq.util.code2state(mq.main.loginType)
      };

      this.require({
        url: LOGIN_CGI,
        action: 'relink',
        method: 'POST',
        data: data,
        onSuccess: onReLinkSuccess,
        onError: onReLinkError,
        onTimeout: onReLinkTimeout
      });

    };
    // 登录成功的回调
    var onReLinkSuccess = function (data) {
      var code = data ? data.retcode : -1;
      switch (data.retcode) {
        case 0:
          pollMax = 1;
          $E.fire(packageContext, "ReLinkSuccess", data.result);
          break;
        case 103:
          $E.fire(packageContext, "NotReLogin", data.result);
          break;
        case 113://稍后请求
        case 115://uin或IP被封堵，要过一段时间才能解封
        case 112://超出后台能够承受最大用户数
          $E.fire(packageContext, "ReLinkFailure", data);
          break;
        default:
          $E.fire(packageContext, "ReLinkStop");
          break;
      }
      //mq.log("onReLinkSuccess");
    };
    // 登录失败的回调
    var onReLinkError = function (data) {
      // mq.log("sendReLinkError");
      $E.fire(packageContext, "ReLinkFailure");
    };
    // 登录失败的回调
    var onReLinkTimeout = function (data) {
      // mq.log("sendReLinkTimeout");
      $E.fire(packageContext, "ReLinkFailure");
    };

    //发送拒绝接收文件/channel/refuse_file?to=...&face=...&lcid=...&clientid=....
    this.sendRefuseFile = function (data) {

      data.psessionid = mq.psessionid;
      data.clientid = mq.clientid;

      this.require({
        url: REFUSE_FILE_CGI,
        method: 'GET',
        data: data
      });

    };

    //notify_offfile2?to=对方的加密Uin&file_name=...&file_size=...&action=1|2|1&clientid=...&psession_id=...
    this.sendRefuseOfflineFile = function (data) {

      data.psessionid = mq.psessionid;
      data.clientid = mq.clientid;

      this.require({
        url: REFUSE_OFFLINE_FILE_CGI,
        method: 'GET',
        data: data
      });
    }

  });
})
;
define('mq.view.MemberList', [
  "./mq.i18n",
  "./mq.view.transitionmanager"
], function () {
  J.$package("mq.view", function (J) {
    var $E = J.event,
        $D = J.dom,
        $H = J.http,
        $S = J.string;

    var $M = mq.i18n.message,
        $T = mq.templateManager;

    var packageContext = this,
        doc = document,
        arrSort = [].sort,
        MAX_NUMBER = Number.MAX_VALUE;


    this.MemberList = J.Class({
      init: function (option) {
        option = option || {};
        this.id = option.id;
        this.scrollArea = option.scrollArea;
        this.listContainer = option.listContainer;
        this.listTmpl = option.listTmpl;
        this.create();
      },
      create: function () {
        this.scroll = new iScroll(this.scrollArea);
        this.lazyload = MUI.I_LazyLoadImgs({
          scrollObj: this.scroll,
          isFade: true
        });
      },
      render: function (data, notRefresh) {
        this._preprocessData(data);
        //add
        data.dataType = data.prefix;

        var html = this.listTmpl(data);
        this.listContainer.innerHTML = html;
        !notRefresh && this.refresh();
      },
      renderAllCategory: function (categories) {
        var i, l;
        for (i = 0, l = categories.length; i < l; ++i) {
          this.renderOneCategory(categories[i]);
        }
      },
      // 参数 `category` 是一个category对象，其 `list` 属性是把好友按在线状态分类的对象
      renderOneCategory: function (category) {
        var container,
            listArr = [],
            listObj = category.list,
            categoryId = category.index;
        // 此数组中各个状态的先后顺序决定了用户界面中的排序
        var states = ['callme', 'online', 'away', 'busy', 'silent', 'offline'];
        J.each(states, function (state) {
          listArr = listArr.concat(listObj[state]);
        });
        this._renderOneCategory(listArr, categoryId);
      },
      // 参数 `category` 是一个category数组，数组成员是好友对象
      _renderOneCategory: function (category, categoryId) {
        container = $D.id('groupBodyUl-' + categoryId);
        if (!container) return;
        container.innerHTML = this.listTmpl({
          type: 'list',
          list: category,
          prefix: this.id,
          html: $S.encodeHtml
        });
      },
      renderOneSignature: function (uin, signature) {
        var theOne = this.listContainer.querySelector('#friend-item-friend-' + uin),
            sigEle, nickEle, encodeHtml;
        if (!theOne) return;

        sigEle = theOne.querySelector('.member_signature');
        encodeHtml = $S.encodeHtml
        if (sigEle) {
          sigEle.innerHTML = encodeHtml(signature);
        }
        else {
          sigEle = doc.createElement('span');
          sigEle.setAttribute('class', 'member_signature');
          sigEle.innerHTML = encodeHtml(signature);
          msgEle = theOne.querySelector('.member_msg');
          msgEle.appendChild(sigEle);
        }
      },
      renderOneState: function (uin, state) {
        var theOne = this.listContainer.querySelector('#friend-item-friend-' + uin),
            stateEle;
        if (!theOne) return;
        stateEle = theOne.querySelector('.member_state');

        if (stateEle) {
          stateEle.innerHTML = "[" + $M(state) + "]";
        }
      },
      renderAllOnlineStateCount: function (categories) {
        var op = $D.className("onlinePercent"),
            o;
        J.each(categories, function (c, i) {
          o = op[i];
          if (o)
            o.innerHTML = (c.count - c.list.offline.length) + "/" + c.count;
        });
      },
      append: function (data, notRefresh) {
        this._preprocessData(data);
        //add

        data.dataType = data.prefix;
        var html = this.listTmpl(data);

        var tempNode = document.createElement('div');
        tempNode.innerHTML = html;
        var nodes = tempNode.childNodes; //include text node
        var fragment = document.createDocumentFragment();
        while (nodes[0]) {
          fragment.appendChild(nodes[0]);
        }

        this.listContainer.appendChild(fragment);
        !notRefresh && this.refresh();
      },
      destory: function () {
        for (var i in this) {
          if (this.hasOwnProperty(i)) {
            this[i] = null;
            delete this[i];
          }
        }
      },
      refresh: function () {
        // var t = this.scroll.scroller.parentNode;
        // var clientRect = t.getBoundingClientRect();
        // $D.setStyle(t,"height", clientRect.height +"px");

        this.scroll.refresh();
        this.lazyload.refresh();
      },
      //hack for friends
      renderCateItems: function (list) {
        var map = {}, arr = [], i, item, container;
        var arrLen;
        for (i = 0; item = list[i]; i++) {
          //只有好友列表显示好友在线离线状态 stateName:"[在线]" state:"online"
          item = J.extend({}, item);
          item.stateName = "[" + $M(item.state) + "]";

          if (!map[item.category]) {
            map[item.category] = [];
            arr.push(item.category);
          }
          map[item.category].push(item);
        }
        arrLen = arr.length;
        //好友分类对象遍历
        for (i = 0; i <= arrLen; i++) {
          var thisCategory = arr[i];
          if (map.hasOwnProperty(thisCategory)) {
            item = map[thisCategory];
            this._renderOneCategory(item, thisCategory);
          }
        }
        this.refresh();
      },
      // private method
      _preprocessData: function (data) {
        data.html = $S.encodeHtml;
        data.prefix = this.id;
        return data;
      }
    });
  });
});

define('mq.model.memberlist', [
  "./mq.i18n",
  "./mq.portal",
  "./mq.report"
], function () {
//联系人model类
  J.$package("mq.model.buddylist", function (J) {
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http,
        $M = mq.i18n.message;
    var pageContext = this;

    //数据列表
    var categoriesList = [], groupList = [], recentList = [], friendsList = [], discussList = [], sigList = [],
        id2category = {}, uin2Friend = {}, gid2group = {}, id2discuss = {}, uin2sig = {}, strangerList = [],
        uin2stranger = {};
    var selfUin, selfInfo;
    var onlineBuddy;
    //cgi常量
    var GET_USER_FRIENDS_CGI = mq.STATIC_CGI_URL + "api/get_user_friends2",
        GET_GROUP_CGI = mq.STATIC_CGI_URL + "api/get_group_name_list_mask2",
        GET_DISCUSS_CGI = mq.STATIC_CGI_URL + "api/get_discus_list",
        GET_RECENT_LIST_CGI = mq.DYNAMIC_CGI_URL + "channel/get_recent_list2",
        GET_SIGNATURE = mq.STATIC_CGI_URL + "api/get_single_long_nick2",
        GET_SELF_INFO = mq.STATIC_CGI_URL + "api/get_self_info2",
        GET_GROUP_INFO_CGI_LIST = mq.STATIC_CGI_URL + "api/get_group_info_ext2",
        GET_DISCUSS_INFO_CGI_LIST = mq.DYNAMIC_CGI_URL + "channel/get_discu_info",
        GET_FRIEND_INFO_CGI = mq.STATIC_CGI_URL + "api/get_friend_info2",
        // GET_FRIEND_UIN = mq.STATIC_CGI_URL + "api/get_friend_uin2", 这个有安全风险，已停止，20170414vorshen
        GET_ONLINE_BUDDIES = mq.DYNAMIC_CGI_URL + "channel/get_online_buddies2",
        SEND_CHANGE_ONLINE_STATE = mq.DYNAMIC_CGI_URL + "channel/change_status2"
    ;

    // 测速上报相关
    var FLAG = "7832-22-1",
        REPORT_SHOWRECENT = 3,
        REPORT_CGI_USER_FRIENDS = 4,
        REPORT_CGI_GROUP = 5,
        REPORT_CGI_DISCUSS = 6;


    // var DISCUSS_AVATAR_IMG = "http://0.web.qstatic.com/webqqpic/style/images/discu_avatar.png";
    var DISCUSS_AVATAR_IMG = "../img/discu_avatar.png";
    var Pair = function (s, e) {
      this.s = s || 0;
      this.e = e || 0;
    }

    var getBytes = function (str) {
      var bytes = [];
      for (var i = 0; i < str.length; ++i) {
        bytes.push(str.charCodeAt(i));
      }
      return bytes;
    }

    var hash2 = function (uin, ptvfwebqq) {
      uin += "";
      var ptb = [];
      for (var i = 0; i < ptvfwebqq.length; i++) {
        var ptbIndex = i % 4;
        ptb[ptbIndex] ^= ptvfwebqq.charCodeAt(i);
      }
      var salt = ["EC", "OK"];
      var uinByte = [];
      uinByte[0] = (((uin >> 24) & 0xFF) ^ salt[0].charCodeAt(0));
      uinByte[1] = (((uin >> 16) & 0xFF) ^ salt[0].charCodeAt(1));
      uinByte[2] = (((uin >> 8) & 0xFF) ^ salt[1].charCodeAt(0));
      uinByte[3] = ((uin & 0xFF) ^ salt[1].charCodeAt(1));
      var result = [];
      for (var i = 0; i < 8; i++) {
        if (i % 2 == 0)
          result[i] = ptb[i >> 1];
        else
          result[i] = uinByte[i >> 1];
      }
      return byte2hex(result);

    };


    var byte2hex = function (bytes) {//bytes array
      var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
      var buf = "";

      for (var i = 0; i < bytes.length; i++) {
        buf += (hex[(bytes[i] >> 4) & 0xF]);
        buf += (hex[bytes[i] & 0xF]);
      }
      return buf;
    }

    //设置群数据
    var setGroups = function (groups) {

      /* 提取群屏蔽的字段
       * 0: 接收消息; 1: 接收不提示消息; 2: 完全阻止群消息
       */
      var groupMask = {};
      J.each(groups.gmasklist, function (g) {
        if (g.gid === 1000) {
          //全局群屏蔽, TODO 先不处理
        }
        groupMask[g.gid] = g.mask;
      });

      J.each(groups.gnamelist, function (g_opt, i) {
        g_opt.mask = groupMask[g_opt.gid] || 0;
        pageContext.addGroup(new Group(g_opt));
      });
      $E.fire(pageContext, "groupListChange", groupList);
    }
    //设置讨论组数据
    var setDiscusses = function (discuss) {
      J.each(discuss.dnamelist, function (d_opt, i) {
        pageContext.addDiscuss(new Discuss(d_opt));
      });
      $E.fire(pageContext, "discussListChange", discussList);
    };
    //设置最近联系人数据
    var setRecents = function (recent_list) {
      recentList = recent_list;
      $E.fire(pageContext, "recentListChange", recentList);
    }
    //设置分类和好友数据
    var setCatagoriesAndFriends = function (categories, friends, vipinfo, info, marks) {
      //设置分类
      for (var i = 0, l = categories.length; i < l; i++) {
        var c = categories[i];
        c.count = 0;
        c.onlineCount = 0;
        c.list = {
          "callme": [],
          "online": [],
          "away": [],
          "busy": [],
          "silent": [],
          "offline": []
        }
        // c.onlinePercent = "0/0";
        pageContext.addCatagory(c);

      }

      //设置好友
      J.each(friends, function (f, i) {
        if (f.uin != selfUin) {
          var userData = info[i];
          var opt = {
            uin: userData.uin,
            allow: userData.allow,
            nick: userData.nick,
            face: userData.face,
            age: userData.age,
            gender: userData.gender,
            vip: userData.vip,
            ruin: userData.ruin,
            category: f.categories || 0
          };

          opt.mark = marks[opt.uin] ? marks[opt.uin].markname : false;
          pageContext.addFriend(new Friend(opt));
          var category = pageContext.getCatagoryById(f.categories);
          if (category)
            category.count++;

        }
      });

      //获取好友成功通知
      $E.fire(pageContext, "friendsListChange", categoriesList, friendsList);
    };
    //设置签名
    var setSignature = function (uin, sig) {
      pageContext.addSignature(uin, sig);
      var user = pageContext.getFriendByUin(uin);
      if (user) {
        user.setSignature(sig);
      }
      //获取单个签名成功通知（与修改单个签名成功不同）
      $E.fire(pageContext, "signatureGot", uin, sig);//单个好友
    };
    //设置个人资料
    var setSelfInfo = function (info) {
      pageContext.setSelfInfo(info);
      $E.fire(pageContext, "selfInfoChange", info);
    };


    //各种回调处理函数
    var handlers = {
      //获取联系人成功
      onGetFriendsListSuccess: function (result) {
        var categories = result.categories || [];
        var friends = result.friends || [];
        var vipinfo = result.vipinfo || [];
        var info = result.info || [];
        var marknames = result.marknames || [];
        var marks = {}

        var flag = false;
        for (var i = 0; i < categories.length; i++) {
          if (categories[i].index == 0) {
            flag = true;
          }
        }
        for (var i = 0; i < marknames.length; i++) {
          marks[marknames[i].uin] = marknames[i];
        }
        if (!flag) {
          //添加我的好友默认分组.
          categories.unshift({"index": 0, "name": "我的好友"});
        }
        //设置好友分类数据和好友数据
        setCatagoriesAndFriends(categories, friends, vipinfo, info, marks);
        // setCatagories(categories);
        // //设置好友数据
        // setFriends(friends,vipinfo,info);
        //获取最近联系人
        // setTimeout(function(){
        //     pageContext.getRecentList();
        // },3000);

      },
      //获取用户真实uin成功
      /*onGetFriendUinSuccess:function(result){
       var userInfo = pageContext.getFriendByUin(result.uin);
       if(userInfo){
       userInfo.ruin = result.account;
       $E.fire(pageContext, "friendInfoUpdate", userInfo);
       }
       },*/
      //获取群列表成功
      onGetGroupListSuccess: function (group_list) {
        //设置群数据
        setGroups(group_list);
      },
      //获取讨论组列表成功
      onGetDiscussListSuccess: function (discuss_list) {
        //设置讨论组数据
        setDiscusses(discuss_list);
      },
      //获取最近联系人列表成功
      onGetRecentListSuccess: function (recent_list) {
        //设置最近联系人
        setRecents(recent_list);
      },
      //获取签名成功
      onGetSignatureSuccess: function (uin, sig) {
        //设置签名
        setSignature(uin, sig);
      },
      //获取本人资料成功
      onGetSelfInfoSuccess: function (info) {
        //设置个人资料
        setSelfInfo(info);
      },
      //获取群列表详情
      onGetGroupInfoListSuccess: function (result) {
        var ginfo = result.ginfo;
        var members = ginfo.members;
        var minfo = result.minfo;
        var vipinfo = result.vipinfo;
        //增加群名片显示
        var cards = result.cards || [];
        var cardsLen = cards.length || 0;

        var groupInfo = pageContext.getGroupByGid(ginfo.gid);
        J.extend(groupInfo, ginfo);
        groupInfo.hasDetailInfo = true;
        groupInfo.members = [];
        J.each(members, function (m, i) {
          var cardName = "";
          var uin = m.muin;
          var info = minfo[i];
          var vi = vipinfo[i];
          //获取群名片
          for (var k = 0; k < cardsLen; k++) {
            if (cards[k].muin == uin) {
              cardName = cards[k].card;
              break;
            }
          }
          var opt = {
            uin: uin,
            allow: info.allow,
            nick: info.nick,
            face: info.face,
            age: info.age,
            gender: info.gender,
            vip: vi.is_vip,
            country: info.country,
            city: info.city,
            province: info.province,
            group: ginfo,
            cardName: cardName
          }

          var buddy = new Friend(opt);
          if (!pageContext.getFriendByUin(buddy.uin)) {
            // pageContext.addStrange(buddy);
            buddy.isStrange = 1;
            buddy.groupUin = ginfo.gid;
          }
          pageContext.addFriend(buddy);
          groupInfo.members.push(buddy);
          // $E.fire(pageContext, 'friendInfoUpdate', buddy);
        });
        $E.fire(pageContext, 'groupInfoUpdate', groupInfo);

      },
      onGetDiscussInfoListSuccess: function (result) {
        var d_info = result.info;
        var mem_list = d_info.mem_list;
        var mem_info = result.mem_info;
        var discussInfo = pageContext.getDiscussById(d_info.did);
        discussInfo.hasDetailInfo = true;
        discussInfo.members = [];
        J.each(mem_list, function (m, i) {
          var uin = m.mem_uin;
          var info = mem_info[i];
          var opt = {
            uin: uin,
            nick: info.nick,
            allow: info.allow,
            face: info.face,
            age: info.age,
            gender: info.gender,
            country: info.country,
            city: info.city,
            province: info.province,
            discuss: d_info
          }

          var buddy = new Friend(opt);
          if (!pageContext.getFriendByUin(buddy.uin)) {
            buddy.isStrange = 1;
            buddy.discussUin = d_info.did;
            // pageContext.addStrange(buddy);
          }
          pageContext.addFriend(buddy);
          // $E.fire(pageContext, 'friendInfoUpdate', buddy);
          discussInfo.members.push(buddy)
        });

        $E.fire(pageContext, 'discussInfoUpdate', discussInfo);
      },
      onGetFriendInfo: function (result) {
        var userInfo = pageContext.getFriendByUin(result.uin);
        J.extend(userInfo, result);
        userInfo.hasDetailInfo = true;
        $E.fire(pageContext, 'friendInfoUpdate', userInfo);
      },
      onGetBuddyOnlineStateSuccess: function (result) {
        pageContext.setAllBuddyState(result);
      }


    };

    //好友friend类
    var Friend = J.Class({
      init: function (option) {
        this.account = option.uin;
        this.uin = option.uin;
        this.ruin = option.ruin;
        this.uiuin = option.uiuin;

        // 被添加好友的验证方式
        this.allow = option.allow;

        this.face = option.face;
        this.age = option.age;
        this.gender = option.gender;
        this.name = this.nick = option.nick;

        this.country = option.country;
        this.city = option.city,
            this.province = option.province;

        this.avatar = this.getAvatar();

        this.category = option.category;

        this.group = option.group;
        this.discuss = option.discuss;

        this.vip = option.vip || false;
        this.clientType = option.clientType || "10000";
        this.mark = option.mark || false;

        this.state = option.state || "offline";
        this.stateName = "[" + $M(this.state) + "]";

        this.isStrange = option.isStrange;
        //群名片
        this.cardName = option.cardName || "";
      },
      getAvatar: function () {
        return pageContext.getAvatar(this.uin, 1);
      },
      setSignature: function (signature) {
        if (signature) {
          this.signature = signature;
          // this.htmlSignature = J.string.encodeHtmlSimple(signature); 迟点再加 现在懒得加
          // 修改单个签名成功通知
          $E.fire(pageContext, "userSignatureChange", this);
        }
      },
      setState: function (state) {
        this.state = state;
        this.stateName = "[" + $M(state) + "]";
      }
    });
    // 群Group类
    var Group = J.Class({
      init: function (option) {
        this.account = option.gid;
        this.gid = option.gid;//与好友uins类似的gid号，绝对不会与uin重复
        this.code = option.code;//群号，可能与uin重复
        this.mask = parseInt(option.mask);//群屏蔽
        this.preMask = this.mask;
        this.name = option.name;
        this.markName = option.markName;
        this.type = option.type;
        //是否已加载群信息（包括公告、群成员列表等）
        this.isLoadInfo = false;
        //拥有管理权限
        this.hasManageAuthority = false;

        this.uin2members = {};
        //群等级
        this.level = 0;

        this.avatar = this.getAvatar();
      },
      getAvatar: function () {
        return pageContext.getAvatar(this.gid, 4);
      }
    });
    //讨论组Discuss类
    var Discuss = J.Class({
      init: function (option) {
        this.account = option.did;
        this.did = option.did;// 编码后的did保证不会和uin、gid重复。会和uin和gid重复，所以必须重新编号。
        //this.dcode = option.did;//保存原始did
        this.mask = parseInt(option.mask || 0);//群屏蔽
        this.preMask = parseInt(this.mask);
        this.name = option.name;
        //是否已加载群信息（包括公告、群成员列表等）
        this.isLoadInfo = false;
        this.members = [];
        /*this.topic = ''; //主题.目前主题和名称是一个东西
         this.htmlTopic = '';
         this.titleTopic = '';*/
        this.owner = '';//讨论组创始人uin
        this.notSetName = false;    //由于存在名称为空的情况，所以用一个标识记录是否名称为空.
        //如果为空则必须在第一次接收或发消息的时候修改主题.只有在创建的时候才有效，其他情况下设置为空不用修改
        this.hadModified = true; //是否修改过主题。只有 hadModified = false&&notSetName=true的时候才要更新快空的主题

        this.avatar = this.getAvatar();
      },
      getAvatar: function () {
        return DISCUSS_AVATAR_IMG;
      }
    });

    //初始化
    this.init = function (opt) {
      selfUin = opt.selfUin;
    };
    this.bindHandlers = function () {

    };
    // 根据uin获取头像
    this.getAvatar = function (uin, type) {
      type = type || 1; // 群图标为 4
      var t = mq.vfwebqq;
      return 'https://face' + (uin % 10) + '.web.qq.com/cgi/svr/face/getface?cache=1&type=' + type + '&f=40&uin=' + uin + '&t=' + Math.floor(new Date() / 1000) + '&vfwebqq=' + t;
    };

    this.getSelfAvatar = function (uin) {
      return 'https://q.qlogo.cn/g?b=qq&nk=' + uin + '&s=100&t=' + Date.now();

    };


    //获取联系人
    //cgi测速上报
    mq.report.clearSpeedCache(FLAG, REPORT_CGI_USER_FRIENDS);
    mq.report.speedReport(FLAG, REPORT_CGI_USER_FRIENDS);

    this.getUserFriends = function () {
      var param = {};
      param.vfwebqq = mq.vfwebqq;
      param.hash = hash2(selfUin, mq.ptwebqq);
      return function (callback) {
        mq.rpcService.require({
          url: GET_USER_FRIENDS_CGI,
          method: "POST",
          withCredentials: true,
          param: param,
          onSuccess: function (data) {
            mq.report.speedReport(FLAG, REPORT_CGI_USER_FRIENDS, true, true);

            if (data.retcode == 0) {
              callback();
              handlers.onGetFriendsListSuccess(data.result);
            }
          }
        });
      };
    };

    //获取群列表
    //cgi测速上报
    mq.report.clearSpeedCache(FLAG, REPORT_CGI_GROUP);
    mq.report.speedReport(FLAG, REPORT_CGI_GROUP);

    this.getGroupList = function () {
      var param = {};
      param.vfwebqq = mq.vfwebqq;
      param.hash = hash2(selfUin, mq.ptwebqq);
      return function (callback) {
        mq.rpcService.require({
          url: GET_GROUP_CGI,
          method: "POST",
          withCredentials: true,
          param: param,
          onSuccess: function (data) {
            mq.report.speedReport(FLAG, REPORT_CGI_GROUP, true, true);

            if (data.retcode == 0) {
              callback();
              handlers.onGetGroupListSuccess(data.result);
            } else {
              callback();
            }

          }
        });
      };
    };
    //获取讨论组列表
    //cgi测速上报
    mq.report.clearSpeedCache(FLAG, REPORT_CGI_DISCUSS);
    mq.report.speedReport(FLAG, REPORT_CGI_DISCUSS);

    this.getDiscussList = function () {
      var param = {};
      param.clientid = mq.clientid;
      param.psessionid = mq.psessionid;
      param.vfwebqq = mq.vfwebqq;
      return function (callback) {
        mq.rpcService.require({
          url: GET_DISCUSS_CGI,
          method: "GET",
          withCredentials: true,
          param: param,
          onSuccess: function (data) {
            mq.report.speedReport(FLAG, REPORT_CGI_DISCUSS, true, true);

            if (data.retcode == 0) {
              callback();
              handlers.onGetDiscussListSuccess(data.result);
            }

          }
        });
      };
    };
    //获取最近联系人
    this.getRecentList = function (callback) {
      var param = {};
      param.vfwebqq = mq.vfwebqq;
      param.clientid = mq.clientid;
      param.psessionid = mq.psessionid;

      mq.rpcService.require({
        url: GET_RECENT_LIST_CGI,
        method: "POST",
        withCredentials: true,
        param: param,
        onSuccess: function (data) {
          if (data.retcode == 0) {

            handlers.onGetRecentListSuccess(data.result);
            //上报登录成功到拉取最近联系人的时间
            mq.report.speedReport(FLAG, REPORT_SHOWRECENT, true, true);

            callback && callback();
          }
        }

      });
    };

    // 获取某个好友签名
    this.sendGetSignature = function (uin) {
      mq.rpcService.require({
        url: GET_SIGNATURE,
        method: "GET",
        param: {
          tuin: uin,
          vfwebqq: mq.vfwebqq
        },
        withCredentials: true,
        onSuccess: function (data) {
          if (data.retcode === 0) {
            handlers.onGetSignatureSuccess(uin, data.result[0].lnick);
          }
        }
      });
    };
    //获取群列表详细信息
    this.getGroupInfoList = function (gcode) {
      var param = {};
      param.gcode = gcode;
      param.vfwebqq = mq.vfwebqq;

      mq.rpcService.require({
        url: GET_GROUP_INFO_CGI_LIST,
        method: "GET",
        param: param,
        withCredentials: true,
        onSuccess: function (data) {
          if (data.retcode === 0) {
            handlers.onGetGroupInfoListSuccess(data.result);
          }
        }
      });
    };

    //获取群列表详细信息
    this.getDiscussInfoList = function (did) {
      var param = {};
      param.did = did
      param.vfwebqq = mq.vfwebqq;
      param.clientid = mq.clientid;
      param.psessionid = mq.psessionid;

      mq.rpcService.require({
        url: GET_DISCUSS_INFO_CGI_LIST,
        method: "GET",
        param: param,
        withCredentials: true,
        onSuccess: function (data) {
          if (data.retcode === 0) {
            handlers.onGetDiscussInfoListSuccess(data.result);
          }
        }
      });
    };
    //获取好友真实QQ号
    /*this.sendGetFriendUin = function(uin){
     var param = {};
     param.tuin = uin; //uin
     param.type = 1;

     param.vfwebqq = mq.vfwebqq;
     mq.rpcService.require({
     url:GET_FRIEND_UIN,
     method : "GET",
     param : param,
     withCredentials: true,
     onSuccess : function(data){
     if(data.retcode === 0){
     handlers.onGetFriendUinSuccess(data.result);
     }
     }
     });
     };*/
    this.sendGetFriendInfo = function (uin) {
      var param = {};
      param.tuin = uin
      param.vfwebqq = mq.vfwebqq;
      param.clientid = mq.clientid;
      param.psessionid = mq.psessionid;

      mq.rpcService.require({
        url: GET_FRIEND_INFO_CGI,
        method: "GET",
        param: param,
        withCredentials: true,
        onSuccess: function (data) {
          if (data.retcode === 0) {
            handlers.onGetFriendInfo(data.result);
          }
        }
      });
    };
    //获取好友在线状态
    this.sendGetBuddyOnlineState = function () {
      var param = {};
      param.vfwebqq = mq.vfwebqq;
      param.clientid = mq.clientid;
      param.psessionid = mq.psessionid;

      mq.rpcService.require({
        url: GET_ONLINE_BUDDIES,
        method: "GET",
        param: param,
        withCredentials: true,
        onSuccess: function (data) {
          if (data.retcode === 0) {
            handlers.onGetBuddyOnlineStateSuccess(data.result);
          }
        }
      });
    }


    this.getBuddyInfo = function (uin, type) {
      type = type || 'friend';
      var user;
      if (type == "friend") {
        user = this.getFriendByUin(uin);
        if (!('signature' in user)) {
          this.sendGetSignature(uin);
        }
        if (!user.hasDetailInfo) {
          this.sendGetFriendInfo(uin);
        }
      } else if (type == "group") {
        user = this.getGroupByGid(uin);
        //加载群列表详细信息
        if (!user.hasDetailInfo) {
          this.getGroupInfoList(user.code);
        }
      } else if (type == "discuss") {
        user = this.getDiscussById(uin);
        //加载讨论组列表详细信息
        if (!user.hasDetailInfo) {
          this.getDiscussInfoList(user.did);
        }
      }
      return user;
    }

    //通过uin获取陌生人
    this.getStrangeByUin = function (uin) {
      return uin2stranger[uin];
    };
    //通过uin获取好友
    this.getFriendByUin = function (uin) {
      return uin2Friend[uin];
    };
    //获取所有好友
    this.getFriends = function () {
      return friendsList;
    }
    //通过gid获取群
    this.getGroupByGid = function (gid) {
      return gid2group[gid];
    };
    //根据id返回讨论组
    this.getDiscussById = function (id) {
      return id2discuss[id];
    };
    //根据uin获取好友签名
    this.getSignatureByUin = function (uin) {
      return uin2sig[uin] || 1;
    };
    //获取本人资料
    this.getSelfInfo = function () {
      return selfInfo;
    };

    //添加陌生人
    this.addStrange = function (stranger) {
      if (!uin2stranger[stranger.uin]) {
        uin2stranger[stranger.uin] = stranger;
        strangerList.push(stranger);
      }
      return stranger;
    };

    //添加好友
    this.addFriend = function (friend) {
      if (!uin2Friend[friend.uin]) {
        if (!friend.type) {
          friend.type = "friend";
        }
        uin2Friend[friend.uin] = friend;
        friendsList.push(friend);
      }
      return friend;
    };
    //添加一个群
    this.addGroup = function (group) {
      if (!gid2group[group.gid]) {
        group.type = "group";
        gid2group[group.gid] = group;
        groupList.push(group);
      }
      return group;
    };
    //添加一个讨论组
    this.addDiscuss = function (discuss) {

      if (!id2discuss[discuss.did]) {
        discuss.type = "discuss";
        id2discuss[discuss.did] = discuss;
        discussList.push(discuss);
      }
      return discuss;
    };
    //添加一个签名
    this.addSignature = function (uin, sig) {
      if (!uin2sig[uin]) {
        uin2sig[uin] = sig;
        sigList.push(sig);
      }
      return sig;
    };
    //添加好友分类
    this.addCatagory = function (c) {
      if (!id2category[c.index]) {
        id2category[c.index] = c;
        categoriesList.push(c);
      }
      return c;
    };
    this.getCatagories = function () {
      return categoriesList;
    }
    this.getCatagoryById = function (id) {
      return id2category[id];
    };
    //获取自己的uin
    this.getSelfUin = function () {
      return selfUin;
    };
    //获取自己的信息
    this.sendGetSelfInfo = function () {
      mq.rpcService.require({
        url: GET_SELF_INFO,
        method: "GET",
        withCredentials: true,
        onSuccess: function (data) {
          if (data.retcode == 0) {
            handlers.onGetSelfInfoSuccess(data.result);
          }
        }
      });
    };
    //设置本人个人资料
    this.setSelfInfo = function (info) {
      info.name = info.nick;
      info.avatar = this.getSelfAvatar(selfUin);
      info.isSelf = true;
      selfInfo = info;
      $E.fire(pageContext, 'getFirstSelfInfo', selfInfo);
    };

    //搜索好友
    this.searchFriends = function (keyword) {
      var resultArr = [];
      var list = friendsList.concat(groupList).concat(discussList);
      if (keyword.length > 0) {
        J.each(list, function (f) {

          if (f.name.toUpperCase().indexOf(keyword.toUpperCase()) > -1 || (f.mark && f.mark.toUpperCase().indexOf(keyword.toUpperCase()) > -1)) {
            resultArr.push(f);
          }
        });
      }
      return resultArr;
    };

    this.setAllBuddyState = function (result) {
      onlineBuddy = [];
      for (var i = 0; i < result.length; i++) {
        var buddy = result[i];
        if (buddy.uin == selfUin) {
          continue;
        }
        this.setState(buddy.uin, buddy.status, buddy.client_type);
      }
      //设置好所有好友状态后触发事件
      $E.fire(this, "allBuddyStateChange");
      // pageContext.sendChangeStatus({
      //  newstatus:"busy"
      // });
    }

    this.setState = function (uin, state, clientType) {
      var user = this.getFriendByUin(uin);
      if (user && user.state !== state) {
        user.setState(state);
        $E.fire(this, "buddyStateChange", {
          uin: uin
        });
      }

    }

    //改变自己状态
    this.sendChangeStatus = function (param) {
      param = param || {newstatus: "hidden"};
      param.clientid = mq.clientid;
      param.psessionid = mq.psessionid;

      mq.rpcService.require({
        url: SEND_CHANGE_ONLINE_STATE,
        method: "GET",
        param: param,
        withCredentials: true,
        onSuccess: function (data) {

          mq.rpcService.require({
            url: GET_ONLINE_BUDDIES,
            method: "GET",
            param: param,
            withCredentials: true,
            onSuccess: function (data) {
              if (data.retcode === 0) {
                //handlers.onGetBuddyOnlineStateSuccess(data.result);
              }
            }
          });
        }
      });
    }
    //搜索成员
    // this.searchMembers = function(gid,keyword){
    //     var resultArr = [];
    //     var list =
    //     if(keyword.length > 0){
    //         J.each(list,function(f){
    //             if(f.name.toUpperCase().indexOf(keyword.toUpperCase())>-1){
    //                 resultArr.push(f);
    //             }
    //         });
    //     }
    //     return resultArr;
    // }


  });
})
;
define('mq.presenter.memberlist', [
  "jm"
], function () {
//联系人presenter类
  J.$package("mq.presenter.buddylist", function (J) {
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http;
    var pageContext = this;
    var handlers = {
      //最近联系人列表改变
      onRecentListChange: function (recentList) {
        var m = pageContext.model;
        var selfUin = m.getSelfUin();
        var list = [], item;
        for (var i = 0, r; r = recentList[i]; i++) {
          if (r.uin != selfUin) {
            //0:好友 1:群,2:讨论组
            if (r.type == 0) {
              item = m.getFriendByUin(r.uin);
            } else if (r.type == 1) {
              item = m.getGroupByGid(r.uin);
            } else if (r.type == 2) {
              item = m.getDiscussById(r.uin);
            }
            if (item) {
              list.push(item);
            }
          }
        }
        ;

        pageContext.sessionView.render(list);
      },
      onFriendsListChange: function (categories, friendsList) {
        console.log(friendsList);
        var v = pageContext.contactView;
        console.log(v.memberListAreas['friend']);
        v.memberListAreas['friend'].render({type: 'category', list: categories}, true);
        v.memberListAreas['friend'].renderCateItems(friendsList);


      },
      onGroupListChange: function (groupList) {
        var v = pageContext.contactView;
        v.memberListAreas['group'].render({type: 'list', list: groupList});
      },
      onDiscussListChange: function (discussList) {
        var v = pageContext.contactView;
        v.memberListAreas['discuss'].render({type: 'list', list: discussList});
      },
      onUserSignatureChange: function (friend) {
        // 只重绘好友列表中的个性签名
        pageContext.contactView.memberListAreas['friend'].renderOneSignature(friend.uin, friend.signature);
      },
      onReceiveMessage: function (message) {
        var from = message.send_to || message.from_group || message.from_discuss || message.from_user;

        var notNotify = message.notNotify || mq.presenter.chat.isChating(from);
        pageContext.sessionView.onReceiveMessage(message, notNotify);
      },
      onMemberInVisibleArea: function (uin, type) {
        var buddylistModel = pageContext.model;
        if (type === 'friend') {
          friend = buddylistModel.getFriendByUin(uin);
          // 没有签名，才发请求加载
          if (!friend.signature) {
            buddylistModel.sendGetSignature(uin);
          }
        }
        else if (type === 'group') {
          // TODO: 更新群公告
        }
      },
      onFriendUinUpdate: function (ret) {
        var uinDom = $D.id("friend-uin-" + ret.account);
        console.log(uinDom);
      },
      onBuddyStateChange: function (data) {
        var model = pageContext.model;
        var uin = data.uin;
        var user = model.getFriendByUin(uin);
        pageContext.contactView.memberListAreas['friend'].renderOneState(uin, user.state);
      },
      //更新每个类别的不同状态好友数组
      onAllBuddyStateChange: function () {
        var friends = pageContext.model.getFriends();
        var categories = pageContext.model.getCatagories();
        var friendListArea = pageContext.contactView.memberListAreas['friend'];
        for (var i = 0, len = friends.length; i < len; i++) {
          var f = friends[i];
          var c = pageContext.model.getCatagoryById(f.category);
          c.list[f.state].push(f);
        }

        //更新视图上的好友在线百分比数目
        friendListArea.renderAllOnlineStateCount(categories);
        // 根据好友的在线状态，更新视图上的好友排序
        friendListArea.renderAllCategory(categories);
      }
    };

    this.init = function () {
      this.contactView = mq.view.contact;
      this.sessionView = mq.view.session;
      this.model = mq.model.buddylist;
      this.view = mq.view.buddylist;
      this.bindHandlers();
    };
    this.bindHandlers = function () {
      var m = this.model,
          chatModel = mq.model.chat,
          contactView = this.contactView;

      $E.on(m, "recentListChange", handlers.onRecentListChange);
      $E.on(m, "groupListChange", handlers.onGroupListChange);
      $E.on(m, "discussListChange", handlers.onDiscussListChange);
      $E.on(m, "userSignatureChange", handlers.onUserSignatureChange);
      $E.on(m, "getFriendUinUpdate", handlers.onFriendUinUpdate);
      $E.on(m, "friendsListChange", handlers.onFriendsListChange);
      $E.on(m, "buddyStateChange", handlers.onBuddyStateChange);
      $E.on(m, "allBuddyStateChange", handlers.onAllBuddyStateChange);

      $E.on(chatModel, "messageReceived", handlers.onReceiveMessage);
      $E.on(chatModel, "groupMessageReceived", handlers.onReceiveMessage);
      $E.on(chatModel, "discussMessageReceived", handlers.onReceiveMessage);

      $E.on(contactView, 'memberInVisibleArea', handlers.onMemberInVisibleArea);


    };


  });
})
;
define('mq.model.chat', [
  "./mq.portal"
], function () {
//聊天model类
  J.$package("mq.model.chat", function (J) {
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http,
        $S = JM.string;
    var SEND_MSG_CGI = mq.DYNAMIC_CGI_URL + "channel/send_buddy_msg2";
    //发送群友CGI
    var SEND_SESS_CGI = mq.DYNAMIC_CGI_URL + "channel/send_sess_msg2";
    var SEND_GROUP_MSG_CGI = mq.DYNAMIC_CGI_URL + "channel/send_qun_msg2";
    var SEND_DISCUSS_MSG_CGI = mq.DYNAMIC_CGI_URL + "channel/send_discu_msg2";
    var SEND_GET_SESS_SIGN_CGI = mq.DYNAMIC_CGI_URL + "channel/get_c2cmsg_sig2";


    var packageContext = this;
    //uin为键 消息数组为值保存
    var uin2msgArr = {};
    var gid2g_msgArr = {};
    var did2d_msgArr = {};

    /*
     * 接收文件对象列表,filsList对象包括isFinished
     * 当传输失败或超时为true，然后不处理此session_id的消息
     */
    var filesList = {};
    var finishFilesList = {}; //存储已经处理过的文件状态，防止超时消息提示


    var currentChatValue;

    //用于生成msgid
    var sequence = 0;
    var t = (new Date()).getTime();
    t = (t - t % 1000) / 1000;
    t = t % 10000 * 10000;
    //获取msgId
    var getMsgId = function () {
      sequence++;
      return t + sequence;
    };

    //设置消息
    this.addMessage = function (uin, msg) {
      if (!uin2msgArr[uin]) uin2msgArr[uin] = [];
      uin2msgArr[uin].push(msg);
      //触发消息接收事件
      $E.fire(packageContext, "messageReceived", msg);
      return msg;
    };
    //设置群消息
    this.addGroupMessage = function (gid, msg) {
      if (!gid2g_msgArr[gid]) gid2g_msgArr[gid] = [];
      gid2g_msgArr[gid].push(msg);
      //触发消息接收事件
      $E.fire(packageContext, "groupMessageReceived", msg);
      return msg;
    };
    //设置讨论组消息
    this.addDiscussMessage = function (did, msg) {
      if (!did2d_msgArr[did]) did2d_msgArr[did] = [];
      did2d_msgArr[did].push(msg);
      //触发消息接收事件
      $E.fire(packageContext, "discussMessageReceived", msg);
      return msg;
    };

    // 订阅退订 --暂时只写到session级别
    var tdlistSession = []
    xtApp.use(function subsription(msg) {
      if (msg.content && msg.content.length) {
        var cont = msg.content[1].trim().toLocaleUpperCase()
        if (cont === 'TD') {
          // 退订
          if (tdlistSession.indexOf(msg.from_user.account) === -1) {
            // 去退订
            tdlistSession.push(msg.from_user.account)
            packageContext.sendMsg({
              "to": msg.from_user.account,
              "content": "[\"已退订,回复DJ可重新订阅\",[\"font\",{\"name\":\"宋体\",\"size\":10,\"style\":[0,0,0],\"color\":\"000000\"}]]",
              "face": 110
            })
          } else {
            // 重复的退订请求
            packageContext.sendMsg({
              "to": msg.from_user.account,
              "content": "[\"不要重复发送退订请求!!!\",[\"font\",{\"name\":\"宋体\",\"size\":10,\"style\":[0,0,0],\"color\":\"000000\"}]]",
              "face": 110
            })
          }
          return false
        } else if (cont === 'DJ') {
          // 订阅
          var tempI = tdlistSession.indexOf(msg.from_user.account)
          if (tempI > -1) {
            // 去订阅
            tdlistSession.splice(tempI, 1)
            packageContext.sendMsg({
              "to": msg.from_user.account,
              "content": "[\"订阅成功,回复TD可退订!!!\",[\"font\",{\"name\":\"宋体\",\"size\":10,\"style\":[0,0,0],\"color\":\"000000\"}]]",
              "face": 110 // 无作用
            })
          } else {
            // 重复的订阅请求
            packageContext.sendMsg({
              "to": msg.from_user.account,
              "content": "[\"也不要重复发送订阅请求!!!\",[\"font\",{\"name\":\"宋体\",\"size\":10,\"style\":[0,0,0],\"color\":\"000000\"}]]",
              "face": 110 // 无作用
            })
          }
          return false
        } else {
          return true
        }
      }
    })
    // 是否订阅拦截
    xtApp.use(function isSub(msg) {
      return tdlistSession.indexOf(msg.from_user.account) === -1
    })

    // 首次提醒
    var firstlistSession = []
    xtApp.use(function subsription(msg) {
      if (firstlistSession.indexOf(msg.from_uin) === -1) {
        firstlistSession.push(msg.from_uin)
        packageContext.sendMsg({
          "to": msg.from_user.account,
          "content": "[\"以下为自动回复,回复TD退订\",[\"font\",{\"name\":\"宋体\",\"size\":10,\"style\":[0,0,0],\"color\":\"000000\"}]]",
          "face": 110 // 无作用
        })
      }
      return true
    })

    // 自动回复
    xtApp.use(function reply(msg) {
      var from_user = msg.from_user
      var cont = msg.content.length ? msg.content[1] : '放屁'
      if (from_user && from_user.mark && (from_user.mark.indexOf('robot-test') > -1)) {
        $.getJSON('http://api.qingyunke.com/api.php?key=free&appid=0&msg=' + cont, function (model) {
          packageContext.sendMsg({
            "to": from_user.account,
            "content": "[\"在嗯嗯,"+model.content+" \",[\"font\",{\"name\":\"宋体\",\"size\":10,\"style\":[0,0,0],\"color\":\"000000\"}]]",
            "face": 110 // 无作用
          })
        })
      }
      return true
    })
    //事件处理程序
    var handlers = {
      onPollMessageSuccess: function (pollMsg) {
        var msg = pollMsg.value;
        var from_uin = msg.from_uin;
        var senderMsgObj = null;

        switch (pollMsg.poll_type) {
            //好友，陌生人等消息
          case "sess_message":
          case "message":
            var from_user = packageContext.m_model.getFriendByUin(from_uin);
            if (from_uin === 0) {
              from_uin = packageContext.m_model.getSelfUin();
              from_user = packageContext.m_model.getSelfInfo();
            }
            if (from_user) {
              senderMsgObj = {
                content: msg.content,
                from_uin: from_uin,
                from_user: from_user,
                sender: from_user,
                sender_uin: from_uin,
                time: msg.time ? msg.time * 1000 : +new Date
              };
              packageContext.addMessage(from_uin, senderMsgObj);


              // 开启监听模式
              xtApp.handleMsg(senderMsgObj)


            }
            break;
          case "group_message":
            var from_group = packageContext.m_model.getGroupByGid(from_uin);
            var send_user = packageContext.m_model.getFriendByUin(msg.send_uin);
            if (send_user === undefined) {
              console.log('from uin is undefined');
              return;
            }
            //群聊天展示群昵称
            var from_group_members = from_group.members || [];
            var membersLen = from_group_members.length || 0;
            for (var k = 0; k < membersLen; k++) {
              if (from_group_members[k].uin == send_user.uin) {
                send_user.cardName = from_group_members[k].cardName;
                break;
              }
            }
            // mask == 2 : 完全屏蔽群消息, 就不提示了
            if (from_group && from_group.mask != 2) {
              // if(!from_group.hasDetailInfo){
              //     packageContext.m_model.getGroupInfoList(from_group.code);
              // }
              senderMsgObj = {
                notNotify: !!from_group.mask,// 屏蔽的消息就不提醒了
                content: msg.content,
                from_uin: from_uin,
                from_group: from_group,
                sender_uin: msg.send_uin,
                sender: send_user,
                time: msg.time * 1000
              };
              packageContext.addGroupMessage(from_uin, senderMsgObj);
            }
            break;
          case "discu_message":
            var from_uin = msg.did;
            var from_discuss = packageContext.m_model.getDiscussById(from_uin);
            var send_user = packageContext.m_model.getFriendByUin(msg.send_uin);

            if (from_discuss) {
              // if(!from_discuss.hasDetailInfo){
              //     packageContext.m_model.getDiscussInfoList(from_discuss.did);
              // }
              senderMsgObj = {
                content: msg.content,
                from_uin: from_uin,
                from_discuss: from_discuss,
                sender_uin: msg.send_uin,
                sender: send_user,
                time: msg.time * 1000
              };
              packageContext.addDiscussMessage(from_uin, senderMsgObj);
            }
            break;
          case "filesrv_transfer": // 文件传输信息
            packageContext.receiveTransferMsg(pollMsg.value);
            break;
          case "file_message" : // 文件信道通知
            packageContext.receiveFile(pollMsg.value);
            break;
          case "push_offfile" : //
            packageContext.receiveOffFile(pollMsg.value);
            break;
          case "notify_offfile" : //对方拒绝或成功接收离线文件通知消息
            packageContext.receiveNotifyOffFile(pollMsg.value);
            break;
        }
        senderMsgObj && $E.fire(packageContext, "allMessageReceived", senderMsgObj);
        // mq.debug('receiveChatMessage: ' + JSON.stringify(senderMsgObj));
      }/*,
       onRecentListChange: function(){
       loadCache();
       }*/
    };


    //初始化
    this.init = function () {
      this.m_model = mq.model.buddylist;
      bindHandlers();
    };
    //绑定事件处理
    var bindHandlers = function () {
      $E.on(mq.main, "receiveMessage", handlers.onPollMessageSuccess);
      $E.on(mq.main, "receiveFileMessage", handlers.onPollMessageSuccess);
      // $E.on(mq.model.buddylist, "recentListChange", handlers.onRecentListChange);
    };

    //发送聊天消息
    this.sendMsg = function (param) {

      param.clientid = mq.clientid;
      param.msg_id = getMsgId();
      param.psessionid = mq.psessionid;

      mq.rpcService.require({
        url: SEND_MSG_CGI,
        https: true, // mq.setting.enableHttps, 强制https
        param: param,
        withCredentials: true,
        method: "POST",
        onSuccess: function (data) {

        }
      });
    };
    //获取陌生人会话签名
    this.sendGetSessionSignature = function (param) {

      var paramObj = {
        id: param.group_uin || param.discuss_uin,
        to_uin: param.to_uin,
        clientid: mq.clientid,
        psessionid: mq.psessionid
      };

      if (param.group_uin) {
        paramObj.service_type = 0;
      }
      else if (param.discuss_uin) {
        paramObj.service_type = 1;
      }

      currentServiceType = paramObj.service_type;

      mq.rpcService.require({
        url: SEND_GET_SESS_SIGN_CGI,
        param: paramObj,
        withCredentials: true,
        method: "GET",
        onSuccess: function (data) {
          if (data.retcode == 0) {
            currentChatValue = data.result.value;
          }
        }
      });
    };
    //发送群友（陌生人）聊天消息
    this.sendSessMsg = function (param) {

      param.clientid = mq.clientid;
      param.msg_id = getMsgId();
      param.psessionid = mq.psessionid;
      param.group_sig = currentChatValue;
      param.service_type = currentServiceType;

      mq.rpcService.require({
        url: SEND_SESS_CGI,
        param: param,
        withCredentials: true,
        method: "POST",
        onSuccess: function (data) {

        }
      });
    };
    //发送群聊天消息
    this.sendGroupMsg = function (param) {
      param.clientid = mq.clientid;
      param.msg_id = getMsgId();
      param.psessionid = mq.psessionid;

      mq.rpcService.require({
        url: SEND_GROUP_MSG_CGI,
        https: true, // mq.setting.enableHttps, 强制https
        param: param,
        withCredentials: true,
        method: "POST",
        onSuccess: function (data) {

        }
      });
    };
    //发送讨论组聊天消息
    this.sendDiscussMsg = function (param) {
      param.clientid = mq.clientid;
      param.msg_id = getMsgId();
      param.psessionid = mq.psessionid;

      mq.rpcService.require({
        url: SEND_DISCUSS_MSG_CGI,
        https: true, // mq.setting.enableHttps, 强制https
        param: param,
        withCredentials: true,
        method: "POST",
        onSuccess: function (data) {

        }
      });
    };

    //根据uin获取聊天内容
    this.getMsgByUin = function (uin) {
      return uin2msgArr[uin];
    };

    //根据gid获取群聊天内容
    this.getGroupMsgByGid = function (gid) {
      return gid2g_msgArr[gid];
    };
    //根据did获取讨论组聊天内容
    this.getDiscussMsgByDid = function (did) {
      return did2d_msgArr[did];
    };

    this.getMessages = function (uin, type) {
      type = type || 'friend';
      var msgArr = [];
      if (type == "friend") {
        msgArr = this.getMsgByUin(uin);
      }
      else if (type == "group") {
        msgArr = this.getGroupMsgByGid(uin);
      }
      else if (type == "discuss") {
        msgArr = this.getDiscussMsgByDid(uin);
      }
      return msgArr;
    }

    // 发送文件消息
    this.sendFile = function (data) {

      var content = [["sendfile", data.filename]];

      var attach = {
        type: 'sendfile',
        name: data.filename,
        from_uin: data.to_uin,
        time: (new Date().getTime()),
        isread: true,
        session_id: data.lcid
      };

      var _fileid = data.to_uin + '_' + data.lcid;
      filesList[_fileid] = attach;

      var message = {
        notNotify: true,
        type: 'send_file',
        system: true,
        content: content,
        attach: attach,
        from_uin: packageContext.m_model.getSelfUin(),
        to_uin: data.to_uin
      };

      // model添加消息记录
      packageContext.receiveMessage(message);
    };

    this.receiveTransferMsg = function (message) {

      var fileInfo = message.file_infos[0];
      if (fileInfo.file_name == '') {
        return;
      }
      var content = '';
      var attach = '';
      if (fileInfo.file_status == 51) { //对方下载超时
        content = [["transtimeout", fileInfo.file_name, message.lc_id]];
        attach = {type: 'transtimeout', name: fileInfo.file_name, isread: true};

      } else if (fileInfo.file_status == 50) { //对方下载过程产生错误
        content = [["transerror", fileInfo.file_name, message.lc_id]];
        attach = {type: 'transerror', name: fileInfo.file_name, isread: true};

      } else if (fileInfo.file_status == 53) {//对方下载过程产生错误
        content = [["refusedbyclient", fileInfo.file_name, message.lc_id]];
        attach = {type: 'refusedbyclient', name: fileInfo.file_name, isread: true};

      } else if (fileInfo.file_status == 0) {//本方文件上传到服务器完毕
        content = [["transok", fileInfo.file_name, message.lc_id]];
        attach = {type: 'transok', name: fileInfo.file_name, isread: true};

        if (message.operation == 1) {
          // TODO send complete

        } else if (message.operation == 2) {
          // TODO recieve complete

        }
      } else if (fileInfo.file_status == 10) { // 开始上传
        return false;
      } else {
        return false; // 上传失败
      }
      var _fileid = message.from_uin + '_' + message.lc_id;
      var tmp = filesList[_fileid] || {};  //alert(_fileid);
      if (tmp.isFinished || (typeof(finishFilesList[message.session_id]) !=
          'undefined' && finishFilesList[message.session_id] === true)) {
        return false;
      } else {
        tmp.isFinished = true;//已经处理完
      }

      var msg = {
        type: 'file_message',
        system: true,
        to_uin: message.to_uin,
        from_uin: message.from_uin,
        content: content,
        attach: attach
      };
      this.receiveMessage(msg);


    };

    this.receiveMessage = function (msg) {
      var from_uin = msg.from_uin,
          from_user,
          to_uin = msg.to_uin,
          to_user,
          selfUin = this.m_model.getSelfUin();
      if (!from_uin || from_uin == selfUin) { // 是自己发的消息
        from_user = this.m_model.getSelfInfo();
      } else {
        from_user = this.m_model.getFriendByUin(from_uin);
      }
      if (to_uin == selfUin) {
        to_user = this.m_model.getSelfInfo();
      } else {
        to_user = this.m_model.getFriendByUin(to_uin);
      }

      if (from_user) {
        var senderMsgObj = {
          from_uin: from_uin,
          from_user: from_user,
          sender_uin: from_uin,
          sender: from_user,
          to_uin: to_uin,
          to_user: to_user,
          time: msg.time ? msg.time * 1000 : +new Date
        };
        if (from_user.isSelf) {
          senderMsgObj.send_to = to_user;
        }
        senderMsgObj = J.extend(msg, senderMsgObj);
        this.addMessage(from_uin, senderMsgObj);
      }
    };

    //获取接受文件消息
    this.receiveFile = function (msg) {

      //封装成标准消息格式
      //对方给你发送文件
      if (msg.mode === 'recv') {
        var content = [["rfile", msg.name, msg.session_id]];
        msg.content = content;
        msg.attach = {
          type: 'rfile',
          name: msg.name,
          from_uin: msg.from_uin,
          time: msg.time,
          isread: false,
          session_id: msg.session_id,
          msg_type: msg.msg_type
        };
        var _fileid = msg.from_uin + '_' + msg.session_id;
        if (!filesList[_fileid]) {
          filesList[_fileid] = msg.attach;
          msg.type = 'receive_file';
          msg.system = true;
          this.receiveMessage(msg);
        } else {
          filesList[_fileid] = msg.attach;
        }

        //对方主动拒绝（1.拒绝 2.取消(取消只有客户端有)）
        //也有可能是超时了或者产生其他错误
      } else if (msg.mode === 'refuse') {

        if (msg.type === 161) { //视频消息，
          return;
        }

        /*
         由于上次文件的LCID和拒绝获取的session_id不一致，必须去session_id的后12转换比较
         */
        if (msg.cancel_type == 2) {
          finishFilesList[msg.session_id] = true;
          var _tmp = parseInt(msg.session_id, 10).toString(2);
          if (_tmp.length >= 12) {
            _tmp = _tmp.substr(_tmp.length - 12, 12);
            msg.session_id = parseInt(_tmp, 2).toString(10);
          }
        }
        var _fileid = msg.from_uin + '_' + msg.session_id;//alert(_fileid);
        var attach = filesList[_fileid];
        if (typeof(attach) == 'undefined')//失效
          return false;
        if (attach.isFinished) {
          return false;
        } else {
          filesList[_fileid].isFinished = true;//已经处理完
        }
        var content = [["rffile", attach.name]];
        attach.type = 'rffile';
        //if( msg.cancel_type == 1 )  //web2c,客户端取消
        if (msg.cancel_type == 2) { //web2web接,收方取消
          content = [["wrffile", attach.name]];
          attach.type = 'wrffile';
        } else if (msg.cancel_type == 3) {//超时
          content = [["rtfile", attach.name]];
          attach.type = 'rtfile';
        }
        msg.content = content;
        msg.attach = attach;

        msg.type = 'refuse_file';
        msg.system = true;
        this.receiveMessage(msg);
        // if( msg.cancel_type != 2 ){ //不是web取消
        //      $E.notifyObservers(this, "fromCancenFile", _fileid);
        //  }

        //对方同意接收本方的文件
      } else if (msg.mode === 'send_ack') {
        var _tmp = parseInt(msg.session_id, 10).toString(2);
        if (_tmp.length < 12)
          return false;
        _tmp = _tmp.substr(_tmp.length - 12, 12);
        msg.session_id = parseInt(_tmp, 2).toString(10);

        var _fileid = msg.from_uin + '_' + msg.session_id;
        var attach = filesList[_fileid];
        var content = [["wrfile", attach.name, attach.session_id]];
        msg.content = content;
        msg.attach = {
          type: 'wrfile',
          name: attach.name,
          from_uin: attach.from_uin,
          time: msg.time,
          session_id: msg.session_id
        };

        msg.type = 'accept_file';
        msg.system = true;
        this.receiveMessage(msg);
      } else if (msg.type === 161) { //视频消息
//               var content = [["video",'好友发起了视频或音频会话邀请，由于Q+ Web目前暂不支持该功能，已自动拒绝好友的邀请。']];
//               msg.content = content;
//               msg.attach = {type:'video'};
//                // 正常提示消息
//               this.fileMsgToJumpUserList(msg);
//               this.receiveMsg(msg);

      } else {
        // alert('未知文件消息');
      }
    };

    this.getFilesList = function () {
      return filesList;
    };

    this.receiveOffFile = function (msg) {
      var fileId = msg.from_uin + '_' + msg.msg_id;
      var content = [["offfile", '对方给你发送离线文件。']];
      msg.msg_type = 9;
      msg.content = content;
      msg.attach = msg;
      msg.attach.type = 'offfile';

      msg.attach.fileid = fileId;
      filesList[fileId] = msg.attach;

      msg.type = 'offfile';
      msg.system = true;
      this.receiveMessage(msg);
    }

    //对方对离线文件处理消息.msg.action:1=接收完成，2=拒绝接收
    this.receiveNotifyOffFile = function (data) {
      var txt = '';
      var type = '';
      if (data.action == 1) {
        txt = '对方已成功接收了您发送的离线文件"' + data.filename + '"。';
        type = 'notifyagreeofffile';
      } else {
        txt = '对方拒绝接收您发送的离线文件"' + data.filename + '"。';
        type = 'notifyrefuseofffile';
      }

      var content = [[type, txt]];
      var attach = {type: type, name: data.filename, from_uin: data.from_uin, time: (new Date().getTime())};
      var msg = {
        type: type,
        from_uin: 0,
        to: data.from_uin,
        content: content,
        attach: attach
      };

      msg.system = true;
      this.receiveMessage(msg);
    };

    this.agreeReceiveFile = function (attach) {
      var content = [["agfile", attach.name, attach.session_id]];
      attach.type = 'agfile';
      var msg = {
        from_uin: 0,
        to_uin: attach.from_uin,
        content: content,
        attach: attach
      };
      msg.system = true;
      this.receiveMessage(msg);
    }

    this.refuseReceiveFile = function (attach) {
      var content = [["rffile", attach.name, attach.session_id]];
      attach.type = 'rffile';
      var msg = {
        from_uin: 0,
        to_uin: attach.from_uin,
        content: content,
        attach: attach
      };
      msg.system = true;
      this.receiveMessage(msg);

      var fileId = attach.from_uin + '_' + attach.session_id;
      filesList[fileId].isFinished = true;//已经处理完

      mq.rpcService.sendRefuseFile({
        to: attach.from_uin,
        lcid: attach.session_id
      });
    }

    this.refuseOfflineFile = function (opt) {

      var param = {
        to: opt.from_uin,
        file_name: opt.name,
        file_size: opt.size,
        action: 2
      };

      mq.rpcService.sendRefuseOfflineFile(param);

      //添加拒绝消息消息
      var content = [['refuseofffile', '您拒绝接收“' + opt.name + '”，文件传输失败。']];
      var attach = {
        type: 'refuseofffile',
        name: opt.name,
        from_uin: opt.from_uin,
        time: (+new Date())
      };
      var msg = {
        type: 'single',
        from_uin: 0,
        to: opt.from_uin,
        content: content,
        attach: attach
      };

      msg.system = true;
      this.receiveMessage(msg);
    }

    this.nextOfflineFile = function (opt) {
      //添加拒绝消息消息 "del.png"
      var content = [['nextofffile', '您取消了离线文件"' + opt.name + '"的接收，我们将在您下次登录后进行提醒。']];
      var attach = {
        type: 'nextofffile',
        name: opt.name,
        from_uin: opt.from_uin,
        time: (new Date().getTime())
      };
      var msg = {
        type: 'single',
        from_uin: 0,
        to: opt.from_uin,
        content: content,
        attach: attach
      };

      msg.system = true;
      this.receiveMessage(msg);
    }

  });
});


define('tmpl!../tmpl/tmpl_chat_footer.html', [], function () {
  return function (obj) {
    var __t, __p = '', __j = Array.prototype.join, print = function () {
      __p += __j.call(arguments, '');
    };
    with (obj || {}) {
      __p += '<div class="chat_toolbar">\r\n<!--     <div id="add_app_btn" class="btn btn_add_grey">\r\n        <span class="btn_img"></span>\r\n    </div> -->\r\n    <div id="add_face_btn" class="btn btn_face" >\r\n        <span class="btn_img"></span>\r\n    </div>\r\n    <textarea id="chat_textarea" class="input input_white chat_textarea"></textarea>\r\n    <button id="send_chat_btn" class="btn btn_small btn_blue" cmd="sendMsg">\r\n        <span class="btn_text">' +
          ((__t = ($M('send'))) == null ? '' : __t) +
          '</span>\r\n    </button>\r\n</div>\r\n<div id="face_images" class="qq_face_area" style="display:none;">\r\n    <ul class="wrap">\r\n        ';
      for (var i = 1; i < 7; i++) {
        __p += '\r\n        <li class="faceIteam faceIteam' +
            ((__t = (i)) == null ? '' : __t) +
            '" cmd="chooseFace">\r\n            ';
        for (var j = 20 * (i - 1); j < 20 * i; j++) {
          __p += '\r\n        <i title="' +
              ((__t = ($F(j))) == null ? '' : __t) +
              '" href="javascript:;"></i>\r\n            ';
        }
        __p += '\r\n            <i title="delKey" href="javascript:;"></i>\r\n        </li>\r\n        ';
      }
      __p += '\r\n    </ul>\r\n    <ul class="btnsWrap"></ul>\r\n</div>\r\n<!-- <div id="qq_app_area" class="qq_app_area" style="display: none;">\r\n    <ul></ul>\r\n</div> -->\r\n<iframe id="panel_uploadFilIframe" name="panel_uploadFilIframe" style="display:none"></iframe>\r\n';
    }
    return __p;
  };
});


define('tmpl!../tmpl/tmpl_chat_list.html', [], function () {
  return function (obj) {
    var __t, __p = '', __j = Array.prototype.join, print = function () {
      __p += __j.call(arguments, '');
    };
    with (obj || {}) {
      __p += '';
      for (var i = 0, item; item = list[i]; i++) {
        var sender = item.sender;
        if (!item.htmlContent) {
          continue;
        }

        __p += '\r\n    ';
        if (lastMessage && isNearTime(lastMessage.time, item.time)) {
          __p += '\r\n    ';
        } else {
          lastMessage = item;

          __p += '\r\n<div class="chat_time"><span>' +
              ((__t = (formatChatTime(item.time))) == null ? '' : __t) +
              '</span></div>\r\n    ';
        }
        __p += '\r\n\r\n<div class="chat_content_group ' +
            ((__t = (item.sender_uin == selfUin ? 'self' : 'buddy' )) == null ? '' : __t) +
            ' ' +
            ((__t = (sender ? '' : 'need_update')) == null ? '' : __t) +
            ' ' +
            ((__t = (item.system ? 'system' : '' )) == null ? '' : __t) +
            '" _sender_uin="' +
            ((__t = (item.sender_uin)) == null ? '' : __t) +
            '">\r\n    ';
        if (!item.system) {
          __p += '\r\n    <img class="chat_content_avatar" src="' +
              ((__t = (sender ? sender.avatar : '')) == null ? '' : __t) +
              '" width="40px" height="40px" onerror="javascript:this.src=\'//p.qpic.cn/qqstory_pic/Q3auHgzwzM6cKtDbXYoDPPiadPGhwqWFHoWAesSD3ZJiceM5qUOmyqjFyhXh0icFVsGWEjVJRatg90/\'">\r\n    ';
          if (item.from_group && sender && sender.cardName) {
            __p += '\r\n        <p class="chat_nick">' +
                ((__t = (html(sender.cardName + ''))) == null ? '' : __t) +
                '</p>\r\n    ';
          } else {
            __p += '\r\n        <p class="chat_nick">' +
                ((__t = (html((sender ? sender.name : item.sender_uin) + ''))) == null ? '' : __t) +
                '</p>\r\n    ';
          }
          __p += '\r\n    ';
        }
        __p += '\r\n    <p class="chat_content ">' +
            ((__t = (translate(item.htmlContent))) == null ? '' : __t) +
            '</p>\r\n</div>\r\n\r\n';
      }
      __p += '\r\n';
    }
    return __p;
  };
});


define('tmpl!../tmpl/tmpl_chat_tools.html', [], function () {
  return function (obj) {
    var __t, __p = '', __j = Array.prototype.join, print = function () {
      __p += __j.call(arguments, '');
    };
    with (obj || {}) {
      __p += '\r\n<iframe id="panel_uploadFilIframe_' +
          ((__t = (friendUin )) == null ? '' : __t) +
          '" name="panel_uploadFilIframe_' +
          ((__t = (friendUin )) == null ? '' : __t) +
          '" style="display:none" src="http://web2.qq.com/domain.html"></iframe>\r\n<form id="panel_uploadFile_' +
          ((__t = (friendUin )) == null ? '' : __t) +
          '" name="panel_uploadFile_' +
          ((__t = (friendUin )) == null ? '' : __t) +
          '"  title="发送文件..." class="panelSendForm" target="panel_uploadFilIframe_' +
          ((__t = (friendUin )) == null ? '' : __t) +
          '" action="" method="POST" enctype="multipart/form-data">\r\n   <a href="javascript:void(0)" id="panel_fileButton_' +
          ((__t = (friendUin )) == null ? '' : __t) +
          '" hidefocus="true" class="simpleMenuItem panel_sendFileButton" title="发送文件...">\r\n        <input id="upload_file_' +
          ((__t = (friendUin )) == null ? '' : __t) +
          '" class="f" name="file" type="file" >\r\n   </a>\r\n</form>';
    }
    return __p;
  };
});


define('tmpl!../tmpl/tmpl_chat_sendfile.html', [], function () {
  return function (obj) {
    var __t, __p = '', __j = Array.prototype.join, print = function () {
      __p += __j.call(arguments, '');
    };
    with (obj || {}) {
      __p += '<form id="panel_uploadFile_' +
          ((__t = (id)) == null ? '' : __t) +
          '" name="panel_uploadFile" title="' +
          ((__t = (title )) == null ? '' : __t) +
          '" class="panelSendForm" target="panel_uploadFilIframe" action="" method="POST" enctype="multipart/form-data">\r\n    <a href="#" hidefocus="true" class="panel_sendFileButton" title="' +
          ((__t = (title )) == null ? '' : __t) +
          '">\r\n        <input id="upload_file_' +
          ((__t = (id)) == null ? '' : __t) +
          '" class="file_input" name="file" type="file">\r\n    </a>\r\n</form>';
    }
    return __p;
  };
});

define('mq.view.chat', [
  'tmpl!../tmpl/tmpl_chat_footer.html',
  'tmpl!../tmpl/tmpl_chat_list.html',
  'tmpl!../tmpl/tmpl_chat_tools.html',
  'tmpl!../tmpl/tmpl_chat_sendfile.html',
  "./mq.i18n",
  "./mq.view.transitionmanager"

], function (tmplChatFooter, tmplChatList, tmplChatTools, tmplSendFile) {
//聊天view类
  J.$package("mq.view.chat", function (J) {
    var packageContext = this;
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http,
        $S = JM.string,
        $type = JM.type;

    var $M = mq.i18n.message,
        $T = mq.templateManager;
    $F = mq.i18n.faceText;

    var currentChatUser = null,
        lastMessage = null;

    var tempFlag = false,
        chatTextarea,
        sendFileForm,
        sendFileInput,
        face_images,
        sc;


    var menuConfig = {
      group: [
        {
          text: $M("group_member"),
          cmd: "viewMembers"
        },
        {
          text: $M("group_profile"),
          cmd: "viewInfo"
        },
        {
          text: $M("record"),
          cmd: "viewRecord"
        }
      ],
      discuss: [
        {
          text: $M("discuss_member"),
          cmd: "viewMembers"
        },
        {
          text: $M("discuss_profile"),
          cmd: "viewInfo"
        },
        {
          text: $M("record"),
          cmd: "viewRecord"
        }
      ],
      friend: [
        {
          text: $M("qzone"),
          cmd: "viewQzone"
        },
        {
          text: $M("profile"),
          cmd: "viewInfo"
        },
        {
          text: $M("record"),
          cmd: "viewRecord"
        }
        // {
        //     text:"发送图片",
        //     cmd:"sendPicture",
        //     append: null
        // },
        // {
        //     cmd:"sendFile",
        //     text: '发送文件' + tmplSendFile({title: '发送文件...', id: 'sendFile'})
        // }
      ]
    }

    this.createPanel = function () {
      if (!this.panel) {

        var optoin = {
          parent: mq.view.main.container,
          className: 'chat-panel',
          leftButton: {
            className: 'btn_setting',
            text: ""
          },
          rightButton: {
            className: 'btn_setting',
            text: $M('close')
          },
          body: {
            className: 'chat_container'
          },
          footer: {
            className: 'chat_toolbar_footer',
            html: tmplChatFooter({$F: $F, $M: $M})
          }
        };


        this.panel = new mq.view.TitlePanel(optoin);
        this.scroll = new iScroll(this.panel.bodyWrapper);
        //聊天图片懒加载
        this.lazyload = MUI.I_LazyLoadImgs({
          scrollObj: this.scroll,
          isFade: true
        });
        //聊天自伸缩输入框
        chatTextarea = this.chatTextarea = MUI.AutoGrowTextarea({
          id: "chat_textarea",
          maxHeight: 80,
          initHeight: 32
        });

        bindHandlers();

      }

      return this.panel;
    }

    this.setPannelMenu = function () {
      var menuOpt = menuConfig[currentChatUser.type];

      menuOpt && this.panel.setMenuItems(menuOpt);

      sendFileInput = $D.id('upload_file_sendFile');
      sendFileForm = $D.id('panel_uploadFile_sendFile');

      if (sendFileInput) {
        $E.on(sendFileInput, 'change', this.uploadSendFile);
      }
    }

    this.init = function () {
      this.main_view = mq.main;
      this.model = mq.model.chat;
      this.m_model = mq.model.buddylist;
      this.presenter = mq.presenter.chat;
    };

    var commands = {
      sendMsg: function () {
        var text_content = chatTextarea.getContent();
        if (text_content == "") return;
        chatTextarea.setContent("");
        chatTextarea.reset();
        $E.fire(packageContext, 'sendMessage', {
          textContent: text_content
        });

        //packageContext.scroll.scrollTo(0, packageContext.scroll.maxScrollY, 0);
      },
      clickLeftButton: function () {


        packageContext.panel.toggleMenuList();

        //$E.fire(mq.view, 'viewProfile', data);
      },
      clickRightButton: function (param, target, e) {
        currentChatUser = null;
        mq.view.transitionManager.pop('chat');
        $E.fire(packageContext, 'close');
        // packageContext.panel.hide();
      },
      chooseFace: function (param, target, e) {
        $E.fire(packageContext, 'chooseFace', e);
      },
      viewQzone: function () {
        if (currentChatUser.ruin) {
          window.open("https://user.qzone.qq.com/" + currentChatUser.ruin, "_blank");
          packageContext.panel.toggleMenuList();
        }

      },
      viewInfo: function () {
        var data = {
          from: currentChatUser.name,
          account: currentChatUser.account,
          type: currentChatUser.type
        };
        $E.fire(mq.view, 'viewProfile', data);
        packageContext.panel.toggleMenuList();
      },
      viewRecord: function () {
        $E.fire(mq.view, 'viewRecord', {
          user: currentChatUser
        });
        packageContext.panel.toggleMenuList();
      },
      viewMembers: function () {
        var evtName = currentChatUser.type == "group" ? "viewGroupMember" : "viewDiscussMember";
        var param = {};
        param[currentChatUser.type] = currentChatUser;

        $E.fire(mq.view, evtName, param);
        packageContext.panel.toggleMenuList();
      },
      sendPicture: function () {
        packageContext.panel.hideMenuList();
      },
      sendFile: function () {

        packageContext.panel.hideMenuList();
      },
      agreeFile: function (param, target, e) {
        var fileId = target.getAttribute('_fileid');
        $E.fire(packageContext, 'agreeReceiveFile', fileId);
      },
      refuseFile: function (param, target, e) {
        var fileId = target.getAttribute('_fileid');
        $E.fire(packageContext, 'refuseReceiveFile', fileId);
      },
      agreeOfflineFile: function (param, target, e) {
        var fileId = target.getAttribute('_fileid');
        $E.fire(packageContext, 'agreeOfflineFile', fileId);
      },
      nextOfflineFile: function (param, target, e) { // 下次接收
        var fileId = target.getAttribute('_fileid');
        $E.fire(packageContext, 'nextOfflineFile', fileId);
      },
      refuseOfflineFile: function (param, target, e) {
        var fileId = target.getAttribute('_fileid');
        $E.fire(packageContext, 'refuseOfflineFile', fileId);
      }
    };

    var handlers = {
      onTextAreaHeightChange: function (height) {
        var footerHeight = $D.getStyle(packageContext.panel.footer, 'height');
        $D.setStyle(packageContext.panel.bodyWrapper, 'bottom', footerHeight);
        packageContext.scroll.refresh();
      },
      onClickFace: function () {
        face_images = $D.id('face_images');
        if (face_images.style.display == "none") {
          face_images.style.display = "block";
          //增加高度
          $D.addClass(packageContext.panel.bodyWrapper, 'panelShowFace');
          packageContext.scroll.refresh();
          packageContext.scroll.scrollTo(0, packageContext.scroll.maxScrollY, 0);
          if (!tempFlag) {
            tempFlag = true;
            sc = MUI.ImageChange({
              id: "face_images",
              canSwipe: true
            });
          }
          else {
            sc && sc.refresh();
          }
        } else {
          face_images.style.display = "none";
          //fix 输入框换行情况
          var footerHeight = $D.getStyle(packageContext.panel.footer, 'height');
          $D.setStyle(packageContext.panel.bodyWrapper, 'bottom', footerHeight);
          $D.removeClass(packageContext.panel.bodyWrapper, 'panelShowFace');
          packageContext.scroll.refresh();
        }
      },
      onTextKeydown: function (e) {
        var text_content = chatTextarea.getContent();
        var useEnter = function () {
          if (e.ctrlKey && e.keyCode == 13) {
            e.preventDefault();
            chatTextarea.setContent(text_content + '\n');
            return false;
          }
          if (e.keyCode == 13) {
            e.preventDefault();
            if (text_content != "") {
              commands.sendMsg();
              return false;
            }
          }
        };
        if (J.platform.touchDevice) {
          useEnter();

        } else {
          if (!mq.setting.enableCtrlEnter) {
            useEnter();
          } else {
            //启用ctrl+Enter发送消息
            if (e.ctrlKey && e.keyCode == 13) {
              e.preventDefault();
              if (text_content != "") {
                commands.sendMsg();
              }
              return false;
            }
            if (e.keyCode == 13) {
              e.preventDefault();
              chatTextarea.setContent(text_content + '\n');
              return false;
            }
          }
        }
      },
      onLoadImgOver: function () {
        //自定义图片加载完毕更新界面
        packageContext.scroll.refresh();
      }

    };

    var bindHandlers = function () {
      $E.bindCommands(packageContext.panel.container, commands);
      $E.on(chatTextarea, 'heightChange', handlers.onTextAreaHeightChange);
      $E.on(chatTextarea, 'keydown', handlers.onTextKeydown);
      $E.on($D.id('add_face_btn'), J.platform.touchDevice ? 'tap' : 'click', handlers.onClickFace);
      $E.on(packageContext.lazyload, 'loadImgOver', handlers.onLoadImgOver);
    };

    var setChatTitle = function (title) {
      packageContext.panel.setTitle(title);
    }

    var clearChatArea = function () {
      packageContext.panel.body.innerHTML = '';
    }

    var translateContent = function (msg) {
      return msg.replace(/\n\r|\r\n|\r|\n/g, '<br/>');
    }

    var isNearTime = function (a, b) {
      return Math.abs(a - b) < 120000;
    }

    var formatChatTime = function (time) {
      time = new Date(time);
      var current = new Date();
      if (time.getFullYear() === current.getFullYear() &&
          time.getMonth() === current.getMonth() &&
          time.getDate() === current.getDate()) {
        return J.format.date(time, 'hh:mm');
      } else {
        return J.format.date(time, 'YYYY-MM-DD hh:mm');
      }

    }

    this.startChat = function (user) {
      if (!user) {
        return;
      }
      this.createPanel();

      if (face_images && face_images.style.display == "block") {
        face_images.style.display = "none";
        chatTextarea.setContent('');
        $D.removeClass(packageContext.panel.bodyWrapper, 'panelShowFace');
        packageContext.scroll.refresh();
      }
      var isSame = currentChatUser && currentChatUser.type === user.type && currentChatUser.account === user.account;
      if (!isSame) {
        currentChatUser = user;
        lastMessage = null;
        setChatTitle(user.name);
        clearChatArea();
        chatTextarea.setContent('');
        packageContext.scroll.refresh();
        packageContext.presenter.initChatMessage(user);
      }

      this.setPannelMenu();

      mq.view.transitionManager.push({
        id: 'chat',
        element: this.panel.container,
        callback: function () {
          packageContext.scroll.refresh();
          chatTextarea.reset();
          //聊天窗口滚到底部
          packageContext.scroll.scrollTo(0, packageContext.scroll.maxScrollY, 0);
        }
      });
      if (!J.platform.touchDevice) {
        setTimeout(function () {
          //自动聚焦
          chatTextarea.elem.focus();
        }, 200);
      }
      $E.fire(packageContext, 'startChat', user);

    }

    /**
     * 将一条消息添加到聊天窗口
     * @param  {[type]} msgArr [description]
     * @return {[type]}        [description]
     */
    this.appendMessage = function (msgArr) {
      var tmpl = tmplChatList;
      // msgArr = this.translateMessages(msgArr);
      var html = tmpl({
        selfUin: this.m_model.getSelfUin(),
        list: msgArr,
        html: $S.encodeHtml,
        translate: translateContent,
        lastMessage: lastMessage,
        isNearTime: isNearTime,
        formatChatTime: formatChatTime
      });
      lastMessage = msgArr[msgArr.length - 1];
      this.panel.body.innerHTML += html;

      this.scroll.refresh();
      //聊天窗口滚到底部
      this.scroll.scrollTo(0, this.scroll.maxScrollY, 0);

      if (!J.platform.touchDevice && chatTextarea.elem) {
        chatTextarea.elem.focus();
      }
    }

    /**
     * 更新群聊天或者讨论组的非好友头像和昵称,这些信息一开始是没拉取到的
     * @param  {[type]} info [description]
     * @return {[type]}      [description]
     */
    this.updateBuddyInfo = function (info) {
      var avatar, nick;
      var list = this.panel.body.querySelectorAll('div[_sender_uin="' + info.account + '"]');
      if (list.length) {
        for (var i = 0, dom; dom = list[i]; i++) {
          avatar = dom.querySelector('.chat_content_avatar');
          avatar && (avatar.src = info.avatar);
          nick = dom.querySelector('.chat_nick');
          nick && (nick.innerHTML = $S.encodeHtml(info.name));
          dom.removeAttribute('_sender_uin');
        }
      }
    }

    this.getFileSize = function (obj) {
      var image = new Image(); // 必须这样不能用document.createElement
      var filePath = obj.value;
      var fileSize = 0;
      try {
        image.dynsrc = filePath;
      }
      catch (e) {
        return 0;
      }
      try {
        fileSize = image.fileSize || 0;
      }
      catch (e) {
      }
      if (fileSize == 0) {
        try {
          fileSize = obj.files[0].fileSize;
        }
        catch (e) {
        }
      }
      ;
      return fileSize;
    };

    // 发送文件
    this.uploadSendFile = function (e) {
      var fileName = "";
      fileName = sendFileInput.value;
      if (fileName == '') {
        alert('请选择文件!');
        return;
      }

      var maxUploadSize = 10;
      if (packageContext.getFileSize(sendFileInput) > maxUploadSize * 1024 * 1024) {
        alert('文件大小超出' + maxUploadSize + 'M限制!');
        sendFileForm.reset();
        return;
      }

      var samp = ((new Date().getTime()) % 4096);
      sendFileForm.action = mq.FILE_SERVER + 'v2/' + mq.model.buddylist.getSelfUin() +
          '/' + currentChatUser.account + '/' + samp + '/' + mq.index + '/' + mq.port +
          '/1/f/1/0/0?psessionid=' + mq.psessionid;

      sendFileForm.submit();

      sendFileForm.reset(); // 这个解决了IE下总是执行两次的问题

      $E.fire(packageContext, "sendFile", {filename: fileName, to_uin: currentChatUser.account, lcid: samp});

    };

    // 移除接受文件按钮链接样式
    this.removeReceiveFileLink = function (fileid) {
      var arr = [];
      var dom = $D.id('agree_' + fileid);
      dom && arr.push(dom);

      dom = $D.id('refuse_' + fileid);
      dom && arr.push(dom);

      dom = $D.id('next_' + fileid);
      dom && arr.push(dom);

      for (var i = 0; dom = arr[i]; i++) {
        dom.style.color = "gray";
        dom.style.cursor = "default";
        dom.removeAttribute('cmd');
      }

    };

    //接收文件
    this.receiveFile = function (attach) {
      var fileUrl = mq.DYNAMIC_CGI_URL + 'channel/get_file2?lcid=' +
          attach.session_id + '&guid=' + attach.name + '&to=' +
          attach.from_uin + '&psessionid=' + mq.psessionid +
          '&count=1&time=' + (+new Date) + '&clientid=' + mq.clientid;

      mq.util.download(fileUrl);

    };

    this.receiveOfflineFile = function (attach) {
      var fileUrl = 'https://' + attach.ip + ':' + attach.port + '/' +
          attach.name + '?ver=2173&rkey=' + attach.rkey + '&range=0';

      mq.util.download(fileUrl);
    }
  });
});


define('mq.presenter.chat', [
  './mq.i18n'
], function () {
  //联系人presenter类
  J.$package("mq.presenter.chat", function (J) {
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http,
        $S = J.string,
        $M = mq.i18n.message,
        $F = mq.i18n.faceText,
        $FI = mq.i18n.getFaceIndex;

    var packageContext = this;
    //当前聊天对象uin
    var currentChatUin;
    //当前聊天对象类型
    var currentChatType,
        selfUin,
        faceTextMatchID;
    var contentTextArr = [],
        isFaceTextArr = [];


    var CDN_FACE = 'http://pub.idqqimg.com/lib/qqface/';
    var GET_OFFPIC_URL = 'https://w.qq.com/d/channel/get_offpic2';

    // 表情文本最大值

    var FACE_TEXT_MAX_NUM = 20;
    //表情映射表
    var FACE_MAP = [
      14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
      0, 15, 16, 96, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
      28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 97, 98,
      99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
      89, 113, 114, 115, 60, 61, 46, 63, 64, 116, 66, 67, 53, 54,
      55, 56, 57, 117, 59, 75, 74, 69, 49, 76, 77, 78, 79, 118,
      119, 120, 121, 122, 123, 124, 42, 85, 43, 41, 86, 125, 126, 127,
      128, 129, 130, 131, 132, 133, 134, 136, 137, 138, 139, 140, 141, 142,
      143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156,
      157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170
    ];
    var FACE_WEBQQ_MAP = [
      14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
      0, 50, 51, 96, 53, 54, 73, 74, 75, 76, 77, 78, 55, 56,
      57, 58, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 97, 98,
      99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
      32, 113, 114, 115, 63, 64, 59, 33, 34, 116, 36, 37, 38, 91,
      92, 93, 29, 117, 72, 45, 42, 39, 62, 46, 47, 71, 95, 118,
      119, 120, 121, 122, 123, 124, 27, 21, 23, 25, 26, 125, 126, 127,
      128, 129, 130, 131, 132, 133, 134, 136, 137, 138, 139, 140, 141, 142,
      143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156,
      157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170

    ];
    //发送表情,由FACE_WEBQQ_MAP转换ID
    var FACE_TEXT_MAP = {
      "微笑": 14,
      "撇嘴": 1,
      "色": 2,
      "发呆": 3,
      "得意": 4,
      "流泪": 5,
      "害羞": 6,
      "闭嘴": 7,
      "睡": 8,
      "大哭": 9,
      "尴尬": 10,
      "发怒": 11,
      "调皮": 12,
      "呲牙": 13,
      "惊讶": 0,
      "难过": 50,
      "酷": 51,
      "冷汗": 96,
      "抓狂": 53,
      "吐": 54,
      "偷笑": 73,
      "可爱": 74,
      "白眼": 75,
      "傲慢": 76,
      "饥饿": 77,
      "困": 78,
      "惊恐": 55,
      "流汗": 56,
      "憨笑": 57,
      "大兵": 58,
      "奋斗": 79,
      "咒骂": 80,
      "疑问": 81,
      "嘘": 82,
      "晕": 83,
      "折磨": 84,
      "衰": 85,
      "骷髅": 86,
      "敲打": 87,
      "再见": 88,
      "擦汗": 97,
      "抠鼻": 98,
      "鼓掌": 99,
      "糗大了": 100,
      "坏笑": 101,
      "左哼哼": 102,
      "右哼哼": 103,
      "哈欠": 104,
      "鄙视": 105,
      "委屈": 106,
      "快哭了": 107,
      "阴险": 108,
      "亲亲": 109,
      "吓": 110,
      "可怜": 111,
      "菜刀": 112,
      "西瓜": 32,
      "啤酒": 113,
      "篮球": 114,
      "乒乓": 115,
      "咖啡": 63,
      "饭": 64,
      "猪头": 59,
      "玫瑰": 33,
      "凋谢": 34,
      "示爱": 116,
      "爱心": 36,
      "心碎": 37,
      "蛋糕": 38,
      "闪电": 91,
      "炸弹": 92,
      "刀": 93,
      "足球": 29,
      "瓢虫": 117,
      "便便": 72,
      "月亮": 45,
      "太阳": 42,
      "礼物": 39,
      "拥抱": 62,
      "强": 46,
      "弱": 47,
      "握手": 71,
      "胜利": 95,
      "抱拳": 118,
      "勾引": 119,
      "拳头": 120,
      "差劲": 121,
      "爱你": 122,
      "NO": 123,
      "OK": 124,
      "爱情": 27,
      "飞吻": 21,
      "跳跳": 23,
      "发抖": 25,
      "怄火": 26,
      "转圈": 125,
      "磕头": 126,
      "回头": 127,
      "跳绳": 128,
      "挥手": 129,
      "激动": 130,
      "街舞": 131,
      "献吻": 132,
      "左太极": 133,
      "右太极": 134,
      "双喜": 136,
      "鞭炮": 137,
      "灯笼": 138,
      "发财": 139,
      "K歌": 140,
      "购物": 141,
      "邮件": 142,
      "帅": 143,
      "喝彩": 144,
      "祈祷": 145,
      "爆筋": 146,
      "棒棒糖": 147,
      "喝奶": 148,
      "下面": 149,
      "香蕉": 150,
      "飞机": 151,
      "开车": 152,
      "左车头": 153,
      "车厢": 154,
      "右车头": 155,
      "多云": 156,
      "下雨": 157,
      "钞票": 158,
      "熊猫": 159,
      "灯泡": 160,
      "风车": 161,
      "闹钟": 162,
      "打伞": 163,
      "彩球": 164,
      "钻戒": 165,
      "沙发": 166,
      "纸巾": 167,
      "药": 168,
      "手枪": 169,
      "青蛙": 170

    };
    //匹配不大于三个中文或字母并带中括号
    //因英语表情名偏长，扩展到20个
    var faceTextReg = /\[([A-Z\u4e00-\u9fa5]{1,20}?)\]/gi;

    // 根据faceCode渲染生成系统默认表情的html
    var renderDefaultFace = function (faceCode) {
      return '<img class="EQQ_faceImg" src="' + CDN_FACE + FACE_MAP[faceCode] + '.gif" width="24px" height="24px">';
    };
    //显示收信息的离线图片
    var renderOffPic = function (filePath, fuin) {
      return '<img rdata="offpic" src="/css/image/img_loading.gif" _ori_src="' + GET_OFFPIC_URL + "?file_path=" + encodeURIComponent(filePath) + '&f_uin=' + fuin + '&clientid=' + mq.clientid + '&psessionid=' + mq.psessionid + '" title="自定义表情图片" style="max-width:100%" />';
    };
    //发送消息字体格式
    var fontFormat = ["font", {"name": "宋体", "size": 10, "style": [0, 0, 0], "color": "000000"}];

    var handlers = {
      onMessageReceived: function (msg) {
        var user = msg.send_to || msg.from_user;
        if (user.isSelf) {
          user = msg.to_user;
        }
        //如果当前已打开对应对话框或是自己发送的消息，则创建消息显示
        if (user && currentChatType === 'friend' && (user.uin == currentChatUin || user.uin == selfUin)) {
          packageContext.appendMessage([msg]);
        }
      },
      onGroupMessageReceived: function (msg) {
        var group = msg.from_group;
        var from_user = msg.from_user;

        //如果当前已打开对应对话框或是自己发送的消息，则创建消息显示
        if ((group && group.gid == currentChatUin && currentChatType === 'group') || (from_user && from_user.uin == selfUin)) {
          packageContext.appendMessage([msg]);
        }
      },
      onDiscussMessageReceived: function (msg) {
        var discuss = msg.from_discuss;
        var from_user = msg.from_user;

        //如果当前已打开对应对话框或是自己发送的消息，则创建消息显示
        if ((discuss && discuss.did == currentChatUin && currentChatType === 'discuss') || (from_user && from_user.uin == selfUin)) {
          packageContext.appendMessage([msg]);
        }
      },
      onLoginSuccess: function (opt) {
        selfUin = opt.selfUin;
      },
      onStartChat: function (opt) {
        var user, type = opt.type, uin = opt.uin, group_uin = opt.group_uin, discuss_uin = opt.discuss_uin;
        var m_model = mq.model.buddylist;

        //和群或讨论组里陌生人聊天
        // if(group_uin || discuss_uin){
        //     packageContext.model.sendGetSessionSignature({
        //         to_uin:uin,
        //         group_uin:group_uin,
        //         discuss_uin:discuss_uin
        //     });
        // }
        if (type == "friend") {
          // m_model.sendGetFriendUin(uin);
          var f = m_model.getFriendByUin(uin);
          if (f.isStrange) {
            packageContext.model.sendGetSessionSignature({
              to_uin: uin,
              group_uin: f.groupUin,
              discuss_uin: f.discussUin
            });
          }
        }

        user = m_model.getBuddyInfo(uin, type);

        currentChatUin = user.uin || user.did || user.gid;
        currentChatType = user.type;
        packageContext.view.startChat(user);
      },
      onSendMessage: function (opt) {
        if (!mq.main.isOnline()) {
          mq.bubble('您已经离线，请重新<a href="javascript:void(0);" cmd="gotoLogin" title="登录">登录</a>');
          return;
        }
        var m = packageContext.model;
        var m_model = mq.model.buddylist;
        var selfUin = m_model.getSelfUin();
        var my_info = m_model.getSelfInfo();
        var currentChatUin = packageContext.getCurrentChatUin();
        var currentChatType = packageContext.getCurrentChatType();

        var textContent = opt.textContent;

        //发送表情正则匹配
        textContent = textContent.replace(faceTextReg, "@#[$1]@# ");
        contentTextArr = textContent.split("@#");

        var contentTextArrLen = contentTextArr.length;
        if (contentTextArrLen > 1) {
          for (var i = 0; i < contentTextArrLen; i++) {
            if (contentTextArr[i] == "") {
              //去除空字符串
              contentTextArr.splice(i, i + 1);

            }
            if (faceTextReg.test(contentTextArr[i])) {
              //表情内容文字
              var faceWord = contentTextArr[i].replace("[", "").replace("]", "");
              //转换表情ID 与 服务端的id 对应
              faceTextMatchID = FACE_WEBQQ_MAP[$FI(faceWord)];
              if (faceTextMatchID || faceTextMatchID === 0) {
                contentTextArr[i] = ["face", faceTextMatchID];
              }
            }
          }
          contentTextArr.push(fontFormat);
        } else {
          contentTextArr = [textContent, fontFormat];
        }

        var sendContent = JSON.stringify(contentTextArr);
        var message = {
          notNotify: true,
          content: contentTextArr,
          from_uin: selfUin,
          sender_uin: selfUin,
          from_user: my_info,
          sender: my_info,
          to_uin: currentChatUin,
          to_type: currentChatType,
          time: Date.now()
        };

        if (currentChatType == "friend") {

          if (m_model.getFriendByUin(currentChatUin).isStrange) {
            //发送消息
            m.sendSessMsg({
              to: currentChatUin,
              content: sendContent,
              face: my_info.face
            });
          }
          else {
            //发送消息
            m.sendMsg({
              to: currentChatUin,
              content: sendContent,
              face: my_info.face
            });
          }
          message.send_to = m_model.getFriendByUin(currentChatUin);
          //model添加消息记录
          m.addMessage(currentChatUin, message);
        }
        else if (currentChatType == "group") {
          //发送消息
          m.sendGroupMsg({
            group_uin: currentChatUin,
            content: sendContent,
            face: my_info.face
          });
          message.send_to = m_model.getGroupByGid(currentChatUin);
          //model添加消息记录
          m.addGroupMessage(currentChatUin, message);
        }
        else if (currentChatType == "discuss") {

          m.sendDiscussMsg({
            did: currentChatUin,
            content: sendContent,
            face: my_info.face
          });
          message.send_to = m_model.getDiscussById(currentChatUin);
          m.addDiscussMessage(currentChatUin, message);
        }
      },
      onSendFile: function (data) {
        packageContext.model.sendFile(data);
      },
      onChooseFace: function (e) {
        if (e.target && e.target.title) {
          var text_content = mq.view.chat.chatTextarea.getContent();
          if (e.target.title === 'delKey') {
            var len = text_content.length;
            //删除表情
            if (text_content.charAt(len - 1) === "]" && len >= 3) {
              //取输入的文本后20个字符减低干扰（英语的表情名偏长）
              var isFaceText = text_content.substring(len - FACE_TEXT_MAX_NUM, len);
              var otherText = text_content.substring(0, len - FACE_TEXT_MAX_NUM);

              //添加特殊符号
              isFaceText = isFaceText.replace(faceTextReg, "@#[$1]@#");
              // 按特征分割
              isFaceTextArr = isFaceText.split("@#");
              var contentTextArrLen = isFaceTextArr.length;

              if (contentTextArrLen > 1 && isFaceTextArr[contentTextArrLen - 1] == '') {
                var isFaceIndex = contentTextArrLen - 2;
                if (faceTextReg.test(isFaceTextArr[isFaceIndex])) {
                  //表情内容文字
                  var faceWord = isFaceTextArr[isFaceIndex].replace("[", "").replace("]", "");
                  //转换表情ID
                  faceTextMatchID = FACE_WEBQQ_MAP[$FI(faceWord)];
                  if (faceTextMatchID >= 0) {
                    //删除表情
                    isFaceTextArr.splice(isFaceIndex, isFaceIndex + 1);

                    //拼接剩余字符串
                    var noFaceText = "";

                    for (var i = 0; i < contentTextArrLen - 1; i++) {
                      if (isFaceTextArr[i]) {
                        noFaceText += isFaceTextArr[i];
                      }

                    }
                    //找到表情并删除成功
                    mq.view.chat.chatTextarea.setContent(otherText + noFaceText);
                    return;
                  }
                }
              }
            }
            var textTemp = text_content.substring(0, len - 1);
            mq.view.chat.chatTextarea.setContent(textTemp);
            return;
          }//删除键

          mq.view.chat.chatTextarea.setContent(text_content + '[' + e.target.title + ']');
          /* e.preventDefault(); */
        }
      },
      onBuddyInfoUpdate: function (info) {
        if (info.account === currentChatUin && info.type === currentChatType) {
          if (info.members) {
            info.members.forEach(function (r) {
              packageContext.view.updateBuddyInfo(r);
            });
          }

        }
      },
      onClose: function () {
        currentChatUin = null;
        currentChatType = null;
      },
      onAgreeReceiveFile: function (fileId) {
        var filesList = packageContext.model.getFilesList();
        var attach = filesList[fileId];
        attach.isread = true;
        packageContext.view.removeReceiveFileLink(fileId);

        // 使用 iframe 下载文件
        packageContext.view.receiveFile(attach);

        // 添加一条消息到 aio
        packageContext.model.agreeReceiveFile(attach);

      },
      onRefuseReceiveFile: function (fileId) {
        var filesList = packageContext.model.getFilesList();
        filesList[fileId].isread = true;
        packageContext.view.removeReceiveFileLink(fileId);

        packageContext.model.refuseReceiveFile(filesList[fileId]);
      },
      onAgreeOfflineFile: function (fileId) {
        var filesList = packageContext.model.getFilesList();
        var attach = filesList[fileId];
        attach.isread = true;

        // 修改 ui 上的按钮为不可点
        packageContext.view.removeReceiveFileLink(fileId);

        // 使用 iframe 下载文件
        packageContext.view.receiveOfflineFile(attach);

        // 添加一条消息到 aio
        packageContext.model.agreeReceiveFile(attach);

      },
      onNextOfflineFile: function (fileId) {

        var filesList = packageContext.model.getFilesList();
        var attach = filesList[fileId];
        attach.isread = true;

        packageContext.view.removeReceiveFileLink(fileId);
        // packageContext.model.nextOfflineFile(attach);

      },
      onRefuseOfflineFile: function (fileId) {
        var filesList = packageContext.model.getFilesList();
        var attach = filesList[fileId];
        attach.isread = true;

        packageContext.view.removeReceiveFileLink(fileId);

        packageContext.model.refuseOfflineFile(attach);

      }
    }

    this.init = function () {
      this.view = mq.view.chat;
      this.model = mq.model.chat;
      bindHandlers();
    };

    var bindHandlers = function () {
      var m = packageContext.model;
      var v = packageContext.view;
      $E.on(m, "messageReceived", handlers.onMessageReceived);
      $E.on(m, "groupMessageReceived", handlers.onGroupMessageReceived);
      $E.on(m, "discussMessageReceived", handlers.onDiscussMessageReceived);

      $E.on(mq.main, "loginSuccess", handlers.onLoginSuccess, this);
      $E.on(mq.view, 'startChat', handlers.onStartChat);

      $E.on(mq.view.chat, 'sendMessage', handlers.onSendMessage);
      $E.on(mq.view.chat, 'sendFile', handlers.onSendFile);
      $E.on(mq.view.chat, 'chooseFace', handlers.onChooseFace);
      $E.on(mq.view.chat, 'close', handlers.onClose);

      $E.on(mq.view.chat, 'agreeReceiveFile', handlers.onAgreeReceiveFile);
      $E.on(mq.view.chat, 'refuseReceiveFile', handlers.onRefuseReceiveFile);

      $E.on(mq.view.chat, 'agreeOfflineFile', handlers.onAgreeOfflineFile);
      $E.on(mq.view.chat, 'nextOfflineFile', handlers.onNextOfflineFile);
      $E.on(mq.view.chat, 'refuseOfflineFile', handlers.onRefuseOfflineFile);

      $E.on(mq.model.buddylist, 'groupInfoUpdate', handlers.onBuddyInfoUpdate);
      $E.on(mq.model.buddylist, 'discussInfoUpdate', handlers.onBuddyInfoUpdate);

    };
    this.getCurrentChatUin = function () {
      return currentChatUin;
    };
    this.getCurrentChatType = function () {
      return currentChatType;
    }

    this.isChating = function (user) {
      return user && user.account == currentChatUin && user.type == currentChatType;
    }

    this.initChatMessage = function (user) {
      var msgArr = packageContext.model.getMessages(user.account, user.type);
      if (msgArr) {
        this.appendMessage(msgArr);
      }
    }

    this.appendMessage = function (msgArr) {
      msgArr = this.translateMessages(msgArr);
      this.view.appendMessage(msgArr);
    }

    this.translateMessages = function (msgArr) {

      for (var i = 0, msgObj; msgObj = msgArr[i]; i++) {
        if (!msgObj.content) {
          continue;
        }
        if (!msgObj.sender) {
          msgObj.sender = mq.model.buddylist.getFriendByUin(msgObj.sender_uin);
        }
        msgObj.htmlContent = this.translateMessage(msgObj);
      }
      return msgArr;
    }


    // 将cgi返回的消息对象翻译成html字符串格式
    this.translateMessage = function (msgObj) {
      //off表情规则
      var content = msgObj.content;
      var from_uin = msgObj.from_uin;
      var isSelf = !from_uin || from_uin == mq.model.buddylist.getSelfUin();
      var htmlContent = [], html;

      for (var j = 0, c; c = content[j]; j++) {
        if (J.type.isArray(c)) {
          switch (c[0]) {
            case 'font'://字体, 暂时不处理
              break;
            case 'face':
              var faceWebIndex = FACE_WEBQQ_MAP.indexOf(c[1]);
              htmlContent.push(renderDefaultFace(faceWebIndex));
              break;
            case 'cface':
              htmlContent.push('[自定义表情]');//自定义表情
              break;
            case 'offpic':
              // htmlContent.push('[OFF表情]');
              htmlContent.push(renderOffPic(c[1].file_path, from_uin));
              break;
            case 'sendfile':
              htmlContent.push('<span class="icon icon_info"></span>您发送文件"' +
                  $S.encodeHtml(c[1]) + '"给对方。');
              break;
            case 'transtimeout':
              htmlContent.push('<span class="icon icon_err"></span>接收文件"' +
                  $S.encodeHtml(c[1]) + '"超时，文件传输失败。');
              break;
            case 'refusedbyclient':
              htmlContent.push('<span class="icon icon_err"></span>对方取消了接收文件"' +
                  $S.encodeHtml(c[1]) + '"，文件传输失败。');
              break;
            case 'transok':
              htmlContent.push('<span class="icon icon_succ"></span>文件"' +
                  $S.encodeHtml(c[1]) + '"传输成功。');
              break;
            case 'transerror':
              htmlContent.push('<span class="icon icon_err"></span>对方取消了接收文件"' +
                  $S.encodeHtml(c[1]) + '"或传输错误，文件传输失败。');
              break;
            case 'rffile':
              if (isSelf) {
                htmlContent.push('<span class="icon icon_err"></span>您拒绝接收"' +
                    $S.encodeHtml(c[1]) + '"，文件传输失败。');
              } else {
                htmlContent.push('<span class="icon icon_err"></span>对方取消了接收文件"' +
                    $S.encodeHtml(c[1]) + '"，文件传输失败。');
              }

              break;
            case 'agfile':
              htmlContent.push('<span class="icon icon_info"></span>您同意了接收文件"' +
                  $S.encodeHtml(c[1]) + '"。');
              break;
            case 'rtfile':
              htmlContent.push('<span class="icon icon_err"></span>接收文件"' +
                  $S.encodeHtml(c[1]) + '"超时，文件传输失败。');
              break;
            case 'wrfile':
              htmlContent.push('<span class="icon icon_info"></span>对方已同意接收"' +
                  $S.encodeHtml(c[1]) + '"，开始传输文件。');
              break;
            case 'wrffile':
              htmlContent.push('<span class="icon icon_err"></span>对方拒绝了接收文件"' +
                  $S.encodeHtml(c[1]) + '"，文件传输失败。');
              break;
            case 'rfile':
              htmlContent.push(getReceiveFileHtml(msgObj));
              break;
            case 'offfile':
              htmlContent.push(getReceiveOfflineFileHtml(msgObj));
              break;
            case 'sendofffile':
            case 'sendofffileerror':
            case 'refuseofffile':
            case 'nextofffile':
            case 'canceloffupload':
            case 'notifyagreeofffile':
            case 'notifyrefuseofffile': // 离线文件上传成功提示
              htmlContent.push($S.encodeHtml(c[1]));
              break;
            default:
              htmlContent.push($S.encodeHtml(c[1]));
              break;
          }
        } else {
          c = $S.encodeHtml(c);
          htmlContent.push(c);
        }
      }
      return htmlContent.join('');
    }

    // 将cgi返回的消息对象翻译成纯文本格式
    this.translateMessage2Text = function (msgObj) {
      var content = msgObj.content,
          textContent = [],
          i, c;
      for (i = 0; c = content[i]; ++i) {
        if (J.type.isArray(c)) {
          switch (c[0]) {
            case 'font':
              break;
            case 'face':
              textContent.push(
                  "[" +
                  $F(FACE_WEBQQ_MAP.indexOf(c[1])) +
                  "]"
              );
              break;
            case 'cface':
            case 'offpic':
              textContent.push('[' + $M('cface') + ']');
              break;
          }
        }
        else if (J.type.isString(c)) {
          textContent.push($S.encodeHtml(c));
        }
      }
      return textContent.join('');
    };

    //处理接收文件的图片格式

    var getFileTypeStyle = function (fileName) {
      if (typeof(fileName) == 'undefined' || fileName == '') {
        return;
      }
      var fns = fileName.split("."), fileNameSuffix = fns[fns.length - 1].toLowerCase();
      switch (fileNameSuffix) {
        case "excel":
        case "xls":
        case "xlsx":
          fileNameSuffix = "excel";
          break;
        case "doc":
        case "docx":
          fileNameSuffix = "word";
          break;
        case "ppt":
        case "pptx":
          fileNameSuffix = "ppt";
          break;
        case "bmp":
        case "png":
        case "gif":
        case "jpeg":
        case "jpg":
        case "ico":
          fileNameSuffix = "pic";//image
          break;
        case "tga":
        case "tif":
        case "psd":
        case "tiff":
          fileNameSuffix = "pic";
          break;
        case "mov":
        case "avi":
        case "mpeg":
        case "mpg":
        case "ra":
        case "rm":
        case "rmvb":
        case "qt":
        case "asf":
        case "wmv":
        case "swf":
        case "flv":
        case "mp4":
          fileNameSuffix = "media";
          break;
        case "mp3":
        case "wav":
        case "mid":
          fileNameSuffix = "music";
          break;
        case "arj":
        case "rar":
        case "zip":
        case "jar":
        case "7z":
        case "tar":
        case "uc2":
        case "gz":
        case "lha":
        case "ace":
        case "tgz":
          fileNameSuffix = "rar-zip";
          break;
        case "txt":
        case "text":
          fileNameSuffix = "share-txt";
          break;
        case "pdf":
          fileNameSuffix = "pdf16";
          break;
        case "com":
          fileNameSuffix = "exe16";
          break;
        default :
          fileNameSuffix = "others";
          break;
      }
      return fileNameSuffix;
    };

    var getReceiveFileHtml = function (msg) {
      var c = msg.content[0];
      var fileid = msg.from_uin + '_' + c[2];
      var filesList = mq.model.chat.getFilesList();
      html = '<span class="icon icon_info" ></span>对方给您发送文件: <br/>' +
          '<span class="file_icon icon_' + getFileTypeStyle(c[1]) + '">&nbsp;</span>' +
          $S.encodeHtml(c[1]) + '<span class="fileAct">';

      if (filesList[fileid].isread) {
        html += '&nbsp;[同意][拒绝]';
      } else {
        html += '&nbsp;<span class="fileLink" id="agree_' + fileid + '" _fileid="' + fileid +
            '" cmd="agreeFile" >' + '[同意]</span>';
        html += '&nbsp;<span class="fileLink" id="refuse_' + fileid + '" _fileid="' + fileid +
            '" cmd="refuseFile">' + '[拒绝]</span>';
      }
      html += '</span>';
      return html;
    }

    var getReceiveOfflineFileHtml = function (msg) {
      var fileid = msg.attach.from_uin + '_' + msg.attach.msg_id;
      var exTime = J.format.date(new Date(msg.attach.expire_time * 1000), "YYYY-MM-DD");
      var html = '<span class="icon icon_info" ></span>对方给您发送离线文件:<br />';
      html += '<span class="file_icon icon_' + getFileTypeStyle(msg.attach.name) +
          '">&nbsp;</span>' + $S.encodeHtml(msg.attach.name) + '(' +
          exTime + '到期)' + '<span class="fileAct">';

      html += '&nbsp;<span class="fileLink" id="agree_' + fileid +
          '" _fileid="' + fileid + '" cmd="agreeOfflineFile">' + '[接收]</span>';
      html += '&nbsp;<span class="fileLink" id="next_' + fileid + '" _fileid="'
          + fileid + '" cmd="nextOfflineFile">' + '[下次接收]</span>';
      html += '&nbsp;<span class="fileLink" id="refuse_' + fileid +
          '" _fileid="' + fileid + '" cmd="refuseOfflineFile" >' +
          '[拒绝]</span>'
      html += '</span>';

      return html;
    }

  });
});


define('mq.presenter.search', [
  "./mq.i18n",
  "./mq.view.transitionmanager"
], function () {
  J.$package("mq.presenter.search", function (J) {
    var packageContext = this;
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http,
        $S = JM.string;

    var $M = mq.i18n.message,
        $T = mq.view.templateManager;

    this.init = function () {
      this.view = mq.view.search;
      this.model = mq.model.buddylist;
      bindHandlers();
    }

    var handlers = {
      onStartSearch: function (obj) {
        packageContext.view.startSearch(obj);
      },
      onSearchFriends: function (obj) {
        var list = packageContext.model.searchFriends(obj.keyword);
        packageContext.view.renderResult({type: 'list', list: list});
      }
    }

    var bindHandlers = function () {
      $E.on(mq.view, 'startSearch', handlers.onStartSearch);
      $E.on(packageContext.view, 'searchFriends', handlers.onSearchFriends);
    }


  });
})
;

define('tmpl!../tmpl/tmpl_search_body.html', [], function () {
  return function (obj) {
    var __t, __p = '', __j = Array.prototype.join, print = function () {
      __p += __j.call(arguments, '');
    };
    with (obj || {}) {
      __p += '<div id="searchBar" class="search_wrapper">\r\n    <div class="search_inner">\r\n        <input id="searchInput" type="text" class="searchInput" placeholder="' +
          ((__t = ($M('search'))) == null ? '' : __t) +
          '" autocapitalize="off" />\r\n        <button id="searchClear" class="searchClear" cmd="clearSearchWord"></button>\r\n    </div>\r\n    <button id="searchCancel" class="searchCancel" cmd="clearSearchWord">' +
          ((__t = ($M('cancel'))) == null ? '' : __t) +
          '</button>\r\n</div>\r\n<div id="search_container_scroll_area" class="scrollWrapper search">\r\n    <div id="search_container" class="search_container">\r\n        <ul id="search_result_list" class="list list_white catogory_List">\r\n        </ul>\r\n    </div>\r\n</div>';
    }
    return __p;
  };
});


define('tmpl!../tmpl/tmpl_member_list.html', [], function () {
  return function (obj) {
    var __t, __p = '', __j = Array.prototype.join, print = function () {
      __p += __j.call(arguments, '');
    };
    with (obj || {}) {
      __p += '';
      var i = 0, item;
      __p += '\r\n';
      if (type === 'category') {
        __p += '\r\n';
        for (i = 0; item = list[i]; i++) {
          __p += '\r\n<li class="list_group">\r\n    <div id="groupTitle-' +
              ((__t = (item.index)) == null ? '' : __t) +
              '" class="list_group_title list_group_white_title list_arrow_right" cmd="clickMemberGroup" param="' +
              ((__t = (item.index)) == null ? '' : __t) +
              '">\r\n        <span>' +
              ((__t = (html(item.name))) == null ? '' : __t) +
              '</span>\r\n        <span class="onlinePercent"></span>\r\n    </div>\r\n    <ul id="groupBodyUl-' +
              ((__t = (item.index)) == null ? '' : __t) +
              '" class="list_group_body list list_white catogory_List"></ul>\r\n</li>\r\n';
        }
        __p += '\r\n';
      } else if (type === 'list') {

        __p += '\r\n';
        for (i = 0; item = list[i]; i++) {


          __p += '\r\n<li id="' +
              ((__t = (prefix ? (prefix + '-') : '' )) == null ? '' : __t) +
              'item-' +
              ((__t = (item.type + '-' + item.account )) == null ? '' : __t) +
              '" class="list_item" _uin="' +
              ((__t = (item.account )) == null ? '' : __t) +
              '" _type="' +
              ((__t = (item.type)) == null ? '' : __t) +
              '" cmd="clickMemberItem">\r\n    <a href="javascript:void(0);" class="avatar" cmd="clickMemberAvatar" _uin="' +
              ((__t = (item.account )) == null ? '' : __t) +
              '" _type="' +
              ((__t = (item.type)) == null ? '' : __t) +
              '">\r\n        ';
          if (item.type === 'group') {
            __p += '\r\n            <img src="//p.qpic.cn/qqstory_pic/Q3auHgzwzM6cKtDbXYoDPKflKJ1nXkTzl7vmDO5u8zgV1MIob0COcRLCbqia6ia82NEqNDyhI5DfE/" _ori_src="' +
                ((__t = (item.avatar)) == null ? '' : __t) +
                '" >\r\n        ';
          } else {
            __p += '\r\n            <img src="//p.qpic.cn/qqstory_pic/Q3auHgzwzM6cKtDbXYoDPPiadPGhwqWFHoWAesSD3ZJiceM5qUOmyqjFyhXh0icFVsGWEjVJRatg90/" _ori_src="' +
                ((__t = (item.avatar)) == null ? '' : __t) +
                '" >\r\n        ';
          }
          __p += '\r\n\r\n        ';
          if (item.mask) {
            __p += '\r\n        <span class="group_mask" />\r\n        ';
          }
          __p += '\r\n    </a>\r\n    <p class="member_nick" id="userNick-' +
              ((__t = (item.account)) == null ? '' : __t) +
              '">\r\n    ';
          if (item.mark) {
            __p += '\r\n        ' +
                ((__t = (html(item.mark))) == null ? '' : __t) +
                '<span>(' +
                ((__t = (html(item.name))) == null ? '' : __t) +
                ')</span>\r\n    ';
          } else if (item.cardName) {
            __p += '\r\n        ' +
                ((__t = (html(item.cardName))) == null ? '' : __t) +
                ' <span> (' +
                ((__t = (html(item.name))) == null ? '' : __t) +
                ')</span>\r\n    ';
          } else {
            __p += '\r\n        ' +
                ((__t = (html(item.name))) == null ? '' : __t) +
                '\r\n    ';
          }
          __p += '\r\n    </p>\r\n    ';
          if (typeof dataType != 'undefined' && dataType === 'recent') {
            __p += '\r\n    <p id="recent-item-' +
                ((__t = (item.type)) == null ? '' : __t) +
                '-' +
                ((__t = (item.account )) == null ? '' : __t) +
                '-msg" class="member_msg text_ellipsis">' +
                ((__t = (item.recentMessage || '')) == null ? '' : __t) +
                '</p>\t\r\n    ';
          } else if (typeof dataType == 'undefined' || dataType != 'search') {
            __p += '\r\n    <p class="member_msg text_ellipsis" >\r\n    ';
            if (item.stateName) {
              __p += '\r\n    <span class="member_state">' +
                  ((__t = (item.stateName)) == null ? '' : __t) +
                  '</span>\r\n    ';
            }
            __p += '\r\n    ';
            if (item.signature) {
              __p += '\r\n    <span class="member_signature" _signature_load="1">' +
                  ((__t = (html(item.signature))) == null ? '' : __t) +
                  '</span>\r\n    ';
            }
            __p += '\t\r\n    </p>\r\n    ';
          }
          __p += '\t\r\n\r\n    </li>\r\n    ';
        }
        __p += '\r\n    ';
      }
      __p += '\r\n\r\n';
    }
    return __p;
  };
});

define('mq.view.search', [
  'tmpl!../tmpl/tmpl_search_body.html',
  'tmpl!../tmpl/tmpl_member_list.html',
  "./mq.i18n",
  "./mq.view.transitionmanager"
], function (tmplSearchBody, tmplMemberList) {
  J.$package("mq.view.search", function (J) {
    var packageContext = this;
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http,
        $S = JM.string;

    var $M = mq.i18n.message,
        $T = mq.templateManager;

    this.createPanel = function () {
      if (!this.panel) {
        var option = {
          parent: mq.view.main.container,
          className: 'search-panel',
          title: $M('search'),
          hasBackButton: true,
          body: {html: tmplSearchBody({$M: $M})}
        };
        var panel = new mq.view.TitlePanel(option);
        this.panel = panel;

        this.searchBar = $D.id('searchBar');
        this.searchInput = $D.id('searchInput');

        var scrollArea = this.scrollArea = $D.id('search_container_scroll_area');
        this.memberList = new mq.view.MemberList({
          id: 'search',
          scrollArea: scrollArea,
          listContainer: $D.id('search_result_list'),
          listTmpl: tmplMemberList
        });

        //事件绑定
        bindHandlers();


      }
      return this.panel;
    }

    this.init = function () {

    }

    var commands = {
      clickMemberItem: function (param, target, e) {
        var uin = target.getAttribute('_uin');
        var type = target.getAttribute('_type');
        $E.fire(mq.view, 'startChat', {uin: uin, type: type});
      },
      clickLeftButton: function () {
        mq.view.transitionManager.pop('search');
      },
      clearSearchWord: function (panel, target, e) {
        packageContext.searchInput.value = "";
        $D.removeClass(packageContext.searchBar, "hascontent");
      }
    };

    var handlers = {
      onSearchInput: function (e) {
        if (packageContext.searchInput.value != "") {
          if (!$D.hasClass(packageContext.searchBar, "hascontent")) {
            $D.addClass(packageContext.searchBar, "hascontent");
          }
        } else {
          $D.removeClass(packageContext.searchBar, "hascontent");
        }
        $E.fire(packageContext, 'searchFriends', {keyword: packageContext.searchInput.value})
      }
    }

    //绑定事件处理程序
    var bindHandlers = function () {
      $E.bindCommands(packageContext.panel.container, commands);
      $E.on(packageContext.searchInput, "input", handlers.onSearchInput);

    };

    this.startSearch = function (obj) {
      var panel = this.createPanel();
      var backText = obj.from || $M('return');
      panel.setLeftText(backText);

      mq.view.transitionManager.push({
        id: 'search',
        element: panel.container,
        callback: null
      });
    }

    this.renderResult = function (resultList) {
      this.memberList.render(resultList);
    }

  });

})
;
define('mq.presenter.profile', [
  "./mq.i18n",
  "./mq.view.transitionmanager"
], function () {
  J.$package("mq.presenter.profile", function (J) {
    var packageContext = this;
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http,
        $S = JM.string;

    var $M = mq.i18n.message,
        $T = mq.view.templateManager;

    var currentProfile = null;

    this.init = function () {
      this.view = mq.view.profile;
      this.model = mq.model.buddylist;
      bindHandlers();
    }

    var handlers = {
      onViewProfile: function (obj) {
        var profile = packageContext.model.getBuddyInfo(obj.account, obj.type);

        obj.profile = profile;
        currentProfile = profile;
        packageContext.view.viewProfile(obj);

      },
      onBuddyInfoUpdate: function (info) {
        if (currentProfile && currentProfile.type === info.type
            && currentProfile.account === info.account) {
          currentProfile = info;
          packageContext.view.refreshProfile(info);
        }
      },
      onUserSignatureChange: function (user) {
        handlers.onBuddyInfoUpdate({info: user});
      },
      onDismiss: function () {
        currentProfile = null;
      }
    }

    var bindHandlers = function () {
      $E.on(mq.view, 'viewProfile', handlers.onViewProfile);
      $E.on(packageContext.view, 'dismiss', handlers.onDismiss);
      $E.on(packageContext.model, 'friendInfoUpdate', handlers.onBuddyInfoUpdate);
      $E.on(packageContext.model, 'discussInfoUpdate', handlers.onBuddyInfoUpdate);
      $E.on(packageContext.model, 'groupInfoUpdate', handlers.onBuddyInfoUpdate);
      $E.on(packageContext.model, 'userSignatureChange', handlers.onUserSignatureChange);
    }
  });
});


define('tmpl!../tmpl/tmpl_profile_body.html', [], function () {
  return function (obj) {
    var __t, __p = '', __j = Array.prototype.join, print = function () {
      __p += __j.call(arguments, '');
    };
    with (obj || {}) {
      __p += '\r\n<div class="group">\r\n    <div class="row clearfix">\r\n        <div class="cloumn">\r\n            <img class="avatar" src="' +
          ((__t = (profile.avatar)) == null ? '' : __t) +
          '">\r\n        </div>\r\n        <div class="cloumn profile_title">\r\n            <div class="row profile_name">' +
          ((__t = (encode(profile.name))) == null ? '' : __t) +
          '</div>\r\n            <div class="row profile_account">' +
          ((__t = (profile.ruin ? profile.ruin : "")) == null ? '' : __t) +
          '</div>\r\n        </div>\r\n        ';
      if (profile.type === 'friend') {
        __p += '\r\n        <button class="sendMsg2Member" cmd="sendMsg2Member">' +
            ((__t = ($M('sendMsg'))) == null ? '' : __t) +
            '</button>\r\n        ';
      }
      __p += '\r\n    </div>\r\n</div>\r\n';
      if (profile.type === 'friend') {
        __p += '\r\n    ';
        if (profile.signature) {
          __p += '\r\n<div class="group">\r\n    <div class="row profile_signature">\r\n        <span class="label">' +
              ((__t = ($M('signature'))) == null ? '' : __t) +
              '</span><p class="row-content">' +
              ((__t = (encode(profile.signature))) == null ? '' : __t) +
              '</p>\r\n    </div>\r\n</div>\r\n    ';
        }
        __p += '\r\n<div class="group">\r\n    ';
        if (profile.gender) {
          __p += '\r\n    <div class="row ">\r\n        <span class="label">' +
              ((__t = ($M('gender'))) == null ? '' : __t) +
              '</span>';

          if (profile.gender === 'male') {

            __p += '' +
                ((__t = ($M('male'))) == null ? '' : __t) +
                '';

          } else if (profile.gender === 'female') {

            __p += '' +
                ((__t = ($M('female'))) == null ? '' : __t) +
                '';

          } else {

            __p += '' +
                ((__t = ($M('unknown'))) == null ? '' : __t) +
                '';

          }

          __p += '\r\n    </div>\r\n    ';
        }
        __p += '\r\n    ';
        if (profile.birthday) {
          var b = profile.birthday;

          __p += '\r\n    <div class="row ">\r\n        <span class="label">' +
              ((__t = ($M('birthday'))) == null ? '' : __t) +
              '</span>' +
              ((__t = (b.year + '/' + b.month + '/' + b.day )) == null ? '' : __t) +
              '\r\n    </div>\r\n    ';
        }
        __p += '\r\n</div>\r\n<div class="group">\r\n    ';
        if (profile.country) {
          __p += '\r\n    <div class="row ">\r\n        <span class="label">' +
              ((__t = ($M('country'))) == null ? '' : __t) +
              '</span>' +
              ((__t = (encode(profile.country))) == null ? '' : __t) +
              '\r\n    </div>\r\n    ';
        }
        __p += '\r\n    ';
        if (profile.province) {
          __p += '\r\n    <div class="row ">\r\n        <span class="label">' +
              ((__t = ($M('province'))) == null ? '' : __t) +
              '</span>' +
              ((__t = (encode(profile.province))) == null ? '' : __t) +
              '\r\n    </div>\r\n    ';
        }
        __p += '\r\n    ';
        if (profile.city) {
          __p += '\r\n    <div class="row ">\r\n        <span class="label">' +
              ((__t = ($M('city'))) == null ? '' : __t) +
              '</span>' +
              ((__t = (encode(profile.city))) == null ? '' : __t) +
              '\r\n    </div>\r\n    ';
        }
        __p += '\r\n</div>\r\n<div class="group">\r\n    ';
        if (profile.phone) {
          __p += '\r\n    <div class="row ">\r\n        <span class="label">' +
              ((__t = ($M('phone'))) == null ? '' : __t) +
              '</span>' +
              ((__t = (encode(profile.phone + ''))) == null ? '' : __t) +
              '\r\n    </div>\r\n    ';
        }
        __p += '\r\n    ';
        if (profile.mobile) {
          __p += '\r\n    <div class="row ">\r\n        <span class="label">' +
              ((__t = ($M('mobile'))) == null ? '' : __t) +
              '</span>' +
              ((__t = (encode(profile.mobile + ''))) == null ? '' : __t) +
              '\r\n    </div>\r\n    ';
        }
        __p += '\r\n    ';
        if (profile.email) {
          __p += '\r\n    <div class="row ">\r\n        <span class="label">' +
              ((__t = ($M('email'))) == null ? '' : __t) +
              '</span>' +
              ((__t = (encode(profile.email))) == null ? '' : __t) +
              '\r\n    </div>\r\n    ';
        }
        __p += '\r\n</div>\r\n';
      }
      /********************* end of friend *************************/
      __p += '\r\n';
      if (profile.type === 'group') {
        __p += '\r\n';
        if (profile.memo) {
          __p += '\r\n<div class="group">\r\n    <div class="row ">\r\n        <span class="label">' +
              ((__t = ($M('publish'))) == null ? '' : __t) +
              '</span><p class="row-content">' +
              ((__t = (encode(profile.memo))) == null ? '' : __t) +
              '</p>\r\n    </div>\r\n</div>\r\n';
        }
        __p += '\r\n<div class="group clickable">\r\n    <div class="row clearfix" cmd="viewGroupMember">\r\n        <span class="label">' +
            ((__t = ($M('group_member'))) == null ? '' : __t) +
            '</span><span class="more_icon"></span><span class="text_right">' +
            ((__t = (profile.members.length + $M('buddy_unit'))) == null ? '' : __t) +
            '</span>\r\n    </div>\r\n</div>\r\n';
      }
      /********************* end of group *************************/
      __p += '\r\n';
      if (profile.type === 'discuss') {
        __p += '\r\n<div class="group clickable">\r\n    <div class="row clearfix" cmd="viewDiscussMember">\r\n        <span class="label">' +
            ((__t = ($M('discuss_member'))) == null ? '' : __t) +
            '</span><span class="more_icon"></span><span class="text_right">' +
            ((__t = (profile.members.length + $M('buddy_unit'))) == null ? '' : __t) +
            '</span>\r\n    </div>\r\n</div>\r\n';
      }
      /********************* end of discuss *************************/
      __p += '\r\n';
    }
    return __p;
  };
});

define('mq.view.profile', [
  'tmpl!../tmpl/tmpl_profile_body.html',
  "./mq.i18n",
  "./mq.view.transitionmanager"
], function (tmplProfileBody) {
  J.$package("mq.view.profile", function (J) {
    var packageContext = this;
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http,
        $S = JM.string;

    var $M = mq.i18n.message,
        $T = mq.templateManager;

    //定时器
    var getAnimFrame =
        (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
              window.setTimeout(callback, 1000 / 60);
            }
        );

    var currentProfile = null;

    this.createPanel = function () {
      if (!this.panel) {
        var option = {
          id: "",
          parent: mq.view.main.container,
          className: 'profile-panel',
          title: $M('profile'),
          hasBackButton: true,
          hasScroller: true,
          footer: {
            className: 'profile-footer'
          },
          body: {
            className: 'list_page'
          },
          rightButton: {
            text: $M('record')
          }
        };
        this.panel = new mq.view.TitlePanel(option);
        $D.setStyle(this.panel.bodyWrapper, 'background', 'rgb(237, 237, 237)');
        //this.bodyScroll = this.panel.body.querySelector('.profile-scroll');
        //this.panel.scroll = new iScroll(this.panel.body);
        bindHandlers();
      }
      return this.panel;
    }

    this.init = function () {

    }

    var commands = {
      clickLeftButton: function () {
        currentProfile = null;
        mq.view.transitionManager.pop('profile');
        $E.fire(packageContext, 'dismiss');
      },
      //聊天记录 暂时写在右键里
      clickRightButton: function () {
        $E.fire(mq.view, 'viewRecord', {
          user: currentProfile
        });
      },
      //展示成员列表
      viewGroupMember: function () {
        $E.fire(mq.view, 'viewGroupMember', {
          group: currentProfile
        });
      },
      viewDiscussMember: function () {
        $E.fire(mq.view, 'viewDiscussMember', {
          discuss: currentProfile
        });
      },
      //点击联系人资料页里的发消息
      sendMsg2Member: function () {
        var user = currentProfile;
        var param = {
          uin: user.uin,
          type: user.type
        }

        if (user.group) {
          param.group_uin = user.group.gid;
        }
        else if (user.discuss) {
          param.discuss_uin = user.discuss.did;
        }

        $E.fire(mq.view, 'startChat', param);
      }


    };

    var bindHandlers = function () {
      $E.bindCommands(packageContext.panel.container, commands);
    }

    this.viewProfile = function (obj) {
      var panel = this.createPanel();
      panel.setLeftText(obj.from || $M('return'));

      this.refreshProfile(obj.profile);

      mq.view.transitionManager.push({
        id: 'profile',
        element: this.panel.container,
        callback: null
      });
    }

    this.refreshProfile = function (user) {
      currentProfile = user;
      var panel = this.createPanel();
      var tmpl = tmplProfileBody;
      panel.body.innerHTML = tmpl({profile: user, encode: $S.encodeHtml, $M: $M});
      //packageContext.bodyScroll.innerHTML = tmpl({profile: user, encode: $S.encodeHtml, $M: $M});
      var footerHeight = $D.getStyle(packageContext.panel.footer, 'height');
      $D.setStyle(packageContext.panel.bodyWrapper, 'bottom', footerHeight);
      //直接设置滚动条会出现有些有有些没有的情况
      getAnimFrame(function () {
        //console.log(panel.body.querySelector('.profile-scroll'));
        panel.scroller.refresh();
        //panel.scroll.refresh();
      });

    }

  });
})
;

define('tmpl!../tmpl/tmpl_members_body.html', [], function () {
  return function (obj) {
    var __t, __p = '', __j = Array.prototype.join, print = function () {
      __p += __j.call(arguments, '');
    };
    with (obj || {}) {
      __p += '<div id="member_searchBar" class="search_wrapper">\r\n    <div class="search_inner">\r\n        <input id="member_searchInput" type="text" class="input_search" placeholder="' +
          ((__t = ($M('search'))) == null ? '' : __t) +
          '" autocapitalize="off" />\r\n        <button id="member_searchClear" class="searchClear" cmd="clearSearchWord"></button> \r\n    </div>\r\n    <button id="searchCancel" class="searchCancel" cmd="clearSearchWord" >' +
          ((__t = ($M('cancel'))) == null ? '' : __t) +
          '</button>\r\n</div>\r\n<div id="member_search_container_scroll_area" class="scrollWrapper search">\r\n    <div id="member_search_container" class="search_container">\r\n        <ul id="member_search_result_list" class="list list_white catogory_List">\r\n        </ul>\r\n    </div>\r\n</div>';
    }
    return __p;
  };
});

define('mq.view.member', [
  'tmpl!../tmpl/tmpl_members_body.html',
  'tmpl!../tmpl/tmpl_member_list.html',
  "./mq.i18n",
  "./mq.view.transitionmanager"
], function (tmplMembersBody, tmplMemberList) {
  J.$package("mq.view.member", function (J) {
    var packageContext = this;
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http,
        $S = JM.string;

    var $M = mq.i18n.message,
        $T = mq.templateManager;

    this.createPanel = function () {
      if (!this.panel) {
        var option = {
          parent: mq.view.main.container,
          className: 'member-panel',
          title: $M('members'),
          hasBackButton: true,
          body: {html: tmplMembersBody({$M: $M})}
        };
        var panel = new mq.view.TitlePanel(option);
        this.panel = panel;

        this.searchBar = $D.id('member_searchBar');
        this.searchInput = $D.id('member_searchInput');

        var scrollArea = this.scrollArea = $D.id('member_search_container_scroll_area');
        this.memberList = new mq.view.MemberList({
          id: 'search',
          scrollArea: scrollArea,
          listContainer: $D.id('member_search_result_list'),
          listTmpl: tmplMemberList
        });

        //事件绑定
        bindHandlers();


      }
      return this.panel;
    }

    this.init = function () {

    }
    //群或临时会话
    var commands = {
      clickMemberItem: function (param, target, e) {
        var uin = target.getAttribute('_uin');
        var type = target.getAttribute('_type');
        $E.fire(mq.view, 'viewProfile', {from: $M('session'), account: uin, type: type});
      },
      clickLeftButton: function () {
        mq.view.transitionManager.pop('members');
      },
      clearSearchWord: function (panel, target, e) {
        packageContext.searchInput.value = "";
        $D.removeClass(packageContext.searchBar, "hascontent");
        $E.fire(packageContext, 'searchMembers', {keyword: ""});
      }
    };

    var handlers = {
      onSearchInput: function (e) {
        if (packageContext.searchInput.value != "") {
          if (!$D.hasClass(packageContext.searchBar, "hascontent")) {
            $D.addClass(packageContext.searchBar, "hascontent");
          }
        } else {
          $D.removeClass(packageContext.searchBar, "hascontent");
        }
        $E.fire(packageContext, 'searchMembers', {keyword: packageContext.searchInput.value})
      }
    }

    //绑定事件处理程序
    var bindHandlers = function () {
      $E.bindCommands(packageContext.panel.container, commands);
      $E.on(packageContext.searchInput, "input", handlers.onSearchInput);

    };

    this.viewMembers = function (memberList) {
      var panel = this.createPanel();

      mq.view.transitionManager.push({
        id: 'members',
        element: panel.container,
        callback: null
      });

      this.renderMembers(memberList);
    }

    this.renderMembers = function (memberList) {
      this.memberList.render({type: 'list', list: memberList});
    }


  });
})

;
define('mq.presenter.member', [
  "./mq.i18n",
  "./mq.view.transitionmanager"
], function () {
  J.$package("mq.presenter.member", function (J) {
    var packageContext = this;
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http,
        $S = JM.string;

    var $M = mq.i18n.message,
        $T = mq.view.templateManager;

    var currentMemberList;

    this.init = function () {
      this.view = mq.view.member;
      this.model = mq.model.buddylist;
      bindHandlers();
    }

    var handlers = {
      onViewGroupMember: function (data) {
        var group = data.group;
        packageContext.view.viewMembers(group.members);
        currentMemberList = group.members;
      },
      onViewDiscussMember: function (data) {
        var discuss = data.discuss;
        packageContext.view.viewMembers(discuss.members);
        currentMemberList = discuss.members;
      },
      onSearchMembers: function (obj) {
        var keyword = obj.keyword;
        var resultList = [];
        if (keyword == "") {
          packageContext.view.renderMembers(currentMemberList);
        }
        else {
          J.each(currentMemberList, function (m) {
            if (m.nick.indexOf(keyword) > -1) {
              resultList.push(m);
            }
          })
          packageContext.view.renderMembers(resultList);
        }
      },
      onGroupInfoUpdate: function (groupInfo) {
        // packageContext.view.createGroupList(groupInfo);
      }
    }

    var bindHandlers = function () {
      $E.on(mq.view, 'viewGroupMember', handlers.onViewGroupMember);
      $E.on(mq.view, 'viewDiscussMember', handlers.onViewDiscussMember);
      // $E.on(mq.model.buddylist, 'groupInfoUpdate', onGroupInfoUpdate);
      $E.on(packageContext.view, 'searchMembers', handlers.onSearchMembers);
    }


  });
})
;
define('mq.model.record', [
  'jm'
], function () {
//聊天记录model类
  J.$package("mq.model.record", function (J) {
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http,
        $S = JM.string;
    var GET_RECORD_CGI = "https://web2.qq.com/cgi-bin/webqq_chat/";

    this.getRecordSuccess = function (data) {
      $E.fire(this, "getRecordSuccess", data);
    };

    this.sendGetRecord = function (user, pageIndex, rowCount) {
      var ns = document.createElement("script");
      document.body.appendChild(ns);
      ns.src = GET_RECORD_CGI + "?cmd=1&tuin=" + user.uin + "&vfwebqq=" + mq.vfwebqq + "&page=" + pageIndex + "&row=" + rowCount + "&callback=mq.model.record.getRecordSuccess";

    }
  });
})
;

define('tmpl!../tmpl/tmpl_record_footer.html', [], function () {
  return function (obj) {
    var __t, __p = '', __j = Array.prototype.join, print = function () {
      __p += __j.call(arguments, '');
    };
    with (obj || {}) {
      __p += '<div>\r\n    <a href="javascript:" class="record_pre_page" cmd="selectPrePage"><</a>\r\n    <input id="record_page_input" class="record_page_input" value="1">\r\n    <span>/</span>\r\n    <span id="record_total_count">3</span>\r\n    <a href="javascript:" class="record_next_page" cmd="selectNextPage">></a>\r\n</div>';
    }
    return __p;
  };
});

define('mq.view.record', [
  'tmpl!../tmpl/tmpl_record_footer.html',
  "./mq.i18n",
  "./mq.view.transitionmanager"
], function (tmplRecordFooter) {
  J.$package("mq.view.record", function (J) {
    var packageContext = this;
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http,
        $S = JM.string;

    var $M = mq.i18n.message,
        $T = mq.templateManager;

    var currentPageNum, totalPageNum;


    this.createPanel = function () {
      if (!this.panel) {
        var option = {
          parent: mq.view.main.container,
          className: 'record-panel',
          title: $M('record'),
          hasBackButton: true,
          body: {
            className: 'record_container'
          },
          footer: {
            className: 'record_toolbar_footer',
            html: tmplRecordFooter({$M: $M})
          }
        };
        var panel = new mq.view.TitlePanel(option);
        this.panel = panel;

        this.pageInput = $D.id("record_page_input");
        this.totalNumText = $D.id("record_total_count");

        var scrollArea = this.scrollArea = $D.id('record_container_scroll_area');
        //事件绑定
        bindHandlers();


      }
      return this.panel;
    }

    this.init = function () {

    }

    var commands = {
      clickLeftButton: function () {
        mq.view.transitionManager.pop('record');
      },
      selectPrePage: function () {
        if (currentPageNum <= 1) return;

        currentPageNum--;

        $E.fire(packageContext, "selectPage", {
          pageIndex: currentPageNum
        });
      },
      selectNextPage: function () {
        if (currentPageNum >= totalPageNum) return;

        currentPageNum++;

        $E.fire(packageContext, "selectPage", {
          pageIndex: currentPageNum
        });
      }
    };

    var handlers = {}

    //绑定事件处理程序
    var bindHandlers = function () {
      $E.bindCommands(packageContext.panel.container, commands);

    };
    //显示聊天记录
    this.viewRecord = function (memberList) {
      var panel = this.createPanel();
      mq.view.transitionManager.push({
        id: 'record',
        element: panel.container,
        callback: null
      });
    };
    //渲染记录列表
    this.renderRecord = function (data) {
      var recordData = data.recordData;
      var user = data.user;
      var self = data.self;
      var msgStr = '', msg;
      var chatlogs = recordData.chatlogs,
          record_container = this.panel.body;

      this.pageInput.value = currentPageNum = recordData.page || 1,
          this.totalNumText.innerHTML = totalPageNum = recordData.total || 1;

      record_container.innerHTML = "";
      if (!chatlogs || chatlogs.length == 0) {
        record_container.innerHTML += "<p class='no_record'>" + $M("noRecord") + "</p>"
        return;
      }

      for (var i = 0, l = chatlogs.length; i < l; i++) {
        var cl = chatlogs[i];

        var date = new Date(cl.time * 1000);
        var thisDateTimeString = J.format.date(date, "YYYY-MM-DD hh:mm:ss");

        // 发出的消息
        if (cl.cmd == 16) {
          msg = cl.msg[0];

          msgStr += '<dl class="me">\
                            <dt>' + $S.encodeHtml(self.name) + '<span>' + thisDateTimeString + '</span>' + '</dt>\
                            <dd>' + $S.encodeHtml(msg) + '</dd>\
                        </dl>';
        }
        // 收到的消息
        else if (cl.cmd == 17) {
          msg = cl.msg[0];
          msgStr += '<dl class="buddy">\
                            <dt>' + $S.encodeHtml(user.nick) + '<span>' + thisDateTimeString + '</span>' + '</dt>\
                            <dd>' + $S.encodeHtml(msg) + '</dd>\
                        </dl>';
        }
      }
      record_container.innerHTML = msgStr;

    }

  });


})
;
define('mq.presenter.record', [
  "./mq.i18n",
  "./mq.view.transitionmanager"
], function () {
  J.$package("mq.presenter.record", function (J) {
    var packageContext = this;
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http,
        $S = JM.string;

    var $M = mq.i18n.message,
        $T = mq.view.templateManager;

    var currentUser;

    this.init = function () {
      this.view = mq.view.record;
      this.model = mq.model.record;
      this.m_model = mq.model.buddylist;
      bindHandlers();
    }

    var handlers = {
      onViewRecord: function (data) {
        currentUser = data.user || currentUser;
        packageContext.view.viewRecord(data);
        $E.fire(packageContext.view, "selectPage", {
          pageIndex: 0,
          rowCount: 10
        });
      },
      onSelectPage: function (data) {
        pageNum = data.pageIndex || 0;
        rowCount = data.rowCount || 10;
        packageContext.model.sendGetRecord(currentUser, pageNum, rowCount);
      },
      onGetRecordSuccess: function (data) {

        packageContext.view.renderRecord({
          recordData: data,
          user: currentUser,
          self: packageContext.m_model.getSelfInfo()
        });
      }

    }

    var bindHandlers = function () {
      $E.on(mq.view, 'viewRecord', handlers.onViewRecord);
      $E.on(packageContext.view, 'selectPage', handlers.onSelectPage);
      $E.on(packageContext.model, 'getRecordSuccess', handlers.onGetRecordSuccess);
    }


  });
})
;

define('tmpl!../tmpl/tmpl_session_body.html', [], function () {
  return function (obj) {
    var __t, __p = '', __j = Array.prototype.join, print = function () {
      __p += __j.call(arguments, '');
    };
    with (obj || {}) {
      __p += '<div id="current_chat_scroll_area" class="scrollWrapper">\r\n    <ul id="current_chat_list" class="list list_white"></ul>\r\n</div>';
    }
    return __p;
  };
});

define('mq.view.session', [
  'tmpl!../tmpl/tmpl_session_body.html',
  'tmpl!../tmpl/tmpl_member_list.html',
  "./mq.i18n",
  "./mq.view.transitionmanager"
], function (tmplSessionBody, tmplMemberList) {
  J.$package("mq.view.session", function (J) {
    var packageContext = this;
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http,
        $S = JM.string;

    var $M = mq.i18n.message,
        $T = mq.templateManager;

    var MAX_RECENT_COUNT = 10;

    var sessionTab = null,
        notifyMap = {},
        totalNotify = 0;

    this.createPanel = function (container) {
      if (!this.panel) {
        var option = {
          parent: container,
          title: $M('session'),
          hasFooter: false,
          body: {html: tmplSessionBody()}
        };
        var panel = new mq.view.TitlePanel(option);
        this.panel = panel;

        this.scrollArea = $D.id('current_chat_scroll_area');
        this.listContainer = $D.id('current_chat_list');
        this.memberList = new mq.view.MemberList({
          id: 'recent',
          scrollArea: this.scrollArea,
          listContainer: this.listContainer,
          listTmpl: tmplMemberList
        });
      }
      return this.panel;
    }

    //初始化
    this.init = function () {

      //事件绑定
      bindHandlers();

    };
    //最近联系人
    var commands = {
      clickMemberItem: function (param, target, e) {
        var uin = target.getAttribute('_uin');
        var type = target.getAttribute('_type');
        $E.fire(mq.view, 'startChat', {uin: uin, type: type});
        $D.removeClass(target, 'notify');
      },
      clickMemberAvatar: function (param, target, e) {
        var uin = target.parentNode.getAttribute('_uin');
        var type = target.parentNode.getAttribute('_type');
        $E.fire(mq.view, 'viewProfile', {from: $M('session'), account: uin, type: type});
      }
    };

    var handlers = {
      onStartChat: function (chatUser) {
        if (!chatUser) {
          return;
        }

        // 消除红点
        totalNotify -= notifyMap[chatUser.type + '-' + chatUser.account] || 0;
        if (totalNotify < 1) {
          hideNotifyIcon();
        }
      },
      onShow: function () {
        packageContext.memberList.refresh();
      }
    }

    // 绑定事件处理程序
    var bindHandlers = function () {

      $E.bindCommands(packageContext.scrollArea, commands);
      $E.on(mq.view.chat, 'startChat', handlers.onStartChat);
      $E.on(packageContext, 'show', handlers.onShow);

    };

    var showNotifyIcon = function () {
      if (!sessionTab) {
        sessionTab = $D.id('session');
      }
      $D.addClass(sessionTab, 'point');
    }

    var hideNotifyIcon = function () {
      if (!sessionTab) {
        sessionTab = $D.id('session');
      }
      $D.removeClass(sessionTab, 'point');
    }

    this.render = function (recentList) {
      recentList = recentList.slice(0, MAX_RECENT_COUNT);//只显示最新的 MAX_RECENT_COUNT 条
      this.memberList.render({type: 'list', list: recentList, dataType: 'recent'});
    }

    this.onReceiveMessage = function (message, notNotify) {
      if (!notNotify) {
        this.updateNotify(message);
      }
      this.updateMessagePreview(message, notNotify);
    }

    this.updateNotify = function (message) {
      var from = message.send_to || message.from_discuss || message.from_group || message.from_user;
      var key = from.type + '-' + from.account;
      //显示小红点
      if (!notifyMap[key]) {
        notifyMap[key] = 1;
        totalNotify += 1;
      }
      showNotifyIcon();
    }
    this.updateMessagePreview = function (message, notNotify) {
      var from = message.send_to || message.from_discuss || message.from_group || message.from_user;
      var key = from.type + '-' + from.account;
      //更新列表的最新消息预览
      var domId = 'recent-item-' + key;
      var dom = $D.id(domId);
      if (!dom) {//没有, 创建之
        while (this.listContainer.children.length >= MAX_RECENT_COUNT) {
          this.listContainer.removeChild(this.listContainer.children[this.listContainer.children.length - 1]);
        }

        this.memberList.append({type: 'list', list: [from]}, true);
        dom = $D.id(domId);
        if (!dom) {//这里如果还没有找到dom,可能是出错了
          return;
        }
      }
      if (!notNotify) {
        $D.addClass(dom, 'notify');
      }
      var el = $D.id(domId + '-msg');
      if (!el) {
        el = document.createElement('p');
        el.id = domId + '-msg';
        el.setAttribute('class', 'member_msg text_ellipsis');
        dom.appendChild(el);
      }
      //适应自定义表情，改为传整个message
      var htmlContent = mq.presenter.chat.translateMessage(message);
      el.innerHTML = htmlContent;//J.string.encodeHtml(msg);

      //移动有新消息的节点到上面
      var parent = dom.parentNode;
      if (parent.children[0]) {
        parent.insertBefore(dom, parent.children[0]);
      }
      this.memberList.refresh();
    }
  });
})
;

define('tmpl!../tmpl/tmpl_contact_body.html', [], function () {
  return function (obj) {
    var __t, __p = '', __j = Array.prototype.join, print = function () {
      __p += __j.call(arguments, '');
    };
    with (obj || {}) {
      __p += '<div id="contactList" class="tab tab_animate member_tab">\r\n    <ul id="memberTab" class="tab_head">\r\n        <li cmd="clickMemberTab" param="friend">' +
          ((__t = ($M('con_friends'))) == null ? '' : __t) +
          '</li>\r\n        <li cmd="clickMemberTab" param="group">' +
          ((__t = ($M('con_groups'))) == null ? '' : __t) +
          '</li>\r\n        <li cmd="clickMemberTab" param="discuss">' +
          ((__t = ($M('con_discus'))) == null ? '' : __t) +
          '</li>\r\n    </ul>\r\n    <ul class="tab_body member_tab_body">\r\n        <li id="memberTabBody-friend">\r\n            <div id="f_list_scroll_area" class="member_scroll_area">\r\n                <ul id="friend_groupList" class="group_list member_group_list">\r\n                </ul> \r\n            </div>\r\n        </li>\r\n        <li id="memberTabBody-group">\r\n            <div id="group_list_scroll_area" class="member_scroll_area">\r\n                <ul id="g_list" class="list list_white catogory_List">\r\n                </ul>\r\n            </div>\r\n        </li>\r\n        <li id="memberTabBody-discuss">\r\n            <div id="discuss_list_scroll_area" class="member_scroll_area">\r\n                <ul id="d_list" class="list list_white catogory_List">\r\n                </ul>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n';
    }
    return __p;
  };
});

define('mq.view.contact', [
  'tmpl!../tmpl/tmpl_contact_body.html',
  'tmpl!../tmpl/tmpl_member_list.html',
  "./mq.i18n",
  "./mq.view.transitionmanager"
], function (tmplContactBody, tmplMemberList) {
  J.$package("mq.view.contact", function (J) {
    var packageContext = this;
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http,
        $S = JM.string;

    var $M = mq.i18n.message,
        $T = mq.templateManager;

    this.createPanel = function (container) {
      if (!this.panel) {
        var option = {
          parent: container,
          title: $M('contact'),
          rightButton: {
            text: '',
            className: 'btn_search'
          },
          leftButton: {
            className: 'contact_null_btn'
          },
          body: {html: tmplContactBody({$M: $M})}
        };
        var panel = new mq.view.TitlePanel(option);
        this.panel = panel;
      }
      return this.panel;
    }

    //初始化
    this.init = function () {
      //该 init 是在 createPanel 之后执行的
      this.contactList = $D.id('contactList');

      this.memberListAreas = {};

      var tabItems = [];
      var memberTabNode = $D.id('memberTab').children;
      var listTmpl = tmplMemberList;
      var key;
      for (var i = 0, node, id, tabBody; node = memberTabNode[i]; i++) {
        id = node.getAttribute('param');
        tabBody = $D.id('memberTabBody-' + id);
        tabItems.push({
          id: id,
          trigger: node,
          sheet: tabBody
        });
        this.memberListAreas[id] = new mq.view.MemberList({
          id: id,
          scrollArea: tabBody.children[0],
          listContainer: tabBody.children[0].children[0],
          listTmpl: listTmpl
        });

        // 如果是好友列表，在实例上添加一些方法，以支持加载好友个性签名
        if (id === 'friend') {
          for (key in friendListOption) {
            if (friendListOption.hasOwnProperty(key)) {
              this.memberListAreas[id][key] = friendListOption[key];
            }
          }
          this.memberListAreas[id].bindHandlers();
        }
      }

      //好友，群，讨论组切换tab
      this.tab = new MUI.Tab({
        items: tabItems,
        selectedClass: 'active'
      });

      //事件绑定
      bindHandlers();

      this.tab.select(0);
    };
    //好友列表
    var commands = {
      clickMemberTab: function (param, target, e) {
        packageContext.tab.select(param);
      },
      clickMemberGroup: function (param, target, e) {
        $D.toggleClass(target.parentNode, 'active');
        packageContext.memberListAreas['friend'].refresh();
      },
      clickMemberItem: function (param, target, e) {
        var uin = target.getAttribute('_uin');
        var type = target.getAttribute('_type');
        $E.fire(mq.view, 'startChat', {uin: uin, type: type});
      },
      clickRightButton: function (param, target, e) {
        $E.fire(mq.view, 'startSearch', {from: $M('contact')});
      },
      clickLeftButton: function (param, target, e) {
        //  $E.fire(mq.view, 'addFriends', {from: $M('contact')});
      }
    };

    var handlers = {
      onTabItemSelected: function (obj) {
        var cid = obj.current.id;
        if (packageContext.memberListAreas[cid]) {
          packageContext.memberListAreas[cid].refresh();
        }
      }
    };


    //绑定事件处理程序
    var bindHandlers = function () {

      $E.bindCommands(packageContext.panel.container, commands);

      $E.on(packageContext.tab, "selected", handlers.onTabItemSelected);

    };

    // friend list option to support loading signature when an item is in visible area
    var friendListOption = {
      onScrollEnd: function () {
        // 寻找处于可视区域中的好友，发出 `memberInVisibleArea` 事件
        var activeLists = this.listContainer.querySelectorAll('.active'),
            friendElements,
            i, n, j, l, prevIsVisible, end;
        // 如果有列表展开，才加载其中的个性签名
        if (activeLists && activeLists.length) {
          if (!this._visibleContainer) {
            this._visibleContainer = $D.id('f_list_scroll_area');
          }
          for (i = 0, n = activeLists.length; i < n; ++i) {
            friendElements = this._friendElements = activeLists[i].querySelectorAll('[id^="friend-item"]');
            // console.log(this.inVisibleArea(activeLists[i]);
            // 如果这个激活列表一点也看不到，则遍历下一个激活列表
            if (!this.inVisibleArea(activeLists[i])) continue;
            for (j = 0, l = friendElements.length; j < l; ++j) {
              friendEle = friendElements[j];
              if (this.inVisibleArea(friendEle)) {
                $E.fire(packageContext, 'memberInVisibleArea', friendEle.getAttribute('_uin'), 'friend');
                prevIsVisible = true;
              }
              // 如果上一个可见，这个不可见，说明之后的也不可见
              else if (prevIsVisible) {
                end = true;
                break;
              }
            }
            if (end) break;
          }
        }
      },
      // 只要在可视区域中能看到一点，就返回true
      inVisibleArea: function (ele, container) {
        container = container || this._visibleContainer;
        var containerTop = container.getBoundingClientRect().top,
            containerH = container.clientHeight,
            eleTop = ele.getBoundingClientRect().top - containerTop;
        return eleTop >= 0 && eleTop <= containerH;
      },
      bindHandlers: function () {
        var self = this,
            scrollOptions = this.scroll.options,
            oldOnScrollEnd = scrollOptions.onScrollEnd;
        this.onScrollEnd = J.bind(this.onScrollEnd, this);
        this.scroll.options.onScrollEnd = function () {
          oldOnScrollEnd.apply(this, arguments);
          self.onScrollEnd.apply(this, arguments);
        };
        $E.on(window, 'load resize', this.onScrollEnd);
      },
      // 以下方法会覆盖 `prototype` 上的同名方法，但会在各自内部调用 `prototype` 上的同名方法
      destroy: function () {
        this.scroll && this.scroll.options && (this.scroll.options.onScrollEnd = null);
        $E.off(window, 'load resize', this._onScrollEnd);
        this.constructor.prototype.destroy.apply(this, arguments);
      },
      refresh: function () {
        this.onScrollEnd();
        this.constructor.prototype.refresh.apply(this, arguments);
      }
    }
  });
})
;

define('tmpl!../tmpl/tmpl_setting_body.html', [], function () {
  return function (obj) {
    var __t, __p = '', __j = Array.prototype.join, print = function () {
      __p += __j.call(arguments, '');
    };
    with (obj || {}) {
      __p += '<div class="group">\r\n    <div class="row clearfix">\r\n        <div class="cloumn">\r\n            <img class="avatar" src="' +
          ((__t = (user.avatar)) == null ? '' : __t) +
          '">\r\n        </div>\r\n        <div class="cloumn profile_title_setting">\r\n            <div class="text_ellipsis profile_name row">' +
          ((__t = (encode(user.nick))) == null ? '' : __t) +
          '</div>\r\n            <div class="row profile_account">' +
          ((__t = (user.account)) == null ? '' : __t) +
          '</div>\r\n        </div>\r\n        <div id="online_state_setting" class="online_state_setting">\r\n            <i id="main_icon" class="main_icon online_icon"></i><i class="down_arrow"></i>\r\n            <ul>\r\n                <li><i class="online_icon"></i>' +
          ((__t = ($M('online'))) == null ? '' : __t) +
          '</li>\r\n                <li><i class="callme_icon"></i>' +
          ((__t = ($M('callme'))) == null ? '' : __t) +
          '</li>\r\n                <li><i class="away_icon"></i>' +
          ((__t = ($M('away'))) == null ? '' : __t) +
          '</li>\r\n                <li><i class="busy_icon"></i>' +
          ((__t = ($M('busy'))) == null ? '' : __t) +
          '</li>\r\n                <li><i class="silent_icon"></i>' +
          ((__t = ($M('silent'))) == null ? '' : __t) +
          '</li>\r\n                <li><i class="hidden_icon"></i>' +
          ((__t = ($M('hidden'))) == null ? '' : __t) +
          '</li>\r\n                <li><i class="offline_icon"></i>' +
          ((__t = ($M('offline'))) == null ? '' : __t) +
          '</li>\r\n            </ul>\r\n\r\n        </div>\r\n    </div> \r\n</div> \r\n\r\n';
      if (user.lnick) {
        __p += '\r\n<div class="group">\r\n    <div class="row profile_signature">\r\n        <span class="label">' +
            ((__t = ($M('signature'))) == null ? '' : __t) +
            '</span>\r\n        <span>' +
            ((__t = (encode(user.lnick))) == null ? '' : __t) +
            '</span>\r\n    </div>\r\n    \r\n</div>\r\n';
      }
      __p += '  \r\n\r\n<div class="group clickAble" cmd="clickNotifySetting">\r\n    <div class="row ">\r\n        ' +
          ((__t = ($M('notify_setting'))) == null ? '' : __t) +
          '\r\n        <span class="more_icon"></span>\r\n    </div>\r\n</div>\r\n\r\n<div class="group clickAble" cmd="clickShowAbout">\r\n    <div class="row ">\r\n        ' +
          ((__t = ($M('about_qq'))) == null ? '' : __t) +
          '\r\n        <span class="more_icon"></span>\r\n    </div>\r\n</div>\r\n\r\n<div id="about_qq_all" class="group" style="display:none;">\r\n             <div class="row ">\r\n              <span class="label">' +
          ((__t = ($M('version'))) == null ? '' : __t) +
          '</span>\r\n              ' +
          ((__t = ($M('current_version'))) == null ? '' : __t) +
          '\r\n            </div>\r\n            <div class="row ">\r\n            ' +
          ((__t = ($M('service'))) == null ? '' : __t) +
          '\r\n            </div>\r\n            <div class="row " cmd="clickFeedBack">\r\n                ' +
          ((__t = ($M('help'))) == null ? '' : __t) +
          '\r\n                <span class="more_icon"></span>\r\n            </div>\r\n\r\n</div>\r\n\r\n<div class="group clickAble" cmd="clickLogout">\r\n    <div class="row loginout">    \r\n            ' +
          ((__t = ($M('loginout'))) == null ? '' : __t) +
          '          \r\n    </div>\r\n</div>\r\n';
    }
    return __p;
  };
});

define('../lib/mui/js/mui.select', ['jm'], function () {
  JM.$package("MUI", function (J) {
    var $D = J.dom,
        $E = J.event;

    var Select = J.Class({
      init: function (options) {
        this.elem = $D.id(options.id) || options.id;
        this.select_list = $D.tagName("ul", this.elem)[0];
        this.onSelected = options.onSelected;
        this.listItems = $D.tagName("li", this.select_list);
        this.bindHandlers();

      },
      bindHandlers: function () {
        var self = this;
        var list, selectedItem, selectedIndex;
        var listItems = this.listItems, param;
        $E.on(this.elem, "click", function (e) {
          e = e || window.event;
          var target = e.target || e.srcElement;

          if (self.select_list.style.display != "block") {
            $D.setStyle(self.select_list, "display", "block");
          }
          else {
            $D.setStyle(self.select_list, "display", "none");
          }

          if (list = $D.closest(target, "ul")) {
            selectedItem = $D.closest(target, "li");
            J.each(listItems, function (l, i) {
              if (l == selectedItem)
                selectedIndex = i;
            });


            if (!J.type.isUndefined(selectedIndex)) {
              param = {
                selectedIndex: selectedIndex,
                selectedItem: selectedItem
              };

              $E.fire(self, "selected", param);

              if (self.onSelected) {
                self.onSelected(param);
              }

            }

          }
        });
      }

    });
    this.Select = Select;
  });
})
;
define('mq.view.setting', [
  'tmpl!../tmpl/tmpl_setting_body.html',
  "./mq.i18n",
  "./mq.view.transitionmanager",
  '../lib/mui/js/mui.select'
], function (tmplSettingBody) {
  J.$package("mq.view.setting", function (J) {
    var packageContext = this;
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http,
        $S = JM.string;

    var $M = mq.i18n.message,
        $T = mq.templateManager;

    var state_array = ["online", "callme", "away", "busy", "silent", "hidden", "offline"];


    this.createPanel = function (container) {
      if (!this.panel) {
        var option = {
          parent: mq.view.main.body,
          title: $M('setting'),
          hasScroller: true,
          body: {
            className: 'list_page setting'
          }
        };
        this.panel = new mq.view.TitlePanel(option);

        bindHandlers();
      }
      return this.panel;
    }
    this.init = function () {

      bindHandlers();

    }
    var commands = {
      clickLogout: function () {
        $E.fire(packageContext, "logout");
      },
      clickShowAbout: function () {
        $E.fire(packageContext, "showAbout", arguments[1]);
      },
      clickNotifySetting: function () {
        $E.fire(packageContext, "notifySetting");
      },
      clickFeedBack: function () {
        window.open("https://support.qq.com/discuss/513_1.shtml");
      }
    }
    var bindHandlers = function () {
      $E.bindCommands(packageContext.panel.container, commands);
    }
    this.viewSelfProfile = function (obj) {
      var panel = this.createPanel();
      this.refreshSelfProfile(obj);

      //在线状态选择框
      this.onlineStateSelect = new MUI.Select({
        id: "online_state_setting",
        onSelected: this.onSelectState
      });

      this.setOnlieStateIcon(mq.main.getCurrentOnlineState());

    }
    this.refreshSelfProfile = function (user) {
      var panel = this.createPanel();
      var tmpl = tmplSettingBody;
      panel.body.innerHTML = tmpl({user: user, encode: $S.encodeHtml, $M: $M});
      panel.scroller.refresh();
    }

    this.setOnlieStateIcon = function (state) {
      $D.id("main_icon").className = "main_icon " + state + "_icon";
    }

    this.onSelectState = function (e) {
      var newState = state_array[e.selectedIndex];

      $E.fire(mq, "onlineStateChange", {
        state: newState
      });

      packageContext.setOnlieStateIcon(newState);
    }
  });

})
;
define('mq.presenter.setting', [
  "./mq.i18n",
  "./mq.view.transitionmanager"
], function () {
  J.$package("mq.presenter.setting", function (J) {
    var packageContext = this;
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http,
        $S = JM.string;

    var $M = mq.i18n.message,
        $T = mq.view.templateManager;

    var about_qq_all;

    this.init = function () {
      this.view = mq.view.setting;
      this.model = mq.model.buddylist;
      bindHandlers();
    }
    var handlers = {
      onSettingShow: function () {
        var selfProfile = packageContext.model.getSelfInfo();
        packageContext.view.viewSelfProfile(selfProfile);
      },
      onNotifySetting: function () {
        $E.fire(mq.view, "viewNotifySetting", {from: $M('setting')});
      },
      onStateChanged: function (e) {
        packageContext.model.sendChangeStatus({
          newstatus: e.state
        });
      },
      onLogout: function () {
        if (confirm("您确定要退出吗？")) {
          mq.main.logout();
          // window.location.href = window.location.href;
        }
      },
      onShowAbout: function (thatdiv) {
        about_qq_all = $D.id('about_qq_all');
        var panel = mq.view.setting.createPanel();
        if (about_qq_all.style.display === "none") {
          $D.addClass(thatdiv, "active");
          about_qq_all.style.display = "block";
          panel.scroller.refresh();
        } else {
          $D.removeClass(thatdiv, "active");
          about_qq_all.style.display = "none";
          panel.scroller.refresh();
        }
      }
    }

    var bindHandlers = function () {
      $E.on(mq, 'onlineStateChange', handlers.onStateChanged);
      $E.on(mq.view.setting, 'show', handlers.onSettingShow);
      $E.on(mq.view.setting, 'notifySetting', handlers.onNotifySetting);
      $E.on(mq.view.setting, 'logout', handlers.onLogout);
      $E.on(mq.view.setting, 'showAbout', handlers.onShowAbout);
    }
  });
})

;
define('mq.presenter.pluginDisplayer', [
  'jm'
], function () {
  J.$package("mq.presenter.pluginDisplayer", function (J) {
    var packageContext = this;
    var $E = JM.event;

    var handlers = {
      onStartDisplayPlugin: function (plugin) {
        packageContext.view.startDisplayPlugin(plugin);
      }
    }

    this.init = function () {
      this.view = mq.view.pluginDisplayer;

      // bind handlers
      $E.on(mq.view, 'startDisplayPlugin', handlers.onStartDisplayPlugin);
    }
  });
})
;

define('tmpl!../tmpl/tmpl_plugin_body.html', [], function () {
  return function (obj) {
    var __t, __p = '', __j = Array.prototype.join, print = function () {
      __p += __j.call(arguments, '');
    };
    with (obj || {}) {
      __p += '<ul id="plugin_list" class="clearfix">\r\n    ';
      for (var i = 0, item; item = items[i]; ++i) {
        __p += '\r\n    <li id="' +
            ((__t = (item.id )) == null ? '' : __t) +
            '" cmd="clickItem">\r\n        <span class="icon"></span>\r\n        <a>' +
            ((__t = (item.text )) == null ? '' : __t) +
            '</a>\r\n    </li>\r\n    ';
      }
      __p += '\r\n</ul>';
    }
    return __p;
  };
});

define('mq.view.plugin', [
  'tmpl!../tmpl/tmpl_plugin_body.html',
  'jm',
  "./mq.i18n",
  "./mq.view.transitionmanager"
], function (tmplPluginBody) {
  J.$package("mq.view.plugin", function (J) {
    var packageContext = this;
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http,
        $S = JM.string;

    var $M = mq.i18n.message,
        $T = mq.templateManager;

    var isTouchDevice = J.platform.touchDevice;

    var pluginData = [{
      id: 'qzone',
      // url: 'http://user.qzone.qq.com/',
      // url: 'http://pt.3g.qq.com/s?aid=touchLogin&t=qzone&bid_code=qzoneLogin&go_url=http://m.qzone.com/infocenter',
      url: isTouchDevice ? 'https://pt.3g.qq.com/s?aid=touchLogin&t=qzone&bid_code=qzoneLogin&go_url=https://m.qzone.com/infocenter' : 'https://qz.qq.com/',
      // url: 'http://qzone.com/',
      text: $M('qzone')
    }, {
      id: 'qmail',
      url: isTouchDevice ? 'https://w.mail.qq.com/' : 'https://ptlogin2.qq.com/pt4_web_jump?pt4_token=g3jdGooid--jhmLnMc5mIA__&daid=4&appid=522005705&succ_url=https%3A%2F%2Fmail.qq.com%2Fcgi-bin%2Flogin%3Ffun%3Dpassport%26from%3Dwebqq',
      // url: 'http://mail.qq.com/cgi-bin/frame_html?sid=iTO7_zKkqSPcbHor&r=9e2cc3eb5b564bc88e6175d28c60696d', // 可自动登录，但会使iframe外层的窗口跳转
      // url: 'http://w.mail.qq.com/',
      // url: 'http://mail.qq.com/',
      text: $M('qmail')
    }, {
      id: 'qq_portal',
      url: isTouchDevice ? 'https://shipei.qq.com/' : 'https://www.qq.com/',
      text: $M('qq_portal')
    }/*,{
     id: 'soso_map',
     url: isTouchDevice ? 'http://wap.soso.com/' : 'http://map.soso.com/',
     text: $M('soso_map')
     }*/];

    var commands = {
      clickItem: function (param, target, e) {
        var displayer = $D.id('plugin_displayer');
        var i, arr = pluginData, data;

        for (i = arr.length - 1; i >= 0; i--) {
          if (arr[i].id === target.id) {
            data = arr[i];
            break;
          }
        }
        if (data) {
          if (isTouchDevice) {
            $E.fire(mq.view, 'startDisplayPlugin', data);
          } else {
            window.open(data.url, '_blank');
          }
        }

        e.preventDefault();
      }
    };

    this.createPanel = function (container) {
      if (!this.panel) {
        var option = {
          parent: container,
          title: $M('plugin'),
          hasScroller: true,
          body: {
            className: 'plugin',
            html: tmplPluginBody({items: pluginData})
          }
        };
        var panel = new mq.view.TitlePanel(option);
        this.panel = panel;
      }
      return this.panel;
    };

    this.init = function () {
      // 如果所在主域为qq.com，设置document.domain以嵌入跨域页面
      if (/^[.\w-]+\.qq\.com/i.test(document.domain)) {
        document.domain = 'qq.com';
      }

      $E.bindCommands(packageContext.panel.container, commands);
    };
  });
})
;
define('mq.view.pluginDisplayer', [
  "./mq.i18n",
  "./mq.view.transitionmanager"
], function () {
  J.$package("mq.view.pluginDisplayer", function (J) {
    var packageContext = this;
    var $E = J.event,
        $D = J.dom,
        $H = J.http,
        $S = J.string;

    var _mq = mq,
        _mqView = _mq.view;
    var $M = _mq.i18n.message,
        $T = _mq.templateManager;
    $TM = _mqView.transitionManager;

    var currentPlugin = null,
        transitionId = 'displayPlugin',
        displayerId = 'plugin_displayer';
    tmplDisplayer = function (id, url) {
      var arr = [
        '<iframe id="',
        id,
        '" ',
        url ? 'src="' + url + '"' : '',
        '>'
      ];
      return arr.join('');
    };

    var commands = {
      clickLeftButton: function () {
        $TM.pop(transitionId);
      }
    };

    var bindHandlers = function () {
      $E.bindCommands(packageContext.panel.container, commands);
    };

    this.startDisplayPlugin = function (plugin) {
      var isDifferent, key, panel;

      if (!plugin) return;

      panel = this.createPanel();

      if (currentPlugin) {
        isDifferent = false;
        for (key in plugin) {
          if (plugin.hasOwnProperty(key)
              && plugin[key] !== currentPlugin[key]) {
            isDifferent = true;
            break;
          }
        }
      } else {
        isDifferent = true;
      }
      if (isDifferent) {
        currentPlugin = plugin;
        panel.setTitle(plugin.text);
        $D.remove(panel.body.querySelector('#' + displayerId));
        panel.body.innerHTML = tmplDisplayer(displayerId, plugin.url);
      }

      $TM.push({
        id: transitionId,
        element: this.panel.container,
        callback: function () {
          packageContext.scroll.refresh();
        }
      });
    }

    this.createPanel = function () {
      if (!this.panel) {
        this.panel = new _mqView.TitlePanel({
          parent: _mqView.main.container,
          className: 'plugin-displayer-panel',
          leftButton: {
            className: 'btn_arrow_left',
            text: $M('return')
          },
          body: {
            className: 'plugin_displayer_container',
            html: tmplDisplayer(displayerId)
          }
        });
        this.scroll = new iScroll(this.panel.bodyWrapper);

        bindHandlers();
      }
      return this.panel;
    };

    this.init = function () {

    }
  });
})
;
define('jmAudio', [
  'jm'
], function () {

  J.$package('J', function (J) {
    var packageContext = this,
        $D = J.dom,
        $E = J.event,
        $B = J.browser;

    var AUDIO_OBJECT = '../../../audio/jmAudioObject.swf',
        EMPTY_FUNC = function () {
          return 0;
        },
        AUDIO_MODE = {
          NONE: 0,
          NATIVE: 1,
          WMP: 2,
          FLASH: 3,
          MOBILE: 4
        };

    var BaseAudio = J.Class({
      init: function () {
        throw 'BaseAudio does not implement a required interface';
      },
      play: EMPTY_FUNC,
      pause: EMPTY_FUNC,
      stop: EMPTY_FUNC,

      getVolume: EMPTY_FUNC,
      setVolume: EMPTY_FUNC,
      getLoop: EMPTY_FUNC,
      setLoop: EMPTY_FUNC,
      setMute: EMPTY_FUNC,
      getMute: EMPTY_FUNC,
      getPosition: EMPTY_FUNC,
      setPosition: EMPTY_FUNC,

      getBuffered: EMPTY_FUNC,
      getDuration: EMPTY_FUNC,
      free: EMPTY_FUNC,

      on: EMPTY_FUNC,
      off: EMPTY_FUNC
    });

    /**
     * @ignore
     */
    var audioModeDetector = function () {
      // if(0){
      if (window.Audio && (new Audio).canPlayType('audio/mpeg')) { //支持audio
        if ((/\bmobile\b/i).test(navigator.userAgent)) {
          return AUDIO_MODE.MOBILE;
        }
        return AUDIO_MODE.NATIVE;
      } else if (J.browser.plugins.flash >= 9) { //支持flash控件
        return AUDIO_MODE.FLASH;
      } else if (!!window.ActiveXObject && (function () {
            try {
              new ActiveXObject("WMPlayer.OCX.7");
            } catch (e) {
              return false;
            }
            return true;
          })()) { //支持wmp控件
        return AUDIO_MODE.WMP;
      } else {
        return AUDIO_MODE.NONE; //啥都不支持
      }
    };

    var getContainer = function () {
      var _container;
      return function (mode) {
        if (!_container) {
          var node = document.createElement('div');
          node.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;margin:0;padding:0;left:0;top:0;';
          (document.body || document.documentElement).appendChild(node);
          if (mode == AUDIO_MODE.FLASH) {
            node.innerHTML = '<object id="jmAudioObject" name="jmAudioObject" ' +
                (J.browser.ie ?
                    'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' :
                    'type="application/x-shockwave-flash" data="' + AUDIO_OBJECT + '"') +
                ' width="1" height="1" align="top"><param name="movie" value="' +
                AUDIO_OBJECT + '" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="quality" value="high" /><param name="wmode" value="opaque" /></object>';
            _container = J.dom.id('jmAudioObject') || window['jmAudioObject'] || document['jmAudioObject'];
          } else {
            _container = node;
          }
        }
        return _container;
      }
    }();
    var getSequence = function () {
      var _seq = 0;
      return function () {
        return _seq++;
      }
    }();

    var audioMode = audioModeDetector();
    switch (audioMode) {
      case AUDIO_MODE.NATIVE:
      case AUDIO_MODE.MOBILE:
        var NativeAudio = J.Class({extend: BaseAudio}, {
          init: function (option) {
            option = option || {};
            var el = this._el = new Audio();
            el.loop = Boolean(option.loop); //default by false
            /*el.autoplay = option.autoplay !== false; //defalut by true*/
            if (option.src) {
              // el.src = option.src;
              this.play(option.src);
            }
          },
          play: function (url) {
            if (url) {
              this._el.src = url;
            }
            if (this._el.paused) {
              this._el.play();
            }
          },
          pause: function () {
            this._el.pause();
          },
          stop: function () {
            this._el.currentTime = Infinity;
          },

          getVolume: function () {
            return !this._el.muted && this._el.volume || 0;
          },
          setVolume: function (value) {
            if (isFinite(value)) {
              this._el.volume = Math.max(0, Math.min(value, 1));
              this._el.muted = false;
            }
          },
          getLoop: function () {
            return this._el.loop;
          },
          setLoop: function (value) {
            this._el.loop = value !== false;
          },
          /*getAutoplay : function(){
           return thie._el.autoplay;
           },
           setAutoplay : function(value){
           this._el.autoplay = value !== false;
           },*/
          getMute: function () {
            return this._el.muted;
          },
          setMute: function (value) {
            this._el.muted = value !== false;
          },
          getPosition: function () {
            return this._el.currentTime;
          },
          setPosition: function (value) {
            if (!isNaN(value)) {
              this._el.currentTime = Math.max(0, value);
            }
          },
          getBuffered: function () {
            return this._el.buffered.length && this._el.buffered.end(0) || 0;
          },
          getDuration: function () {
            return this._el.duration;
          },
          free: function () {
            this._el.pause();
            this._el = null;
          },
          on: function (event, handler) {
            this._el.addEventListener(event, handler, false);
          },
          off: function (event, handler) {
            this._el.removeEventListener(event, handler, false);
          }
        });
        if (audioMode = AUDIO_MODE.NATIVE) {
          J.Audio = NativeAudio;
          break;
        }
        var playingStack = [];
        var stackPop = function () {
          var len = playingStack.length;
          playingStack.pop().off('ended', stackPop);
          if (len >= 2) {
            playingStack[len - 2]._el.play();
          }
        };
        J.Audio = J.Class({extend: NativeAudio}, {
          init: function (option) {
            NativeAudio.prototype.init.call(this, option);
          },
          play: function (url) {
            var len = playingStack.length;
            if (len && playingStack[len - 1] !== this) {
              var index = J.indexOf(playingStack, this);
              if (-1 !== index) {
                playingStack.splice(index, 1);
              } else {
                this.on('ended', stackPop);
              }
            }
            playingStack.push(this);

            if (url) {
              this._el.src = url;
              // this._el.load();
            }
            if (this._el.paused) {
              this._el.play();
            }
          },
          pause: function () {
            for (var i = 0, len = playingStack.length; i < len; i++) {
              playingStack[i].off('ended', stackPop);
            }
            playingStack = [];
            this._el.pause();
          }
        });

        break;
      case AUDIO_MODE.FLASH :
        var addToQueue = function (audioObject) {
          var tryInvokeCount = 0,
              queue = [],
              flashReady = false;
          var tryInvoke = function () {
            ++tryInvokeCount;
            var container = getContainer();
            if (container.audioLoad && typeof container.audioLoad === 'function') {
              flashReady = true;
              for (var i = 0, len = queue.length; i < len; i++) {
                queue[i]._sync();
              }
              queue = null;
            } else if (tryInvokeCount < 30000) {
              setTimeout(tryInvoke, 100);
            }
          }
          return function (audioObject) {
            if (flashReady) {
              audioObject._sync();
              return;
            }
            if (-1 === J.indexOf(queue, audioObject)) {
              queue.push(audioObject);
            }
            if (tryInvokeCount === 0) {
              tryInvoke();
            }
          }
        }();
        var registerEvent, unregisterEvent;
        (function () {
          var list = [];
          window.J['AudioEventDispatcher'] = function (seq, event, param) {
            var audioObject = list[seq], events;
            audioObject && audioObject._handler && (events = audioObject._handler[event]);
            for (var i = 0, len = events && events.length; i < len; i++) {
              events[i].call(audioObject, param);
            }
          };
          registerEvent = function (audioObject) {
            list[audioObject._seq] = audioObject;
          };
          unregisterEvent = function (audioObject) {
            list[audioObject._seq] = null;
          };
        })();
        J.Audio = J.Class({
          init: function (option) {
            this._seq = getSequence();
            this._volume = 1;
            this._muted = false;
            option = option || {};
            this._loop = Boolean(option.loop); //default by false
            this._paused = true;
            var container = getContainer(AUDIO_MODE.FLASH);
            if (option.src) {
              this.play(option.src);
            }
          },
          play: function (url) {
            var container = getContainer();
            if (url) {
              this._src = url;
              this._paused = false;
              if (container.audioLoad) {
                this._sync();
              } else {
                addToQueue(this);
              }
            } else {
              this._paused = false;
              container.audioPlay && container.audioPlay(this._seq);
            }
          },
          pause: function () {
            var container = getContainer();
            this._paused = true;
            container.audioPause && container.audioPause(this._seq);
          },
          stop: function () {
            this._paused = true;
            var container = getContainer();
            container.audioStop && container.audioStop(this._seq);
          },

          getVolume: function () {
            return !this._muted && this._volume || 0;
          },
          setVolume: function (value) {
            if (isFinite(value)) {
              this._volume = Math.max(0, Math.min(value, 1));
              this._muted = false;
              var container = getContainer();
              container.audioSetVolume && container.audioSetVolume(this._seq, this._volume);
            }
          },
          getLoop: function () {
            return this._loop;
          },
          setLoop: function (value) {
            this._loop = value !== false;
            var container = getContainer();
            container.audioSetLoop && container.audioSetLoop(this._loop);
          },
          getMute: function () {
            return this._muted;
          },
          setMute: function (value) {
            this._muted = value !== false;
            var container = getContainer();
            container.audioSetVolume && container.audioSetVolume(this._seq, this.getVolume());
          },
          getPosition: function () {
            var container = getContainer();
            return container.audioGetPosition && container.audioGetPosition(this._seq) / 1000 || 0;
          },
          setPosition: function (value) {
            if (!isNaN(value)) {
              var container = getContainer();
              container.audioSetPosition(this._seq, Math.max(0, value) * 1000);
            }
          },

          getBuffered: function () {
            var container = getContainer();
            return container.audioGetBuffered && container.audioGetBuffered(this._seq) / 1000 || 0;
          },
          getDuration: function () {
            var container = getContainer();
            return container.audioGetDuration && container.audioGetDuration(this._seq) / 1000 || 0;
          },
          free: function () {
            this._paused = true;
            var container = getContainer();
            container.audioFree && container.audioFree(this._seq);
          },

          on: function (event, handler) {
            if (!this._handler) {
              this._handler = {};
              registerEvent(this);
            }
            if (!this._handler[event] || !this._handler[event].length) {
              this._handler[event] = [handler];
              var container = getContainer();
              container.audioOn && container.audioOn(this._seq, event);
            } else {
              if (-1 === J.indexOf(this._handler[event], handler)) {
                this._handler[event].push(handler);
              }
            }
          },
          off: function (event, handler) {
            var index;
            if (this._handler && this._handler[event] && -1 !== (index = J.indexOf(this._handler[event], handler))) {
              this._handler[event].splice(index, 1);
              if (!this._handler[event].length) {
                var container = getContainer();
                container.audioOff && container.audioOff(this._seq, event);
                delete this._handler[event];
              }
            }
          },

          _sync: function () {
            if (this._src) {
              var container = getContainer(),
                  seq = this._seq;
              container.audioLoad(seq, this._src);
              var volume = this.getVolume();
              if (volume != 1) {
                container.audioSetVolume(seq, volume);
              }
              if (this._loop) {
                container.audioSetLoop(seq, true);
              }
              for (var event in this._handler) {
                container.audioOn(seq, event);
              }
              if (!this._paused) {
                container.audioPlay(seq);
              }
            }
          }
        });
        break;
      case AUDIO_MODE.WMP:
        J.Audio = J.Class({extend: BaseAudio}, {
          init: function (option) {
            this._seq = getSequence();
            option = option || {};
            var wrap = document.createElement('div');
            getContainer(AUDIO_MODE.WMP).appendChild(wrap);
            wrap.innerHTML = '<object id="WMPObject' + this._seq + '" classid="CLSID:6BF52A52-394A-11D3-B153-00C04F79FAA6" standby="" type="application/x-oleobject" width="0" height="0">\
                        <param name="AutoStart" value="true"><param name="ShowControls" value="0"><param name="uiMode" value="none"></object>';
            var el = this._el = J.dom.id('WMPObject' + this._seq) || window['WMPObject' + this._seq];
            if (option.loop) { //default by false
              this._el.settings.setMode('loop', true);
            }
            if (option.src) {
              // el.src = option.src;
              this.play(option.src);
            }
          },
          play: function (url) {
            if (url) {
              var a = document.createElement('a');
              a.href = url;
              url = J.dom.getHref(a);
              this._isPlaying = false;
              this._isBuffering = false;
              // this._duration = 0;
              this._canPlayThroughFired = false;
              this._el.URL = J.dom.getHref(a);
            }
            if (this._el.playState !== 3) { //not playing
              this._el.controls.play();
            }
            if (this._hasPoll()) {
              this._startPoll();
            }
          },
          pause: function () {
            this._el.controls.pause();
          },
          stop: function () {
            this._el.controls.stop();
          },

          getVolume: function () {
            return !this._el.settings.mute && this._el.settings.volume / 100 || 0;
          },
          setVolume: function (value) {
            if (isFinite(value)) {
              var newVolume = Math.max(0, Math.min(value, 1)) * 100;
              if (this._el.settings.volume !== newVolume || this._el.settings.mute) {
                this._el.settings.volume = newVolume;
                this._el.settings.mute = false;
                this._fire('volumechange');
              }
            }
          },
          getLoop: function () {
            return this._el.settings.getMode('loop');
          },
          setLoop: function (value) {
            this._el.settings.setMode('loop', value !== false);
          },
          getMute: function () {
            return this._el.settings.mute;
          },
          setMute: function (value) {
            var newMute = value !== false;
            if (this._el.settings.mute !== newMute) {
              this._el.settings.mute = newMute;
              this._fire('volumechange');
            }
          },
          getPosition: function () {
            return this._el.controls.currentPosition;
          },
          setPosition: function (value) {
            if (!isNaN(value)) {
              this._fire('seeking');
              this._el.controls.currentPosition = Math.max(0, value);
            }
          },
          getBuffered: function () {
            return this._el.network.downloadProgress * .01 * this.getDuration();
          },
          getDuration: function () {
            return (this._el.currentMedia || 0).duration || 0;
          },
          free: function () {
            this._el.controls.stop();
            this._el = null;
          },

          on: function (event, handler) {
            if (!this._handler) {
              this._handler = {};
            }
            var context = this;
            switch (event) {
              case 'timeupdate':
                this._startPoll();
              case 'seeked':
                if (!this._hasPositionChange()) {
                  this._onPositionChange = function (position) {
                    context._fire('timeupdate');
                    context._fire('seeked');
                  }
                  this._el.attachEvent('PositionChange', this._onPositionChange);
                }
                break;
              case 'waiting':
              case 'playing':
                if (!this._hasBuffering()) {
                  this._onBuffering = function (isStart) {
                    if (!(context._el.currentMedia || 0).sourceURL) {
                      return;
                    }
                    if (isStart) {
                      context._isBuffering = true;
                      context._fire('waiting');
                    } else {
                      context._isBuffering = false;
                      context._fire('playing');
                    }
                  };
                  this._el.attachEvent('Buffering', this._onBuffering);
                }
                break;
              case 'error':
                // this._el.attachEvent('MediaError',handler);
                this._el.attachEvent('Error', handler);
                break;
              case 'progress':
              case 'ended':
              case 'play':
              case 'pause':
                if (!this._hasPlayStateChange()) {
                  this._onPlayStateChange = function (state) {
                    if (!(context._el.currentMedia || 0).sourceURL) {
                      return;
                    }
                    if (state === 2) {
                      context._isPlaying = false;
                      context._fire('pause');
                    } else if (state === 3) {
                      if (!context._isPlaying) {
                        context._isPlaying = true;
                        context._fire('play');
                      }
                    } else if (state === 6) { //Buffering
                      context._fire('progress');
                    } else if (state === 1) { //MediaEnded, Stopped
                      if (context._isPlaying) {
                        context._isPlaying = false;
                        context._fire('ended');
                        context._stopPoll();
                      }
                    }
                    /*else{
                     console.log('playstate:',state);
                     }*/
                  }
                  this._el.attachEvent('PlayStateChange', this._onPlayStateChange);
                }
                break;
              case 'loadstart':
              case 'loadeddata':
              case 'canplay':
                if (!this._hasOpenStateChange()) {
                  this._onOpenStateChange = function (state) {
                    if (!(context._el.currentMedia || 0).sourceURL) {
                      return;
                    }
                    if (state === 21) {
                      context._fire('loadstart');
                    } else if (state === 13) {
                      context._fire('loadeddata');
                      context._fire('canplay');
                    }
                    /*else{
                     console.log('openstate:',state);
                     }*/
                  }
                  this._el.attachEvent('OpenStateChange', this._onOpenStateChange);
                }
                break;
              case 'canplaythrough':
              case 'durationchange':
                this._startPoll();
                break;
              default:
                break;
            }
            (this._handler[event] || (this._handler[event] = [])).push(handler);
          },
          off: function (event, handler) {
            if (!this._handler) {
              return;
            }
            var index;
            if (this._handler && this._handler[event] && -1 !== (index = J.indexOf(this._handler[event], handler))) {
              this._handler[event].splice(index, 1);
            }

            switch (event) {
              case 'timeupdate':
                if (!this._hasPoll()) {
                  this._stopPoll();
                }
              case 'seeked':
                if (!this._hasPositionChange()) {
                  this._el.detachEvent('PositionChange', this._onPositionChange);
                }
                break;
              case 'waiting':
              case 'playing':
                if (!this._hasBuffering()) {
                  this._el.detachEvent('Buffering', this._onBuffering);
                }
                break;
              case 'error':
                this._el.detachEvent('Error', handler);
                break;
              case 'progress':
              case 'ended':
              case 'play':
              case 'pause':
                if (!this._hasPlayStateChange()) {
                  this._el.detachEvent('PlayStateChange', this._onPlayStateChange);
                }
                break;
              case 'loadstart':
              case 'loadeddata':
              case 'canplay':
                if (!this._hasOpenStateChange()) {
                  this._el.detachEvent('OpenStateChange', this._onOpenStateChange);
                }
                break;
              case 'canplaythrough':
              case 'durationchange':
                if (!this._hasPoll()) {
                  this._stopPoll();
                }
                break;
              default:
                break;
            }
          },
          _fire: function (event) {
            var events;
            if (!this._handler || !(events = this._handler[event])) {
              return;
            }
            for (var i = 0, len = events.length; i < len; i++) {
              events[i].call(this);
            }
          },
          _startPoll: function () {
            if (this._timer !== undefined) {
              return;
            }
            this._canPlayThroughFired = this._canPlayThroughFired || this._el.network.downloadProgress === 100;
            this._duration = this.getDuration();
            var context = this;
            this._timer = setInterval(function () {
              if (context._isPlaying && !context._isBuffering && (context._handler['timeupdate'] || 0).length && (context._el.currentMedia || 0).sourceURL) {
                context._fire('timeupdate');
              }

              var duration = context.getDuration();
              if (context._duration !== duration) {
                context._duration = duration;
                context._fire('durationchange');
              }
              if (!context._canPlayThroughFired) {
                if (context._el.network.downloadProgress === 100) {
                  context._canPlayThroughFired = true;
                  context._fire('canplaythrough');
                }
              }
            }, 1000);
          },
          _stopPoll: function () {
            clearInterval(this._timer);
            delete this._timer;
          },
          _hasPositionChange: function () {
            return (this._handler['timeupdate'] && this._handler['timeupdate'].length) ||
                (this._handler['seeked'] && this._handler['seeked'].length);
          },
          _hasBuffering: function () {
            return (this._handler['waiting'] && this._handler['waiting'].length) ||
                (this._handler['playing'] && this._handler['playing'].length);
          },
          _hasPlayStateChange: function () {
            return (this._handler['progress'] && this._handler['progress'].length) ||
                (this._handler['ended'] && this._handler['ended'].length) ||
                (this._handler['play'] && this._handler['play'].length) ||
                (this._handler['pause'] && this._handler['pause'].length);
          },
          _hasOpenStateChange: function () {
            return (this._handler['loadstart'] && this._handler['loadstart'].length) ||
                (this._handler['loadeddata'] && this._handler['loadeddata'].length) ||
                (this._handler['canplay'] && this._handler['canplay'].length);
          },
          _hasPoll: function () {
            return (this._handler['timeupdate'] && this._handler['timeupdate'].length) ||
                (this._handler['canplaythrough'] && this._handler['canplaythrough'].length) ||
                (this._handler['durationchange'] && this._handler['durationchange'].length);
          }
        });
        break;
      case AUDIO_MODE.NONE:
        J.Audio = J.Class({extend: BaseAudio}, {
          init: function (option) {
            console.log('Audio is not supported', 'Audio');
          }
        });
        break;
      default:
        break;
    }
  });

});

define('mq.view.audioNotification', [
  'jmAudio'
], function () {

  J.$package('mq.view.audioNotification', function (J) {
    var $A = J.Audio;

    var MSG_AUDIO_URL = '../audio/classic.mp3';

    this.init = function () {
      this.audio = new $A();
    };

    this.onAllMessageReceived = function (notNotify) {
      if (notNotify) {
        return;
      }
      this.audio.play(MSG_AUDIO_URL);
    };
  });

});

define('mq.view.desktopNotificationManager', [
  'jm'
], function () {
  J.$package('mq.view.desktopNotificationManager', function (J) {
    var packageContext = this,
        $T = J.type,
        win = window,
        nav = navigator,
        doc = document,
        PERMISSION_DEFAULT = 'default',
        PERMISSION_GRANTED = 'granted',
        PERMISSION_DENIED = 'denied',
        PERMISSION = [PERMISSION_GRANTED, PERMISSION_DEFAULT, PERMISSION_DENIED],
        defaultSetting = {
          // 0 means not to close automatically
          autoClose: 0,
          // whether detect page visibilify,
          // in case of `true`, notify only if page is hidden
          detectPageVisibilify: true
        },
        emptyObj = {},
        emptyString = '',
        isSupported = (function () {
          var isSupported = false;
          try {
            isSupported = !!(
                /*Safari, Chrome*/
                win.Notification
                /*Chrome, FF-html5notifications plugin*/
                || win.webkitNotifications
                /*Firefox Mobile*/
                || nav.mozNotification
            )
          }
          catch (e) {
          }
          return isSupported;
        })(),
        noop = function () {
        },
        settings = defaultSetting;

    // get `notification` object and show it
    function getNotification(title, options) {
      var notification;

      /*Safari 6, Chrome 23+*/
      if (win.Notification) {
        notification = new win.Notification(title, {
          icon: $T.isString(options.icon) ? options.icon : emptyString,
          body: options.body || emptyString,
          tag: options.tag || undefined
        });
      }
      /*Chrome, FF with html5Notifications plugin installed*/
      else if (win.webkitNotifications) {
        notification = win.webkitNotifications.createNotification(options.icon, title, options.body);
        notification.show();
      }
      /*Firefox Mobile*/
      else if (nav.mozNotification) {
        notification = nav.mozNotification.createNotification(title, options.body, options.icon);
        notification.show();
      }
      return notification;
    }

    function requestPermission(callback) {
      if (!isSupported) {
        return;
      }
      callback = $T.isFunction(callback) ? callback : noop;
      // `win.Notification.requestPermission` breaks the browsers in Chrome 23,
      // so give preference to `win.webkitNotifications.checkPermission`
      if (win.webkitNotifications && win.webkitNotifications.requestPermission) {
        // return win.webkitNotifications.requestPermission(callback);
        return win.webkitNotifications.requestPermission();
      }
      else if (win.Notification && win.Notification.requestPermission) {
        return win.Notification.requestPermission(callback);
      }
    }

    function permissionLevel() {
      var Notification;
      if (!isSupported) {
        return;
      }
      // w3c working draft
      if ((Notification = win.Notification) && Notification.permission) {
        return Notification.permission
      }
      // Chrome 22-, Firefox with html5-notifications plugin installed
      else if ((Notification = win.webkitNotifications) && Notification.checkPermission) {
        return PERMISSION[win.webkitNotifications.checkPermission()];
      }
      // Firefox Mobile
      else if (nav.mozNotification) {
        return PERMISSION_GRANTED;
      }
      // Safari 6
      else if ((Notification = win.Notification) && Notification.permission) {
        permission = Notification.permissionLevel();
      }
    }

    function config(params) {
      if (params && $T.isObject(params)) {
        J.extend(settings, params);
      }
      return settings;
    }

    function isDocumentHidden() {
      return doc.hidden || doc.mozHidden || doc.webkitHidden;
    }

    function getWrapper(noti) {
      if (!noti) return;
      return {
        primal: noti,
        close: function () {
          var ret;
          if ($T.isFunction(noti.close)) {
            ret = noti.close();
          }
          else if ($T.isFunction(noti.cancel)) {
            ret = noti.cancel();
          }
          if ($T.isNumber(this.timer)) {
            win.clearTimeout(this.timer);
          }
          return ret;
        },
        // useable events:
        // show, click, error, close
        on: function (eventType, handler) {
          if (eventType === 'show' && 'ondisplay' in noti) {
            eventType = 'display';
          }
          if (noti.addEventListener) {
            noti.addEventListener(eventType, handler, false);
          }
          else {
            noti['on' + eventType] = handler;
          }
        },
        once: function (eventType, handler) {
          var self = this;

          function f() {
            handler.apply(win, arguments);
            self.off(eventType, f);
          }

          this.on(eventType, f);
        },
        off: function (eventType, handler) {
          if (eventType === 'show' && 'ondisplay' in noti) {
            eventType = 'display';
          }

          if (noti.removeEventListener) {
            try {
              noti.removeEventListener(eventType, handler);
            } catch (e) {
              console.log('解绑桌面提醒成功');
            }

          }
          else {
            noti['on' + eventType] = null;
          }
        }
      }
    }

    function onShow(wrapper) {
      wrapper.timer = win.setTimeout(function () {
        wrapper.close();
      }, settings.autoClose);
    }

    // Return `undefined` if:
    // 1) notifications are not supported
    // 2) no permission for displaying notifications
    // 3) either `title` or `icon` is omitted
    function createNotificationWrapper(title, options) {
      var notification,
          notiWrapper;
      if (!isSupported
          || permissionLevel() !== PERMISSION_GRANTED) {
        return;
      }
      if (settings.detectPageVisibilify
          && !isDocumentHidden()) {
        return;
      }

      // arguments detection
      if ($T.isString(title)
          && (options && $T.isString(options.icon))) {

        notification = getNotification(title, options);
        notiWrapper = getWrapper(notification);
        // set auto-close
        // `settings.autoClose` is 0 default, whitch result in not
        if (settings.autoClose) {
          if (nav.mozNotification) {
            // there is no `show` event on mozilla notification object
            onShow(notiWrapper);
          }
          else {
            notiWrapper.on('show', function () {
              onShow(notiWrapper);
            });
          }
        }
      }
      return notiWrapper;
    }

    this.PERMISSION_DEFAULT = PERMISSION_DEFAULT;
    this.PERMISSION_GRANTED = PERMISSION_GRANTED;
    this.PERMISSION_DENIED = PERMISSION_DENIED;
    this.isSupported = isSupported;
    this.config = config;
    this.createNotificationWrapper = createNotificationWrapper;
    this.permissionLevel = permissionLevel;
    this.requestPermission = requestPermission;
  });
});
define('mq.view.desktopNotification', [
  './mq.view.desktopNotificationManager',
  './mq.presenter.chat'
], function () {
  J.$package("mq.view.desktopNotification", function (J) {
    var packageContext = this,
        $E = J.event,
        $D = J.dom,
        $DN = mq.view.desktopNotificationManager,
        win = window,
        doc = win.document,
        translateMessage2Text = mq.presenter.chat.translateMessage2Text,
        notiWrapperQueue = [],
        QUEUE_MAX = 3;

    var handlers = {
      // 当一个提醒关闭时，将其从队列中移除。
      // 该提醒可能不在队首，因为自动关闭是异步的
      onClose: function (event) {
        var noti = event.target,
            i = packageContext.getNotificationIndex(noti);
        if (i < 0) {
          return;
        }

        notiWrapperQueue.splice(i, 1);
      },
      // 当浏览器导航到新的页面时，关闭原有页面的全部提醒
      onBeforeUnload: function () {
        J.each(notiWrapperQueue, function (notiWrapper) {
          notiWrapper.close();
        });
      }
    };

    this.init = function () {
      // Desktop notification
      $DN.config({
        // notify only when page is hidden
        detectPageVisibilify: true,
        autoClose: 3000
      });
      // after user login, if permission level is default,
      // invoke the `requestPermission` method in a handler of user gesture event to make this method effective
      if ($DN.permissionLevel() === $DN.PERMISSION_DEFAULT) {
        $E.once(doc.querySelector('body'), J.platform.touchDevice ? 'tap' : 'click', function () {
          $DN.requestPermission();
        });
      }
      // if notifications are not closed when page unload,
      // they will not auto-close since the timeout handlers we set have been destroyed,
      // so wo need to close them manually
      $E.on(win, 'beforeunload', handlers.onBeforeUnload);
    };

    this.onAllMessageReceived = function (data, notNotify) {
      if (notNotify
          || !$DN.isSupported
          || $DN.permissionLevel() !== $DN.PERMISSION_GRANTED) {
        return;
      }

      this.appendNotification(data);
    };

    this.appendNotification = function (data) {
      var notiWrapper, first;
      if (notiWrapperQueue.length === QUEUE_MAX) {
        notiWrapperQueue[0].close();
      }
      notiWrapper = $DN.createNotificationWrapper(data.name, {
        icon: data.avatar,
        body: translateMessage2Text(data)
      });
      if (notiWrapper) {
        notiWrapper.once('close', handlers.onClose);
        notiWrapperQueue.push(notiWrapper);
      }
    };

    this.getNotificationIndex = function (noti) {
      var i, queue = notiWrapperQueue;
      for (i = 0; i < queue.length; ++i) {
        if (noti === queue[i].primal) {
          return i;
        }
      }
      return -1;
    };
  });
});

define('mq.presenter.notification', [
  './mq.model.chat',
  './mq.model.memberlist',
  './mq.view.desktopNotification',
  './mq.view.audioNotification'
], function () {
  // 新消息到达时弹窗提示/声音提示的presenter类
  J.$package('mq.presenter.notification', function (J) {
    var packageContext = this,
        $E = J.event;

    var handlers = {
      onAllMessageReceived: function (message) {
        var chatModel = packageContext.chatModel,
            buddylistModel = packageContext.buddylistModel,
            from = message.from_group || message.from_user || message.from_discuss,
            sender = buddylistModel.getBuddyInfo(from.account, from.type),
            data = {
              content: message.content,
              avatar: sender.avatar,
              name: sender.name
            },
            notNotify = message.notNotify;

        // Desktop notification
        packageContext.desktopView.onAllMessageReceived(data, !mq.setting.enableNotification || notNotify);

        // Audio notification
        packageContext.audioView.onAllMessageReceived(!mq.setting.enableVoice || notNotify);
      }
    };

    this.init = function () {
      this.chatModel = mq.model.chat;
      this.buddylistModel = mq.model.buddylist;
      this.desktopView = mq.view.desktopNotification;
      this.audioView = mq.view.audioNotification;
      this.bindHandlers();
    };

    this.bindHandlers = function () {
      var m = this.chatModel,
          $e = $E;

      $e.on(m, 'allMessageReceived', handlers.onAllMessageReceived);
    }
  });
});


define('tmpl!../tmpl/tmpl_notify_setting.html', [], function () {
  return function (obj) {
    var __t, __p = '', __j = Array.prototype.join, print = function () {
      __p += __j.call(arguments, '');
    };
    with (obj || {}) {
      __p += '\r\n<div class="group">\r\n    <div class="row clearfix">\r\n        <span class="label">' +
          ((__t = ($M('voice'))) == null ? '' : __t) +
          '</span>\r\n        <label class="switch switch-white" cmd="clickVoiceSetting">\r\n            <input id="enableVoiceBtn" type="checkbox" ' +
          ((__t = (data.enableVoice ? "checked" : "" )) == null ? '' : __t) +
          '>\r\n            <span/>\r\n        </label>\r\n    </div>\r\n    <div class="row clearfix">\r\n        <span class="label">' +
          ((__t = ($M('notification'))) == null ? '' : __t) +
          '</span>\r\n        <label class="switch switch-white" cmd="clickNotificationSetting">\r\n            <input id="enableNotificationBtn" type="checkbox" ' +
          ((__t = (data.enableNotification ? "checked" : "" )) == null ? '' : __t) +
          '>\r\n            <span/>\r\n        </label>\r\n    </div>\r\n</div>\r\n\r\n<div class="group">\r\n    <div class="row">\r\n        <div class="clearfix">\r\n            <span class="label">' +
          ((__t = ($M('https_setting'))) == null ? '' : __t) +
          '</span>\r\n            <label class="switch switch-white" cmd="clickHttpsSetting">\r\n                <input id="enableHttpsBtn" disabled="disabled" type="checkbox" checked>\r\n                <span/>\r\n            </label>\r\n        </div>\r\n        <div class="tips">' +
          ((__t = ($M('https_msg'))) == null ? '' : __t) +
          '</div>\r\n    </div>\r\n</div>\r\n';
      if (!J.platform.touchDevice) {
        __p += '\r\n<div class="group">\r\n    <div class="row">\r\n        <div class="clearfix">\r\n            <span class="long_label">' +
            ((__t = ($M('send_msg_way'))) == null ? '' : __t) +
            '</span>\r\n            <label class="switch switch-white" cmd="clickCtrlEnterSetting">\r\n                <input id="enableCtrlEnterBtn" type="checkbox" ' +
            ((__t = (data.enableCtrlEnter ? "checked" : "" )) == null ? '' : __t) +
            '>\r\n                <span/>\r\n            </label>\r\n        </div>\r\n    </div>\r\n</div>\r\n';
      }
      __p += '\r\n';
    }
    return __p;
  };
});

define('mq.view.notifySetting', [
  'tmpl!../tmpl/tmpl_notify_setting.html',
  "./mq.i18n",
  "./mq.view.transitionmanager"
], function (tmplNotifyBody) {
  J.$package("mq.view.notifySetting", function (J) {
    var packageContext = this;
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http,
        $S = JM.string;

    var $M = mq.i18n.message,
        $T = mq.templateManager;

    var enableVoiceBtn, enableNotificationBtn, enableHttpsBtn;

    this.createPanel = function () {
      if (!this.panel) {
        var option = {
          id: "notifySetting",
          parent: mq.view.main.container,
          className: 'profile-panel',
          title: $M('notify_setting'),
          body: {
            className: 'list_page notify_setting'
          },
          hasBackButton: true,
          hasScroller: true
        };
        this.panel = new mq.view.TitlePanel(option);
        bindHandlers();
      }
      return this.panel;
    }

    this.init = function () {

    }

    var commands = {
      clickLeftButton: function () {
        currentProfile = null;
        mq.view.transitionManager.pop('notifySetting');
        $E.fire(packageContext, 'dismiss');
      },
      clickVoiceSetting: function (param, target, event) {
        $E.fire(packageContext, 'settingChange', {
          enableVoice: enableVoiceBtn.checked || false
        });
      },
      clickNotificationSetting: function () {
        $E.fire(packageContext, 'settingChange', {
          enableNotification: enableNotificationBtn.checked || false
        });
      },
      clickHttpsSetting: function () {
        /*$E.fire(packageContext, 'settingChange', {
         enableHttps: enableHttpsBtn.checked || false
         });*/
      },
      clickCtrlEnterSetting: function () {
        $E.fire(packageContext, 'settingChange', {
          enableCtrlEnter: enableCtrlEnterBtn.checked || false
        });
      }
    };

    var bindHandlers = function () {
      $E.bindCommands(packageContext.panel.container, commands);
    }

    this.show = function (obj) {
      var panel = this.createPanel();
      panel.setLeftText(obj.from || $M('return'));
      var tmpl = tmplNotifyBody;
      panel.body.innerHTML = tmpl({encode: $S.encodeHtml, $M: $M, data: obj.setting});
      enableVoiceBtn = $D.id('enableVoiceBtn');
      enableNotificationBtn = $D.id('enableNotificationBtn');
      enableHttpsBtn = $D.id('enableHttpsBtn');

      mq.view.transitionManager.push({
        id: 'notifySetting',
        element: this.panel.container,
        callback: function () {
          panel.scroller.refresh();
        }
      });
    }
  });
})
;
define('mq.presenter.notifySetting', [
  "./mq.i18n",
  "./mq.view.transitionmanager"
], function () {
  J.$package("mq.presenter.notifySetting", function (J) {
    var packageContext = this;
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http,
        $S = JM.string;

    var $M = mq.i18n.message,
        $T = mq.view.templateManager;

    var currentProfile = null;

    this.init = function () {
      this.view = mq.view.notifySetting;
      bindHandlers();
    }

    var handlers = {
      onViewNotifySetting: function (obj) {
        if (!obj) {
          obj = {};
        }
        obj.setting = mq.setting;
        packageContext.view.show(obj);

      },
      onSettingChange: function (setting) {
        mq.saveSetting(setting);
      }
    }

    var bindHandlers = function () {
      $E.on(mq.view, 'viewNotifySetting', handlers.onViewNotifySetting);
      $E.on(packageContext.view, 'settingChange', handlers.onSettingChange);
    }
  });
});


define('tmpl!../tmpl/tmpl_main_footer.html', [], function () {
  return function (obj) {
    var __t, __p = '', __j = Array.prototype.join, print = function () {
      __p += __j.call(arguments, '');
    };
    with (obj || {}) {
      __p += '<nav id="nav_tab">\r\n    <ul class="nav_tab_head">\r\n        ';
      for (var i = 0, item; item = items[i]; i++) {
        __p += '\r\n        <li id="' +
            ((__t = (item.id )) == null ? '' : __t) +
            '" class="' +
            ((__t = (item.className )) == null ? '' : __t) +
            '" cmd="clickNav" param="' +
            ((__t = (item.id )) == null ? '' : __t) +
            '">\r\n            <a>\r\n                <div class="icon"></div>\r\n                <span>' +
            ((__t = (item.text )) == null ? '' : __t) +
            '</span>\r\n            </a>\r\n        </li>\r\n        ';
      }
      __p += '\r\n    </ul>\r\n    <div class="wallpaper-ctrl">\r\n        <a href="###" class="wallpaperImg pre" id="wp-ctrl-pre" title="点击切换背景图片" cmd="clickWPPre"> </a>\r\n        <a href="###" class="wallpaperImg next" id="wp-ctrl-next" title="点击切换背景图片" cmd="clickWPNext"> </a>\r\n    </div>\r\n    <div class="suggestion"><a href = "https://support.qq.com/discuss/513_1.shtml" target="_blank">意见反馈</a></div>\r\n</nav>\r\n\r\n';
    }
    return __p;
  };
});

define('mq.view.main', [
      'tmpl!../tmpl/tmpl_main_footer.html',
      "./mq.i18n",
      "./mq.view.transitionmanager"
    ],
    function (tmplMainFooter) {
      J.$package("mq.view.main", function (J) {
        var packageContext = this;
        var MAX_BG_NUM = 28;
        var newBgImagePath = 'img/bg/';
        var newBgImageNum,
            localNewBg,
            localFlag;
        var localBgImage = window.localStorage.localBgImage;

        var $E = JM.event,
            $D = JM.dom,
            $H = JM.http,
            $S = JM.string;

        var $M = mq.i18n.message,
            $T = mq.templateManager;


        this.init = function () {
          var container, self = this;

          this.container = $D.id('container');

          //在催，这块先这样hack了，可能会导致其他问题，之后看看怎么改
          if (!J.platform.touchDevice) {
            if (window.innerWidth > 1000) {
              container = $D.id("main_container");
            }
            else {
              container = $D.id('container');
            }

            $E.on(window, "resize", function () {
              var mainPannel = $D.className("main-panel", document.body)[0];
              if (window.innerWidth < 1000) {
                container = $D.id('container');
                container.appendChild(mainPannel);
              }
              else {
                container = $D.id("main_container");
                container.appendChild(mainPannel);
              }
            });
          }
          else {
            container = $D.id('container');
          }

          var option = {
            parent: container,
            hasHeader: false,
            className: 'main-panel'
          };


          var navData = [{
            id: 'session',
            className: 'contact',
            text: $M('session')
          }, {
            id: 'contact',
            className: 'conversation',
            text: $M('contact')
          }, {
            id: 'plugin',
            className: 'plugin',
            text: $M('plugin')
          }, {
            id: 'setting',
            className: 'setup',
            text: $M('setting')
          }
          ];
          var navHtml = tmplMainFooter({items: navData});
          option.footer = {html: navHtml};

          var mainPanel = new mq.view.TitlePanel(option);

          this.body = mainPanel.body;

          //创建PC头部
          this.body.innerHTML = "<div id='mainTopAll'></div>";

          //添加主要UI
          var navNode = $D.id('nav_tab');
          var itemNode = navNode.children[0].children;
          var tabItems = [], panel;
          for (var i = 0, node; node = itemNode[i]; i++) {
            panel = mq.view[navData[i].id].createPanel(mainPanel.body);
            tabItems.push({
              id: navData[i].id,
              trigger: node,
              sheet: panel.container
            });
          }

          //底部总导航tab
          var nav = this.nav = new MUI.Tab({
            items: tabItems
          });

          $E.bindCommands(navNode, commands);
          bindHandlers();

          mainPanel.show();
          mq.view.transitionManager.push({
            id: 'main',
            element: mainPanel.container,
            transition: false
          });
          nav.select(0);

          if ($D.id('bgAllImage') && !J.platform.IOS && !J.platform.android && !J.platform.winPhone) {
            //判断本地存储背景
            var isLocalBg = (localBgImage ? localBgImage : "1");
            //壁纸随机显示
            newBgImageNum = parseInt(Math.random() * MAX_BG_NUM);
            // var newBgImage = newBgImagePath + newBgImageNum + '.jpg';
            var newBgImage = newBgImagePath + isLocalBg + '.jpg';//这里不随机了，超叔不爱美女爱木板
            var bgAllImg = document.createElement('img');
            bgAllImg.setAttribute('class', 'bgAllImage');
            bgAllImg.src = newBgImage;
            $D.id('bgAllImage').appendChild(bgAllImg);
          }


        }
        //背景图片保存为本地
        var setLocalBg = function () {
          setTimeout(function () {
            if (localNewBg == newBgImageNum) {
              if (window.localStorage) {
                window.localStorage.setItem("localBgImage", localNewBg);
              }
            } else {
              localNewBg = newBgImageNum;
              setLocalBg();
            }
          }, 8000);
        }
        var commands = {
          clickNav: function (param, target, e) {
            packageContext.nav.select(param);
          },
          clickWPPre: function () {
            if (newBgImageNum === 0) {
              newBgImageNum = MAX_BG_NUM;
              $D.id('bgAllImage').innerHTML = "<img class='bgAllImage' src='" + newBgImagePath + newBgImageNum + ".jpg'/>";
            } else {
              newBgImageNum--;
              $D.id('bgAllImage').innerHTML = "<img class='bgAllImage' src='" + newBgImagePath + newBgImageNum + ".jpg'/>";
            }
            if (!localFlag) {
              localNewBg = newBgImageNum;
              localFlag = true;
            }
            setLocalBg();

          },
          clickWPNext: function () {
            if (newBgImageNum === MAX_BG_NUM) {
              newBgImageNum = 0;
              $D.id('bgAllImage').innerHTML = "<img class='bgAllImage' src='" + newBgImagePath + newBgImageNum + ".jpg'/>";
            } else {
              newBgImageNum++;
              $D.id('bgAllImage').innerHTML = "<img class='bgAllImage' src='" + newBgImagePath + newBgImageNum + ".jpg'/>";
            }
            if (!localFlag) {
              localNewBg = newBgImageNum;
              localFlag = true;
            }
            setLocalBg();
          }
        };

        var handlers = {
          onNavItemSelected: function (obj) {
            var cid = obj.current.id;
            if (mq.view[cid]) {
              $E.fire(mq.view[cid], 'show');
            }
          },
          onTransitionEnd: function (obj) {
            if (obj.to === 'main') {
              var selectedObj = packageContext.nav.getSelected();
              var cid = selectedObj.item.id;
              if (mq.view[cid]) {
                $E.fire(mq.view[cid], 'show');
              }
            }
          },
          closeHook: function () {
            if (mq.main.isOnline()) {
              return $M('beforeclose');
            }
          }
        }

        var bindHandlers = function () {
          $E.on(packageContext.nav, 'selected', handlers.onNavItemSelected);
          $E.on(mq.view.transitionManager, 'transitionEnd', handlers.onTransitionEnd);
          $E.on(window, "beforeunload", handlers.closeHook);

        }


        this.showGuide = function () {
          var guide = $D.id('guide');

          var container = $D.id('container');
          var main_container = $D.id('main_container');

          var pf = navigator.platform;
          var name = (window.orientation != undefined) ? 'iPod' : (pf.match(/mac|win|linux/i) || ['unknown'])[0];
          if (!name.match(/mac|win|linux/i)) {
            $D.setStyle($D.id('qrcode'), 'display', 'none');
          }
          $D.setStyle(guide, 'display', 'block');
          $D.setStyle(container, 'display', 'none');
          $D.setStyle(main_container, 'display', 'none');

        }

        this.removeGuide = function () {
          var guide = $D.id('guide');
          var container = $D.id('container');
          var main_container = $D.id('main_container');
          if (guide) {
            guide.parentNode.removeChild(guide);
          }
          $D.setStyle(container, 'display', 'block');
          $D.setStyle(main_container, 'display', 'block');

        }

        this.setOnlineState = function (state) {
          if (!this.onlineState) this.onlineState = $D.id("user_online_state");
          this.onlineState.className = "state_" + state;
        }

        var messageBubble = {
          init: function () {
            this._init = true;
            var el = this._el = document.createElement('div');
            el.setAttribute('class', 'message_bubble');
            el.innerHTML = '<div class="message_body"><div cmd="closeBubble" class="close" title="关闭">X</div><div class="message_content"></div></div>';
            this._msgEl = el.firstChild.lastChild;
            var context = this;
            $E.bindCommands(el.firstChild, {
              closeBubble: function () {
                context.hide();
              },
              gotoLogin: function () {
                mq.main.gotoLogin();
              }
            });
            document.body.appendChild(el);
          },
          show: function (message, timeout) {
            if (!this._init) {
              this.init();
            }
            if (this._timeout) {
              clearTimeout(this._timeout);
            }
            this._msgEl.innerHTML = message;
            var context = this;
            if (timeout) {
              this._timeout = setTimeout(function () {
                context.hide();
                context._timeout = 0;
              }, timeout);
            }
            $D.addClass(this._el, 'show');
          },
          hide: function () {
            if (this._init) {
              $D.removeClass(this._el, 'show');
            }
          }
        };

        mq.bubble = function (message, timeout) {
          messageBubble.show(message, timeout);
        }

        mq.hideBubble = function () {
          messageBubble.hide();
        }


      });
    })

;
define('mq.view.loginPanel', [
      "./mq.i18n",
      "./mq.view.transitionmanager"
    ],
    function () {
      J.$package("mq.view.loginPanel", function (J) {
        var packageContext = this;

        // var LOGIN_URL = 'https://ui.ptlogin2.qq.com/cgi-bin/login?';
        var LOGIN_URL = 'https://xui.ptlogin2.qq.com/cgi-bin/xlogin?';

        var $E = JM.event,
            $D = JM.dom,
            $H = JM.http,
            $S = JM.string;

        var $M = mq.i18n.message,
            $T = mq.templateManager;

        var panelEl,
            maskerEl;

        var panelHTML = '<iframe name="ptlogin" noscroll frameborder="0" style="position:' +
            'absolute;width:100%;height:100%;border:0;"></iframe>' +
            '';// '<div class="close-login-panel"></div>';

        this.init = function () {

        }


        this.show = function () {
          if (!maskerEl) {
            createDom();
          }

          panelEl.firstChild.src = getLoginUrl();
          $D.setStyle(maskerEl, 'display', 'block');
          $D.setStyle(panelEl, 'display', 'block');

          var loginTitle = document.createElement('div');
          loginTitle.setAttribute('id', 'loginTitle');
          loginTitle.setAttribute('class', 'login-title');
          loginTitle.innerHTML = 'Smart QQ';
          document.body.appendChild(loginTitle);

          setTimeout(function () {
            $D.addClass(panelEl, 'show');
          }, 0);
        }

        this.hide = function () {
          maskerEl && $D.setStyle(maskerEl, 'display', 'none');
          panelEl && $D.setStyle(panelEl, 'display', 'none');
          $D.removeClass(panelEl, 'show');
        }

        var createDom = function () {
          maskerEl = document.createElement('div');
          maskerEl.setAttribute('class', 'masker');

          document.body.appendChild(maskerEl);

          panelEl = document.createElement('div');
          panelEl.setAttribute('class', 'login-panel');
          panelEl.innerHTML = panelHTML;

          $E.on(panelEl.lastChild, 'click', onPanelClose);

          document.body.appendChild(panelEl);

        }

        var onPanelClose = function () {
          packageContext.hide();
        }

        var getLoginUrl = function () {
          var params = {
            daid: 164,
            target: 'self',
            style: 40,
            mibao_css: 'm_webqq',
            appid: 501004106,
            enable_qlogin: 0,
            no_verifyimg: 1,
            s_url: location.protocol + '//w.qq.com/proxy.html',
            f_url: 'loginerroralert',
            strong_login: 1,
            login_state: 10,
            t: 20131024001
          };
          return LOGIN_URL + $H.serializeParam(params);
        }
      })
    });


// Copyright (c) 1998 - 2011 Tencent Research. All Rights Reserved.

/**
 * @name        QPlus Tracker
 * @namespace   window.qplus
 * @author      Du Wei <DeewiiDu@Tencent.com>
 * @description Tracker for report
 * @requires    N/A
 * @constructor
 * @version     1.5.0
 * @url         http://cdn.qplus.com/js/qplus.api.js
 * @changelog
 *              Ver 0.1.0 @ 2011-9-15    Initialize release
 */

define('qtracker', [], function () {
  ;
  (function (QP, undefined) {
    var ref;

    if (!window[QP]) {
      ref = window[QP] = {};
    }

    var Q = {
      utils: {
        halt: function () {
          //pass for console log
        }
      }
    }


    var emptyfunc = function () {
    };

    // isd page Class
    // isd 页面对应上报代码
    var pageItemsHash = {};
    // {
    //     'system_load' : 1,
    //     'load_plugin_list' : 2,
    //     'load_email_account_list' : 3,
    //     'loadd_feed_list' : 4,
    //     'create_index_ui' : 5,
    //     'sort_plugins_feeds' : 6
    // };

    //Class
    var Class = function (proto, superClass) {
      var newfunc = function () {
        if (this instanceof arguments.callee) {
          if (this.__init__) {
            this.__init__.apply(this, arguments);
          }
        } else {
          throw new Error('You must new an instance');
        }
      };
      if (superClass) {
        newfunc.prototype = new superClass();
        for (var k in proto) {
          if (proto.hasOwnProperty(k)) {
            if (k == '__init__') {
              var superInit = newfunc.prototype.__init__;
              var init = proto[k];
              if (superInit) {
                newfunc.prototype.__init__ = function () {
                  superInit.apply(this, arguments);
                  init.apply(this, arguments);
                }
                continue;
              }
            }
            newfunc.prototype[k] = proto[k];
          }
        }
      } else {
        newfunc.prototype = proto;
      }
      return newfunc;
    };
    //virtual Transport Class
    var Transport = Class({
      send: function () {
        throw new Error('This method should be rewrite!');
      }
    });
    //one instance for one kind of report
    var ImgTransport = Class({
      __init__: function (option) {
        option = option || {};
        this._initOption(option);
        var size = this.size;
        this.len = size - 1;
        this.array = [];
        this.array[size - 1] = undefined;
        this.pointer = 0;
        this.errors = 0;
      },
      _initOption: function (option) {
        //pick one careful, equal to requests count per second plus timeout(in seconds) plus 2
        this.size = option.size || 20;
        this.timeout = option.timeout || 3; //limit for error check
        this.errorMax = option.errormax || 10; //reach and stop
      },
      send: function (url) {
        var p = this.pointer,
            i = 0,
            len = this.len,
            array = this.array;
        for (; i <= len; i++) {
          p = p + 1 > len ? p - len : p + 1;
          Q.utils.halt('check if ' + p + ' is free.');
          if (this._isFree(array[p], p)) {
            this.pointer = p;
            this._send(url, p);
            Q.utils.halt(p + ' is free!');
            break;
          }
          /*else if(i==len) {
           }else {
           }*/
        }
      },
      _onError: function () {
        this.errors++;
        if (this.errors >= this.errorMax) {
          //rewrite
          this.send = emptyfunc;
          Q.utils.halt('stop report');
        }
      },
      _isFree: function (a, p) {
        if (a && 'ts' in a && +(new Date()) - a.ts < this.timeout * 1000) {
          return false;
        } else if (a && 'ts' in a) {
          if (!a.finish) {
            this._onError();
            this._setFree(p);
            Q.utils.halt('report time out!');
            return false;
          }
          return true;
        }
        return true;
      },
      _setFree: function (p) {
        this.array[p].finish = true;
      },
      release: (function () {
        return window.CollectGarbage ? window.CollectGarbage : function () {
        };
      })(),
      _send: function (url, p) {
        var a = this.array[this.pointer];
        if (a && 'ts' in a) {
          //pass
        } else {
          a = this.array[this.pointer] = {};
          a.dom = new Image();
          var _this = this;
          a.dom.onload = function () {
            a.finish = true;
          }
          a.dom.onerror = function () {
            a.finish = true;
          }
        }
        a.ts = +(new Date());
        a.dom.src = url + '&t=' + a.ts;
        a.finish = false;
      }
    }, Transport);

    /**
     * @description isd 上报模块
     * @example 1
     *      var isd = qplus._.tracker.Isd;
     *      var page = isd.registerPage('index.html(deploy)', [7818, 7, 6]);
     *      page.add('vm_freeze_time', 30, null);
     *      page.add('vm_freeze_time', null, 60);
     *      page.add('app_loading_time', 50, 350);
     *      page.add('app_freeze_time', 30, 260);
     *      page.send();
     * @example 2
     *      var isd = qplus._.tracker.Isd;
     *      isd.registerPage('index.html(deploy)', [7818, 7, 6]);
     *      isd.add('index.html(deploy)', 'vm_freeze_time', 30, null);
     *      isd.add('index.html(deploy)', 'vm_freeze_time', null, 60);
     *      isd.add('index.html(deploy)', 'app_loading_time', 50, 350);
     *      isd.add('index.html(deploy)', 'app_freeze_time', 30, 260);
     *      isd.send('index.html(deploy)');
     * @example 3
     *      var isd = qplus._.tracker.Isd;
     *      var page = isd.registerPage('index.html(deploy)', [7818, 7, 6]);
     *      page.add('vm_freeze_time', 30, null);
     *      page.add('vm_freeze_time', null, 60, true); //send immediately
     *      page.add('app_loading_time', 50, 350);
     *      page.add('app_freeze_time', 30, 260, true); //send immediately
     */
    var Isd = Class({
      __init__: function (option) {
        option = option || {};
        this.interval = option.interval || 10; //not used
        this.urlLimit = option.urlLimit || 1024;//not used
        this.errorTimeout = option.errorTimeout || 4;//not used
        this.transport = new ImgTransport();
        this.urlHead = 'https://isdspeed.qq.com/cgi-bin/r.cgi?';
        this.pages = {};
      },
      registerPage: function (page, flags) {
        return this.pages[page] = new IsdPage({
          transport: this.transport,
          urlHead: this.urlHead,
          flags: flags
        });
      },
      add: function (page) {
        var page = this.pages[page];
        console.info(page, this.pages[page], this.pages);
        if (page) {
          page.add.apply(page, Array.prototype.slice.call(arguments, 1));
        } else {
          throw new Error('No such Page!Check the page name.');
        }
      },
      send: function (page) {
        var page = this.pages[page];
        if (page) {
          page.send();
        } else {
          throw new Error('No such Page!Check the page name.');
        }
      }
    });

    var IsdPage = Class({
      __init__: function (option) {
        this.transport = option.transport;
        var flags = [];
        for (var i = 0; i < option.flags.length; i++) {
          flags.push('flag' + (1 + i) + '=' + option.flags[i]);
        }
        this.urlHead = option.urlHead + flags.join('&') + '&';
        this.itemsHash = {};
      },
      /**
       * @param {String} name name of time-point in {pageItemsHash}
       * @param {Number} start_time start timestamp, can be empty
       * @param {Number} end_time end timestamp, can be empty
       * @param {Boolean} is_report_immediately is report immediately?
       */
      add: function (name, start_time, end_time, is_report_immediately) {
        var i = this.itemsHash[name] = this.itemsHash[name] || [];
        i[0] = i[0] || pageItemsHash[name];
        i[2] = start_time || i[2];
        i[3] = end_time || i[3];
        i[1] = i[3] - i[2];
        if (is_report_immediately) {
          this.send();
        }
      },
      send: function (v) {
        var url = this.urlHead;
        var arr = [];
        for (var k in this.itemsHash) {
          if (this.itemsHash.hasOwnProperty(k)) {
            if (v = this.itemsHash[k]) {
              if (!isNaN(v[1])) { //if time diff correct
                arr.push(v.slice(0, 2).join('='));
                delete this.itemsHash[k];
              }
            }
          }
        }
        if (arr.length) {
          this.transport.send(url + arr.join('&'));
        }
      },
      disable: function () {
        if (!this.isDisable) {
          this.add = this.send = emptyfunc;
          this.isDisable = true;
        }
      }
    });
    ref.setPageItemsHash = function (hash) {
      pageItemsHash = hash;
    }
    ref.tracker = {
      "Isd": new Isd({
        //pass
      }),
      "Img": new ImgTransport()
    };
  })("qtracker");

})

;
define('mq.main', [
  'tmpl!../tmpl/tmpl_main_top.html',
  '../lib/mui/js/mui.tab',
  '../lib/mui/js/mui.textarea',
  '../lib/mui/js/mui.lazyload',
  '../lib/mui/js/mui.imagechange',
  '../lib/mui/js/mui.slide',
  '../lib/mui/js/mui.swipechange',

  "./mq.i18n",
  "./mq.view.transitionmanager",
  "./mq.util",

  "./mq.view.TitlePanel",
  "./mq.rpcservice",

  "./mq.view.MemberList",
  "./mq.model.memberlist",
  "./mq.presenter.memberlist",

  "./mq.model.chat",
  "./mq.view.chat",
  "./mq.presenter.chat",

  "./mq.presenter.search",
  "./mq.view.search",

  "./mq.presenter.profile",
  "./mq.view.profile",

  "./mq.view.member",
  "./mq.presenter.member",


  "./mq.model.record",
  "./mq.view.record",
  "./mq.presenter.record",

  "./mq.view.session",
  "./mq.view.contact",
  "./mq.view.setting",
  "./mq.presenter.setting",

  "./mq.presenter.pluginDisplayer",
  "./mq.view.plugin",
  "./mq.view.pluginDisplayer",

  "./mq.view.audioNotification",
  "./mq.view.desktopNotificationManager",
  "./mq.view.desktopNotification",
  "./mq.presenter.notification",

  "./mq.view.notifySetting",
  "./mq.presenter.notifySetting",

  "./mq.view.main",
  "./mq.view.loginPanel",
  "./mq.main",

  "./qtracker"

], function (tmplMainTop) {
  //login
  J.$package("mq.main", function (J) {
    var $E = JM.event,
        $D = JM.dom,
        $H = JM.http,
        $S = JM.string;

    // var $T = mq.templateManager;
    // var JUMP_TO_LOGIN = "https://xui.ptlogin2.qq.com/cgi-bin/xlogin?target=self&style=5&mibao_css=m_webqq&appid=1003903&enable_qlogin=0&no_verifyimg=1&s_url=http%3A%2F%2Fw.qq.com%2Findex.html&f_url=loginerroralert&strong_login=1&login_state=10&t=20130417001";
    // var JUMP_TO_LOGIN = "./login.html";
    // var JUMP_TO_LOGIN = "http://w.qq.com/login.html";

    var packageContext = this;

    var pollState = 'poll';
    var currentOnlineState;
    var reLinkMaxCount = 3;
    var reLinkRetryCount = 0;

    //加载后触发函数
    var load_callback = function (arr, func) {
      var count = arr.length;
      //所有ajax请求返回需要执行的callback
      var count_callback = function () {
        count--;
        if (count == 0) {
          //所有ajax请求返回之后的再执行的回调函数
          func();
        }
      };

      J.each(arr, function (f) {
        f(count_callback);
      });

    };

    var sortMessage = function (a, b) {
      var c, d;
      c = a.value && a.value.time || 0;
      d = b.value && b.value.time || 0;
      return (c < d) ? 1 : -1;
    };

    var commands = {}

    var handlers = {
      //登录成功回调
      onLoginSuccess: function (data) {

        var result = data.result;
        //登录成功到拉取最近联系人时间
        speedTempCache["7832-22-1"]["3"] = Date.now();

        //设置票据
        packageContext.setValidate({
          psessionid: result.psessionid
        });

        mq.port = result.port;
        mq.index = result.index;

        //主界面的初始化
        mq.view.main.init();
        //主列表初始化
        mq.view.contact.init();
        mq.view.session.init();
        mq.presenter.buddylist.init();

        mq.model.buddylist.init({
          selfUin: result.uin
        });

        //AIO初始化
        mq.model.chat.init();
        mq.view.chat.init();
        mq.presenter.chat.init();
        //Search模块初始化
        mq.view.search.init();
        mq.presenter.search.init();
        //详细资料模块初始化
        mq.view.profile.init();
        mq.presenter.profile.init();
        //设置模块初始化
        mq.view.setting.init();
        mq.presenter.setting.init();
        //成员列表初始化
        mq.presenter.member.init();
        //聊天记录初始化
        mq.presenter.record.init();
        //plugin模块初始化
        mq.view.plugin.init();
        mq.view.pluginDisplayer.init();
        mq.presenter.pluginDisplayer.init();
        //notification模块初始化
        mq.view.audioNotification.init();
        mq.view.desktopNotification.init();
        mq.presenter.notification.init();

        mq.presenter.notifySetting.init();

        var member_m = mq.model.buddylist

        //  获取好友,获取群,获取讨论组 都获取完成之后获取最近联系人
        load_callback([member_m.getUserFriends(), member_m.getGroupList(), member_m.getDiscussList()], function () {

          // 获取最近联系人（返回结果依赖于好友，群，讨论组返回保存的数据结果）
          member_m.sendGetBuddyOnlineState();
          member_m.getRecentList(function () {

            // 最近联系人拉取到才开始poll
            packageContext.startPoll();
          });
        });
        //获取个人资料
        member_m.sendGetSelfInfo();


        //登陆成功事件通知
        $E.fire(packageContext, "loginSuccess", {
          selfUin: result.uin
        });
        if ($D.id('mainTopAll') && !J.platform.IOS && !J.platform.android && !J.platform.winPhone) {
          var mainTopAllCom = $D.id('mainTopAll');
          $E.bindCommands(mainTopAllCom, commands);
        }
        currentOnlineState = result.status;
      },
      onGetVfWebQQSuccess: function (data) {//cgi发布后 login2的cgi拿到的vfwebQQ是错的，暂时通过单独的getvfwebqq接口拉取vfwebqq
        var result = data.result;
        packageContext.setValidate({vfwebqq: result.vfwebqq});
        mq.rpcService.login();
      },
      onGetVfWebQQFailure: function (data) {
        packageContext.gotoLogin();
      },
      onLoginFailure: function (data) {
        packageContext.gotoLogin();
      },
      //Poll拉取成功回调
      onPollSuccess: function (result) {
        if (!result) {
          return;
        }
        //聊天消息会有乱序问题, 重新按时间排序
        result.sort(sortMessage);

        for (var i = 0, r; r = result[i]; i++) {
          switch (r.poll_type) {
            case "sess_message":
            case "message":
            case "group_message":
            case "discu_message":
              $E.fire(packageContext, "receiveMessage", r);
              break;
            case "kick_message":
              // 被踢线了
              packageContext.stopPoll();
              packageContext.logout();
              mq.log('kick message');
              $E.fire(packageContext, "SelfOffline", {message: r.value.reason, action: 'relogin'});
              break;
            case "system_message" ://收到系统消息
              break;
            case "filesrv_transfer": // 文件传输信息
            case "file_message" : // 文件信道通知
            case "push_offfile" : // 收到离线文件消息
            case "notify_offfile" : // 对方拒绝或成功接收离线文件通知消息
              $E.fire(packageContext, "receiveFileMessage", r);
              break;

          }
        }
      },
      onPollComplete: function (data) {
        packageContext.keepPoll();
      },
      onGetFirstSelfInfo: function (obj) {

        //判断是否为PC
        if ($D.id('mainTopAll') && !J.platform.IOS && !J.platform.android && !J.platform.winPhone) {
          // var tmplMainTop = $T.get('tmpl_main_top');
          $D.id('mainTopAll').innerHTML = tmplMainTop({user: obj, encode: $S.encodeHtml});

          mq.view.main.setOnlineState(currentOnlineState);
        }
      },
      onOnlineStateChange: function (data) {
        currentOnlineState = data.state;
        mq.view.main.setOnlineState(currentOnlineState);
      },

      onReLinkSuccess: function (data) {
        reLinkMaxCount = 3;
        reLinkRetryCount = 0;
        mq.debug('重连成功.');
        mq.hideBubble();
        packageContext.setValidate(data);
        packageContext.startPoll();
        mq.monitor(2518483);

      },


      onReLinkStop: function (data) {
        mq.debug('很努力地重连了, 还是失败了.');
        packageContext.stopPoll();
        mq.hideBubble();
        $E.fire(packageContext, "SelfOffline", {message: "身份验证失效，请重新登录", action: "relogin"});
        mq.monitor(2518484);
      },
      onFailCountOverMax: function (data) {

        packageContext.stopPoll();

        //因网络或其他原因与服务器失去联系，正在尝试重新登录
        if (reLinkRetryCount < reLinkMaxCount) {
          setTimeout(function () {
            packageContext.reLink();
          }, 1000);
          $E.fire(packageContext, "SelfOffline", {message: "因网络或其他原因与服务器失去联系，正在尝试重新登录...", action: "relink"});
        } else {
          handlers.onReLinkStop();
        }
        reLinkRetryCount++;
      },

      onNotLogin: function () {
        var reasonText = "你的登录已失效，请重新登录。";
        $E.fire(packageContext, "SelfOffline", {message: reasonText, action: 'login'});
      },

      onNotReLogin: function () {
        var reasonText = "因网络或其他原因与服务器失去联系，请重新登录。";
        $E.fire(packageContext, "SelfOffline", {message: reasonText, action: 'login'});
      },

      onSelfOffline: function (data) {
        mq.bubble(data.message, data.action == 'relogin' ? 0 : 5000);
      }

    };


    this.bindHandlers = function () {
      $E.on(mq.rpcService, "LoginSuccess", handlers.onLoginSuccess);
      $E.on(mq.rpcService, "LoginFailure", handlers.onLoginFailure);

      $E.on(mq.rpcService, "getVfWebQQSuccess", handlers.onGetVfWebQQSuccess);
      $E.on(mq.rpcService, "getVfWebQQFailure", handlers.onGetVfWebQQFailure);

      $E.on(mq.rpcService, "PollComplete", handlers.onPollComplete);
      $E.on(mq.rpcService, "PollSuccess", handlers.onPollSuccess);

      $E.on(mq, "onlineStateChange", handlers.onOnlineStateChange);
      //设置PC头部
      $E.on(mq.model.buddylist, "getFirstSelfInfo", handlers.onGetFirstSelfInfo);


      $E.on(mq.rpcService, "NotLogin", handlers.onNotLogin);
      $E.on(mq.rpcService, "NotReLogin", handlers.onNotReLogin);

      $E.on(mq.rpcService, "ReLinkStop", handlers.onReLinkStop);

      $E.on(mq.rpcService, "FailCountOverMax", handlers.onFailCountOverMax);

      $E.on(mq.rpcService, "ReLinkSuccess", handlers.onReLinkSuccess);
      $E.on(mq.rpcService, "ReLinkFailure", handlers.onFailCountOverMax);

      $E.on(packageContext, "SelfOffline", handlers.onSelfOffline);

    };


    this.start = function () {

      // 加载保存在本地的配置
      mq.loadSetting();

      // 设置初始票据
      this.setValidate({
        clientid: 53999199,
        ptwebqq: J.cookie.get("ptwebqq"),
        skey: J.cookie.get("skey")
      });

      //自动跳登录
      if ($H.getUrlParam("guide", location.href) == 1) {
        mq.view.main.showGuide();
      }
      else if (!mq.ptwebqq || !mq.skey) {
        this.gotoLogin();
        // mq.view.main.showGuide();

      } else {
        this.onPTLoginSuccess();
      }
      mq.util.report2BNL2('11201');
    };
    this.setValidate = function (opt) {
      mq.psessionid = opt.psessionid || mq.psessionid || "";
      mq.vfwebqq = opt.vfwebqq || mq.vfwebqq || "";
      mq.ptwebqq = opt.ptwebqq || mq.ptwebqq || "";
      if (opt.ptwebqq) {// 更新 cookie 中的 ptwebqq
        J.cookie.set("ptwebqq", opt.ptwebqq, "qq.com");
      }
      mq.clientid = opt.clientid || mq.clientid || "";
      mq.skey = opt.skey || mq.skey || "";
    };

    this.onPTLoginSuccess = function (loginType) {
      this.loginType = loginType || 10; // 默认在线
      mq.view.loginPanel.hide();
      // 设置票据
      this.setValidate({
        ptwebqq: J.cookie.get("ptwebqq"),
        skey: J.cookie.get("skey")
      });

      mq.view.main.removeGuide();
      this.bindHandlers();

      mq.rpcService.getVfWebQQ();
      mq.util.report2BNL2('11202');

      var loginTitle = document.getElementById('loginTitle');
      if (loginTitle) {
        document.body.removeChild(loginTitle);
      }
    }

    this.gotoLogin = function () {
      mq.util.report2BNL2('11203');
      mq.monitor(2518486);
      mq.view.loginPanel.show();

      // setTimeout(function(){
      //     // alert('goto login')
      //     window.open(JUMP_TO_LOGIN,"_self");
      // }, 100);
    }

    this.logout = function () {
      J.cookie.remove("ptwebqq", "qq.com");
      J.cookie.remove("skey", "qq.com");

      pt_logout.logout(function () {
        console.log('logout success');
        location.href = location.href;
      });
    }

    this.isOnline = function () {
      return pollState == 'poll';
    }

    this.startPoll = function () {
      pollState = 'poll';
      this.keepPoll();
    }

    this.stopPoll = function () {
      pollState = 'stop';
    }

    this.keepPoll = function () {
      if (pollState === 'poll') {
        mq.rpcService.sendPoll();
      }
    }

    this.reLink = function () {
      mq.debug('reLink ');
      this.stopPoll();
      mq.rpcService.sendReLink();
      mq.monitor(2518487);
    }

    this.getCurrentOnlineState = function () {
      return currentOnlineState;
    }

  });
})

;
// Require.js 路径配置
require.config({
  paths: {
    jm: '../lib/jm/jm',
    jmAudio: '../lib/jm/jm.audio',
    iscroll: '../lib/iscroll/iscroll',
    tmpl: '../lib/require/tmpl'
  }
  // 开启 urlArgs 可用来避免资源被缓存
  // urlArgs: "bust="+new Date().getTime()
});


/**
 * @module 入口模块
 */
require([
  'jm',
  'iscroll',
  './mq.portal',
  './mq.main',
  './mq.report'
], function (JM, iScroll) {

  var $D = JM.dom;
  var UA = window.navigator.userAgent.toLowerCase();
  var htmlEle, ieClass, filesToLoad, loadCallback, loadFile, fileIndex, ieCss, html5shivScript, container;

  // 上报相关
  var FLAG = "7832-22-1",
      REPORT_PAGELOAD = 1,
      REPORT_JSLOAD = 2;

  if (J.platform.touchDevice || UA.indexOf("webkit") >= 1 || UA.indexOf("gecko") >= 1) {
    mq.main.start();
  }
  else if (J.platform.ieVersion > 8 && document.documentMode > 8) {
    // set html element's class
    htmlEle = document.getElementsByTagName('html')[0];
    ieClass = 'ie ie' + J.platform.ieVersion;
    if (htmlEle.className) {
      ieClass = ' ' + ieClass;
    }
    htmlEle.className = ieClass;

    // set container to load file
    container = document.getElementsByTagName('head')[0] || document.documentElement;

    // load a js file for using html5 tags in IE6-8
    if (J.platform.ieVersion <= 8) {
      html5shivScript = document.createElement('script');
      html5shivScript.src = 'lib/html5shiv/html5shiv.js';
      container.appendChild(html5shivScript);
    }

    // load css for ie
    ieCss = document.createElement('link');
    ieCss.type = 'text/css';
    ieCss.rel = 'stylesheet';
    ieCss.href = 'css/ie.css';
    container.appendChild(ieCss);

    // load js for ie
    filesToLoad = [
      /*'lib/modernizr/modernizr.js',*/
      'js/ie.js'
    ];
    loadCallback = function () {
      ++fileIndex;
      if (fileIndex === filesToLoad.length) {
        mq.main.start();
      }
    };
    loadFile = mq.util.loadFile;

    fileIndex = filesToLoad.length;
    while (fileIndex--) {
      loadFile(filesToLoad[fileIndex], loadCallback);
    }
    fileIndex = 0;
  }
  else {
    var newMask = document.createElement('div');
    newMask.className = 'newMaskAll';
    // newMask.setAttribute('class', 'newMaskAll');
    newMask.innerHTML = "<div class='newMaskText'>请使用以下浏览器进行访问：</div><div class='newMaskLogo'><a class='newMaskChrome'href='https://www.google.com/intl/en/chrome/browser/' target='_blank' title='点击跳转到chrome浏览器下载页'></a><a class='newMaskFirefox' href='https://firefox.com.cn/' target='_blank' title='点击跳转到Firefox浏览器下载页'></a></div>";
    var domContainer = document.getElementById('container');
    domContainer.parentNode.insertBefore(newMask, domContainer);
  }

  // 上报JS执行时间
  mq.report.speedReport(FLAG, REPORT_JSLOAD, true, true);

  //页面加载测试上报
  mq.report.speedReport(FLAG, REPORT_PAGELOAD, true, true);
});

define("main.js", function () {
});

