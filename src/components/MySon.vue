<template>
  <div>
    about 的子组件 {{ mess }}
    <p @click="ft">子传父</p>
    <h3>vuex{{ store.state.count }}</h3>
    <button @click="add">store+数字</button>
  </div>
</template>
<script setup>
import { defineProps, ref, defineEmits } from "vue";
import { useStore } from "vuex";
let o = defineProps(["mess"]);
let ss = ref("哈哈，我是子组件的数据");
console.log(o.mess);
// 自定义事件
let emit = defineEmits(["fncui"]);
function ft() {
  emit("fncui", ss);
}
let store = useStore();
function add() {
  store.commit("increment"); //mutations
}
// export default {
//     props:["mess"],
//     setup(props) {
//         console.log(props)
//     }
// }
</script>