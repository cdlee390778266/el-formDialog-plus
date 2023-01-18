<template>
  <div id="app">
    <el-button @click="open('add', '新增表单弹窗')">新增表单弹窗</el-button>
    <el-button @click="open('edit', '编辑表单弹窗')">编辑表单弹窗</el-button>
    <el-button @click="open('view', '编辑表单弹窗')">查看表单弹窗</el-button>
    <!-- 表单弹框 -->
    <ElFormDialogChen
      ref="formDialog"
      v-bind="dialog"
      @closedialog="dialog.visible = false"
      @onsubmit="dialog.onsubmit"
    >
      <template #slotTest="{ $data, $props, config }">
        <el-form-item label="插槽输入框" prop="slotTest">
          <el-input
            v-model="$data.form.slotTest"
            :disabled="$props.type === 'view' || config.disabled"
          />
        </el-form-item>
      </template>
    </ElFormDialogChen>
    <!-- 可配置表单 -->
    <ElFormChen
      v-bind="form"
      @onsubmit="form.onsubmit"
      style="padding-bottom: 40px"
    >
      <template #slotTest="{ $data, $props, config }">
        <el-form-item label="插槽输入框" prop="slotTest">
          <el-input
            v-model="$data.form.slotTest"
            :disabled="$props.type === 'view' || config.disabled"
          />
        </el-form-item>
      </template>
    </ElFormChen>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
