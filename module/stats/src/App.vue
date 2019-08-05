<template>
  <div id="module" class="stats">
    <router-view/>
  </div>
</template>
<script>
  export default {
    watch: {
      $route(val){
        console.log(val);
      }
    },
  }
</script>
