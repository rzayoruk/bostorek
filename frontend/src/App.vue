<template>
  <NavBar />
  <RouterView />
  <TheFooter />
</template>
<script>
import NavBar from "./components/NavBar.vue"
import TheFooter from "./components/TheFooter.vue"
export default {
  name: "App",
  components: {
    NavBar,
    TheFooter,
  },
}
</script>
<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  margin: auto 0;
}
</style>
