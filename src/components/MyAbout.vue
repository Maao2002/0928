<template>
  <div>
    about 组件
    <p @click="fn">{{ a }}</p>
    <input type="text" v-model="a" />
    <p ref="aa" id="aa">{{ newa }}</p>
    <MySon :mess="a" @fncui="ffself"></MySon>
    <h3>{{ b }}</h3>
    <el-button type="danger">Danger</el-button>
  </div>
</template>
<script setup>
import { ref, computed, watch, onMounted } from "vue";
import MySon from "./MySon.vue";
let b = ref("11111");
function ffself(ss) {
  console.log(ss, "15====");
  b.value = ss.value;
}
// data
let a = ref("hello seec1");
// methods
let fn = function () {
  console.log(a.value);
};
// 计算属性
let newa = computed(() => {
  return a.value + "hello world";
});
// 监听
watch(a, (newvalue, oldvalue) => {
  console.log(oldvalue, newvalue);
});
// 钩子
onMounted(() => {
  let aa = document.getElementById("aa");
  console.log(aa);
});
</script>