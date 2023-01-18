import {
	createApp
} from 'vue'

import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

import App from './example/App.vue'
import ElFormDialogChen from "../lib/el-form-dialog-chen-plus.mjs";
import '../lib/style.css'
// import ElFormDialogChen from "./libs/el-formDialog";

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}
app.use(ElementPlus, {
	zhCn
})
app.use(ElFormDialogChen)

app.mount('#app')