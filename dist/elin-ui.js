import { defineComponent as w, inject as B, computed as g, openBlock as a, createElementBlock as c, mergeProps as q, createBlock as H, unref as i, normalizeClass as d, createCommentVNode as C, createTextVNode as N, renderSlot as k, useCssVars as P, mergeModels as T, useModel as j, createElementVNode as o, withModifiers as O, createVNode as S, toDisplayString as I, ref as V, Fragment as z, renderList as M, normalizeStyle as E } from "vue";
const L = "elin", y = Symbol(), x = { namespace: L, ns: (t) => `${L}-${t}` }, R = /* @__PURE__ */ w({
  __name: "index",
  props: {
    type: { default: "default" },
    plain: { type: Boolean },
    circle: { type: Boolean },
    round: { type: Boolean },
    disabled: { type: Boolean },
    text: { type: Boolean },
    size: { default: "default" },
    loading: { type: Boolean }
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const { namespace: s, ns: r } = B(y, x), n = t, h = e, u = g(() => ({
      [`${s}-button`]: !0,
      [`${s}-button-${n.type}`]: !0,
      [`${s}-button-${n.size}`]: !0,
      "is-plain": n.plain,
      "is-circle": n.circle,
      "is-round": n.round,
      "is-disabled": n.disabled || n.loading,
      "is-text": n.text
    })), m = (l) => {
      h("click", l);
    };
    return (l, $) => (a(), c("button", q({ class: u.value }, l.$attrs, { onClick: m }), [
      l.loading ? (a(), H(i(q3), {
        key: 0,
        class: d(i(r)("icon-loading"))
      }, null, 8, ["class"])) : C("", !0),
      N(),
      k(l.$slots, "default")
    ], 16));
  }
}), W = { class: "space-container" }, D = /* @__PURE__ */ w({
  __name: "index",
  props: {
    direction: { default: "horizontal" }
  },
  setup(t) {
    P((r) => ({
      "3a6bdd69": s.value
    }));
    const e = t, s = g(() => e.direction === "vertical" ? "column" : "row");
    return (r, n) => (a(), c("div", W, [
      k(r.$slots, "default")
    ]));
  }
}), Z = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "index",
  props: /* @__PURE__ */ T({
    title: { default: "" },
    showClose: { type: Boolean, default: !0 },
    showMask: { type: Boolean, default: !0 },
    width: { default: 500 },
    top: { default: "15vh" }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const e = t, { namespace: s } = B(y, x), r = g(() => ({
      [`--${s}-dialog-width`]: `${e.width}px`,
      [`--${s}-dialog-top`]: e.top
    })), n = j(t, "modelValue"), h = () => {
      n.value = !1;
    };
    return (u, m) => n.value ? (a(), c("div", {
      key: 0,
      class: d(`${i(s)}-overlay`),
      onClick: h
    }, [
      o("div", q({
        class: `${i(s)}-dialog`,
        onClick: m[0] || (m[0] = O(() => {
        }, ["stop"])),
        style: r.value
      }, u.$attrs), [
        u.showClose ? (a(), c("div", {
          key: 0,
          class: d(`${i(s)}-dialog-close`),
          onClick: h
        }, [
          S(i(x3))
        ], 2)) : C("", !0),
        o("header", {
          class: d(`${i(s)}-dialog-header`)
        }, I(u.title), 3),
        o("div", {
          class: d(`${i(s)}-dialog-body`)
        }, [
          k(u.$slots, "default")
        ], 2),
        o("footer", {
          class: d(`${i(s)}-dialog-footer`)
        }, [
          k(u.$slots, "footer")
        ], 2)
      ], 16)
    ], 2)) : C("", !0);
  }
}), A = /* @__PURE__ */ w({
  props: ["rowData", "column", "index"],
  setup({
    rowData: t,
    column: e,
    index: s
  }) {
    const {
      ns: r
    } = B(y, x), {
      formatter: n,
      prop: h = "",
      fixed: u,
      width: m
    } = e, l = n ? n({
      val: t[h],
      row: t,
      index: s
    }) : t[h];
    return () => S("td", {
      class: {
        [r("table-td")]: !0,
        "is-fixed": u
        //   [`is-fixed-${fixed}`]: true
      }
    }, [S("div", {
      class: r("table-cell")
    }, [l])]);
  }
}), F = ["width"], G = /* @__PURE__ */ w({
  __name: "index",
  props: {
    data: {},
    columns: {}
  },
  setup(t) {
    const { ns: e } = B(y, x), s = t, r = V(), n = V(), h = g(() => (l, $ = "left") => {
      if (r.value) {
        const _ = r.value.children[l];
        return `${{
          left: _.offsetLeft,
          right: _.offsetParent.clientWidth - _.offsetLeft - _.offsetWidth
        }[$]}px`;
      }
    }), u = g(() => {
      const { columns: l } = s;
      let $ = 0, _ = l.findIndex((f) => f.fixed === "right");
      return l.forEach((f, p) => {
        f.fixed === "left" && ($ = p);
      }), {
        left: $,
        right: _
      };
    }), m = g(() => {
      const l = n.value || {};
      return l.scrollWidth > l.clientWidth;
    });
    return (l, $) => (a(), c("div", {
      class: d({ [i(e)("table-wrapper")]: !0, "is-scroll": m.value }),
      ref_key: "wrapperRef",
      ref: n
    }, [
      o("table", {
        class: d(i(e)("table"))
      }, [
        o("colgroup", null, [
          (a(!0), c(z, null, M(l.columns, ({ width: _ }) => (a(), c("col", { width: _ }, null, 8, F))), 256))
        ]),
        o("thead", {
          class: d(i(e)("table-thead"))
        }, [
          o("tr", {
            class: d(i(e)("table-tr")),
            ref_key: "trRef",
            ref: r
          }, [
            (a(!0), c(z, null, M(l.columns, ({ label: _, width: f, fixed: p }, v) => (a(), c("th", {
              class: d({
                [i(e)("table-th")]: !0,
                "is-fixed": p,
                "is-fixed-left": u.value.left === v,
                "is-fixed-right": u.value.right === v
              }),
              key: _,
              style: E({ [p]: h.value(v, p) })
            }, [
              o("div", {
                class: d(i(e)("table-cell")),
                style: E({ width: `${f}px` })
              }, I(_), 7)
            ], 6))), 128))
          ], 2)
        ], 2),
        o("tbody", {
          class: d(i(e)("table-tbody"))
        }, [
          (a(!0), c(z, null, M(l.data, (_, f) => (a(), c("tr", {
            class: d(i(e)("table-tr")),
            key: _.prop
          }, [
            (a(!0), c(z, null, M(l.columns, (p, v) => (a(), H(i(A), {
              key: p.prop,
              "row-data": _,
              column: p,
              index: f,
              style: E({
                [p.fixed]: h.value(v, p.fixed)
              }),
              class: d({
                "is-fixed-left": u.value.left === v,
                "is-fixed-right": u.value.right === v
              })
            }, null, 8, ["row-data", "column", "index", "style", "class"]))), 128))
          ], 2))), 128))
        ], 2)
      ], 2)
    ], 2));
  }
}), J = { class: "select w-full max-w-xs" }, K = /* @__PURE__ */ o("option", {
  disabled: "",
  selected: ""
}, "Pick your favorite Simpson", -1), Q = /* @__PURE__ */ o("option", null, "Homer", -1), U = /* @__PURE__ */ o("option", null, "Marge", -1), X = /* @__PURE__ */ o("option", null, "Bart", -1), Y = /* @__PURE__ */ o("option", null, "Lisa", -1), e3 = /* @__PURE__ */ o("option", null, "Maggie", -1), t3 = [
  K,
  Q,
  U,
  X,
  Y,
  e3
], s3 = /* @__PURE__ */ w({
  __name: "index",
  setup(t) {
    return (e, s) => (a(), c("select", J, t3));
  }
}), o3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EButton: R,
  EDialog: Z,
  ESelect: s3,
  ESpace: D,
  ETable: G
}, Symbol.toStringTag, { value: "Module" })), b = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [r, n] of e)
    s[r] = n;
  return s;
}, n3 = {}, l3 = {
  t: "1711376246682",
  class: "elin-icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "4202",
  width: "200",
  height: "200"
}, a3 = /* @__PURE__ */ o("path", {
  d: "M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z",
  "p-id": "4203"
}, null, -1), i3 = /* @__PURE__ */ o("path", {
  d: "M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z",
  "p-id": "4204"
}, null, -1), c3 = [
  a3,
  i3
];
function r3(t, e) {
  return a(), c("svg", l3, c3);
}
const I3 = /* @__PURE__ */ b(n3, [["render", r3]]), d3 = {}, u3 = {
  t: "1711256688521",
  class: "elin-icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2320",
  width: "200",
  height: "200"
}, _3 = /* @__PURE__ */ o("path", {
  d: "M918.101333 253.696H105.898667a34.133333 34.133333 0 0 1 0-68.266667h812.202666a34.133333 34.133333 0 0 1 0 68.266667z",
  "p-id": "2321"
}, null, -1), h3 = /* @__PURE__ */ o("path", {
  d: "M833.792 946.261333H190.208a34.133333 34.133333 0 0 1-34.133333-34.133333V219.562667a34.133333 34.133333 0 0 1 34.133333-34.133334h643.584a34.133333 34.133333 0 0 1 34.133333 34.133334v692.565333a34.133333 34.133333 0 0 1-34.133333 34.133333z m-609.450667-68.266666h575.317334V253.696H224.341333z",
  "p-id": "2322"
}, null, -1), p3 = /* @__PURE__ */ o("path", {
  d: "M646.912 253.696H377.088a34.133333 34.133333 0 0 1-34.133333-34.133333V111.872a34.133333 34.133333 0 0 1 34.133333-34.133333h269.824a34.133333 34.133333 0 0 1 34.133333 34.133333v107.690667a34.133333 34.133333 0 0 1-34.133333 34.133333z m-235.690667-68.266667h201.557334v-39.424H411.221333zM397.909333 761.429333a34.133333 34.133333 0 0 1-34.133333-34.133333V435.968a34.133333 34.133333 0 0 1 68.266667 0v291.328a34.133333 34.133333 0 0 1-34.133334 34.133333zM626.090667 761.429333a34.133333 34.133333 0 0 1-34.133334-34.133333V435.968a34.133333 34.133333 0 0 1 68.266667 0v291.328a34.133333 34.133333 0 0 1-34.133333 34.133333z",
  "p-id": "2323"
}, null, -1), f3 = [
  _3,
  h3,
  p3
];
function m3(t, e) {
  return a(), c("svg", u3, f3);
}
const N3 = /* @__PURE__ */ b(d3, [["render", m3]]), v3 = {}, $3 = {
  t: "1713159209079",
  class: "elin-icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3855",
  width: "200",
  height: "200"
}, g3 = /* @__PURE__ */ o("path", {
  d: "M566.4 512l318.4-318.4c16-16 16-38.4 0-54.4s-38.4-16-54.4 0L512 457.6 192 140.8c-14.4-16-38.4-16-52.8 0s-16 38.4 0 54.4L457.6 512 139.2 830.4c-16 16-16 38.4 0 54.4 8 6.4 16 11.2 27.2 11.2s19.2-3.2 27.2-11.2l320-318.4 320 316.8c8 6.4 19.2 11.2 27.2 11.2s19.2-3.2 27.2-11.2c16-16 16-38.4 0-54.4L566.4 512z",
  "p-id": "3856"
}, null, -1), w3 = [
  g3
];
function y3(t, e) {
  return a(), c("svg", $3, w3);
}
const x3 = /* @__PURE__ */ b(v3, [["render", y3]]), b3 = {}, z3 = {
  t: "1714746774426",
  class: "elin-icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2747",
  width: "200",
  height: "200"
}, M3 = /* @__PURE__ */ o("path", {
  d: "M119.466667 931.84a34.133333 34.133333 0 0 1-33.194667-42.069333l53.333333-223.744a34.133333 34.133333 0 0 1 9.045334-16.213334L631.466667 167.509333a34.133333 34.133333 0 0 1 48.298666 0l170.666667 170.666667a34.133333 34.133333 0 0 1 0 48.298667l-482.816 482.048a34.133333 34.133333 0 0 1-16.213333 9.045333L128 930.901333a36.010667 36.010667 0 0 1-8.533333 0.938667zM204.032 691.2l-38.229333 160.426667 160.341333-38.229334 451.328-451.328L655.36 239.872zM904.533333 317.696a34.133333 34.133333 0 0 1-24.149333-9.984l-170.666667-170.666667a34.133333 34.133333 0 0 1 48.298667-48.298666l170.666667 170.666666a34.133333 34.133333 0 0 1-24.149334 58.282667zM814.848 931.84h-349.866667a34.133333 34.133333 0 0 1 0-68.266667h349.866667a34.133333 34.133333 0 0 1 0 68.266667z",
  "p-id": "2748"
}, null, -1), k3 = [
  M3
];
function B3(t, e) {
  return a(), c("svg", z3, k3);
}
const P3 = /* @__PURE__ */ b(b3, [["render", B3]]), E3 = {}, C3 = {
  t: "1714795758352",
  class: "elin-icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "4458",
  width: "200",
  height: "200"
}, S3 = /* @__PURE__ */ o("path", {
  d: "M475.428571 97.52381h73.142858v219.428571h-73.142858z m0 609.523809h73.142858v219.428571h-73.142858zM926.47619 475.428571v73.142858h-219.428571v-73.142858z m-609.523809 0v73.142858H97.52381v-73.142858zM779.215238 193.072762l51.712 51.687619-155.136 155.184762-51.736381-51.736381zM348.208762 624.054857l51.736381 51.736381-155.160381 155.136-51.712-51.687619zM193.097143 244.784762l51.687619-51.712 155.184762 155.136-51.736381 51.736381z m430.982095 431.006476l51.736381-51.736381 155.136 155.160381-51.687619 51.712z",
  "p-id": "4459"
}, null, -1), V3 = [
  S3
];
function L3(t, e) {
  return a(), c("svg", C3, V3);
}
const q3 = /* @__PURE__ */ b(E3, [["render", L3]]), T3 = (t) => {
  Object.entries(o3).forEach(([e, s]) => {
    t.component(e, s);
  }), t.provide(y, x);
};
export {
  R as EButton,
  Z as EDialog,
  s3 as ESelect,
  D as ESpace,
  G as ETable,
  x3 as IconClose,
  N3 as IconDelete,
  P3 as IconEdit,
  q3 as IconLoading,
  I3 as IconPlus,
  T3 as default
};