let defaultFormConfig = reactive([
  // type支持cascader、autocomplete、input、slot、text、number、select、checkbox、radio、year、month、date、dates、week、datetime、datetimerange、daterange、monthrange、time、switch、slider、rate、color、textarea,属性同element-plus相关表单控件的属性,事件同element-plus相关表单控件的事件
  {
    type: "autocomplete", // 控件类型 input/select
    key: "autocomplete", // v-model绑定的键名
    label: "自动补全输入框", // 控件名称
    required: false, // 是否必须
    span: 24, // 控件整体占用宽度（同col）
    placeholder: "请输入",
    defaultValue: "", // 默认值
    style: "width: 100%", // 控件样式
    elColStyle: "",
    "fetch-suggestions": querySearch,
    events: {
      // 事件同el-autocomplete事件 https://element-plus.gitee.io/zh-CN/component/autocomplete.html#%E4%BA%8B%E4%BB%B6
      blur: handle,
      focus: handle,
      change: handle,
      input: handle,
      clear: handle,
    },
  },
  {
    type: "input", // 控件类型
    key: "name", // v-model绑定的键名
    label: "输入框", // 控件名称
    required: false, // 是否必须
    span: 12, // 控件整体占用宽度（同col）
    placeholder: "请输入",
    defaultValue: "默认值", // 默认值
    style: "width: 100%", // 控件样式
    elColStyle: "",
    addAttrs: ["slotTest"],
    validator: validator,
    events: {
      // 事件同el-input事件 https://element-plus.gitee.io/zh-CN/component/input.html#%E4%BA%8B%E4%BB%B6
      blur: handle,
      focus: handle,
      change: handle,
      input: handle,
      clear: handle,
    },
  },
  {
    type: "slot", // 插槽类型
    slotName: "slotTest", //插槽名字
    span: 12, // 控件整体占用宽度（同col）
  },
  {
    type: "text", // 文本类型
    label: "文本类型", //文字
    span: 24,
    style: "font-weight: bold",
  },
  {
    type: "number", // 控件类型 number
    key: "code", // 键名
    label: "数字输入框", // 控件名称
    required: true, // 是否必须
    span: 12, // 控件整体占用宽度（同col）
    controls: false,
    placeholder: "请输入",
    defaultValue: 0, // 默认值
    disabled: true,
    style: "width: 100%", // 控件样式
    events: {
      // 事件同el-input-number事件 https://element-plus.gitee.io/zh-CN/component/input-number.html#%E4%BA%8B%E4%BB%B6
      blur: handle,
      focus: handle,
      change: handle,
      input: handle,
      clear: handle,
    },
  },
  {
    type: "select",
    key: "projectId",
    label: "下拉",
    required: true,
    span: 12,
    placeholder: "请选择",
    style: "width: 100%",
    optionLabelKey: "label",
    optionValueKey: "value",
    options: [
      {
        label: "青岛POC",
        value: 1,
      },
      {
        label: "青烟厂智能安全生产监管平台",
        value: 2,
      },
      {
        label: "D-AIOT平台全局测试",
        value: 3,
      },
    ],
    events: {
      // 事件同el-select事件https://element-plus.gitee.io/zh-CN/component/time-select.html#%E4%BA%8B%E4%BB%B6
      change: handle,
      "visible-change": handle,
      "remove-tag": handle,
      blur: handle,
      focus: handle,
      clear: handle,
    },
  },
  {
    type: "select",
    key: "productId",
    label: "下拉新增控件",
    required: true,
    span: 24,
    placeholder: "请选择产品归属",
    style: "width: 100%",
    optionLabelKey: "name",
    optionValueKey: "id",
    options: [
      {
        id: 1,
        name: "电机-非直连",
      },
      {
        id: 2,
        name: "ONVIF摄像头",
      },
      {
        id: 3,
        name: "大数据关联产品",
      },
    ],
    addFormConfig: [
      {
        type: "select",
        key: "parentId",
        label: "新增的控件",
        required: true,
        span: 24,
        placeholder: "请选择",
        style: "width: 100%",
        optionLabelKey: "label",
        optionValueKey: "value",
        options: [
          {
            label: "测试",
            value: 1,
          },
        ],
      },
    ],
    events: {
      change: handleProduct,
    },
  },
  {
    type: "checkbox",
    key: "checkbox",
    label: "多选框",
    required: true,
    span: 24,
    placeholder: "请选择",
    style: "width: 100%",
    optionLabelKey: "label",
    optionValueKey: "value",
    defaultValue: [1],
    options: [
      {
        label: "青岛POC",
        value: 1,
      },
      {
        label: "青烟厂智能安全生产监管平台",
        value: 2,
      },
      {
        label: "D-AIOT平台全局测试",
        value: 3,
      },
    ],
  },
  {
    type: "radio",
    key: "radio",
    label: "单选",
    required: true,
    span: 24,
    placeholder: "请选择项目归属",
    style: "width: 100%",
    optionLabelKey: "label",
    optionValueKey: "value",
    defaultValue: 1,
    options: [
      {
        label: "青岛POC",
        value: 1,
      },
      {
        label: "青烟厂智能安全生产监管平台",
        value: 2,
      },
      {
        label: "D-AIOT平台全局测试",
        value: 3,
      },
    ],
    events: {
      // 事件同el-radio事件https://element-plus.gitee.io/zh-CN/component/radio.html#radio-%E4%BA%8B%E4%BB%B6
      change: handle,
      "visible-change": handle,
      "remove-tag": handle,
      blur: handle,
      focus: handle,
      clear: handle,
    },
  },
  {
    type: "datetime",
    key: "date",
    label: "日期",
    span: 24,
    rows: 4,
    maxlength: 200,
    disabled: false,
    placeholder: "请选择日期",
    style: "width: 100%",
  },
  {
    type: "time",
    key: "time",
    label: "时刻",
    span: 24,
    rows: 4,
    maxlength: 200,
    disabled: false,
    placeholder: "请选择时刻",
    style: "width: 100%",
  },
  {
    type: "switch",
    key: "switch",
    label: "开关",
    span: 24,
    rows: 4,
    maxlength: 200,
    required: false,
    disabled: false,
    placeholder: "请选择",
    style: "width: 100%",
  },
  {
    type: "slider",
    key: "slider",
    label: "滑块",
    span: 24,
    rows: 4,
    maxlength: 200,
    disabled: false,
    placeholder: "请选择",
  },
  {
    type: "rate",
    key: "rate",
    label: "评分",
    span: 24,
    rows: 4,
    maxlength: 200,
    disabled: false,
    placeholder: "请选择",
  },
  {
    type: "color",
    key: "color",
    label: "颜色",
    span: 24,
    rows: 4,
    maxlength: 200,
    disabled: false,
    placeholder: "请选择",
    defaultValue: "rgba(255, 69, 0, 0.68)",
  },
  {
    type: "file",
    key: "file",
    label: "文件",
    span: 24,
    rows: 4,
    fileList: [
      {
        name: "food.jpeg",
        url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
      },
      {
        name: "food2.jpeg",
        url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
      },
    ],
    showFileList: false,
    listType: "text",
    disabled: false,
    placeholder: "只能上传jpg/png文件，且不超过500kb",
  },
  {
    type: "textarea",
    key: "describe",
    label: "描述",
    span: 24,
    rows: 4,
    maxlength: 200,
    disabled: false,
    placeholder: "请输入描述",
    style: "width: 100%",
  },
  {
    type: "cascader",
    key: "cascader",
    label: "级联选择器",
    span: 24,
    required: false,
    disabled: false,
    placeholder: "请选择",
    style: "width: 100%",
    options: [
      {
        value: "guide",
        label: "Guide",
        children: [
          {
            value: "disciplines",
            label: "Disciplines",
            children: [
              {
                value: "consistency",
                label: "Consistency",
              },
              {
                value: "feedback",
                label: "Feedback",
              },
              {
                value: "efficiency",
                label: "Efficiency",
              },
              {
                value: "controllability",
                label: "Controllability",
              },
            ],
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "side nav",
                label: "Side Navigation",
              },
              {
                value: "top nav",
                label: "Top Navigation",
              },
            ],
          },
        ],
      },
    ],
  },
]);
let dialog = reactive({
  visible: false,
  isLoading: false,
  type: "edit",
  title: "表单模态框",
  labelPosition: "right",
  formConfig: [...defaultFormConfig],
  formData: {},
  addAttrs: [],
  onsubmit: onsubmit,
  size: "default",
  submitLoading: true,
  dialog: true,
  language: "zh-cn", // 语言zh-cn、en
});
let form = reactive({ ...dialog, dialog: false });

