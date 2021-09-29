<template>
  <Carousel />
  <Team />
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";
import Team from "@/components/Team.vue";

export default {
  name: "Home",
  components: {
    Team,
    Carousel,
  },
};
</script>
