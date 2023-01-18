<template>
  <el-config-provider :locale="locale">
    <el-dialog
      top="50px"
      modal-append-to-body
      :title="title || '模态框'"
      v-model="dialogVisible"
      :width="width || '800px'"
      :destroyOnClose="destroyOnClose"
      :closeOnClickModal="closeOnClickModal"
      @close="closedialog"
    >
      <div v-if="dialogVisible">
        <div class="formdialog" v-loading="isLoading">
          <el-form
            :model="allData.form"
            :rules="allData.rules"
            :labelWidth="labelWidth"
            :label-position="labelPosition"
            :size="size"
            :style="{
              maxHeight: dialog
                ? 'calc(100vh - 310px)'
                : '10000000000px !important',
            }"
            ref="formRef"
          >
            <el-row :gutter="20">
              <el-col
                v-for="(config, index) in allData.treatedFormConfig.filter(
                  (config) => !config.hidden
                )"
                :key="config.key"
                :span="config.span"
                :style="config.elColStyle || ''"
              >
                <slot
                  v-if="config.type === 'slot'"
                  :name="config.slotName"
                  :$props="props"
                  :$data="allData"
                  :config="config"
                />
                <div
                  v-else-if="config.type === 'text'"
                  class="dflex mgb10"
                  style="text-align: right"
                  :style="config.style"
                >
                  <div
                    :style="{ width: labelWidth }"
                    style="padding-right: 12px; box-sizing: border-box"
                  >
                    <span class="mgr10">{{ config.label }}</span>
                  </div>
                  <div class="flex"></div>
                </div>

                <el-form-item
                  v-else
                  :label="`${config.label}`"
                  :prop="config.key"
                >
                  <!-- 自动补全输入框 -->
                  <el-autocomplete
                    v-if="config.type === 'autocomplete'"
                    v-model.trim="allData.form[config.key]"
                    v-bind="config"
                    :disabled="type === 'view' || config.disabled"
                    v-on="eventsAddParams(config.events, config, index)"
                  />
                  <!-- 输入框 -->
                  <el-input
                    v-if="config.type === 'input'"
                    v-model.trim="allData.form[config.key]"
                    v-bind="config"
                    :disabled="type === 'view' || config.disabled"
                    v-on="eventsAddParams(config.events, config, index)"
                  />
                  <!-- 数字 -->
                  <el-input-number
                    v-if="config.type === 'number'"
                    v-model.trim="allData.form[config.key]"
                    v-bind="config"
                    :disabled="type === 'view' || config.disabled"
                    v-on="eventsAddParams(config.events, config, index)"
                  />
                  <!-- 文本域 -->
                  <el-input
                    v-if="config.type === 'textarea'"
                    v-model.trim="allData.form[config.key]"
                    v-bind="config"
                    :disabled="type === 'view' || config.disabled"
                    v-on="eventsAddParams(config.events, config, index)"
                  >
                  </el-input>
                  <!-- 多选 -->
                  <el-checkbox-group
                    v-if="config.type === 'checkbox'"
                    v-model.trim="allData.form[config.key]"
                    v-bind="config"
                    :disabled="type === 'view' || config.disabled"
                    v-on="eventsAddParams(config.events, config, index)"
                  >
                    <el-checkbox
                      v-for="item in config.options"
                      :key="
                        config.optionValueKey
                          ? item[config.optionValueKey]
                          : item.value
                      "
                      :label="
                        config.optionValueKey
                          ? item[config.optionValueKey]
                          : item.value
                      "
                    >
                      {{
                        config.optionLabelKey
                          ? item[config.optionLabelKey]
                          : item.label
                      }}
                    </el-checkbox>
                  </el-checkbox-group>
                  <!-- 单选 -->
                  <el-radio-group
                    v-if="config.type === 'radio'"
                    v-model.trim="allData.form[config.key]"
                    v-bind="config"
                    :disabled="type === 'view' || config.disabled"
                    v-on="eventsAddParams(config.events, config, index)"
                  >
                    <el-radio
                      v-for="item in config.options"
                      :key="
                        config.optionValueKey
                          ? item[config.optionValueKey]
                          : item.value
                      "
                      :label="
                        config.optionValueKey
                          ? item[config.optionValueKey]
                          : item.value
                      "
                    >
                      {{
                        config.optionLabelKey
                          ? item[config.optionLabelKey]
                          : item.label
                      }}
                    </el-radio>
                  </el-radio-group>
                  <!-- 下拉 -->
                  <el-select
                    v-if="config.type === 'select'"
                    v-model.trim="allData.form[config.key]"
                    v-bind="config"
                    :disabled="type === 'view' || config.disabled"
                    v-on="eventsAddParams(config.events, config, index)"
                  >
                    <el-option
                      v-for="item in config.options"
                      :key="
                        config.optionValueKey
                          ? item[config.optionValueKey]
                          : item.value
                      "
                      :label="
                        config.optionLabelKey
                          ? item[config.optionLabelKey]
                          : item.label
                      "
                      :value="
                        config.optionValueKey
                          ? item[config.optionValueKey]
                          : item.value
                      "
                    />
                  </el-select>
                  <!-- 日期 -->
                  <el-date-picker
                    v-if="
                      [
                        'year',
                        'month',
                        'date',
                        'dates',
                        'week',
                        'datetime',
                        'datetimerange',
                        'daterange',
                        'monthrange',
                      ].includes(config.type)
                    "
                    :type="config.type"
                    v-model.trim="allData.form[config.key]"
                    v-bind="config"
                    :disabled="type === 'view' || config.disabled"
                    v-on="eventsAddParams(config.events, config, index)"
                  >
                  </el-date-picker>
                  <!-- 时间 -->
                  <el-time-picker
                    v-if="config.type == 'time'"
                    :type="config.type"
                    v-model.trim="allData.form[config.key]"
                    v-bind="config"
                    :disabled="type === 'view' || config.disabled"
                    v-on="eventsAddParams(config.events, config, index)"
                  >
                  </el-time-picker>
                  <!-- 开关 -->
                  <el-switch
                    v-if="config.type === 'switch'"
                    type="date"
                    v-model.trim="allData.form[config.key]"
                    v-bind="config"
                    :disabled="type === 'view' || config.disabled"
                    v-on="eventsAddParams(config.events, config, index)"
                  >
                  </el-switch>
                  <!-- 滑块 -->
                  <el-slider
                    v-if="config.type === 'slider'"
                    v-model.trim="allData.form[config.key]"
                    v-bind="config"
                    :disabled="type === 'view' || config.disabled"
                    v-on="eventsAddParams(config.events, config, index)"
                  >
                  </el-slider>
                  <!-- 评分 -->
                  <el-rate
                    v-if="config.type === 'rate'"
                    v-model.trim="allData.form[config.key]"
                    v-bind="config"
                    :disabled="type === 'view' || config.disabled"
                    v-on="eventsAddParams(config.events, config, index)"
                  ></el-rate>
                  <!-- 颜色 -->
                  <el-color-picker
                    v-if="config.type === 'color'"
                    v-model.trim="allData.form[config.key]"
                    v-bind="config"
                    :disabled="type === 'view' || config.disabled"
                    v-on="eventsAddParams(config.events, config, index)"
                  ></el-color-picker>
                  <!-- 文件上传 -->
                  <el-upload
                    v-if="config.type === 'file'"
                    v-model.trim="allData.form[config.key]"
                    v-bind="config"
                    :action="config.action || ''"
                    :disabled="type === 'view' || config.disabled"
                    v-on="eventsAddParams(config.events, config, index)"
                  >
                    <el-button
                      v-if="config['listType'] != 'picture-card'"
                      type="primary"
                      :size="size"
                      :disabled="type === 'view' || config.disabled"
                      >点击上传</el-button
                    >
                    <template #tip v-if="config.placeholder">
                      <div class="el-upload__tip">
                        <div v-html="config.placeholder" class="disabled"></div>
                      </div>
                    </template>
                  </el-upload>
                  <!-- 评分 -->
                  <el-cascader
                    v-if="config.type === 'cascader'"
                    v-model.trim="allData.form[config.key]"
                    v-bind="config"
                    :disabled="type === 'view' || config.disabled"
                    v-on="eventsAddParams(config.events, config, index)"
                  ></el-cascader>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <div class="text-center mgt20">
            <el-button @click="closedialog">关 闭</el-button>
            <el-button v-if="type !== 'view'" type="primary" @click="onsubmit"
              >保 存</el-button
            >
            <slot name="addBtns" :$data="allData" />
          </div>
          <slot name="tip" />
        </div>
      </div>
    </el-dialog>
  </el-config-provider>
