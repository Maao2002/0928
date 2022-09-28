<template>
  <div>
    <h2>{{ this.a }}</h2>
    <h2>{{ obj.name }}</h2>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup(props, context) {
    //钩子包含了create之前的钩子
    // context 执行上下文对象,类似this
    console.log(props, context);
    // 定义data，凡是定义的 数据都是data 最后必须返回出去
    const a = ref(11);
    let obj = reactive({
      name: "zs",
      age: "20",
    });
    return {
      //data里的属性，没有返回就是普通对象
      a,
      obj,
    };
  },
};
</script>

<style>
</style>