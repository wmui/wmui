import Button from './button/index.vue'
import Badge from './badge/index.vue'
import Switch from './switch/index.vue'
import Checkbox from './checkbox/index.vue'
import Radio from './radio/index.vue'
import Select from './select/index.vue'
import Popup from './popup/index.vue'
import LazyLoad from './lazyload/index.vue'
import Tooltip from './tooltip/index.vue'
import Swipe from './swipe/index.vue'
import SwipeItem from './swipe/SwipeItem.vue'
import Scrollspy from './scrollspy/index.vue'
import Toast from './toast/index'
const version = '0.0.1'
const components = [
  Button,
  Badge,
  Checkbox,
  Radio,
  Select,
  Switch,
  Popup,
  LazyLoad,
  Tooltip,
  Swipe,
  SwipeItem,
  Scrollspy
]

const install = function (Vue) {
  if (install.installed) return
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.use(Toast)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 按需引入
export {
  install,
  version,
  Button,
  Badge,
  Checkbox,
  Radio,
  Select,
  Switch,
  Popup,
  LazyLoad,
  Tooltip,
  Swipe,
  SwipeItem,
  Scrollspy
}

// 全部引入
export default {
  install,
  version
}
