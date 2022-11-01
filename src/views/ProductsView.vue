<template>
  <v-container fluid class="products px-6">
    <h3>Product Listing</h3>
    <ProductCard />
  </v-container>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
};
</script>
