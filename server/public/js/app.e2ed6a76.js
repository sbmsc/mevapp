(function(t) {
  function e(e) {
    for (
      var r, s, c = e[0], u = e[1], i = e[2], l = 0, f = [];
      l < c.length;
      l++
    )
      (s = c[l]), o[s] && f.push(o[s][0]), (o[s] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (t[r] = u[r]);
    p && p(e);
    while (f.length) f.shift()();
    return a.push.apply(a, i || []), n();
  }
  function n() {
    for (var t, e = 0; e < a.length; e++) {
      for (var n = a[e], r = !0, c = 1; c < n.length; c++) {
        var u = n[c];
        0 !== o[u] && (r = !1);
      }
      r && (a.splice(e--, 1), (t = s((s.s = n[0]))));
    }
    return t;
  }
  var r = {},
    o = { app: 0 },
    a = [];
  function s(e) {
    if (r[e]) return r[e].exports;
    var n = (r[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = t),
    (s.c = r),
    (s.d = function(t, e, n) {
      s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (s.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (s.t = function(t, e) {
      if ((1 & e && (t = s(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          s.d(
            n,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (s.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return s.d(e, "a", e), e;
    }),
    (s.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (s.p = "/");
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = c.push.bind(c);
  (c.push = e), (c = c.slice());
  for (var i = 0; i < c.length; i++) e(c[i]);
  var p = u;
  a.push([0, "chunk-vendors"]), n();
})({
  0: function(t, e, n) {
    t.exports = n("56d7");
  },
  "011e": function(t, e, n) {},
  "034f": function(t, e, n) {
    "use strict";
    var r = n("64a9"),
      o = n.n(r);
    o.a;
  },
  "56d7": function(t, e, n) {
    "use strict";
    n.r(e);
    n("cadf"), n("551c"), n("f751"), n("097d");
    var r = n("2b0e"),
      o = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r(
          "div",
          { attrs: { id: "app" } },
          [
            r("img", { attrs: { alt: "Vue logo", src: n("cf05") } }),
            r("post-component", {
              attrs: { msg: "Welcome to Your Vue.js App" }
            })
          ],
          1
        );
      },
      a = [],
      s = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "container" }, [
          n("h1", [t._v("Latest Post")]),
          n("div", { staticClass: "create-post form-group" }, [
            n("label", { attrs: { for: "create-post" } }, [
              t._v("Say your name!")
            ]),
            n("br"),
            n("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.text,
                  expression: "text"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "create-post",
                placeholder: "Don't be shy"
              },
              domProps: { value: t.text },
              on: {
                input: function(e) {
                  e.target.composing || (t.text = e.target.value);
                }
              }
            }),
            n("br"),
            n(
              "button",
              { staticClass: "btn btn-primary", on: { click: t.createPost } },
              [t._v("Post my name")]
            )
          ]),
          n("hr"),
          t.error
            ? n("p", { staticClass: "error" }, [t._v(t._s(t.error))])
            : t._e(),
          n(
            "div",
            { staticClass: "posts-container" },
            t._l(t.posts, function(e, r) {
              return n(
                "div",
                {
                  key: e._id,
                  staticClass: "post",
                  attrs: { item: t.posts, index: r },
                  on: {
                    dblclick: function(n) {
                      return t.deletePost(e._id);
                    }
                  }
                },
                [
                  t._v(
                    "\n      " +
                      t._s(
                        e.createdAt.getDate() +
                          "/" +
                          e.createdAt.getMonth() +
                          "/" +
                          e.createdAt.getFullYear()
                      ) +
                      "\n      "
                  ),
                  n("p", { staticClass: "text" }, [t._v(t._s(e.text))])
                ]
              );
            }),
            0
          )
        ]);
      },
      c = [],
      u = (n("96cf"), n("3b8d")),
      i = n("cebc"),
      p = n("d225"),
      l = n("b0b4"),
      f = n("bc3a"),
      d = n.n(f),
      v = "http://localhost:9899/api/posts/",
      h = (function() {
        function t() {
          Object(p["a"])(this, t);
        }
        return (
          Object(l["a"])(t, null, [
            {
              key: "getPosts",
              value: function() {
                return new Promise(
                  (function() {
                    var t = Object(u["a"])(
                      regeneratorRuntime.mark(function t(e, n) {
                        var r, o;
                        return regeneratorRuntime.wrap(
                          function(t) {
                            while (1)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.prev = 0), (t.next = 3), d.a.get(v);
                                case 3:
                                  (r = t.sent),
                                    (o = r.data),
                                    e(
                                      o.map(function(t) {
                                        return Object(
                                          i["a"]
                                        )({}, t, { createdAt: new Date(t.createdAt) });
                                      })
                                    ),
                                    (t.next = 11);
                                  break;
                                case 8:
                                  (t.prev = 8), (t.t0 = t["catch"](0)), n(t.t0);
                                case 11:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[0, 8]]
                        );
                      })
                    );
                    return function(e, n) {
                      return t.apply(this, arguments);
                    };
                  })()
                );
              }
            },
            {
              key: "insertPost",
              value: function(t) {
                return d.a.post(v, { text: t });
              }
            },
            {
              key: "deletePost",
              value: function(t) {
                return d.a.delete("".concat(v).concat(t));
              }
            }
          ]),
          t
        );
      })(),
      m = h,
      b = {
        name: "PostComponent",
        data: function() {
          return { posts: [], error: "", text: "" };
        },
        created: (function() {
          var t = Object(u["a"])(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(
                function(t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.prev = 0), (t.next = 3), m.getPosts();
                      case 3:
                        (this.posts = t.sent), (t.next = 9);
                        break;
                      case 6:
                        (t.prev = 6),
                          (t.t0 = t["catch"](0)),
                          (this.error = t.t0.message);
                      case 9:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this,
                [[0, 6]]
              );
            })
          );
          function e() {
            return t.apply(this, arguments);
          }
          return e;
        })(),
        methods: {
          createPost: (function() {
            var t = Object(u["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function(t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), m.insertPost(this.text);
                        case 2:
                          return (t.next = 4), m.getPosts();
                        case 4:
                          this.posts = t.sent;
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
            function e() {
              return t.apply(this, arguments);
            }
            return e;
          })(),
          deletePost: (function() {
            var t = Object(u["a"])(
              regeneratorRuntime.mark(function t(e) {
                return regeneratorRuntime.wrap(
                  function(t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), m.deletePost(e);
                        case 2:
                          return (t.next = 4), m.getPosts();
                        case 4:
                          this.posts = t.sent;
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
            function e(e) {
              return t.apply(this, arguments);
            }
            return e;
          })()
        }
      },
      g = b,
      x = (n("978e"), n("2877")),
      y = Object(x["a"])(g, s, c, !1, null, "71001722", null),
      w = y.exports,
      P = { name: "app", components: { PostComponent: w } },
      _ = P,
      j = (n("034f"), Object(x["a"])(_, o, a, !1, null, null, null)),
      O = j.exports;
    (r["a"].config.productionTip = !1),
      new r["a"]({
        render: function(t) {
          return t(O);
        }
      }).$mount("#app");
  },
  "64a9": function(t, e, n) {},
  "978e": function(t, e, n) {
    "use strict";
    var r = n("011e"),
      o = n.n(r);
    o.a;
  },
  cf05: function(t, e, n) {
    t.exports = n.p + "img/logo.82b9c7a5.png";
  }
});
//# sourceMappingURL=app.e2ed6a76.js.map
