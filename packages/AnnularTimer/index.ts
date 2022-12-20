import { App } from 'vue'
import AnnularTimer from './src/annular-timer.vue'
 
// 定义 install 方法， App 作为参数
AnnularTimer.install = (app: App): void => {
    app.component(AnnularTimer.name, AnnularTimer)
}
 
export default AnnularTimer