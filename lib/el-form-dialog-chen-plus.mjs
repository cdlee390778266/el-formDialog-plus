import { ref as Y, reactive as ie, computed as J, watch as me, nextTick as pe, resolveComponent as r, resolveDirective as ye, openBlock as o, createElementBlock as U, createVNode as x, unref as a, withCtx as b, isRef as De, withDirectives as be, normalizeStyle as L, Fragment as A, renderList as z, createBlock as m, renderSlot as f, createElementVNode as M, toDisplayString as P, mergeProps as k, toHandlers as v, createCommentVNode as p, createTextVNode as B, createSlots as ke, pushScopeId as ve, popScopeId as he } from "vue";
/*! Element Plus v2.2.28 */
var Ve = {
  name: "zh-cn",
  el: {
    colorpicker: {
      confirm: "确定",
      clear: "清空"
    },
    datepicker: {
      now: "此刻",
      today: "今天",
      cancel: "取消",
      clear: "清空",
      confirm: "确定",
      selectDate: "选择日期",
      selectTime: "选择时间",
      startDate: "开始日期",
      startTime: "开始时间",
      endDate: "结束日期",
      endTime: "结束时间",
      prevYear: "前一年",
      nextYear: "后一年",
      prevMonth: "上个月",
      nextMonth: "下个月",
      year: "年",
      month1: "1 月",
      month2: "2 月",
      month3: "3 月",
      month4: "4 月",
      month5: "5 月",
      month6: "6 月",
      month7: "7 月",
      month8: "8 月",
      month9: "9 月",
      month10: "10 月",
      month11: "11 月",
      month12: "12 月",
      weeks: {
        sun: "日",
        mon: "一",
        tue: "二",
        wed: "三",
        thu: "四",
        fri: "五",
        sat: "六"
      },
      months: {
        jan: "一月",
        feb: "二月",
        mar: "三月",
        apr: "四月",
        may: "五月",
        jun: "六月",
        jul: "七月",
        aug: "八月",
        sep: "九月",
        oct: "十月",
        nov: "十一月",
        dec: "十二月"
      }
    },
    select: {
      loading: "加载中",
      noMatch: "无匹配数据",
      noData: "无数据",
      placeholder: "请选择"
    },
    cascader: {
      noMatch: "无匹配数据",
      loading: "加载中",
      placeholder: "请选择",
      noData: "暂无数据"
    },
    pagination: {
      goto: "前往",
      pagesize: "条/页",
      total: "共 {total} 条",
      pageClassifier: "页",
      deprecationWarning: "你使用了一些已被废弃的用法，请参考 el-pagination 的官方文档"
    },
    messagebox: {
      title: "提示",
      confirm: "确定",
      cancel: "取消",
      error: "输入的数据不合法!"
    },
    upload: {
      deleteTip: "按 delete 键可删除",
      delete: "删除",
      preview: "查看图片",
      continue: "继续上传"
    },
    table: {
      emptyText: "暂无数据",
      confirmFilter: "筛选",
      resetFilter: "重置",
      clearFilter: "全部",
      sumText: "合计"
    },
    tree: {
      emptyText: "暂无数据"
    },
    transfer: {
      noMatch: "无匹配数据",
      noData: "无数据",
      titles: ["列表 1", "列表 2"],
      filterPlaceholder: "请输入搜索内容",
      noCheckedFormat: "共 {total} 项",
      hasCheckedFormat: "已选 {checked}/{total} 项"
    },
    image: {
      error: "加载失败"
    },
    pageHeader: {
      title: "返回"
    },
    popconfirm: {
      confirmButtonText: "确定",
      cancelButtonText: "取消"
    }
  }
};
/*! Element Plus v2.2.28 */
var _e = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const ce = (d, K) => {
  const n = d.__vccOpts || d;
  for (const [T, l] of K)
    n[T] = l;
  return n;
}, Ee = (d) => (ve("data-v-5a4596eb"), d = d(), he(), d), Fe = { key: 0 }, we = { class: "formdialog" }, Ce = { class: "mgr10" }, Ue = /* @__PURE__ */ Ee(() => /* @__PURE__ */ M("div", { class: "flex" }, null, -1)), Me = { class: "el-upload__tip" }, Ke = ["innerHTML"], Be = { class: "text-center mgt20" }, Te = {
  __name: "el-formDialog",
  props: {
    visible: {
      // 显示/隐藏
      type: Boolean,
      default: !1
    },
    title: {
      // 标题
      type: String,
      default: ""
    },
    width: {
      // 宽度
      type: String,
      default: ""
    },
    destroyOnClose: {
      type: Boolean,
      default: !0
    },
    closeOnClickModal: {
      // 点击遮罩是否关闭弹窗
      type: Boolean,
      default: !1
    },
    dialog: {
      // 是否是弹窗的表单
      type: Boolean,
      default: !1
    },
    type: {
      // 类型
      type: String,
      default: "add"
      // add or edit or view
    },
    labelPosition: {
      // 标签的位置 right/left/top
      type: String,
      default: "right"
    },
    labelWidth: {
      // 标签宽度
      type: String,
      default: "140px"
    },
    formConfig: {
      // 表单配置
      type: Array,
      default: () => []
    },
    formData: {
      // 表单数据
      type: Object,
      default: () => {
      }
    },
    size: {
      // 表达尺寸 default/small/large
      type: String,
      default: ""
    },
    submitLoading: {
      // 提交是否显示loading状态
      type: Boolean,
      default: !0
    },
    language: {
      // 语言
      type: String,
      default: "zh-cn",
      validator(d) {
        return ["zh-cn", "en"].includes(d);
      }
    }
  },
  emits: ["closedialog", "onsubmit", "updata:props.visible"],
  setup(d, { emit: K }) {
    const n = d;
    let T = Y(!1), l = ie({
      form: {},
      rules: {},
      treatedFormConfig: [],
      saveFormConfig: [],
      saveRules: {},
      saveForm: {}
    });
    const F = Y(null), R = J(() => n.language === "zh-cn" ? Ve : _e);
    let N = J({
      get() {
        return n.visible;
      },
      set(y) {
        K("updata:props.visible", y);
      }
    });
    me(
      () => n.visible,
      () => {
        n.visible && _();
      }
    ), me(
      () => n.formConfig,
      () => {
        _();
      },
      { immediate: !0, deep: !0 }
    );
    function _() {
      let y = {}, s = {};
      l.form = {}, l.rules = {}, l.treatedFormConfig = [], l.saveFormConfig = [], l.saveRules = {}, l.saveForm = {}, l.treatedFormConfig = [...n.formConfig], l.treatedFormConfig.forEach((i, w) => {
        if (i.type === "text" || i.type === "slot")
          return;
        y[i.key] = n.formData[i.key] || n.formData[i.key] === 0 || n.formData[i.key] === !1 ? n.formData[i.key] : i.defaultValue || i.defaultValue == null || i.defaultValue === !1 ? i.defaultValue : i.type === "number" ? 0 : "", i.addKeys && i.addKeys.length && i.addKeys.forEach((E) => {
          y[E] = n.formData[E] || n.formData[E] === 0 || n.formData[E] === !1 ? n.formData[E] : "";
        });
        let V = {
          required: !!i.required
        };
        i.validator ? V.validator = i.validator : V.message = i.errorMsg || i.placeholder, s[i.key] = V, i.type === "date" && i.disabledDateFormKey && i.operator && (i.pickerOptions = {
          disabledDate(E) {
            if (y[i.disabledDateFormKey]) {
              let S = new Date(y[i.disabledDateFormKey]), W = i.operator === ">" ? E.getTime() > S.getTime() : E.getTime() < S.getTime();
              return S ? W : !1;
            }
            return !1;
          }
        });
      }), l.form = y, l.rules = s, h(), l.saveFormConfig = [...n.formConfig], l.saveRules = {
        ...s
      }, l.saveForm = {
        ...y
      };
    }
    function c(y, s, i) {
      let w = {};
      for (const V in y)
        w[V] = () => {
          y[V](
            l.form[s.key],
            s,
            i,
            l.treatedFormConfig,
            l.form,
            n.formData
          );
        };
      return w;
    }
    function I() {
      var y;
      (y = F == null ? void 0 : F.value) == null || y.validate((s) => {
        if (s) {
          let i = {
            ...l.form
          };
          n.submitLoading ? (T.value = !0, K(
            "onsubmit",
            n.type,
            i,
            n.formData,
            $,
            O
          )) : $();
        } else
          return console.log("error submit!!"), !1;
      });
    }
    function O() {
      T.value = !1;
    }
    function $() {
      return O(), K("closedialog"), !1;
    }
    function h() {
      pe(() => {
        var y;
        (y = F == null ? void 0 : F.value) == null || y.clearValidate();
      });
    }
    return (y, s) => {
      const i = r("el-autocomplete"), w = r("el-input"), V = r("el-input-number"), E = r("el-checkbox"), S = r("el-checkbox-group"), W = r("el-radio"), q = r("el-radio-group"), G = r("el-option"), Q = r("el-select"), X = r("el-date-picker"), Z = r("el-time-picker"), g = r("el-switch"), ee = r("el-slider"), te = r("el-rate"), H = r("el-color-picker"), j = r("el-button"), le = r("el-upload"), ae = r("el-cascader"), de = r("el-form-item"), oe = r("el-col"), ue = r("el-row"), re = r("el-form"), se = r("el-dialog"), t = r("el-config-provider"), D = ye("loading");
      return o(), U("div", null, [
        x(t, { locale: a(R) }, {
          default: b(() => [
            x(se, {
              modelValue: a(N),
              "onUpdate:modelValue": s[0] || (s[0] = (e) => De(N) ? N.value = e : N = e),
              top: "50px",
              title: d.title || "模态框",
              width: d.width || "800px",
              "append-to-body": !0,
              destroyOnClose: d.destroyOnClose,
              closeOnClickModal: d.closeOnClickModal,
              onClose: $
            }, {
              default: b(() => [
                a(N) ? (o(), U("div", Fe, [
                  be((o(), U("div", we, [
                    x(re, {
                      model: a(l).form,
                      rules: a(l).rules,
                      labelWidth: d.labelWidth,
                      "label-position": d.labelPosition,
                      size: d.size,
                      style: L({
                        maxHeight: d.dialog ? "calc(100vh - 310px)" : "10000000000px !important"
                      }),
                      ref_key: "formRef",
                      ref: F
                    }, {
                      default: b(() => [
                        x(ue, { gutter: 20 }, {
                          default: b(() => [
                            (o(!0), U(A, null, z(a(l).treatedFormConfig.filter(
                              (e) => !e.hidden
                            ), (e, C) => (o(), m(oe, {
                              key: e.key,
                              span: e.span,
                              style: L(e.elColStyle || "")
                            }, {
                              default: b(() => [
                                e.type === "slot" ? f(y.$slots, e.slotName, {
                                  key: 0,
                                  $props: a(n),
                                  $data: a(l),
                                  config: e
                                }, void 0, !0) : e.type === "text" ? (o(), U("div", {
                                  key: 1,
                                  class: "dflex mgb10",
                                  style: L([{ "text-align": "right" }, e.style])
                                }, [
                                  M("div", {
                                    style: L([{ width: d.labelWidth }, { "padding-right": "12px", "box-sizing": "border-box" }])
                                  }, [
                                    M("span", Ce, P(e.label), 1)
                                  ], 4),
                                  Ue
                                ], 4)) : (o(), m(de, {
                                  key: 2,
                                  label: `${e.label}`,
                                  prop: e.key
                                }, {
                                  default: b(() => [
                                    e.type === "autocomplete" ? (o(), m(i, k({
                                      key: 0,
                                      modelValue: a(l).form[e.key],
                                      "onUpdate:modelValue": (u) => a(l).form[e.key] = u,
                                      modelModifiers: { trim: !0 }
                                    }, e, {
                                      disabled: d.type === "view" || e.disabled
                                    }, v(c(e.events, e, C))), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                                    e.type === "input" ? (o(), m(w, k({
                                      key: 1,
                                      modelValue: a(l).form[e.key],
                                      "onUpdate:modelValue": (u) => a(l).form[e.key] = u,
                                      modelModifiers: { trim: !0 }
                                    }, e, {
                                      disabled: d.type === "view" || e.disabled
                                    }, v(c(e.events, e, C))), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                                    e.type === "number" ? (o(), m(V, k({
                                      key: 2,
                                      modelValue: a(l).form[e.key],
                                      "onUpdate:modelValue": (u) => a(l).form[e.key] = u,
                                      modelModifiers: { trim: !0 }
                                    }, e, {
                                      disabled: d.type === "view" || e.disabled
                                    }, v(c(e.events, e, C))), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                                    e.type === "textarea" ? (o(), m(w, k({
                                      key: 3,
                                      modelValue: a(l).form[e.key],
                                      "onUpdate:modelValue": (u) => a(l).form[e.key] = u,
                                      modelModifiers: { trim: !0 }
                                    }, e, {
                                      disabled: d.type === "view" || e.disabled
                                    }, v(c(e.events, e, C))), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                                    e.type === "checkbox" ? (o(), m(S, k({
                                      key: 4,
                                      modelValue: a(l).form[e.key],
                                      "onUpdate:modelValue": (u) => a(l).form[e.key] = u,
                                      modelModifiers: { trim: !0 }
                                    }, e, {
                                      disabled: d.type === "view" || e.disabled
                                    }, v(c(e.events, e, C))), {
                                      default: b(() => [
                                        (o(!0), U(A, null, z(e.options, (u) => (o(), m(E, {
                                          key: e.optionValueKey ? u[e.optionValueKey] : u.value,
                                          label: e.optionValueKey ? u[e.optionValueKey] : u.value
                                        }, {
                                          default: b(() => [
                                            B(P(e.optionLabelKey ? u[e.optionLabelKey] : u.label), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["label"]))), 128))
                                      ]),
                                      _: 2
                                    }, 1040, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                                    e.type === "radio" ? (o(), m(q, k({
                                      key: 5,
                                      modelValue: a(l).form[e.key],
                                      "onUpdate:modelValue": (u) => a(l).form[e.key] = u,
                                      modelModifiers: { trim: !0 }
                                    }, e, {
                                      disabled: d.type === "view" || e.disabled
                                    }, v(c(e.events, e, C))), {
                                      default: b(() => [
                                        (o(!0), U(A, null, z(e.options, (u) => (o(), m(W, {
                                          key: e.optionValueKey ? u[e.optionValueKey] : u.value,
                                          label: e.optionValueKey ? u[e.optionValueKey] : u.value
                                        }, {
                                          default: b(() => [
                                            B(P(e.optionLabelKey ? u[e.optionLabelKey] : u.label), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["label"]))), 128))
                                      ]),
                                      _: 2
                                    }, 1040, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                                    e.type === "select" ? (o(), m(Q, k({
                                      key: 6,
                                      modelValue: a(l).form[e.key],
                                      "onUpdate:modelValue": (u) => a(l).form[e.key] = u,
                                      modelModifiers: { trim: !0 }
                                    }, e, {
                                      disabled: d.type === "view" || e.disabled
                                    }, v(c(e.events, e, C))), {
                                      default: b(() => [
                                        (o(!0), U(A, null, z(e.options, (u) => (o(), m(G, {
                                          key: e.optionValueKey ? u[e.optionValueKey] : u.value,
                                          label: e.optionLabelKey ? u[e.optionLabelKey] : u.label,
                                          value: e.optionValueKey ? u[e.optionValueKey] : u.value
                                        }, null, 8, ["label", "value"]))), 128))
                                      ]),
                                      _: 2
                                    }, 1040, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                                    [
                                      "year",
                                      "month",
                                      "date",
                                      "dates",
                                      "week",
                                      "datetime",
                                      "datetimerange",
                                      "daterange",
                                      "monthrange"
                                    ].includes(e.type) ? (o(), m(X, k({
                                      key: 7,
                                      type: e.type,
                                      modelValue: a(l).form[e.key],
                                      "onUpdate:modelValue": (u) => a(l).form[e.key] = u,
                                      modelModifiers: { trim: !0 }
                                    }, e, {
                                      disabled: d.type === "view" || e.disabled
                                    }, v(c(e.events, e, C))), null, 16, ["type", "modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                                    e.type == "time" ? (o(), m(Z, k({
                                      key: 8,
                                      type: e.type,
                                      modelValue: a(l).form[e.key],
                                      "onUpdate:modelValue": (u) => a(l).form[e.key] = u,
                                      modelModifiers: { trim: !0 }
                                    }, e, {
                                      disabled: d.type === "view" || e.disabled
                                    }, v(c(e.events, e, C))), null, 16, ["type", "modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                                    e.type === "switch" ? (o(), m(g, k({
                                      key: 9,
                                      type: "date",
                                      modelValue: a(l).form[e.key],
                                      "onUpdate:modelValue": (u) => a(l).form[e.key] = u,
                                      modelModifiers: { trim: !0 }
                                    }, e, {
                                      disabled: d.type === "view" || e.disabled
                                    }, v(c(e.events, e, C))), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                                    e.type === "slider" ? (o(), m(ee, k({
                                      key: 10,
                                      modelValue: a(l).form[e.key],
                                      "onUpdate:modelValue": (u) => a(l).form[e.key] = u,
                                      modelModifiers: { trim: !0 }
                                    }, e, {
                                      disabled: d.type === "view" || e.disabled
                                    }, v(c(e.events, e, C))), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                                    e.type === "rate" ? (o(), m(te, k({
                                      key: 11,
                                      modelValue: a(l).form[e.key],
                                      "onUpdate:modelValue": (u) => a(l).form[e.key] = u,
                                      modelModifiers: { trim: !0 }
                                    }, e, {
                                      disabled: d.type === "view" || e.disabled
                                    }, v(c(e.events, e, C))), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                                    e.type === "color" ? (o(), m(H, k({
                                      key: 12,
                                      modelValue: a(l).form[e.key],
                                      "onUpdate:modelValue": (u) => a(l).form[e.key] = u,
                                      modelModifiers: { trim: !0 }
                                    }, e, {
                                      disabled: d.type === "view" || e.disabled
                                    }, v(c(e.events, e, C))), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                                    e.type === "file" ? (o(), m(le, k({
                                      key: 13,
                                      modelValue: a(l).form[e.key],
                                      "onUpdate:modelValue": (u) => a(l).form[e.key] = u,
                                      modelModifiers: { trim: !0 }
                                    }, e, {
                                      action: e.action || "",
                                      disabled: d.type === "view" || e.disabled
                                    }, v(c(e.events, e, C))), ke({
                                      default: b(() => [
                                        e.listType != "picture-card" ? (o(), m(j, {
                                          key: 0,
                                          type: "primary",
                                          size: d.size,
                                          disabled: d.type === "view" || e.disabled
                                        }, {
                                          default: b(() => [
                                            B("点击上传")
                                          ]),
                                          _: 2
                                        }, 1032, ["size", "disabled"])) : p("", !0)
                                      ]),
                                      _: 2
                                    }, [
                                      e.placeholder ? {
                                        name: "tip",
                                        fn: b(() => [
                                          M("div", Me, [
                                            M("div", {
                                              innerHTML: e.placeholder,
                                              class: "disabled"
                                            }, null, 8, Ke)
                                          ])
                                        ]),
                                        key: "0"
                                      } : void 0
                                    ]), 1040, ["modelValue", "onUpdate:modelValue", "action", "disabled"])) : p("", !0),
                                    e.type === "cascader" ? (o(), m(ae, k({
                                      key: 14,
                                      modelValue: a(l).form[e.key],
                                      "onUpdate:modelValue": (u) => a(l).form[e.key] = u,
                                      modelModifiers: { trim: !0 }
                                    }, e, {
                                      disabled: d.type === "view" || e.disabled
                                    }, v(c(e.events, e, C))), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0)
                                  ]),
                                  _: 2
                                }, 1032, ["label", "prop"]))
                              ]),
                              _: 2
                            }, 1032, ["span", "style"]))), 128))
                          ]),
                          _: 3
                        })
                      ]),
                      _: 3
                    }, 8, ["model", "rules", "labelWidth", "label-position", "size", "style"]),
                    M("div", Be, [
                      x(j, { onClick: $ }, {
                        default: b(() => [
                          B("关 闭")
                        ]),
                        _: 1
                      }),
                      d.type !== "view" ? (o(), m(j, {
                        key: 0,
                        type: "primary",
                        onClick: I
                      }, {
                        default: b(() => [
                          B("保 存")
                        ]),
                        _: 1
                      })) : p("", !0),
                      f(y.$slots, "addBtns", { $data: a(l) }, void 0, !0)
                    ]),
                    f(y.$slots, "tip", {}, void 0, !0)
                  ])), [
                    [D, a(T)]
                  ])
                ])) : p("", !0)
              ]),
              _: 3
            }, 8, ["modelValue", "title", "width", "destroyOnClose", "closeOnClickModal"])
          ]),
          _: 3
        }, 8, ["locale"])
      ]);
    };
  }
}, ne = /* @__PURE__ */ ce(Te, [["__scopeId", "data-v-5a4596eb"]]);
const Se = (d) => (ve("data-v-259f052d"), d = d(), he(), d), xe = { class: "formdialog" }, Le = { class: "mgr10" }, Ae = /* @__PURE__ */ Se(() => /* @__PURE__ */ M("div", { class: "flex" }, null, -1)), ze = { class: "el-upload__tip" }, Ne = ["innerHTML"], Oe = { class: "text-center mgt20" }, $e = {
  __name: "el-form-chen",
  props: {
    visible: {
      // 显示/隐藏
      type: Boolean,
      default: !1
    },
    title: {
      // 标题
      type: String,
      default: ""
    },
    width: {
      // 宽度
      type: String,
      default: ""
    },
    destroyOnClose: {
      type: Boolean,
      default: !0
    },
    closeOnClickModal: {
      // 点击遮罩是否关闭弹窗
      type: Boolean,
      default: !1
    },
    dialog: {
      // 是否是弹窗的表单
      type: Boolean,
      default: !1
    },
    type: {
      // 类型
      type: String,
      default: "add"
      // add or edit or view
    },
    labelPosition: {
      // 标签的位置 right/left/top
      type: String,
      default: "right"
    },
    labelWidth: {
      // 标签宽度
      type: String,
      default: "140px"
    },
    formConfig: {
      // 表单配置
      type: Array,
      default: () => []
    },
    formData: {
      // 表单数据
      type: Object,
      default: () => {
      }
    },
    size: {
      // 表达尺寸 default/small/large
      type: String,
      default: ""
    },
    submitLoading: {
      // 提交是否显示loading状态
      type: Boolean,
      default: !0
    },
    language: {
      // 语言
      type: String,
      default: "zh-cn",
      validator(d) {
        return ["zh-cn", "en"].includes(d);
      }
    }
  },
  emits: ["closedialog", "onsubmit", "updata:props.visible"],
  setup(d, { emit: K }) {
    const n = d;
    let T = Y(!1), l = ie({
      form: {},
      rules: {},
      treatedFormConfig: [],
      saveFormConfig: [],
      saveRules: {},
      saveForm: {}
    });
    const F = Y(null), R = J(() => n.language === "zh-cn" ? Ve : _e);
    J({
      get() {
        return n.visible;
      },
      set(h) {
        K("updata:props.visible", h);
      }
    }), me(
      () => n.formConfig,
      () => {
        N();
      },
      { immediate: !0, deep: !0 }
    );
    function N() {
      let h = {}, y = {};
      l.form = {}, l.rules = {}, l.treatedFormConfig = [], l.saveFormConfig = [], l.saveRules = {}, l.saveForm = {}, l.treatedFormConfig = [...n.formConfig], l.treatedFormConfig.forEach((s, i) => {
        if (s.type === "text" || s.type === "slot")
          return;
        h[s.key] = n.formData[s.key] || n.formData[s.key] === 0 || n.formData[s.key] === !1 ? n.formData[s.key] : s.defaultValue || s.defaultValue == null || s.defaultValue === !1 ? s.defaultValue : s.type === "number" ? 0 : "", s.addKeys && s.addKeys.length && s.addKeys.forEach((V) => {
          h[V] = n.formData[V] || n.formData[V] === 0 || n.formData[V] === !1 ? n.formData[V] : "";
        });
        let w = {
          required: !!s.required
        };
        s.validator ? w.validator = s.validator : w.message = s.errorMsg || s.placeholder, y[s.key] = w, s.type === "date" && s.disabledDateFormKey && s.operator && (s.pickerOptions = {
          disabledDate(V) {
            if (h[s.disabledDateFormKey]) {
              let E = new Date(h[s.disabledDateFormKey]), S = s.operator === ">" ? V.getTime() > E.getTime() : V.getTime() < E.getTime();
              return E ? S : !1;
            }
            return !1;
          }
        });
      }), l.form = h, l.rules = y, $(), l.saveFormConfig = [...n.formConfig], l.saveRules = {
        ...y
      }, l.saveForm = {
        ...h
      };
    }
    function _(h, y, s) {
      let i = {};
      for (const w in h)
        i[w] = () => {
          h[w](
            l.form[y.key],
            y,
            s,
            l.treatedFormConfig,
            l.form,
            n.formData
          );
        };
      return i;
    }
    function c() {
      var h;
      (h = F == null ? void 0 : F.value) == null || h.validate((y) => {
        if (y) {
          let s = {
            ...l.form
          };
          n.submitLoading ? (T.value = !0, K(
            "onsubmit",
            n.type,
            s,
            n.formData,
            O,
            I
          )) : O();
        } else
          return console.log("error submit!!"), !1;
      });
    }
    function I() {
      T.value = !1;
    }
    function O() {
      return I(), K("closedialog"), !1;
    }
    function $() {
      pe(() => {
        var h;
        (h = F == null ? void 0 : F.value) == null || h.clearValidate();
      });
    }
    return (h, y) => {
      const s = r("el-autocomplete"), i = r("el-input"), w = r("el-input-number"), V = r("el-checkbox"), E = r("el-checkbox-group"), S = r("el-radio"), W = r("el-radio-group"), q = r("el-option"), G = r("el-select"), Q = r("el-date-picker"), X = r("el-time-picker"), Z = r("el-switch"), g = r("el-slider"), ee = r("el-rate"), te = r("el-color-picker"), H = r("el-button"), j = r("el-upload"), le = r("el-cascader"), ae = r("el-form-item"), de = r("el-col"), oe = r("el-row"), ue = r("el-form"), re = r("el-config-provider"), se = ye("loading");
      return o(), U("div", null, [
        x(re, { locale: a(R) }, {
          default: b(() => [
            be((o(), U("div", xe, [
              x(ue, {
                model: a(l).form,
                rules: a(l).rules,
                labelWidth: d.labelWidth,
                "label-position": d.labelPosition,
                size: d.size,
                style: L({
                  maxHeight: d.dialog ? "calc(100vh - 310px)" : "10000000000px !important"
                }),
                ref_key: "formRef",
                ref: F
              }, {
                default: b(() => [
                  x(oe, { gutter: 20 }, {
                    default: b(() => [
                      (o(!0), U(A, null, z(a(l).treatedFormConfig.filter(
                        (t) => !t.hidden
                      ), (t, D) => (o(), m(de, {
                        key: t.key,
                        span: t.span,
                        style: L(t.elColStyle || "")
                      }, {
                        default: b(() => [
                          t.type === "slot" ? f(h.$slots, t.slotName, {
                            key: 0,
                            $props: a(n),
                            $data: a(l),
                            config: t
                          }, void 0, !0) : t.type === "text" ? (o(), U("div", {
                            key: 1,
                            class: "dflex mgb10",
                            style: L([{ "text-align": "right" }, t.style])
                          }, [
                            M("div", {
                              style: L([{ width: d.labelWidth }, { "padding-right": "12px", "box-sizing": "border-box" }])
                            }, [
                              M("span", Le, P(t.label), 1)
                            ], 4),
                            Ae
                          ], 4)) : (o(), m(ae, {
                            key: 2,
                            label: `${t.label}`,
                            prop: t.key
                          }, {
                            default: b(() => [
                              t.type === "autocomplete" ? (o(), m(s, k({
                                key: 0,
                                modelValue: a(l).form[t.key],
                                "onUpdate:modelValue": (e) => a(l).form[t.key] = e,
                                modelModifiers: { trim: !0 }
                              }, t, {
                                disabled: d.type === "view" || t.disabled
                              }, v(_(t.events, t, D))), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                              t.type === "input" ? (o(), m(i, k({
                                key: 1,
                                modelValue: a(l).form[t.key],
                                "onUpdate:modelValue": (e) => a(l).form[t.key] = e,
                                modelModifiers: { trim: !0 }
                              }, t, {
                                disabled: d.type === "view" || t.disabled
                              }, v(_(t.events, t, D))), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                              t.type === "number" ? (o(), m(w, k({
                                key: 2,
                                modelValue: a(l).form[t.key],
                                "onUpdate:modelValue": (e) => a(l).form[t.key] = e,
                                modelModifiers: { trim: !0 }
                              }, t, {
                                disabled: d.type === "view" || t.disabled
                              }, v(_(t.events, t, D))), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                              t.type === "textarea" ? (o(), m(i, k({
                                key: 3,
                                modelValue: a(l).form[t.key],
                                "onUpdate:modelValue": (e) => a(l).form[t.key] = e,
                                modelModifiers: { trim: !0 }
                              }, t, {
                                disabled: d.type === "view" || t.disabled
                              }, v(_(t.events, t, D))), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                              t.type === "checkbox" ? (o(), m(E, k({
                                key: 4,
                                modelValue: a(l).form[t.key],
                                "onUpdate:modelValue": (e) => a(l).form[t.key] = e,
                                modelModifiers: { trim: !0 }
                              }, t, {
                                disabled: d.type === "view" || t.disabled
                              }, v(_(t.events, t, D))), {
                                default: b(() => [
                                  (o(!0), U(A, null, z(t.options, (e) => (o(), m(V, {
                                    key: t.optionValueKey ? e[t.optionValueKey] : e.value,
                                    label: t.optionValueKey ? e[t.optionValueKey] : e.value
                                  }, {
                                    default: b(() => [
                                      B(P(t.optionLabelKey ? e[t.optionLabelKey] : e.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["label"]))), 128))
                                ]),
                                _: 2
                              }, 1040, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                              t.type === "radio" ? (o(), m(W, k({
                                key: 5,
                                modelValue: a(l).form[t.key],
                                "onUpdate:modelValue": (e) => a(l).form[t.key] = e,
                                modelModifiers: { trim: !0 }
                              }, t, {
                                disabled: d.type === "view" || t.disabled
                              }, v(_(t.events, t, D))), {
                                default: b(() => [
                                  (o(!0), U(A, null, z(t.options, (e) => (o(), m(S, {
                                    key: t.optionValueKey ? e[t.optionValueKey] : e.value,
                                    label: t.optionValueKey ? e[t.optionValueKey] : e.value
                                  }, {
                                    default: b(() => [
                                      B(P(t.optionLabelKey ? e[t.optionLabelKey] : e.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["label"]))), 128))
                                ]),
                                _: 2
                              }, 1040, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                              t.type === "select" ? (o(), m(G, k({
                                key: 6,
                                modelValue: a(l).form[t.key],
                                "onUpdate:modelValue": (e) => a(l).form[t.key] = e,
                                modelModifiers: { trim: !0 }
                              }, t, {
                                disabled: d.type === "view" || t.disabled
                              }, v(_(t.events, t, D))), {
                                default: b(() => [
                                  (o(!0), U(A, null, z(t.options, (e) => (o(), m(q, {
                                    key: t.optionValueKey ? e[t.optionValueKey] : e.value,
                                    label: t.optionLabelKey ? e[t.optionLabelKey] : e.label,
                                    value: t.optionValueKey ? e[t.optionValueKey] : e.value
                                  }, null, 8, ["label", "value"]))), 128))
                                ]),
                                _: 2
                              }, 1040, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                              [
                                "year",
                                "month",
                                "date",
                                "dates",
                                "week",
                                "datetime",
                                "datetimerange",
                                "daterange",
                                "monthrange"
                              ].includes(t.type) ? (o(), m(Q, k({
                                key: 7,
                                type: t.type,
                                modelValue: a(l).form[t.key],
                                "onUpdate:modelValue": (e) => a(l).form[t.key] = e,
                                modelModifiers: { trim: !0 }
                              }, t, {
                                disabled: d.type === "view" || t.disabled
                              }, v(_(t.events, t, D))), null, 16, ["type", "modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                              t.type == "time" ? (o(), m(X, k({
                                key: 8,
                                type: t.type,
                                modelValue: a(l).form[t.key],
                                "onUpdate:modelValue": (e) => a(l).form[t.key] = e,
                                modelModifiers: { trim: !0 }
                              }, t, {
                                disabled: d.type === "view" || t.disabled
                              }, v(_(t.events, t, D))), null, 16, ["type", "modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                              t.type === "switch" ? (o(), m(Z, k({
                                key: 9,
                                type: "date",
                                modelValue: a(l).form[t.key],
                                "onUpdate:modelValue": (e) => a(l).form[t.key] = e,
                                modelModifiers: { trim: !0 }
                              }, t, {
                                disabled: d.type === "view" || t.disabled
                              }, v(_(t.events, t, D))), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                              t.type === "slider" ? (o(), m(g, k({
                                key: 10,
                                modelValue: a(l).form[t.key],
                                "onUpdate:modelValue": (e) => a(l).form[t.key] = e,
                                modelModifiers: { trim: !0 }
                              }, t, {
                                disabled: d.type === "view" || t.disabled
                              }, v(_(t.events, t, D))), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                              t.type === "rate" ? (o(), m(ee, k({
                                key: 11,
                                modelValue: a(l).form[t.key],
                                "onUpdate:modelValue": (e) => a(l).form[t.key] = e,
                                modelModifiers: { trim: !0 }
                              }, t, {
                                disabled: d.type === "view" || t.disabled
                              }, v(_(t.events, t, D))), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                              t.type === "color" ? (o(), m(te, k({
                                key: 12,
                                modelValue: a(l).form[t.key],
                                "onUpdate:modelValue": (e) => a(l).form[t.key] = e,
                                modelModifiers: { trim: !0 }
                              }, t, {
                                disabled: d.type === "view" || t.disabled
                              }, v(_(t.events, t, D))), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0),
                              t.type === "file" ? (o(), m(j, k({
                                key: 13,
                                modelValue: a(l).form[t.key],
                                "onUpdate:modelValue": (e) => a(l).form[t.key] = e,
                                modelModifiers: { trim: !0 }
                              }, t, {
                                action: t.action || "",
                                disabled: d.type === "view" || t.disabled
                              }, v(_(t.events, t, D))), ke({
                                default: b(() => [
                                  t.listType != "picture-card" ? (o(), m(H, {
                                    key: 0,
                                    type: "primary",
                                    size: d.size,
                                    disabled: d.type === "view" || t.disabled
                                  }, {
                                    default: b(() => [
                                      B("点击上传")
                                    ]),
                                    _: 2
                                  }, 1032, ["size", "disabled"])) : p("", !0)
                                ]),
                                _: 2
                              }, [
                                t.placeholder ? {
                                  name: "tip",
                                  fn: b(() => [
                                    M("div", ze, [
                                      M("div", {
                                        innerHTML: t.placeholder,
                                        class: "disabled"
                                      }, null, 8, Ne)
                                    ])
                                  ]),
                                  key: "0"
                                } : void 0
                              ]), 1040, ["modelValue", "onUpdate:modelValue", "action", "disabled"])) : p("", !0),
                              t.type === "cascader" ? (o(), m(le, k({
                                key: 14,
                                modelValue: a(l).form[t.key],
                                "onUpdate:modelValue": (e) => a(l).form[t.key] = e,
                                modelModifiers: { trim: !0 }
                              }, t, {
                                disabled: d.type === "view" || t.disabled
                              }, v(_(t.events, t, D))), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : p("", !0)
                            ]),
                            _: 2
                          }, 1032, ["label", "prop"]))
                        ]),
                        _: 2
                      }, 1032, ["span", "style"]))), 128))
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              }, 8, ["model", "rules", "labelWidth", "label-position", "size", "style"]),
              M("div", Oe, [
                x(H, { onClick: O }, {
                  default: b(() => [
                    B("关 闭")
                  ]),
                  _: 1
                }),
                d.type !== "view" ? (o(), m(H, {
                  key: 0,
                  type: "primary",
                  onClick: c
                }, {
                  default: b(() => [
                    B("保 存")
                  ]),
                  _: 1
                })) : p("", !0),
                f(h.$slots, "addBtns", { $data: a(l) }, void 0, !0)
              ]),
              f(h.$slots, "tip", {}, void 0, !0)
            ])), [
              [se, a(T)]
            ])
          ]),
          _: 3
        }, 8, ["locale"])
      ]);
    };
  }
}, fe = /* @__PURE__ */ ce($e, [["__scopeId", "data-v-259f052d"]]);
ne.install = function(d, K = {}) {
  d.provide("elFormDialogOptions", K), d.component("ElFormDialogChen", ne), d.component("ElFormChen", fe);
};
export {
  ne as default
};