function open(handelType, title) {
  dialog.type = handelType;
  dialog.title = title;
  dialog.formConfig = [...defaultFormConfig];
  dialog.formData = {};
  dialog.visible = true;
}

const restaurants = ref(loadAll());
function querySearch(queryString, cb) {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value;
  // call callback function to return suggestions
  cb(results);
}

function createFilter(queryString) {
  return (restaurant) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    );
  };
}

function loadAll() {
  return [
    { value: "vue", link: "https://github.com/vuejs/vue" },
    { value: "element", link: "https://github.com/ElemeFE/element" },
    { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
    { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
    { value: "vuex", link: "https://github.com/vuejs/vuex" },
    { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
    { value: "babel", link: "https://github.com/babel/babel" },
  ];
}

// val: 值, config：配置, index：序号, treatedFormConfig：生成好的表单配置列表, formData：表单数据, srcFormData： 表单原始数据
function handle(val, config, index, treatedFormConfig, formData, srcFormData) {}
// 动态新增/减少控件
function handleProduct(
  val,
  config,
  index,
  treatedFormConfig,
  formData,
  srcFormData
) {
  console.log(val, config, index, treatedFormConfig, formData, srcFormData);
  let formConfig = [...defaultFormConfig];
  formConfig.splice(index + 1, 0, ...(config.addFormConfig || []));

  dialog.formConfig = formConfig;
  dialog.formData = formData;
}
// 自定义表单校验规则
function validator(rule, value, callback) {
  if (!value) {
    callback(new Error("不能为空"));
  } else {
    callback();
  }
}
// handelType 弹窗操作类型, formData 表单数据, srcFormData 原始表单数据, closeCb 关闭弹窗函数
function onsubmit(handelType, formData, srcFormData, closeCb) {
  new Promise((resolve, reject) => {
    setTimeout(closeCb, 1000);
  });
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  top: 20px;
  right: 20px;
  bottom: 20px;
  left: 20px;
}
</style>
