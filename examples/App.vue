<template>
  <div>组件示例</div>
  <div style="width: 200px;height: 200px">
    <annular-timer :defaultColor="'#00ff00'" :textSize="'30px'" :start-time="10" :step="-1" :thresholds="[
      { color: 'blue', threshold: 0.5 },
      { color: 'red', threshold: 0.25 }
    ]"></annular-timer>
  </div>
</template>
 
<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "App",
  components: {},
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handleClick() {
      this.count++
    }
  }
})
</script>
 
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>