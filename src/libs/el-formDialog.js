import ElFormDialog from "./el-formDialog.vue";
import ElFormChen from './el-form-chen.vue';

ElFormDialog.install = function (app, options = {}) {
  app.provide('elFormDialogOptions', options)
  app.component('ElFormDialogChen', ElFormDialog)
  app.component('ElFormChen', ElFormChen)
}

export default ElFormDialog