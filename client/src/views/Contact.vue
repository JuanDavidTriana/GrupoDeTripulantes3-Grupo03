<template>
  <main>
    <div class="container">
      <div class="row">
        <h2 class="text-center"><strong>Contacto</strong></h2>
        <br />
        <br />
        <ContactForm />
      </div>
    </div>
  </main>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "Contact",
  components: {
    ContactForm,
  },
};
</script>

<style></style>
