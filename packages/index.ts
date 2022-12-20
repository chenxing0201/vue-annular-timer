import { App } from 'vue'
import AnnularTimer from './AnnularTimer'

// 所有组件列表
const components = [AnnularTimer ]

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
    // 遍历注册所有组件
    components.map((component) => app.component(component.name, component))
}

export {
    AnnularTimer
}

export default {
    install
}
