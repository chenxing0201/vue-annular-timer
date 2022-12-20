# vue-annular-timer

## Install
```
npm i --save-dev vue-annular-timer
cnpm i --save-dev vue-annular-timer
yarn add vue-annular-timer

```
## Usage in main.ts
```
import AnnularTimer from 'vue-annular-timer'
import 'vue-annular-timer/lib/index.css'
​
createApp(App).use(AnnularTimer).mount('#app')
```
## Usage in App.vue
```
  <div style="width: 200px;height: 200px">
    <annular-timer :defaultColor="'#00ff00'" :textSize="'40px'" :start-time="10" :step="-1" :thresholds="[
      { color: 'blue', threshold: 0.5 },
      { color: 'red', threshold: 0.25 }
    ]"></annular-timer>
  </div>
  defaultColor: 组件默认初始颜色
  textSize： 剧中文字大小
  start-time： 倒计时时间（秒）
  step：（-1:每秒减1） 
  thresholds：[color: 'blue', threshold: 0.5] 颜色渐变

```
