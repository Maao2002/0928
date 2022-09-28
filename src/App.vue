<template>
  <div>
    <h3>vue3.0</h3>
    <MyHome></MyHome>
    <MyAbout></MyAbout>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyHome from "./components/MyHome.vue"
import MyAbout from "./components/MyAbout.vue"
export default {
  name: 'App',
  components: {
    // HelloWorld
    MyHome,
    MyAbout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
