<template>
  <div id="portal">
    <router-view style="height:100%"/>
  </div>
</template>

<style lang="less">
  html,body{
    padding: 0;
    margin: 0;
    height: 100%;
  }
  #app {
    height: 100%;
  }
  #portal {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