</template>

<script setup>
import { reactive, ref, watch, nextTick, computed } from "vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";

const emits = defineEmits(["closedialog", "onsubmit", "updata:props.visible"]);

let props = defineProps({
  visible: {
    // 显示/隐藏
    type: Boolean,
    default: false,
  },
  title: {
    // 标题
    type: String,
    default: "",
  },
  width: {
    // 宽度
    type: String,
    default: "",
  },
  destroyOnClose: {
    type: Boolean,
    default: true,
  },
  closeOnClickModal: {
    // 点击遮罩是否关闭弹窗
    type: Boolean,
    default: false,
  },
  dialog: {
    // 是否是弹窗的表单
    type: Boolean,
    default: false,
  },
  type: {
    // 类型
    type: String,
    default: "add", // add or edit or view
  },
  labelPosition: {
    // 标签的位置 right/left/top
    type: String,
    default: "right",
  },
  labelWidth: {
    // 标签宽度
    type: String,
    default: "140px",
  },
  formConfig: {
    // 表单配置
    type: Array,
    default: () => [],
  },
  formData: {
    // 表单数据
    type: Object,
    default: () => {},
  },
  size: {
    // 表达尺寸 default/small/large
    type: String,
    default: "",
  },
  submitLoading: {
    // 提交是否显示loading状态
    type: Boolean,
    default: true,
  },
  language: {
    // 语言
    type: String,
    default: "zh-cn",
    validator(value) {
      return ["zh-cn", "en"].includes(value);
    },
  },
});

