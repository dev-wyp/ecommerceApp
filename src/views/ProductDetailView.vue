<template>
  <v-container fluid class="productDetail px-6">
    <v-carousel
      hide-delimiter-background
      show-arrows-on-hover
      class="rounded-xl"
      height="200px"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <v-card flat tile class="mx-auto">
      <v-card-title class="text-h5"> Rate Our Framework </v-card-title>
      <v-card-text>
        <div class="text-left mb-12">
          <v-rating
            v-model="rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$ratingFull"
            half-increments
            hover
            dense
            size="20"
          ></v-rating>
        </div>
        If you enjoy using Vuetify, please take a few seconds to rate your
        experience with the framework. It really helps!
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="justify-space-between">
        <v-btn text> No Thanks </v-btn>
        <v-btn color="primary" text> Rate Now </v-btn>
      </v-card-actions>
    </v-card>

    <RelatedProducts />
  </v-container>
</template>

<script>
import RelatedProducts from "@/components/RelatedProduct.vue";
export default {
  components: {
    RelatedProducts,
  },
  data() {
    return {
      rating: 4.5,
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>
