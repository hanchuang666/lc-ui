import './style/index.scss'
import * as components from './component'

console.log(333333, components);
const install = (app: any) => {
  Object.keys(components).forEach((key: string) => {
    console.log(components);
    app.component(key.replace(/[A-Z]/g, (m, o) => (o ? '-' : '') + m.toLowerCase()), components[key])
  })
}

// 支持使用标签引入
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue);
}
export default {
  install,
}