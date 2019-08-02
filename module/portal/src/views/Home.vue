<template>
  <div class="page-home">
    <div class="header">
      <router-link to="/monitor/a">monitor/a</router-link> |
      <router-link to="/monitor/b">monitor/b</router-link> |
      <router-link to="/stats/a">stats/a</router-link> |
      <router-link to="/stats/b">stats/b</router-link>
    </div>
    <div class="main">
      <div class="aside">

      </div>
      <div class="view">

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
}
</script>

<style lang="less">
  .page-home{
    height: 100%;
    display: flex;
    flex-direction: column;
    .header {
      height: 30px
      background-color: red;
    }
    .main {
      flex: 1;
      display: flex;
      .aside {
        width: 200px;
        background-color: blue;
      }
      .view {
        background-color: grey;
      }
    }
  }

</style>
