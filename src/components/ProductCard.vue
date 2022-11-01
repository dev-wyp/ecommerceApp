<template>
  <v-row>
    <v-col md="3" sm="4" v-for="product in allProducts" :key="product.id">
      <v-card class="mx-auto" :to="`/product/${product.id}`">
        <v-img
          class="white--text align-end"
          height="200px"
          :src="product.image"
        >
          <v-card-title class="text-left">{{ product.text }}</v-card-title>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    allProducts: [
      {
        id: 1,
        image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        text: "Top 10 Australian beaches",
      },
      {
        id: 2,
        image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        text: "Top 10 Australian beaches",
      },
      {
        id: 3,
        image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        text: "Top 10 Australian beaches",
      },
      {
        id: 4,
        image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        text: "Top 10 Australian beaches",
      },
      {
        id: 5,
        image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        text: "Top 10 Australian beaches",
      },
      {
        id: 6,
        image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        text: "Top 10 Australian beaches",
      },
    ],
  }),
};
</script>
