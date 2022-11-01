<template>
  <v-app>
    <TheHeader />
    <router-view />
    <MenuBar />
  </v-app>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import MenuBar from "@/components/MenuBar.vue";

export default {
  components: {
    TheHeader,
    MenuBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
