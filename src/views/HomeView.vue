<template>
  <div class="home primary">
    <TheBanner />
    <div class="secondary pt-8 rounded-t-xl">
      <CategoriesSection />
      <PopularitySection />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TheBanner from "@/components/TheBanner.vue";
import CategoriesSection from "@/components/Categories.vue";
import PopularitySection from "@/components/Popularity.vue";

export default {
  name: "HomeView",
  components: {
    TheBanner,
    CategoriesSection,
    PopularitySection,
  },
};
</script>