let isLoading = ref(false);
let allData = reactive({
  form: {},
  rules: {},
  treatedFormConfig: [],
  saveFormConfig: [],
  saveRules: {},
  saveForm: {},
});
const formRef = ref(null);
const locale = computed(() => (props.language === "zh-cn" ? zhCn : en));
let dialogVisible = computed({
  get() {
    return props.visible;
  },
  set(newValue) {
    emits("updata:props.visible", newValue);
  },
});

watch(
  () => props.visible,
  () => {
    if (props.visible) {
      init();
    }
  }
);

watch(
  () => props.formConfig,
  () => {
    init();
  },
  { immediate: true, deep: true }
);

function init() {
  let form = {};
  let rules = {};
  allData.form = {};
  allData.rules = {};
  allData.treatedFormConfig = [];

  allData.saveFormConfig = [];
  allData.saveRules = {};
  allData.saveForm = {};

  allData.treatedFormConfig = [...props.formConfig];
  allData.treatedFormConfig.forEach((config, index) => {
    if (config.type === "text" || config.type === "slot") return;
    form[config.key] =
      props.formData[config.key] ||
      props.formData[config.key] === 0 ||
      props.formData[config.key] === false
        ? props.formData[config.key]
        : config.defaultValue ||
          config.defaultValue == undefined ||
          config.defaultValue === false
        ? config.defaultValue
        : config.type === "number"
        ? 0
        : "";
    // 如果有追加参数
    if (config.addKeys && config.addKeys.length) {
      config.addKeys.forEach((key) => {
        form[key] =
          props.formData[key] ||
          props.formData[key] === 0 ||
          props.formData[key] === false
            ? props.formData[key]
            : "";
      });
    }
    // 如果是必填，则生成规则
    let rule = {
      required: !!config.required,
    };
    if (config.validator) {
      rule.validator = config.validator;
    } else {
      rule.message = config.errorMsg || config.placeholder;
    }
    rules[config.key] = rule;

    // 如果是日期，并且有配置日期选择限制
    if (
      config.type === "date" &&
      config.disabledDateFormKey &&
      config.operator
    ) {
      config.pickerOptions = {
        disabledDate(time) {
          if (form[config.disabledDateFormKey]) {
            let date = new Date(form[config.disabledDateFormKey]);
            let val =
              config.operator === ">"
                ? time.getTime() > date.getTime()
                : time.getTime() < date.getTime();
            return date ? val : false;
          }
          return false;
        },
      };
    }
  });
  allData.form = form;

  allData.rules = rules;
  reset();
  // 保存formConfig,rules,form
  allData.saveFormConfig = [...props.formConfig];
  allData.saveRules = {
    ...rules,
  };
  allData.saveForm = {
    ...form,
  };
}
// 给事件回调函数添加参数
function eventsAddParams(events, config, index) {
  let rEvents = {};

  for (const key in events) {
    rEvents[key] = () => {
      events[key](
        allData.form[config.key],
        config,
        index,
        allData.treatedFormConfig,
        allData.form,
        props.formData
      );
    };
  }
  return rEvents;
}
function onsubmit() {
  formRef?.value?.validate((valid) => {
    if (valid) {
      let data = {
        ...allData.form,
      };

      if (props.submitLoading) {
        isLoading.value = true;
        emits(
          "onsubmit",
          props.type,
          data,
          props.formData,
          closedialog,
          hideLoading
        );
      } else {
        closedialog();
      }
    } else {
      console.log("error submit!!");
      return false;
    }
  });
}
function showLoading() {
  isLoading.value = true;
}
function hideLoading() {
  isLoading.value = false;
}
function closedialog() {
  hideLoading();
  emits("closedialog");
  return false;
}
function reset() {
  nextTick(() => {
    formRef?.value?.clearValidate();
  });
}
</script>
<style lang="less" scoped>
.dflex {
  display: flex;
}
.flex {
  flex: 1;
}
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.mgb10 {
  margin-bottom: 10px;
}
.mgt20 {
  margin-top: 20px;
}
.disabled {
  color: #c0c4cc !important;
  cursor: not-allowed;
}
:deep(.el-dialog__body) {
  padding: 0px 0px 20px 0px;
}
:deep(.el-form-item__label) {
  height: 34px;
}

:deep(.el-input-number input) {
  text-align: left;
}

:deep(.el-slider) {
  padding: 0 10px;
}

:deep(.el-rate) {
  position: relative;
  top: 10px;
}

:deep(.el-form-item--mini) {
  .el-slider {
    position: relative;
    top: -7px;
  }
  .el-rate {
    position: relative;
    top: 5px;
  }
}

:deep(.el-form-item--small) {
  .el-slider {
    position: relative;
    top: -5px;
  }
  .el-rate {
    position: relative;
    top: 5px;
  }
}

.formdialog {
  margin-top: 30px;
}

.el-form {
  padding: 0px 20px;
  margin: 10px 0;
  min-height: 100px;
  overflow-y: auto;
}

.dsc {
  height: 45px;
  background: #f7f9fc;
  padding-left: 10px;
  line-height: 45px;
  // font-size: 0.72917vw;
  color: rgb(51, 119, 255);
  i {
    color: rgb(51, 119, 255);
  }
}
</style>

