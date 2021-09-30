<template>
  <h1><strong>Tienda</strong></h1>
  {elements }
  <StoreItems />
</template>

<script>
import StoreItems from "@/components/StoreItems.vue";

export default {
  name: "Store",
  components: {
    StoreItems,
  },
};
let elements = null;
const loadData = async () => {
  elements = await fetch("http://localhost:1337/products").then((response) =>
    response.json()
  );
  console.log("data", elements);
};
loadData();
</script>

<style></style>
