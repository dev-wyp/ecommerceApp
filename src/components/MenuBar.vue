<template>
  <v-tabs
    class="custom-tabs"
    v-model="tab"
    background-color="#fff"
    color="primary"
    centered
    icons-and-text
    fixed-tabs
    height="60px"
    optional
    mobile-breakpoint="959"
  >
    <v-tabs-slider></v-tabs-slider>

    <v-tab v-for="(menu, i) in menuList" :key="i" :to="menu.route">
      {{ menu.title }}
      <v-icon>{{ menu.icon }}</v-icon>
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: "MenuBar",
  data() {
    return {
      menuList: [
        {
          route: "/",
          title: "Home",
          icon: "mdi-phone",
        },
        {
          route: "/products",
          title: "Product",
          icon: "mdi-account-box",
        },
        {
          route: "/about",
          title: "About",
          icon: "mdi-heart",
        },
        {
          route: "/account",
          title: "Account",
          icon: "mdi-heart",
        },
      ],
      tab: null,
    };
  },
};
</script>

<style>
.v-tabs-bar {
  display: none !important;
}
.v-tabs-bar--is-mobile {
  display: flex !important;
}

.custom-tabs {
  position: fixed;
  bottom: 0;
  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2),
    0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);
}
</style>
