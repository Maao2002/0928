<template>
  <div>
    home 组件{{ a }}
    <input type="text" v-model="obj.title" />
    <h4 @click="ff">{{ obj.title }}</h4>
    <router-link to="/view">view</router-link>
    <router-link to="/music">music</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
//
import { ref, reactive } from "vue";
export default {
  setup(props, context) {
    // 钩子包含了 created 之前的钩子
    // props 组件通信
    // context 执行上下文对象 类似 this
    console.log(props, context);
    // 定义data 凡是定义的 数据都是 data 最后必须要返回出去
    // 关于 a 业务
    let a = ref(123);
    function ff() {
      console.log("=====");
      // 没有了 this
      console.log(a.value);
    }
    // 关于 obj 业务的
    let obj = reactive({ title: "seec111" });
    // let b = "www"
    function fn() {
      console.log("----", obj.title);
    }
    fn();

    return {
      a, // data 里的属性，没有返回就是普通的变量
      obj,
      ff, // methods 里的方法 没有返回就是普通的函数
    };
  },
};
</script>
<style>
</style>