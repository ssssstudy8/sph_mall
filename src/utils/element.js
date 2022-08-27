import Vue from 'vue'
import {
  MessageBox,
  Button,
  Form,
  Input,
  FormItem
} from 'element-ui';

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert

const el = [
  MessageBox,
  Button,
  Form,
  Input,
  FormItem
]
export default {
  install(Vue, options) {
    el.map(el => {
      Vue.component(el.name, el)
    })
  }
}
