<template>
  <div id="app">
    <page-one />
  </div>
</template>

<script>
import PageOne from './views/PageOne'
 export default {
   name:'app',
   components:{   
     PageOne,
   },
 }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
body,
html {
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
</style>

